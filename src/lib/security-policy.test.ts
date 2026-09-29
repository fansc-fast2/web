import { describe, expect, it } from 'vitest'

import { PUBLIC_CONTENT_SECURITY_POLICY } from './security-policy'

describe('PUBLIC_CONTENT_SECURITY_POLICY', () => {
  it('keeps the base minimal without wildcard or eval execution', () => {
    expect(PUBLIC_CONTENT_SECURITY_POLICY).toContain("default-src 'self'")
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toContain("'unsafe-eval'")
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toMatch(/(?:^|\s)\*(?:;|\s|$)/)
  })

  it('allows the published-storage CDN origin and drops payment/reCAPTCHA leftovers', () => {
    expect(PUBLIC_CONTENT_SECURITY_POLICY).toContain('https://static.fast2x.com')
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toContain('google.com')
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toContain('shift4api.net')
    expect(PUBLIC_CONTENT_SECURITY_POLICY).toContain("form-action 'self'")
  })
})
