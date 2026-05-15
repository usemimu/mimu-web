<template>
  <!--
    Pre-launch navigation. Only the homepage / terms / pitch are live,
    so the section-link bar and CTAs are intentionally removed — they
    would all point at routes that aren't enabled yet. The logo
    (clickable to /) is the entire nav for now. Re-introduce the
    desktop / mobile menus once /advertisers, /hosts, /pricing,
    /network and /about ship.
  -->
  <div class="nav-wrap sticky top-0 z-50 backdrop-blur-[20px]" :class="navBgClass">
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 h-16 flex items-center">
      <Logo
        :dark="dark"
        :size="54"
        :show-wordmark="true"
        @click="$router.push('/')"
        class="flex-shrink-0 cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Logo from './Logo.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const navBgClass = computed(() => {
  return props.dark
    ? 'bg-neutral-900/85 border-b border-white/[0.07]'
    : 'bg-neutral-50/90 border-b border-neutral-200'
})
</script>
