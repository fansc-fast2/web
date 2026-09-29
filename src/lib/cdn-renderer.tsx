/**
 * CdnBlockRenderer — renders published blocks via the prd-admin block-renderer
 * bundle (an IIFE that assigns window.BlockRenderer). Used for block types that
 * have no React implementation in prd-web.
 *
 * The bundle is the single source of truth for block markup; prd-web is a thin
 * host that loads it and injects the rendered HTML. Mirrors the reference
 * implementation in prd-admin/src/server/publishing/client-render.ts.
 *
 * Bundle source:
 *   - Dev: /cdn/blocks-renderer.js (local copy synced from prd-admin)
 *   - Production: /s3/<siteCode>/blocks-renderer.js (via proxy)
 */

import { useEffect, useRef, useState } from "react";
import { localizedPath, releasePrefix, stripReleasePrefix, switchLocalePath } from "@/lib/locale-path";
import { rememberLocale } from "@/lib/locale-preference";
import { TMS_CDN_ASSET_VERSION } from "@/generated/tms-cdn-assets";

// Production assets live on S3 alongside the published site data (uploaded by
// prd-admin publish, promoted to <siteCode>/ on release activation). Local
// development uses the synced public/cdn copies so renderer changes are
// visible before the next publish. Env overrides remain available.
const ASSET_BASE = import.meta.env.DEV ? "/cdn" : "/s3/global";
// 无同源代理的运行时(Vercel)可由构建期 PUBLISHED_ORIGIN 推导绝对地址,
// 显式 VITE_* 变量优先,最后回退同源代理路径(node /s3、dev 本地 /cdn)。
const PUBLISHED_ORIGIN_BASE =
  (typeof __PUBLISHED_ORIGIN__ !== "undefined" ? __PUBLISHED_ORIGIN__ : "") || "";
const BLOCK_RENDERER_URL =
  import.meta.env.VITE_BLOCK_RENDERER_URL ||
  (PUBLISHED_ORIGIN_BASE
    ? `${PUBLISHED_ORIGIN_BASE}/global/blocks-renderer.js?v=${TMS_CDN_ASSET_VERSION}`
    : `${ASSET_BASE}/blocks-renderer.js?v=${TMS_CDN_ASSET_VERSION}`);
const PUBLISHED_CSS_URL =
  import.meta.env.VITE_PUBLISHED_CSS_URL ||
  (PUBLISHED_ORIGIN_BASE
    ? `${PUBLISHED_ORIGIN_BASE}/global/assets/published.css?v=${TMS_CDN_ASSET_VERSION}`
    : `${ASSET_BASE}/published.css?v=${TMS_CDN_ASSET_VERSION}`);

// Published pages already contain their HTML. Keep the carousel runtime out of
// the public entry chunk and load it only when the current fragment needs it.
let swiperPromise: Promise<typeof import("swiper/bundle")> | null = null;
function loadSwiper(): Promise<typeof import("swiper/bundle")> {
  swiperPromise ||= import("swiper/bundle");
  return swiperPromise;
}

// animate.css is only needed by React-rendered builder blocks. Published
// fragments rarely use those classes, so defer the stylesheet until one
// is actually present in the rendered HTML.
let animationCssPromise: Promise<unknown> | null = null;
function loadAnimationCss(): Promise<unknown> {
  animationCssPromise ||= import("animate.css");
  return animationCssPromise;
}

// Inject the published stylesheet once. It carries brand tokens and global
// chrome rules; block layouts come from the CDN renderer's inline block
// styles so admin preview and prd-web use the same source.
let cssLoaded = false;
export function ensurePublishedCss(): void {
  if (cssLoaded || typeof document === "undefined") return;
  if (document.querySelector('link[data-published-css="1"]')) {
    cssLoaded = true;
    return;
  }
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = PUBLISHED_CSS_URL;
  link.dataset.publishedCss = "1";
  document.head.appendChild(link);
  cssLoaded = true;
}

export interface ClientBlock {
  id?: string;
  type: string;
  props: Record<string, any>;
}

/** Pre-resolved site navigation published by prd-admin (navigation.json). */
export interface SiteNavigation {
  header?: unknown[];
  footer?: unknown[];
}

/** Configured logo URLs from site-config (header-logo / footer-logo keys). */
export interface SiteLogos {
  header?: string;
  footer?: string;
}

interface BlockRendererApi {
  renderBlocks(blocks: ClientBlock[], options?: { editable?: boolean }): string;
  renderBlock(block: ClientBlock, options?: { editable?: boolean }): string;
  getSupportedTypes(): string[];
}

function deferInlineScripts(html: string): string {
  return html.replace(
    /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
    (tag, rawAttrs: string, source: string) => {
      if (/\bsrc\s*=/i.test(rawAttrs)) return tag;
      const typeMatch = rawAttrs.match(/\btype\s*=\s*(["'])(.*?)\1/i);
      const originalType = typeMatch?.[2] || "text/javascript";
      const attrs = rawAttrs.replace(/\s*type\s*=\s*(["']).*?\1/i, "");
      return `<script${attrs} type="application/x-tms-runtime" data-script-type="${originalType.replace(/&/g, "&amp;").replace(/"/g, "&quot;")}">${source}</script>`;
    },
  );
}

declare global {
  interface Window {
    BlockRenderer?: BlockRendererApi;
  }
}

/** A header nav item as published in navigation.json. */
interface NavItem {
  label?: string;
  url?: string;
  children?: NavItem[];
}

/** True when the current URL serves Chinese content (release previews included). */
function isZhPath(): boolean {
  const { rest } = stripReleasePrefix(window.location.pathname);
  return rest === "/zh-CN" || rest.startsWith("/zh-CN/");
}

/**
 * The publish-time fragment renders nav items as flat links even when
 * navigation.json defines `children`. Rebuild the dropdown markup the fragment
 * CSS expects (`.site-navigation__dropdown` > `.site-navigation__link--dropdown`
 * + caret + `.site-navigation__submenu`), so headers with submenus show their
 * caret and expand on hover/focus as designed.
 */
function injectNavDropdowns(root: HTMLElement, navItems: unknown[], releaseId?: string): void {
  const header = root.querySelector<HTMLElement>(".site-navigation__links");
  if (!header) return;

  const links = Array.from(
    header.querySelectorAll<HTMLAnchorElement>(".site-navigation__link"),
  );
  for (const raw of navItems) {
    const item = raw as NavItem;
    const children = Array.isArray(item.children) ? item.children : [];
    if (!item.label || !children.length) continue;

    // Match the published flat link by its label text.
    const link = links.find(
      (l) => l.textContent?.trim() === item.label!.trim(),
    );
    if (!link) continue;
    // Already a dropdown (re-published or re-run) — skip to avoid duplicates.
    if (link.classList.contains("site-navigation__link--dropdown")) continue;

    const isZh = isZhPath();

    // Wrap the link + submenu in a .site-navigation__dropdown container.
    const dropdown = document.createElement("div");
    dropdown.className = "site-navigation__dropdown";
    link.parentNode!.insertBefore(dropdown, link);

    // Upgrade the link: add the dropdown class + a CSS-triangle caret.
    link.classList.add("site-navigation__link--dropdown");
    link.removeAttribute("href"); // parent acts as a toggle, not navigation
    link.setAttribute("role", "button");
    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("aria-expanded", "false");
    const caret = document.createElement("span");
    caret.className = "site-navigation__caret";
    caret.setAttribute("aria-hidden", "true");
    link.appendChild(caret);
    dropdown.appendChild(link);

    // Build the submenu panel.
    const submenu = document.createElement("div");
    submenu.className = "site-navigation__submenu";
    const inner = document.createElement("div");
    inner.className = "site-navigation__submenu-inner";
    for (const child of children) {
      if (!child?.label) continue;
      const a = document.createElement("a");
      a.className = "site-navigation__submenu-link";
      a.href = localizedPath(isZh ? "zh-CN" : "en", child.url || "/", { releaseId });
      a.textContent = child.label;
      inner.appendChild(a);
    }
    submenu.appendChild(inner);
    dropdown.appendChild(submenu);

    // Toggle aria-expanded on hover/focus for a11y (CSS handles visibility).
    dropdown.addEventListener("mouseenter", () =>
      link.setAttribute("aria-expanded", "true"),
    );
    dropdown.addEventListener("mouseleave", () =>
      link.setAttribute("aria-expanded", "false"),
    );
  }
}

// --- one-time bundle loader ----------------------------------------------
let loaderPromise: Promise<BlockRendererApi | null> | null = null;

function loadBlockRenderer(): Promise<BlockRendererApi | null> {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.BlockRenderer) return Promise.resolve(window.BlockRenderer);
  if (loaderPromise) return loaderPromise;

  loaderPromise = new Promise((resolve) => {
    const onReady = () => {
      if (window.BlockRenderer) return resolve(window.BlockRenderer);
      // IIFE assigns synchronously on load, but retry briefly just in case.
      let tries = 0;
      const tick = () => {
        if (window.BlockRenderer) return resolve(window.BlockRenderer);
        if (++tries > 50) return resolve(null);
        setTimeout(tick, 20);
      };
      tick();
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-block-renderer="1"]',
    );
    if (existing) {
      existing.addEventListener("load", onReady);
      existing.addEventListener("error", () => resolve(null));
      onReady();
      return;
    }

    const s = document.createElement("script");
    s.src = BLOCK_RENDERER_URL;
    s.async = true;
    s.dataset.blockRenderer = "1";
    s.onload = onReady;
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });

  return loaderPromise;
}

export function useBlockRenderer(enabled = true): BlockRendererApi | null {
  const [renderer, setRenderer] = useState<BlockRendererApi | null>(() =>
    typeof window !== "undefined" ? window.BlockRenderer ?? null : null,
  );
  useEffect(() => {
    if (!enabled || renderer) return;
    let cancelled = false;
    loadBlockRenderer().then((br) => {
      if (!cancelled) setRenderer(br);
    });
    return () => {
      cancelled = true;
    };
  }, [enabled, renderer]);
  return renderer;
}

// --- component ------------------------------------------------------------

interface CdnBlockRendererProps {
  blocks: ClientBlock[];
  /** Publish-time HTML fragment. When present, no browser rendering is needed. */
  initialHtml?: string;
  /** Stable page slug for page-scoped root styles. */
  pageId?: string;
  /**
   * Site navigation for the global Header/Footer chrome. When supplied, the
   * content is wrapped with Header (navItems=header) and Footer (columns=footer)
   * blocks — unless the content already contains a Header/Footer, so chrome is
   * never duplicated.
   */
  navigation?: SiteNavigation | null;
  siteName?: string;
  /** Configured header/footer logo URLs (site-config header-logo / footer-logo). */
  logos?: SiteLogos;
  /** Release id for preview mode — when set, generated links carry a /r/<id>/ prefix. */
  releaseId?: string;
  /**
   * Per-block inline <style> injection. Defaults to TRUE because the admin
   * canvas and block renderer styles are the current source of truth;
   * published.css is still loaded for brand tokens and global chrome rules.
   * Keep the prop as an escape hatch for pages that explicitly want plain mode.
   */
  editable?: boolean;
}

/**
 * Ensure the page has complete Header/Footer chrome sourced from
 * navigation.json (and configured logos). Two cases:
 *  - The publish already merged Header/Footer into the preset (they carry the
 *    configured logo but often empty navItems/columns) — fill those in.
 *  - The preset has no Header/Footer — prepend/append full chrome blocks.
 */
export function withSiteChrome(
  blocks: ClientBlock[],
  navigation: SiteNavigation | null | undefined,
  siteName?: string,
  logos?: SiteLogos,
): ClientBlock[] {
  if (!navigation) return blocks;

  const logoObj = (url?: string) =>
    url ? { desktop: url, alt: siteName || "" } : undefined;

  // Fill navItems/columns (and logo if missing) on existing Header/Footer.
  let out = blocks.map((b) => {
    if (b.type === "Header") {
      const props: Record<string, any> = { ...b.props };
      if (!props.navItems?.length && navigation.header?.length)
        props.navItems = navigation.header;
      if (!props.logo && logos?.header) props.logo = logoObj(logos.header);
      if (!props.siteName && siteName) props.siteName = siteName;
      return { ...b, props };
    }
    if (b.type === "Footer") {
      const props: Record<string, any> = { ...b.props };
      if (!props.columns?.length && navigation.footer?.length)
        props.columns = navigation.footer;
      if (!props.logo && logos?.footer) props.logo = logoObj(logos.footer);
      return { ...b, props };
    }
    return b;
  });

  // Add Header/Footer if still absent.
  if (!out.some((b) => b.type === "Header") && navigation.header?.length) {
    const props: Record<string, any> = {
      navItems: navigation.header,
      siteName: siteName || "",
    };
    const logo = logoObj(logos?.header);
    if (logo) props.logo = logo;
    out = [{ id: "__chrome_header", type: "Header", props }, ...out];
  }
  if (!out.some((b) => b.type === "Footer") && navigation.footer?.length) {
    const props: Record<string, any> = { columns: navigation.footer };
    const logo = logoObj(logos?.footer);
    if (logo) props.logo = logo;
    out = [...out, { id: "__chrome_footer", type: "Footer", props }];
  }
  return out;
}

export function CdnBlockRenderer({
  blocks,
  initialHtml = "",
  pageId = "home",
  navigation,
  siteName,
  logos,
  editable = true,
  releaseId,
}: CdnBlockRendererProps) {
  const renderer = useBlockRenderer(!initialHtml);
  const [html, setHtml] = useState(initialHtml);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load the published stylesheet once (brand tokens + all block CSS).
  useEffect(() => {
    ensurePublishedCss();
  }, []);

  // Wrap with Header/Footer once per render (cheap; avoids recompute in effect).
  const blocksToRender = navigation
    ? withSiteChrome(blocks, navigation, siteName, logos)
    : blocks;

  useEffect(() => {
    if (initialHtml) {
      setHtml(initialHtml);
      return;
    }
    if (!renderer || !blocksToRender?.length) {
      setHtml("");
      return;
    }
    try {
      setHtml(
        deferInlineScripts(
          renderer.renderBlocks(blocksToRender, editable ? { editable: true } : undefined),
        ),
      );
    } catch (e) {
      console.error("[CdnBlockRenderer] renderBlocks failed:", e);
      setHtml("");
    }
  }, [renderer, blocksToRender, editable, initialHtml]);

  // Publish-time fragments carry inert runtime script descriptors. Activate
  // each descriptor once after hydration; server HTML never executes it while
  // parsing, so listeners and carousels cannot be initialized twice.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !html) return;
    let cancelled = false;
    const runtimeScripts = Array.from(
      el.querySelectorAll<HTMLScriptElement>('script[type="application/x-tms-runtime"]'),
    );
    const needsSwiper = Boolean(el.querySelector(".swiper, [data-hero-carousel]"))
      || runtimeScripts.some((script) => /\bnew\s+Swiper\b/.test(script.textContent || ""));

    const activateRuntime = async () => {
      if (needsSwiper) {
        try {
          const { default: Swiper } = await loadSwiper();
          // StrictMode may clean up the first effect while the dynamic chunk
          // is still loading. The container is still the live DOM node in
          // that case, so do not leave its inert runtime scripts stranded.
          if (el.isConnected) Object.assign(window, { Swiper });
        } catch {
          // Non-carousel runtime scripts can still be activated if Swiper is
          // unavailable; carousel scripts already guard their constructor.
        }
      }
      if (html.includes("animate__")) {
        try {
          await loadAnimationCss();
        } catch {
          // Animations are decorative and must never block page interaction.
        }
      }
      if (cancelled && !el.isConnected) return;
      runtimeScripts.forEach((old) => {
        const source = old.textContent || "";
        const ns = document.createElement("script");
        const originalType = old.dataset.scriptType;
        if (originalType && originalType !== "text/javascript") ns.type = originalType;
        ns.textContent = source;
        old.parentNode?.replaceChild(ns, old);
      });

    // The published header renders its language control as static spans.
    // Turn it into a real locale switch while preserving the current page.
    const languageButton =
      el.querySelector<HTMLButtonElement>(".site-navigation__language");
    if (languageButton) {
      const isChinese = isZhPath();
      const options = languageButton.querySelectorAll<HTMLElement>(
        ".site-navigation__language-option",
      );
      if (options[0]) {
        options[0].textContent = "EN";
        options[0].classList.toggle(
          "site-navigation__language-option--active",
          !isChinese,
        );
      }
      if (options[1]) {
        options[1].textContent = "中";
        options[1].classList.toggle(
          "site-navigation__language-option--active",
          isChinese,
        );
      }
      languageButton.setAttribute(
        "aria-label",
        isChinese ? "Switch to English" : "切换到中文",
      );
      languageButton.onclick = () => {
        // Persist the choice so bare-path visits keep the chosen language
        // (the head boot script bounces bare paths back to /zh-CN).
        rememberLocale(isChinese ? "en" : "zh-CN");
        window.location.assign(
          switchLocalePath(window.location.pathname, isChinese ? "en" : "zh-CN") +
            window.location.search +
            window.location.hash,
        );
      };
    }

    // Rebuild dropdown submenus the publish-time fragment renders as flat links.
    if (navigation?.header?.length) {
      injectNavDropdowns(el, navigation.header, releaseId);
    }

    // The published fragment bakes production paths ("/about") with no release
    // or locale prefix, and locale is URL-derived — following an unprefixed
    // link from a /zh-CN page silently lands on the English version. Rewrite
    // every same-origin internal link to carry the active release and/or
    // locale prefix. Skips anchors, external/scheme URLs, API and file-asset
    // paths, and links already prefixed.
    {
      const isZh = isZhPath();
      const prefix = `${releasePrefix(releaseId)}${isZh ? "/zh-CN" : ""}`;
      if (prefix) {
        el.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
          const raw = anchor.getAttribute("href") || "";
          if (!raw || raw.startsWith("#")) return;
          if (
            /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(raw) ||
            /^[a-z][a-z0-9+.-]*:/i.test(raw)
          )
            return;
          // Normalize relative hrefs (e.g. "about-us") to root-relative so the
          // prefix composes cleanly instead of resolving against the current
          // URL (which would double the prefix).
          const normalized = raw.startsWith("/") ? raw : `/${raw}`;
          if (releaseId && normalized.startsWith("/r/")) return;
          if (isZh && (normalized === "/zh-CN" || normalized.startsWith("/zh-CN/"))) return;
          if (normalized.startsWith("/api/") || normalized.startsWith("/s3/")) return;
          // File assets (e.g. /files/guide.pdf) have no localized route.
          if (/\.[a-z0-9]{2,5}(?:[?#]|$)/i.test(normalized)) return;
          const url = new URL(normalized, window.location.origin);
          if (url.origin !== window.location.origin) return;
          anchor.setAttribute(
            "href",
            `${prefix}${url.pathname}${url.search}${url.hash}`,
          );
        });
      }
    }
    };
    void activateRuntime();
    return () => {
      cancelled = true;
    };
  }, [html, navigation, releaseId]);

  if (!renderer && !html) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-400">Loading blocks…</div>
      </div>
    );
  }

  return (
    <main
      ref={containerRef}
      id="page-root"
      className={`tms-page ${pageId}-page`}
      data-page={pageId}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
