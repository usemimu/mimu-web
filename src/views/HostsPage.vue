<template>
  <div class="mkt-page">
    <!-- Hero -->
    <section class="mkt-hero">
      <div class="mkt-hero-pattern" aria-hidden="true"></div>
      <div class="mkt-wrap">
        <div class="mkt-hero-inner">
          <p class="mkt-hero-eyebrow">For venue hosts</p>
          <h1 class="mkt-h1">Host a screen. Earn from the network.</h1>
          <p class="mkt-lead">
            Put a Mimuads screen in your venue and earn from the infrastructure,
            with nothing to manage. We install it, maintain it, and pay you every
            Friday.
          </p>
          <div class="mkt-ctas">
            <a href="mailto:hello@usemimu.com?subject=Host%20a%20screen" class="mkt-btn mkt-btn-cream">Apply to host</a>
            <router-link to="/contact" class="mkt-btn mkt-btn-ghost">Talk to us</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">How it works</p>
        <h2 class="mkt-h2 wide">You host the screen. We run the network.</h2>
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
        <h2 class="mkt-h2 wide">The supply side, built for the host.</h2>
        <dl class="mkt-list">
          <div class="mkt-list-row" v-for="b in benefits" :key="b.name">
            <dt>{{ b.name }}</dt>
            <dd>{{ b.body }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- Who can host -->
    <section class="mkt-section mkt-section-alt">
      <div class="mkt-wrap">
        <p class="mkt-tag">Who can host</p>
        <h2 class="mkt-h2 wide">If people walk through, it works.</h2>
        <div class="mkt-prose" style="margin-top: 24px">
          <p>
            Restaurants, train stations, airports, malls, supermarkets, salons,
            pharmacies, any venue with consistent foot traffic. The screen sits
            where customers already wait and look, playing verified, APCON vetted
            ads from the network.
          </p>
          <p>
            <strong>You keep 20% of screen time</strong> as a free slot for your
            own promotions. The rest earns you a share of every verified play,
            paid straight to your bank account.
          </p>
        </div>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="mkt-section">
      <div class="mkt-wrap">
        <div class="mkt-cta">
          <div class="mkt-hero-pattern" aria-hidden="true"></div>
          <h2>Become part of the supply side.</h2>
          <p>Apply to host a Mimuads screen. We handle the install, the ads and the maintenance.</p>
          <div class="mkt-ctas">
            <a href="mailto:hello@usemimu.com?subject=Host%20a%20screen" class="mkt-btn mkt-btn-cream">Apply to host</a>
            <router-link to="/about" class="mkt-btn mkt-btn-ghost">About the network</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineProps({ dark: { type: Boolean, default: false } })

const steps = [
  { title: 'We install, free', body: 'We bring the screen, mount it and set it up at no cost to you. No hardware to buy, no upfront fee.' },
  { title: 'It plays verified ads', body: 'The screen plays APCON vetted ads from the network, counting real viewers on device as proof of play.' },
  { title: 'You earn every Friday', body: 'You earn a share of every verified play, paid directly to your bank account each week.' },
  { title: 'We maintain it', body: 'Software updates, support and upkeep are handled by us. You just keep it powered on.' },
]

const benefits = [
  { name: 'Free installation', body: 'The screen and setup cost you nothing. No hardware purchase, no deposit.' },
  { name: 'Weekly payouts', body: 'Earnings from verified plays are paid to your bank account every Friday.' },
  { name: '20% free slot', body: 'A fifth of screen time is yours, for your own promotions, subject to content guidelines.' },
  { name: 'Verified only', body: 'Every creative is APCON vetted before it runs, so nothing off brand plays in your space.' },
  { name: 'Zero upkeep', body: 'We handle maintenance, updates and support. You keep the screen on during your hours.' },
]
</script>
