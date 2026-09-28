import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/$locale')({
  beforeLoad: ({ params, location }) => {
    if (params.locale === 'en') {
      const pathname = location.pathname.replace(/^\/en(?=\/|$)/, '') || '/'
      throw redirect({
        href: `${pathname}${location.searchStr || ''}${location.hash || ''}`,
        replace: true,
      })
    }
  },
  component: Outlet,
})
