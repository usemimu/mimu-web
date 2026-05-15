<template>
  <div class="pitch-deck" ref="deckEl">
    <!-- shared mark template -->
    <svg width="0" height="0" style="position: absolute" aria-hidden="true">
      <symbol id="mark-m" viewBox="0 0 150 140">
        <path
          class="stem"
          d="M20,120 C23,36 32.2,40 39,40 C45.8,40 55,36 58,120 C61,36 70.2,40 77,40 C83.8,40 93,36 96,120"
        />
        <circle class="dot" cx="127" cy="120" r="11" />
      </symbol>
    </svg>

    <!-- 01 — TITLE -->
    <section id="slide-1" class="slide s1" data-screen-label="01 Title">
      <div class="pre">
        <div class="mark-wrap">
          <svg class="mark" width="56" height="52" aria-label="Mimuads mark">
            <use href="#mark-m" />
          </svg>
        </div>
        <div class="mono" style="color: var(--cream-faint); letter-spacing: 0.22em; text-transform: uppercase">
          Pitch · Lagos · 2026
        </div>
      </div>

      <div>
        <div class="wordmark">Mim<em>u</em>ads</div>
        <div class="tagline">Software-defined DOOH <em>for Nigeria</em>.</div>
        <div class="sub">A self-serve ad network for SMBs and the screens shoppers actually walk past.</div>
      </div>

      <div class="meta">usemimu.com<br />@mimuads</div>
    </section>

    <!-- 02 — PROBLEM -->
    <section id="slide-2" class="slide s2" data-screen-label="02 Problem">
      <div class="slide-head">
        <span class="eyebrow">02 · The problem</span>
        <span class="eyebrow-num">two-sided pain</span>
      </div>

      <h1 class="headline" style="margin-bottom: 36px">
        Where the money <em>spends</em>,<br />and where it <em>doesn't</em>.
      </h1>

      <div class="split">
        <div class="side side-l">
          <div>
            <div class="label">SMB advertiser</div>
            <h3>
              Reaching people <em>scrolling at home</em>,<br />not the shoppers
              <em>two metres from a shelf</em>.
            </h3>
          </div>
          <p>
            Eateries, salons, pharmacies, fashion brands and fintechs spending under
            ₦5M/month pour budget into Meta and Instagram — chasing impressions that
            rarely show up in the catchment area of the store.
          </p>
          <div class="glyph">Wrong audience · wrong moment · wrong margin</div>
        </div>

        <div class="side">
          <div>
            <div class="label">Screen host</div>
            <h3>
              Screens already <em>installed</em>,<br />already <em>on</em> — playing
              the wrong thing.
            </h3>
          </div>
          <p>
            Digital TVs in those same pharmacies, salons, eateries and kiosks run
            static loops, dead Nollywood reruns, or local TV. Attention is captured.
            Revenue is not.
          </p>
          <div class="glyph">Inventory exists · monetisation doesn't</div>
        </div>
      </div>
    </section>

    <!-- 03 — SOLUTION -->
    <section id="slide-3" class="slide s3" data-screen-label="03 Solution">
      <div class="slide-head">
        <span class="eyebrow">03 · Our solution</span>
        <span class="eyebrow-num">one platform · two sides</span>
      </div>

      <h1 class="headline" style="margin-bottom: 8px">
        A self-serve ad network for the <em>street</em>.
      </h1>
      <p class="body-lg" style="margin-bottom: auto">
        Advertiser uploads a creative. Player serves it on screens in the right
        neighbourhoods. On-device computer vision verifies real viewers. Paid per
        play, not per estimated CPM.
      </p>

      <div class="steps">
        <div class="step">
          <div class="n">01 · UPLOAD</div>
          <div class="h"><em>Pick</em> screens<br />by venue + neighbourhood.</div>
          <div class="d">
            Mobile app. Wallet-funded campaigns. KYB + APCON workflow built in.
          </div>
        </div>
        <div class="arrow">
          <svg viewBox="0 0 36 24" fill="none">
            <path
              d="M2 12h30M22 4l10 8-10 8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="step">
          <div class="n">02 · SERVE</div>
          <div class="h"><em>Mimuads Android</em> players<br />in real venues.</div>
          <div class="d">
            Eateries · pharmacies · salons · kiosks. Onboarded host by host,
            neighbourhood by neighbourhood.
          </div>
        </div>
        <div class="arrow">
          <svg viewBox="0 0 36 24" fill="none">
            <path
              d="M2 12h30M22 4l10 8-10 8"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="step">
          <div class="n">03 · MEASURE</div>
          <div class="h">On-device <em>computer vision</em>.</div>
          <div class="d">
            Calibrated viewers and attention-seconds counted per play. Verifiable
            impressions, not estimated CPM.
          </div>
        </div>
      </div>
    </section>

    <!-- 04 — HOW IT WORKS -->
    <section id="slide-4" class="slide s4" data-screen-label="04 How it works">
      <div class="slide-head">
        <span class="eyebrow">04 · How it works</span>
        <span class="eyebrow-num">product surface map</span>
      </div>

      <h1 class="headline" style="margin-bottom: auto">
        Five surfaces. <em>One ledger</em>.
      </h1>

      <div class="map">
        <div class="block">
          <div>
            <div class="tt">Advertiser</div>
            <div class="nm">mimuads-mobile</div>
          </div>
          <div class="desc">Flutter app. Campaigns, wallet, KYB, creative upload, APCON flow.</div>
          <div class="stack">flutter · paystack · dojah</div>
        </div>

        <div class="block">
          <div>
            <div class="tt">Host</div>
            <div class="nm">mimuads-store</div>
          </div>
          <div class="desc">PWA. Screen onboarding, earnings dashboard, payouts.</div>
          <div class="stack">pwa · service-worker · ngn payouts</div>
        </div>

        <div class="block">
          <div>
            <div class="tt">Venue runtime</div>
            <div class="nm">mimuads-player</div>
          </div>
          <div class="desc">
            Android runtime. Plays ads, watches the room, reports plays +
            attention-seconds.
          </div>
          <div class="stack">android · cv pipeline · offline-first</div>
        </div>

        <div class="block">
          <div>
            <div class="tt">Ops</div>
            <div class="nm">mimuads-admin</div>
          </div>
          <div class="desc">Vue console for vetting, reconciliation and incident response.</div>
          <div class="stack">vue · ops tooling</div>
        </div>

        <div class="block hub">
          <div>
            <div class="tt">Hub</div>
            <div class="nm">mimuads api</div>
          </div>
          <div class="desc">
            NestJS. Postgres. Redis. BullMQ. Double-entry ledger reconciles every
            play, payout and tax line.
          </div>
          <div class="stack">nestjs · postgres · redis · bullmq</div>
        </div>
      </div>

      <div class="slide-foot">
        <div class="mono">
          Compliance · APCON-vetted creatives · 5% WHT to FIRS · KYC via Dojah
        </div>
        <div class="mono">Built · in production today</div>
      </div>
    </section>

    <!-- 05 — WHY NOW -->
    <section id="slide-5" class="slide s5" data-screen-label="05 Why now">
      <div class="slide-head">
        <span class="eyebrow">05 · Why now</span>
        <span class="eyebrow-num">conditions are open</span>
      </div>

      <h1 class="headline" style="margin-bottom: 8px">
        Every input just <em>turned green</em>.
      </h1>
      <p class="body-lg" style="margin-bottom: 48px">
        Four shifts converged in the last 36 months. Each one is independently
        boring. Together they make a national, software-defined DOOH network
        buildable for the first time in Nigeria.
      </p>

      <div class="grid">
        <div class="cell">
          <div class="ix">01</div>
          <h3 class="h"><em>Payment</em> rails.</h3>
          <p class="p">
            Paystack, Moniepoint and the NIBSS instant-transfer stack make per-play
            settlement to thousands of hosts operationally cheap.
          </p>
        </div>
        <div class="cell">
          <div class="ix">02</div>
          <h3 class="h"><em>Cheap</em> Android.</h3>
          <p class="p">
            Sub-₦60k Android players with HDMI out, BLE and on-device inference are
            commodity. Bring-your-own-screen is realistic.
          </p>
        </div>
        <div class="cell">
          <div class="ix">03</div>
          <h3 class="h"><em>APCON</em> digital.</h3>
          <p class="p">
            The regulator's vetting workflow is now online. Creative approval moves
            from weeks to days, removing the historical OOH bottleneck.
          </p>
        </div>
        <div class="cell">
          <div class="ix">04</div>
          <h3 class="h">No <em>incumbent</em>.</h3>
          <p class="p">
            There is no Nigerian equivalent of Vistar Media, Hivestack or AdQuick.
            The category is empty — globally proven, locally unbuilt.
          </p>
        </div>
      </div>
    </section>

    <!-- 06 — BUSINESS MODEL -->
    <section id="slide-6" class="slide s6" data-screen-label="06 Business model">
      <div class="slide-head">
        <span class="eyebrow">06 · Business model</span>
        <span class="eyebrow-num">50 / 50 · per play</span>
      </div>

      <div class="body-grid">
        <div class="lead">
          <h2><em>A marketplace</em>.<br />Paid by the play.</h2>
          <p>
            B2B two-sided. Advertisers pay per play, hosts earn per play, and
            Mimuads takes a flat 50% — every play, every screen, every neighbourhood.
            Payment-processor fees are passed through to the advertiser. Withholding
            tax at 5% to FIRS on the host's share.
          </p>
          <div style="margin-top: 30px">
            <span class="tag">Unit-economics — worked example</span>
          </div>
        </div>

        <div class="split-vis">
          <div class="worked-head">On a ₦100,000 campaign</div>
          <div class="split-bar">
            <div class="a">50% · Platform</div>
            <div class="b">50% · Host</div>
          </div>
          <div class="ledger">
            <div class="row">
              <span class="lbl">Advertiser pays</span><span class="val">₦100,000</span>
            </div>
            <div class="row">
              <span class="lbl">Platform net (50%)</span><span class="val">₦50,000</span>
            </div>
            <div class="row">
              <span class="lbl">Host gross (50%)</span><span class="val">₦50,000</span>
            </div>
            <div class="row">
              <span class="lbl">— less 5% WHT to FIRS</span><span class="val">−₦2,500</span>
            </div>
            <div class="row tot">
              <span class="lbl">Host net to bank</span><span class="val">₦47,500</span>
            </div>
          </div>
          <div
            class="mono"
            style="
              margin-top: 18px;
              font-size: 11px;
              color: var(--cream-faint);
              letter-spacing: 0.14em;
            "
          >
            Payment-processor fees passed through · settled weekly
          </div>
        </div>
      </div>
    </section>

    <!-- 07 — MARKET -->
    <section id="slide-7" class="slide s7" data-screen-label="07 Market">
      <div class="slide-head">
        <span class="eyebrow">07 · Market</span>
        <span class="eyebrow-num">three layers of tailwind</span>
      </div>

      <div class="body-grid">
        <div class="lead">
          <h2>
            A <em>category</em><br />that doesn't exist<br />yet — <em>locally</em>.
          </h2>
          <p>
            Mimuads sits at the intersection of three growing pools: Nigerian SMB ad
            spend, global DOOH, and retail media's premium attention multiple. The
            first is the demand. The second is the proof-of-model. The third is the
            multiple.
          </p>
        </div>

        <div class="layers">
          <div class="layer">
            <div class="ix">01</div>
            <div class="nm">Nigerian SMB <em>ad spend</em></div>
            <div class="v">₦40B+</div>
            <div class="sub">
              Annual SMB digital ad spend in Nigeria, growing 25–30% YoY — the
              bottom-of-funnel Meta does not solve.
            </div>
          </div>
          <div class="layer">
            <div class="ix">02</div>
            <div class="nm">Global <em>DOOH</em></div>
            <div class="v">$25B+</div>
            <div class="sub">
              Worldwide digital out-of-home spend. Vistar Media, Hivestack and
              AdQuick prove the programmatic model — at scale, in mature markets.
            </div>
          </div>
          <div class="layer">
            <div class="ix">03</div>
            <div class="nm">Retail media <em>premium</em></div>
            <div class="v">5–8×</div>
            <div class="sub">
              Retail-media networks (Amazon Ads $47B, Walmart Connect $3.4B, Mercado
              Libre 2× YoY) trade at premium revenue multiples because every
              impression is paired with a buyer already in the aisle.
            </div>
          </div>
        </div>
      </div>

      <div class="slide-foot">
        <div class="mono">
          TAM · SAM · SOM <span class="num">$300M · $40M · $2.5M GMV / $1.25M ARR by Y3</span>
        </div>
        <div class="mono">Sources cited in appendix</div>
      </div>
    </section>

    <!-- 08 — GO TO MARKET -->
    <section id="slide-8" class="slide s8" data-screen-label="08 Go-to-market">
      <div class="slide-head">
        <span class="eyebrow">08 · Go-to-market</span>
        <span class="eyebrow-num">supply-led · geographically dense</span>
      </div>

      <h1 class="headline" style="margin-bottom: 8px">
        Win the <em>neighbourhood</em><br />before opening it.
      </h1>
      <p class="body-lg" style="margin-bottom: 36px">
        Each Lagos cluster is recruited as a closed supply pool — 20 to 30 hosts on
        the ground before we let an advertiser pick it. Demand is never starved.
        Compounding starts on day one because hosts often advertise too.
      </p>

      <div class="cols">
        <div class="col">
          <div class="phase">01 · Now</div>
          <h3><em>Direct</em>, founder-led.</h3>
          <p class="lead">
            Founder + a small field team recruit 20–30 hosts per cluster on foot.
            Yaba first, then Ikeja, Lekki, Surulere. Cluster opens to advertisers
            only once supply is dense.
          </p>
          <ul>
            <li>Cluster-by-cluster onboarding</li>
            <li>20–30 hosts before launch</li>
            <li>Daily field reporting</li>
          </ul>
        </div>

        <div class="col">
          <div class="phase">02 · Scale</div>
          <h3>Partner with <em>category gates</em>.</h3>
          <p class="lead">
            Cross-sell through payment-processor merchant books and category bodies —
            Pharmacy Council, restaurant alliances, salon networks. One signed
            partner unlocks hundreds of qualified hosts.
          </p>
          <ul>
            <li>Paystack / Moniepoint merchant cross-sell</li>
            <li>Category trade-group partnerships</li>
            <li>Operator-led bulk onboarding</li>
          </ul>
        </div>

        <div class="col">
          <div class="phase">03 · Compounding</div>
          <h3>Hosts are <em>advertisers</em> too.</h3>
          <p class="lead">
            A salon hosting screens runs its own promos. A pharmacy advertises a flu
            campaign. Two-sided referrals compound — every host onboarded is a
            potential advertiser, every advertiser a potential host.
          </p>
          <ul>
            <li>Two-sided referral economics</li>
            <li>Self-serve onboarding by month 9</li>
            <li>Geographic graph effects</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 09 — TRACTION -->
    <section id="slide-9" class="slide s9" data-screen-label="09 Traction">
      <div class="slide-head">
        <span class="eyebrow">09 · Traction</span>
        <span class="eyebrow-num">live · pre-disclosure</span>
      </div>

      <h1 class="headline" style="margin-bottom: 8px">
        The numbers <em>so far</em>.
      </h1>
      <p class="body-lg" style="margin-bottom: 40px">
        Platform live. Hosts onboarded. Plays running. Specific figures shared on a
        per-investor basis under NDA — placeholders below to be filled in the live
        data room.
      </p>

      <div class="metrics">
        <div class="metric">
          <div class="lbl">Plays / month</div>
          <div class="val"><span class="placeholder">10,000</span></div>
          <div class="note">Verifiable, on-device counted impressions.</div>
        </div>
        <div class="metric">
          <div class="lbl">Active screens</div>
          <div class="val"><span class="placeholder">150</span></div>
          <div class="note">Onboarded hosts playing live ad inventory.</div>
        </div>
        <div class="metric">
          <div class="lbl">Active advertisers</div>
          <div class="val"><span class="placeholder">20</span></div>
          <div class="note">Self-serve campaigns funded from in-app wallet.</div>
        </div>
        <div class="metric">
          <div class="lbl">GMV · last 30d</div>
          <div class="val"><span class="placeholder">₦500,000</span></div>
          <div class="note">Gross campaign spend through the platform.</div>
        </div>
      </div>

      <div class="slide-foot">
        <div class="mono">Live figures on request · usemimu.com</div>
        <div class="mono">Verification · play logs auditable per campaign</div>
      </div>
    </section>

    <!-- 10 — NEXT 12 MONTHS -->
    <section id="slide-10" class="slide s10" data-screen-label="10 Next 12 months">
      <div class="slide-head">
        <span class="eyebrow">10 · Next 12 months</span>
        <span class="eyebrow-num">the plan</span>
      </div>

      <div class="body-grid">
        <div class="lead">
          <h2>What this round <em>buys</em>.</h2>
          <p>
            A 12-month plan to deepen supply, formalise the GTM engine, harden
            measurement, and prove unit economics at scale.
          </p>
          <div class="meta">
            <span class="tag">Raise · $1.2M</span>
            <span class="tag">Runway · 18 months</span>
          </div>
        </div>

        <div class="plan">
          <div class="row">
            <div class="n">01</div>
            <div>
              <div class="h">Deploy to <em>1,000 screens</em> across Lagos.</div>
              <div class="sub">
                Hardware procurement, host onboarding, geographic-density milestones
                cluster-by-cluster.
              </div>
            </div>
            <div class="tag">Supply</div>
          </div>
          <div class="row">
            <div class="n">02</div>
            <div>
              <div class="h"><em>Hire</em> 2–3 field reps.</div>
              <div class="sub">
                Founder-led recruitment moves to a small repeatable engine. Daily
                metrics, weekly reviews.
              </div>
            </div>
            <div class="tag">Team</div>
          </div>
          <div class="row">
            <div class="n">03</div>
            <div>
              <div class="h"><em>Wire</em> payment-processor partnerships.</div>
              <div class="sub">
                Formalise cross-sell with Paystack / Moniepoint. Merchant directory
                imports, joint comms, attribution.
              </div>
            </div>
            <div class="tag">Demand</div>
          </div>
          <div class="row">
            <div class="n">04</div>
            <div>
              <div class="h"><em>Deploy</em> CV measurement upgrades.</div>
              <div class="sub">
                Next-gen on-device attention model. Per-play calibration. Audit-grade
                play logs.
              </div>
            </div>
            <div class="tag">Product</div>
          </div>
        </div>
      </div>

      <div class="slide-foot">
        <div class="mono">Contact · femi@usemimu.com · @mimuads</div>
        <div class="mono">Mimuads · Lagos · 2026</div>
      </div>
    </section>

    <!-- Nav (bottom-right pager) -->
    <nav class="nav" aria-label="Slide navigation">
      <a v-for="n in 10" :key="n" :href="`#slide-${n}`" :data-slide="n">{{ n }}</a>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const deckEl = ref(null)
let io = null
let onKey = null

onMounted(() => {
  const root = deckEl.value
  if (!root) return

  // Intersection-based active state on the bottom-right pager.
  const slides = root.querySelectorAll('.slide')
  const links = root.querySelectorAll('.nav a')
  const map = new Map()
  links.forEach((l) => map.set(l.getAttribute('href').slice(1), l))

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('is-active'))
          const a = map.get(e.target.id)
          if (a) a.classList.add('is-active')
        }
      })
    },
    // The deck's scroll container is the wrapper itself, not the
    // viewport, so we observe against `root`. 55% threshold means the
    // active pip flips when most of a slide is visible.
    { root, threshold: 0.55 },
  )
  slides.forEach((s) => io.observe(s))

  // Arrow-key / space / page-down navigation. Bound to document so
  // the deck still responds even when focus isn't on a slide.
  onKey = (e) => {
    const cur = root.querySelector('.nav a.is-active')
    if (!cur) return
    const n = parseInt(cur.getAttribute('data-slide'), 10)
    if (
      e.key === 'ArrowDown' ||
      e.key === 'ArrowRight' ||
      e.key === 'PageDown' ||
      e.key === ' '
    ) {
      const next = root.querySelector(`.nav a[data-slide="${n + 1}"]`)
      if (next) {
        e.preventDefault()
        next.click()
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
      const prev = root.querySelector(`.nav a[data-slide="${n - 1}"]`)
      if (prev) {
        e.preventDefault()
        prev.click()
      }
    }
  }
  document.addEventListener('keydown', onKey)
})

onBeforeUnmount(() => {
  if (io) io.disconnect()
  if (onKey) document.removeEventListener('keydown', onKey)
})
</script>

<style>
/* ──────────────────────────────────────────────────────────────────
   PITCH DECK — fully scoped under .pitch-deck so nothing leaks into
   the rest of the marketing site (Tailwind, theme toggle, nav).
   The deck takes 100vh of viewport, owns its own scroll-snap
   container, and renders against a dark canvas regardless of the
   site theme.
   ────────────────────────────────────────────────────────────────── */

.pitch-deck {
  --clay: #b55430;
  --clay-soft: #c8774c;
  --clay-deep: #79321e;
  --ink: #0e0d0b;
  --ink-2: #1a1815;
  --ink-3: #232018;
  --cream: #f4ede4;
  --cream-dim: rgba(244, 237, 228, 0.72);
  --cream-faint: rgba(244, 237, 228, 0.45);
  --cream-line: rgba(244, 237, 228, 0.1);
  --f-display: 'Cormorant', Georgia, serif;
  --f-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --f-mono: 'JetBrains Mono', ui-monospace, Menlo, monospace;

  position: fixed;
  inset: 0;
  background: var(--ink);
  color: var(--cream);
  font-family: var(--f-body);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  z-index: 60;
}

/* Slide shell — each slide is one viewport tall, snaps to the top
   of the deck's scroll container. */
.pitch-deck .slide {
  height: 100vh;
  min-height: 600px;
  width: 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  padding: clamp(28px, 5vw, 80px);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* helpers */
.pitch-deck .eyebrow {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--clay-soft);
}
.pitch-deck .eyebrow-num {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--cream-faint);
}
.pitch-deck .headline {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(40px, 6.6vw, 96px);
  line-height: 1.02;
  letter-spacing: -0.02em;
}
.pitch-deck .headline em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .subhead {
  font-family: var(--f-display);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(22px, 2.6vw, 32px);
  line-height: 1.3;
  color: var(--cream-dim);
}
.pitch-deck .body-lg {
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.65;
  color: var(--cream-dim);
  max-width: 62ch;
}
.pitch-deck .body {
  font-size: 15px;
  line-height: 1.6;
  color: var(--cream-dim);
}
.pitch-deck .mono {
  font-family: var(--f-mono);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--cream-dim);
}
.pitch-deck .num {
  font-family: var(--f-display);
  font-feature-settings: 'lnum', 'tnum';
  font-weight: 500;
}
.pitch-deck .placeholder {
  display: inline-block;
  font-family: var(--f-mono);
  font-size: 0.78em;
  background: rgba(181, 84, 48, 0.12);
  color: var(--clay-soft);
  border: 1px dashed rgba(181, 84, 48, 0.35);
  padding: 2px 9px;
  border-radius: 4px;
  letter-spacing: 0.04em;
}
.pitch-deck .divider {
  height: 1px;
  background: var(--cream-line);
}
.pitch-deck .tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--clay-soft);
  border: 1px solid rgba(181, 84, 48, 0.35);
  background: rgba(181, 84, 48, 0.08);
  padding: 6px 12px;
  border-radius: 99px;
}

.pitch-deck .slide-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: auto;
}
.pitch-deck .slide-foot {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--cream-line);
}
.pitch-deck .slide-foot .mono {
  color: var(--cream-faint);
  font-size: 11px;
  letter-spacing: 0.18em;
}

.pitch-deck .mark {
  display: inline-block;
  vertical-align: middle;
}
.pitch-deck .mark .stem {
  fill: none;
  stroke: currentColor;
  stroke-width: 22;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.pitch-deck .mark .dot {
  fill: currentColor;
}

/* 01 — TITLE */
.pitch-deck .s1 {
  background:
    radial-gradient(60% 80% at 78% 30%, rgba(181, 84, 48, 0.22) 0%, rgba(181, 84, 48, 0) 60%),
    radial-gradient(40% 60% at 20% 80%, rgba(200, 119, 76, 0.1) 0%, rgba(200, 119, 76, 0) 70%),
    var(--ink);
  justify-content: flex-end;
}
.pitch-deck .s1 .pre {
  position: absolute;
  top: clamp(28px, 5vw, 80px);
  left: clamp(28px, 5vw, 80px);
  right: clamp(28px, 5vw, 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pitch-deck .s1 .mark-wrap {
  color: var(--clay);
}
.pitch-deck .s1 .wordmark {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(72px, 13vw, 200px);
  line-height: 0.92;
  letter-spacing: -0.035em;
  color: var(--cream);
}
.pitch-deck .s1 .wordmark em {
  font-style: italic;
  color: var(--clay);
}
.pitch-deck .s1 .tagline {
  font-family: var(--f-display);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(24px, 3.2vw, 44px);
  line-height: 1.2;
  color: var(--cream-dim);
  margin-top: 24px;
  max-width: 880px;
}
.pitch-deck .s1 .sub {
  font-size: clamp(15px, 1.4vw, 18px);
  color: var(--cream-faint);
  margin-top: 36px;
  max-width: 680px;
  line-height: 1.6;
}
.pitch-deck .s1 .meta {
  position: absolute;
  bottom: clamp(28px, 5vw, 80px);
  right: clamp(28px, 5vw, 80px);
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--cream-faint);
  text-align: right;
}

/* 02 — PROBLEM */
.pitch-deck .s2 .split {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
}
.pitch-deck .s2 .side {
  padding: clamp(20px, 3vw, 48px) clamp(28px, 4vw, 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
}
.pitch-deck .s2 .side-l {
  border-right: 1px solid var(--cream-line);
}
.pitch-deck .s2 .side h3 {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(28px, 3.6vw, 52px);
  line-height: 1.05;
  letter-spacing: -0.02em;
}
.pitch-deck .s2 .side h3 em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s2 .side .label {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--cream-faint);
  margin-bottom: 12px;
}
.pitch-deck .s2 .side p {
  color: var(--cream-dim);
  line-height: 1.6;
  font-size: clamp(14px, 1.3vw, 17px);
  max-width: 38ch;
}
.pitch-deck .s2 .side .pull {
  font-family: var(--f-display);
  font-style: italic;
  color: var(--cream-faint);
  font-size: clamp(16px, 1.5vw, 20px);
  line-height: 1.4;
  max-width: 34ch;
}
.pitch-deck .s2 .side .glyph {
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--clay-soft);
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
@media (max-width: 780px) {
  .pitch-deck .s2 .split {
    grid-template-columns: 1fr;
  }
  .pitch-deck .s2 .side-l {
    border-right: 0;
    border-bottom: 1px solid var(--cream-line);
  }
}

/* 03 — SOLUTION */
.pitch-deck .s3 .steps {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: clamp(16px, 2.5vw, 40px);
  padding: 24px 0;
}
.pitch-deck .s3 .step {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.pitch-deck .s3 .step .n {
  font-family: var(--f-mono);
  font-size: 12px;
  letter-spacing: 0.22em;
  color: var(--clay-soft);
}
.pitch-deck .s3 .step .h {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(28px, 3.6vw, 46px);
  line-height: 1.05;
  letter-spacing: -0.018em;
}
.pitch-deck .s3 .step .h em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s3 .step .d {
  color: var(--cream-dim);
  line-height: 1.6;
  font-size: clamp(13px, 1.2vw, 16px);
  max-width: 30ch;
}
.pitch-deck .s3 .arrow {
  display: flex;
  align-items: center;
  color: var(--clay);
  font-family: var(--f-mono);
  font-size: 24px;
}
.pitch-deck .s3 .arrow svg {
  width: 36px;
  height: 24px;
}
@media (max-width: 780px) {
  .pitch-deck .s3 .steps {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .pitch-deck .s3 .arrow {
    transform: rotate(90deg);
    justify-content: center;
  }
}

/* 04 — HOW IT WORKS */
.pitch-deck .s4 .map {
  flex: 1;
  display: grid;
  gap: 18px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto auto;
  align-items: stretch;
}
.pitch-deck .s4 .block {
  border: 1px solid var(--cream-line);
  border-radius: 10px;
  padding: clamp(16px, 1.6vw, 22px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  min-height: 160px;
  background: rgba(244, 237, 228, 0.015);
}
.pitch-deck .s4 .block .tt {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--clay-soft);
}
.pitch-deck .s4 .block .nm {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(20px, 2.2vw, 28px);
  line-height: 1.1;
  letter-spacing: -0.01em;
}
.pitch-deck .s4 .block .nm em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s4 .block .desc {
  color: var(--cream-dim);
  font-size: clamp(12px, 1vw, 13.5px);
  line-height: 1.55;
}
.pitch-deck .s4 .stack {
  font-family: var(--f-mono);
  font-size: 10.5px;
  color: var(--cream-faint);
  letter-spacing: 0.04em;
}
.pitch-deck .s4 .block.hub {
  background: rgba(181, 84, 48, 0.08);
  border-color: rgba(181, 84, 48, 0.45);
  grid-column: span 1;
}
.pitch-deck .s4 .block.hub .nm {
  color: var(--clay-soft);
}
@media (max-width: 980px) {
  .pitch-deck .s4 .map {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .pitch-deck .s4 .map {
    grid-template-columns: 1fr;
  }
}

/* 05 — WHY NOW */
.pitch-deck .s5 .grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(18px, 2vw, 32px);
  align-items: stretch;
}
.pitch-deck .s5 .cell {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: clamp(16px, 2vw, 28px) 0;
  border-top: 1px solid var(--cream-line);
}
.pitch-deck .s5 .cell .ix {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--clay-soft);
}
.pitch-deck .s5 .cell .h {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(22px, 2.6vw, 36px);
  line-height: 1.08;
  letter-spacing: -0.015em;
}
.pitch-deck .s5 .cell .h em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s5 .cell .p {
  color: var(--cream-dim);
  font-size: clamp(13px, 1.2vw, 15.5px);
  line-height: 1.55;
}
@media (max-width: 980px) {
  .pitch-deck .s5 .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .pitch-deck .s5 .grid {
    grid-template-columns: 1fr;
  }
}

/* 06 — BUSINESS MODEL */
.pitch-deck .s6 .body-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(28px, 4vw, 72px);
  align-items: center;
}
.pitch-deck .s6 .lead h2 {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(34px, 4.6vw, 62px);
  line-height: 1.04;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}
.pitch-deck .s6 .lead h2 em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s6 .lead p {
  color: var(--cream-dim);
  font-size: clamp(14px, 1.3vw, 17px);
  line-height: 1.6;
  max-width: 48ch;
}
.pitch-deck .s6 .split-vis {
  background: rgba(244, 237, 228, 0.025);
  border: 1px solid var(--cream-line);
  border-radius: 12px;
  padding: clamp(20px, 2.4vw, 32px);
}
.pitch-deck .s6 .split-bar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  margin: 18px 0 28px;
}
.pitch-deck .s6 .split-bar .a {
  background: var(--clay);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--ink);
  font-weight: 600;
  letter-spacing: 0.04em;
}
.pitch-deck .s6 .split-bar .b {
  background: var(--clay-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--cream);
  font-weight: 600;
  letter-spacing: 0.04em;
}
.pitch-deck .s6 .ledger {
  font-family: var(--f-mono);
  font-size: 13px;
}
.pitch-deck .s6 .ledger .row {
  display: flex;
  justify-content: space-between;
  padding: 9px 0;
  border-bottom: 1px dashed var(--cream-line);
}
.pitch-deck .s6 .ledger .row:last-child {
  border-bottom: 0;
}
.pitch-deck .s6 .ledger .row.tot {
  color: var(--clay-soft);
  font-weight: 600;
  padding-top: 14px;
  border-top: 1px solid var(--cream-line);
  border-bottom: 0;
}
.pitch-deck .s6 .ledger .lbl {
  color: var(--cream-dim);
}
.pitch-deck .s6 .ledger .val {
  color: var(--cream);
  font-feature-settings: 'tnum';
}
.pitch-deck .s6 .worked-head {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--clay-soft);
}
@media (max-width: 880px) {
  .pitch-deck .s6 .body-grid {
    grid-template-columns: 1fr;
  }
}

/* 07 — MARKET */
.pitch-deck .s7 .body-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: center;
}
.pitch-deck .s7 .lead h2 {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(36px, 5vw, 68px);
  line-height: 1.02;
  letter-spacing: -0.02em;
}
.pitch-deck .s7 .lead h2 em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s7 .lead p {
  margin-top: 18px;
  color: var(--cream-dim);
  font-size: clamp(14px, 1.3vw, 17px);
  line-height: 1.6;
  max-width: 50ch;
}
.pitch-deck .s7 .layers {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.pitch-deck .s7 .layer {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  align-items: baseline;
  padding: 18px 22px;
  border: 1px solid var(--cream-line);
  border-radius: 10px;
  background: rgba(244, 237, 228, 0.02);
}
.pitch-deck .s7 .layer .ix {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--clay-soft);
}
.pitch-deck .s7 .layer .nm {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(20px, 2vw, 26px);
  line-height: 1.1;
}
.pitch-deck .s7 .layer .nm em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s7 .layer .v {
  font-family: var(--f-mono);
  font-size: 14px;
  color: var(--cream-dim);
}
.pitch-deck .s7 .layer .sub {
  grid-column: 2 / 4;
  color: var(--cream-faint);
  font-size: 12.5px;
  margin-top: 4px;
}
@media (max-width: 880px) {
  .pitch-deck .s7 .body-grid {
    grid-template-columns: 1fr;
  }
}

/* 08 — GO TO MARKET */
.pitch-deck .s8 .cols {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(16px, 2vw, 32px);
  align-items: stretch;
}
.pitch-deck .s8 .col {
  border: 1px solid var(--cream-line);
  border-radius: 12px;
  padding: clamp(20px, 2.4vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(244, 237, 228, 0.02);
}
.pitch-deck .s8 .col .phase {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--clay-soft);
}
.pitch-deck .s8 .col h3 {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(26px, 3vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.015em;
}
.pitch-deck .s8 .col h3 em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s8 .col p.lead {
  color: var(--cream-dim);
  font-size: clamp(13px, 1.2vw, 15.5px);
  line-height: 1.6;
}
.pitch-deck .s8 .col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: auto;
}
.pitch-deck .s8 .col ul li {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--cream-dim);
  line-height: 1.5;
  padding-left: 14px;
  position: relative;
}
.pitch-deck .s8 .col ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 4px;
  height: 4px;
  background: var(--clay);
  border-radius: 50%;
}
@media (max-width: 880px) {
  .pitch-deck .s8 .cols {
    grid-template-columns: 1fr;
  }
}

/* 09 — TRACTION */
.pitch-deck .s9 .metrics {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  align-items: stretch;
}
.pitch-deck .s9 .metric {
  padding: clamp(20px, 3vw, 40px) clamp(16px, 2vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-left: 1px solid var(--cream-line);
}
.pitch-deck .s9 .metric:first-child {
  border-left: 0;
  padding-left: 0;
}
.pitch-deck .s9 .metric .lbl {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--cream-faint);
}
.pitch-deck .s9 .metric .val {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(34px, 4.8vw, 72px);
  line-height: 1;
  color: var(--clay-soft);
  letter-spacing: -0.02em;
}
.pitch-deck .s9 .metric .note {
  font-family: var(--f-body);
  font-size: 13px;
  color: var(--cream-faint);
  line-height: 1.5;
}
.pitch-deck .s9 .footer-note {
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--cream-faint);
  letter-spacing: 0.14em;
  margin-top: 30px;
}
@media (max-width: 880px) {
  .pitch-deck .s9 .metrics {
    grid-template-columns: repeat(2, 1fr);
  }
  .pitch-deck .s9 .metric {
    border-left: 0 !important;
    padding-left: 0 !important;
    border-top: 1px solid var(--cream-line);
    padding-top: 24px;
  }
  .pitch-deck .s9 .metric:first-child,
  .pitch-deck .s9 .metric:nth-child(2) {
    border-top: 0;
    padding-top: 0;
  }
}
@media (max-width: 520px) {
  .pitch-deck .s9 .metrics {
    grid-template-columns: 1fr;
  }
  .pitch-deck .s9 .metric {
    border-top: 1px solid var(--cream-line) !important;
    padding-top: 24px !important;
  }
  .pitch-deck .s9 .metric:first-child {
    border-top: 0 !important;
    padding-top: 0 !important;
  }
}

/* 10 — NEXT 12 MONTHS */
.pitch-deck .s10 .body-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: center;
}
.pitch-deck .s10 .lead h2 {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(40px, 6vw, 86px);
  line-height: 1;
  letter-spacing: -0.022em;
}
.pitch-deck .s10 .lead h2 em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s10 .lead p {
  margin-top: 22px;
  color: var(--cream-dim);
  font-size: clamp(15px, 1.4vw, 18px);
  line-height: 1.6;
  max-width: 42ch;
}
.pitch-deck .s10 .lead .meta {
  margin-top: 34px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.pitch-deck .s10 .plan {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.pitch-deck .s10 .row {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 22px;
  align-items: baseline;
  padding: 18px 22px;
  border: 1px solid var(--cream-line);
  border-radius: 10px;
  background: rgba(244, 237, 228, 0.02);
}
.pitch-deck .s10 .row .n {
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--clay-soft);
  letter-spacing: 0.16em;
}
.pitch-deck .s10 .row .h {
  font-family: var(--f-display);
  font-weight: 500;
  font-size: clamp(20px, 2vw, 26px);
  line-height: 1.1;
  letter-spacing: -0.01em;
}
.pitch-deck .s10 .row .h em {
  font-style: italic;
  color: var(--clay-soft);
}
.pitch-deck .s10 .row .sub {
  grid-column: 2 / 3;
  color: var(--cream-faint);
  font-size: 13px;
  margin-top: 6px;
  line-height: 1.5;
}
.pitch-deck .s10 .row .tag {
  font-family: var(--f-mono);
  font-size: 10.5px;
}
@media (max-width: 880px) {
  .pitch-deck .s10 .body-grid {
    grid-template-columns: 1fr;
  }
}

/* Bottom-right pager nav. Lives inside the deck wrapper so it
   doesn't collide with the site's floating theme toggle (which is
   hidden anyway when the deck is mounted). */
.pitch-deck .nav {
  position: fixed;
  bottom: 18px;
  right: 18px;
  z-index: 70;
  display: flex;
  gap: 6px;
  align-items: center;
  font-family: var(--f-mono);
  font-size: 11px;
  background: rgba(14, 13, 11, 0.72);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 8px 10px;
  border-radius: 99px;
  border: 1px solid var(--cream-line);
}
.pitch-deck .nav a {
  color: var(--cream-faint);
  text-decoration: none;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  transition: all 0.15s ease;
  letter-spacing: 0;
}
.pitch-deck .nav a:hover {
  color: var(--cream);
  background: rgba(244, 237, 228, 0.06);
}
.pitch-deck .nav a.is-active {
  color: var(--clay-soft);
  background: rgba(181, 84, 48, 0.14);
}

@media (max-width: 480px) {
  .pitch-deck .nav {
    bottom: 12px;
    right: 12px;
    padding: 6px 8px;
  }
  .pitch-deck .nav a {
    width: 18px;
    height: 18px;
    font-size: 10px;
  }
}

@media (max-width: 780px) {
  .pitch-deck .slide {
    padding: 24px 22px 80px;
  }
}

/* When the deck is on-screen, suppress the site's body scroll so the
   marketing page underneath doesn't compete with the deck's own
   scroll-snap container. Body class is toggled by App.vue based on
   route name. */
body.pitch-active {
  overflow: hidden;
}
</style>
