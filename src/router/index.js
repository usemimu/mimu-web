import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import TermsPage from '@/views/TermsPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const SITE_URL = 'https://usemimu.com'
const SITE_NAME = 'Mimuads'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Mimuads — Your brand, on digital screens where your audience is',
      description: "Mimuads is Africa's first AI-native digital out-of-home platform. Launch self-serve campaigns on screens inside pharmacies, eateries and salons across Lagos — no agency needed. AI handles targeting, compliance, and viewership verification automatically. Also known as Usemimu."
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsPage,
    meta: {
      title: 'Terms & Conditions — Mimuads',
      description: 'Plain-language Terms of Service for Mimuads — covering advertisers, hosts, payments, refunds, content rules, data, and disputes under Nigerian law.'
    }
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

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

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

router.afterEach((to) => {
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

  // Per-route robots policy. The site is index/follow by default
  // (set in index.html); any route flagged with `meta.noindex: true`
  // gets an explicit override so it can't slip into the public index
  // even if linked. No routes use this today — kept as a generic
  // hook for future private surfaces (data room, investor deck,
  // internal docs).
  setMeta(
    'meta[name="robots"]',
    'content',
    to.meta?.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  )

  setCanonical(url)
})

export default router
