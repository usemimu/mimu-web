<template>
  <div class="min-h-screen w-full overflow-x-hidden transition-colors duration-150" :class="themeClass">
    <!-- Site chrome is hidden on `standalone` routes (the investor
         pitch). The deck owns the full viewport and supplies its own
         pager nav, so nesting it inside Navigation/Footer would
         break its layout AND leak the site's marketing chrome into
         a confidential context. -->

    <!-- <Navigation v-if="!isStandalone" :dark="isDark" /> -->
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
import { computed, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from './composables/useTheme'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

const { isDark, toggleTheme } = useTheme()
const route = useRoute()

const themeClass = computed(() => (isDark.value ? 'dark bg-neutral-900' : 'bg-neutral-50'))

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
