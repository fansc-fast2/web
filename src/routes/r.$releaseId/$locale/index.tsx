import { createFileRoute, notFound } from '@tanstack/react-router'
import { CdnBlockRenderer } from '@/lib/cdn-renderer'
import { loadPublishedPage } from '@/server/published-page'

export const Route = createFileRoute('/r/$releaseId/$locale/')({
  loader: async ({ params }) => {
    const locale = params.locale === 'zh-CN' ? 'zh-CN' : 'en'
    // Release home: any $locale value resolves to home (/). en stays '/'.
    const path = params.locale === 'en' || params.locale === 'zh-CN' ? '/' : `/${params.locale}`
    const result = await loadPublishedPage({ data: { path, locale, releaseId: params.releaseId } })
    if (!result) throw notFound()
    return result
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: String(loaderData?.page?.seoTitle || loaderData?.page?.title || 'OneCMS') },
      ...(loaderData?.page?.seoDescription
        ? [{ name: 'description', content: String(loaderData.page.seoDescription) }]
        : []),
    ],
    // Canonical/alternates point at the production path (no /r/<id>/) so
    // previews are never indexed as the authoritative URL.
    links: loaderData?.siteUrl ? [
      { rel: 'canonical', href: `${loaderData.siteUrl}${loaderData.locale === 'zh-CN' ? '/zh-CN' : ''}${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'en', href: `${loaderData.siteUrl}${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'zh-CN', href: `${loaderData.siteUrl}/zh-CN${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'x-default', href: `${loaderData.siteUrl}${loaderData.page.path}` },
    ] : [],
  }),
  component: ReleaseLocaleHomePage,
})

function ReleaseLocaleHomePage() {
  const pageData = Route.useLoaderData()
  const { releaseId } = Route.useParams()
  const pageId = pageData.page.path.split('/').filter(Boolean).pop()?.replace(/\.html$/, '') || 'home'
  return (
    <CdnBlockRenderer
      blocks={[]}
      initialHtml={pageData.html}
      pageId={pageId}
      navigation={pageData.navigation}
      siteName={pageData.siteName}
      logos={pageData.logos}
      releaseId={releaseId}
    />
  )
}
