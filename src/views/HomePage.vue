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
          <h2 class="section-headline plat-headline">Five layers, one <em>infrastructure.</em></h2>
        </div>
        <div class="plat-cards">
          <div
            v-for="(p, i) in pillars"
            :key="p.name"
            class="plat-card reveal"
            :style="{ '--i': i + 1, '--rx': p.rx, '--ry': p.ry, '--rz': p.rz }"
            :ref="el => { if (el) platCardEls[i] = el }"
            @mousemove="tiltCard($event, i)"
            @mouseleave="resetCard(i)"
          >
            <div class="plat-card-stage">
              <div class="plat-card-halo" aria-hidden="true"></div>
              <img :src="p.icon" :alt="p.name" class="plat-card-icon" />
            </div>
            <div class="plat-card-body">
              <span class="plat-card-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="plat-card-name">{{ p.name }}</h3>
              <p class="plat-card-copy">{{ p.copy }}</p>
            </div>
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
        </div>
      </div>
      <!-- Full-bleed infinite marquee rivers -->
      <div class="venue-marquee-outer">
        <div class="venue-mf venue-mf--l" aria-hidden="true"></div>
        <div class="venue-mf venue-mf--r" aria-hidden="true"></div>
        <div class="venue-marquee-track venue-marquee-track--fwd">
          <div v-for="(v, i) in [...venues, ...venues]" :key="'vf' + i" class="venue-tile">
            <img :src="v.icon" :alt="v.name" class="venue-tile-icon" />
            <span class="venue-tile-name">{{ v.name }}</span>
          </div>
        </div>
        <div class="venue-marquee-track venue-marquee-track--rev">
          <div v-for="(v, i) in [...venues, ...venues]" :key="'vr' + i" class="venue-tile venue-tile--dim">
            <img :src="v.icon" :alt="v.name" class="venue-tile-icon" />
            <span class="venue-tile-name">{{ v.name }}</span>
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
      </div>

      <!-- Full-bleed alternating feature rows -->
      <div
        v-for="(b, i) in businesses"
        :key="b.type"
        class="biz-feature"
        :class="i % 2 === 1 ? 'biz-feature--flip' : ''"
      >
        <div class="biz-feat-vis reveal" :style="{ '--i': 1 }">
          <div class="biz-feat-ring biz-feat-ring--outer" aria-hidden="true"></div>
          <div class="biz-feat-ring biz-feat-ring--inner" aria-hidden="true"></div>
          <img :src="b.icon" :alt="b.type" class="biz-feat-icon" />
        </div>
        <div class="biz-feat-body reveal" :style="{ '--i': 2 }">
          <span class="biz-feat-num">{{ String(i + 1).padStart(2, "0") }}</span>
          <h3 class="biz-feat-type">{{ b.type }}</h3>
          <p class="biz-feat-who">{{ b.who }}</p>
          <div class="biz-feat-cols">
            <div class="biz-feat-block">
              <span class="biz-label">Today</span>
              <p class="biz-feat-p">{{ b.problem }}</p>
            </div>
            <div class="biz-feat-block">
              <span class="biz-label">With Mimuads</span>
              <p class="biz-feat-p">{{ b.solution }}</p>
            </div>
          </div>
          <a :href="b.ctaUrl" class="biz-cta"
            >{{ b.cta }}<i class="ph ph-arrow-right"></i
          ></a>
        </div>
      </div>

      <div class="wrap">
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
      <!-- Full-bleed monument strip with scan lines + live stats -->
      <div class="measure-strip">
        <div
          v-for="(m, i) in metrics"
          :key="m.label"
          class="measure-monument reveal"
          :style="{ '--i': i + 1 }"
        >
          <div class="measure-monument-stage">
            <div class="measure-monument-glow" aria-hidden="true"></div>
            <div class="measure-scan" aria-hidden="true"></div>
            <img :src="m.icon" :alt="m.label" class="measure-monument-icon" />
          </div>
          <div class="measure-monument-footer">
            <span class="measure-stat">{{ m.stat }}</span>
            <span class="measure-monument-label">{{ m.label }}</span>
          </div>
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

/* 3-D tilt on platform cards */
const platCardEls = []
function tiltCard(e, i) {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return
  const el = platCardEls[i]
  if (!el) return
  const { left, top, width, height } = el.getBoundingClientRect()
  const x = (e.clientX - left) / width - 0.5
  const y = (e.clientY - top) / height - 0.5
  el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateY(-10px) scale(1.02)`
  el.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease'
}
function resetCard(i) {
  const el = platCardEls[i]
  if (!el) return
  el.style.transform = ''
  el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease'
}

const pillars = [
  {
    name: "Mimuads Studio",
    copy: "Build video, image and motion-graphic creative in the app. No designer or agency needed.",
    icon: "/icons/riso/studio.svg",
    rx: "-110px", ry: "90px", rz: "-7deg",
  },
  {
    name: "ML Intelligence",
    copy: "Matches every campaign to a screen using venue type, location, time of day, creative format and the audience that venue draws.",
    icon: "/icons/riso/ml.svg",
    rx: "30px", ry: "-120px", rz: "5deg",
  },
  {
    name: "Agentic Player",
    copy: "Schedules, monitors, caches and reports on its own. Keeps playing through internet drops and restarts after power cuts.",
    icon: "/icons/riso/player.svg",
    rx: "0px", ry: "80px", rz: "0deg",
  },
  {
    name: "Verified Attention",
    copy: "Computer vision confirms real human impressions and logs proof of play for every campaign.",
    icon: "/icons/riso/verified.svg",
    rx: "120px", ry: "-80px", rz: "6deg",
  },
  {
    name: "Proximity conversion",
    copy: "Sends offers to opted-in phones near the screen, linking straight to the advertiser's page, app or offer.",
    icon: "/icons/riso/proximity.svg",
    rx: "90px", ry: "90px", rz: "-5deg",
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
  { label: "Verified impressions", icon: "/icons/engraving/computer-vision.svg", stat: "1,284" },
  { label: "Avg dwell time", icon: "/icons/engraving/dwell-time.svg", stat: "4:12" },
  { label: "Results by venue", icon: "/icons/engraving/screen-map.svg", stat: "7 types" },
  { label: "Spend vs budget", icon: "/icons/engraving/report.svg", stat: "98.6%" },
  { label: "Proof of play", icon: "/icons/engraving/proof-of-play.svg", stat: "100%" },
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
.plat-section { background: #fdf8f3; padding: clamp(80px, 11vw, 120px) 0; }
.plat-header { margin-bottom: clamp(48px, 6vw, 72px); }
.plat-tag { color: #b55430; }
.plat-headline { color: #0e0d0b; margin: 0; }
.plat-headline em { color: #b55430; font-style: italic; }

.plat-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
@media (max-width: 1100px) { .plat-cards { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 600px)  { .plat-cards { grid-template-columns: repeat(2, 1fr); } }

/* Directional fly-in per card */
.plat-card.reveal:not(.revealed) {
  opacity: 0;
  transform: translate(var(--rx, 0px), var(--ry, 60px)) scale(0.72) rotate(var(--rz, 0deg));
  filter: blur(6px);
}
.plat-card.reveal.revealed {
  opacity: 1;
  transform: none;
  filter: none;
  transition: opacity 0.75s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
  transition-delay: calc(var(--i, 0) * 130ms);
}

.plat-card {
  border-radius: 28px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: default;
  will-change: transform;
  transition: box-shadow 0.5s ease, border-color 0.5s ease;
}
.plat-card:hover {
  border-color: rgba(181, 84, 48, 0.22);
  box-shadow: 0 28px 64px -20px rgba(181, 84, 48, 0.22), 0 8px 24px -8px rgba(0, 0, 0, 0.08);
}
.plat-card-stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  background: linear-gradient(160deg, #fdf8f3 0%, #f0e4d4 100%);
  overflow: hidden;
}
.plat-card-halo {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 55%, rgba(181, 84, 48, 0.13) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: haloPulse 4s ease-in-out infinite;
}
.plat-card:hover .plat-card-halo { opacity: 1; }
.plat-card-icon {
  position: relative;
  z-index: 1;
  width: 200px;
  height: 200px;
  display: block;
  transition: filter 0.4s ease;
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.08));
}
.plat-card:hover .plat-card-icon {
  filter: drop-shadow(0 10px 28px rgba(181, 84, 48, 0.22)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.06));
}
.plat-card-body { padding: 18px 20px 24px; display: flex; flex-direction: column; gap: 7px; }
.plat-card-num { font-family: "Space Grotesk", monospace; font-size: 10px; font-weight: 700; letter-spacing: 0.14em; color: rgba(181, 84, 48, 0.4); }
.plat-card-name { font-family: "Space Grotesk", Georgia, serif; font-size: 15.5px; font-weight: 500; letter-spacing: -0.015em; color: #0e0d0b; margin: 0; line-height: 1.2; }
.plat-card-copy { font-size: 12.5px; line-height: 1.65; color: #5e574f; margin: 0; }

@keyframes haloPulse { 0%, 100% { transform: scale(0.8); opacity: 0.7; } 50% { transform: scale(1.2); opacity: 1; } }
@keyframes ringOrbit { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* ── AUDIENCE BY VENUE ─────────────────────────────────────── */
.venue-section {
  background: #fdf8f3;
  padding-top: clamp(80px, 10vw, 120px);
  padding-bottom: clamp(60px, 8vw, 100px);
  overflow: hidden;
}
.venue-header { margin-bottom: clamp(32px, 5vw, 56px); }
.venue-tag { color: #b55430; }
.venue-headline { color: #0e0d0b; }
.venue-headline em { color: #b55430; font-style: italic; }
.venue-sub { color: #5e574f; max-width: 480px; }

/* Marquee */
.venue-marquee-outer {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0 56px;
}
.venue-mf {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  z-index: 2;
  pointer-events: none;
}
.venue-mf--l { left: 0; background: linear-gradient(90deg, #fdf8f3 30%, transparent 100%); }
.venue-mf--r { right: 0; background: linear-gradient(-90deg, #fdf8f3 30%, transparent 100%); }
.venue-marquee-track {
  display: flex;
  gap: 16px;
  width: max-content;
  animation: marquee-fwd 36s linear infinite;
}
.venue-marquee-track--rev { animation: marquee-fwd 42s linear infinite reverse; }
@media (prefers-reduced-motion: reduce) {
  .venue-marquee-track, .venue-marquee-track--rev { animation-play-state: paused; }
}

.venue-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 28px 22px 20px;
  background: #fff;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  min-width: 158px;
  flex-shrink: 0;
  cursor: default;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.venue-tile:hover {
  border-color: rgba(181, 84, 48, 0.2);
  box-shadow: 0 10px 30px rgba(181, 84, 48, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);
  transform: translateY(-6px);
}
.venue-tile--dim { opacity: 0.65; }
.venue-tile-icon { width: 120px; height: 120px; display: block; }
.venue-tile-name {
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #0e0d0b;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
}
@keyframes marquee-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* Chain */
.venue-chain {
  margin-top: 8px;
  max-width: 580px;
  padding: 36px 40px;
  background: #fff;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
.venue-chain-h {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0e0d0b;
  margin: 0 0 10px;
}
.venue-chain-p {
  font-size: 14px;
  line-height: 1.7;
  color: #5e574f;
  margin: 0;
}

/* ── FOR BUSINESSES ────────────────────────────────────────── */
.biz-section { background: #faf4ed; }
.biz-section .section-header { max-width: 640px; padding-bottom: clamp(0px, 2vw, 16px); }

/* Full-bleed feature rows */
.biz-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 68vh;
  padding: clamp(60px, 8vw, 100px) clamp(32px, 7vw, 110px);
  gap: clamp(40px, 6vw, 80px);
  border-top: 1px solid rgba(0, 0, 0, 0.07);
}
.biz-feature--flip .biz-feat-vis { order: 2; }
.biz-feature--flip .biz-feat-body { order: 1; }

/* Directional reveal by orientation */
.biz-feature:not(.biz-feature--flip) .biz-feat-vis.reveal:not(.revealed) {
  opacity: 0;
  transform: translateX(-110px) scale(0.78);
  filter: blur(5px);
}
.biz-feature--flip .biz-feat-vis.reveal:not(.revealed) {
  opacity: 0;
  transform: translateX(110px) scale(0.78);
  filter: blur(5px);
}
.biz-feature:not(.biz-feature--flip) .biz-feat-body.reveal:not(.revealed) {
  opacity: 0;
  transform: translateX(80px);
}
.biz-feature--flip .biz-feat-body.reveal:not(.revealed) {
  opacity: 0;
  transform: translateX(-80px);
}
.biz-feat-vis.reveal.revealed,
.biz-feat-body.reveal.revealed {
  opacity: 1;
  transform: none;
  filter: none;
  transition: opacity 0.8s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
  transition-delay: calc(var(--i, 0) * 100ms);
}

.biz-feat-vis {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
}
.biz-feat-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(181, 84, 48, 0.1);
}
.biz-feat-ring--outer {
  width: 420px;
  height: 420px;
  animation: ringOrbit 28s linear infinite;
}
.biz-feat-ring--inner {
  width: 290px;
  height: 290px;
  animation: ringOrbit 18s linear infinite reverse;
  border-color: rgba(181, 84, 48, 0.07);
}
.biz-feat-icon {
  width: 300px;
  height: 300px;
  display: block;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 20px 48px rgba(0, 0, 0, 0.1));
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
}
.biz-feat-vis:hover .biz-feat-icon {
  transform: scale(1.07) translateY(-14px);
  filter: drop-shadow(0 30px 56px rgba(181, 84, 48, 0.18)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.08));
}
.biz-feat-num {
  font-family: "Space Grotesk", monospace;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(181, 84, 48, 0.35);
  display: block;
  margin-bottom: 4px;
}
.biz-feat-type {
  font-size: clamp(2rem, 3.6vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #0e0d0b;
  margin: 0 0 14px;
  line-height: 1.08;
}
.biz-feat-who {
  font-size: 15px;
  line-height: 1.55;
  color: #5e574f;
  margin: 0 0 28px;
}
.biz-feat-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}
.biz-feat-block { display: flex; flex-direction: column; gap: 7px; }
.biz-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(181, 84, 48, 0.5);
}
.biz-feat-p {
  font-size: 13.5px;
  line-height: 1.65;
  color: #5e574f;
  margin: 0;
}
.biz-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #b55430;
  text-decoration: none;
  border-bottom: 1.5px solid rgba(181, 84, 48, 0.3);
  padding-bottom: 3px;
  transition: gap 0.2s ease, border-color 0.2s ease;
}
.biz-cta:hover { gap: 10px; border-color: rgba(181, 84, 48, 0.7); }

/* Perks */
.biz-perks {
  margin-top: clamp(48px, 6vw, 80px);
  padding: 40px 48px;
  background: #fff;
  border-radius: 28px;
  border: 1px solid rgba(0, 0, 0, 0.07);
}
.biz-perks-h {
  font-family: "Space Grotesk", Georgia, serif;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #0e0d0b;
  margin: 0 0 20px;
}
.biz-perks-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px 32px;
}
@media (max-width: 600px) { .biz-perks-list { grid-template-columns: 1fr; } }
.biz-perk {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #5e574f;
}
.biz-check { color: #b55430; font-size: 16px; flex-shrink: 0; margin-top: 2px; }

@media (max-width: 860px) {
  .biz-feature {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: clamp(48px, 8vw, 72px) clamp(20px, 5vw, 48px);
  }
  .biz-feature--flip .biz-feat-vis { order: 0; }
  .biz-feature--flip .biz-feat-body { order: 0; }
  .biz-feat-icon { width: 220px; height: 220px; }
  .biz-feat-vis { min-height: 280px; }
  .biz-feat-ring--outer { width: 280px; height: 280px; }
  .biz-feat-ring--inner { width: 200px; height: 200px; }
  .biz-feat-cols { grid-template-columns: 1fr; }
  .biz-perks { padding: 28px 24px; }
}

/* ── MEASUREMENT ───────────────────────────────────────────── */
.measure-section {
  background: #1a1512;
  padding-top: clamp(80px, 10vw, 120px);
  padding-bottom: clamp(60px, 8vw, 100px);
  overflow: hidden;
}
.measure-head { max-width: 580px; margin-bottom: clamp(48px, 7vw, 80px); }
.measure-tag { color: #c96a40; }
.measure-headline { color: #f5ede3; }
.measure-headline em { color: #c96a40; font-style: italic; }
.measure-sub { color: #9a8e83; }

/* Full-bleed monument strip */
.measure-strip {
  display: flex;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 0 clamp(20px, 5vw, 48px);
}
.measure-strip::-webkit-scrollbar { display: none; }

.measure-monument {
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
}
.measure-monument:first-child { border-left: 1px solid rgba(255, 255, 255, 0.07); }

/* Reveal: each monument slides up with stagger */
.measure-monument.reveal:not(.revealed) { opacity: 0; transform: translateY(60px); }
.measure-monument.reveal.revealed {
  opacity: 1;
  transform: none;
  transition: opacity 0.7s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--i, 0) * 110ms);
}

.measure-monument-stage {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.025);
}
.measure-monument-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 70%, rgba(201, 106, 64, 0.12) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
}
.measure-monument:hover .measure-monument-glow { opacity: 1; }

.measure-scan {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, rgba(201, 106, 64, 0.7) 40%, rgba(255, 200, 150, 0.9) 50%, rgba(201, 106, 64, 0.7) 60%, transparent 100%);
  animation: scan 3s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * -0.6s);
  top: 0;
}
@keyframes scan {
  0%   { top: 0%;   opacity: 0; }
  8%   { opacity: 1; }
  92%  { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.measure-monument-icon {
  position: relative;
  z-index: 1;
  width: 110px;
  height: 110px;
  display: block;
  /* Engraving icons: invert to white-on-dark for the dark section */
  filter: invert(1) sepia(0.2) saturate(0.8) brightness(0.9) drop-shadow(0 4px 16px rgba(201, 106, 64, 0.2));
  transition: transform 0.4s ease, filter 0.4s ease;
}
.measure-monument:hover .measure-monument-icon {
  transform: scale(1.08) translateY(-6px);
  filter: invert(1) sepia(0.3) saturate(1.2) brightness(1.1) drop-shadow(0 8px 24px rgba(201, 106, 64, 0.4));
}

.measure-monument-footer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 18px 20px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.measure-stat {
  font-family: "Space Grotesk", monospace;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: #c96a40;
  line-height: 1;
}
.measure-monument-label {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  color: #9a8e83;
  letter-spacing: 0.01em;
}

/* ── PRICING ───────────────────────────────────────────────── */
.pricing-section {
  background: #ae4828;
  padding: clamp(80px, 11vw, 130px) 0 clamp(60px, 8vw, 100px);
  position: relative;
  overflow: hidden;
}
.pricing-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 180, 120, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
.pricing-wrap { position: relative; z-index: 1; }
.pricing-head { margin-bottom: clamp(48px, 7vw, 72px); }
.pricing-eyebrow {
  font-family: "Space Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 220, 190, 0.6);
  margin-bottom: 10px;
}
.pricing-headline {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff8f0;
  margin: 0;
  line-height: 1.08;
}
.pricing-headline em { color: #ffd4a8; font-style: italic; }

.pricing-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 56px;
}
@media (max-width: 700px) { .pricing-points { grid-template-columns: 1fr; } }

.pricing-point {
  position: relative;
  border-radius: 32px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 28px 36px;
  backdrop-filter: blur(4px);
  transition: background 0.3s ease, border-color 0.3s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.pricing-point:hover {
  background: rgba(255, 255, 255, 0.11);
  border-color: rgba(255, 255, 255, 0.22);
  transform: translateY(-10px);
}

/* Reveal for pricing points */
.pricing-point.reveal:not(.revealed) { opacity: 0; transform: translateY(60px) scale(0.9); }
.pricing-point.reveal.revealed {
  opacity: 1;
  transform: none;
  transition: opacity 0.7s ease, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: calc(var(--i, 0) * 120ms);
}

.pricing-stage { display: none; }

.pricing-icon {
  width: 90px;
  height: 90px;
  display: block;
  margin-bottom: 24px;
  filter: invert(1) sepia(0.1) saturate(0.6) brightness(1.15);
  animation: iconFloat 3.8s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * -1.3s);
}
@keyframes iconFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-9px); }
}

.pricing-point p {
  font-size: 15px;
  font-weight: 500;
  line-height: 1.55;
  color: rgba(255, 240, 220, 0.85);
  text-align: center;
  margin: 0;
}

/* Accent glow behind each icon */
.pricing-point::after {
  content: "";
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 180, 100, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.pricing-cta { text-align: center; }
.pricing-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 36px;
  background: #fff8f0;
  color: #ae4828;
  font-size: 15px;
  font-weight: 700;
  border-radius: 100px;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: gap 0.2s ease, background 0.2s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.pricing-btn:hover {
  gap: 14px;
  transform: translateY(-3px);
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.22);
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
