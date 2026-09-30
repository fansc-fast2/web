import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// ⚠️ dev 模式进程级兜底（2026-09-11）：Vite SSR 的 stream 生命周期上限是 120s，
// 个别慢请求触底后框架对 Readable emit 'error' 且无人监听 → uncaughtException
// 直接杀进程。当天已崩 8+ 次，阻塞测试。此处只吞这一种已知框架错误并打日志，
// 其余异常照常抛出（保留真实 bug 的可见性）。生产构建无 Vite dev 运行时，不受影响。
if (process.env.NODE_ENV !== 'production') {
  const isStreamLifetime = (err: unknown) =>
    err instanceof Error &&
    /stream transform exceeded maximum lifetime|stream lifetime/i.test(err.message || '');
  process.on('uncaughtException', (err) => {
    if (isStreamLifetime(err)) {
      console.error('[dev-guard] SSR stream lifetime exceeded — request aborted, process kept alive');
      return;
    }
    console.error('[dev-guard] uncaughtException:', err);
    process.exit(1);
  });
  process.on('unhandledRejection', (reason) => {
    if (isStreamLifetime(reason)) {
      console.error('[dev-guard] SSR stream lifetime exceeded (rejection) — request aborted, process kept alive');
      return;
    }
    console.error('[dev-guard] unhandledRejection:', reason);
  });
}

export default defineConfig({
  preview: {
    // Allow the Heroku-assigned host (random subdomain) plus local dev hosts.
    allowedHosts: [
      'tms-web-c520a5516349.herokuapp.com',
      '.herokuapp.com',
      'localhost',
      '127.0.0.1',
    ],
  },
  server: {
    port: 3003,
    // Listen on both IPv4 and IPv6 loopback so Chromium/Playwright (which
    // default to IPv4 in some environments) can reach the dev server.
    host: true,
    proxy: {
      // Proxy published-data fetches to the object-storage origin so the browser
      // stays same-origin (buckets serve no CORS headers). Enabled only when
      // PUBLISHED_ORIGIN is set (full base incl. path prefix, e.g.
      // https://<bucket>.cos.<region>.myqcloud.com/static); /s3/* maps onto it.
      ...(process.env.PUBLISHED_ORIGIN
        ? {
            '/s3': {
              target: process.env.PUBLISHED_ORIGIN.replace(/\/+$/, ''),
              changeOrigin: true,
              secure: true,
              rewrite: (p: string) => p.replace(/^\/s3/, ''),
            },
          }
        : {}),
      // CMS 媒体（/uploads/... 相对引用）同源代理到后端(prdapi.fast2x.com,
      // 生产地址;本地内网调试可在 shell 环境覆盖 UPSTREAM_API)。
      '/uploads': {
        target: process.env.UPSTREAM_API || 'https://prdapi.fast2x.com',
        changeOrigin: true,
        secure: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tanstackStart(),
    nitro(),
    viteReact(),
    tsConfigPaths(),
  ],
  // 构建期把服务端的 PUBLISHED_ORIGIN 透传给客户端代码:无同源代理的运行时
  // (如 Vercel)可用它推导 published.css / blocks-renderer.js 的绝对地址,
  // 不必再单独配 VITE_PUBLISHED_CSS_URL 等构建期变量。
  define: {
    __PUBLISHED_ORIGIN__: JSON.stringify('https://static.fast2x.com/sites'),
  },
})
