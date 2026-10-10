<template>
  <div class="mkt-page">
    <!-- Hero -->
    <section class="mkt-hero">
      <div class="mkt-hero-pattern" aria-hidden="true"></div>
      <div class="mkt-wrap">
        <div class="mkt-hero-inner">
          <p class="mkt-hero-eyebrow">Mimuads Player</p>
          <h1 class="mkt-h1">The agentic ML player that runs the network.</h1>
          <p class="mkt-lead">
            The Android player on every Mimuads screen. Agentic ML schedules the
            inventory, computer vision verifies viewership on device, and every
            play is recorded as proof. Download it and run it on your screens.
          </p>
          <div class="mkt-ctas mkt-player-ctas">
            <a
              href="https://play.google.com/store/apps/details?id=ng.mimu.player"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get the Mimuads Player on Google Play"
            >
              <img src="/hero/badge-google.svg" alt="Get it on Google Play" class="mkt-play-badge" />
            </a>
            <a :href="PLAYER_APK_URL" download class="mkt-btn mkt-btn-ghost">Download APK</a>
          </div>
        </div>
      </div>
    </section>

    <!-- What it does -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">What it does</p>
        <h2 class="mkt-h2 wide">Intelligence on every screen, not in a server somewhere.</h2>
        <div class="mkt-grid">
          <div class="mkt-card" v-for="c in capabilities" :key="c.title">
            <h3>{{ c.title }}</h3>
            <p>{{ c.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who it's for -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <p class="mkt-tag">Who runs it</p>
        <h2 class="mkt-h2 wide">Built for anyone operating screens.</h2>
        <dl class="mkt-list">
          <div class="mkt-list-row" v-for="a in audiences" :key="a.who">
            <dt>{{ a.who }}</dt>
            <dd>{{ a.how }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Build on it (developers / API) -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">Build on it</p>
        <h2 class="mkt-h2 wide">Everything the player does, in code.</h2>
        <p class="mkt-sub">
          The programmable side of the network. Activate inventory, receive proof
          of play, embed the player, or run the whole stack under your own brand.
        </p>
        <div class="mkt-grid">
          <div class="mkt-card" v-for="c in buildOn" :key="c.title">
            <span class="mkt-num">{{ c.tag }}</span>
            <h3>{{ c.title }}</h3>
            <p>{{ c.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <div class="mkt-hero-pattern" aria-hidden="true"></div>
          <h2>Run the network on your screens.</h2>
          <p>Download the player, or talk to us about the API and running it white label under your own brand.</p>
          <div class="mkt-ctas">
            <a :href="PLAYER_APK_URL" download class="mkt-btn mkt-btn-cream">Download APK</a>
            <a href="mailto:hello@usemimu.com?subject=API%20early%20access" class="mkt-btn mkt-btn-ghost">Request early access</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { PLAYER_APK_URL } from '@/links.js'

defineProps({ dark: { type: Boolean, default: false } })

const capabilities = [
  { title: 'Agentic ML scheduling', body: 'The player decides what plays, when, balancing campaigns and demand on device, without waiting on a server.' },
  { title: 'Computer vision verification', body: 'An on device model counts real viewers anonymously. No camera data ever leaves the screen.' },
  { title: 'Proof of play', body: 'Every impression is recorded as verified evidence, by screen and by time, ready to report against.' },
  { title: 'Offline resilient', body: 'It keeps playing and logging through network drops, then syncs proof of play when it reconnects.' },
  { title: 'Remote managed', body: 'Content, updates and health are managed over the air. Hosts just keep the screen powered on.' },
  { title: 'White label ready', body: 'Run the same stack, player, agentic ML and verification, under your own brand.' },
]

const audiences = [
  { who: 'Venue hosts', how: 'Run a Mimuads screen and earn from verified plays, with nothing to manage.' },
  { who: 'Network operators', how: 'Deploy across many screens and manage the whole fleet over the air.' },
  { who: 'White label partners', how: 'Run the player and verification under your own brand on your own inventory.' },
]

const buildOn = [
  { tag: 'Supply', title: 'Supply side API', body: 'Query the verified network and activate inventory programmatically, one integration to every screen.' },
  { tag: 'Proof', title: 'Proof of play', body: 'Receive on device proof of play and verified view counts for every impression, by screen and time.' },
  { tag: 'SDK', title: 'Player SDK', body: 'Embed the Android player that schedules, renders and verifies playback on screens in the field.' },
  { tag: 'Brand', title: 'White label', body: 'Run the whole stack, player, agentic ML and computer vision verification, under your own brand.' },
]
</script>

<style scoped>
.mkt-player-ctas { align-items: center; }
.mkt-play-badge { height: 52px; width: auto; display: block; }
</style>
