// Vercel SSR 入口（Web-standard handler）。
//
// 构建产物 dist/server/server.js 由 vite(TanStack Start)生成,默认导出
// { fetch(request) } —— server-entry.js 的 node 版就是调它。Vercel 上静态
// 资产由 dist/client 直出(vercel.json outputDirectory),其余路径经
// rewrites 打到本函数,再桥接到同一个 fetch 处理器,两端行为一致。
import server from '../dist/server/server.js'

export const config = {
  runtime: 'nodejs',
}

export default async function handler(request: Request): Promise<Response> {
  return server.fetch(request)
}
