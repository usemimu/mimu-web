<template>
  <header class="nav-pill" :class="dark ? 'nav-dark' : 'nav-light'">
    <!-- Brand -->
    <router-link to="/" class="nav-brand" aria-label="Mimuads home">
      <Logo :dark="dark" :size="28" />
    </router-link>

    <!-- Desktop anchor + route links -->
    <nav class="nav-links" aria-label="Site sections">
      <component
        :is="link.to ? 'router-link' : 'a'"
        v-for="link in navLinks"
        :key="link.label"
        :to="link.to"
        :href="link.href"
        class="nav-link"
        :class="dark ? 'text-neutral-400' : 'text-neutral-500'"
      >
        {{ link.label }}
      </component>
    </nav>

    <!-- Social icons + CTA -->
    <div class="nav-right">
      <div class="nav-socials">
        <a
          v-for="s in socials"
          :key="s.href"
          :href="s.href"
          :aria-label="s.label"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-social"
          :class="
            dark
              ? 'text-neutral-400 hover:text-neutral-100'
              : 'text-neutral-400 hover:text-neutral-800'
          "
        >
          <i :class="`ph ${s.icon} text-base`"></i>
        </a>
      </div>

      <a href="mailto:femi@usemimu.com" class="nav-cta" data-ga-event="start_campaign" data-ga-label="nav"> Start a Campaign </a>
    </div>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";

defineProps({
  dark: { type: Boolean, default: false },
});

const navLinks = [
  { label: "advertisers", href: "/#advertisers" },
  { label: "agencies", to: "/agencies" },
  { label: "hosts", href: "/#hosts" },
  { label: "how it works", href: "/#how-it-works" },
  { label: "faq", href: "/#faq" },
];

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
</script>

<style scoped>
/* ── Pill container ────────────────────────────────────────── */
.nav-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 52px;
  padding: 0 8px 0 14px;
  border-radius: 999px;
  max-width: 960px;
  margin: 0 auto;

  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.nav-light {
  background: rgba(247, 245, 242, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.09);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.07),
    0 1px 4px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.nav-dark {
  background: rgba(14, 13, 11, 0.91);
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    0 1px 4px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

/* ── Brand ─────────────────────────────────────────────────── */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  flex-shrink: 0;
}

.nav-wordmark {
  font-family: "Cormorant", Georgia, serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1;
}
.nav-wordmark em {
  font-style: italic;
}

/* ── Desktop links ──────────────────────────────────────────── */
.nav-links {
  display: none;
  align-items: center;
  gap: 22px;
  margin-left: 18px;
  flex: 1;
}
@media (min-width: 720px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.15s ease;
}
.nav-link:hover {
  opacity: 1 !important;
}

/* ── Right cluster ──────────────────────────────────────────── */
.nav-right {
  display: flex;
  align-items: center;
  gap: 2px;
  margin-left: auto;
}

.nav-socials {
  display: none;
  align-items: center;
}
@media (min-width: 580px) {
  .nav-socials {
    display: flex;
  }
}

.nav-social {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-decoration: none;
  transition:
    color 0.15s ease,
    background 0.15s ease;
}
.nav-social:hover {
  background: rgba(128, 128, 128, 0.12);
}

/* ── CTA pill ───────────────────────────────────────────────── */
.nav-cta {
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  margin-left: 8px;
  border-radius: 999px;
  background: #b55430;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: opacity 0.15s ease;
}
.nav-cta:hover {
  opacity: 0.82;
}
</style>
