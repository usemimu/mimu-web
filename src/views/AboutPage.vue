<template>
  <div>
    <div class="max-w-[800px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <BaseTag variant="clay" :dark="dark" class="mb-5">About mìmú</BaseTag>

      <h1 class="font-display text-[clamp(40px,5vw,64px)] font-light leading-tight tracking-tight mb-8" :class="textPrimary">
        Built in Lagos, for Lagos first.
      </h1>

      <div class="text-[17px] leading-loose flex flex-col gap-6" :class="textSecondary">
        <p>mìmú means "to grab, to hold attention" in Yoruba. We named it that deliberately — because that is exactly what advertising is supposed to do, and almost never does.</p>

        <p>The existing options for a small business owner in Lagos — a restaurant in Yaba, a fashion brand in Surulere, a fintech looking for foot-traffic customers in Ikeja — are built for Coca-Cola, not for them. Agency-driven. Expensive. Unmeasured. Corporate.</p>

        <p>We built a different kind of network. Screens hosted by the neighborhood businesses themselves — the pharmacy on your street, the eatery downstairs. Ad time sold in Naira, starting at ₦5,000. Viewership measured by AI on the device itself, not estimated. Earnings paid every Friday directly to the host's bank account.</p>

        <p class="font-display text-[26px] font-normal italic text-clay-500 leading-snug">
          "The network grows when the neighborhood benefits from it."
        </p>

        <p>That is why our model works. Every pharmacy that hosts a screen has an incentive to tell the next pharmacy. Every advertiser who sees real viewers counted tells the next one.</p>

        <p>We are Lagos-first. Not because we are not ambitious — we are — but because doing it right here means building the model that can go everywhere else.</p>
      </div>

      <div class="mt-14 pt-10 border-t" :class="borderClass">
        <div class="text-xs font-semibold tracking-wider uppercase mb-5" :class="textTertiary">
          Three pillars
        </div>

        <div class="flex flex-col gap-4">
          <div
            v-for="(pillar, i) in pillars"
            :key="i"
            class="flex gap-5 items-start"
          >
            <div class="w-7 h-7 rounded-lg bg-clay-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-xs font-extrabold text-white">{{ i + 1 }}</span>
            </div>
            <div>
              <div class="text-[15px] font-bold mb-1" :class="textPrimary">
                {{ pillar.title }}
              </div>
              <div class="text-sm leading-relaxed" :class="textSecondary">
                {{ pillar.body }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseTag from '@/components/BaseTag.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

const pillars = [
  {
    title: 'Built for Nigerian SMEs first',
    body: 'Naira pricing. Paystack-native. Pidgin-friendly. APCON handled. Designed for the restaurant owner in Yaba, not the CMO of a multinational.'
  },
  {
    title: 'Verified attention, not promises',
    body: 'Real AI-measured viewership. Anonymous, on-device. You see exactly how many people saw your ad, by screen, by hour.'
  },
  {
    title: 'Neighborhood infrastructure',
    body: 'Hosted by local businesses. Earnings flow back to the neighborhood. Network grows by referral, not by acquisition budget.'
  }
]

const textPrimary = computed(() => props.dark ? 'text-neutral-50' : 'text-neutral-900')
const textSecondary = computed(() => props.dark ? 'text-neutral-400' : 'text-neutral-600')
const textTertiary = computed(() => props.dark ? 'text-neutral-600' : 'text-neutral-400')
const borderClass = computed(() => props.dark ? 'border-white/[0.08]' : 'border-neutral-200')
</script>
