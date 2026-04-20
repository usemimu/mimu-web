<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'font-body font-bold border-none cursor-pointer transition-all duration-150 inline-flex items-center justify-center gap-2'

  const sizeClasses = {
    sm: 'px-[18px] py-[9px] rounded-[7px] text-[13px]',
    md: 'px-[28px] py-[15px] rounded-[10px] text-[15px]',
    lg: 'px-[40px] py-[18px] rounded-[12px] text-[17px]'
  }

  const variantClasses = {
    primary: 'bg-clay-500 text-white hover:bg-clay-600 active:bg-clay-700',
    outline: props.dark
      ? 'bg-transparent border-[1.5px] border-white/20 text-neutral-50 hover:border-white/30'
      : 'bg-transparent border-[1.5px] border-neutral-200 text-neutral-900 hover:border-neutral-300',
    ghost: props.dark
      ? 'bg-transparent text-neutral-400 hover:text-neutral-50'
      : 'bg-transparent text-neutral-600 hover:text-neutral-900'
  }

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return [baseClasses, sizeClasses[props.size], variantClasses[props.variant], disabledClasses].join(' ')
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>
