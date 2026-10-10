<template>
  <div class="mkt-page">
    <!-- Hero -->
    <section class="mkt-hero">
      <div class="mkt-hero-pattern" aria-hidden="true"></div>
      <div class="mkt-wrap">
        <div class="mkt-hero-inner">
          <p class="mkt-hero-eyebrow">Contact</p>
          <h1 class="mkt-h1">Talk to us.</h1>
          <p class="mkt-lead">
            Whether you are buying, building, or hosting a screen, we will point
            you to the right place. One inbox, real people, two business days.
          </p>
          <div class="mkt-ctas">
            <a href="mailto:hello@usemimu.com" class="mkt-btn mkt-btn-cream">hello@usemimu.com</a>
            <a :href="signupUrl('contact')" class="mkt-btn mkt-btn-ghost">Get started</a>
          </div>
        </div>
      </div>
    </section>

    <!-- What can we help with -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">What can we help with</p>
        <h2 class="mkt-h2 wide">Tell us what you are here for.</h2>
        <div class="mkt-grid">
          <a
            v-for="r in reasons"
            :key="r.title"
            :href="r.href"
            class="mkt-card reason"
          >
            <h3>{{ r.title }}</h3>
            <p>{{ r.body }}</p>
            <span class="reason-link">{{ r.cta }} &rarr;</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Reach us -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <p class="mkt-tag">Reach us</p>
        <h2 class="mkt-h2 wide">One inbox for everything.</h2>
        <dl class="mkt-list">
          <div class="mkt-list-row">
            <dt>Email</dt>
            <dd>
              <a href="mailto:hello@usemimu.com" class="contact-email">hello@usemimu.com</a>
              — we respond within two business days.
            </dd>
          </div>
          <div class="mkt-list-row">
            <dt>Based in</dt>
            <dd>Lagos, Nigeria. Building the infrastructure for physical advertising across Africa.</dd>
          </div>
          <div class="mkt-list-row">
            <dt>Social</dt>
            <dd>
              <a href="https://www.linkedin.com/company/mimuads" target="_blank" rel="noopener noreferrer" class="contact-email">LinkedIn</a>,
              <a href="https://x.com/mimuads" target="_blank" rel="noopener noreferrer" class="contact-email">X</a>,
              <a href="https://www.instagram.com/mimuads" target="_blank" rel="noopener noreferrer" class="contact-email">Instagram</a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup>
import { signupUrl } from '@/links.js'

defineProps({ dark: { type: Boolean, default: false } })

const reasons = [
  {
    title: 'Buying ads',
    body: 'Run a campaign on the verified network, from a single screen to national reach.',
    cta: 'Get started',
    href: 'mailto:hello@usemimu.com?subject=Buying%20ads',
  },
  {
    title: 'Agencies and brands',
    body: 'Book the whole network for clients, with volume rates and client ready reporting.',
    cta: 'Email the team',
    href: 'mailto:hello@usemimu.com?subject=Agencies%20and%20brands',
  },
  {
    title: 'Developers and API',
    body: 'Activate inventory programmatically or run the network white label.',
    cta: 'Request early access',
    href: 'mailto:hello@usemimu.com?subject=API%20early%20access',
  },
  {
    title: 'Host a screen',
    body: 'Have a venue with foot traffic? Host a screen and earn from the network.',
    cta: 'Become a host',
    href: 'mailto:hello@usemimu.com?subject=Host%20a%20screen',
  },
]
</script>

<style scoped>
.reason {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: border-color 0.14s ease, transform 0.14s ease;
}
.reason:hover { border-color: #b55430; transform: translateY(-2px); }
.reason-link {
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  color: #b55430;
}
.contact-email {
  color: #b55430;
  font-weight: 500;
  text-decoration: none;
}
.contact-email:hover { text-decoration: underline; }
</style>
