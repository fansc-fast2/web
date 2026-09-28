import { createFileRoute, notFound } from '@tanstack/react-router'
import { CdnBlockRenderer } from '@/lib/cdn-renderer'
import { loadPublishedPage } from '@/server/published-page'

export const Route = createFileRoute('/$locale/')({
  loader: async ({ params }) => {
    const locale = params.locale === 'zh-CN' ? 'zh-CN' : 'en'
    const path = params.locale === 'en' || params.locale === 'zh-CN' ? '/' : `/${params.locale}`
    const result = await loadPublishedPage({ data: { path, locale } })
    if (!result) throw notFound()
    return result
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: String(loaderData?.page?.seoTitle || loaderData?.page?.title || 'OneCMS') },
      ...(loaderData?.page?.seoDescription
        ? [{ name: 'description', content: String(loaderData.page.seoDescription) }]
        : []),
      { property: 'og:title', content: String(loaderData?.page?.seoTitle || loaderData?.page?.title || 'OneCMS') },
      ...(loaderData?.page?.seoDescription
        ? [{ property: 'og:description', content: String(loaderData.page.seoDescription) }]
        : []),
      { property: 'og:type', content: 'website' },
      ...(loaderData?.siteUrl
        ? [{ property: 'og:url', content: `${loaderData.siteUrl}${loaderData.locale === 'zh-CN' ? '/zh-CN' : ''}${loaderData.page.path}` }]
        : []),
      ...(loaderData?.page?.seoImage
        ? [{ property: 'og:image', content: loaderData.page.seoImage }]
        : []),
      { name: 'twitter:card', content: loaderData?.page?.seoImage ? 'summary_large_image' : 'summary' },
    ],
    links: loaderData?.siteUrl ? [
      { rel: 'canonical', href: `${loaderData.siteUrl}${loaderData.locale === 'zh-CN' ? '/zh-CN' : ''}${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'en', href: `${loaderData.siteUrl}${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'zh-CN', href: `${loaderData.siteUrl}/zh-CN${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'x-default', href: `${loaderData.siteUrl}${loaderData.page.path}` },
    ] : [],
  }),
  component: LocaleHomePage,
})

function LocaleHomePage() {
  const pageData = Route.useLoaderData()
  const pageId = pageData.page.path.split('/').filter(Boolean).pop()?.replace(/\.html$/, '') || 'home'
  return (
    <CdnBlockRenderer
      blocks={[]}
      initialHtml={pageData.html}
      pageId={pageId}
      navigation={pageData.navigation}
      siteName={pageData.siteName}
      logos={pageData.logos}
    />
  )
}
