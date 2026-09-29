export const PUBLIC_CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  // Published fragments carry inline styles/scripts. The block renderer and
  // published theme load from the object-storage/CDN origin (static.fast2x.com
  // on Vercel, same-origin /s3 proxy on node deployments).
  "script-src 'self' 'unsafe-inline' https://static.fast2x.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://static.fast2x.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https:",
  "frame-src 'self'",
  "media-src 'self' blob: https:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')
