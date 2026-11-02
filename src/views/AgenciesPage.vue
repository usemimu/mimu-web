<template>
  <div class="page" :class="dark ? 'is-dark' : 'is-light'">
    <!-- ── HERO (rust) ──────────────────────────────────────────── -->
    <section class="hero" data-nav-over>
      <div class="hero-pattern" aria-hidden="true"></div>
      <div class="wrap">
        <div class="hero-grid">
          <div class="hero-copy">
            <p class="hero-eyebrow">For agencies, brands &amp; buying platforms</p>
            <h1 class="hero-head">
              The verified DOOH network,<br />in <em>one integration.</em>
            </h1>
            <p class="hero-sub">
              Activate Africa's screen network inside your buying workflow. Computer vision
              measured, APCON compliant, priced per verified view. Book direct, buy
              programmatically, or run it white label.
            </p>
            <div class="hero-ctas">
              <a :href="signupUrl('agencies')" class="btn-cream" data-ga-event="start_campaign" data-ga-label="agencies_hero">Get started</a>
              <a href="/#developers" class="btn-ghost">Read the docs</a>
            </div>
          </div>

          <div class="hero-viz" aria-hidden="true">
            <svg class="net" viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle class="ring" cx="230" cy="230" r="95" />
              <circle class="ring" cx="230" cy="230" r="175" />
              <g class="spokes">
                <line x1="230" y1="230" x2="230" y2="60" />
                <line x1="230" y1="230" x2="385" y2="150" />
                <line x1="230" y1="230" x2="395" y2="305" />
                <line x1="230" y1="230" x2="255" y2="405" />
                <line x1="230" y1="230" x2="95" y2="365" />
                <line x1="230" y1="230" x2="70" y2="200" />
                <line x1="230" y1="230" x2="150" y2="85" />
                <line x1="230" y1="230" x2="320" y2="230" />
                <line x1="230" y1="230" x2="165" y2="300" />
              </g>
              <g class="nodes">
                <circle cx="230" cy="60" r="5" />
                <circle cx="385" cy="150" r="5" />
                <circle cx="395" cy="305" r="5" />
                <circle cx="255" cy="405" r="5" />
                <circle cx="95" cy="365" r="5" />
                <circle cx="70" cy="200" r="5" />
                <circle cx="150" cy="85" r="5" />
                <circle cx="320" cy="230" r="4" />
                <circle cx="165" cy="300" r="4" />
              </g>
              <circle class="core-glow" cx="230" cy="230" r="26" />
              <circle class="core" cx="230" cy="230" r="9" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ML INTELLIGENCE + AGENTIC PLAYER ─────────────────────── -->
    <section class="section">
      <div class="wrap intel-grid">
        <div class="intel-copy">
          <div class="tag">Intelligence</div>
          <h2 class="section-headline">Agentic ML runs<br />the <em>network.</em></h2>
          <p class="section-sub">
            Every screen runs the Mimuads agentic player, an on device ML engine that targets
            the right campaign to each location, schedules plays, and verifies viewership with
            computer vision, in real time.
          </p>
          <ul class="intel-points">
            <li><i class="ph ph-target"></i><span><b>Smart targeting.</b> The right campaign for each locale and audience.</span></li>
            <li><i class="ph ph-sparkle"></i><span><b>Autonomous scheduling.</b> The player fills every slot, optimised continuously.</span></li>
            <li><i class="ph ph-eye"></i><span><b>On device verification.</b> Computer vision proof of play, counted on the screen.</span></li>
            <li><i class="ph ph-seal-check"></i><span><b>APCON built in.</b> Every creative vetted before it runs.</span></li>
          </ul>
        </div>

        <div class="intel-dl">
          <div class="player-card">
            <div class="player-top"><i class="ph ph-television-simple"></i> Mimuads agentic player</div>
            <p class="player-sub">The software that powers every screen on the network. Run it on an Android TV box or display.</p>
            <div class="player-btns">
              <a href="https://play.google.com/store/apps/details?id=ng.mimu.player" target="_blank" rel="noopener noreferrer" aria-label="Get the Mimuads player on Google Play">
                <img src="/hero/badge-google.svg" alt="Get it on Google Play" />
              </a>
              <a :href="PLAYER_APK_URL" download rel="noopener" class="btn-apk" data-ga-event="download_player" data-ga-label="agencies">
                <i class="ph ph-download-simple"></i> Download APK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── THREE WAYS TO PLUG IN (futuristic, dark) ─────────────── -->
    <section class="section plug">
      <div class="plug-bg" aria-hidden="true"></div>
      <div class="wrap">
        <div class="plug-header">
          <div class="tag plug-tag">Integration</div>
          <h2 class="plug-title">Three ways to <em>plug in.</em></h2>
          <p class="plug-sub">One verified network. Pick how you buy it.</p>
        </div>

        <div class="plug-grid">
          <div v-for="m in models" :key="m.num" class="plug-card">
            <div class="plug-top">
              <span class="plug-num">{{ m.num }}</span>
            </div>
            <h3 class="plug-card-title">{{ m.title }}</h3>
            <p class="plug-card-body">{{ m.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ──────────────────────────────────────────────────── -->
    <section id="faq" class="section section-alt">
      <div class="wrap faq-grid">
        <div class="faq-intro">
          <div class="tag">FAQ</div>
          <h2 class="section-headline">Agency<br /><em>questions.</em></h2>
          <p class="faq-intro-sub">How agencies, brands and buying platforms activate the network.</p>
          <a href="mailto:hello@usemimu.com" class="faq-contact">
            Talk to our team <span>hello@usemimu.com&nbsp;→</span>
          </a>
        </div>

        <div class="faq-list">
          <div
            v-for="(item, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ 'faq-open': item.open }"
          >
            <button class="faq-q" :aria-expanded="item.open" @click="item.open = !item.open">
              <span class="faq-qtext">{{ item.q }}</span>
              <span class="faq-icon"><i class="ph" :class="item.open ? 'ph-minus' : 'ph-plus'"></i></span>
            </button>
            <div class="faq-a">
              <div class="faq-a-inner"><p>{{ item.a }}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { signupUrl, PLAYER_APK_URL } from '../links.js'

defineProps({ dark: { type: Boolean, default: false } })

const models = [
  {
    num: '01',
    title: 'Direct booking',
    body: 'Book campaigns across the whole verified network for your clients from the Mimuads dashboard, with volume rates on larger campaigns and client-ready reporting.',
  },
  {
    num: '02',
    title: 'Programmatic API',
    body: 'Activate our inventory via a supply side API, alongside your digital campaigns, and buy against verified impressions.',
  },
  {
    num: '03',
    title: 'White label',
    body: 'Run the network under your own brand: player software, AI targeting and computer vision verification.',
  },
]

const faqs = reactive([
  {
    q: 'Can agencies buy across the whole network?',
    a: 'Yes. You book across the entire verified network on behalf of clients today, with volume rates on larger campaigns.',
    open: true,
  },
  {
    q: 'How is viewership measured?',
    a: 'Every screen runs an on device computer vision model that counts real viewers anonymously. You buy against verified proof of play, not estimates.',
    open: false,
  },
  {
    q: 'What reporting do I get?',
    a: 'Verified impressions, reach by LGA and peak-time performance, in a client-ready format your finance team can sign off on.',
    open: false,
  },
  {
    q: 'Can I buy programmatically?',
    a: "It's in early access. A supply side API lets agencies and DSPs activate our inventory programmatically, alongside digital. Email hello@usemimu.com to join.",
    open: false,
  },
  {
    q: 'Can I run it white label?',
    a: "That's on our roadmap. License the full stack (player software, AI targeting and verification) and run a DOOH network under your own brand.",
    open: false,
  },
  {
    q: 'Is every creative APCON compliant?',
    a: 'Yes. Every creative is vetted for APCON compliance before it goes live, built into the platform.',
    open: false,
  },
])
</script>

<style scoped>
/* ── Layout + theme tokens ──────────────────────────────────── */
.page { width: 100%; }
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: clamp(20px, 5vw, 48px);
  padding-right: clamp(20px, 5vw, 48px);
}
.is-light {
  --text-primary: #0e0d0b;
  --text-secondary: #5e574f;
  --text-muted: #a89f94;
  --card-bg: #ffffff;
  --card-border: rgba(0, 0, 0, 0.08);
  --section-alt-bg: #faf4f0;
  --divider: rgba(0, 0, 0, 0.08);
  color: #0e0d0b;
}
.is-dark {
  --text-primary: #f4ede4;
  --text-secondary: #a89f94;
  --text-muted: #5e574f;
  --card-bg: #1c1a17;
  --card-border: rgba(255, 255, 255, 0.08);
  --section-alt-bg: #161410;
  --divider: rgba(255, 255, 255, 0.07);
  color: #f4ede4;
}

/* ── Shared section typography ──────────────────────────────── */
.tag {
  display: inline-block;
  font-family: 'Space Grotesk', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 18px;
}
.section { padding: clamp(72px, 10vw, 112px) 0; }
.section-alt {
  background: var(--section-alt-bg);
  border-top: 1px solid var(--divider);
}
.section-headline {
  font-family: 'Space Grotesk', Georgia, serif;
  font-weight: 400;
  font-size: clamp(34px, 5vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0;
}
.section-headline em { font-style: italic; color: #b55430; }
.section-sub {
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 460px;
  margin: 18px 0 0;
}

/* ── Hero (rust) ────────────────────────────────────────────── */
.hero {
  position: relative;
  overflow: hidden;
  background: #ae4828;
  padding: clamp(136px, 16vw, 180px) 0 clamp(56px, 7vw, 84px);
}
.hero-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: #bc3433;
  -webkit-mask-image: url('/hero/pattern.png');
  mask-image: url('/hero/pattern.png');
  -webkit-mask-size: 1000px;
  mask-size: 1000px;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  mix-blend-mode: multiply;
  opacity: 0.7;
}
.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 5vw, 56px);
  align-items: center;
}
@media (min-width: 940px) { .hero-grid { grid-template-columns: 1.12fr 0.88fr; } }
.hero-eyebrow {
  font-family: 'Space Grotesk', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 20px;
}
.hero-head {
  font-family: 'Space Grotesk', Georgia, serif;
  font-weight: 400;
  font-size: clamp(40px, 5.6vw, 70px);
  line-height: 1.03;
  letter-spacing: -0.04em;
  color: #fff;
  margin: 0;
}
.hero-head em { font-style: italic; color: #eac9a9; }
.hero-sub {
  font-size: clamp(16px, 1.6vw, 19px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.88);
  max-width: 560px;
  margin: 24px 0 0;
}
.hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 36px; }
.btn-cream {
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  background: #fdf7f1;
  color: #ae4828;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.btn-cream:hover { opacity: 0.88; }
.btn-ghost {
  display: inline-flex;
  align-items: center;
  height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.btn-ghost:hover { background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.6); }

/* hero network constellation */
.hero-viz { display: none; }
@media (min-width: 940px) { .hero-viz { display: block; } }
.net { width: 100%; max-width: 440px; height: auto; margin: 0 auto; display: block; overflow: visible; }
.net .ring { stroke: rgba(253, 247, 241, 0.16); stroke-width: 1; stroke-dasharray: 2 8; fill: none; }
.net .spokes line { stroke: rgba(253, 247, 241, 0.22); stroke-width: 1; stroke-dasharray: 3 7; animation: netflow 3s linear infinite; }
.net .nodes circle { fill: #fdf7f1; animation: twinkle 3s ease-in-out infinite; }
.net .nodes circle:nth-child(2n) { animation-delay: 0.6s; }
.net .nodes circle:nth-child(3n) { animation-delay: 1.2s; }
.net .core { fill: #fff; }
.net .core-glow { fill: #fdf7f1; transform-box: fill-box; transform-origin: center; animation: coreglow 2.6s ease-in-out infinite; }
@keyframes netflow { to { stroke-dashoffset: -20; } }
@keyframes twinkle { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
@keyframes coreglow { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.35); } }

/* ── Intelligence + agentic player ──────────────────────────── */
.intel-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(36px, 5vw, 56px);
  align-items: center;
}
@media (min-width: 940px) { .intel-grid { grid-template-columns: 1.05fr 0.95fr; } }
.intel-points {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.intel-points li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--text-secondary);
}
.intel-points li i {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  margin-top: 1px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: rgba(181, 84, 48, 0.1);
  color: #b55430;
  font-size: 15px;
}
.intel-points b { color: var(--text-primary); font-weight: 600; }

.player-card {
  background: #1b1915;
  color: #f4ede4;
  border-radius: 22px;
  padding: clamp(28px, 3vw, 36px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 30px 70px -30px rgba(27, 16, 8, 0.6);
}
.player-top {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: #fff;
}
.player-top i { color: #e08a5c; font-size: 20px; }
.player-sub {
  margin: 14px 0 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(244, 237, 228, 0.6);
  max-width: 320px;
}
.player-btns { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 24px; }
.player-btns img { height: 48px; width: auto; display: block; }
.btn-apk {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #f4ede4;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.btn-apk i { font-size: 17px; }
.btn-apk:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.4); }

/* ── Three ways to plug in (dark, futuristic) ───────────────── */
.plug {
  position: relative;
  overflow: hidden;
  background: #15120e;
}
.plug-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: #f4ede4;
  -webkit-mask-image: url('/hero/pattern.png');
  mask-image: url('/hero/pattern.png');
  -webkit-mask-size: 620px;
  mask-size: 620px;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  opacity: 0.04;
}
.plug-header { position: relative; margin-bottom: clamp(40px, 6vw, 60px); max-width: 640px; }
.plug-tag { color: #d9754a; }
.plug-title {
  font-family: 'Space Grotesk', Georgia, serif;
  font-weight: 400;
  font-size: clamp(32px, 5vw, 54px);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #f7f1ea;
  margin: 0;
}
.plug-title em { font-style: italic; color: #d9754a; }
.plug-sub {
  margin: 16px 0 0;
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.6;
  color: rgba(244, 237, 228, 0.6);
}
.plug-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
}
@media (min-width: 820px) { .plug-grid { grid-template-columns: repeat(3, 1fr); gap: 22px; } }
.plug-card {
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  padding: clamp(26px, 3vw, 34px);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.plug-card:hover {
  border-color: rgba(217, 117, 74, 0.5);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 28px 60px -26px rgba(217, 117, 74, 0.35);
}
.plug-top { display: flex; align-items: center; }
.plug-num {
  font-family: 'Space Grotesk', Georgia, serif;
  font-size: 26px;
  letter-spacing: -0.02em;
  color: #d9754a;
}
.plug-card-title {
  font-family: 'Space Grotesk', Georgia, serif;
  font-weight: 400;
  font-size: clamp(22px, 2.6vw, 28px);
  letter-spacing: -0.02em;
  color: #f7f1ea;
  margin: 18px 0 0;
}
.plug-card-body {
  margin: 12px 0 0;
  font-size: 14.5px;
  line-height: 1.6;
  color: rgba(244, 237, 228, 0.62);
}

/* ── FAQ ────────────────────────────────────────────────────── */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}
@media (min-width: 900px) {
  .faq-grid { grid-template-columns: 0.82fr 1.18fr; }
  .faq-intro { position: sticky; top: 104px; }
}
.faq-intro-sub {
  margin-top: 16px;
  font-size: clamp(15px, 1.4vw, 16px);
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 320px;
}
.faq-contact {
  display: inline-block;
  margin-top: 28px;
  font-size: 14px;
  color: var(--text-secondary);
  text-decoration: none;
}
.faq-contact span { color: #b55430; font-weight: 600; }
.faq-contact:hover span { opacity: 0.8; }

.faq-list { display: flex; flex-direction: column; gap: 12px; }
.faq-item {
  border: 1px solid var(--card-border);
  border-radius: 16px;
  background: var(--card-bg);
  transition: border-color 0.18s ease, box-shadow 0.18s ease;
}
.faq-item:hover { border-color: rgba(181, 84, 48, 0.35); }
.faq-open {
  border-color: rgba(181, 84, 48, 0.5);
  box-shadow: 0 12px 32px -14px rgba(181, 84, 48, 0.3);
}
.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 19px 22px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
.faq-qtext {
  font-family: 'Inter', sans-serif;
  font-size: 15.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.4;
  color: var(--text-primary);
  transition: color 0.15s ease;
}
.faq-open .faq-qtext { color: #b55430; }
.faq-icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(181, 84, 48, 0.1);
  color: #b55430;
  font-size: 15px;
  transition: background 0.18s ease, color 0.18s ease;
}
.faq-open .faq-icon { background: #b55430; color: #fff; }
.faq-a {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.faq-open .faq-a { grid-template-rows: 1fr; }
.faq-a-inner { overflow: hidden; }
.faq-a-inner p {
  padding: 0 22px 20px;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

@media (prefers-reduced-motion: reduce) {
  .net .spokes line, .net .nodes circle, .net .core-glow { animation: none; }
}
</style>
