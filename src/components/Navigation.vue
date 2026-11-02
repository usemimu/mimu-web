<template>
  <header
    class="site-nav"
    :class="[scrolled ? 'is-glass' : 'is-top', overHero ? 'over-hero' : '', dark ? 'is-dark' : 'is-light']"
  >
    <div class="nav-wrap">
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
                <component
                  :is="sub.to ? 'router-link' : 'a'"
                  v-for="sub in item.items"
                  :key="sub.label"
                  :to="sub.to"
                  :href="sub.href"
                  class="mega-link"
                  @click="closeAll"
                >{{ sub.label }}</component>
              </div>
            </transition>
          </div>
          <!-- Plain link tab -->
          <component
            :is="item.to ? 'router-link' : 'a'"
            v-else
            :to="item.to"
            :href="item.href"
            class="tab"
            @click="closeAll"
          >
            {{ item.label }}<span v-if="item.badge" class="pill-badge">{{ item.badge }}</span>
          </component>
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
    </div>

    <!-- Mobile sheet -->
    <transition name="sheet">
      <div v-if="mobileOpen" class="sheet">
        <template v-for="item in navItems" :key="item.label">
          <div v-if="item.items" class="sheet-group">
            <span class="sheet-label">{{ item.label }}</span>
            <component
              :is="sub.to ? 'router-link' : 'a'"
              v-for="sub in item.items"
              :key="sub.label"
              :to="sub.to"
              :href="sub.href"
              class="sheet-sub"
              @click="closeAll"
            >{{ sub.label }}</component>
          </div>
          <component
            :is="item.to ? 'router-link' : 'a'"
            v-else
            :to="item.to"
            :href="item.href"
            class="sheet-link"
            @click="closeAll"
          >
            {{ item.label }}
            <span v-if="item.badge" class="pill-badge">{{ item.badge }}</span>
          </component>
        </template>
        <div class="sheet-actions">
          <a :href="loginUrl()" class="login">Log in</a>
          <a :href="signupUrl('nav')" class="cta">Get started</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import Logo from './Logo.vue'
import { signupUrl, loginUrl } from '../links.js'

defineProps({ dark: { type: Boolean, default: false } })

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
  {
    label: 'Resources',
    items: [
      { label: 'Pricing', to: '/pricing' },
      { label: 'About', to: '/about' },
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
      { rootMargin: '-72px 0px 0px 0px', threshold: 0 },
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
/* ── Shell ──────────────────────────────────────────────────── */
.site-nav {
  width: 100%;
  font-family: 'Google Sans', sans-serif;
  transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  border-bottom: 1px solid transparent;
}
.nav-wrap {
  width: 100%;
  height: 72px;
  padding: 0 clamp(20px, 4vw, 48px);
  display: grid;
  grid-template-columns: 1fr auto 1fr; /* brand | centered tabs | actions */
  align-items: center;
  gap: 18px;
}

/* Transparent over the rust hero */
.is-top { background: transparent; }

/* Glass once scrolled */
/* Liquid-glass bar (iOS 26/27 style): very translucent, heavy blur +
   saturation, a bright inner top edge, and a soft drop shadow. */
.is-glass {
  backdrop-filter: blur(26px) saturate(200%);
  -webkit-backdrop-filter: blur(26px) saturate(200%);
}
.is-glass.is-light {
  background: rgba(250, 248, 245, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.35);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    0 8px 30px rgba(52, 20, 8, 0.07);
}
.is-glass.is-dark {
  background: rgba(20, 18, 15, 0.42);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 8px 30px rgba(0, 0, 0, 0.3);
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
  font-size: 22px;
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
  font-size: 14.5px;
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
.caret { font-size: 10px; opacity: 0.6; transition: transform 0.2s ease; }
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
  font-size: 10px;
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
  font-size: 14.5px; font-weight: 500; letter-spacing: -0.01em;
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
  font-size: 22px; color: var(--nav-fg);
}
@media (min-width: 980px) { .burger { display: none; } }

/* ── Mobile sheet ───────────────────────────────────────────── */
.sheet {
  position: absolute; top: 72px; left: 0; right: 0;
  max-height: calc(100vh - 72px); overflow-y: auto;
  padding: 12px clamp(16px, 4vw, 40px) 28px;
  background: var(--card-bg, #FDF7F1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.is-dark .sheet { background: #1C1A17; border-color: rgba(255, 255, 255, 0.08); }
.sheet-link {
  display: flex; align-items: center; gap: 10px;
  padding: 13px 6px; border-radius: 10px;
  font-size: 16px; font-weight: 500; text-decoration: none;
  color: var(--text-primary, #342113);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.is-dark .sheet-link { color: #F4EDE4; border-color: rgba(255, 255, 255, 0.05); }
.sheet-group { padding: 8px 0; border-bottom: 1px solid rgba(0, 0, 0, 0.05); }
.is-dark .sheet-group { border-color: rgba(255, 255, 255, 0.05); }
.sheet-label {
  display: block;
  font-size: 11px; font-weight: 600; letter-spacing: 0.14em;
  text-transform: uppercase; color: #A89F94;
  padding: 4px 6px 2px;
}
.sheet-sub {
  display: block; padding: 10px 6px; border-radius: 8px;
  font-size: 15px; font-weight: 500; text-decoration: none;
  color: var(--text-primary, #342113);
}
.is-dark .sheet-sub { color: #F4EDE4; }
.sheet-actions { display: flex; gap: 12px; margin-top: 18px; }
.sheet-actions .login { display: inline-flex; align-items: center; color: var(--text-secondary, #5E574F); }
.sheet-actions .cta { background: #B55430; color: #fff; }

/* ── Transitions ────────────────────────────────────────────── */
.sheet-enter-active, .sheet-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.sheet-enter-from, .sheet-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
