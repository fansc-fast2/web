import { createFileRoute, notFound } from '@tanstack/react-router'
import { CdnBlockRenderer } from '@/lib/cdn-renderer'
import { loadPublishedPage } from '@/server/published-page'

export const Route = createFileRoute('/')({
  loader: async () => {
    const result = await loadPublishedPage({ data: { path: '/', locale: 'en' } })
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
    links: loaderData?.siteUrl ? [
      { rel: 'canonical', href: `${loaderData.siteUrl}/` },
      { rel: 'alternate', hrefLang: 'en', href: `${loaderData.siteUrl}/` },
      { rel: 'alternate', hrefLang: 'zh-CN', href: `${loaderData.siteUrl}/zh-CN` },
      { rel: 'alternate', hrefLang: 'x-default', href: `${loaderData.siteUrl}/` },
    ] : [],
  }),
  component: EnglishHomePage,
})

function EnglishHomePage() {
  const pageData = Route.useLoaderData()
  return (
    <CdnBlockRenderer
      blocks={[]}
      initialHtml={pageData.html}
      pageId="home"
      navigation={pageData.navigation}
      siteName={pageData.siteName}
      logos={pageData.logos}
    />
  )
}
