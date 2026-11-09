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

    <!-- ── PLATFORM ─────────────────────────────────────────────── -->
    <section class="section section-alt">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">The platform</div>
          <h2 class="section-headline">Five layers, one <em>infrastructure.</em></h2>
        </div>
        <div class="platform-grid">
          <div v-for="p in pillars" :key="p.name" class="platform-card">
            <img :src="p.icon" :alt="p.name + ' icon'" class="platform-icon" />
            <h3 class="platform-name">{{ p.name }}</h3>
            <p class="platform-copy">{{ p.copy }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── AUDIENCE BY VENUE ──────────────────────────────────────── -->
    <section class="section">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">Audience by venue</div>
          <h2 class="section-headline">Verified screens in the places<br /><em>Lagos spends its day.</em></h2>
          <p class="section-sub">
            Mimuads inventory is organised by venue type, so a business buys an audience and a moment,
            not just a location. Live in Lagos today.
          </p>
        </div>
        <div class="venue-grid">
          <div v-for="v in venues" :key="v.name" class="venue-card">
            <img :src="v.icon" :alt="v.name + ' icon'" class="venue-icon" />
            <h3 class="venue-name">{{ v.name }}</h3>
            <p class="venue-who">{{ v.who }}</p>
            <p class="venue-moment">{{ v.moment }}</p>
          </div>
        </div>
        <div class="venue-chain">
          <div class="venue-chain-inner">
            <h3 class="venue-chain-h">Buy one venue, or a whole chain.</h3>
            <p class="venue-chain-p">Where a chain is on the network, one campaign can run in a single branch or across every location. The same screen standard, the same verified reporting, and reach that grows from one site to the whole chain.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FOR BUSINESSES ────────────────────────────────────────── -->
    <section class="section section-alt">
      <div class="wrap">
        <div class="section-header">
          <div class="tag">For businesses</div>
          <h2 class="section-headline">Buy physical media<br /><em>the way you buy digital.</em></h2>
          <p class="section-sub">Any budget, live in 24 hours, verified. All four use one wallet, the same screens and one report.</p>
        </div>
        <div class="biz-grid">
          <div v-for="b in businesses" :key="b.type" class="biz-card">
            <img :src="b.icon" :alt="b.type + ' icon'" class="biz-icon" />
            <div class="biz-type">{{ b.type }}</div>
            <p class="biz-who">{{ b.who }}</p>
            <div class="biz-problem-wrap">
              <span class="biz-problem-label">Today</span>
              <p class="biz-problem">{{ b.problem }}</p>
            </div>
            <div class="biz-solution-wrap">
              <span class="biz-solution-label">With Mimuads</span>
              <p class="biz-solution">{{ b.solution }}</p>
            </div>
            <a :href="b.ctaUrl" class="biz-cta">{{ b.cta }}<i class="ph ph-arrow-right"></i></a>
          </div>
        </div>
        <div class="biz-perks">
          <h3 class="biz-perks-h">What every business gets</h3>
          <ul class="biz-perks-list">
            <li v-for="perk in bizPerks" :key="perk" class="biz-perk">
              <i class="ph ph-check-circle biz-check"></i>
              <span>{{ perk }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── MEASUREMENT ───────────────────────────────────────────── -->
    <section class="section measure-section">
      <div class="wrap measure-wrap">
        <div class="measure-head">
          <div class="tag measure-tag">Measurement and reporting</div>
          <h2 class="section-headline measure-headline">See who saw it.<br /><em>Pay for what's verified.</em></h2>
          <p class="section-sub measure-sub">Every campaign comes with a dashboard that shows real numbers, not estimates.</p>
        </div>
        <div class="measure-metrics">
          <div v-for="m in metrics" :key="m.label" class="measure-metric">
            <img :src="m.icon" :alt="m.label + ' icon'" class="measure-icon" />
            <span class="measure-label">{{ m.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PRICING ───────────────────────────────────────────────── -->
    <section class="pricing-section">
      <div class="wrap pricing-wrap">
        <div class="pricing-head">
          <div class="pricing-tag">Pricing</div>
          <h2 class="pricing-headline">Start with <em>any budget.</em></h2>
        </div>
        <div class="pricing-points">
          <div class="pricing-point">
            <img src="/icons/engraving/top-up.svg" alt="Top up icon" class="pricing-icon" />
            <p>Fund your wallet with any amount.</p>
          </div>
          <div class="pricing-point">
            <img src="/icons/engraving/receipt.svg" alt="Receipt icon" class="pricing-icon" />
            <p>You pay per verified impression.</p>
          </div>
          <div class="pricing-point">
            <img src="/icons/engraving/weekly-payout.svg" alt="Weekly payout icon" class="pricing-icon" />
            <p>Venue owners are paid weekly from campaign revenue.</p>
          </div>
        </div>
        <div class="pricing-cta">
          <a :href="signupUrl('pricing')" class="pricing-btn">Start advertising<i class="ph ph-arrow-right"></i></a>
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

const pillars = [
  { name: 'Mimuads Studio', copy: 'Build video, image and motion-graphic creative in the app. No designer or agency needed.', icon: '/icons/riso/studio.svg' },
  { name: 'ML Intelligence', copy: 'Matches every campaign to a screen using venue type, location, time of day, creative format and the audience that venue draws.', icon: '/icons/riso/ml.svg' },
  { name: 'Agentic Player', copy: 'Schedules, monitors, caches and reports on its own. Keeps playing through internet drops and restarts after power cuts.', icon: '/icons/riso/player.svg' },
  { name: 'Verified Attention', copy: 'Computer vision confirms real human impressions and logs proof of play for every campaign.', icon: '/icons/riso/verified.svg' },
  { name: 'Proximity conversion', copy: 'Sends offers to opted-in phones near the screen, linking straight to the advertiser\'s page, app or offer.', icon: '/icons/riso/proximity.svg' },
]

const venues = [
  { name: 'Airports', icon: '/icons/riso/airport.svg', who: 'Business and leisure travellers', moment: 'Long waits before departure, high intent' },
  { name: 'Train stations', icon: '/icons/riso/train-station.svg', who: 'Daily commuters', moment: 'Repeat exposure on the same route' },
  { name: 'Pharmacies', icon: '/icons/riso/pharmacy.svg', who: 'Health-conscious shoppers and families', moment: 'Waiting for advice or a prescription, trusted setting' },
  { name: 'Supermarkets', icon: '/icons/riso/supermarket.svg', who: 'Households shopping', moment: 'Point of purchase' },
  { name: 'Salons', icon: '/icons/riso/salon.svg', who: 'Beauty and grooming customers', moment: 'Seated for long stretches, relaxed attention' },
  { name: 'Restaurants', icon: '/icons/riso/restaurant.svg', who: 'Workers, students and families', moment: 'Seated, waiting and eating' },
  { name: 'Malls', icon: '/icons/riso/mall.svg', who: 'Shoppers, families and groups', moment: 'Browsing with buying intent' },
]

const businesses = [
  {
    type: 'SMBs', icon: '/icons/riso/smb.svg',
    who: 'Pharmacies, salons, restaurants, shops and service businesses.',
    problem: 'Agencies and minimum budgets price them out, and flyers can\'t be measured.',
    solution: 'Launch from the mobile app. Verify your business, fund your wallet, build creative in Mimuads Studio, choose screens near your customers and go live in 24 hours.',
    cta: 'Start advertising', ctaUrl: 'https://apps.apple.com/app/mimuads/id6775953486',
  },
  {
    type: 'Startups', icon: '/icons/riso/startup.svg',
    who: 'Fintechs, delivery apps, consumer apps and marketplaces.',
    problem: 'They need users in specific neighbourhoods and can\'t prove that offline spend works.',
    solution: 'Run app-download campaigns on screens in the venue types and areas where your users are. Proximity offers send a tap-to-download link to phones nearby.',
    cta: 'Launch a campaign', ctaUrl: signupUrl('biz-startup'),
  },
  {
    type: 'Agencies', icon: '/icons/riso/agency.svg',
    who: 'Media and creative agencies buying for clients.',
    problem: 'Out-of-home buying is manual, one vendor at a time, with estimated reach.',
    solution: 'Plan and fund campaigns across venue types and areas from one dashboard, and report verified results to every client. API access is coming for programmatic buying.',
    cta: 'Book a demo', ctaUrl: '/contact',
  },
  {
    type: 'FMCG brands', icon: '/icons/riso/fmcg.svg',
    who: 'Consumer goods brands.',
    problem: 'They want a presence where their products are bought, and proof that it was seen.',
    solution: 'Target pharmacies, supermarkets and their chains by location and audience, and pair the ad with a voucher sent to nearby phones. Get verified impressions by venue.',
    cta: 'Book a demo', ctaUrl: '/contact',
  },
]

const bizPerks = [
  'One wallet, any budget, no minimum spend',
  'Mimuads Studio for image, video and motion-graphic creative',
  'Screens chosen by venue type, location and footfall density',
  'Live in 24 hours',
  'Verified impressions and proof of play',
  'Proximity offers that turn attention into action',
]

const metrics = [
  { label: 'Verified impressions', icon: '/icons/engraving/computer-vision.svg' },
  { label: 'Dwell time', icon: '/icons/engraving/dwell-time.svg' },
  { label: 'Results by venue', icon: '/icons/engraving/screen-map.svg' },
  { label: 'Spend against budget', icon: '/icons/engraving/report.svg' },
  { label: 'Proof of play', icon: '/icons/engraving/proof-of-play.svg' },
]

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
  font-family: 'Space Grotesk', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 20px;
}

.section-headline {
  font-family: 'Space Grotesk', Georgia, serif;
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
  font-family: 'Space Grotesk', Georgia, serif;
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
  font-family: 'Space Grotesk', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 20px;
}

.hero-headline {
  font-family: 'Space Grotesk', Georgia, serif;
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
  font-family: 'Space Grotesk', Georgia, serif;
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

/* ── PLATFORM ──────────────────────────────────────────────── */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 1100px) { .platform-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px)  { .platform-grid { grid-template-columns: repeat(2, 1fr); } }

.platform-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 28px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: box-shadow 0.18s ease, border-color 0.18s ease;
}
.platform-card:hover {
  border-color: rgba(181, 84, 48, 0.3);
  box-shadow: 0 10px 32px -12px rgba(181, 84, 48, 0.18);
}
.platform-icon {
  width: 56px;
  height: 56px;
  display: block;
}
.platform-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  line-height: 1.3;
  margin: 0;
}
.platform-copy {
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

/* ── AUDIENCE BY VENUE ─────────────────────────────────────── */
.venue-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 1024px) { .venue-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px)  { .venue-grid { grid-template-columns: repeat(2, 1fr); } }

.venue-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: box-shadow 0.18s ease, border-color 0.18s ease;
}
.venue-card:hover {
  border-color: rgba(181, 84, 48, 0.3);
  box-shadow: 0 10px 32px -12px rgba(181, 84, 48, 0.18);
}
.venue-icon {
  width: 48px;
  height: 48px;
  display: block;
}
.venue-name {
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--text-primary);
  margin: 0;
}
.venue-who {
  font-size: 13px;
  line-height: 1.55;
  color: var(--text-secondary);
  margin: 0;
}
.venue-moment {
  font-size: 12.5px;
  line-height: 1.5;
  color: var(--text-muted);
  margin: 0;
  font-style: italic;
}

.venue-chain {
  margin-top: 40px;
  background: var(--section-alt-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: clamp(28px, 4vw, 40px) clamp(24px, 4vw, 48px);
}
.venue-chain-h {
  font-family: 'Space Grotesk', Georgia, serif;
  font-size: clamp(20px, 2.4vw, 26px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin: 0 0 10px;
}
.venue-chain-p {
  font-size: 15px;
  line-height: 1.65;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0;
}

/* ── FOR BUSINESSES ────────────────────────────────────────── */
.biz-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 720px) { .biz-grid { grid-template-columns: 1fr; } }

.biz-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.biz-icon {
  width: 52px;
  height: 52px;
  display: block;
  margin-bottom: 4px;
}
.biz-type {
  font-family: 'Space Grotesk', Georgia, serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}
.biz-who {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--text-muted);
  margin: 0;
}
.biz-problem-wrap,
.biz-solution-wrap {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.biz-problem-label,
.biz-solution-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.biz-problem {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}
.biz-solution {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}
.biz-cta {
  margin-top: auto;
  padding-top: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b55430;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: gap 0.15s ease, opacity 0.15s ease;
}
.biz-cta:hover { gap: 10px; opacity: 0.85; }

.biz-perks {
  margin-top: 40px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  padding: clamp(28px, 4vw, 40px) clamp(24px, 4vw, 48px);
}
.biz-perks-h {
  font-family: 'Space Grotesk', Georgia, serif;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  margin: 0 0 20px;
}
.biz-perks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px 32px;
}
.biz-perk {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14.5px;
  color: var(--text-secondary);
  line-height: 1.5;
}
.biz-check {
  color: #b55430;
  font-size: 18px;
  flex-shrink: 0;
}

/* ── MEASUREMENT ───────────────────────────────────────────── */
.measure-section {
  background: #15120e;
}
.measure-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
@media (max-width: 860px) { .measure-wrap { grid-template-columns: 1fr; } }

.measure-tag { color: #d9754a; }
.measure-headline { color: #f7f1ea; }
.measure-headline em { color: #d9754a; font-style: italic; }
.measure-sub { color: rgba(244, 237, 228, 0.65); max-width: 380px; }

.measure-metrics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.measure-metric:last-child:nth-child(odd) { grid-column: 1 / -1; justify-self: start; }

.measure-metric {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.measure-icon {
  width: 44px;
  height: 44px;
  display: block;
  opacity: 0.9;
  /* Engraving icons are brown-on-cream — tint them to cream on dark background */
  filter: invert(1) sepia(0.3) saturate(0.5) brightness(1.1);
}
.measure-label {
  font-size: 14px;
  font-weight: 500;
  color: rgba(244, 237, 228, 0.85);
  line-height: 1.4;
}

/* ── PRICING ───────────────────────────────────────────────── */
.pricing-section {
  background: #ae4828;
  padding: clamp(72px, 10vw, 108px) 0;
  position: relative;
  overflow: hidden;
}
.pricing-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #bc3433;
  -webkit-mask-image: url('/hero/pattern.png');
  mask-image: url('/hero/pattern.png');
  -webkit-mask-size: 520px;
  mask-size: 520px;
  mix-blend-mode: multiply;
  opacity: 0.5;
  pointer-events: none;
}
.pricing-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
}
.pricing-tag {
  display: inline-block;
  font-family: 'Space Grotesk', monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(253, 247, 241, 0.7);
  margin-bottom: 14px;
}
.pricing-headline {
  font-family: 'Space Grotesk', Georgia, serif;
  font-weight: 400;
  font-size: clamp(36px, 5vw, 60px);
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0;
}
.pricing-headline em { font-style: italic; color: #ffd3b6; }

.pricing-points {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.pricing-point {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;
  padding: 24px 22px;
  width: clamp(200px, 28vw, 240px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-align: center;
}
.pricing-icon {
  width: 52px;
  height: 52px;
  display: block;
  /* Cream-ify the engraving icons for the rust background */
  filter: invert(1) sepia(0.2) saturate(0.4) brightness(1.15);
  opacity: 0.9;
}
.pricing-point p {
  font-size: 14.5px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
}
.pricing-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 52px;
  padding: 0 30px;
  border-radius: 999px;
  background: #fdf7f1;
  color: #ae4828;
  font-size: 15.5px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.pricing-btn:hover { opacity: 0.92; transform: translateY(-1px); }

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
  font-family: 'Google Sans', sans-serif;
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
