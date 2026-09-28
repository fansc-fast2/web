import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { publishedFiles } = vi.hoisted(() => {
  process.env.STRAPI_URL ||= 'http://cms.test'
  return { publishedFiles: new Map<string, string>() }
})

vi.mock('node:fs/promises', () => ({
  readFile: vi.fn(async (filePath: string) => {
    const relativePath = filePath.split('/public/sites/')[1]
    const content = relativePath ? publishedFiles.get(relativePath) : undefined
    if (content === undefined) throw new Error(`Missing published test fixture: ${relativePath || filePath}`)
    return content
  }),
}))

vi.mock('@tanstack/react-start', () => ({
  createServerFn: () => ({
    inputValidator() {
      return this
    },
    handler(handler: (input: { data: unknown }) => unknown) {
      return handler
    },
  }),
}))

import { clearPublishedCacheForTests, loadPublishedPage } from './published-page'

beforeEach(() => {
  publishedFiles.clear()
  publishedFiles.set('sites.json', JSON.stringify([
    { code: 'global', domain: 'https://onecms.example.com', defaultLocale: 'en' },
  ]))
})

describe('published page rendering', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    clearPublishedCacheForTests()
    publishedFiles.clear()
  })

  it('returns page html, navigation, site config and canonical site url', async () => {
    const pages = [
      { path: '/', slug: 'home', fragment: 'fragments/home.html', title: 'Home' },
    ]
    publishedFiles.set('global/data/pages.json', JSON.stringify(pages))
    publishedFiles.set('global/data/navigation.json', JSON.stringify({
      header: [{ label: 'Products', url: '/products' }],
      footer: [{ title: 'Home', links: [] }],
    }))
    publishedFiles.set('global/data/site-config.json', JSON.stringify({
      'system-name': 'OneCMS',
      'header-logo': 'https://cdn.example.com/logo.png',
    }))
    publishedFiles.set('global/fragments/home.html', '<main>hello</main>')

    const result = await loadPublishedPage({ data: { path: '/', locale: 'en' } })

    expect(result?.html).toContain('<main>hello</main>')
    expect(result?.siteName).toBe('OneCMS')
    expect(result?.logos.header).toBe('https://cdn.example.com/logo.png')
    expect(result?.siteUrl).toBe('https://onecms.example.com')
  })

  it('falls back to the English fragment for an untranslated locale', async () => {
    const pages = [
      { path: '/products', slug: 'products', fragment: 'fragments/products.html', title: 'Products' },
    ]
    publishedFiles.set('global/data/pages.json', JSON.stringify(pages))
    publishedFiles.set('global/fragments/products.html', '<main>products</main>')

    const result = await loadPublishedPage({ data: { path: '/products', locale: 'zh-CN' } })

    expect(result?.html).toContain('<main>products</main>')
    expect(result?.locale).toBe('zh-CN')
    expect(result?.fallbackLocale).toBe('en')
  })

  it('prioritizes the first eager content image without prioritizing chrome assets', async () => {
    publishedFiles.set('global/data/pages.json', JSON.stringify([
      { path: '/', slug: 'home', fragment: 'fragments/home.html' },
    ]))
    publishedFiles.set('global/fragments/home.html', [
      '<img class="site-navigation__logo-image" loading="eager" src="/logo.png">',
      '<img class="page-hero__image" loading="eager" src="/hero.png">',
    ].join(''))

    const result = await loadPublishedPage({ data: { path: '/', locale: 'en' } })

    expect(result?.html).toContain('<img class="site-navigation__logo-image" loading="eager" src="/logo.png">')
    expect(result?.html).toContain('<img class="page-hero__image" loading="eager" src="/hero.png" fetchpriority="high">')
  })

  it('localizes internal links in stale Chinese fragments at read time', async () => {
    const pages = [
      { path: '/', slug: 'home', fragment: 'fragments/home.html' },
      { path: '/products', slug: 'products', fragment: 'fragments/products.html' },
      { path: '/blog/example', slug: 'example', fragment: 'fragments/blog/example.html' },
    ]
    publishedFiles.set('global/zh-CN/data/pages.json', JSON.stringify(pages))
    publishedFiles.set('global/zh-CN/fragments/products.html', [
      '<a href="/">Home</a>',
      '<a href="/products">Products</a>',
      '<a href="/blog/example?from=products#top">Blog</a>',
      '<a href="/api/unknown">API</a>',
      '<a href="https://example.com">External</a>',
    ].join(''))

    const result = await loadPublishedPage({
      data: { path: '/products', locale: 'zh-CN' },
    })

    expect(result?.html).toContain('href="/zh-CN/"')
    expect(result?.html).toContain('href="/zh-CN/products"')
    expect(result?.html).toContain('href="/zh-CN/blog/example?from=products#top"')
    // Unknown app routes and external links stay untouched.
    expect(result?.html).toContain('href="/api/unknown"')
    expect(result?.html).toContain('href="https://example.com"')
  })
})
