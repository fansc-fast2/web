import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from '@tanstack/react-router'
import { useEffect } from 'react'
import { LOCALE_PREFERENCE_BOOT_SCRIPT, installLocaleLinkGuard } from '../lib/locale-preference'
import { localeFromPathname, localizedPath } from '../lib/locale-path'
import { PUBLIC_CONTENT_SECURITY_POLICY } from '../lib/security-policy'
import { TMS_CDN_ASSET_VERSION } from '../generated/tms-cdn-assets'
import '../styles/globals.css'

// Absolute origin (scheme://host, no path) of the published-storage/CDN domain,
// e.g. https://<bucket>.cos.<region>.myqcloud.com — optional, build-time.
const PUBLISHED_ASSET_ORIGIN = (import.meta.env.VITE_PUBLISHED_PUBLIC_ORIGIN as string | undefined)?.replace(/\/+$/, '')

export const Route = createRootRoute({
  component: RootComponent,
  // root 级错误/未找到会整体替换 <html> 渲染——必须自带完整文档结构,
  // 否则错误组件被挂到 #document 层,触发 "Only one element on document
  // allowed" 连锁崩溃(路由加载超时时报错信息闪现即此)。
  errorComponent: RootErrorComponent,
  notFoundComponent: RootNotFoundComponent,
})

function RootComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const documentLocale = pathname === '/zh-CN' || pathname.startsWith('/zh-CN/') ? 'zh-CN' : 'en'
  useEffect(() => {
    installLocaleLinkGuard()
  }, [])

  return (
    <html lang={documentLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="Content-Security-Policy" content={PUBLIC_CONTENT_SECURITY_POLICY} />
        {/* Published fragments reference absolute asset URLs on the storage
            origin (Tencent COS / CDN). Preconnect only when that origin is
            exposed at build time; unset = skip, links still resolve lazily. */}
        {PUBLISHED_ASSET_ORIGIN && (
          <>
            <link rel="preconnect" href={PUBLISHED_ASSET_ORIGIN} crossOrigin="" />
            <link rel="dns-prefetch" href={`//${PUBLISHED_ASSET_ORIGIN.replace(/^https?:\/\//, '')}`} />
          </>
        )}
        {/* Runs synchronously before first paint: bounces bare paths to /zh-CN
            when the visitor previously chose Chinese (locale is URL-derived,
            so without this the language choice evaporates on the next click). */}
        <script dangerouslySetInnerHTML={{ __html: LOCALE_PREFERENCE_BOOT_SCRIPT }} />
        {/* Published CSS: same-origin proxy path by default (node 部署经
            server-entry /s3 代理);Vercel 等无代理运行时用 VITE_PUBLISHED_CSS_URL
            指向 CDN 绝对地址(完整含文件名)。 */}
        <link
          rel="stylesheet"
          href={
            import.meta.env.VITE_PUBLISHED_CSS_URL
              ? `${String(import.meta.env.VITE_PUBLISHED_CSS_URL).replace(/\/+$/, '')}?v=${TMS_CDN_ASSET_VERSION}`
              : `${import.meta.env.DEV ? '/cdn' : '/s3/global'}/published.css?v=${TMS_CDN_ASSET_VERSION}`
          }
          data-published-css="1"
        />
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}


function RootErrorComponent({ error }: { error: Error }) {
  // 根级错误页会整体替换 <html>，拿不到路由语言上下文 —— 从 URL 推断。
  const locale = localeFromPathname()
  const pick = (en: string, zh: string) => (locale === 'zh-CN' ? zh : en)
  const message = String(error?.message || pick('Unexpected error', '发生未知错误'))
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${pick('Page failed to load', '页面加载失败')} - OneCMS`}</title>
      </head>
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          margin: 0,
          background: '#f7f7f8',
          color: '#32324d',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: 420, padding: 24 }}>
          <h1 style={{ fontSize: 20, marginBottom: 8 }}>{pick('Page failed to load', '页面加载失败')}</h1>
          <p style={{ fontSize: 14, color: '#666687', wordBreak: 'break-word' }}>{message}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: 16,
              padding: '8px 20px',
              borderRadius: 6,
              border: 'none',
              background: '#4945ff',
              color: '#fff',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            {pick('Retry', '重试')}
          </button>
        </div>
      </body>
    </html>
  )
}

function RootNotFoundComponent() {
  const locale = localeFromPathname()
  const pick = (en: string, zh: string) => (locale === 'zh-CN' ? zh : en)
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${pick('Page not found', '页面不存在')} - OneCMS`}</title>
      </head>
      <body
        style={{
          fontFamily: 'system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          margin: 0,
          background: '#f7f7f8',
          color: '#32324d',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 20, marginBottom: 8 }}>{pick('404 - Page not found', '404 - 页面不存在')}</h1>
          <a href={localizedPath(locale)} style={{ fontSize: 14, color: '#4945ff' }}>{pick('Back to home', '返回首页')}</a>
        </div>
      </body>
    </html>
  )
}
