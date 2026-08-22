<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col items-center px-4 py-10">
    <div class="w-full max-w-[440px]">
      <!-- Brand -->
      <div class="flex items-center gap-2 mb-8">
        <img src="/favicon.svg" alt="" class="w-8 h-8" onerror="this.style.display='none'" />
        <span class="font-display text-xl font-medium text-neutral-900">Mimuads</span>
      </div>

      <!-- Loading -->
      <div v-if="state === 'loading'" class="py-20 text-center text-neutral-500">
        Loading your deal…
      </div>

      <!-- No live offer -->
      <div v-else-if="state === 'no-offer'" class="rounded-2xl bg-white border border-neutral-200 p-8 text-center">
        <h1 class="font-display text-2xl text-neutral-900 mb-2">No deal right now</h1>
        <p class="text-neutral-500 text-[15px]">
          There's no live offer on this screen at the moment. Check back soon.
        </p>
      </div>

      <!-- Claimed: show the code -->
      <div v-else-if="state === 'claimed'" class="rounded-2xl bg-white border border-neutral-200 p-8">
        <p class="text-xs font-semibold tracking-widest uppercase text-clay-600 mb-2">Your deal is ready</p>
        <h1 class="font-display text-[26px] leading-tight text-neutral-900 mb-4">{{ offer.headline }}</h1>
        <div class="rounded-xl bg-neutral-50 border border-dashed border-neutral-300 py-6 text-center mb-5">
          <p class="text-[11px] tracking-widest uppercase text-neutral-500 mb-1">Show this code</p>
          <p class="text-3xl font-mono font-semibold tracking-[0.2em] text-neutral-900">{{ code }}</p>
        </div>
        <a
          v-if="offer.ctaType !== 'in_store' && offer.ctaUrl"
          :href="offer.ctaUrl"
          class="block w-full text-center rounded-xl bg-clay-500 text-white font-semibold py-3.5 mb-3"
        >
          {{ ctaLabel }}
        </a>
        <p v-if="needsConfirm" class="text-[13px] text-neutral-500 text-center">
          Check your inbox to confirm and keep getting deals from places you visit.
        </p>
      </div>

      <!-- Offer + claim form -->
      <div v-else class="rounded-2xl bg-white border border-neutral-200 overflow-hidden">
        <div class="p-8 pb-6">
          <p class="text-xs font-semibold tracking-widest uppercase text-clay-600 mb-2">
            {{ venueName ? `You're at ${venueName}` : 'Deal near you' }}
          </p>
          <h1 class="font-display text-[26px] leading-tight text-neutral-900 mb-3">{{ offer.headline }}</h1>
          <p v-if="offer.details" class="text-neutral-600 text-[15px] leading-relaxed">{{ offer.details }}</p>
        </div>

        <form class="px-8 pb-8 pt-2 flex flex-col gap-3" @submit.prevent="submit">
          <input
            v-model="email"
            type="email"
            required
            placeholder="Your email"
            class="w-full rounded-xl border border-neutral-300 px-4 py-3.5 text-[15px] outline-none focus:border-clay-500"
          />
          <label class="flex items-start gap-2.5 text-[13px] text-neutral-600 leading-snug">
            <input v-model="consent" type="checkbox" class="mt-0.5 accent-[#B55430]" />
            <span>Send me offers from businesses at venues I visit. Unsubscribe anytime.</span>
          </label>
          <button
            type="submit"
            :disabled="busy"
            class="w-full rounded-xl bg-clay-500 text-white font-semibold py-3.5 disabled:opacity-60"
          >
            {{ busy ? 'Getting your deal…' : 'Claim this deal' }}
          </button>
          <p v-if="error" class="text-[13px] text-red-600 text-center">{{ error }}</p>
        </form>
      </div>

      <p class="text-[11px] text-neutral-400 text-center mt-6">
        © 2026 Mimuads · Lagos, Nigeria
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { portalApi } from '@/lib/portalApi'

const route = useRoute()
const state = ref('loading') // loading | form | claimed | no-offer
const offer = ref(null)
const venueName = ref('')
const code = ref('')
const needsConfirm = ref(false)

const email = ref('')
const consent = ref(true)
const busy = ref(false)
const error = ref('')

const ctaLabel = computed(() =>
  offer.value?.ctaType === 'whatsapp' ? 'Message on WhatsApp' : 'Claim your offer',
)

onMounted(async () => {
  try {
    const res = await portalApi.screenOffer(route.params.code)
    venueName.value = res.screen?.venueName || res.screen?.name || ''
    if (!res.offer) {
      state.value = 'no-offer'
      return
    }
    offer.value = res.offer
    state.value = 'form'
  } catch {
    state.value = 'no-offer'
  }
})

async function submit() {
  error.value = ''
  busy.value = true
  try {
    const res = await portalApi.claim({
      screenCode: route.params.code,
      email: email.value.trim(),
      consentOffers: consent.value,
    })
    code.value = res.redemptionCode
    needsConfirm.value = res.needsConfirm
    state.value = 'claimed'
  } catch (e) {
    error.value = e.message || 'Something went wrong. Try again.'
  } finally {
    busy.value = false
  }
}
</script>
