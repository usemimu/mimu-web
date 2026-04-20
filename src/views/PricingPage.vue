<template>
  <div>
    <div class="max-w-[900px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <BaseTag variant="clay" :dark="dark" class="mb-4">Pricing</BaseTag>

      <h1 class="font-display text-[clamp(40px,5vw,64px)] font-normal leading-tight tracking-tight mb-4" :class="textPrimary">
        No hidden fees. No agency margin.
      </h1>
      <p class="text-[17px] leading-relaxed mb-14 max-w-[560px]" :class="textSecondary">
        You pay for plays. Every naira goes toward your ads reaching real people. Nothing else.
      </p>

      <!-- Pricing table -->
      <div class="rounded-[20px] overflow-hidden border mb-12" :class="borderClass">
        <div
          v-for="(tier, i) in pricingTiers"
          :key="i"
          class="p-4 sm:p-7 grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_1fr_1fr_140px] items-center gap-3 sm:gap-4"
          :class="[
            tier.highlight ? 'bg-clay-500' : (i % 2 === 0 ? cardBg : (dark ? 'bg-[#141210]' : 'bg-[#FDFCFB]')),
            i < pricingTiers.length - 1 ? (tier.highlight ? 'border-b border-white/15' : 'border-b ' + borderClass) : ''
          ]"
        >
          <div>
            <div class="text-base font-bold" :class="tier.highlight ? 'text-white' : textPrimary">
              {{ tier.tier }}
            </div>
          </div>
          <div>
            <div class="font-display text-2xl font-normal tabular-nums" :class="tier.highlight ? 'text-white/90' : 'text-clay-500'">
              {{ tier.price }}
            </div>
            <div class="text-[11px] mt-0.5" :class="tier.highlight ? 'text-white/50' : textTertiary">
              minimum
            </div>
          </div>
          <div class="text-[13px]" :class="tier.highlight ? 'text-white/75' : textSecondary">
            {{ tier.screens }}
          </div>
          <div class="text-[13px]" :class="tier.highlight ? 'text-white/75' : textSecondary">
            {{ tier.duration }}
          </div>
          <div class="text-[13px]" :class="tier.highlight ? 'text-white/75' : textSecondary">
            {{ tier.impressions }}
          </div>
          <BaseButton
            :variant="tier.highlight ? 'ghost' : 'outline'"
            size="sm"
            :dark="tier.highlight ? true : dark"
            :class="tier.highlight ? 'bg-white/20' : ''"
          >
            {{ tier.cta }}
          </BaseButton>
        </div>
      </div>

      <!-- Info box -->
      <div
        class="p-6 rounded-[14px] border mb-8"
        :class="dark ? 'bg-gold-500/10 border-gold-500/20' : 'bg-[#FCF7E8] border-[#EDD88A]'"
      >
        <div class="flex gap-3 items-start">
          <i class="ph ph-info text-lg text-gold-500 flex-shrink-0 mt-0.5"></i>
          <div class="text-sm leading-relaxed" :class="dark ? 'text-[#E0BF50]' : 'text-[#684E0F]'">
            <strong>Pricing is transparent and per-play.</strong> The figures above are minimums. You always see the full cost before you pay. APCON vetting is included. There are no platform fees, service charges, or agency markups.
          </div>
        </div>
      </div>

      <!-- Quick stats -->
      <div class="grid grid-cols-2 gap-3">
        <div
          v-for="stat in quickStats"
          :key="stat.label"
          class="rounded-xl p-5 border flex items-center gap-4"
          :class="[cardBg, borderClass]"
        >
          <div class="font-display text-[28px] font-light text-clay-500 tabular-nums">
            {{ stat.value }}
          </div>
          <div class="text-sm" :class="textSecondary">
            {{ stat.label }}
          </div>
        </div>
      </div>
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

const pricingTiers = [
  {
    tier: 'Starter',
    price: '₦5,000',
    screens: '1–3 screens',
    duration: '1 week',
    impressions: '~800–2,400',
    cta: 'Get started',
    highlight: false
  },
  {
    tier: 'Growth',
    price: '₦20,000',
    screens: '5–10 screens',
    duration: '2 weeks',
    impressions: '~7,000–15,000',
    cta: 'Most popular',
    highlight: true
  },
  {
    tier: 'Scale',
    price: '₦80,000',
    screens: '15+ screens',
    duration: '4 weeks',
    impressions: '~40,000+',
    cta: 'Contact us',
    highlight: false
  }
]

const quickStats = [
  { value: '₦0', label: 'Setup fee' },
  { value: '₦0', label: 'APCON processing fee' },
  { value: '0%', label: 'Platform markup' },
  { value: '24hr', label: 'Time to go live' }
]

const textPrimary = computed(() => props.dark ? 'text-neutral-50' : 'text-neutral-900')
const textSecondary = computed(() => props.dark ? 'text-neutral-400' : 'text-neutral-600')
const textTertiary = computed(() => props.dark ? 'text-neutral-600' : 'text-neutral-400')
const cardBg = computed(() => props.dark ? 'bg-neutral-800' : 'bg-white')
const borderClass = computed(() => props.dark ? 'border-white/[0.08]' : 'border-neutral-200')
</script>
