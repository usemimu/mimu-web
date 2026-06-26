<template>
  <div class="page" :class="dark ? 'is-dark' : 'is-light'">

    <!-- ── HERO ─────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner wrap">

        <div class="hero-text">
          <div class="eyebrow">AI-Powered · Digital Out-of-Home · Global</div>
          <h1 class="hero-headline">
            Your brand.<br>On digital screens<br>where your <em>audience is.</em>
          </h1>
          <p class="hero-sub">
            The first AI-native outdoor ad platform in Africa. Launch campaigns yourself —
            no agency needed. AI handles targeting, compliance, and viewership verification automatically.
          </p>
          <div class="hero-ctas">
            <a href="mailto:hello@usemimu.com" class="btn-primary">Start a Campaign</a>
            <a href="#how-it-works" class="btn-ghost">See how it works ↓</a>
          </div>

          <div class="store-row">
            <a href="https://apps.apple.com/app/mimuads/id6775953486" target="_blank" rel="noopener noreferrer" class="store-badge-link" aria-label="Download on the App Store">
              <img src="/apple-badge.svg" alt="Download on the App Store" class="store-badge-img" />
            </a>
            <div class="store-badge-wrap">
              <a href="#" class="store-badge-link" aria-label="Get it on Google Play">
                <img src="/google-badge.svg" alt="Get it on Google Play" class="store-badge-img" />
              </a>
              <span class="coming-soon-badge">Coming soon</span>
            </div>
          </div>
        </div>

        <!-- Simulated DOOH screen -->
        <div class="hero-screen" role="figure" aria-label="A simulated Mimuads screen playing the house reel">
          <div class="bezel">
            <div class="indicator" aria-hidden="true">
              <span class="dot"></span>
              <span class="dot-label">LIVE · LAGOS</span>
            </div>
            <div class="canvas">
              <video
                class="reel"
                :src="reelSrc"
                autoplay muted loop playsinline preload="auto"
                aria-hidden="true"
              ></video>
            </div>
          </div>
          <p class="screen-caption">An ad. On a screen. In a shop. <em>Where the customer already is.</em></p>
        </div>

      </div>
    </section>

    <!-- ── TRUST STRIP ──────────────────────────────────────────── -->
    <div class="trust-strip">
      <div class="wrap trust-inner">
        <div v-for="stat in stats" :key="stat.value" class="trust-item">
          <span class="trust-value">{{ stat.value }}</span>
          <span class="trust-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>

    <!-- ── AI SELF-SERVE ──────────────────────────────────────── -->
    <section id="ai-platform" class="section section-alt">
      <div class="wrap">
        <div class="ai-layout">

          <!-- Text side -->
          <div class="ai-text">
            <div class="tag">AI Self-Serve Platform</div>
            <h2 class="section-headline">
              Campaign intelligence,<br><em>built in.</em>
            </h2>
            <p class="section-sub">
              Mimuads is not an ad agency — it's an AI platform. Launch,
              optimize and measure your campaign from your phone, in minutes.
              The AI handles everything a media buyer would charge you for.
            </p>
            <ul class="ai-features">
              <li v-for="f in aiFeatures" :key="f.title" class="ai-feature">
                <i :class="`ph ${f.icon} ai-feature-icon`"></i>
                <div>
                  <div class="ai-feature-title">{{ f.title }}</div>
                  <div class="ai-feature-body">{{ f.body }}</div>
                </div>
              </li>
            </ul>
            <a href="mailto:hello@usemimu.com" class="btn-primary mt-cta">
              Launch a Campaign with AI →
            </a>
          </div>

          <!-- AI dashboard mockup -->
          <div class="ai-card" :class="dark ? 'ai-card-dark' : 'ai-card-light'">
            <div class="ai-card-header">
              <span class="ai-card-title">Mimuads AI</span>
              <span class="ai-status">
                <span class="ai-dot"></span>Active
              </span>
            </div>

            <div class="ai-metric-row">
              <div class="ai-metric">
                <div class="ai-metric-val">3,247</div>
                <div class="ai-metric-lbl">Screens Live</div>
              </div>
              <div class="ai-metric">
                <div class="ai-metric-val">30.2M</div>
                <div class="ai-metric-lbl">Verified Views Today</div>
              </div>
              <div class="ai-metric">
                <div class="ai-metric-val">98<span class="ai-metric-unit">/100</span></div>
                <div class="ai-metric-lbl">AI Score</div>
              </div>
            </div>

            <div class="ai-bar-wrap">
              <div class="ai-bar-label">
                <span>Campaign performance</span>
                <span class="text-clay-500">97%</span>
              </div>
              <div class="ai-bar-track">
                <div class="ai-bar-fill" style="width:97%"></div>
              </div>
            </div>

            <div class="ai-log">
              <div v-for="log in aiLogs" :key="log.time" class="ai-log-row">
                <span class="ai-log-time">{{ log.time }}</span>
                <span class="ai-log-msg">{{ log.msg }}</span>
              </div>
            </div>

            <div class="ai-footer-row">
              <span class="ai-optimizing">
                <span class="ai-dot ai-dot-sm"></span>
                AI optimizing…
              </span>
              <span class="ai-cost">₦0.12 <span class="ai-cost-lbl">/ verified view</span></span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── FOR ADVERTISERS ─────────────────────────────────────── -->
    <section id="advertisers" class="section">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">For Advertisers</div>
          <h2 class="section-headline">
            Reach customers<br>where <em>they already are.</em>
          </h2>
          <p class="section-sub">
            Your audience is in their neighbourhood right now. Put your brand
            on the screens they walk past every single day.
          </p>
        </div>

        <div class="feature-grid">
          <div v-for="f in advertiserFeatures" :key="f.title" class="feature-card">
            <i :class="`ph ${f.icon}`" class="feature-icon"></i>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-body">{{ f.body }}</p>
          </div>
        </div>

        <div class="section-cta">
          <a href="mailto:hello@usemimu.com" class="btn-primary">Start a Campaign →</a>
        </div>
      </div>
    </section>

    <!-- ── FOR HOSTS ───────────────────────────────────────────── -->
    <section id="hosts" class="section section-alt">
      <div class="wrap">
        <div class="hosts-layout">

          <div class="hosts-text">
            <div class="tag">For Hosts</div>
            <h2 class="section-headline">
              Your walls already work.<br>Now let them <em>earn.</em>
            </h2>
            <p class="section-sub">
              We place a screen, brands pay to reach your customers, and you earn every month — zero effort, zero running costs on your end.
            </p>
            <ul class="host-benefits">
              <li v-for="b in hostBenefits" :key="b">
                <i class="ph ph-check-circle benefit-check"></i>
                <span>{{ b }}</span>
              </li>
            </ul>
            <a href="https://host.usemimu.com" target="_blank" rel="noopener noreferrer" class="btn-primary mt-cta">Apply to Host →</a>
          </div>

          <div class="host-stats">
            <div v-for="s in hostStatCards" :key="s.value" class="host-stat-card">
              <div class="host-stat-value">{{ s.value }}</div>
              <div class="host-stat-label">{{ s.label }}</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS ────────────────────────────────────────── -->
    <section id="how-it-works" class="section">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">How it Works</div>
          <h2 class="section-headline">Simple. Fast. <em>Live.</em></h2>
        </div>

        <div class="steps-grid">
          <div v-for="(step, i) in steps" :key="step.title" class="step-card">
            <div class="step-num">0{{ i + 1 }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-body">{{ step.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FAQ ────────────────────────────────────────────────── -->
    <section id="faq" class="section section-alt">
      <div class="wrap faq-wrap">
        <div class="section-header">
          <div class="tag">FAQ</div>
          <h2 class="section-headline">Questions <em>&amp; Answers</em></h2>
        </div>

        <div class="faq-list">
          <div
            v-for="(item, i) in faqs"
            :key="i"
            class="faq-item"
            :class="{ 'faq-open': item.open }"
          >
            <button class="faq-q" @click="item.open = !item.open">
              <span>{{ item.q }}</span>
              <i
                class="ph faq-chevron"
                :class="item.open ? 'ph-minus' : 'ph-plus'"
              ></i>
            </button>
            <div class="faq-a">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA BANNER ─────────────────────────────────────────── -->
    <section class="cta-banner">
      <div class="wrap cta-inner">
        <h2 class="cta-headline">Ready to reach your audience?</h2>
        <p class="cta-sub">
          Start your campaign today or apply to host a screen in your space.
        </p>
        <a href="mailto:hello@usemimu.com" class="btn-light">
          hello@usemimu.com →
        </a>
        <div class="cta-stores">
          <a href="https://apps.apple.com/app/mimuads/id6775953486" target="_blank" rel="noopener noreferrer" class="store-badge-link" aria-label="Download on the App Store">
            <img src="/apple-badge.svg" alt="Download on the App Store" class="store-badge-img" />
          </a>
          <div class="store-badge-wrap">
            <a href="#" class="store-badge-link" aria-label="Get it on Google Play">
              <img src="/google-badge.svg" alt="Get it on Google Play" class="store-badge-img" />
            </a>
            <span class="coming-soon-badge">Coming soon</span>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'

const props = defineProps({
  dark: { type: Boolean, default: false },
})

const reelSrc = computed(() =>
  props.dark ? '/fallback/mimu_m_dark.mp4' : '/fallback/mimu_m_clay.mp4'
)

const stats = [
  { value: '18 LGAs',    label: 'Lagos coverage' },
  { value: 'AI-Native',  label: 'From the ground up' },
  { value: 'APCON',      label: 'Fully compliant' },
  { value: '24 hrs',     label: 'Go-live time' },
]

const aiFeatures = [
  {
    icon: 'ph-cursor-click',
    title: 'Self-Serve in Minutes',
    body: 'Create, target and launch your campaign from your phone. No agency, no back-and-forth, no waiting.',
  },
  {
    icon: 'ph-brain',
    title: 'AI Screen Targeting',
    body: 'Our AI selects the screens where your audience is most likely to convert, based on venue type and foot traffic.',
  },
  {
    icon: 'ph-chart-line-up',
    title: 'Live Optimization',
    body: 'The platform watches your campaign performance in real time and shifts budget to your best-performing screens.',
  },
  {
    icon: 'ph-eye',
    title: 'On-Device Verification',
    body: 'Viewership is counted by AI running directly on each screen — no estimates, no off-device data, no fraud.',
  },
]

const aiLogs = [
  { time: '09:41', msg: 'Screen #LK-312 added — high-traffic pharmacy, Yaba' },
  { time: '09:43', msg: '14 creatives cleared by APCON AI checker' },
  { time: '09:44', msg: 'Campaign deployed across 3,247 screens' },
  { time: '09:51', msg: 'AI reallocating budget → top 48 screens (↑32% ROI)' },
  { time: '10:02', msg: '1.4M verified impressions logged today' },
]

const advertiserFeatures = [
  {
    icon: 'ph-eye',
    title: 'AI-Verified Viewership',
    body: 'On-device AI counts real viewers anonymously. You pay only for verified attention — not estimates, not guesses.',
  },
  {
    icon: 'ph-certificate',
    title: 'APCON Compliant',
    body: 'Every creative is reviewed and vetted before it goes live. Regulatory peace of mind, built in.',
  },
  {
    icon: 'ph-rocket-launch',
    title: 'Live in 24 Hours',
    body: 'Upload your creative, choose your screens, and your ad is running the next day. No agency in between.',
  },
  {
    icon: 'ph-map-pin',
    title: 'Real Neighbourhoods',
    body: 'Pharmacies, eateries, salons — the everyday places your customers already visit, across 18 Lagos LGAs.',
  },
]

const hostBenefits = [
  'Screen installed at zero cost to you',
  'Earn passive income every month',
  'Paid directly to your bank account, every Friday',
  'No maintenance or running costs on your end',
  'Serve ads that matter to your community',
]

const hostStatCards = [
  { value: '₦0',      label: 'Installation cost' },
  { value: 'Weekly',  label: 'Payment schedule' },
  { value: 'Zero',    label: 'Running costs' },
]

const steps = [
  {
    title: 'Upload Your Creative',
    body: 'Send us your ad — image or short video. Our team handles APCON vetting so you\'re always compliant, without extra work.',
  },
  {
    title: 'Pick Your Screens',
    body: 'Choose locations by LGA, venue type, or daily foot traffic. See exactly where your ad will run before you commit.',
  },
  {
    title: 'Go Live',
    body: 'Your ad plays on real screens inside real Lagos shops. Verified impression counts reported as they happen.',
  },
]

const faqs = reactive([
  {
    q: 'What is Mimuads?',
    a: 'Mimuads is a digital out-of-home (DOOH) advertising platform. We place smart screens inside high-traffic venues — pharmacies, eateries, salons — and connect them to brands that want to reach real people in the real world.',
    open: false,
  },
  {
    q: 'How does the viewership verification work?',
    a: 'Each screen runs an on-device AI model that counts real viewers anonymously — no camera data leaves the device. You see verified impression counts, not inflated estimates.',
    open: false,
  },
  {
    q: 'What kind of businesses advertise on Mimuads?',
    a: 'SMEs, startups, and established brands that want to reach everyday consumers where they already spend time. If your customer visits a pharmacy, eats out, or stops by a salon, Mimuads puts your brand in front of them.',
    open: false,
  },
  {
    q: 'Who can host a screen?',
    a: 'Any venue with consistent foot traffic — pharmacies, eateries, salons, boutiques. We install the screen at no cost and handle all maintenance.',
    open: false,
  },
  {
    q: 'Is Mimuads APCON registered?',
    a: 'Yes. Every creative on the network is vetted for APCON compliance before it goes live. Advertisers don\'t manage that process separately.',
    open: false,
  },
])
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

.page { width: 100%; }

/* ── Theme tokens ───────────────────────────────────────────── */
.is-light {
  --text-primary:   #0E0D0B;
  --text-secondary: #5E574F;
  --text-muted:     #A89F94;
  --card-bg:        #ffffff;
  --card-border:    rgba(0,0,0,0.07);
  --section-alt-bg: #FBF4F0;
  --strip-bg:       #F0EBE6;
  --divider:        rgba(0,0,0,0.08);
  color: #0E0D0B;
}
.is-dark {
  --text-primary:   #F4EDE4;
  --text-secondary: #A89F94;
  --text-muted:     #5E574F;
  --card-bg:        #1C1A17;
  --card-border:    rgba(255,255,255,0.07);
  --section-alt-bg: #161410;
  --strip-bg:       #1C1A17;
  --divider:        rgba(255,255,255,0.07);
  color: #F4EDE4;
}

/* ── Buttons ────────────────────────────────────────────────── */
.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 13px 24px;
  border-radius: 999px;
  background: #B55430;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.btn-primary:hover { opacity: 0.82; }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 13px 24px;
  border-radius: 999px;
  border: 1px solid var(--divider);
  color: var(--text-secondary);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease;
}
.btn-ghost:hover { border-color: #B55430; color: #B55430; }

.btn-light {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 999px;
  background: #fff;
  color: #B55430;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.btn-light:hover { opacity: 0.85; }

/* ── Shared section typography ──────────────────────────────── */
.tag {
  display: inline-block;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #B55430;
  margin-bottom: 20px;
}

.section-headline {
  font-family: 'Cormorant', Georgia, serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  margin: 0 0 20px;
}
.section-headline em { font-style: italic; color: #B55430; }

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

/* ── HERO ───────────────────────────────────────────────────── */
.hero {
  padding: clamp(64px, 10vw, 100px) 0 clamp(48px, 7vw, 80px);
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
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #B55430;
  margin-bottom: 20px;
}

.hero-headline {
  font-family: 'Cormorant', Georgia, serif;
  font-weight: 400;
  font-size: clamp(52px, 8vw, 88px);
  line-height: 1.0;
  letter-spacing: -0.04em;
  margin: 0 0 24px;
  color: var(--text-primary);
}
.hero-headline em { font-style: italic; color: #B55430; }

.hero-sub {
  font-size: clamp(15px, 1.6vw, 18px);
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 480px;
  margin: 0 0 36px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

/* ── Simulated screen ───────────────────────────────────────── */
.hero-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.bezel {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  padding: clamp(16px, 3vw, 28px);
  background:
    radial-gradient(120% 80% at 50% 0%, rgba(181,84,48,0.12) 0%, rgba(181,84,48,0) 60%),
    radial-gradient(120% 80% at 50% 100%, var(--bezel-shade) 0%, transparent 60%),
    var(--bezel-bg);
  border: 1px solid var(--bezel-border);
  box-shadow:
    inset 0 0 0 1px var(--bezel-inset),
    inset 0 0 80px var(--bezel-vignette),
    0 24px 48px -24px rgba(0,0,0,0.30);
  overflow: hidden;
}
.is-light .bezel {
  --bezel-bg: #fffaf6;
  --bezel-border: rgba(0,0,0,0.08);
  --bezel-inset: rgba(0,0,0,0.03);
  --bezel-shade: rgba(0,0,0,0.04);
  --bezel-vignette: rgba(0,0,0,0.08);
}
.is-dark .bezel {
  --bezel-bg: #100f0d;
  --bezel-border: rgba(255,255,255,0.08);
  --bezel-inset: rgba(255,255,255,0.04);
  --bezel-shade: rgba(0,0,0,0.5);
  --bezel-vignette: rgba(0,0,0,0.55);
}

.bezel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: radial-gradient(circle at 1px 1px, rgba(128,128,128,0.3) 1px, transparent 1.5px);
  background-size: 14px 14px;
  opacity: 0.05;
  pointer-events: none;
  z-index: 0;
}
.bezel::after {
  content: '';
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(40% 50% at 30% 40%, rgba(181,84,48,0.22) 0%, transparent 55%),
    radial-gradient(45% 55% at 75% 65%, rgba(200,119,76,0.18) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
  animation: drift 14s ease-in-out infinite alternate;
  will-change: transform;
}
@keyframes drift {
  0%   { transform: translate(-4%, -2%); }
  50%  { transform: translate(3%, 4%); }
  100% { transform: translate(-2%, 5%); }
}

.indicator {
  position: absolute;
  top: 14px;
  left: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 10.5px;
  letter-spacing: 0.18em;
  z-index: 2;
}
.is-light .indicator { color: rgba(0,0,0,0.5); }
.is-dark  .indicator { color: rgba(255,255,255,0.5); }

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #B55430;
  box-shadow: 0 0 10px rgba(181,84,48,0.6);
  animation: pulse 1.6s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes pulse {
  0%, 100% { opacity: 0.55; transform: scale(0.92); }
  50%       { opacity: 1;    transform: scale(1.08); }
}
@media (prefers-reduced-motion: reduce) {
  .dot, .bezel::after { animation: none; }
}

.canvas {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.reel {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  background: #000;
}

.screen-caption {
  font-family: 'Cormorant', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(14px, 1.4vw, 17px);
  line-height: 1.5;
  margin: 0;
  text-align: center;
  color: var(--text-secondary);
}
.screen-caption em { color: #B55430; font-weight: 500; }

/* ── TRUST STRIP ────────────────────────────────────────────── */
.trust-strip {
  background: var(--strip-bg);
  border-top: 1px solid var(--divider);
  border-bottom: 1px solid var(--divider);
  padding: 28px 0;
}
.trust-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0;
}
.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 32px;
  border-right: 1px solid var(--divider);
}
.trust-item:last-child { border-right: none; }
@media (max-width: 600px) {
  .trust-item { border-right: none; padding: 10px 20px; }
}

.trust-value {
  font-family: 'Cormorant', Georgia, serif;
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  line-height: 1;
}
.trust-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 9.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
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

/* ── FEATURE GRID ───────────────────────────────────────────── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.feature-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.15s ease;
}
.feature-card:hover { border-color: rgba(181,84,48,0.3); }

.feature-icon {
  font-size: 26px;
  color: #B55430;
  line-height: 1;
}
.feature-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  margin: 0;
}
.feature-body {
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

/* ── HOSTS ──────────────────────────────────────────────────── */
.hosts-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(48px, 7vw, 80px);
  align-items: start;
}
@media (min-width: 800px) {
  .hosts-layout { grid-template-columns: 1fr 1fr; }
}

.host-benefits {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.host-benefits li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.55;
  color: var(--text-secondary);
}
.benefit-check {
  font-size: 18px;
  color: #B55430;
  margin-top: 2px;
  flex-shrink: 0;
}

.mt-cta { margin-top: 32px; }

.host-stats {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.host-stat-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.host-stat-value {
  font-family: 'Cormorant', Georgia, serif;
  font-size: clamp(36px, 5vw, 52px);
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #B55430;
  line-height: 1;
}
.host-stat-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}

/* ── STEPS ──────────────────────────────────────────────────── */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
.step-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.step-num {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #B55430;
}
.step-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin: 0;
}
.step-body {
  font-size: 14px;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

/* ── FAQ ────────────────────────────────────────────────────── */
.faq-wrap { max-width: 780px; }
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--divider);
  border-radius: 20px;
  overflow: hidden;
}
.faq-item {
  border-bottom: 1px solid var(--divider);
}
.faq-item:last-child { border-bottom: none; }

.faq-q {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 22px 28px;
  background: var(--card-bg);
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  transition: background 0.1s ease;
}
.faq-q:hover { background: var(--section-alt-bg); }

.faq-chevron {
  font-size: 18px;
  color: #B55430;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  background: var(--card-bg);
}
.faq-open .faq-a {
  max-height: 200px;
}
.faq-a p {
  padding: 0 28px 22px;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}

/* ── CTA BANNER ─────────────────────────────────────────────── */
.cta-banner {
  background: #B55430;
  padding: clamp(64px, 9vw, 100px) 0;
}
.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}
.cta-headline {
  font-family: 'Cormorant', Georgia, serif;
  font-weight: 400;
  font-size: clamp(40px, 6vw, 72px);
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: #fff;
  margin: 0;
}
.cta-sub {
  font-size: clamp(15px, 1.5vw, 17px);
  line-height: 1.65;
  color: rgba(255,255,255,0.75);
  max-width: 440px;
  margin: 0;
}

.cta-stores {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 8px;
}

/* ── STORE BUTTONS ──────────────────────────────────────────── */
.store-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
}

.store-badge-link {
  display: inline-block;
  text-decoration: none;
  transition: opacity 0.15s ease;
}
.store-badge-link:hover { opacity: 0.78; }

.store-badge-img {
  display: block;
  height: 48px;
  width: auto;
}
.is-dark .store-badge-img {
  filter: invert(1);
}

.store-badge-wrap {
  position: relative;
  display: inline-block;
}

.coming-soon-badge {
  position: absolute;
  top: -9px;
  right: -9px;
  background: #FF4930;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 20px;
  pointer-events: none;
  white-space: nowrap;
}

/* ── AI SELF-SERVE SECTION ──────────────────────────────────── */
.ai-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(48px, 7vw, 80px);
  align-items: start;
}
@media (min-width: 860px) {
  .ai-layout { grid-template-columns: 1fr 1fr; }
}

/* AI feature list */
.ai-features {
  list-style: none;
  padding: 0;
  margin: 32px 0 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ai-feature {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.ai-feature-icon {
  font-size: 20px;
  color: #B55430;
  flex-shrink: 0;
  margin-top: 2px;
}
.ai-feature-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  margin-bottom: 3px;
}
.ai-feature-body {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-secondary);
}

/* AI dashboard card */
.ai-card {
  border-radius: 20px;
  border: 1px solid var(--card-border);
  overflow: hidden;
  font-family: 'JetBrains Mono', monospace;
}
.ai-card-light {
  background: #fff;
  box-shadow: 0 8px 32px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04);
}
.ai-card-dark {
  background: #1C1A17;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.2);
}

.ai-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--divider);
}
.ai-card-title {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-primary);
}
.ai-status {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2B7244;
}

.ai-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2B7244;
  box-shadow: 0 0 8px rgba(43,114,68,0.6);
  animation: pulse 1.8s ease-in-out infinite;
}
.ai-dot-sm {
  width: 6px;
  height: 6px;
}

.ai-metric-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  gap: 12px;
}
.ai-metric {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.ai-metric-val {
  font-size: clamp(20px, 3vw, 28px);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1;
}
.ai-metric-unit {
  font-size: 12px;
  opacity: 0.45;
}
.ai-metric-lbl {
  font-size: 9px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.ai-bar-wrap {
  padding: 0 20px 20px;
}
.ai-bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 8px;
}
.ai-bar-track {
  height: 5px;
  border-radius: 999px;
  background: var(--divider);
  overflow: hidden;
}
.ai-bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #B55430, #D9803A);
  transition: width 1s ease;
}

.ai-log {
  border-top: 1px solid var(--divider);
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ai-log-row {
  display: flex;
  gap: 12px;
  align-items: baseline;
}
.ai-log-time {
  font-size: 9.5px;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  flex-shrink: 0;
}
.ai-log-msg {
  font-size: 10.5px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.ai-footer-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--divider);
  background: var(--section-alt-bg);
}
.ai-optimizing {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 9.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #2B7244;
}
.ai-cost {
  font-size: 13px;
  font-weight: 600;
  color: #B55430;
}
.ai-cost-lbl {
  font-size: 9px;
  font-weight: 400;
  color: var(--text-muted);
}
</style>
