<template>
  <div class="page" :class="dark ? 'is-dark' : 'is-light'">

    <!-- ── HERO ─────────────────────────────────────────────────── -->
    <section class="hero">
      <div class="wrap hero-inner">
        <div class="eyebrow">For Agencies · Brands · Buying Platforms</div>
        <h1 class="hero-headline">
          Africa's programmatic<br>DOOH <em>infrastructure.</em>
        </h1>
        <p class="hero-sub">
          The supply layer agencies, brands and buying platforms activate to reach
          African consumers in the physical world. One integration puts the entire
          verified screen network — computer-vision measured, APCON-compliant — inside
          your buying workflow.
        </p>
        <div class="hero-ctas">
          <a href="mailto:hello@usemimu.com?subject=Agency%20%26%20programmatic%20access" class="btn-primary" data-ga-event="talk_to_agency" data-ga-label="agencies_hero">Talk to our agency team</a>
          <a href="#models" class="btn-ghost">See the models ↓</a>
        </div>

        <div class="hero-strip">
          <div v-for="s in heroStats" :key="s.label" class="hero-stat">
            <span class="hero-stat-val">{{ s.value }}</span>
            <span class="hero-stat-lbl">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WHY MIMUADS ──────────────────────────────────────────── -->
    <section class="section section-alt">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">Why agencies build on Mimuads</div>
          <h2 class="section-headline">
            Everything a media buyer<br>needs to <em>commit budget.</em>
          </h2>
          <p class="section-sub">
            Serious agency spend follows verification, standardised reporting and
            programmatic control. Mimuads is built to supply all three — the same
            rigour you expect from digital, now for physical DOOH across Africa.
          </p>
        </div>

        <div class="feature-grid">
          <div v-for="c in capabilities" :key="c.title" class="feature-card">
            <i :class="`ph ${c.icon}`" class="feature-icon"></i>
            <h3 class="feature-title">{{ c.title }}</h3>
            <p class="feature-body">{{ c.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── THREE MODELS ─────────────────────────────────────────── -->
    <section id="models" class="section">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">Three ways to work with us</div>
          <h2 class="section-headline">
            From a single booking<br>to your <em>own network.</em>
          </h2>
          <p class="section-sub">
            Start where you are today and scale into deeper integration as your
            client demand grows.
          </p>
        </div>

        <div class="model-stack">
          <div v-for="m in models" :key="m.title" class="model-row">
            <div class="model-index">
              <span class="model-num">{{ m.num }}</span>
              <span class="model-status" :class="`model-status-${m.state}`">{{ m.status }}</span>
            </div>
            <div class="model-main">
              <h3 class="model-title">{{ m.title }}</h3>
              <p class="model-lead">{{ m.lead }}</p>
              <ul class="model-points">
                <li v-for="p in m.points" :key="p">
                  <i class="ph ph-check-circle model-check"></i>
                  <span>{{ p }}</span>
                </li>
              </ul>
              <div class="model-meta">
                <span class="model-meta-item"><i class="ph ph-users-three"></i>{{ m.who }}</span>
                <span class="model-meta-item"><i class="ph ph-clock"></i>{{ m.timeline }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── RATE CARD ────────────────────────────────────────────── -->
    <section class="section section-alt">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">Agency rate card</div>
          <h2 class="section-headline">
            Volume pricing that<br>rewards <em>scale.</em>
          </h2>
          <p class="section-sub">
            Transparent tiers, verified-view billing, no hidden agency markup baked
            into the supply. The more of the network you activate, the better your rate.
          </p>
        </div>

        <div class="rate-grid">
          <div
            v-for="t in tiers"
            :key="t.name"
            class="rate-card"
            :class="{ 'rate-card-featured': t.featured }"
          >
            <div v-if="t.featured" class="rate-flag">Most popular</div>
            <div class="rate-name">{{ t.name }}</div>
            <div class="rate-headline">{{ t.headline }}</div>
            <div class="rate-threshold">{{ t.threshold }}</div>
            <ul class="rate-points">
              <li v-for="p in t.points" :key="p">
                <i class="ph ph-check-circle rate-check"></i>
                <span>{{ p }}</span>
              </li>
            </ul>
            <a :href="t.cta.href" class="rate-cta" :class="t.featured ? 'rate-cta-solid' : 'rate-cta-ghost'" data-ga-event="talk_to_agency" :data-ga-label="`rate_${t.name.toLowerCase()}`">{{ t.cta.label }}</a>
          </div>
        </div>
        <p class="rate-note">
          Indicative tiers. Final rates depend on flight length, screen mix and
          creative volume — we'll send a full rate card on request.
        </p>
      </div>
    </section>

    <!-- ── HOW INTEGRATION WORKS ────────────────────────────────── -->
    <section class="section">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">Getting started</div>
          <h2 class="section-headline">Onboard in <em>days,</em> not quarters.</h2>
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

    <!-- ── FAQ ──────────────────────────────────────────────────── -->
    <section class="section section-alt">
      <div class="wrap faq-wrap">
        <div class="section-header">
          <div class="tag">Agency FAQ</div>
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
              <i class="ph faq-chevron" :class="item.open ? 'ph-minus' : 'ph-plus'"></i>
            </button>
            <div class="faq-a"><p>{{ item.a }}</p></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA BANNER ───────────────────────────────────────────── -->
    <section class="cta-banner">
      <div class="wrap cta-inner">
        <h2 class="cta-headline">Put African DOOH in your media plan.</h2>
        <p class="cta-sub">
          Tell us the brands you run and how you buy — we'll map the fastest path
          from booking to programmatic access.
        </p>
        <a href="mailto:hello@usemimu.com?subject=Agency%20%26%20programmatic%20access" class="btn-light" data-ga-event="talk_to_agency" data-ga-label="agencies_banner">
          hello@usemimu.com →
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { signupUrl } from '../links.js'

defineProps({
  dark: { type: Boolean, default: false },
})

const heroStats = [
  { value: '18 LGAs',   label: 'Lagos coverage' },
  { value: 'CV-Verified', label: 'On-device proof of play' },
  { value: 'APCON',     label: 'Every creative vetted' },
  { value: 'One API',   label: 'Whole network activated' },
]

const capabilities = [
  {
    icon: 'ph-seal-check',
    title: 'Verified inventory',
    body: 'Every play is measured on-device by computer vision — anonymous, tamper-resistant proof of play. The audited verification serious buyers require before committing client budgets. No verification, no spend.',
  },
  {
    icon: 'ph-plugs-connected',
    title: 'Programmatic buying',
    body: 'Push budgets programmatically and get results back automatically. Our supply-side API lets your DSP or buying platform activate African DOOH inventory the same way you buy digital today.',
  },
  {
    icon: 'ph-chart-bar',
    title: 'Standardised reporting',
    body: 'Verified impressions, reach by LGA, peak-time performance and share of voice — exported as client-ready reports. Reporting your planners can put in front of a brand without reformatting.',
  },
  {
    icon: 'ph-swatches',
    title: 'White-label infrastructure',
    body: 'Embed the entire stack under your own brand. Mimuads powers the players, AI targeting, verification and screen management; you keep the client relationship and the margin.',
  },
]

const models = [
  {
    num: '01',
    title: 'Agency as direct advertiser',
    status: 'Available now',
    state: 'live',
    lead: 'Book Mimuads campaigns directly on behalf of your clients — the same self-serve flow as an SMB, just larger budgets and more of the network selected.',
    points: [
      'Bulk multi-screen booking across the whole network',
      'Downloadable, client-ready campaign reports',
      'Volume rates on larger flights',
    ],
    who: 'Independent & full-service agencies',
    timeline: 'Live today · zero product changes',
  },
  {
    num: '02',
    title: 'Agency as programmatic buyer',
    status: 'In build',
    state: 'soon',
    lead: 'Activate Mimuads inventory programmatically through the tools you already use — the supply-side API connects to programmatic DOOH buying platforms.',
    points: [
      'Supply-side API for DSP / SSP integration',
      'Compatible with Vistar, Concord & bespoke DSPs',
      'Budgets in, verified results out — automatically',
    ],
    who: 'Programmatic & trading desks',
    timeline: '6–12 month build · design-partner slots open',
  },
  {
    num: '03',
    title: 'Agency as white-label operator',
    status: 'On roadmap',
    state: 'road',
    lead: 'Licence the full infrastructure to run your own DOOH network under your brand. We provide the technology; you provide the client relationships and commercial packaging.',
    points: [
      'Player software, AI targeting & CV verification',
      'Full screen & network management, your branding',
      'You own the client relationship and the margin',
    ],
    who: 'Networks & holding companies',
    timeline: '12–18 month play · by arrangement',
  },
]

const tiers = [
  {
    name: 'Launch',
    headline: 'List rates',
    threshold: 'Campaigns under ₦500k',
    featured: false,
    points: [
      'Full self-serve platform access',
      'Bulk multi-screen booking',
      'Verified-view billing',
      'Standard campaign reporting',
    ],
    cta: { label: 'Start self-serve', href: signupUrl('agencies') },
  },
  {
    name: 'Volume',
    headline: 'Up to 20% off',
    threshold: 'Campaigns ₦500k and above',
    featured: true,
    points: [
      'Volume discount on media spend',
      'Optional managed-service desk',
      'Dedicated account manager',
      'Custom client-branded reporting',
    ],
    cta: { label: 'Request volume rates', href: 'mailto:hello@usemimu.com?subject=Agency%20volume%20rates' },
  },
  {
    name: 'Network',
    headline: 'Custom',
    threshold: 'Programmatic & white-label',
    featured: false,
    points: [
      'Supply-side API access',
      'White-label infrastructure licence',
      'Bespoke commercial terms',
      'Priority roadmap input',
    ],
    cta: { label: 'Talk to us', href: 'mailto:hello@usemimu.com?subject=Programmatic%20%26%20white-label' },
  },
]

const steps = [
  {
    title: 'Brief us',
    body: 'Tell us the brands you run, your target reach across Lagos, and how you buy today. We map the right model and screen mix.',
  },
  {
    title: 'Book or integrate',
    body: 'Go live with a direct booking in days, or connect the supply-side API to your buying platform. Managed-service desk available if you prefer we run it.',
  },
  {
    title: 'Report to your client',
    body: 'Pull verified impressions, reach by LGA and peak-time performance into a client-ready report — exportable and on your own brand.',
  },
]

const faqs = reactive([
  {
    q: 'How is inventory verified?',
    a: 'Each screen runs an on-device computer-vision model that counts real viewers anonymously — no camera data leaves the device. You buy against verified proof of play, not estimated impressions, which is exactly what agency finance and clients require to sign off spend.',
    open: false,
  },
  {
    q: 'Can we buy programmatically today?',
    a: 'Direct booking on behalf of clients is available now. Programmatic (supply-side API / DSP) access is in active build — we\'re taking a small number of design partners. Email hello@usemimu.com to get in the queue.',
    open: false,
  },
  {
    q: 'Do you offer a managed service?',
    a: 'Yes. For agencies not ready to self-serve, our team can run the campaign end-to-end on your behalf — planning, screen selection, APCON vetting and reporting — as a white-glove managed-service option.',
    open: false,
  },
  {
    q: 'What does white-label involve?',
    a: 'You licence the full Mimuads stack — player software, AI targeting, computer-vision verification and screen management — and run a DOOH network under your own brand. You own the client relationship and commercial packaging; we power the infrastructure behind it. This is a longer-term arrangement we scope per partner.',
    open: false,
  },
  {
    q: 'What reporting can we show clients?',
    a: 'Verified impressions, reach by LGA, peak-time performance and share of voice, exported as client-ready reports. On Volume and Network tiers these can carry your own branding.',
    open: false,
  },
])
</script>

<style scoped>
/* ── Layout & theme tokens (shared with HomePage design system) ─ */
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: clamp(20px, 5vw, 48px);
  padding-right: clamp(20px, 5vw, 48px);
}
.page { width: 100%; }

.is-light {
  --text-primary:   #0E0D0B;
  --text-secondary: #5E574F;
  --text-muted:     #A89F94;
  --card-bg:        #ffffff;
  --card-border:    rgba(0,0,0,0.07);
  --section-alt-bg: #FBF4F0;
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
  --divider:        rgba(255,255,255,0.07);
  color: #F4EDE4;
}

/* ── Buttons ────────────────────────────────────────────────── */
.btn-primary {
  display: inline-flex; align-items: center;
  padding: 13px 24px; border-radius: 999px;
  background: #B55430; color: #fff;
  font-family: 'Aeonik', sans-serif;
  font-size: 14px; font-weight: 600; letter-spacing: -0.01em;
  text-decoration: none; transition: opacity 0.15s ease;
}
.btn-primary:hover { opacity: 0.82; }

.btn-ghost {
  display: inline-flex; align-items: center;
  padding: 13px 24px; border-radius: 999px;
  border: 1px solid var(--divider); color: var(--text-secondary);
  font-family: 'Aeonik', sans-serif;
  font-size: 14px; font-weight: 500;
  text-decoration: none;
  transition: border-color 0.15s ease, color 0.15s ease;
}
.btn-ghost:hover { border-color: #B55430; color: #B55430; }

.btn-light {
  display: inline-flex; align-items: center;
  padding: 14px 28px; border-radius: 999px;
  background: #fff; color: #B55430;
  font-family: 'Aeonik', sans-serif;
  font-size: 15px; font-weight: 600;
  text-decoration: none; transition: opacity 0.15s ease;
}
.btn-light:hover { opacity: 0.85; }

/* ── Shared section typography ──────────────────────────────── */
.tag {
  display: inline-block;
  font-family: 'Aeonik', monospace;
  font-size: 10.5px; font-weight: 500;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: #B55430; margin-bottom: 20px;
}
.section-headline {
  font-family: 'Aeonik', Georgia, serif;
  font-weight: 400; font-size: clamp(36px, 5vw, 60px);
  line-height: 1.07; letter-spacing: -0.03em;
  color: var(--text-primary); margin: 0 0 20px;
}
.section-headline em { font-style: italic; color: #B55430; }
.section-sub {
  font-size: clamp(15px, 1.5vw, 17px); line-height: 1.7;
  color: var(--text-secondary); max-width: 560px; margin: 0;
}
.section-header { margin-bottom: clamp(40px, 6vw, 64px); }

.section { padding: clamp(72px, 10vw, 112px) 0; }
.section-alt {
  background: var(--section-alt-bg);
  border-top: 1px solid var(--divider);
  border-bottom: 1px solid var(--divider);
}

/* ── HERO ───────────────────────────────────────────────────── */
.hero { padding: clamp(72px, 11vw, 120px) 0 clamp(48px, 7vw, 80px); }
.hero-inner { max-width: 820px; }
.eyebrow {
  font-family: 'Aeonik', monospace;
  font-size: 10.5px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #B55430; margin-bottom: 20px;
}
.hero-headline {
  font-family: 'Aeonik', Georgia, serif;
  font-weight: 400; font-size: clamp(48px, 7.5vw, 82px);
  line-height: 1.0; letter-spacing: -0.04em;
  margin: 0 0 24px; color: var(--text-primary);
}
.hero-headline em { font-style: italic; color: #B55430; }
.hero-sub {
  font-size: clamp(15px, 1.6vw, 18px); line-height: 1.7;
  color: var(--text-secondary); max-width: 620px; margin: 0 0 36px;
}
.hero-ctas { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }

.hero-strip {
  margin-top: clamp(40px, 6vw, 56px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 24px;
  padding-top: 28px;
  border-top: 1px solid var(--divider);
}
.hero-stat { display: flex; flex-direction: column; gap: 4px; }
.hero-stat-val {
  font-family: 'Aeonik', Georgia, serif;
  font-size: clamp(24px, 3vw, 32px); font-weight: 500;
  letter-spacing: -0.02em; color: var(--text-primary); line-height: 1;
}
.hero-stat-lbl {
  font-family: 'Aeonik', monospace;
  font-size: 9.5px; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--text-muted);
}

/* ── FEATURE GRID ───────────────────────────────────────────── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.feature-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 20px; padding: 28px;
  display: flex; flex-direction: column; gap: 12px;
  transition: border-color 0.15s ease;
}
.feature-card:hover { border-color: rgba(181,84,48,0.3); }
.feature-icon { font-size: 26px; color: #B55430; line-height: 1; }
.feature-title {
  font-family: 'Aeonik', sans-serif;
  font-size: 16px; font-weight: 600; letter-spacing: -0.01em;
  color: var(--text-primary); margin: 0;
}
.feature-body {
  font-size: 14px; line-height: 1.65;
  color: var(--text-secondary); margin: 0;
}

/* ── THREE MODELS ───────────────────────────────────────────── */
.model-stack { display: flex; flex-direction: column; gap: 20px; }
.model-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 24px;
  padding: clamp(24px, 4vw, 36px);
}
@media (min-width: 720px) {
  .model-row { grid-template-columns: 200px 1fr; gap: 32px; }
}
.model-index {
  display: flex; align-items: center; gap: 12px;
}
@media (min-width: 720px) {
  .model-index { flex-direction: column; align-items: flex-start; gap: 14px; }
}
.model-num {
  font-family: 'Aeonik', Georgia, serif;
  font-size: clamp(40px, 6vw, 64px); font-weight: 400;
  letter-spacing: -0.03em; color: #B55430; line-height: 1;
}
.model-status {
  font-family: 'Aeonik', monospace;
  font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 4px 10px; border-radius: 999px; white-space: nowrap;
}
.model-status-live { color: #2B7244; background: rgba(43,114,68,0.12); }
.model-status-soon { color: #B55430; background: rgba(181,84,48,0.12); }
.model-status-road { color: var(--text-muted); background: rgba(128,128,128,0.14); }

.model-title {
  font-family: 'Aeonik', sans-serif;
  font-size: clamp(18px, 2.4vw, 22px); font-weight: 600;
  letter-spacing: -0.02em; color: var(--text-primary); margin: 0 0 8px;
}
.model-lead {
  font-size: 15px; line-height: 1.65;
  color: var(--text-secondary); margin: 0 0 18px; max-width: 640px;
}
.model-points {
  list-style: none; padding: 0; margin: 0 0 18px;
  display: flex; flex-direction: column; gap: 10px;
}
.model-points li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 14px; line-height: 1.5; color: var(--text-secondary);
}
.model-check { font-size: 16px; color: #B55430; margin-top: 2px; flex-shrink: 0; }
.model-meta {
  display: flex; flex-wrap: wrap; gap: 20px;
  padding-top: 16px; border-top: 1px solid var(--divider);
}
.model-meta-item {
  display: flex; align-items: center; gap: 7px;
  font-family: 'Aeonik', monospace;
  font-size: 10.5px; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--text-muted);
}
.model-meta-item i { font-size: 14px; color: #B55430; }

/* ── RATE CARD ──────────────────────────────────────────────── */
.rate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
}
.rate-card {
  position: relative;
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 24px; padding: 32px 28px;
  display: flex; flex-direction: column; gap: 6px;
}
.rate-card-featured {
  border-color: #B55430;
  box-shadow: 0 12px 40px -20px rgba(181,84,48,0.5);
}
.rate-flag {
  position: absolute; top: -11px; left: 28px;
  background: #B55430; color: #fff;
  font-family: 'Aeonik', monospace;
  font-size: 9px; font-weight: 500; letter-spacing: 0.1em;
  text-transform: uppercase; padding: 4px 10px; border-radius: 999px;
}
.rate-name {
  font-family: 'Aeonik', monospace;
  font-size: 11px; font-weight: 500; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--text-muted);
}
.rate-headline {
  font-family: 'Aeonik', Georgia, serif;
  font-size: clamp(30px, 4vw, 40px); font-weight: 500;
  letter-spacing: -0.03em; color: var(--text-primary); line-height: 1.05;
}
.rate-threshold {
  font-size: 13px; color: var(--text-secondary); margin-bottom: 12px;
}
.rate-points {
  list-style: none; padding: 0; margin: 6px 0 22px;
  display: flex; flex-direction: column; gap: 11px; flex: 1;
}
.rate-points li {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 13.5px; line-height: 1.5; color: var(--text-secondary);
}
.rate-check { font-size: 15px; color: #B55430; margin-top: 2px; flex-shrink: 0; }
.rate-cta {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 20px; border-radius: 999px;
  font-family: 'Aeonik', sans-serif;
  font-size: 13.5px; font-weight: 600;
  text-decoration: none; transition: opacity 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}
.rate-cta-solid { background: #B55430; color: #fff; }
.rate-cta-solid:hover { opacity: 0.82; }
.rate-cta-ghost { border: 1px solid var(--divider); color: var(--text-primary); }
.rate-cta-ghost:hover { border-color: #B55430; color: #B55430; }
.rate-note {
  margin: 24px 0 0; font-size: 13px; line-height: 1.6;
  color: var(--text-muted); max-width: 560px;
}

/* ── STEPS ──────────────────────────────────────────────────── */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}
.step-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 20px; padding: 32px 28px;
  display: flex; flex-direction: column; gap: 14px;
}
.step-num {
  font-family: 'Aeonik', monospace;
  font-size: 12px; font-weight: 500; letter-spacing: 0.12em; color: #B55430;
}
.step-title {
  font-family: 'Aeonik', sans-serif;
  font-size: 17px; font-weight: 600; letter-spacing: -0.02em;
  color: var(--text-primary); margin: 0;
}
.step-body { font-size: 14px; line-height: 1.65; color: var(--text-secondary); margin: 0; }

/* ── FAQ ────────────────────────────────────────────────────── */
.faq-wrap { max-width: 780px; }
.faq-list {
  display: flex; flex-direction: column;
  border: 1px solid var(--divider); border-radius: 20px; overflow: hidden;
}
.faq-item { border-bottom: 1px solid var(--divider); }
.faq-item:last-child { border-bottom: none; }
.faq-q {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 22px 28px; background: var(--card-bg);
  border: none; cursor: pointer; text-align: left;
  font-family: 'Aeonik', sans-serif;
  font-size: 15px; font-weight: 500; letter-spacing: -0.01em;
  color: var(--text-primary); transition: background 0.1s ease;
}
.faq-q:hover { background: var(--section-alt-bg); }
.faq-chevron { font-size: 18px; color: #B55430; flex-shrink: 0; }
.faq-a {
  max-height: 0; overflow: hidden;
  transition: max-height 0.3s ease; background: var(--card-bg);
}
.faq-open .faq-a { max-height: 260px; }
.faq-a p {
  padding: 0 28px 22px; margin: 0;
  font-size: 14px; line-height: 1.7; color: var(--text-secondary);
}

/* ── CTA BANNER ─────────────────────────────────────────────── */
.cta-banner { background: #B55430; padding: clamp(64px, 9vw, 100px) 0; }
.cta-inner {
  display: flex; flex-direction: column; align-items: center;
  text-align: center; gap: 20px;
}
.cta-headline {
  font-family: 'Aeonik', Georgia, serif;
  font-weight: 400; font-size: clamp(38px, 5.5vw, 66px);
  letter-spacing: -0.04em; line-height: 1.05; color: #fff; margin: 0;
  max-width: 720px;
}
.cta-sub {
  font-size: clamp(15px, 1.5vw, 17px); line-height: 1.65;
  color: rgba(255,255,255,0.75); max-width: 480px; margin: 0;
}
</style>
