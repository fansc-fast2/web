import server from '../dist/server/server.js'

export const config = {
  runtime: 'nodejs',
}

// 后端(Strapi)公开地址。CMS 媒体(/uploads/**)经前端同源反代,避免
// 混合内容/CORS;其余路径走 SSR。
const API_ORIGIN = (process.env.API_ORIGIN || 'https://prdapi.fast2x.com').replace(/\/+$/, '')

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  // Vercel routes every non-static path to this concrete function. The
  // explicit query parameter also works when the runtime exposes /api/render.
  const path = '/' + (url.searchParams.get('__pathname') || '').replace(/^\/+/, '')
  url.searchParams.delete('__pathname')

  // CMS 媒体反代:/uploads/** → 后端同名路径(静态化产物里的相对媒体引用)。
  if (path.startsWith('/uploads/')) {
    const upstream = await fetch(API_ORIGIN + path + url.search, {
      method: request.method,
      headers: { Accept: request.headers.get('accept') || '*/*' },
      body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
      ...(request.body ? { duplex: 'half' } : {}),
    }).catch(() => null)
    if (!upstream) return new Response('Upstream unavailable', { status: 502 })
    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') || 'application/octet-stream',
        'cache-control': upstream.headers.get('cache-control') || 'public, max-age=300',
        ...(upstream.headers.get('etag') ? { etag: upstream.headers.get('etag') as string } : {}),
      },
    })
  }

  const target = new URL(path + url.search, url.origin)
  return server.fetch(new Request(target, request))
}

// The Node.js runtime recognizes this as a Web Request/Response handler.
export default { fetch: handleRequest }
