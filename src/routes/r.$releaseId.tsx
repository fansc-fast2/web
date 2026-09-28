import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

/**
 * Release-preview layout: /r/<releaseId>/...
 *
 * The releaseId lives in the path (not a query param) so it survives SPA
 * navigation, refreshes, and locale switches. Children read it from params and
 * pass it to loadPublishedPage / CdnBlockRenderer.
 */
export const Route = createFileRoute('/r/$releaseId')({
  // /r/<id> (no locale segment yet) → default to the English preview home.
  // Guard against running on child routes (/r/<id>/<locale>/...) which would
  // otherwise loop — only redirect when the path ends right after the releaseId.
  beforeLoad: ({ params, location }) => {
    const isLayoutOnly = new RegExp(`/r/${params.releaseId}/?$`).test(location.pathname)
    if (isLayoutOnly) {
      throw redirect({ href: `/r/${params.releaseId}/en`, replace: true })
    }
  },
  component: Outlet,
})
