<template>
  <div class="mkt-page">
    <!-- Hero -->
    <section class="mkt-hero">
      <div class="mkt-hero-pattern" aria-hidden="true"></div>
      <div class="mkt-wrap">
        <div class="mkt-hero-inner">
          <p class="mkt-hero-eyebrow">About Mimuads</p>
          <h1 class="mkt-h1">The infrastructure for physical advertising.</h1>
          <p class="mkt-lead">
            Mimuads is not an agency or another advertising platform. We are the
            infrastructure that makes physical screens across Africa verified,
            programmable and buyable, so any business can sell.
          </p>
          <div class="mkt-ctas">
            <a :href="signupUrl('about')" class="mkt-btn mkt-btn-cream">Get started</a>
            <router-link to="/contact" class="mkt-btn mkt-btn-ghost">Talk to us</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- The thesis -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">The thesis</p>
        <h2 class="mkt-h2 wide">Africa has the screens. It is missing the infrastructure.</h2>
        <div class="mkt-prose" style="margin-top: 26px">
          <p>
            Physical advertising is everywhere, yet it runs on nothing. Supply is
            scattered across venues and operators with no shared way to verify a
            view, no common way to buy, and no standard record of what actually
            played. Brands overpay for estimates. Screen owners leave money on the
            table. Nobody can trust the numbers.
          </p>
          <p>
            <strong>We build the connective layer underneath all of it.</strong> A
            verified network of screens, on device proof of play on every
            impression, and one way to buy, whether you are a single shop on the
            app, an agency booking nationally, or a platform plugging in through
            the API.
          </p>
          <p>
            When the infrastructure is reliable, everything above it gets easier.
            That is the layer Mimuads is building.
          </p>
        </div>
      </div>
    </section>

    <!-- What we are building -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <p class="mkt-tag">What we are building</p>
        <h2 class="mkt-h2 wide">One system, four parts.</h2>
        <div class="mkt-grid">
          <div class="mkt-card" v-for="p in pillars" :key="p.title">
            <h3>{{ p.title }}</h3>
            <p>{{ p.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who we serve -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">Who plugs in</p>
        <h2 class="mkt-h2 wide">Built for everyone who sells in the physical world.</h2>
        <dl class="mkt-list">
          <div class="mkt-list-row" v-for="a in audiences" :key="a.who">
            <dt>{{ a.who }}</dt>
            <dd>{{ a.how }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <div class="mkt-hero-pattern" aria-hidden="true"></div>
          <h2>Build on the infrastructure.</h2>
          <p>Start selling on the verified network, or talk to us about plugging in.</p>
          <div class="mkt-ctas">
            <a :href="signupUrl('about')" class="mkt-btn mkt-btn-cream">Get started</a>
            <router-link to="/player" class="mkt-btn mkt-btn-ghost">The player</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { signupUrl } from '@/links.js'

defineProps({ dark: { type: Boolean, default: false } })

const pillars = [
  {
    title: 'A verified network',
    body: 'Screens across high traffic venues, connected into one addressable network instead of scattered, unverifiable supply.',
  },
  {
    title: 'On device verification',
    body: 'Every screen counts real viewers on device and records proof of play, so you buy against evidence, not estimates.',
  },
  {
    title: 'Programmable access',
    body: 'One integration to the whole network through a supply side API, so platforms and agencies can activate inventory in code.',
  },
  {
    title: 'A white label OS',
    body: 'The player software, agentic ML targeting and computer vision verification, ready to run under your own brand.',
  },
]

const audiences = [
  { who: 'SMBs', how: 'Self serve a single screen from the mobile app and go live in a day.' },
  { who: 'Startups and brands', how: 'Run national campaigns across the verified network from the dashboard.' },
  { who: 'Agencies', how: 'Book the whole network for clients, with volume rates and client ready reporting.' },
  { who: 'FMCG and enterprise', how: 'Reach consumers at the point of purchase with measurable proof of play.' },
  { who: 'DSPs and buying platforms', how: 'Activate inventory programmatically through one supply side API.' },
  { who: 'Venue hosts', how: 'Host a screen and earn from the network with nothing to manage.' },
]
</script>
