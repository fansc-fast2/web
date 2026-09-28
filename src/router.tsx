import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { pickByPath } from './lib/locale-path'

export function getRouter() {
  return createTanStackRouter({
    routeTree,
    // 子路由慢加载(loader 远程片段/冷编译)时显示轻量 loading,而不是把
    // 错误组件闪现给用户;默认错误组件也改为页面内提示(在 root 布局内
    // 渲染,不会破坏文档结构)。
    defaultPendingComponent: RoutePending,
    defaultPendingMs: 600,
    defaultErrorComponent: RouteError,
  })
}

// 这两个组件在 root 布局内渲染，但拿不到 loaderData —— 按 URL 推断语言。
const currentPathname = () => (typeof window !== 'undefined' ? window.location.pathname : undefined)
const pick = (en: string, zh: string) => pickByPath(currentPathname(), en, zh)

function RoutePending() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        color: '#9a9ab5',
        fontFamily: 'system-ui, sans-serif',
        fontSize: 14,
      }}
    >
      {pick('Loading…', '加载中…')}
    </div>
  )
}

function RouteError({ error }: { error: Error }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        fontFamily: 'system-ui, sans-serif',
        color: '#32324d',
      }}
    >
      <p style={{ fontSize: 16, fontWeight: 600 }}>{pick('This page failed to load', '页面加载失败')}</p>
      <p style={{ fontSize: 13, color: '#666687', wordBreak: 'break-word', maxWidth: 420 }}>
        {String(error?.message || pick('Unexpected error', '发生未知错误'))}
      </p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        style={{
          marginTop: 12,
          padding: '6px 18px',
          borderRadius: 6,
          border: 'none',
          background: '#4945ff',
          color: '#fff',
          fontSize: 13,
          cursor: 'pointer',
        }}
      >
        {pick('Retry', '重试')}
      </button>
    </div>
  )
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
