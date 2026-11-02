<template>
  <div class="page" :class="dark ? 'is-dark' : 'is-light'">
    <!-- ── HERO (from the LinkedIn banner) ──────────────────────── -->
    <section class="hero" data-nav-over>
      <div class="hero-pattern" aria-hidden="true"></div>

      <!-- Flying-plane sky: plane streaks across the top, wave trails + a few clouds -->
      <div class="hero-sky" aria-hidden="true">
        <img src="/hero/cloud4.png" class="hs-cloud" style="left: 5%; top: 15%; width: 15%; animation-delay: -3s" />
        <img src="/hero/cloud3.png" class="hs-cloud" style="right: 6%; top: 19%; width: 14%; animation-delay: -6s" />
        <img src="/hero/cloud1.png" class="hs-cloud" style="left: 11%; top: 72%; width: 14%; opacity: 0.85; animation-delay: -2s" />
        <img src="/hero/arrow7.svg" class="hs-wave" style="left: 13%; top: 7%; width: 24%; animation-delay: -4s" />
        <img src="/hero/arrow8.svg" class="hs-wave" style="right: 18%; top: 9%; width: 20%; animation-delay: -1s" />
        <img ref="planeEl" src="/hero/plane.png" class="hs-plane" style="width: 15%" />
      </div>

      <div class="wrap hero-center">
        <h1 class="hero-head">
          The infrastructure layer for <em>physical ad&nbsp;buying</em>.
        </h1>
        <p class="hero-sub">Every DOOH screen, verified and programmatic.</p>

        <div class="hero-cta">
          <!-- SMBs download the app -->
          <div class="hero-dl">
            <span class="hero-dl-label">For SMBs</span>
            <div class="hero-badges">
              <a
                href="https://apps.apple.com/app/mimuads/id6775953486"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <img
                  src="/hero/badge-apple.svg"
                  alt="Download on the App Store"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=ng.mimu.advertiser"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <img src="/hero/badge-google.svg" alt="Get it on Google Play" />
              </a>
            </div>
          </div>

          <div class="hero-cta-sep" aria-hidden="true"></div>

          <!-- Startups, businesses & FMCG go to the web console -->
          <div class="hero-dl">
            <span class="hero-dl-label">For Startups, Businesses &amp; FMCG</span>
            <a
              :href="signupUrl('hero')"
              class="hero-get-started"
              data-ga-event="start_campaign"
              data-ga-label="hero"
            >
              Get started<i class="ph ph-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INFRASTRUCTURE REFRAME (scattered → connected network) ─ -->
    <section class="section reframe">
      <div class="reframe-bg" aria-hidden="true"></div>
      <div class="wrap reframe-inner">
        <div class="reframe-head">
          <div class="tag reframe-tag">The problem</div>
          <h2 class="reframe-title">
            Africa has the screens.<br />It's missing the <em>infrastructure.</em>
          </h2>
          <p class="reframe-sub">
            Physical advertising runs on phone calls, guesswork and photos as proof. We wire
            that scattered supply into one programmable network anyone can buy, measure and verify.
          </p>
        </div>

        <div class="reframe-viz">
          <svg class="reframe-net" viewBox="0 0 900 360" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g class="spokes">
              <line class="spoke" x1="680" y1="180" x2="540" y2="90" />
              <line class="spoke" x1="680" y1="180" x2="520" y2="280" />
              <line class="spoke" x1="680" y1="180" x2="630" y2="60" />
              <line class="spoke" x1="680" y1="180" x2="650" y2="310" />
              <line class="spoke" x1="680" y1="180" x2="820" y2="110" />
              <line class="spoke" x1="680" y1="180" x2="850" y2="250" />
              <line class="spoke" x1="680" y1="180" x2="760" y2="310" />
              <line class="spoke" x1="680" y1="180" x2="560" y2="180" />
              <line class="spoke" x1="680" y1="180" x2="840" y2="170" />
              <line class="spoke" x1="540" y1="90" x2="630" y2="60" />
              <line class="spoke" x1="820" y1="110" x2="840" y2="170" />
              <line class="spoke" x1="520" y1="280" x2="650" y2="310" />
            </g>
            <g class="scatter">
              <circle cx="40" cy="70" r="3" />
              <circle cx="90" cy="185" r="3" />
              <circle cx="60" cy="300" r="3" />
              <circle cx="150" cy="115" r="3" />
              <circle cx="205" cy="255" r="3" />
              <circle cx="120" cy="330" r="3" />
              <circle cx="265" cy="160" r="3" />
              <circle cx="235" cy="305" r="3" />
              <circle cx="310" cy="225" r="3" />
            </g>
            <g class="nodes">
              <circle class="n-dot" cx="540" cy="90" r="4" />
              <circle class="n-dot" cx="520" cy="280" r="4" />
              <circle class="n-dot" cx="630" cy="60" r="4" />
              <circle class="n-dot" cx="650" cy="310" r="4" />
              <circle class="n-dot" cx="820" cy="110" r="4" />
              <circle class="n-dot" cx="850" cy="250" r="4" />
              <circle class="n-dot" cx="760" cy="310" r="4" />
              <circle class="n-dot" cx="560" cy="180" r="4" />
              <circle class="n-dot" cx="840" cy="170" r="4" />
            </g>
            <circle class="n-glow" cx="680" cy="180" r="18" />
            <circle class="n-core" cx="680" cy="180" r="7" />
          </svg>
          <div class="reframe-labels">
            <span class="lbl-left">Scattered supply</span>
            <span class="lbl-right">One connected network</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ────────────────────────────────────────────────── -->
    <section id="faq" class="section">
      <div class="wrap faq-grid">
        <!-- Intro -->
        <div class="faq-intro">
          <div class="tag">FAQ</div>
          <h2 class="section-headline">Questions<br /><em>&amp; answers.</em></h2>
          <p class="faq-intro-sub">
            Everything about buying, hosting, verification and compliance on Mimuads.
          </p>
          <a href="mailto:hello@usemimu.com" class="faq-contact">
            Still have a question? <span>hello@usemimu.com&nbsp;→</span>
          </a>
        </div>

        <!-- Accordion -->
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
import { reactive, ref, onMounted, onBeforeUnmount } from "vue";
import { signupUrl } from "../links.js";

defineProps({
  dark: { type: Boolean, default: false },
});


/* ── Hero plane flight — JS-driven straight diagonal: in from the bottom-left,
   slows at the centre, out the top-right, nose-first. Path, exit height, speed
   and the gap between passes are re-randomised each time. ── */
const planeEl = ref(null)
let planeTimer = null
let planeAnim = null
let planeDead = false
const rnd = (a, b) => a + Math.random() * (b - a)

function flyPlane() {
  const el = planeEl.value
  if (!el || planeDead) return
  const vw = window.innerWidth || 1440
  const vh = window.innerHeight || 820
  // Straight diagonal: in from the bottom-left, slow at the centre, out the top-right.
  const sx = -0.25 * vw, sy = rnd(1.02, 1.22) * vh // off-screen bottom-left
  const ex = rnd(1.16, 1.3) * vw, ey = -0.25 * vh  // off-screen top-right
  const mx = (sx + ex) / 2, my = (sy + ey) / 2     // midpoint ≈ centre → the slow point
  // Nose points up-right by default; align it to the BL→TR heading (front-first both ways).
  const rotZ = (Math.atan2(ey - sy, ex - sx) * 180) / Math.PI + 45
  const dur = rnd(3800, 5200)

  planeAnim = el.animate(
    [
      { offset: 0,   transform: `translate(${sx}px, ${sy}px) rotate(${rotZ}deg)`, easing: 'cubic-bezier(0.2, 0.7, 0.35, 1)' }, // rush in → decelerate to centre
      { offset: 0.5, transform: `translate(${mx}px, ${my}px) rotate(${rotZ}deg)`, easing: 'cubic-bezier(0.6, 0, 0.8, 0.35)' },  // slow at centre → accelerate out
      { offset: 1,   transform: `translate(${ex}px, ${ey}px) rotate(${rotZ}deg)` },                                             // off the top-right
    ],
    { duration: dur, fill: 'forwards' },
  )
  planeAnim.onfinish = () => {
    if (planeDead) return
    planeTimer = setTimeout(flyPlane, rnd(300, 1500)) // unpredictable gap before the next pass
  }
}

onMounted(() => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reduce) return
  planeTimer = setTimeout(flyPlane, 250)
})
onBeforeUnmount(() => {
  planeDead = true
  clearTimeout(planeTimer)
  planeAnim?.cancel()
})

const faqs = reactive([
  {
    q: "What is Mimuads?",
    a: "Mimuads is the infrastructure for physical advertising. We connect screens in real world places (pharmacies, eateries, salons) into one network that anyone can buy, measure and verify, the same way you buy digital ads today.",
    open: true,
  },
  {
    q: "Why does physical advertising need infrastructure?",
    a: "Because today it runs on phone calls, guesswork and photos as proof. Every screen is owned by someone different, priced differently and measured by no one. We turn that scattered supply into one system with live inventory, standard pricing and verified results.",
    open: false,
  },
  {
    q: "How do you know someone actually saw my ad?",
    a: "Each screen runs an AI model on the device itself that counts real viewers anonymously. No images or camera data ever leave the screen. You pay for verified views, not estimates.",
    open: false,
  },
  {
    q: "Is this surveillance?",
    a: "No. The screen counts people the way a turnstile does. It doesn't identify anyone, store faces or send footage anywhere. Counting happens on the device and only the numbers leave it, in line with NDPR.",
    open: false,
  },
  {
    q: "Can I buy Mimuads inventory from my own ad platform?",
    a: "Soon. We're building a supply side API so agencies and demand side platforms can buy our screens programmatically, alongside their digital campaigns. It's in early access now. Email hello@usemimu.com to join.",
    open: false,
  },
  {
    q: "Can I run my own screen network on Mimuads?",
    a: "That's on our roadmap. White label lets you license the full stack (player software, AI targeting and verification) and run a screen network under your own brand.",
    open: false,
  },
  {
    q: "Is it only Lagos?",
    a: "For now, across 18 Lagos LGAs. The network is built to expand to any city with screens and foot traffic, and we'll grow it city by city.",
    open: false,
  },
  {
    q: "What happens to compliance?",
    a: "It's built in. Every creative is checked for APCON compliance before it goes live, so you never handle that process separately.",
    open: false,
  },
  {
    q: "How fast can I go live?",
    a: "Within 24 hours. Upload your creative, pick your screens, and your ad runs the next day.",
    open: false,
  },
  {
    q: "Can my business host a screen?",
    a: "Yes, if your space has steady foot traffic. We install the screen at no cost, handle maintenance, and pay you every Friday.",
    open: false,
  },
]);
</script>

<style scoped>
/* ── Layout tokens ──────────────────────────────────────────── */
.wrap {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(20px, 5vw, 48px);
  padding-right: clamp(20px, 5vw, 48px);
}

.page {
  width: 100%;
}

/* ── Theme tokens ───────────────────────────────────────────── */
.is-light {
  --text-primary: #0e0d0b;
  --text-secondary: #5e574f;
  --text-muted: #a89f94;
  --card-bg: #ffffff;
  --card-border: rgba(0, 0, 0, 0.07);
  --section-alt-bg: #fbf4f0;
  --strip-bg: #f0ebe6;
  --divider: rgba(0, 0, 0, 0.08);
  color: #0e0d0b;
}
.is-dark {
  --text-primary: #f4ede4;
  --text-secondary: #a89f94;
  --text-muted: #5e574f;
  --card-bg: #1c1a17;
  --card-border: rgba(255, 255, 255, 0.07);
  --section-alt-bg: #161410;
  --strip-bg: #1c1a17;
  --divider: rgba(255, 255, 255, 0.07);
  color: #f4ede4;
}

/* ── Shared section typography ──────────────────────────────── */
.tag {
  display: inline-block;
  font-family: 'Plus Jakarta Sans', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 20px;
}

.section-headline {
  font-family: 'Plus Jakarta Sans', Georgia, serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0 0 20px;
}
.section-headline em {
  font-style: italic;
  color: #b55430;
}

.section-sub {
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 540px;
  margin: 0;
}

.section-header {
  margin-bottom: clamp(40px, 6vw, 64px);
}

.section-cta {
  margin-top: clamp(36px, 5vw, 56px);
  display: flex;
}
.section-cta-row {
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

/* ── HERO ───────────────────────────────────────────────────── */
.hero {
  position: relative;
  overflow: hidden;
  background: #ae4828;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: clamp(118px, 15vw, 150px) 0 clamp(80px, 9vw, 120px);
}
.hero-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* Tall Poppy waves via PNG mask over a colour fill. Multiply lets the Tall
     Poppy hue read, since it sits very close to the rust tone. */
  background-color: #bc3433; /* Tall Poppy */
  -webkit-mask-image: url("/hero/pattern.png");
  mask-image: url("/hero/pattern.png");
  -webkit-mask-size: 520px;
  mask-size: 520px;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  mix-blend-mode: multiply;
  opacity: 0.7;
}
.hero-center {
  position: relative;
  z-index: 2;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-head {
  font-family: 'Plus Jakarta Sans', Georgia, serif;
  font-weight: 400;
  font-size: clamp(44px, 6.4vw, 82px);
  line-height: 1.01;
  letter-spacing: -0.04em;
  color: #ffffff;
  margin: 0 0 22px;
}
.hero-head em {
  font-style: normal;
  color: #ffffff;
}

.hero-sub {
  font-size: clamp(16px, 1.7vw, 20px);
  line-height: 1.5;
  color: #ffffff;
  margin: 0 0 38px;
  max-width: 460px;
}

/* Two audience-segmented paths: SMBs download the app, everyone else (startups,
   businesses, FMCG) starts on the web console. */
.hero-cta {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}
.hero-cta-sep {
  align-self: stretch;
  width: 1px;
  background: rgba(255, 255, 255, 0.22);
  margin: 2px 0;
}
.hero-dl {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.hero-dl-label {
  font-size: 11.5px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ffffff;
}
.hero-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.hero-badges img {
  height: 48px;
  width: auto;
  display: block;
}
.hero-get-started {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 48px;
  padding: 0 26px;
  border-radius: 999px;
  background: #fdf7f1;
  color: #ae4828;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.hero-get-started:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
.hero-get-started .ph {
  font-size: 16px;
}
@media (max-width: 560px) {
  .hero-cta {
    gap: 22px;
  }
  .hero-cta-sep {
    display: none;
  }
}

/* ── Hero flying-plane sky (behind the headline) ────────────── */
.hero-sky {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
}
.hero-sky img { position: absolute; }
.hs-cloud { animation: hs-drift 12s ease-in-out infinite; }
.hs-wave { opacity: 0.85; animation: hs-drift 10s ease-in-out infinite; }
.hs-plane {
  left: 0;
  top: 0;
  filter: drop-shadow(0 14px 22px rgba(42, 14, 5, 0.35));
  transform: translate(-30vw, 75vh); /* parked off-screen until JS flies it */
  will-change: transform;
}
@keyframes hs-drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-9px); }
}
@media (prefers-reduced-motion: reduce) {
  .hs-cloud, .hs-wave { animation: none; }
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(48px, 7vw, 80px);
  align-items: center;
}
@media (min-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr 1fr;
  }
}

.eyebrow {
  font-family: 'Plus Jakarta Sans', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 20px;
}

.hero-headline {
  font-family: 'Plus Jakarta Sans', Georgia, serif;
  font-weight: 400;
  font-size: clamp(52px, 8vw, 88px);
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0 0 24px;
  color: var(--text-primary);
}
.hero-headline em {
  font-style: italic;
  color: #b55430;
}

/* Rotating hero word — typewriter, clay-coloured with a blinking caret. */
/* Keep "Your {word}." together so a growing word never wraps mid-type. */
.headline-lead {
  white-space: nowrap;
}
.rotator {
  display: inline-block;
  color: #b55430;
}
.caret {
  display: inline-block;
  width: 0.06em;
  height: 0.85em;
  margin-left: 0.04em;
  background: currentColor;
  vertical-align: baseline;
  transform: translateY(0.1em);
  animation: caretBlink 1s steps(1) infinite;
}
@keyframes caretBlink {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .caret {
    animation: none;
    opacity: 0;
  }
}

/* (old hero-sub rule removed — superseded by the new hero styles above) */

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

/* ── SECTIONS ───────────────────────────────────────────────── */
.section {
  padding: clamp(72px, 10vw, 112px) 0;
}
.section-alt {
  background: var(--section-alt-bg);
  border-top: 1px solid var(--divider);
  border-bottom: 1px solid var(--divider);
}

/* ── Infrastructure reframe (network constellation) ─────────── */
.reframe {
  position: relative;
  overflow: hidden;
  background: #15120e;
}
.reframe-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-color: #f4ede4;
  -webkit-mask-image: url("/hero/pattern.png");
  mask-image: url("/hero/pattern.png");
  -webkit-mask-size: 620px;
  mask-size: 620px;
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  opacity: 0.04;
}
.reframe-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(36px, 5vw, 56px);
  align-items: center;
}
@media (min-width: 980px) {
  .reframe-inner { grid-template-columns: 0.82fr 1.18fr; }
}
.reframe-tag { color: #d9754a; }
.reframe-title {
  font-family: 'Plus Jakarta Sans', Georgia, serif;
  font-weight: 400;
  font-size: clamp(34px, 5vw, 58px);
  line-height: 1.04;
  letter-spacing: -0.03em;
  color: #f7f1ea;
  margin: 0;
}
.reframe-title em { font-style: italic; color: #d9754a; }
.reframe-sub {
  margin-top: 20px;
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.65;
  color: rgba(244, 237, 228, 0.68);
  max-width: 420px;
}
.reframe-viz { position: relative; }
.reframe-net { width: 100%; height: auto; display: block; overflow: visible; }
.reframe-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 4px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.lbl-left { color: rgba(244, 237, 228, 0.38); }
.lbl-right { color: #ebb79c; }

/* constellation */
.spoke {
  stroke: #cf8b6a;
  stroke-width: 1;
  opacity: 0.45;
  stroke-dasharray: 3 7;
  animation: netflow 2.8s linear infinite;
}
@keyframes netflow { to { stroke-dashoffset: -20; } }
.scatter circle { fill: #f4ede4; opacity: 0.28; }
.nodes .n-dot { fill: #ebb79c; animation: twinkle 3s ease-in-out infinite; }
.nodes .n-dot:nth-child(2n) { animation-delay: 0.7s; }
.nodes .n-dot:nth-child(3n) { animation-delay: 1.3s; }
@keyframes twinkle { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
.n-core { fill: #e07a4d; }
.n-glow {
  fill: #b55430;
  transform-box: fill-box;
  transform-origin: center;
  animation: netglow 2.8s ease-in-out infinite;
}
@keyframes netglow {
  0%, 100% { opacity: 0.16; transform: scale(1); }
  50% { opacity: 0.34; transform: scale(1.3); }
}
@media (prefers-reduced-motion: reduce) {
  .spoke, .nodes .n-dot, .n-glow { animation: none; }
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

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
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

/* Smooth auto-height reveal (grid-rows 0fr → 1fr) */
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

</style>
