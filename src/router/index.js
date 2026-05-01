import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AdvertisersPage from '@/views/AdvertisersPage.vue'
import HostsPage from '@/views/HostsPage.vue'
import PricingPage from '@/views/PricingPage.vue'
import NetworkPage from '@/views/NetworkPage.vue'
import AboutPage from '@/views/AboutPage.vue'
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
      title: 'Mimuads (Mimu) — Your ad, on every street in Lagos | MimuAds',
      description: "Mimuads is Lagos' neighborhood advertising network. Run your ad on screens inside pharmacies, eateries and salons across 18 LGAs — from ₦5,000, with AI-verified viewership. Also known as MimuAds / Usemimu."
    }
  },
  {
    path: '/advertisers',
    name: 'advertisers',
    component: AdvertisersPage,
    meta: {
      title: 'Advertise on Mimuads — Reach Lagos customers from ₦5,000 | MimuAds',
      description: 'Put your ad inside the pharmacies, eateries and salons your customers visit every day. AI-verified viewership, APCON-vetted, live in 24 hours. Mimuads (MimuAds / Usemimu) advertising starts at ₦5,000.'
    }
  },
  {
    path: '/hosts',
    name: 'hosts',
    component: HostsPage,
    meta: {
      title: 'Host a Mimuads Screen — Earn ₦20k–₦60k/month in Lagos | Usemimu',
      description: 'Host a Mimuads (Mimu) screen in your shop. Earn ₦20,000–₦60,000 per month, paid every Friday. No running costs, no maintenance — just passive income from your storefront.'
    }
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingPage,
    meta: {
      title: 'Pricing — Mimuads Ads from ₦5,000 | MimuAds / Usemimu',
      description: 'Transparent per-play pricing in Naira. No hidden fees, no agency margin, APCON vetting included. Mimuads (MimuAds) plans from ₦5,000 starter to ₦80,000 scale.'
    }
  },
  {
    path: '/network',
    name: 'network',
    component: NetworkPage,
    meta: {
      title: 'The Mimuads Network — 1,247 screens across 18 LGAs in Lagos',
      description: 'Browse the Mimuads (Mimu) network of 1,247 screens across 18 Lagos LGAs. Filter by location, category, and daily traffic. See exactly where your ads will play.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {
      title: 'About Mimuads — Built in Lagos, for Lagos first | Usemimu',
      description: "Mimuads means 'to grab, to hold attention' in Yoruba. We built a neighborhood advertising network for Nigerian SMEs — screens hosted by local businesses, ad time sold in Naira, viewership verified by AI."
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
  // Catch-all 404 — shown briefly, then auto-redirected to `/` (HomePage).
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
  const title = to.meta?.title || `${SITE_NAME} — Your ad, on every street in Lagos`
  const description = to.meta?.description || "Mimuads is Lagos' neighborhood advertising network."
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

  setCanonical(url)
})

export default router
