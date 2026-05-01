<template>
  <div>
    <!-- Hero -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 pt-12 sm:pt-24 pb-12 sm:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
        <div>
          <div class="flex items-center gap-2.5 mb-6">
            <LiveDot class="text-xs font-bold text-moss-500">
              Live network
            </LiveDot>
            <span class="text-xs font-mono" :class="textTertiary">
              {{ playCount.toLocaleString() }} plays today
            </span>
          </div>

          <div class="mb-8">
            <h1 class="font-display text-[clamp(48px,6vw,88px)] font-light leading-[1.05] tracking-tight mb-4" :class="textPrimary" style="text-wrap: pretty">
              Your ad, on every street<br/>
              <em class="italic text-clay-500">in Lagos.</em>
            </h1>
            <p class="text-lg leading-relaxed max-w-[540px]" :class="textSecondary" style="text-wrap: pretty">
              Advertise on screens inside local pharmacies, eateries, and salons. Starting from ₦5,000. You pay for verified attention — real viewers, counted by AI.
            </p>
          </div>

          <div class="flex gap-3 flex-wrap">
            <BaseButton variant="primary" size="lg" @click="$router.push('/advertisers')">
              Start advertising
              <i class="ph ph-arrow-right"></i>
            </BaseButton>
            <BaseButton variant="outline" size="lg" :dark="dark" @click="$router.push('/hosts')">
              Host a screen
              <i class="ph ph-caret-right"></i>
            </BaseButton>
          </div>
        </div>

        <!-- Network Animation -->
        <div class="hidden lg:block">
          <NetworkAnimation :dark="dark" />
        </div>
      </div>

      <!-- Live stats bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-[1px] rounded-2xl overflow-hidden border" :class="borderClass">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="p-4 sm:p-6"
          :class="i % 2 === 0 ? cardBg : surfaceBg2"
        >
          <div class="font-display text-2xl sm:text-4xl font-light text-clay-500 mb-1 tabular-nums">
            {{ stat.value }}
          </div>
          <div class="text-[10px] sm:text-xs font-semibold tracking-wider uppercase" :class="textTertiary">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>

    <!-- Brand Carousel -->
    <BrandCarousel :dark="dark" />

    <!-- How it works -->
    <div class="py-12 sm:py-20 px-4 sm:px-8" :class="sectionBg">
      <div class="max-w-[1200px] mx-auto">
        <div class="mb-8 sm:mb-12">
          <BaseTag variant="clay" :dark="dark" class="mb-3">How it works</BaseTag>
          <h2 class="font-display text-[clamp(32px,4vw,52px)] font-normal leading-tight" :class="textPrimary">
            Three steps. No agency.
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <BaseCard
            v-for="(step, i) in howItWorksSteps"
            :key="i"
            :dark="dark"
            rounded="lg"
            padding="lg"
          >
            <div class="flex items-center gap-3 mb-5">
              <span class="font-display text-5xl font-light text-clay-500 leading-none">
                {{ step.number }}
              </span>
              <i :class="[`ph ${step.icon}`, 'text-2xl', textTertiary]"></i>
            </div>
            <h3 class="font-display text-2xl font-medium mb-2.5" :class="textPrimary">
              {{ step.title }}
            </h3>
            <p class="text-sm leading-relaxed" :class="textSecondary">
              {{ step.body }}
            </p>
          </BaseCard>
        </div>
      </div>
    </div>

    <!-- For advertisers / hosts split CTA -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          @click="$router.push('/advertisers')"
          class="rounded-[20px] p-10 bg-clay-500 cursor-pointer relative overflow-hidden"
        >
          <div class="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full bg-white/[0.08]"></div>
          <span class="text-[11px] font-bold tracking-wider uppercase text-white/60 block mb-3">
            For advertisers
          </span>
          <h3 class="font-display text-4xl font-normal text-white leading-tight mb-4">
            Reach real people in real places.
          </h3>
          <p class="text-sm text-white/70 leading-relaxed mb-6">
            Screens inside the shops your customers visit every day. Verified viewership. Starts at ₦5,000.
          </p>
          <div class="inline-flex items-center gap-2 text-white font-bold text-sm">
            Start advertising <i class="ph ph-arrow-right"></i>
          </div>
        </div>

        <div
          @click="$router.push('/hosts')"
          class="rounded-[20px] p-10 cursor-pointer relative overflow-hidden"
          :class="[cardBg, 'border ' + borderClass]"
        >
          <div
            class="absolute top-[-30px] right-[-30px] w-40 h-40 rounded-full"
            :class="dark ? 'bg-white/[0.03]' : 'bg-neutral-900/[0.03]'"
          ></div>
          <span class="text-[11px] font-bold tracking-wider uppercase block mb-3" :class="textTertiary">
            For hosts
          </span>
          <h3 class="font-display text-4xl font-normal leading-tight mb-4" :class="textPrimary">
            Your shop earns money while it's open.
          </h3>
          <p class="text-sm leading-relaxed mb-6" :class="textSecondary">
            Host a Mimuads screen. Earn ₦20,000–₦60,000 per month, paid every Friday. No running costs.
          </p>
          <div class="inline-flex items-center gap-2 text-clay-500 font-bold text-sm">
            Become a host <i class="ph ph-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial -->
    <div class="py-12 sm:py-20 px-4 sm:px-8" :class="sectionBg">
      <div class="max-w-[1200px] mx-auto">
        <BaseTag variant="moss" :dark="dark" class="mb-6">Host story</BaseTag>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <blockquote class="font-display text-[clamp(22px,2.5vw,32px)] font-normal italic leading-snug mb-5" :class="textPrimary">
              "I used to watch that screen and wonder what it was for. Now I watch it and see my earnings going up."
            </blockquote>
            <div class="flex items-center gap-3.5">
              <div class="w-12 h-12 rounded-full bg-clay-500 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                A
              </div>
              <div>
                <div class="text-sm font-bold" :class="textPrimary">Adeola Fashola</div>
                <div class="text-[13px]" :class="textSecondary">Apex Pharmacy, Surulere · Hosting since Oct 2024</div>
              </div>
            </div>
          </div>

          <BaseCard :dark="dark" rounded="lg" padding="lg">
            <div class="text-[11px] font-semibold tracking-wider uppercase mb-3.5" :class="textTertiary">
              Adeola's earnings
            </div>
            <div class="font-display text-[52px] font-light text-clay-500 mb-1 tabular-nums">
              ₦214,700
            </div>
            <div class="text-[13px] mb-5" :class="textSecondary">
              Total earned · 6 months · 52 payouts
            </div>
            <div
              v-for="(item, i) in earningsBreakdown"
              :key="i"
              class="flex justify-between py-2.5 border-b"
              :class="borderClass"
            >
              <span class="text-[13px]" :class="textSecondary">{{ item.label }}</span>
              <span class="text-sm font-semibold" :class="textPrimary">{{ item.value }}</span>
            </div>
          </BaseCard>
        </div>
      </div>
    </div>

    <!-- Footer CTA -->
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center">
      <h2 class="font-display text-[clamp(36px,5vw,68px)] font-light leading-tight mb-5 tracking-tight" :class="textPrimary">
        Advertising that actually<br/>belongs in Lagos.
      </h2>
      <p class="text-base mb-10 max-w-[480px] mx-auto" :class="textSecondary">
        No agency. No corporate deck. Just your ad, on screens where your customers already are.
      </p>
      <BaseButton variant="primary" size="lg">
        Create your first campaign
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseTag from '@/components/BaseTag.vue'
import BaseCard from '@/components/BaseCard.vue'
import LiveDot from '@/components/LiveDot.vue'
import NetworkAnimation from '@/components/NetworkAnimation.vue'
import BrandCarousel from '@/components/BrandCarousel.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const playCount = ref(1247)
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    playCount.value += Math.floor(Math.random() * 3)
  }, 4000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

const stats = computed(() => [
  { label: 'Screens live', value: '1,247' },
  { label: 'Plays today', value: playCount.value.toLocaleString() },
  { label: 'LGAs covered', value: '18 of 20' },
  { label: 'Advertisers', value: '340+' }
])

const howItWorksSteps = [
  {
    number: '01',
    title: 'Pick your screens',
    body: 'Browse the map. Filter by LGA, category, or daily viewers. See exactly where your ad will play.',
    icon: 'ph-map-pin'
  },
  {
    number: '02',
    title: 'Set your budget',
    body: 'Choose how long to run and how much to spend. See real impression forecasts before you pay.',
    icon: 'ph-currency-ngn'
  },
  {
    number: '03',
    title: 'Go live in 24 hours',
    body: 'Upload your creative. APCON vetting runs automatically. Your ad plays on screens the same day.',
    icon: 'ph-play'
  }
]

const earningsBreakdown = [
  { label: 'This month', value: '₦48,200' },
  { label: 'Avg/month', value: '₦35,800' },
  { label: 'Uptime', value: '99.2%' }
]

const textPrimary = computed(() => props.dark ? 'text-neutral-50' : 'text-neutral-900')
const textSecondary = computed(() => props.dark ? 'text-neutral-400' : 'text-neutral-600')
const textTertiary = computed(() => props.dark ? 'text-neutral-600' : 'text-neutral-400')
const cardBg = computed(() => props.dark ? 'bg-neutral-800' : 'bg-white')
const surfaceBg2 = computed(() => props.dark ? 'bg-neutral-700' : 'bg-neutral-100')
const sectionBg = computed(() => props.dark ? 'bg-[#111009]' : 'bg-neutral-100')
const borderClass = computed(() => props.dark ? 'border-white/[0.08]' : 'border-neutral-200')
</script>
