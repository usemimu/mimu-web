<template>
  <div class="border-t py-10 px-8" :class="borderClass">
    <div class="max-w-[1200px] mx-auto flex justify-between items-center gap-6 flex-wrap">
      <!--
        The footer logo doubles as the Android-TV player download link.
        Operators visiting from an Android TV's browser tap this to
        fetch the latest signed APK directly from S3 — same artifact
        the OTA path serves. `download` hints the browser to save
        rather than navigate. The `rel="noopener"` is belt-and-brace
        in case a TV browser opens the target in a new tab.
      -->
      <a
        :href="PLAYER_APK_URL"
        download
        rel="noopener"
        title="Download Mìmúads Player APK (Android TV / Fire TV / Android tablet)"
        class="cursor-pointer no-underline hover:opacity-80 transition-opacity"
        aria-label="Download Mìmúads Player APK"
      >
        <Logo :dark="dark" :size="54" :show-wordmark="true" />
      </a>

      <div class="flex gap-6 flex-wrap">
        <component
          :is="link.to ? 'router-link' : 'a'"
          v-for="link in footerLinks"
          :key="link.label"
          :to="link.to"
          class="text-[13px] no-underline cursor-pointer hover:opacity-70 transition-opacity"
          :class="linkClass"
        >
          {{ link.label }}
        </component>
      </div>

      <div class="text-xs" :class="textClass">
        Lagos, Nigeria · APCON registered
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Logo from './Logo.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

// Direct S3 URL of the currently-shipped player APK. Bump the
// version segment whenever a new player_releases row publishes
// (admin → Configuration → Player releases). The same APK file is
// what SelfUpdateWorker pulls for OTA, so this never diverges
// from the fleet's installed version unless someone forgets to
// edit this line — worth a release-checklist item.
// https://mimu-player-apks-prod.s3.eu-north-1.amazonaws.com/v3/app-field.apk
const PLAYER_APK_URL =
  'https://mimu-player-apks-prod.s3.eu-north-1.amazonaws.com/v4/app-field.apk'

// `to` set ⇒ rendered as <router-link>; left undefined ⇒ falls back to a
// no-op <a> until the destination page exists.
const footerLinks = [
  { label: 'Privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'APCON' },
  { label: 'NDPR' },
]

const borderClass = computed(() =>
  props.dark ? 'border-white/[0.07]' : 'border-neutral-200'
)

const linkClass = computed(() =>
  props.dark ? 'text-neutral-600' : 'text-neutral-600'
)

const textClass = computed(() =>
  props.dark ? 'text-neutral-600' : 'text-neutral-600'
)
</script>
