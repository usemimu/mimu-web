<template>
  <div class="min-h-screen bg-neutral-50 flex flex-col items-center justify-center px-4 py-10">
    <div class="w-full max-w-[420px] text-center">
      <div class="flex items-center justify-center gap-2 mb-8">
        <span class="font-display text-xl font-medium text-neutral-900">Mimuads</span>
      </div>

      <div class="rounded-2xl bg-white border border-neutral-200 p-10">
        <div v-if="state === 'loading'" class="text-neutral-500 py-6">Confirming…</div>

        <template v-else-if="state === 'done'">
          <div class="w-12 h-12 rounded-full bg-clay-50 text-clay-600 mx-auto flex items-center justify-center mb-5">
            <i class="ph ph-check text-2xl"></i>
          </div>
          <h1 class="font-display text-[26px] text-neutral-900 mb-2">You're all set</h1>
          <p class="text-neutral-500 text-[15px]">
            You'll now get deals from businesses at the venues you visit. Enjoy Lagos.
          </p>
        </template>

        <template v-else>
          <h1 class="font-display text-[26px] text-neutral-900 mb-2">Link expired</h1>
          <p class="text-neutral-500 text-[15px]">
            This confirmation link is invalid or already used. Scan a screen again to opt back in.
          </p>
        </template>
      </div>

      <p class="text-[11px] text-neutral-400 mt-6">© 2026 Mimuads · Lagos, Nigeria</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { portalApi } from '@/lib/portalApi'

const route = useRoute()
const state = ref('loading') // loading | done | error

onMounted(async () => {
  try {
    await portalApi.confirm(route.params.token)
    state.value = 'done'
  } catch {
    state.value = 'error'
  }
})
</script>
