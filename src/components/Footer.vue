<template>
  <div class="border-t py-10 px-8" :class="borderClass">
    <div class="max-w-[1200px] mx-auto flex justify-between items-center gap-6 flex-wrap">
      <Logo :dark="dark" :size="54" :show-wordmark="true" />

      <div class="flex gap-6 flex-wrap">
        <component
          :is="link.to ? 'router-link' : 'a'"
          v-for="link in footerLinks"
          :key="link.label"
          :to="link.to"
          class="text-[13px] no-underline cursor-pointer hover:opacity-70 transition-opacity"
          :class="linkClass"
        >
          {{ link.label }}
        </component>
      </div>

      <div class="text-xs" :class="textClass">
        Lagos, Nigeria · APCON registered
      </div>
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

// `to` set ⇒ rendered as <router-link>; left undefined ⇒ falls back to a
// no-op <a> until the destination page exists.
const footerLinks = [
  { label: 'Privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'APCON' },
  { label: 'NDPR' },
]

const borderClass = computed(() =>
  props.dark ? 'border-white/[0.07]' : 'border-neutral-200'
)

const linkClass = computed(() =>
  props.dark ? 'text-neutral-600' : 'text-neutral-600'
)

const textClass = computed(() =>
  props.dark ? 'text-neutral-600' : 'text-neutral-600'
)
</script>
