<template>
  <footer class="border-t transition-colors duration-150" :class="borderClass">
    <div class="max-w-[1200px] mx-auto px-5 sm:px-8 py-10">
      <!-- Top row -->
      <div class="flex flex-wrap justify-between items-start gap-8 mb-8">
        <!-- Brand -->
        <div class="flex flex-col gap-3">
          <a
            :href="PLAYER_APK_URL"
            download
            rel="noopener"
            title="Download Mìmúads Player APK (Android TV / Fire TV)"
            class="cursor-pointer no-underline hover:opacity-75 transition-opacity inline-flex"
            aria-label="Download Mìmúads Player APK"
          >
            <Logo :dark="dark" :size="40" />
          </a>
          <p
            class="text-[11px] font-mono tracking-widest uppercase"
            :class="mutedClass"
          >
            Digital Out-of-Home · Global
          </p>
        </div>

        <!-- Social icons -->
        <div class="flex items-center gap-2">
          <a
            v-for="s in socials"
            :key="s.href"
            :href="s.href"
            :aria-label="s.label"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 flex items-center justify-center rounded-full border transition-colors"
            :class="
              dark
                ? 'border-white/10 text-neutral-400 hover:text-neutral-100 hover:border-white/30 hover:bg-white/5'
                : 'border-neutral-200 text-neutral-400 hover:text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50'
            "
          >
            <i :class="`ph ${s.icon} text-[15px]`"></i>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="h-px mb-6"
        :class="dark ? 'bg-white/[0.07]' : 'bg-neutral-200'"
      ></div>

      <!-- Bottom row -->
      <div class="flex flex-wrap justify-between items-center gap-4">
        <div class="flex flex-wrap gap-5">
          <component
            :is="link.to ? 'router-link' : 'a'"
            v-for="link in footerLinks"
            :key="link.label"
            :to="link.to"
            class="text-[12px] no-underline cursor-pointer hover:opacity-70 transition-opacity"
            :class="linkClass"
          >
            {{ link.label }}
          </component>
        </div>
        <p class="text-[11px]" :class="mutedClass">
          Lagos, Nigeria · APCON registered
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import Logo from "./Logo.vue";

const props = defineProps({
  dark: { type: Boolean, default: false },
});

const PLAYER_APK_URL =
  "https://mimu-player-apks-prod.s3.eu-north-1.amazonaws.com/v12/app-field.apk";

const socials = [
  {
    icon: "ph-instagram-logo",
    href: "https://www.instagram.com/mimuads",
    label: "Mimuads on Instagram",
  },
  {
    icon: "ph-x-logo",
    href: "https://twitter.com/mimuads",
    label: "Mimuads on X / Twitter",
  },
  {
    icon: "ph-linkedin-logo",
    href: "https://www.linkedin.com/company/mimuads",
    label: "Mimuads on LinkedIn",
  },
];

const footerLinks = [
  { label: "Privacy" },
  { label: "Terms", to: "/terms" },
  { label: "APCON" },
  { label: "NDPR" },
];

const borderClass = computed(() =>
  props.dark ? "border-white/[0.07]" : "border-neutral-200",
);
const linkClass = computed(() =>
  props.dark ? "text-neutral-500" : "text-neutral-500",
);
const mutedClass = computed(() =>
  props.dark ? "text-neutral-600" : "text-neutral-400",
);
</script>
