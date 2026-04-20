<template>
  <div class="min-h-screen transition-colors duration-150" :class="themeClass">
    <Navigation :dark="isDark" />
    <main>
      <router-view :dark="isDark" />
    </main>
    <Footer :dark="isDark" />

    <!-- Theme toggle button (floating) -->
    <button
      @click="toggleTheme"
      class="fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-150 z-50"
      :class="isDark ? 'bg-neutral-800 text-neutral-50 hover:bg-neutral-700' : 'bg-white text-neutral-900 hover:bg-neutral-100 shadow-md'"
    >
      <i :class="isDark ? 'ph ph-sun text-xl' : 'ph ph-moon text-xl'"></i>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from './composables/useTheme'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

const { isDark, toggleTheme } = useTheme()

const themeClass = computed(() => isDark.value ? 'dark bg-neutral-900' : 'bg-neutral-50')
</script>
