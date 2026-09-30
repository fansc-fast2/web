import { beforeEach, expect, it, vi } from 'vitest'

const { render } = vi.hoisted(() => ({ render: vi.fn() }))
vi.mock('../../dist/server/server.js', () => ({ default: { fetch: render } }))
import handler from '../../api/render'

beforeEach(() => {
  render.mockReset()
  render.mockImplementation(async (request: Request) => new Response(request.url))
})

it('serves the homepage through a concrete Web handler', async () => {
  const result = await handler.fetch(new Request('https://app.fast2x.com/api/render?__pathname='))
  expect(await result.text()).toBe('https://app.fast2x.com/')
})

it('preserves nested routes and visitor queries while removing the routing parameter', async () => {
  const result = await handler.fetch(new Request('https://app.fast2x.com/api/render?__pathname=zh-CN/products&campaign=launch'))
  expect(await result.text()).toBe('https://app.fast2x.com/zh-CN/products?campaign=launch')
})

it('forwards server-function POST bodies and content type', async () => {
  render.mockImplementation(async (request: Request) => {
    expect(request.method).toBe('POST')
    expect(request.headers.get('content-type')).toBe('application/json')
    expect(await request.json()).toEqual({ path: '/', locale: 'en' })
    return new Response('ok')
  })
  const result = await handler.fetch(new Request('https://app.fast2x.com/api/render?__pathname=_serverFn/example', {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ path: '/', locale: 'en' }),
  }))
  expect(result.status).toBe(200)
})
