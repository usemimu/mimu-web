<template>
  <footer class="site-footer border-t" :class="dark ? 'is-dark' : 'is-light'">
    <div class="px-[clamp(20px,4vw,48px)] pt-14 pb-10">
      <!-- Top: brand + link columns, spread across the full width -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))] lg:gap-x-8">
        <!-- Brand -->
        <div class="col-span-2 sm:col-span-3 lg:col-span-1">
          <router-link to="/" class="inline-flex items-center gap-2.5 no-underline" aria-label="Mimuads home">
            <Logo :size="30" :color="dark ? '#F4EDE4' : '#B55430'" />
            <span class="wordmark" :class="dark ? 'text-neutral-100' : 'text-neutral-900'">mimuads</span>
          </router-link>
          <p class="mt-4 text-[13.5px] leading-relaxed max-w-[15rem]" :class="mutedCls">
            The infrastructure layer for physical ad buying. Verified, programmatic, built in Africa.
          </p>
        </div>

        <!-- Link columns -->
        <div v-for="col in columns" :key="col.title">
          <h4 class="footer-head" :class="headCls">{{ col.title }}</h4>
          <ul class="mt-4 flex flex-col gap-2.5">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.to || link.href"
                :download="link.download || null"
                :target="link.external ? '_blank' : null"
                :rel="link.external ? 'noopener noreferrer' : null"
                class="footer-link"
                :class="linkCls"
              >
                <span>{{ link.label }}</span>
                <span v-if="link.badge" class="footer-badge" :class="badgeCls">{{ link.badge }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px my-10" :class="dark ? 'bg-white/[0.08]' : 'bg-neutral-200'"></div>

      <!-- Bottom bar -->
      <div class="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-6">
        <!-- Legal -->
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px]" :class="mutedCls">
          <span>© {{ year }} Mimuads</span>
          <span class="dot" aria-hidden="true">·</span>
          <a href="#" class="footer-legal" :class="linkCls">Privacy</a>
          <router-link to="/terms" class="footer-legal" :class="linkCls">Terms</router-link>
          <span class="dot" aria-hidden="true">·</span>
          <span>APCON registered</span>
          <span class="dot" aria-hidden="true">·</span>
          <span>NDPR compliant</span>
        </div>

        <!-- Socials + store badges -->
        <div class="flex flex-wrap items-center gap-5">
          <div class="flex items-center gap-2">
            <a
              v-for="s in socials"
              :key="s.href"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener noreferrer"
              class="social"
              :class="socialCls"
            >
              <i :class="`ph ${s.icon} text-[15px]`"></i>
            </a>
          </div>
          <div class="flex items-center gap-2.5">
            <a
              href="https://apps.apple.com/app/mimuads/id6775953486"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img :src="dark ? '/hero/badge-apple.svg' : '/apple-badge.svg'" alt="Download on the App Store" class="h-9 w-auto" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ng.mimu.advertiser"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <img :src="dark ? '/hero/badge-google.svg' : '/google-badge.svg'" alt="Get it on Google Play" class="h-9 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import Logo from './Logo.vue'
import { PLAYER_APK_URL } from '../links.js'

const props = defineProps({
  dark: { type: Boolean, default: false },
})

const year = new Date().getFullYear()

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Self serve buying', href: '/#self-serve' },
      { label: 'Verification', href: '/#verification' },
      { label: 'Supply side API', to: '/player' },
      { label: 'White label', href: '/#white-label' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Get started', to: '/get-started' },
      { label: 'SMBs on the app', href: '/#smbs' },
      { label: 'Startups & brands', href: '/#brands' },
      { label: 'Agencies', to: '/agencies' },
      { label: 'FMCG & enterprise', href: '/#fmcg' },
      { label: 'DSPs & buying platforms', href: '/#dsps' },
      { label: 'Host a screen', to: '/hosts' },
    ],
  },
  {
    title: 'Network',
    links: [
      { label: 'Coverage map', href: '/#coverage' },
      { label: 'Venue types', href: '/#venues' },
      { label: 'Live network stats', href: '/#network' },
      { label: 'Cities', href: '/#cities' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Mimuads Player', to: '/player' },
      { label: 'Supply side API', to: '/player' },
      { label: 'Download player', href: PLAYER_APK_URL, download: true, external: true },
      { label: 'Request early access', href: 'mailto:hello@usemimu.com' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Agencies', to: '/agencies' },
      { label: 'Careers', href: 'mailto:hello@usemimu.com' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

const socials = [
  { icon: 'ph-instagram-logo', href: 'https://www.instagram.com/mimuads', label: 'Mimuads on Instagram' },
  { icon: 'ph-x-logo', href: 'https://x.com/mimuads', label: 'Mimuads on X' },
  { icon: 'ph-linkedin-logo', href: 'https://www.linkedin.com/company/mimuads', label: 'Mimuads on LinkedIn' },
]

const headCls = computed(() => (props.dark ? 'text-neutral-500' : 'text-neutral-400'))
const linkCls = computed(() => (props.dark ? 'text-neutral-400' : 'text-neutral-500'))
const mutedCls = computed(() => (props.dark ? 'text-neutral-500' : 'text-neutral-400'))
const badgeCls = computed(() => (props.dark ? 'border-white/20 text-neutral-400' : 'border-neutral-300 text-neutral-400'))
const socialCls = computed(() =>
  props.dark
    ? 'border-white/10 text-neutral-400 hover:text-neutral-100 hover:border-white/30 hover:bg-white/5'
    : 'border-neutral-200 text-neutral-400 hover:text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50',
)
</script>

<style scoped>
.site-footer {
  font-family: 'Google Sans', sans-serif;
  transition: border-color 0.15s ease;
}
.is-light { border-color: #e5ddd3; background: #faf7f3; }
.is-dark { border-color: rgba(255, 255, 255, 0.07); background: #141210; }

.wordmark { font-size: 20px; font-weight: 600; letter-spacing: -0.03em; line-height: 1; }

.footer-head {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.footer-link {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  font-size: 13.5px;
  font-weight: 450;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: color 0.14s ease;
}
.footer-link:hover { color: #b55430; }
.footer-legal { text-decoration: none; transition: color 0.14s ease; }
.footer-legal:hover { color: #b55430; }
.footer-badge {
  font-size: 9.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 1px 6px;
  border-radius: 999px;
  border: 1px solid currentColor;
  line-height: 1.4;
  white-space: nowrap;
}
.social {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid;
  text-decoration: none;
  transition: color 0.15s ease, background 0.15s ease, border-color 0.15s ease;
}
.dot { opacity: 0.5; }
</style>
