/**
 * Locale preference persistence.
 *
 * The site derives locale from the URL (/zh-CN prefix; bare = English), so a
 * language choice evaporates the moment a baked link points at a bare path.
 * Two mechanisms keep it sticky:
 *  - The header language toggle (and every visit to a /zh-CN page) records the
 *    choice in localStorage.
 *  - A synchronous inline boot script in the document head bounces bare paths
 *    to /zh-CN when the visitor previously chose Chinese. It runs before first
 *    paint, so there is no English flash. Explicit English toggles record "en"
 *    and are never bounced.
 */

const STORAGE_KEY = "tms-locale";

export type StoredLocale = "en" | "zh-CN";

import { stripReleasePrefix, switchLocalePath } from "@/lib/locale-path";

export function rememberLocale(locale: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale === "zh-CN" ? "zh-CN" : "en");
  } catch {
    /* storage unavailable (private mode) — URL prefix still carries locale */
  }
}

export function readPreferredLocale(): StoredLocale | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "zh-CN" || value === "en" ? value : null;
  } catch {
    return null;
  }
}

/**
 * Synchronous head script (CSP allows 'unsafe-inline'). Keep it dependency-free
 * and try/catch-wrapped: it must never break page parsing. Logic:
 *  - On a /zh-CN path: record the preference, done.
 *  - On a bare path with a recorded zh-CN preference: replace to the zh-CN URL,
 *    preserving a leading /r/<releaseId> preview segment, query, and hash.
 *    A leading /en segment is stripped first — release previews hard-redirect
 *    /r/<id> to /r/<id>/en, and without the strip the bounce produced the
 *    broken /r/<id>/zh-CN/en (locale treated as a page slug).
 */
export const LOCALE_PREFERENCE_BOOT_SCRIPT = `(function(){try{var k=${JSON.stringify(STORAGE_KEY)};var p=window.location.pathname;var m=p.match(/^\\/r\\/([^/]+)(?=\\/|$)(.*)$/);var base=m?"/r/"+m[1]:"";var rest=m?(m[2]||"/"):p;var onZh=rest==="/zh-CN"||rest.indexOf("/zh-CN/")===0;if(onZh){localStorage.setItem(k,"zh-CN");return}if(localStorage.getItem(k)!=="zh-CN")return;if(rest.indexOf("/api/")===0)return;var me=rest.match(/^\\/en(?=\\/|$)(.*)$/);if(me)rest=me[1]||"/";window.location.replace(base+"/zh-CN"+(rest==="/"?"":rest)+window.location.search+window.location.hash)}catch(e){}})();`;

/**
 * Click-time locale guard (delegated on document, capture phase — immune to
 * React re-commits of fragment innerHTML). Two jobs:
 *  - Header language toggle: records the choice via rememberLocale (this is
 *    the persistence write — element-level onclick assignments get wiped on
 *    some routes) and navigates via switchLocalePath.
 *  - On /zh-CN pages, any same-origin internal link that lost the prefix is
 *    sent to the /zh-CN URL instead of dropping the visitor back to English.
 *
 * Link guard skips: anchors, external/scheme URLs, /api//s3/, file assets,
 * and already-prefixed links.
 */
let localeLinkGuardInstalled = false;
export function installLocaleLinkGuard(): void {
  if (localeLinkGuardInstalled || typeof document === "undefined") return;
  localeLinkGuardInstalled = true;
  document.addEventListener(
    "click",
    (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = event.target as Element | null;
      // Language toggle first: delegated on document so it survives React
      // re-commits of the header fragment (an element-level onclick assigned
      // by the renderer effect gets wiped together with the innerHTML).
      const toggle = target?.closest?.(".site-navigation__language");
      if (toggle) {
        event.preventDefault();
        event.stopPropagation();
        const { rest } = stripReleasePrefix(window.location.pathname);
        const isZh = rest === "/zh-CN" || rest.startsWith("/zh-CN/");
        const next = isZh ? "en" : "zh-CN";
        rememberLocale(next);
        window.location.assign(
          switchLocalePath(window.location.pathname, next) +
            window.location.search +
            window.location.hash,
        );
        return;
      }
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const { rest } = stripReleasePrefix(window.location.pathname);
      if (rest !== "/zh-CN" && !rest.startsWith("/zh-CN/")) return;
      const raw = anchor.getAttribute("href") || "";
      if (!raw || raw.startsWith("#")) return;
      if (
        /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(raw) ||
        /^[a-z][a-z0-9+.-]*:/i.test(raw)
      )
        return;
      const normalized = raw.startsWith("/") ? raw : `/${raw}`;
      if (normalized === "/zh-CN" || normalized.startsWith("/zh-CN/")) return;
      if (normalized.startsWith("/api/") || normalized.startsWith("/s3/")) return;
      // File assets (e.g. /files/guide.pdf) have no localized route.
      if (/\.[a-z0-9]{2,5}(?:[?#]|$)/i.test(normalized)) return;
      const url = new URL(normalized, window.location.origin);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      window.location.assign(`/zh-CN${url.pathname}${url.search}${url.hash}`);
    },
    true,
  );
}
