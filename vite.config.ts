import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
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
    // Proxy published-data fetches to S3 so the browser stays same-origin
    // (avoids CORS — S3 has no Access-Control-Allow-Origin header).
    // VITE_PUBLISH_BASE=/s3 in .env.local; rewritten to /static on S3.
    proxy: {
      '/s3': {
        target: 'https://tms-static-web.s3.us-east-1.amazonaws.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/s3/, '/static'),
      },
      // Strapi 本地上传的媒体（头像等，local provider 返回 /uploads/... 相对
      // URL）走同源代理，浏览器无需直连 1337（部分环境无法直达后端端口）。
      '/uploads': {
        target: 'http://localhost:1337',
        changeOrigin: true,
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
    viteReact(),
    tsConfigPaths(),
  ],
})
