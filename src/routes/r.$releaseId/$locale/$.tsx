import { createFileRoute, notFound } from '@tanstack/react-router'
import { CdnBlockRenderer } from '@/lib/cdn-renderer'
import { loadPublishedPage } from '@/server/published-page'

export const Route = createFileRoute('/r/$releaseId/$locale/$')({
  loader: async ({ params }) => {
    const isLocalePrefix = params.locale === 'en' || params.locale === 'zh-CN'
    const splat = isLocalePrefix
      ? (params._splat || '')
      : [params.locale, params._splat].filter(Boolean).join('/')
    const locale = isLocalePrefix ? params.locale : 'en'
    const result = await loadPublishedPage({ data: { path: '/' + splat, locale, releaseId: params.releaseId } })
    if (!result) throw notFound()
    return { ...result, splat }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: String(loaderData?.page?.seoTitle || loaderData?.page?.title || 'OneCMS') },
      ...(loaderData?.page?.seoDescription
        ? [{ name: 'description', content: String(loaderData.page.seoDescription) }]
        : []),
    ],
    // Canonical/alternates point at the production path (no /r/<id>/).
    links: loaderData?.siteUrl ? [
      { rel: 'canonical', href: `${loaderData.siteUrl}${loaderData.locale === 'zh-CN' ? '/zh-CN' : ''}${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'en', href: `${loaderData.siteUrl}${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'zh-CN', href: `${loaderData.siteUrl}/zh-CN${loaderData.page.path}` },
      { rel: 'alternate', hrefLang: 'x-default', href: `${loaderData.siteUrl}${loaderData.page.path}` },
    ] : [],
  }),
  component: ReleaseLocaleDynamicPage,
})

function ReleaseLocaleDynamicPage() {
  const pageData = Route.useLoaderData()
  const { releaseId } = Route.useParams()
  return (
    <CdnBlockRenderer
      blocks={[]}
      initialHtml={pageData.html}
      pageId={(pageData.splat || 'home').split('/').filter(Boolean).pop()?.replace(/\.html$/, '') || 'home'}
      navigation={pageData.navigation}
      siteName={pageData.siteName}
      logos={pageData.logos}
      releaseId={releaseId}
    />
  )
}
