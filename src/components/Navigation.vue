<template>
  <header
    class="site-nav"
    :class="[scrolled ? 'is-glass' : 'is-top', overHero ? 'over-hero' : '', dark ? 'is-dark' : 'is-light']"
  >
    <!-- Announcement bar -->
    <div v-if="showAnnounce" class="announce-bar">
      <p class="announce-text">
        Mimuads is now live — <a href="/blog" class="announce-link" @click="closeAll">Read the announcement →</a>
      </p>
      <button class="announce-dismiss" @click="showAnnounce = false" aria-label="Dismiss announcement">
        <i class="ph ph-x"></i>
      </button>
    </div>

    <div class="nav-wrap" :class="{ 'mobile-open': mobileOpen }">
      <!-- Brand -->
      <router-link to="/" class="brand" aria-label="Mimuads home" @click="closeAll">
        <Logo :size="30" :color="markColor" />
        <span class="wordmark">mimuads</span>
      </router-link>

      <!-- Desktop tabs -->
      <nav class="tabs" aria-label="Primary">
        <template v-for="item in navItems" :key="item.label">
          <!-- Dropdown tab -->
          <div
            v-if="item.items"
            class="tab-group"
            @mouseenter="openMenuNow(item.label)"
            @mouseleave="scheduleClose"
          >
            <button class="tab" :class="{ active: openMenu === item.label }" @click="toggleMenu(item.label)">
              {{ item.label }}<i class="ph ph-caret-down caret"></i>
            </button>
            <transition name="menu">
              <div
                v-if="openMenu === item.label"
                class="mega"
                @mouseenter="openMenuNow(item.label)"
                @mouseleave="scheduleClose"
              >
                <a
                  v-for="sub in item.items"
                  :key="sub.label"
                  :href="sub.to || sub.href"
                  class="mega-link"
                  @click="closeAll"
                >{{ sub.label }}</a>
              </div>
            </transition>
          </div>
          <!-- Plain link tab -->
          <a
            v-else
            :href="item.to || item.href"
            class="tab"
            @click="closeAll"
          >
            {{ item.label }}<span v-if="item.badge" class="pill-badge">{{ item.badge }}</span>
          </a>
        </template>
      </nav>

      <!-- Right actions -->
      <div class="actions">
        <a :href="loginUrl()" class="login" data-ga-event="log_in" data-ga-label="nav">Log in</a>
        <a :href="signupUrl('nav')" class="cta" data-ga-event="start_campaign" data-ga-label="nav">Get started</a>
        <button class="burger" :aria-expanded="mobileOpen" aria-label="Menu" @click="mobileOpen = !mobileOpen">
          <i :class="mobileOpen ? 'ph ph-x' : 'ph ph-list'"></i>
        </button>
      </div>

      <!-- Mobile sheet — inside nav-wrap so top:100% aligns flush with pill bottom -->
      <transition name="sheet">
        <div v-if="mobileOpen" class="sheet">
          <template v-for="item in navItems" :key="item.label">
            <div v-if="item.items" class="sheet-group">
              <span class="sheet-label">{{ item.label }}</span>
              <a
                v-for="sub in item.items"
                :key="sub.label"
                :href="sub.to || sub.href"
                class="sheet-sub"
                @click="closeAll"
              >{{ sub.label }}</a>
            </div>
            <a
              v-else
              :href="item.to || item.href"
              class="sheet-link"
              @click="closeAll"
            >
              {{ item.label }}
              <span v-if="item.badge" class="pill-badge">{{ item.badge }}</span>
            </a>
          </template>
          <div class="sheet-actions">
            <a :href="loginUrl()" class="login">Log in</a>
            <a :href="signupUrl('nav')" class="cta">Get started</a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Logo from './Logo.vue'
import { signupUrl, loginUrl } from '../links.js'

defineProps({ dark: { type: Boolean, default: false } })

const showAnnounce = ref(true)

const navItems = [
  {
    label: 'Platform',
    items: [
      { label: 'Self serve buying', href: '/#self-serve' },
      { label: 'Verification', href: '/#verification' },
      { label: 'Mimuads Player', to: '/player' },
      { label: 'Supply side API', to: '/player' },
      { label: 'White label OS', href: '/#white-label' },
      { label: 'Pricing', to: '/pricing' },
    ],
  },
  {
    label: 'Solutions',
    items: [
      { label: 'SMBs on the app', href: '/#smbs' },
      { label: 'Startups & brands', href: '/#brands' },
      { label: 'Agencies', to: '/agencies' },
      { label: 'FMCG & enterprise', href: '/#fmcg' },
      { label: 'DSPs & buying platforms', href: '/#dsps' },
      { label: 'Venue hosts', to: '/hosts' },
    ],
  },
  { label: 'Network', href: '/#network' },
  { label: 'Player', to: '/player' },
  { label: 'Blog', to: '/blog' },
  {
    label: 'Resources',
    items: [
      { label: 'About', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Terms', to: '/terms' },
    ],
  },
]

/* ── Dropdowns ──────────────────────────────────────────────── */
const openMenu = ref(null)
let closeTimer = null
function openMenuNow(k) { clearTimeout(closeTimer); openMenu.value = k }
function toggleMenu(k) { openMenu.value = openMenu.value === k ? null : k }
function scheduleClose() { clearTimeout(closeTimer); closeTimer = setTimeout(() => (openMenu.value = null), 130) }

const mobileOpen = ref(false)
function closeAll() { clearTimeout(closeTimer); openMenu.value = null; mobileOpen.value = false }

/* ── Nav state ───────────────────────────────────────────────
   `scrolled` → the glass background, which begins the moment you start
   scrolling. `overHero` → keeps the text/mark cream while a dark hero
   (marked [data-nav-over]) is behind the bar, flipping to theme colours
   once it scrolls past. */
const scrolled = ref(false)
const overHero = ref(true)
let observer = null
function onScroll() { scrolled.value = window.scrollY > 8 }
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  const heroEl = document.querySelector('[data-nav-over]')
  if (heroEl && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => { overHero.value = entry.isIntersecting },
      { rootMargin: '-112px 0px 0px 0px', threshold: 0 },
    )
    observer.observe(heroEl)
  } else {
    overHero.value = false
  }
})
onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', onScroll)
})

const markColor = computed(() => (overHero.value ? '#FDF7F1' : null))
</script>

<style scoped>
/* ── Shell — transparent, announce bar + pill handle their own backgrounds ── */
.site-nav {
  position: relative;
  width: 100%;
  font-family: "Google Sans Flex", -apple-system, "system-ui", sans-serif;
}

/* ── Announcement bar ───────────────────────────────────────── */
.announce-bar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 48px;
  transition: background 0.2s ease;
}
.is-dark .announce-bar  { background: #0e0d0b; }
.is-light .announce-bar { background: #ede7de; }

.announce-text {
  font-size: 14px;
  line-height: 1;
  text-align: center;
}
.is-dark .announce-text  { color: rgba(244, 237, 228, 0.72); }
.is-light .announce-text { color: #6b6358; }

.announce-link {
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.14s ease;
}
.is-dark .announce-link  { color: #f4ede4; }
.is-light .announce-link { color: #ae4828; }
.announce-link:hover { opacity: 0.75; text-decoration: underline; }

.announce-dismiss {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 6px;
  transition: color 0.14s ease, background 0.14s ease;
}
.is-dark .announce-dismiss  { color: rgba(244, 237, 228, 0.45); }
.is-light .announce-dismiss { color: rgba(0, 0, 0, 0.3); }
.is-dark .announce-dismiss:hover  { color: #f4ede4; background: rgba(255,255,255,0.08); }
.is-light .announce-dismiss:hover { color: #0e0d0b; background: rgba(0,0,0,0.06); }

@media (max-width: 600px) { .announce-bar { display: none; } }
.nav-wrap {
  position: relative;
  width: calc(100% - 32px);
  max-width: 1280px;
  margin: 10px auto;
  height: 64px;
  padding: 0 clamp(16px, 3vw, 32px);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 18px;
  border-radius: 14px;
  border: 1px solid transparent;
  transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, border-radius 0.15s ease;
}
.nav-wrap.mobile-open {
  border-radius: 14px 14px 0 0;
}
.is-light .nav-wrap.mobile-open  { border-color: rgba(0, 0, 0, 0.13);   box-shadow: none; }
.is-dark .nav-wrap.mobile-open   { border-color: rgba(255,255,255,0.13); box-shadow: none; }
.over-hero .nav-wrap.mobile-open { border-color: rgba(255,255,255,0.20); box-shadow: none; }

/* ── Pill states ─────────────────────────────────────────────── */
.is-light .nav-wrap {
  background: #ffffff;
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.07);
}
.is-dark .nav-wrap {
  background: #1c1a17;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.35);
}
.over-hero .nav-wrap {
  background: rgba(18, 9, 4, 0.48);
  border-color: rgba(255, 255, 255, 0.14);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.22);
}

/* ── Brand ──────────────────────────────────────────────────── */
.brand {
  grid-column: 1;
  justify-self: start;
  display: flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  flex-shrink: 0;
}
.wordmark {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--nav-fg);
}

/* ── Colour tokens by state ─────────────────────────────────── */
.over-hero { --nav-fg: #FDF7F1; --nav-fg-dim: rgba(253, 247, 241, 0.82); }
.is-light:not(.over-hero) { --nav-fg: #0E0D0B; --nav-fg-dim: #5E574F; }
.is-dark:not(.over-hero) { --nav-fg: #F4EDE4; --nav-fg-dim: #A89F94; }

/* ── Tabs ───────────────────────────────────────────────────── */
.tabs {
  grid-column: 2;
  justify-self: center;
  display: none;
  align-items: center;
  gap: 6px;
}
@media (min-width: 980px) { .tabs { display: flex; } }

.tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--nav-fg-dim);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  transition: color 0.15s ease;
  white-space: nowrap;
}
.tab:hover, .tab.active { color: var(--nav-fg); }
.caret { font-size: 14px; opacity: 0.6; transition: transform 0.2s ease; }
.tab.active .caret { transform: rotate(180deg); }

/* ── Glass dropdown (iOS-style) ─────────────────────────────── */
.tab-group { position: relative; }
.mega {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 232px;
  padding: 8px;
  border-radius: 16px;
  z-index: 60;
  backdrop-filter: blur(28px) saturate(200%);
  -webkit-backdrop-filter: blur(28px) saturate(200%);
  border: 1px solid transparent;
}
.over-hero .mega {
  background: rgba(32, 17, 10, 0.4);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.14), 0 20px 44px rgba(18, 7, 2, 0.34);
}
.site-nav:not(.over-hero).is-light .mega {
  background: rgba(250, 248, 245, 0.62);
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 20px 44px rgba(52, 20, 8, 0.12);
}
.site-nav:not(.over-hero).is-dark .mega {
  background: rgba(22, 20, 16, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 20px 44px rgba(0, 0, 0, 0.42);
}
.mega-link {
  display: block;
  padding: 9px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.01em;
  white-space: nowrap;
  text-decoration: none;
  color: var(--nav-fg-dim);
  transition: background 0.14s ease, color 0.14s ease;
}
.mega-link:hover { color: var(--nav-fg); }
.over-hero .mega-link:hover { background: rgba(255, 255, 255, 0.12); }
.site-nav:not(.over-hero).is-light .mega-link:hover { background: rgba(0, 0, 0, 0.055); }
.site-nav:not(.over-hero).is-dark .mega-link:hover { background: rgba(255, 255, 255, 0.07); }

.menu-enter-active, .menu-leave-active { transition: opacity 0.16s ease, transform 0.16s ease; }
.menu-enter-from, .menu-leave-to { opacity: 0; transform: translateY(-6px); }

.pill-badge {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid currentColor;
  opacity: 0.75;
  line-height: 1.4;
}

/* ── Right actions ──────────────────────────────────────────── */
.actions { grid-column: 3; justify-self: end; display: flex; align-items: center; gap: 12px; }
.login {
  font-size: 14px; font-weight: 500; letter-spacing: -0.01em;
  color: var(--nav-fg-dim); text-decoration: none;
  transition: color 0.15s ease;
}
.login:hover { color: var(--nav-fg); }
@media (max-width: 560px) { .login { display: none; } }

.cta {
  display: inline-flex; align-items: center;
  height: 40px; padding: 0 20px;
  border-radius: 999px;
  font-size: 14px; font-weight: 600; letter-spacing: -0.01em;
  text-decoration: none; white-space: nowrap;
  transition: opacity 0.15s ease;
}
.over-hero .cta { background: #FDF7F1; color: #AE4828; }
.site-nav:not(.over-hero) .cta { background: #B55430; color: #fff; }
.cta:hover { opacity: 0.88; }

.burger {
  display: grid; place-items: center;
  width: 40px; height: 40px;
  border: none; background: none; cursor: pointer;
  font-size: 20px; color: var(--nav-fg);
}
@media (min-width: 980px) { .burger { display: none; } }

/* ── Mobile sheet ───────────────────────────────────────────── */
.sheet {
  /* left/right: -1px aligns sheet's outer border edge with pill's outer border edge
     (position:absolute left:0 is at the containing block's padding-edge, 1px inside the border) */
  position: absolute; top: 100%; left: -1px; right: -1px;
  max-height: calc(100dvh - 90px); overflow-y: auto;
  border-radius: 0 0 14px 14px;
  padding: 12px clamp(16px, 4vw, 40px) 28px;
  background: #FDF7F1;
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-top: none;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.09);
  z-index: 50;
}
.is-dark .sheet  { background: #1C1A17; border-color: rgba(255,255,255,0.13); box-shadow: 0 10px 28px rgba(0,0,0,0.35); }
.over-hero .sheet { background: #1c1a17; border-color: rgba(255,255,255,0.20); box-shadow: 0 10px 28px rgba(0,0,0,0.35); }
.sheet-link {
  display: flex; align-items: center; gap: 10px;
  padding: 13px 6px; border-radius: 10px;
  font-size: 14px; font-weight: 500; text-decoration: none;
  color: #342113;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.is-dark .sheet-link { color: #F4EDE4; border-color: rgba(255, 255, 255, 0.05); }
.over-hero .sheet-link { color: #F4EDE4; border-color: rgba(255, 255, 255, 0.05); }
.sheet-group { padding: 8px 0; border-bottom: 1px solid rgba(0, 0, 0, 0.05); }
.is-dark .sheet-group { border-color: rgba(255, 255, 255, 0.05); }
.over-hero .sheet-group { border-color: rgba(255, 255, 255, 0.05); }
.sheet-label {
  display: block;
  font-size: 14px; font-weight: 600; letter-spacing: 0.14em;
  text-transform: uppercase; color: #A89F94;
  padding: 4px 6px 2px;
}
.over-hero .sheet-label { color: rgba(244, 237, 228, 0.45); }
.sheet-sub {
  display: block; padding: 10px 6px; border-radius: 8px;
  font-size: 14px; font-weight: 500; text-decoration: none;
  color: #342113;
}
.is-dark .sheet-sub { color: #F4EDE4; }
.over-hero .sheet-sub { color: #F4EDE4; }
.sheet-actions { display: flex; gap: 12px; margin-top: 18px; }
.sheet-actions .login { display: inline-flex; align-items: center; color: #5E574F; }
.is-dark .sheet-actions .login { color: #A89F94; }
.over-hero .sheet-actions .login { color: rgba(244, 237, 228, 0.7); }
.sheet-actions .cta { background: #B55430; color: #fff; }

/* ── Transitions ────────────────────────────────────────────── */
.sheet-enter-active, .sheet-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.sheet-enter-from, .sheet-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
