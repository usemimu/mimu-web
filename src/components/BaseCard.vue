<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'surface-2'].includes(value)
  },
  dark: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  },
  rounded: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  }
})

const cardClasses = computed(() => {
  const baseClasses = 'transition-all duration-150'

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }

  const roundedClasses = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    '2xl': 'rounded-[32px]'
  }

  const variantClasses = {
    default: props.dark
      ? 'bg-neutral-800 border border-white/8'
      : 'bg-white border border-neutral-200 shadow-sm',
    'surface-2': props.dark
      ? 'bg-neutral-700'
      : 'bg-neutral-100'
  }

  return [
    baseClasses,
    paddingClasses[props.padding],
    roundedClasses[props.rounded],
    variantClasses[props.variant]
  ].join(' ')
})
</script>
