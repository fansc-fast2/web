// Vercel SSR 入口（Web-standard handler）。
//
// 构建产物 dist/server/server.js 由 vite(TanStack Start)生成,默认导出
// { fetch(request) } —— server-entry.js 的 node 版就是调它。Vercel 上静态
// 资产由 dist/client 直出(vercel.json outputDirectory),其余路径经
// rewrites 打到本函数,再桥接到同一个 fetch 处理器,两端行为一致。
//
// rewrites 是「路径透传」形态(/x → /api/x,并排除 /api/* 自身以防循环),
// 函数收到的 pathname 带着 /api 前缀 —— 剥掉前缀、还原原始 URL 后再交给
// 路由器,否则 router 只会看到 /api/* 永远 404。
import server from '../dist/server/server.js'

export const config = {
  runtime: 'nodejs',
}

export default async function handler(request: Request): Promise<Response> {
  const url = new URL(request.url)
  let path = url.pathname
  if (path === '/api' || path === '/api/') {
    path = '/'
  } else if (path.startsWith('/api/')) {
    path = path.slice('/api'.length)
  }
  const target = new URL(path + url.search, url.origin)
  return server.fetch(new Request(target, request))
}
