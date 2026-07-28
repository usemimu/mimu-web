import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AgenciesPage from '@/views/AgenciesPage.vue'
import TermsPage from '@/views/TermsPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, ROUTE_META } from '@/seo/site-meta'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: ROUTE_META['/']
  },
  {
    path: '/agencies',
    name: 'agencies',
    component: AgenciesPage,
    meta: ROUTE_META['/agencies']
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage,
    meta: ROUTE_META['/terms']
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Page not found — Mimuads',
      description: "The page you tried to open isn't on Mimuads. Heading back to the homepage."
    }
  }
]

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/) || []
    if (key && name) el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Runtime <head> sync as the SPA navigates. During SSR/SSG there is no
// `document` — the static <head> is written by scripts/prerender.mjs from
// the same ROUTE_META, so we simply no-op here on the server.
function applyMeta(to) {
  if (typeof document === 'undefined') return

  const title = to.meta?.title || `${SITE_NAME} — Your brand, on digital screens where your audience is`
  const description = to.meta?.description || "Mimuads is Africa's first AI-native digital out-of-home platform. Launch self-serve campaigns on neighborhood screens across Lagos. No agency needed."
  const url = `${SITE_URL}${to.path}`

  document.title = title

  setMeta('meta[name="description"]', 'content', description)
  setMeta('meta[property="og:title"]', 'content', title)
  setMeta('meta[property="og:description"]', 'content', description)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('meta[property="og:image"]', 'content', DEFAULT_OG_IMAGE)
  setMeta('meta[property="og:type"]', 'content', 'website')
  setMeta('meta[property="og:site_name"]', 'content', SITE_NAME)
  setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
  setMeta('meta[name="twitter:title"]', 'content', title)
  setMeta('meta[name="twitter:description"]', 'content', description)
  setMeta('meta[name="twitter:image"]', 'content', DEFAULT_OG_IMAGE)

  // Per-route robots policy. Index/follow by default; a route flagged with
  // `meta.noindex: true` gets an explicit override so it can't slip into the
  // public index even if linked. No routes use this today — kept as a hook.
  setMeta(
    'meta[name="robots"]',
    'content',
    to.meta?.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  )

  setCanonical(url)
}

// Factory: one router instance per app instance. The client passes nothing
// (defaults to HTML5 history); the SSG server entry passes a memory history.
export function createAppRouter(history = createWebHistory()) {
  const router = createRouter({
    history,
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) return savedPosition
      return { top: 0 }
    }
  })

  router.afterEach(applyMeta)
  return router
}
