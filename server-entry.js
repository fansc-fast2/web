/**
 * TanStack Start production server entry.
 *
 * Serves static assets from dist/client/ and delegates everything else to the
 * SSR handler (dist/server/server.js). vite preview cannot serve TanStack
 * Start's SSR output (no static index.html), so production runs this.
 */
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { Readable } from 'node:stream';
import { constants as zlibConstants, createBrotliCompress, createGzip } from 'node:zlib';
import serverModule from './dist/server/server.js';

const handler = serverModule?.fetch ?? serverModule?.default?.fetch ?? serverModule;
const port = Number(process.env.PORT || 3003);
const clientDir = new URL('./dist/client/', import.meta.url).pathname;


const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.txt': 'text/plain', '.map': 'application/json',
};

const COMPRESSIBLE_EXTENSIONS = new Set([
  '.css', '.html', '.js', '.json', '.map', '.mjs', '.svg', '.txt', '.xml',
]);
const MIN_COMPRESSIBLE_BYTES = 1024;
const PUBLIC_HTML_CACHE_CONTROL = process.env.PUBLIC_HTML_CACHE_CONTROL
  || (process.env.NODE_ENV === 'production'
    ? 'public, max-age=0, s-maxage=60, stale-while-revalidate=300'
    : '');

function acceptsEncoding(req, encoding) {
  const header = String(req.headers['accept-encoding'] || '').toLowerCase();
  return header.split(',').some((part) => {
    const [name, ...params] = part.trim().split(';');
    if (name !== encoding && name !== '*') return false;
    const quality = params.find((param) => param.trim().startsWith('q='));
    return !quality || Number(quality.trim().slice(2)) > 0;
  });
}

function contentIsCompressible(contentType) {
  return /^(?:text\/|application\/(?:javascript|json|manifest|wasm|xml)|image\/svg\+xml)/i.test(contentType || '');
}

function selectContentEncoding(req, contentType, size = -1, ext = '') {
  if (!contentIsCompressible(contentType)) return null;
  if (size >= 0 && size < MIN_COMPRESSIBLE_BYTES) return null;
  if (acceptsEncoding(req, 'br')) return 'br';
  if (acceptsEncoding(req, 'gzip')) return 'gzip';
  if (ext && !COMPRESSIBLE_EXTENSIONS.has(ext)) return null;
  return null;
}

function createCompressor(encoding) {
  if (encoding === 'br') {
    return createBrotliCompress({
      params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 4 },
    });
  }
  return createGzip({ level: 6 });
}

function canCachePublicHtml(req, url, response) {
  return Boolean(
    PUBLIC_HTML_CACHE_CONTROL
    && /^text\/html/i.test(response.headers.get('content-type') || '')
    && req.method === 'GET'
    && !req.headers.cookie
    && !response.headers.has('set-cookie'),
  );
}

function withCompressionHeaders(headers, encoding) {
  if (!encoding) return headers;
  const next = { ...headers };
  delete next['Content-Length'];
  delete next['content-length'];
  delete next['Content-Encoding'];
  delete next['content-encoding'];
  next['Content-Encoding'] = encoding;
  const vary = next.Vary || next.vary;
  delete next.vary;
  next.Vary = vary ? `${vary}, Accept-Encoding` : 'Accept-Encoding';
  return next;
}

// Baseline security headers for every response type (SSR, static, S3 proxy).
function baselineSecurityHeaders(existing = {}) {
  const h = { ...existing };
  const hsts = process.env.HSTS_HEADER
    ?? (process.env.NODE_ENV === 'production'
      ? 'max-age=31536000; includeSubDomains'
      : '');
  if (hsts && !h['strict-transport-security']) h['strict-transport-security'] = hsts;
  if (!h['x-content-type-options']) h['x-content-type-options'] = 'nosniff';
  if (!h['x-frame-options']) h['x-frame-options'] = 'DENY';
  if (!h['referrer-policy']) h['referrer-policy'] = 'strict-origin-when-cross-origin';
  if (!h['permissions-policy']) h['permissions-policy'] = 'camera=(), microphone=(), geolocation=()';
  return h;
}

// Only content-hashed build artifacts may be cached immutably — files with a
// stable name (tms.css, logo.png, ...) would serve stale content for a year.
const HASHED_ASSET = /[.-][A-Za-z0-9_-]{8}\.(js|mjs|css|woff2?|png|jpg|jpeg|webp|svg|gif)$/;

function cacheControlFor(filePath, ext, versioned = false) {
  if (ext === '.html') return 'no-cache';
  if (versioned && COMPRESSIBLE_EXTENSIONS.has(ext)) return 'public, max-age=31536000, immutable';
  if (HASHED_ASSET.test(filePath)) return 'public, max-age=31536000, immutable';
  return 'public, max-age=300';
}

function serveStatic(urlPath, search, req, res) {
  // Normalize + prevent path traversal.
  const decoded = decodeURIComponent(urlPath);
  let filePath = join(clientDir, normalize(decoded));
  if (!filePath.startsWith(clientDir)) { res.writeHead(403); res.end('Forbidden'); return; }
  if (filePath.endsWith('/')) filePath = join(filePath, 'index.html');

  if (existsSync(filePath) && statSync(filePath).isFile()) {
    const ext = extname(filePath);
    const stats = statSync(filePath);
    const contentType = MIME[ext] || 'application/octet-stream';
    const encoding = selectContentEncoding(req, contentType, stats.size, ext);
    const headers = withCompressionHeaders({
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': cacheControlFor(filePath, ext, new URLSearchParams(search).has('v')),
    }, encoding);
    res.writeHead(200, baselineSecurityHeaders(headers));
    if (req.method === 'HEAD') {
      res.end();
      return true;
    }
    const source = createReadStream(filePath);
    if (encoding) source.pipe(createCompressor(encoding)).pipe(res);
    else source.pipe(res);
    return true;
  }
  return false;
}

// Published-storage origin (full base incl. path prefix, e.g.
// https://<bucket>.cos.<region>.myqcloud.com/static). Provider-agnostic:
// Tencent COS / AWS S3 / any CDN fronting the bucket. Unset = no proxying
// (local-only run; PUBLISHED_ORIGIN also drives the server-side reads).
const PUBLISHED_PROXY_BASE = (process.env.PUBLISHED_ORIGIN || '').replace(/\/+$/, '');

// Same-origin proxy for published assets (published.css / blocks-renderer.js /
// site data) living in object storage — avoids CORS (buckets serve no CORS
// headers) and keeps the storefront URLs origin-relative.
// `prefix` is the storefront path segment stripped before the base
// ('/s3' for CDN assets, '/sites' for published site data).
function proxyS3(req, res, url, prefix) {
  if (!PUBLISHED_PROXY_BASE) { res.writeHead(503); res.end('Published origin not configured'); return; }
  const target = `${PUBLISHED_PROXY_BASE}${url.pathname.slice(prefix.length)}${url.search}`;
  fetch(target, { method: req.method, headers: { Accept: req.headers.accept || '*/*' } })
    .then(async (upstream) => {
      const contentType = upstream.headers.get('content-type') || 'application/octet-stream';
      const upstreamEncoding = upstream.headers.get('content-encoding');
      const versionedAsset = url.searchParams.has('v') && /\.(?:css|js|mjs)$/i.test(url.pathname);
      // Published site data lives at stable URLs that change on every release:
      // revalidate always, serve stale for at most the SWR window. Other S3
      // assets keep the upstream/default policy.
      const defaultCacheControl = prefix === '/sites'
        ? 'public, max-age=0, s-maxage=60, stale-while-revalidate=300'
        : 'public, max-age=300';
      const cacheControl = versionedAsset
        ? 'public, max-age=31536000, immutable'
        : upstream.headers.get('cache-control') || defaultCacheControl;
      const encoding = upstreamEncoding
        ? null
        : selectContentEncoding(req, contentType, Number(upstream.headers.get('content-length') || -1), extname(url.pathname));
      const headers = withCompressionHeaders({
        'Content-Type': contentType,
        'Cache-Control': cacheControl,
        ...(upstreamEncoding ? { 'Content-Encoding': upstreamEncoding } : {}),
        ...(upstream.headers.get('etag') ? { ETag: upstream.headers.get('etag') } : {}),
        ...(upstream.headers.get('last-modified') ? { 'Last-Modified': upstream.headers.get('last-modified') } : {}),
        ...(!encoding && upstream.headers.get('content-length') ? { 'Content-Length': upstream.headers.get('content-length') } : {}),
      }, encoding);
      res.writeHead(upstream.status, baselineSecurityHeaders(headers));
      if (req.method === 'HEAD' || !upstream.body) {
        res.end();
        return;
      }
      const source = Readable.fromWeb(upstream.body);
      if (encoding) source.pipe(createCompressor(encoding)).pipe(res);
      else source.pipe(res);
    })
    .catch(() => { res.writeHead(502); res.end('S3 proxy error'); });
}


const httpServer = createServer((req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  // 1. Try static first (assets/cdn/files) — includes a local public/sites/
  //    mirror when one was built in (local prod runs synced by tms-admin).
  if (serveStatic(url.pathname, url.search, req, res)) return;

  // 2. Proxy /s3/* to the published-storage origin (same-origin, CORS-free).
  if (url.pathname.startsWith('/s3/')) { proxyS3(req, res, url, '/s3'); return; }

  // 2b. /sites/* falls through to the S3 proxy when no local static copy
  // exists, so freshly published content is always served in production
  // (public/sites is gitignored; builds no longer bake a stale copy).
  if (url.pathname.startsWith('/sites/')) { proxyS3(req, res, url, '/sites'); return; }


  // 3. Else SSR handler.
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (v !== undefined) headers.set(k, Array.isArray(v) ? v.join(', ') : String(v));
  }
  // Forward the request body — server fn POSTs read it via request.json();
  // GET/HEAD must not carry a body, and stream bodies require duplex: 'half'.
  const hasBody = req.method !== 'GET' && req.method !== 'HEAD';
  const request = new Request(url.toString(), {
    method: req.method,
    headers,
    ...(hasBody ? { body: req, duplex: 'half' } : {}),
  });
  handler(request)
    .then(async (response) => {
      const outHeaders = Object.fromEntries(response.headers.entries());
      const contentType = response.headers.get('content-type') || '';
      if (canCachePublicHtml(req, url, response) && !response.headers.has('cache-control')) {
        outHeaders['cache-control'] = PUBLIC_HTML_CACHE_CONTROL;
      }
      const encoding = response.headers.has('content-encoding')
        ? null
        : selectContentEncoding(req, contentType, Number(response.headers.get('content-length') || -1));
      const headers = withCompressionHeaders(outHeaders, encoding);
      res.writeHead(response.status, baselineSecurityHeaders(headers));
      if (req.method === 'HEAD' || !response.body) {
        res.end();
        return;
      }
      const source = Readable.fromWeb(response.body);
      if (encoding) source.pipe(createCompressor(encoding)).pipe(res);
      else source.pipe(res);
    })
    .catch((err) => {
      console.error('[server-entry] handler error:', err);
      res.writeHead(500);
      res.end('Internal Server Error');
    });
});

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`[server-entry] TanStack Start server listening on :${port}`);
});
