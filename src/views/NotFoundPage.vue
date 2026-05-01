<template>
  <div class="max-w-[640px] mx-auto px-4 sm:px-8 py-24 sm:py-32 text-center">
    <div
      class="font-mono text-[80px] sm:text-[112px] font-bold leading-none mb-4"
      :class="textTertiary"
    >
      404
    </div>
    <h1
      class="font-display text-[clamp(28px,4vw,44px)] font-light leading-tight tracking-tight mb-4"
      :class="textPrimary"
    >
      Page not found
    </h1>
    <p class="text-[17px] leading-loose mb-2 break-words" :class="textSecondary">
      We couldn't find <span class="font-mono">{{ attemptedPath }}</span>.
    </p>
    <p class="text-sm mb-10" :class="textTertiary">
      Heading home in {{ countdown }}…
    </p>
    <div class="flex flex-wrap items-center justify-center gap-3">
      <button
        @click="goHome"
        class="px-6 py-3 rounded-full font-semibold transition-colors"
        :class="dark
          ? 'bg-neutral-50 text-neutral-900 hover:bg-white'
          : 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800'"
      >
        Go home now
      </button>
      <button
        @click="$router.back()"
        class="px-6 py-3 rounded-full font-semibold border transition-colors"
        :class="dark
          ? 'border-white/20 text-neutral-50 hover:bg-white/10'
          : 'border-neutral-300 text-neutral-900 hover:bg-neutral-100'"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()
const router = useRouter()

const attemptedPath = ref(route.fullPath)
const countdown = ref(5)
let intervalId = null

const textPrimary = computed(() => (props.dark ? 'text-neutral-50' : 'text-neutral-900'))
const textSecondary = computed(() => (props.dark ? 'text-neutral-400' : 'text-neutral-600'))
const textTertiary = computed(() => (props.dark ? 'text-neutral-600' : 'text-neutral-400'))

function goHome() {
  router.replace('/')
}

onMounted(() => {
  intervalId = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) {
      clearInterval(intervalId)
      intervalId = null
      goHome()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
