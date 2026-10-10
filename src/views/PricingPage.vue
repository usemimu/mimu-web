<template>
  <div class="mkt-page">
    <!-- Hero -->
    <section class="mkt-hero">
      <div class="mkt-hero-pattern" aria-hidden="true"></div>
      <div class="mkt-wrap">
        <div class="mkt-hero-inner">
          <p class="mkt-hero-eyebrow">Pricing</p>
          <h1 class="mkt-h1">Pay for verified views. Nothing else.</h1>
          <p class="mkt-lead">
            Transparent unit pricing on every screen. No agency markup, no
            platform fees, prepaid in Naira. You buy against proof of play, not
            estimates.
          </p>
          <div class="mkt-ctas">
            <a :href="signupUrl('pricing')" class="mkt-btn mkt-btn-cream">Get started</a>
            <router-link to="/contact" class="mkt-btn mkt-btn-ghost">Talk to sales</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Plans -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">How buying works</p>
        <h2 class="mkt-h2 wide">Three ways to buy the same verified network.</h2>
        <div class="mkt-grid">
          <div class="mkt-card" v-for="p in plans" :key="p.title">
            <span class="mkt-num">{{ p.price }}</span>
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
          </div>
        </div>
        <p class="mkt-sub" style="margin-top: 24px">
          Rates vary by venue category and demand. The price quoted when you
          submit a campaign is the price you pay for that campaign.
        </p>
      </div>
    </section>

    <!-- Always included -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <p class="mkt-tag">Always included</p>
        <h2 class="mkt-h2 wide">Every plan ships on the same infrastructure.</h2>
        <dl class="mkt-list">
          <div class="mkt-list-row" v-for="f in included" :key="f.name">
            <dt>{{ f.name }}</dt>
            <dd>{{ f.body }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <div class="mkt-hero-pattern" aria-hidden="true"></div>
          <h2>See it on your own budget.</h2>
          <p>Create an account to view live rates, or talk to us about volume and programmatic pricing.</p>
          <div class="mkt-ctas">
            <a :href="signupUrl('pricing')" class="mkt-btn mkt-btn-cream">Get started</a>
            <router-link to="/contact" class="mkt-btn mkt-btn-ghost">Talk to sales</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { signupUrl } from '@/links.js'

defineProps({ dark: { type: Boolean, default: false } })

const plans = [
  {
    price: 'Self serve',
    title: 'SMBs and brands',
    body: 'Prepay in Naira and buy per verified view on the app or dashboard. Go live in a day, no minimum, no contract.',
  },
  {
    price: 'Volume rates',
    title: 'Agencies',
    body: 'Book across the whole network for clients, with volume rates on larger campaigns and client ready reporting.',
  },
  {
    price: 'Custom',
    title: 'Programmatic and white label',
    body: 'Activate inventory through the supply side API, or run the network under your own brand. Priced to your scale.',
  },
]

const included = [
  { name: 'APCON vetting', body: 'Every creative is submitted for APCON compliance before it runs, built into the platform.' },
  { name: 'On device verification', body: 'Computer vision counts real viewers on device and records proof of play on every impression.' },
  { name: 'Reporting', body: 'Verified impressions, reach by area and peak time performance, ready to share with clients.' },
  { name: 'No markup or platform fee', body: 'You pay the published rate for verified views. No agency markup, no platform surcharge.' },
]
</script>
