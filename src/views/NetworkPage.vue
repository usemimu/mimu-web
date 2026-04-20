<template>
  <div>
    <div class="max-w-[1200px] mx-auto px-8 py-20">
      <BaseTag variant="clay" :dark="dark" class="mb-4">Network</BaseTag>

      <h1 class="font-display text-[clamp(40px,5vw,64px)] font-normal leading-tight tracking-tight mb-5" :class="textPrimary">
        1,247 screens across Lagos.
      </h1>
      <p class="text-[17px] leading-relaxed mb-8 max-w-[600px]" :class="textSecondary">
        Browse our network of screens across 18 LGAs. Filter by location, category, and daily traffic. See exactly where your ads will play.
      </p>

      <BaseButton variant="primary" size="lg">
        Explore the network map
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
