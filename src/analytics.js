// Client-only analytics. Imported solely by src/main.js (the browser entry),
// so none of this runs during SSG. Two trackers:
//
//   • Vercel Web Analytics — cookieless, privacy-friendly. inject() patches
//     the History API, so vue-router navigations are tracked automatically.
//     View at: Vercel dashboard → project → Analytics.
//
//   • Google Analytics 4 — only loads if VITE_GA_ID is set (a G-XXXXXXXXXX
//     measurement id). We disable gtag's automatic page_view and send one
//     manually per route change so SPA navigations get accurate paths.
//     Set the id in .env locally and as a VITE_GA_ID env var on Vercel.

import { inject as injectVercelAnalytics } from '@vercel/analytics'

// GA4 measurement id. Defaults to the production property; override per
// environment with VITE_GA_ID if needed. In dev it only loads when the env
// var is explicitly set, so `npm run dev` doesn't pollute analytics.
const GA_ID = import.meta.env.VITE_GA_ID || (import.meta.env.PROD ? 'G-XVRHCKX08B' : '')

function loadGtag(id) {
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  // Manual page_view per SPA route change (below) — avoid a double count.
  window.gtag('config', id, { send_page_view: false })
}

// Fire a GA4 event. No-op until gtag has loaded (i.e. VITE_GA_ID is set), so
// it's always safe to call from templates.
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || !name) return
  if (typeof window.gtag === 'function') window.gtag('event', name, params)
}

// Delegated click tracking: any element (or ancestor) carrying
// `data-ga-event` fires that GA event, with the optional `data-ga-label` as
// its `label` param and the current path as `page_path`. Keeps templates to a
// single attribute — no per-button handlers.
function trackClicks() {
  document.addEventListener(
    'click',
    (e) => {
      const el = e.target.closest?.('[data-ga-event]')
      if (!el) return
      trackEvent(el.dataset.gaEvent, {
        label: el.dataset.gaLabel || undefined,
        page_path: window.location.pathname,
      })
    },
    { capture: true },
  )
}

export function initAnalytics(router) {
  if (typeof window === 'undefined') return

  injectVercelAnalytics()
  trackClicks()

  if (GA_ID) {
    loadGtag(GA_ID)
    // Registered before router.isReady() resolves in main.js, so this also
    // fires for the initial navigation — one page_view per load, then one
    // per client-side route change.
    router.afterEach((to) => {
      window.gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_location: window.location.href,
        page_title: to.meta?.title || document.title,
      })
    })
  }
}
