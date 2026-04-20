<template>
  <div class="nav-wrap sticky top-0 z-50 backdrop-blur-[20px]" :class="navBgClass">
    <div class="max-w-[1200px] mx-auto px-8 h-16 flex items-center gap-0">
      <Logo :dark="dark" :size="68" :show-wordmark="true" @click="$router.push('/')" />

      <div class="flex gap-0 items-center ml-10 flex-1">
        <router-link
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link px-3.5 py-2 text-sm font-medium cursor-pointer rounded-md transition-colors duration-150 no-underline"
          :class="navLinkClass(link.path)"
        >
          {{ link.label }}
        </router-link>
      </div>

      <div class="flex gap-2.5 items-center ml-auto">
        <BaseButton variant="outline" size="sm" :dark="dark">
          Contact us
        </BaseButton>
        <BaseButton variant="primary" size="sm" @click="$router.push('/advertisers')">
          Start advertising
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Logo from './Logo.vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()

const navLinks = [
  { label: 'For advertisers', path: '/advertisers' },
  { label: 'For hosts', path: '/hosts' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Network', path: '/network' },
  { label: 'About', path: '/about' }
]

const navBgClass = computed(() => {
  return props.dark
    ? 'bg-neutral-900/85 border-b border-white/[0.07]'
    : 'bg-neutral-50/90 border-b border-neutral-200'
})

const navLinkClass = (path) => {
  const isActive = route.path === path
  if (props.dark) {
    return isActive
      ? 'text-neutral-50 font-semibold'
      : 'text-neutral-400 hover:text-neutral-50'
  } else {
    return isActive
      ? 'text-neutral-900 font-semibold'
      : 'text-neutral-600 hover:text-neutral-900'
  }
}
</script>
