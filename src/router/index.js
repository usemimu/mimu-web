import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AdvertisersPage from '@/views/AdvertisersPage.vue'
import HostsPage from '@/views/HostsPage.vue'
import PricingPage from '@/views/PricingPage.vue'
import NetworkPage from '@/views/NetworkPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/advertisers',
    name: 'advertisers',
    component: AdvertisersPage
  },
  {
    path: '/hosts',
    name: 'hosts',
    component: HostsPage
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: PricingPage
  },
  {
    path: '/network',
    name: 'network',
    component: NetworkPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
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

export default router
