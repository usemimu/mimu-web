import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AgenciesPage from '@/views/AgenciesPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import GetStartedPage from '@/views/GetStartedPage.vue'
import PricingPage from '@/views/PricingPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import HostsPage from '@/views/HostsPage.vue'
import PlayerPage from '@/views/PlayerPage.vue'
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
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: ROUTE_META['/about']
  },
  {
    path: '/get-started',
    name: 'get-started',
    component: GetStartedPage,
    meta: ROUTE_META['/get-started']
  },
  // Developers was folded into the Player page. Client-side catch for the old
  // path; a permanent server redirect lives in vercel.json.
  { path: '/developers', redirect: '/player' },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingPage,
    meta: ROUTE_META['/pricing']
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: ROUTE_META['/contact']
  },
  {
    path: '/hosts',
    name: 'hosts',
    component: HostsPage,
    meta: ROUTE_META['/hosts']
  },
  {
    path: '/player',
    name: 'player',
    component: PlayerPage,
    meta: ROUTE_META['/player']
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage,
    meta: ROUTE_META['/terms']
  },
  // ── Offer portal (QR + email links) ──────────────────────────────────────
  // Dynamic, client-rendered, and `standalone` (no marketing nav/footer).
  // `noindex` keeps these transactional pages out of search. Not in
  // ROUTE_META, so they're never prerendered — they hydrate + fetch at runtime.
  {
    path: '/deal/:code',
    name: 'claim-offer',
    component: () => import('@/views/ClaimOfferPage.vue'),
    meta: { standalone: true, noindex: true, title: 'Your deal — Mimuads' }
  },
  {
    path: '/portal/confirm/:token',
    name: 'confirm-offer',
    component: () => import('@/views/ConfirmOfferPage.vue'),
    meta: { standalone: true, noindex: true, title: 'Confirm — Mimuads' }
  },
  {
    path: '/portal/unsubscribe/:token',
    name: 'unsubscribe-offer',
    component: () => import('@/views/UnsubscribePage.vue'),
    meta: { standalone: true, noindex: true, title: 'Unsubscribe — Mimuads' }
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
