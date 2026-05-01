<template>
  <div class="relative overflow-hidden py-12 sm:py-16" :class="bgClass">
    <div class="w-full">
      <!-- Section header -->
      <div class="text-center mb-8 sm:mb-10 px-4 sm:px-8">
        <p class="text-xs sm:text-sm font-semibold tracking-wider uppercase mb-2 sm:mb-3" :class="labelClass">
          Trusted by leading brands
        </p>
        <h3 class="text-xl sm:text-3xl font-display font-normal" :class="textClass">
          Join 340+ brands advertising on Mimuads
        </h3>
      </div>

      <!-- Infinite scroll container -->
      <div class="relative">
        <!-- Gradient overlays -->
        <div
          class="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          :class="gradientLeftClass"
        ></div>
        <div
          class="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          :class="gradientRightClass"
        ></div>

        <!-- Scrolling track -->
        <div class="flex animate-scroll">
          <!-- First set -->
          <div class="flex items-center gap-8 sm:gap-16 px-4 sm:px-6 flex-shrink-0">
            <span
              v-for="(brand, i) in brands"
              :key="`set1-${i}`"
              class="text-xl sm:text-3xl font-bold font-display tracking-tight text-clay-500 flex-shrink-0 whitespace-nowrap transition-opacity duration-300 hover:opacity-70"
            >
              {{ brand }}
            </span>
          </div>

          <!-- Second set (duplicate for seamless loop) -->
          <div class="flex items-center gap-8 sm:gap-16 px-4 sm:px-6 flex-shrink-0">
            <span
              v-for="(brand, i) in brands"
              :key="`set2-${i}`"
              class="text-xl sm:text-3xl font-bold font-display tracking-tight text-clay-500 flex-shrink-0 whitespace-nowrap transition-opacity duration-300 hover:opacity-70"
            >
              {{ brand }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const brands = [
  'Flutterwave',
  'Paystack',
  'Glovo',
  'Item 7',
  'Jumia',
  'Kuda',
  'PiggyVest',
  'Carbon',
  'Andela',
  'Interswitch'
]

const bgClass = computed(() =>
  props.dark ? 'bg-neutral-900/50' : 'bg-neutral-50'
)

const labelClass = computed(() =>
  props.dark ? 'text-neutral-600' : 'text-neutral-500'
)

const textClass = computed(() =>
  props.dark ? 'text-neutral-50' : 'text-neutral-900'
)

const cardClass = computed(() =>
  props.dark
    ? 'bg-neutral-800/50 border border-white/5 hover:border-white/10'
    : 'bg-white border border-neutral-200 hover:border-clay-500/30 shadow-sm'
)

const brandTextClass = computed(() =>
  props.dark ? 'text-neutral-300' : 'text-neutral-600'
)

const gradientLeftClass = computed(() =>
  props.dark
    ? 'bg-gradient-to-r from-neutral-900/90 to-transparent'
    : 'bg-gradient-to-r from-neutral-50 to-transparent'
)

const gradientRightClass = computed(() =>
  props.dark
    ? 'bg-gradient-to-l from-neutral-900/90 to-transparent'
    : 'bg-gradient-to-l from-neutral-50 to-transparent'
)
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
