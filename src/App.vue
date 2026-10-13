<template>
  <!-- Safe-area color fills.
       Safari: env() gives real notch/home-indicator heights (~44px / ~34px).
       Chrome: env() returns 0, so we probe on mount and fall back to standard
       Android bar heights (safeTop / safeBottom refs set in script). -->
  <div
    class="safe-fill fixed top-0 inset-x-0 z-[200]"
    :style="{ height: safeTop }"
  />
  <div
    class="safe-fill fixed bottom-0 inset-x-0 z-[200]"
    :style="{ height: safeBottom }"
  />

  <div class="min-h-screen w-full overflow-x-hidden transition-colors duration-150" :class="themeClass">

    <!-- Floating pill nav: sticky wrapper pads by safeTop so the pill
         always sits below the safe-area color strip (no clip on notch). -->
    <div
      v-if="!isStandalone"
      class="fixed top-0 inset-x-0 z-[100]"
      :style="{ paddingTop: safeTop }"
    >
      <Navigation :dark="isDark" />
    </div>

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
  if (typeof document !== 'undefined') {
    document.body.classList.remove('pitch-active')
  }
})
</script>

<style scoped>
/* Safe-area strips mirror the hero: clay base + Tall Poppy pattern tile.
   Same values as .hero / .hero-pattern in HomePage.vue so the notch and
   home-indicator fills read as an extension of the brand hero. */
.safe-fill {
  background: #ae4828;
  overflow: hidden;
}
.safe-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: #bc3433; /* Tall Poppy */
  -webkit-mask-image: url("/hero/pattern.png");
  mask-image: url("/hero/pattern.png");
  -webkit-mask-size: 520px;
  mask-size: 520px;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  mix-blend-mode: multiply;
  opacity: 0.7;
}
</style>
