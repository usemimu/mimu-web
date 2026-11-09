// Post-build SSG. Produces fully static per-route HTML:
//   • correct <head> (title/description/canonical/OG/Twitter) baked in, and
//   • the route's real <body> content rendered into <div id="app">.
//
// Crawlers and link-preview bots (Slack, WhatsApp, LinkedIn, X) — none of
// which run JS — get the actual page. The client then hydrates that markup
// (src/main.js detects the server content). No headless browser: the body is
// rendered with Vue's own renderToString via the SSR build in dist-ssr/.
//
// Route meta comes from src/seo/site-meta.js, the same source the runtime
// router uses, so <head> and router can never drift.
//
// Output: dist/index.html (home) + dist/<route>/index.html per route.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ROUTE_META, SITE_URL } from '../src/seo/site-meta.js'
import { render } from '../dist-ssr/entry-server.js'

const here = dirname(fileURLToPath(import.meta.url))
const dist = resolve(here, '../dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const esc = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// Replace the content="" of the first <meta> whose opening tag contains
// `selector` (e.g. name="description"). `[^>]*` spans newlines, so it
// tolerates Vite's multi-line meta formatting.
function setMeta(html, selector, value) {
  const re = new RegExp(`(<meta\\b[^>]*\\b${selector}[^>]*\\bcontent=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`meta not found for selector: ${selector}`)
  return html.replace(re, `$1${value}$2`)
}

function setLink(html, relValue, href) {
  const re = new RegExp(`(<link\\b[^>]*\\brel="${relValue}"[^>]*\\bhref=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`link not found for rel: ${relValue}`)
  return html.replace(re, `$1${href}$2`)
}

function setHreflang(html, lang, href) {
  const re = new RegExp(`(<link\\b[^>]*\\bhreflang="${lang}"[^>]*\\bhref=")[^"]*(")`)
  return re.test(html) ? html.replace(re, `$1${href}$2`) : html
}

// Serialize a route's JSON-LD blocks and inject them just before </head>.
// These are page-specific (breadcrumb, Service, FAQ, WebPage); the global
// Organization + WebSite + SiteNavigationElement already live in index.html.
// `<` is escaped to `<` so no payload string can break out of the tag.
function injectJsonLd(html, blocks) {
  if (!blocks || !blocks.length) return html
  const tags = blocks
    .map(
      (b) =>
        `<script type="application/ld+json">${JSON.stringify(b).replace(/</g, '\\u003c')}</script>`,
    )
    .join('\n    ')
  return html.replace('</head>', `    ${tags}\n  </head>`)
}

function injectHead(html, path, meta) {
  const url = SITE_URL + (path === '/' ? '/' : path)
  const title = esc(meta.title)
  const desc = esc(meta.description)

  let out = html
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
  out = setMeta(out, 'name="description"', desc)
  out = setLink(out, 'canonical', url)
  out = setHreflang(out, 'en-ng', url)
  out = setHreflang(out, 'x-default', url)
  out = setMeta(out, 'property="og:title"', title)
  out = setMeta(out, 'property="og:description"', desc)
  out = setMeta(out, 'property="og:url"', url)
  out = setMeta(out, 'name="twitter:title"', title)
  out = setMeta(out, 'name="twitter:description"', desc)
  out = injectJsonLd(out, meta.jsonLd)
  return out
}

const APP_RE = /<div id="app">\s*<\/div>/
if (!APP_RE.test(template)) {
  throw new Error('Could not find empty <div id="app"></div> in dist/index.html')
}

let count = 0
for (const [path, meta] of Object.entries(ROUTE_META)) {
  const { html: appHtml } = await render(path)

  let page = injectHead(template, path, meta)
  page = page.replace(APP_RE, `<div id="app">${appHtml}</div>`)

  const out = path === '/' ? join(dist, 'index.html') : join(dist, path.slice(1), 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, page)
  console.log(`  prerendered ${path.padEnd(12)} → ${out.replace(dist, 'dist')}  (${(appHtml.length / 1024).toFixed(1)} KB body)`)
  count++
}
console.log(`\n✓ SSG prerendered ${count} routes`)
