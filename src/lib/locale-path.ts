export const DEFAULT_LOCALE = 'en';

/** Path prefix for release previews: /r/<releaseId>. Empty for production. */
export function releasePrefix(releaseId?: string): string {
  return releaseId ? `/r/${releaseId}` : '';
}

/** English lives at the site root; only non-default locales use a prefix. */
export function localePrefix(locale?: string): string {
  return locale && locale !== DEFAULT_LOCALE ? `/${locale}` : '';
}

/**
 * Build a localized path, optionally prefixed with a release preview segment.
 * `releaseId` (or a `releaseId` inside opts) prepends `/r/<id>` so preview
 * navigation stays within the release.
 */
export function localizedPath(
  locale: string | undefined,
  path = '/',
  opts?: { releaseId?: string },
): string {
  const normalizedPath = path === '/' ? '' : `/${path.replace(/^\/+/, '')}`;
  return `${releasePrefix(opts?.releaseId)}${localePrefix(locale)}${normalizedPath}` || '/';
}

/**
 * Parse a leading `/r/<releaseId>` segment off a pathname.
 * Returns the releaseId (or undefined) and the remaining path.
 */
export function stripReleasePrefix(pathname: string): { releaseId?: string; rest: string } {
  const m = pathname.match(/^\/r\/([^/]+)(?=\/|$)(.*)$/);
  if (!m) return { rest: pathname };
  return { releaseId: m[1], rest: m[2] || '/' };
}

/** Preserve the current page (and its release prefix) while changing locale. */
export function switchLocalePath(pathname: string, locale: string): string {
  // Preserve a leading /r/<releaseId>/ segment across the locale switch.
  const { releaseId, rest } = stripReleasePrefix(pathname);
  const pathWithoutLocale = rest.replace(/^\/(?:en|zh-CN)(?=\/|$)/, '') || '/';
  return localizedPath(locale, pathWithoutLocale, { releaseId });
}

/**
 * 从 URL 路径推断当前语言。
 *
 * 专门给「拿不到 React 语言上下文」的地方用 —— 根级错误页 / 404 / loading
 * 会整体替换 <html> 渲染，那些组件不在路由布局内，取不到 loaderData。
 */
export function localeFromPathname(pathname?: string): string {
  const raw = pathname ?? (typeof window !== 'undefined' ? window.location.pathname : '/');
  const { rest } = stripReleasePrefix(raw);
  return /^\/zh-CN(?=\/|$)/.test(rest) ? 'zh-CN' : DEFAULT_LOCALE;
}

/** 同上场景的双语取值：`pickByPath('/zh-CN/x', 'English', '中文')` → '中文'。 */
export function pickByPath(pathname: string | undefined, en: string, zh: string): string {
  return localeFromPathname(pathname) === 'zh-CN' ? zh : en;
}
