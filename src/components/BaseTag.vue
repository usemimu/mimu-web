<template>
  <span :class="tagClasses">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'clay',
    validator: (value) => ['clay', 'moss', 'gold'].includes(value)
  },
  dark: {
    type: Boolean,
    default: false
  }
})

const tagClasses = computed(() => {
  const baseClasses = 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase'

  const variantClasses = {
    clay: props.dark
      ? 'bg-clay-500/20 text-clay-500'
      : 'bg-clay-500/10 text-clay-500',
    moss: props.dark
      ? 'bg-moss-500/20 text-moss-500'
      : 'bg-moss-500/15 text-moss-500',
    gold: props.dark
      ? 'bg-gold-500/20 text-gold-500'
      : 'bg-gold-500/15 text-gold-500'
  }

  return [baseClasses, variantClasses[props.variant]].join(' ')
})
</script>
