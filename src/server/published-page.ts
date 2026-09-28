import { createServerFn } from '@tanstack/react-start'

interface PublishedPageInput {
  path: string
  locale: string
  /** Optional release dir (releases/<id>). Omitted → current production root. */
  releaseId?: string
}

interface PublishedPageRecord {
  path?: string
  slug?: string
  title?: string
  seoTitle?: string
  seoDescription?: string
  seoImage?: string
  fragment?: string
  locale?: string
  preset?: { json?: unknown }
}

interface PublishedPageMeta {
  path: string
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  seoImage: string
  fragment: string
}

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue }

interface PublishedPageResult {
  page: PublishedPageMeta
  html: string
  navigation: { header?: JsonValue[]; footer?: JsonValue[] } | null
  siteName: string
  logos: { header?: string; footer?: string }
  locale: string
  fallbackLocale?: string
  siteUrl: string
}

interface SiteIndexEntry {
  code?: string
  domain?: string
  defaultLocale?: string
}

const storefrontSiteCode = 'global'
// Published content source. Dev: local public/sites/ wins — it is synced by
// prd-admin publish (TMS_WEB_DIR / PRD_WEB_DIR), so edits and re-publishes
// show immediately. Production: S3 (PUBLISHED_ORIGIN, e.g. the S3 /static
// base) is the source of truth — a build-time local copy must never shadow
// freshly published content, so remote is tried first and local is only an
// offline fallback. Release-scoped paths (releases/<id>/) only exist remotely.
const publishOrigin = (process.env.PUBLISHED_ORIGIN || '').replace(/\/+$/, '')

/**
 * Preserve publish-time loading decisions while giving the first real hero
 * image an explicit high fetch priority. Logos, icons, and avatars should not
 * compete with page content for the browser's first image slot.
 */
function addPublishedImageHints(html: string): string {
  let priorityAssigned = false
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    if (
      priorityAssigned
      || !/\bloading\s*=\s*["']eager["']/i.test(tag)
      || /\b(?:logo|icon|avatar)\b/i.test(tag)
      || /\bfetchpriority\s*=/i.test(tag)
    ) return tag
    priorityAssigned = true
    return `${tag.slice(0, -1)} fetchpriority="high">`
  })
}

const STATIC_PUBLISHED_ASSET_EXT = /\.(?:png|jpe?g|gif|svg|webp|avif|ico|css|js|mjs|cjs|json|txt|xml|pdf|woff2?|ttf|eot|otf|mp4|webm|mp3|br|gz|map)$/i

/**
 * Localize internal links embedded in published fragments.
 *
 * Fragments are cached/published independently from the storefront runtime,
 * so an older fragment can survive a partial publish and still contain clean
 * root links such as `/about`. On a zh-CN page that navigates to the English
 * route. Rewrite only paths that are known published pages (plus their
 * dynamic groups), leaving app routes, assets, anchors and external links
 * untouched.
 */
function localizePublishedInternalLinks(
  html: string,
  pages: PublishedPageRecord[],
  locale: string,
): string {
  const pagePaths = new Set<string>();
  const dynamicPrefixes = new Set<string>();
  const slugToPath = new Map<string, string>();

  for (const page of pages) {
    const pathValue = String(page.path || '').trim();
    const normalized = pathValue === '/' || pathValue === ''
      ? '/'
      : `/${pathValue.replace(/^\/+|\/+$/g, '')}`;
    pagePaths.add(normalized);
    const segments = normalized.split('/').filter(Boolean);
    if (segments.length >= 2) dynamicPrefixes.add(`/${segments[0]}/`);
    if (page.slug) slugToPath.set(String(page.slug), normalized);
  }

  const prefix = locale === 'en' ? '' : `/${locale}`;
  const localize = (path: string): string => {
    if (!prefix || path === prefix || path.startsWith(`${prefix}/`)) return path;
    return path === '/' ? `${prefix}/` : `${prefix}${path}`;
  };

  return html.replace(/\bhref=(['"])([^'"]*)\1/gi, (match, quote: string, rawUrl: string) => {
    if (/^(?:https?:)?\/\//i.test(rawUrl)) return match;
    const parts = rawUrl.match(/^([^?#]*)([?#].*)?$/);
    const pathname = parts?.[1] || '';
    const suffix = parts?.[2] || '';
    if (STATIC_PUBLISHED_ASSET_EXT.test(pathname)) return match;

    const isHtml = /\.html$/i.test(pathname);
    if (!rawUrl.startsWith('/') && !isHtml) return match;

    let cleanPath: string;
    if (isHtml) {
      const bare = pathname.replace(/^\.?\//, '').replace(/\.html$/i, '');
      cleanPath = !bare || bare.toLowerCase() === 'index'
        ? '/'
        : slugToPath.get(bare) || `/${bare}`;
    } else {
      const normalized = pathname.replace(/\/+$/, '') || '/';
      const known = pagePaths.has(normalized)
        || [...dynamicPrefixes].some((group) => normalized.startsWith(group));
      if (!known) return match;
      cleanPath = normalized;
    }
    return `href=${quote}${localize(cleanPath)}${suffix}${quote}`;
  });
}

/** Test hook: the TTL cache outlives per-test fetch stubs — reset between tests. */
export function clearPublishedCacheForTests() {
  publishedTextCache.clear();
  publishedJsonCache.clear();
}

// Share lazy module loading across the concurrent header/footer/page reads.
let localFileSystem: Promise<typeof import('node:fs/promises')> | undefined

async function readLocalPublishedText(relativePath: string): Promise<string | null> {
  try {
    const { readFile } = await (localFileSystem ??= import('node:fs/promises'))
    const { resolve } = await import('node:path')
    return await readFile(resolve(process.cwd(), 'public', 'sites', relativePath), 'utf8')
  } catch {
    return null
  }
}

async function readRemotePublishedText(relativePath: string): Promise<string | null> {
  if (!publishOrigin) return null
  try {
    const response = await fetch(`${publishOrigin}/${relativePath}`, {
      cache: 'no-store',
      headers: { Accept: 'text/html, application/json;q=0.9, */*;q=0.8' },
      signal: AbortSignal.timeout(8000),
    })
    return response.ok ? response.text() : null
  } catch {
    return null
  }
}

// Release 产物按 releaseId 不可变(sites.json/pages.json/片段一经发布不再变),
// 进程内缓存避免每次导航重复走远程拉取。当前生产根路径使用短 TTL，发布后
// 不需要重启进程即可在下一轮 TTL 后看到新内容；开发和测试默认关闭，保留
// 本地编辑立即生效的行为。可通过 PUBLISHED_CACHE_TTL_MS 调整。
const configuredPublishedCacheTtl = process.env.PUBLISHED_CACHE_TTL_MS;
const PUBLISHED_CACHE_TTL_MS = configuredPublishedCacheTtl !== undefined
  ? Math.max(0, Number(configuredPublishedCacheTtl) || 0)
  : process.env.NODE_ENV === 'production'
    ? 60_000
    : 0;

interface PublishedCacheEntry<T> {
  at: number;
  value: T;
}

const publishedTextCache = new Map<string, PublishedCacheEntry<string | null>>();
const publishedJsonCache = new Map<string, PublishedCacheEntry<unknown>>();

function isReleaseScopedPath(relativePath: string): boolean {
  return /\/releases\/[^/]+\//.test(relativePath);
}

async function readPublishedText(relativePath: string): Promise<string | null> {
  const releaseScoped = isReleaseScopedPath(relativePath);
  const cacheable = releaseScoped || PUBLISHED_CACHE_TTL_MS > 0;
  const cached = cacheable ? publishedTextCache.get(relativePath) : undefined;
  if (cached && (releaseScoped || Date.now() - cached.at < PUBLISHED_CACHE_TTL_MS)) {
    return cached.value;
  }
  // Dev: local-first (instant re-publishes). Production: remote-first so the
  // freshly published S3 version always wins over any build-time copy.
  const preferRemote = process.env.NODE_ENV === 'production' || releaseScoped;
  const text = preferRemote
    ? (await readRemotePublishedText(relativePath)) ?? (await readLocalPublishedText(relativePath))
    : (await readLocalPublishedText(relativePath)) ?? (await readRemotePublishedText(relativePath));
  if (cacheable) publishedTextCache.set(relativePath, { at: Date.now(), value: text });
  return text;
}

async function readJson<T>(relativePath: string): Promise<T | null> {
  const releaseScoped = isReleaseScopedPath(relativePath);
  const cacheable = releaseScoped || PUBLISHED_CACHE_TTL_MS > 0;
  const cached = cacheable ? publishedJsonCache.get(relativePath) : undefined;
  if (cached && (releaseScoped || Date.now() - cached.at < PUBLISHED_CACHE_TTL_MS)) {
    return cached.value as T | null;
  }
  const text = await readPublishedText(relativePath)
  if (!text) return null
  try {
    const value = JSON.parse(text) as T;
    if (cacheable) publishedJsonCache.set(relativePath, { at: Date.now(), value });
    return value
  } catch {
    if (cacheable) publishedJsonCache.set(relativePath, { at: Date.now(), value: null });
    return null
  }
}

/** Absolute site origin (from the site index domain) for canonical/og URLs. */
export async function getSiteUrl(): Promise<string> {
  const { site } = await resolveSite()
  const domain = site?.domain || ''
  if (!domain) return ''
  return /^https?:\/\//i.test(domain) ? domain.replace(/\/+$/, '') : `https://${domain.replace(/\/+$/, '')}`
}

async function resolveSite(): Promise<{ code: string; site: SiteIndexEntry | null; sites: SiteIndexEntry[] }> {
  const sites = await readJson<SiteIndexEntry[]>('sites.json') || []
  return {
    code: storefrontSiteCode,
    site: sites.find((site) => site.code === storefrontSiteCode) || null,
    sites,
  }
}

async function loadLocale(
  input: PublishedPageInput,
  locale: string,
  resolvedSite: Awaited<ReturnType<typeof resolveSite>>,
  releaseId?: string,
): Promise<PublishedPageResult | null> {
  if (!resolvedSite.code) return null
  const localePrefix = locale === 'en' ? '' : `${locale}/`
  // Release-scoped: read from releases/<id>/; default: current production root.
  const base = releaseId
    ? `${resolvedSite.code}/releases/${releaseId}/${localePrefix}`
    : `${resolvedSite.code}/${localePrefix}`
  const pages = await readJson<PublishedPageRecord[]>(`${base}data/pages.json`)
  const page = pages?.find((item) => item.path === input.path)
  if (!page?.fragment) return null
  const [rawHtml, navigation, config] = await Promise.all([
    readPublishedText(`${base}${page.fragment}`),
    readJson<{ header?: JsonValue[]; footer?: JsonValue[] }>(`${base}data/navigation.json`),
    readJson<Record<string, string>>(`${base}data/site-config.json`),
  ])
  if (!rawHtml) return null
  const html = addPublishedImageHints(
    localizePublishedInternalLinks(rawHtml, pages || [], locale),
  )
  return {
    page: {
      path: page.path || input.path,
      slug: page.slug || '',
      title: page.title || '',
      seoTitle: page.seoTitle || '',
      seoDescription: page.seoDescription || '',
      seoImage: page.seoImage || '',
      fragment: page.fragment,
    },
    html,
    navigation,
    siteName: config?.['system-name'] || config?.['site-name'] || '',
    logos: {
      header: config?.['header-logo'],
      footer: config?.['footer-logo'],
    },
    locale,
    siteUrl: (() => {
      const domain = resolvedSite.site?.domain || ''
      if (!domain) return ''
      return /^https?:\/\//i.test(domain) ? domain.replace(/\/+$/, '') : `https://${domain.replace(/\/+$/, '')}`
    })(),
  }
}

export const loadPublishedPage = createServerFn()
  .inputValidator((data: PublishedPageInput) => data)
  .handler(async ({ data }) => {
    const input = data
    const resolvedSite = await resolveSite()
    const localized = await loadLocale(input, input.locale, resolvedSite, input.releaseId)
    if (localized) return localized
    if (input.locale !== 'en') {
      const fallback = await loadLocale(input, 'en', resolvedSite, input.releaseId)
      if (fallback) return { ...fallback, locale: input.locale, fallbackLocale: 'en' }
    }
    return null
  })
