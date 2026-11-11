<template>
  <!-- Safe-area color fills.
       Safari: env() gives real notch/home-indicator heights (~44px / ~34px).
       Chrome: env() returns 0, so we probe on mount and fall back to standard
       Android bar heights (safeTop / safeBottom refs set in script). -->
  <div
    class="safe-fill fixed top-0 inset-x-0 z-[200]"
    :class="{ 'is-scrolled': scrolled, 'is-dark': isDark }"
    :style="{ height: safeTop }"
  />
  <div
    class="safe-fill fixed bottom-0 inset-x-0 z-[200]"
    :class="{ 'is-scrolled': scrolled, 'is-dark': isDark }"
    :style="{ height: safeBottom }"
  />

  <!-- Nav: outside overflow-x-hidden so nothing can clip it edge-to-edge -->
  <div
    v-if="!isStandalone"
    class="fixed top-0 inset-x-0 z-[100]"
    :style="{ paddingTop: safeTop }"
  >
    <Navigation :dark="isDark" />
  </div>

  <div class="min-h-screen w-full overflow-x-hidden transition-colors duration-150" :class="themeClass">

    <main class="w-full">
      <router-view :dark="isDark" />
    </main>
    <Footer v-if="!isStandalone" :dark="isDark" />

    <!-- Floating theme toggle — same standalone gate. The deck is a
         dark, fixed-canvas presentation; flipping themes inside it
         is the wrong affordance. -->
    <button
      v-if="!isStandalone"
      @click="toggleTheme"
      class="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-150 z-50"
      :class="isDark ? 'bg-neutral-800 text-neutral-50 hover:bg-neutral-700' : 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-md'"
    >
      <i :class="isDark ? 'ph ph-sun text-xl' : 'ph ph-moon text-xl'"></i>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from './composables/useTheme'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()

const themeClass = computed(() => (isDark.value ? 'dark bg-neutral-900' : 'bg-neutral-50'))

// Probe the real env(safe-area-inset-*) values after mount.
// Safari returns the physical notch/home-indicator sizes; Chrome returns 0.
// For touch devices where env() gave nothing, fall back to standard bar heights
// so the strips remain visible in Chrome too.
const safeTop = ref('env(safe-area-inset-top, 0px)')
const safeBottom = ref('env(safe-area-inset-bottom, 0px)')
const scrolled = ref(false)
function onSafeScroll() { scrolled.value = window.scrollY > 8 }

onMounted(() => {
  const probe = document.createElement('div')
  Object.assign(probe.style, {
    position: 'fixed', top: '0', left: '0',
    width: '1px', height: 'env(safe-area-inset-top, 0px)',
    pointerEvents: 'none', visibility: 'hidden',
  })
  document.documentElement.appendChild(probe)
  const envTop = probe.getBoundingClientRect().height
  document.documentElement.removeChild(probe)

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  if (envTop === 0 && isTouch) {
    safeTop.value = '24px'
    safeBottom.value = '20px'
  }

  onSafeScroll()
  window.addEventListener('scroll', onSafeScroll, { passive: true })
})

// `standalone` routes (e.g. /pitch) own their own viewport. We hide
// Navigation/Footer/theme toggle and tag <body> so the deck's CSS
// can suppress the site's normal scroll, preventing the marketing
// page underneath from competing with the deck's scroll-snap.
const isStandalone = computed(() => route.meta?.standalone === true)

watch(
  isStandalone,
  (active) => {
    if (typeof document === 'undefined') return
    document.body.classList.toggle('pitch-active', active)
  },
  { immediate: true },
)

// Defensive cleanup: if the user navigates away mid-flight, the
// watcher above handles it, but a hard unmount (HMR, etc.) shouldn't
// leave the body class stuck on.
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onSafeScroll)
  if (typeof document !== 'undefined') {
    document.body.classList.remove('pitch-active')
  }
})
</script>

<style scoped>
/* Safe-area strips mirror the hero at the top of the page.
   Once the user starts scrolling, the pattern fades out and the strip
   adopts the page background colour so it blends with the browser chrome. */
.safe-fill {
  background: #ae4828;
  overflow: hidden;
  transition: background 0.25s ease;
}
.safe-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: #bc3433;
  -webkit-mask-image: url("/hero/pattern.png");
  mask-image: url("/hero/pattern.png");
  -webkit-mask-size: 520px;
  mask-size: 520px;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  mix-blend-mode: multiply;
  opacity: 0.7;
  transition: opacity 0.25s ease;
}
.safe-fill.is-scrolled { background: #F7F5F2; }
.safe-fill.is-scrolled.is-dark { background: #0E0D0B; }
.safe-fill.is-scrolled::before { opacity: 0; }
</style>
