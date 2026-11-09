<template>
  <div class="page" :class="dark ? 'is-dark' : 'is-light'">
    <!-- ── HERO (from the LinkedIn banner) ──────────────────────── -->
    <section class="hero" data-nav-over>
      <div class="hero-pattern" aria-hidden="true"></div>

      <!-- Flying-plane sky: plane streaks across the top, wave trails + a few clouds -->
      <div class="hero-sky" aria-hidden="true">
        <!-- <img src="/hero/cloud4.png" class="hs-cloud" style="left: 5%; top: 15%; width: 15%; animation-delay: -3s" /> -->
        <img
          src="/hero/cloud3.png"
          class="hs-cloud"
          style="right: 6%; top: 19%; width: 14%; animation-delay: -6s"
        />
        <img
          src="/hero/cloud1.png"
          class="hs-cloud"
          style="
            left: 11%;
            top: 72%;
            width: 14%;
            opacity: 0.85;
            animation-delay: -2s;
          "
        />
        <!-- <img src="/hero/arrow7.svg" class="hs-wave" style="left: 13%; top: 7%; width: 24%; animation-delay: -4s" />
        <img src="/hero/arrow8.svg" class="hs-wave" style="right: 18%; top: 9%; width: 20%; animation-delay: -1s" /> -->
        <img
          ref="planeEl"
          src="/hero/plane.png"
          class="hs-plane"
          style="width: 15%"
        />
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
            <span class="hero-dl-label"
              >For Startups, Businesses &amp; FMCG</span
            >
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

    <!-- ── PLATFORM ─────────────────────────────────────────────── -->
    <section class="plat-section">
      <div class="wrap">
        <div class="plat-header reveal">
          <div class="tag plat-tag">The platform</div>
          <h2 class="section-headline plat-headline">
            Five layers,<br /><em>one infrastructure.</em>
          </h2>
        </div>
      </div>
      <div class="plat-rows">
        <div
          v-for="(p, i) in pillars"
          :key="p.name"
          class="plat-row reveal"
          :class="{ 'plat-row--flip': i % 2 === 1 }"
          :style="{ '--i': i + 1 }"
        >
          <div class="plat-stage">
            <div class="plat-stage-halo" aria-hidden="true"></div>
            <div
              class="plat-stage-ring plat-stage-ring-1"
              aria-hidden="true"
            ></div>
            <div
              class="plat-stage-ring plat-stage-ring-2"
              aria-hidden="true"
            ></div>
            <img :src="p.icon" :alt="p.name" class="plat-row-icon" />
          </div>
          <div class="plat-body">
            <span class="plat-num">{{ String(i + 1).padStart(2, "0") }}</span>
            <h3 class="plat-row-name">{{ p.name }}</h3>
            <p class="plat-row-copy">{{ p.copy }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── AUDIENCE BY VENUE ──────────────────────────────────────── -->
    <section class="venue-section">
      <div class="wrap">
        <div class="venue-header">
          <div class="venue-header-left reveal">
            <div class="tag venue-tag">Audience by venue</div>
            <h2 class="section-headline venue-headline">
              Verified screens in the<br /><em>places Lagos spends its day.</em>
            </h2>
            <p class="section-sub venue-sub">
              Inventory organised by venue type. Buy an audience and a moment,
              not just a location.
            </p>
          </div>
          <div class="venue-live reveal" style="--i: 1">
            <span class="venue-live-dot" aria-hidden="true"></span>Live · Lagos
          </div>
        </div>
      </div>
      <!-- Full-bleed tower strip — no wrap constraint -->
      <div class="venue-towers">
        <div
          v-for="(v, i) in venues"
          :key="v.name"
          class="venue-tower reveal"
          :style="{ '--i': i + 1 }"
        >
          <div class="venue-tower-stage">
            <div class="venue-tower-glow" aria-hidden="true"></div>
            <img :src="v.icon" :alt="v.name" class="venue-tower-icon" />
          </div>
          <div class="venue-tower-info">
            <h3 class="venue-tower-name">{{ v.name }}</h3>
            <p class="venue-tower-who">{{ v.who }}</p>
            <p class="venue-tower-moment">{{ v.moment }}</p>
          </div>
        </div>
      </div>
      <div class="wrap">
        <div class="venue-chain reveal" style="--i: 2">
          <h3 class="venue-chain-h">Buy one venue, or a whole chain.</h3>
          <p class="venue-chain-p">
            Where a chain is on the network, one campaign can run in a single
            branch or across every location. Same screen standard, same verified
            reporting, reach that scales.
          </p>
        </div>
      </div>
    </section>

    <!-- ── FOR BUSINESSES ────────────────────────────────────────── -->
    <section class="biz-section">
      <div class="wrap">
        <div class="section-header reveal">
          <div class="tag">For businesses</div>
          <h2 class="section-headline">
            Buy physical media<br /><em>the way you buy digital.</em>
          </h2>
          <p class="section-sub">
            Any budget, live in 24 hours, verified. All use one wallet, the same
            screens and one report.
          </p>
        </div>
        <div class="biz-grid">
          <div
            v-for="(b, i) in businesses"
            :key="b.type"
            class="biz-card reveal"
            :style="{ '--i': i + 1 }"
          >
            <div class="biz-stage">
              <div class="biz-stage-glow" aria-hidden="true"></div>
              <div class="biz-stage-ring" aria-hidden="true"></div>
              <img :src="b.icon" :alt="b.type" class="biz-icon" />
            </div>
            <div class="biz-body">
              <div class="biz-title-row">
                <h3 class="biz-type">{{ b.type }}</h3>
                <span class="biz-num">{{
                  String(i + 1).padStart(2, "0")
                }}</span>
              </div>
              <p class="biz-who">{{ b.who }}</p>
              <div class="biz-block">
                <span class="biz-label">Today</span>
                <p class="biz-text">{{ b.problem }}</p>
              </div>
              <div class="biz-block">
                <span class="biz-label">With Mimuads</span>
                <p class="biz-text">{{ b.solution }}</p>
              </div>
              <a :href="b.ctaUrl" class="biz-cta"
                >{{ b.cta }}<i class="ph ph-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="biz-perks reveal" style="--i: 2">
          <h3 class="biz-perks-h">What every business gets</h3>
          <ul class="biz-perks-list">
            <li v-for="perk in bizPerks" :key="perk" class="biz-perk">
              <i class="ph ph-check-circle biz-check"></i
              ><span>{{ perk }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ── MEASUREMENT ───────────────────────────────────────────── -->
    <section class="measure-section">
      <div class="wrap">
        <div class="measure-head reveal">
          <div class="tag measure-tag">Measurement</div>
          <h2 class="section-headline measure-headline">
            See who saw it.<br /><em>Pay for what's verified.</em>
          </h2>
          <p class="section-sub measure-sub">
            Every campaign comes with a dashboard that shows real numbers, not
            estimates.
          </p>
        </div>
      </div>
      <!-- Full-bleed monument strip -->
      <div class="measure-strip">
        <div
          v-for="(m, i) in metrics"
          :key="m.label"
          class="measure-monument reveal"
          :style="{ '--i': i + 1 }"
        >
          <div class="measure-monument-stage">
            <div class="measure-monument-glow" aria-hidden="true"></div>
            <img :src="m.icon" :alt="m.label" class="measure-monument-icon" />
          </div>
          <span class="measure-monument-label">{{ m.label }}</span>
        </div>
      </div>
    </section>

    <!-- ── PRICING ───────────────────────────────────────────────── -->
    <section class="pricing-section">
      <div class="wrap pricing-wrap">
        <div class="pricing-head reveal">
          <div class="pricing-eyebrow">Pricing</div>
          <h2 class="pricing-headline">Start with <em>any budget.</em></h2>
        </div>
        <div class="pricing-points">
          <div
            v-for="(pt, i) in pricingPts"
            :key="pt.text"
            class="pricing-point reveal"
            :style="{ '--i': i + 1 }"
          >
            <div class="pricing-stage" aria-hidden="true">
              <div class="pricing-ring pricing-ring-1"></div>
              <div class="pricing-ring pricing-ring-2"></div>
              <div class="pricing-ring-core"></div>
            </div>
            <img :src="pt.icon" :alt="pt.alt" class="pricing-icon" />
            <p>{{ pt.text }}</p>
          </div>
        </div>
        <div class="pricing-cta reveal" style="--i: 4">
          <a :href="signupUrl('pricing')" class="pricing-btn">
            <span>Start advertising</span><i class="ph ph-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ── FAQ ────────────────────────────────────────────────── -->
    <section id="faq" class="section">
      <div class="wrap faq-grid">
        <!-- Intro -->
        <div class="faq-intro">
          <div class="tag">FAQ</div>
          <h2 class="section-headline">
            Questions<br /><em>&amp; answers.</em>
          </h2>
          <p class="faq-intro-sub">
            Everything about buying, hosting, verification and compliance on
            Mimuads.
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
            <button
              class="faq-q"
              :aria-expanded="item.open"
              @click="item.open = !item.open"
            >
              <span class="faq-qtext">{{ item.q }}</span>
              <span class="faq-icon"
                ><i class="ph" :class="item.open ? 'ph-minus' : 'ph-plus'"></i
              ></span>
            </button>
            <div class="faq-a">
              <div class="faq-a-inner">
                <p>{{ item.a }}</p>
              </div>
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
const planeEl = ref(null);
let planeTimer = null;
let planeAnim = null;
let planeDead = false;
const rnd = (a, b) => a + Math.random() * (b - a);

function flyPlane() {
  const el = planeEl.value;
  if (!el || planeDead) return;
  const vw = window.innerWidth || 1440;
  const vh = window.innerHeight || 820;
  // Straight diagonal: in from the bottom-left, slow at the centre, out the top-right.
  const sx = -0.25 * vw,
    sy = rnd(1.02, 1.22) * vh; // off-screen bottom-left
  const ex = rnd(1.16, 1.3) * vw,
    ey = -0.25 * vh; // off-screen top-right
  const mx = (sx + ex) / 2,
    my = (sy + ey) / 2; // midpoint ≈ centre → the slow point
  // Nose points up-right by default; align it to the BL→TR heading (front-first both ways).
  const rotZ = (Math.atan2(ey - sy, ex - sx) * 180) / Math.PI + 45;
  const dur = rnd(3800, 5200);

  planeAnim = el.animate(
    [
      {
        offset: 0,
        transform: `translate(${sx}px, ${sy}px) rotate(${rotZ}deg)`,
        easing: "cubic-bezier(0.2, 0.7, 0.35, 1)",
      }, // rush in → decelerate to centre
      {
        offset: 0.5,
        transform: `translate(${mx}px, ${my}px) rotate(${rotZ}deg)`,
        easing: "cubic-bezier(0.6, 0, 0.8, 0.35)",
      }, // slow at centre → accelerate out
      {
        offset: 1,
        transform: `translate(${ex}px, ${ey}px) rotate(${rotZ}deg)`,
      }, // off the top-right
    ],
    { duration: dur, fill: "forwards" },
  );
  planeAnim.onfinish = () => {
    if (planeDead) return;
    planeTimer = setTimeout(flyPlane, rnd(300, 1500)); // unpredictable gap before the next pass
  };
}

onMounted(() => {
  const reduce = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  )?.matches;
  if (!reduce) planeTimer = setTimeout(flyPlane, 250);

  if (typeof IntersectionObserver !== "undefined") {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
  } else {
    document
      .querySelectorAll(".reveal")
      .forEach((el) => el.classList.add("revealed"));
  }
});
onBeforeUnmount(() => {
  planeDead = true;
  clearTimeout(planeTimer);
  planeAnim?.cancel();
});

const pillars = [
  {
    name: "Mimuads Studio",
    copy: "Build video, image and motion-graphic creative in the app. No designer or agency needed.",
    icon: "/icons/riso/studio.svg",
  },
  {
    name: "ML Intelligence",
    copy: "Matches every campaign to a screen using venue type, location, time of day, creative format and the audience that venue draws.",
    icon: "/icons/riso/ml.svg",
  },
  {
    name: "Agentic Player",
    copy: "Schedules, monitors, caches and reports on its own. Keeps playing through internet drops and restarts after power cuts.",
    icon: "/icons/riso/player.svg",
  },
  {
    name: "Verified Attention",
    copy: "Computer vision confirms real human impressions and logs proof of play for every campaign.",
    icon: "/icons/riso/verified.svg",
  },
  {
    name: "Proximity conversion",
    copy: "Sends offers to opted-in phones near the screen, linking straight to the advertiser's page, app or offer.",
    icon: "/icons/riso/proximity.svg",
  },
];

const venues = [
  {
    name: "Airports",
    icon: "/icons/riso/airport.svg",
    who: "Business and leisure travellers",
    moment: "Long waits before departure, high intent",
  },
  {
    name: "Train stations",
    icon: "/icons/riso/train-station.svg",
    who: "Daily commuters",
    moment: "Repeat exposure on the same route",
  },
  {
    name: "Pharmacies",
    icon: "/icons/riso/pharmacy.svg",
    who: "Health-conscious shoppers and families",
    moment: "Waiting for advice or a prescription, trusted setting",
  },
  {
    name: "Supermarkets",
    icon: "/icons/riso/supermarket.svg",
    who: "Households shopping",
    moment: "Point of purchase",
  },
  {
    name: "Salons",
    icon: "/icons/riso/salon.svg",
    who: "Beauty and grooming customers",
    moment: "Seated for long stretches, relaxed attention",
  },
  {
    name: "Restaurants",
    icon: "/icons/riso/restaurant.svg",
    who: "Workers, students and families",
    moment: "Seated, waiting and eating",
  },
  {
    name: "Malls",
    icon: "/icons/riso/mall.svg",
    who: "Shoppers, families and groups",
    moment: "Browsing with buying intent",
  },
];

const businesses = [
  {
    type: "SMBs",
    icon: "/icons/riso/smb.svg",
    who: "Pharmacies, salons, restaurants, shops and service businesses.",
    problem:
      "Agencies and minimum budgets price them out, and flyers can't be measured.",
    solution:
      "Launch from the mobile app. Verify your business, fund your wallet, build creative in Mimuads Studio, choose screens near your customers and go live in 24 hours.",
    cta: "Start advertising",
    ctaUrl: "https://apps.apple.com/app/mimuads/id6775953486",
  },
  {
    type: "Startups",
    icon: "/icons/riso/startup.svg",
    who: "Fintechs, delivery apps, consumer apps and marketplaces.",
    problem:
      "They need users in specific neighbourhoods and can't prove that offline spend works.",
    solution:
      "Run app-download campaigns on screens in the venue types and areas where your users are. Proximity offers send a tap-to-download link to phones nearby.",
    cta: "Launch a campaign",
    ctaUrl: signupUrl("biz-startup"),
  },
  {
    type: "Agencies",
    icon: "/icons/riso/agency.svg",
    who: "Media and creative agencies buying for clients.",
    problem:
      "Out-of-home buying is manual, one vendor at a time, with estimated reach.",
    solution:
      "Plan and fund campaigns across venue types and areas from one dashboard, and report verified results to every client. API access is coming for programmatic buying.",
    cta: "Book a demo",
    ctaUrl: "/contact",
  },
  {
    type: "FMCG brands",
    icon: "/icons/riso/fmcg.svg",
    who: "Consumer goods brands.",
    problem:
      "They want a presence where their products are bought, and proof that it was seen.",
    solution:
      "Target pharmacies, supermarkets and their chains by location and audience, and pair the ad with a voucher sent to nearby phones. Get verified impressions by venue.",
    cta: "Book a demo",
    ctaUrl: "/contact",
  },
];

const bizPerks = [
  "One wallet, any budget, no minimum spend",
  "Mimuads Studio for image, video and motion-graphic creative",
  "Screens chosen by venue type, location and footfall density",
  "Live in 24 hours",
  "Verified impressions and proof of play",
  "Proximity offers that turn attention into action",
];

const metrics = [
  {
    label: "Verified impressions",
    icon: "/icons/engraving/computer-vision.svg",
  },
  { label: "Dwell time", icon: "/icons/engraving/dwell-time.svg" },
  { label: "Results by venue", icon: "/icons/engraving/screen-map.svg" },
  { label: "Spend against budget", icon: "/icons/engraving/report.svg" },
  { label: "Proof of play", icon: "/icons/engraving/proof-of-play.svg" },
];

const pricingPts = [
  {
    icon: "/icons/engraving/top-up.svg",
    alt: "Top up",
    text: "Fund your wallet with any amount.",
  },
  {
    icon: "/icons/engraving/receipt.svg",
    alt: "Receipt",
    text: "You pay per verified impression.",
  },
  {
    icon: "/icons/engraving/weekly-payout.svg",
    alt: "Weekly payout",
    text: "Venue owners are paid weekly from campaign revenue.",
  },
];

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
  font-family: "Space Grotesk", monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 20px;
}

.section-headline {
  font-family: "Space Grotesk", Georgia, serif;
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
  font-family: "Space Grotesk", Georgia, serif;
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
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
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
.hero-sky img {
  position: absolute;
}
.hs-cloud {
  animation: hs-drift 12s ease-in-out infinite;
}
.hs-wave {
  opacity: 0.85;
  animation: hs-drift 10s ease-in-out infinite;
}
.hs-plane {
  left: 0;
  top: 0;
  filter: drop-shadow(0 14px 22px rgba(42, 14, 5, 0.35));
  transform: translate(-30vw, 75vh); /* parked off-screen until JS flies it */
  will-change: transform;
}
@keyframes hs-drift {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-9px);
  }
}
@media (prefers-reduced-motion: reduce) {
  .hs-cloud,
  .hs-wave {
    animation: none;
  }
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
  font-family: "Space Grotesk", monospace;
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b55430;
  margin-bottom: 20px;
}

.hero-headline {
  font-family: "Space Grotesk", Georgia, serif;
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

/* ── SCROLL REVEAL ─────────────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--i, 0) * 85ms),
    transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) calc(var(--i, 0) * 85ms);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ── PLATFORM ──────────────────────────────────────────────── */
.plat-section {
  background: #0e0d0b;
  padding: clamp(80px, 11vw, 120px) 0 0;
}
.plat-header {
  margin-bottom: clamp(56px, 7vw, 80px);
}
.plat-tag {
  color: #d9754a;
}
.plat-headline {
  color: #f7f1ea;
  margin: 0;
}
.plat-headline em {
  color: #d9754a;
  font-style: italic;
}

/* Alternating full-width feature rows */
.plat-rows {
  display: flex;
  flex-direction: column;
}

.plat-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  transition: background 0.4s ease;
}
.plat-row:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.plat-row:hover {
  background: rgba(255, 255, 255, 0.015);
}
.plat-row--flip .plat-stage {
  order: 2;
}
.plat-row--flip .plat-body {
  order: 1;
}

/* Stage — the icon side, cream so riso icon backgrounds blend */
.plat-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: linear-gradient(160deg, #fdf8f3 0%, #f0e4d4 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}
.plat-row--flip .plat-stage {
  border-right: none;
  border-left: 1px solid rgba(255, 255, 255, 0.06);
}
.plat-stage-halo {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(181, 84, 48, 0.1) 0%,
    transparent 65%
  );
  animation: haloPulse 4s ease-in-out infinite;
  pointer-events: none;
}
.plat-stage-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(181, 84, 48, 0.15);
  pointer-events: none;
}
.plat-stage-ring-1 {
  width: 220px;
  height: 220px;
  animation: ringOrbit 12s linear infinite;
}
.plat-stage-ring-2 {
  width: 300px;
  height: 300px;
  border-style: dashed;
  border-color: rgba(181, 84, 48, 0.09);
  animation: ringOrbit 20s linear infinite reverse;
}

.plat-row-icon {
  position: relative;
  z-index: 1;
  width: 160px;
  height: 160px;
  display: block;
  transition:
    filter 0.4s ease,
    transform 0.4s ease;
  filter: drop-shadow(0 8px 32px rgba(0, 0, 0, 0.5));
}
.plat-row:hover .plat-row-icon {
  filter: drop-shadow(0 0 24px rgba(181, 84, 48, 0.5))
    drop-shadow(0 8px 32px rgba(0, 0, 0, 0.5));
  transform: scale(1.06) translateY(-6px);
}

/* Body — the text side */
.plat-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px clamp(32px, 5vw, 72px);
  gap: 16px;
}
.plat-num {
  font-family: "Space Grotesk", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: rgba(181, 84, 48, 0.4);
}
.plat-row-name {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 400;
  letter-spacing: -0.03em;
  color: #f7f1ea;
  margin: 0;
  line-height: 1.1;
}
.plat-row-copy {
  font-size: clamp(14px, 1.4vw, 16px);
  line-height: 1.7;
  color: rgba(244, 237, 228, 0.5);
  margin: 0;
  max-width: 440px;
}

@keyframes haloPulse {
  0%,
  100% {
    transform: scale(0.85);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.15);
    opacity: 1;
  }
}
@keyframes ringOrbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 760px) {
  .plat-row {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  .plat-row--flip .plat-stage {
    order: 0;
    border-left: none;
  }
  .plat-row--flip .plat-body {
    order: 1;
  }
  .plat-stage {
    min-height: 260px;
    padding: 40px;
  }
  .plat-row-icon {
    width: 120px;
    height: 120px;
  }
  .plat-stage-ring-1 {
    width: 160px;
    height: 160px;
  }
  .plat-stage-ring-2 {
    width: 220px;
    height: 220px;
  }
  .plat-body {
    padding: 36px 24px;
  }
}

/* ── AUDIENCE BY VENUE ─────────────────────────────────────── */
.venue-section {
  background: #fdf8f3;
  padding: clamp(80px, 11vw, 120px) 0;
}
.venue-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: clamp(44px, 6vw, 64px);
}
.venue-tag {
  color: #b55430;
}
.venue-headline {
  color: #0e0d0b;
  margin: 0;
}
.venue-headline em {
  color: #b55430;
  font-style: italic;
}
.venue-sub {
  color: #5e574f;
  margin-top: 16px;
}

.venue-live {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 999px;
  padding: 9px 18px;
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #5e574f;
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 10px;
}
.venue-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.8);
  animation: livePulse 2s ease-in-out infinite;
}
@keyframes livePulse {
  0%,
  100% {
    box-shadow: 0 0 6px rgba(34, 197, 94, 0.7);
  }
  50% {
    box-shadow: 0 0 16px rgba(34, 197, 94, 1);
  }
}

/* 7-tower strip — full bleed, horizontally scrollable on mobile */
.venue-towers {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  padding: 0 clamp(20px, 5vw, 48px);
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .venue-towers {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 560px) {
  .venue-towers {
    grid-template-columns: repeat(2, 1fr);
  }
}

.venue-tower {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  cursor: default;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}
.venue-tower:hover {
  border-color: rgba(181, 84, 48, 0.3);
  box-shadow: 0 16px 40px -12px rgba(181, 84, 48, 0.18);
  transform: translateY(-4px);
}
.venue-tower-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px 16px 20px;
  background: linear-gradient(160deg, #fdf8f3 0%, #f7ede2 100%);
  overflow: hidden;
  min-height: 160px;
}
.venue-tower-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(181, 84, 48, 0.1) 0%,
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.35s ease;
  animation: haloPulse 4s ease-in-out infinite;
}
.venue-tower:hover .venue-tower-glow {
  opacity: 1;
}
.venue-tower-icon {
  position: relative;
  z-index: 1;
  width: 96px;
  height: 96px;
  display: block;
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}
.venue-tower:hover .venue-tower-icon {
  transform: scale(1.1) translateY(-4px);
  filter: drop-shadow(0 8px 16px rgba(181, 84, 48, 0.25));
}
.venue-tower-info {
  padding: 14px 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
}
.venue-tower-name {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #0e0d0b;
  margin: 0;
}
.venue-tower-who {
  font-size: 11.5px;
  line-height: 1.5;
  color: #5e574f;
  margin: 0;
}
.venue-tower-moment {
  font-size: 11px;
  line-height: 1.4;
  color: #a89f94;
  margin: 0;
  font-style: italic;
}

.venue-chain {
  margin-top: 24px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-left: 3px solid #b55430;
  border-radius: 20px;
  padding: clamp(24px, 4vw, 36px) clamp(20px, 4vw, 44px);
}
.venue-chain-h {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: clamp(18px, 2.2vw, 24px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #0e0d0b;
  margin: 0 0 10px;
}
.venue-chain-p {
  font-size: 14.5px;
  line-height: 1.65;
  color: #5e574f;
  max-width: 640px;
  margin: 0;
}

/* ── FOR BUSINESSES ────────────────────────────────────────── */
.biz-section {
  padding: clamp(80px, 11vw, 120px) 0;
  background: #f4ede4;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.biz-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
@media (max-width: 720px) {
  .biz-grid {
    grid-template-columns: 1fr;
  }
}

.biz-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}
.biz-card:hover {
  border-color: rgba(181, 84, 48, 0.3);
  box-shadow: 0 20px 56px -20px rgba(181, 84, 48, 0.2);
  transform: translateY(-3px);
}

/* Icon stage — takes top half of card */
.biz-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  background: linear-gradient(160deg, #fdf8f3 0%, #f0e4d4 100%);
  overflow: hidden;
}
.biz-stage-glow {
  position: absolute;
  inset: -30px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(181, 84, 48, 0.12) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: haloPulse 4s ease-in-out infinite;
}
.biz-card:hover .biz-stage-glow {
  opacity: 1;
}
.biz-stage-ring {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid rgba(181, 84, 48, 0.1);
  animation: ringOrbit 16s linear infinite;
}
.biz-icon {
  position: relative;
  z-index: 1;
  width: 128px;
  height: 128px;
  display: block;
  transition:
    transform 0.4s ease,
    filter 0.4s ease;
}
.biz-card:hover .biz-icon {
  transform: scale(1.08) translateY(-6px);
  filter: drop-shadow(0 12px 24px rgba(181, 84, 48, 0.3));
}

/* Text body */
.biz-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 28px 32px;
  flex: 1;
}
.biz-title-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.biz-num {
  font-family: "Space Grotesk", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: rgba(181, 84, 48, 0.35);
}
.biz-type {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: clamp(22px, 2.5vw, 28px);
  font-weight: 400;
  letter-spacing: -0.025em;
  color: #0e0d0b;
  margin: 0;
}
.biz-who {
  font-size: 13px;
  line-height: 1.55;
  color: #a89f94;
  margin: 0;
}
.biz-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.biz-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a89f94;
}
.biz-text {
  font-size: 13.5px;
  line-height: 1.6;
  color: #5e574f;
  margin: 0;
}
.biz-cta {
  margin-top: auto;
  padding-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b55430;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: gap 0.2s ease;
}
.biz-cta:hover {
  gap: 10px;
}

.biz-perks {
  margin-top: 20px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 24px;
  padding: clamp(28px, 4vw, 40px) clamp(24px, 4vw, 48px);
}
.biz-perks-h {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: clamp(18px, 2vw, 22px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #0e0d0b;
  margin: 0 0 20px;
}
.biz-perks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px 32px;
}
.biz-perk {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #5e574f;
  line-height: 1.5;
}
.biz-check {
  color: #b55430;
  font-size: 18px;
  flex-shrink: 0;
}

/* ── MEASUREMENT ───────────────────────────────────────────── */
.measure-section {
  background: #fdf8f3;
  padding: clamp(80px, 11vw, 120px) 0;
}
.measure-head {
  margin-bottom: clamp(44px, 6vw, 64px);
}
.measure-tag {
  color: #b55430;
}
.measure-headline {
  color: #0e0d0b;
  margin: 0;
}
.measure-headline em {
  color: #b55430;
  font-style: italic;
}
.measure-sub {
  color: #5e574f;
  margin-top: 16px;
  max-width: 500px;
}

/* 5-monument horizontal strip */
.measure-strip {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 0 clamp(20px, 5vw, 48px);
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 900px) {
  .measure-strip {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 560px) {
  .measure-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}

.measure-monument {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  cursor: default;
  transition:
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}
.measure-monument:hover {
  border-color: rgba(181, 84, 48, 0.3);
  box-shadow: 0 16px 40px -12px rgba(181, 84, 48, 0.18);
  transform: translateY(-4px);
}
.measure-monument-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px 24px;
  background: linear-gradient(160deg, #fdf8f3 0%, #f0e8d8 100%);
  min-height: 170px;
  overflow: hidden;
}
.measure-monument-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 60%,
    rgba(181, 84, 48, 0.1) 0%,
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}
.measure-monument:hover .measure-monument-glow {
  opacity: 1;
}
.measure-monument-icon {
  position: relative;
  z-index: 1;
  width: 88px;
  height: 88px;
  display: block;
  /* Engraving icons are brown-on-cream — natural on this background */
  transition:
    transform 0.35s ease,
    filter 0.35s ease;
}
.measure-monument:hover .measure-monument-icon {
  transform: scale(1.1) translateY(-4px);
  filter: drop-shadow(0 8px 16px rgba(181, 84, 48, 0.2));
}
.measure-monument-label {
  padding: 14px 16px 18px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
  color: #0e0d0b;
  letter-spacing: -0.005em;
}

/* ── PRICING ───────────────────────────────────────────────── */
.pricing-section {
  background: #ae4828;
  padding: clamp(80px, 11vw, 120px) 0;
  position: relative;
  overflow: hidden;
}
.pricing-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: #bc3433;
  -webkit-mask-image: url("/hero/pattern.png");
  mask-image: url("/hero/pattern.png");
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
  gap: 52px;
}
.pricing-eyebrow {
  font-family: "Space Grotesk", monospace;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(253, 247, 241, 0.6);
  margin-bottom: 16px;
}
.pricing-headline {
  font-family: "Space Grotesk", Georgia, serif;
  font-weight: 400;
  font-size: clamp(40px, 5.5vw, 66px);
  line-height: 1.06;
  letter-spacing: -0.03em;
  color: #fff;
  margin: 0;
}
.pricing-headline em {
  font-style: italic;
  color: #ffd3b6;
}

.pricing-points {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}

.pricing-point {
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 24px;
  padding: 36px 24px 28px;
  width: clamp(190px, 26vw, 230px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  overflow: hidden;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}
.pricing-point:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
}

/* Stage: 3 rings + floating icon, no extra div layer */
.pricing-stage {
  position: relative;
  width: 100px;
  height: 100px;
  flex-shrink: 0;
}
.pricing-ring {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.pricing-ring-1 {
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.22);
  animation: ringOrbit 9s linear infinite;
}
.pricing-ring-2 {
  inset: 10px;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  animation: ringOrbit 6s linear infinite reverse;
}
.pricing-ring-core {
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
}
.pricing-icon {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;
  display: block;
  filter: invert(1) sepia(0.15) saturate(0.4) brightness(1.1);
  animation: iconFloat 3.8s ease-in-out infinite;
}
.pricing-point:nth-child(2) .pricing-icon {
  animation-delay: -1.3s;
}
.pricing-point:nth-child(3) .pricing-icon {
  animation-delay: -2.6s;
}
@keyframes iconFloat {
  0%,
  100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-7px);
  }
}
.pricing-point p {
  font-size: 15px;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.84);
  margin: 0;
}

.pricing-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 56px;
  padding: 0 36px;
  border-radius: 999px;
  background: #fdf7f1;
  color: #ae4828;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}
.pricing-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 35%,
    rgba(255, 255, 255, 0.45) 50%,
    transparent 65%
  );
  transform: translateX(-100%);
  animation: btnShimmer 3.5s ease-in-out 1.5s infinite;
}
.pricing-btn:hover {
  opacity: 0.92;
  transform: translateY(-2px);
}
@keyframes btnShimmer {
  0%,
  100% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(100%);
  }
}

/* ── FAQ ────────────────────────────────────────────────────── */
.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: start;
}
@media (min-width: 900px) {
  .faq-grid {
    grid-template-columns: 0.82fr 1.18fr;
  }
  .faq-intro {
    position: sticky;
    top: 104px;
  }
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
.faq-contact span {
  color: #b55430;
  font-weight: 600;
}
.faq-contact:hover span {
  opacity: 0.8;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq-item {
  border: 1px solid var(--card-border);
  border-radius: 16px;
  background: var(--card-bg);
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}
.faq-item:hover {
  border-color: rgba(181, 84, 48, 0.35);
}
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
  font-family: "Google Sans", sans-serif;
  font-size: 15.5px;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.4;
  color: var(--text-primary);
  transition: color 0.15s ease;
}
.faq-open .faq-qtext {
  color: #b55430;
}

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
  transition:
    background 0.18s ease,
    color 0.18s ease;
}
.faq-open .faq-icon {
  background: #b55430;
  color: #fff;
}

/* Smooth auto-height reveal (grid-rows 0fr → 1fr) */
.faq-a {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.faq-open .faq-a {
  grid-template-rows: 1fr;
}
.faq-a-inner {
  overflow: hidden;
}
.faq-a-inner p {
  padding: 0 22px 20px;
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-secondary);
}
</style>
