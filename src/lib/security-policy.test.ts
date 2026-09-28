import { describe, expect, it } from 'vitest'

import { PUBLIC_CONTENT_SECURITY_POLICY } from './security-policy'

describe('PUBLIC_CONTENT_SECURITY_POLICY', () => {
  it('keeps the base minimal without wildcard or eval execution', () => {
    expect(PUBLIC_CONTENT_SECURITY_POLICY).toContain("default-src 'self'")
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toContain("'unsafe-eval'")
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toMatch(/(?:^|\s)\*(?:;|\s|$)/)
  })

  it('carries no third-party runtime origins', () => {
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toContain('google.com')
    expect(PUBLIC_CONTENT_SECURITY_POLICY).not.toContain('shift4api.net')
    expect(PUBLIC_CONTENT_SECURITY_POLICY).toContain("form-action 'self'")
  })
})
