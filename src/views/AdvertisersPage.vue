<template>
  <div>
    <div class="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <BaseTag variant="clay" :dark="dark" class="mb-4">For advertisers</BaseTag>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20">
        <div>
          <h1 class="font-display text-[clamp(40px,5vw,64px)] font-normal leading-tight tracking-tight mb-5" :class="textPrimary" style="text-wrap: pretty">
            Your customers see your ad. You know exactly how many.
          </h1>
          <p class="text-[17px] leading-relaxed mb-8" :class="textSecondary" style="text-wrap: pretty">
            Mimuads puts your ad inside the pharmacies, eateries, and salons your customers visit every day. On-device AI counts every viewer, anonymously. You pay for real attention.
          </p>
          <BaseButton variant="primary" size="lg">
            Create campaign — from ₦5,000
          </BaseButton>
        </div>

        <BaseCard :dark="dark" rounded="xl" padding="lg">
          <div class="text-[11px] font-semibold tracking-wider uppercase mb-5" :class="textTertiary">
            Campaign snapshot
          </div>
          <div class="mb-4">
            <div class="font-display text-sm mb-1" :class="textSecondary">
              Mama Titi Kitchen · Surulere
            </div>
            <div class="flex items-baseline gap-2 mb-1.5">
              <span class="font-display text-[40px] font-light text-clay-500 tabular-nums">4,210</span>
              <span class="text-[13px]" :class="textTertiary">plays</span>
            </div>
            <div class="h-[3px] rounded-sm overflow-hidden mb-1" :class="dark ? 'bg-white/[0.08]' : 'bg-neutral-200'">
              <div class="h-full w-[62%] bg-clay-500 rounded-sm"></div>
            </div>
            <div class="flex justify-between text-xs" :class="textTertiary">
              <span>₦15,500 spent</span>
              <span>₦25,000 budget</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2.5">
            <div
              v-for="metric in campaignMetrics"
              :key="metric.label"
              class="rounded-lg p-3.5"
              :class="surfaceBg2"
            >
              <div class="font-display text-xl font-normal mb-0.5 tabular-nums" :class="textPrimary">
                {{ metric.value }}
              </div>
              <div class="text-[10px] uppercase tracking-wider font-semibold" :class="textTertiary">
                {{ metric.label }}
              </div>
            </div>
          </div>
        </BaseCard>
      </div>

      <!-- Feature grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <BaseCard
          v-for="(feature, i) in features"
          :key="i"
          :dark="dark"
          rounded="lg"
          padding="md"
        >
          <div
            class="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
            :class="dark ? 'bg-clay-500/15' : 'bg-[#FBF4F0]'"
          >
            <i :class="`ph ${feature.icon} text-[22px] text-clay-500`"></i>
          </div>
          <h3 class="text-base font-bold mb-2" :class="textPrimary">
            {{ feature.title }}
          </h3>
          <p class="text-[13px] leading-relaxed" :class="textSecondary">
            {{ feature.body }}
          </p>
        </BaseCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseTag from '@/components/BaseTag.vue'
import BaseCard from '@/components/BaseCard.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const campaignMetrics = [
  { label: 'Impressions', value: '18,940' },
  { label: 'Attention-sec', value: '94,700' },
  { label: 'Screens', value: '12' },
  { label: 'Avg viewers', value: '4.5/play' }
]

const features = [
  {
    icon: 'ph-map-pin',
    title: 'Pick every screen',
    body: 'Choose by LGA, business category, or daily traffic. Filter to exactly the neighborhoods that matter.'
  },
  {
    icon: 'ph-currency-ngn',
    title: 'Start at ₦5,000',
    body: 'No agency markup. No minimum spend requirement. Transparent pricing, all in Naira.'
  },
  {
    icon: 'ph-eye',
    title: 'Real viewer counts',
    body: 'On-device camera AI counts viewers anonymously. No estimates. No inflated numbers.'
  },
  {
    icon: 'ph-shield-check',
    title: 'APCON handled',
    body: 'Regulatory vetting runs automatically. You upload your creative, we handle compliance.'
  },
  {
    icon: 'ph-chart-line',
    title: 'Live performance',
    body: 'Plays, impressions, attention-seconds — by screen, by hour. Real-time dashboard.'
  },
  {
    icon: 'ph-clock',
    title: 'Live in 24 hours',
    body: 'Creative goes through APCON review and is live on screens the same day if approved.'
  }
]

const textPrimary = computed(() => props.dark ? 'text-neutral-50' : 'text-neutral-900')
const textSecondary = computed(() => props.dark ? 'text-neutral-400' : 'text-neutral-600')
const textTertiary = computed(() => props.dark ? 'text-neutral-600' : 'text-neutral-400')
const surfaceBg2 = computed(() => props.dark ? 'bg-neutral-700' : 'bg-neutral-100')
</script>
