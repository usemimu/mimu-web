<template>
  <div>
    <div class="max-w-[1200px] mx-auto px-8 py-20">
      <BaseTag variant="moss" :dark="dark" class="mb-4">For hosts</BaseTag>

      <h1 class="font-display text-[clamp(40px,5vw,64px)] font-normal leading-tight tracking-tight mb-5" :class="textPrimary">
        Your shop earns money while it's open.
      </h1>
      <p class="text-[17px] leading-relaxed mb-8 max-w-[600px]" :class="textSecondary">
        Host a mìmú screen. Earn ₦20,000–₦60,000 per month, paid every Friday. No running costs. No maintenance. Just passive income while you run your business.
      </p>

      <BaseButton variant="primary" size="lg">
        Apply to host a screen
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseTag from '@/components/BaseTag.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const textPrimary = computed(() => props.dark ? 'text-neutral-50' : 'text-neutral-900')
const textSecondary = computed(() => props.dark ? 'text-neutral-400' : 'text-neutral-600')
</script>
