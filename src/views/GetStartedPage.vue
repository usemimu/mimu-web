<template>
  <div class="mkt-page">
    <!-- Hero -->
    <section class="mkt-hero">
      <div class="mkt-hero-pattern" aria-hidden="true"></div>
      <div class="mkt-wrap">
        <div class="mkt-hero-inner">
          <p class="mkt-hero-eyebrow">Get started</p>
          <h1 class="mkt-h1">Start selling on the infrastructure.</h1>
          <p class="mkt-lead">
            For SMBs, startups, businesses, brands and FMCG. Launch verified,
            programmatic DOOH campaigns self serve on the infrastructure for
            physical ad buying. No agency needed, live in a day.
          </p>
          <div class="mkt-ctas">
            <a
              :href="signupUrl('get-started')"
              class="mkt-btn mkt-btn-cream"
              data-ga-event="start_campaign"
              data-ga-label="get_started_hero"
            >Create your account</a>
            <a :href="loginUrl()" class="mkt-btn mkt-btn-ghost">Log in</a>
          </div>
          <div class="gs-badges">
            <a
              href="https://apps.apple.com/app/mimuads/id6775953486"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img src="/hero/badge-apple.svg" alt="Download on the App Store" class="gs-badge" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ng.mimu.advertiser"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
            >
              <img src="/hero/badge-google.svg" alt="Get it on Google Play" class="gs-badge" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Three steps -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">How it works</p>
        <h2 class="mkt-h2 wide">Three steps to live.</h2>
        <div class="mkt-grid">
          <div class="mkt-card" v-for="(s, i) in steps" :key="s.title">
            <span class="mkt-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What you get -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <p class="mkt-tag">What you get</p>
        <h2 class="mkt-h2 wide">Buy direct, on verified views.</h2>
        <dl class="mkt-list">
          <div class="mkt-list-row" v-for="b in benefits" :key="b.name">
            <dt>{{ b.name }}</dt>
            <dd>{{ b.body }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <div class="mkt-hero-pattern" aria-hidden="true"></div>
          <h2>Launch your first campaign.</h2>
          <p>Create an account and go live on the verified network in a day. Buying at scale? Talk to us.</p>
          <div class="mkt-ctas">
            <a :href="signupUrl('get-started')" class="mkt-btn mkt-btn-cream">Create your account</a>
            <router-link to="/contact" class="mkt-btn mkt-btn-ghost">Talk to sales</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { signupUrl, loginUrl } from '@/links.js'

defineProps({ dark: { type: Boolean, default: false } })

const steps = [
  { title: 'Create your account', body: 'Sign up in minutes and prepay your wallet in Naira. No contract, no minimum.' },
  { title: 'Build a campaign', body: 'Pick your screens, upload your creative, set a budget. We submit it for APCON vetting automatically.' },
  { title: 'Go live and measure', body: 'Your ad runs on verified screens. You buy against proof of play and watch reach in real time.' },
]

const benefits = [
  { name: 'Verified views', body: 'Pay for computer vision verified plays, not estimates. Every impression is proof of play.' },
  { name: 'No agency markup', body: 'Buy direct on the published rate. No agency markup, no platform fee.' },
  { name: 'Live in a day', body: 'Self serve from the app or dashboard and go live across the network in a day.' },
  { name: 'APCON handled', body: 'Creative vetting for APCON compliance is built in, so your ad is cleared to run.' },
]
</script>

<style scoped>
.gs-badges { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 12px; }
.gs-badge { height: 46px; width: auto; display: block; }
</style>
