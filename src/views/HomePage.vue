<template>
  <!--
    Pre-launch homepage. One screen. No section CTAs. The illustration
    in the middle is what conveys what Mimu does — a simulated DOOH
    screen cycling through real-sounding Lagos SMB ad headlines, with
    a LIVE indicator. Pure CSS animation (no JS, no Lottie, no canvas,
    no images) so the homepage stays under a couple of KB of overhead
    on top of what was already there.
  -->
  <section class="home-stage" :class="dark ? 'is-dark' : 'is-light'">
    <div class="brand">
      <h1 class="wordmark">
        Mimu<em>ads</em>
      </h1>
      <p class="tagline">
        Your ad, on every street in <em>Lagos</em>.
      </p>
    </div>

    <div class="screen" role="figure" aria-label="A simulated Mimuads screen cycling Lagos shop headlines">
      <div class="bezel">
        <div class="indicator" aria-hidden="true">
          <span class="dot"></span>
          <span class="label">LIVE · LAGOS</span>
        </div>
        <div class="canvas">
          <p
            v-for="(headline, i) in headlines"
            :key="i"
            class="headline"
            :style="{ animationDelay: `${i * STEP_S}s` }"
          >
            {{ headline }}
          </p>
        </div>
      </div>
      <p class="caption">
        An ad. On a screen. In a shop.
        <em>Where the customer already is.</em>
      </p>
    </div>

    <div class="coda mono">
      More — soon · <a href="mailto:hello@usemimu.com">hello@usemimu.com</a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  dark: { type: Boolean, default: false },
})

// Each headline is a real-sounding Lagos SMB ad — the kind that
// would actually play on a Mimuads screen. Order chosen so the
// rotation reads as a believable cross-section of categories
// (eatery → salon → pharmacy → delivery → eatery again).
const headlines = [
  'Open till 10pm · Lekki Phase 1',
  '₦5,000 off braids · this Saturday',
  'Flu vaccines · in stock today',
  'Free delivery to Yaba · before noon',
  'New menu · weekend brunch · Surulere',
]

// Seconds each headline holds the screen. With 5 headlines that's a
// 30s total loop — long enough for the rotation to feel like a real
// ad break, short enough that a visitor sees the whole cross-section
// within one minute. Adjust `STEP_S` here and the CSS @keyframes
// recompute against it via the inline `animation-delay` per item.
const STEP_S = 6
</script>

<style scoped>
.home-stage {
  /* Visible viewport minus the sticky nav (h-16 = 64px) and enough
     room for the footer to sit at the bottom without scroll on a
     typical laptop. min-height keeps it tall on mobile so the coda
     line isn't hugging the footer. */
  min-height: calc(100vh - 64px - 96px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(32px, 5vw, 64px);
  padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 48px);
  text-align: center;
}

/* ── brand wordmark + tagline ───────────────────────────────── */
.brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.wordmark {
  font-family: 'Cormorant', Georgia, serif;
  font-weight: 500;
  font-size: clamp(56px, 9vw, 128px);
  line-height: 0.9;
  letter-spacing: -0.035em;
  margin: 0;
}
.wordmark em {
  font-style: italic;
  color: #b55430;
}
.tagline {
  font-family: 'Cormorant', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(18px, 2.4vw, 28px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
  max-width: 520px;
  opacity: 0.78;
}
.tagline em {
  color: #b55430;
  font-style: italic;
}

/* ── the simulated screen ───────────────────────────────────── */
.screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  width: 100%;
  max-width: 640px;
}
.bezel {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  /* Feels like a TV/monitor without any raster assets. Composed
     entirely from gradients + an inset shadow vignette. Depth comes
     from layering, not images. */
  border-radius: 14px;
  padding: clamp(18px, 3vw, 32px);
  background:
    /* top-edge brand warmth */
    radial-gradient(120% 80% at 50% 0%, rgba(181, 84, 48, 0.12) 0%, rgba(181, 84, 48, 0) 60%),
    /* bottom-edge cool wash */
    radial-gradient(120% 80% at 50% 100%, var(--bezel-shade) 0%, transparent 60%),
    var(--bezel-bg);
  border: 1px solid var(--bezel-border);
  box-shadow:
    inset 0 0 0 1px var(--bezel-inset),
    /* inner vignette — pulls the eye to centre, sells depth */
    inset 0 0 80px var(--bezel-vignette),
    0 24px 48px -24px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

/* Pixel-grid texture overlay. Hints at LED-screen pixels without
   being literal about it — sub-1% opacity dots on a 14px lattice. */
.bezel::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 1.5px);
  background-size: 14px 14px;
  opacity: var(--dot-opacity);
  pointer-events: none;
  z-index: 0;
}

/* Drifting ambient glow. Two soft brand-coloured blobs that
   slowly cross-fade and translate so the screen feels alive. No
   blur() filter — radial gradients are already soft, and avoiding
   filters keeps this GPU-cheap on low-end Android. */
.bezel::after {
  content: '';
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(40% 50% at 30% 40%, rgba(181, 84, 48, 0.22) 0%, transparent 55%),
    radial-gradient(45% 55% at 75% 65%, rgba(200, 119, 76, 0.18) 0%, transparent 60%);
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
  color: var(--indicator-color);
  /* Above the ambient glow + pixel grid pseudo-elements */
  z-index: 2;
}
.indicator .dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #b55430;
  box-shadow: 0 0 12px rgba(181, 84, 48, 0.6);
  animation: pulse 1.6s ease-in-out infinite;
}
.indicator .label {
  font-weight: 500;
}

.canvas {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(28px, 5vw, 56px);
  /* Above the ambient glow + pixel grid pseudo-elements */
  z-index: 1;
}
.headline {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0 clamp(20px, 5vw, 48px);

  font-family: 'Cormorant', Georgia, serif;
  font-weight: 500;
  font-style: italic;
  font-size: clamp(22px, 3.4vw, 40px);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--headline-color);
  /* Soft brand-coloured halo so the text reads as *emitted* by the
     screen rather than printed on top of a sticker. Stronger in the
     dark theme where the contrast is cooler, lighter in the light
     theme where it would otherwise wash out the surrounding ink. */
  text-shadow: var(--headline-glow);

  /* Each headline starts hidden. The shared `cycle` keyframe is
     30s long (5 headlines × 6s step). Per-headline animation-delay
     (inline above) staggers visibility so headlines never overlap
     their visible windows. `infinite` keeps the rotation running
     for as long as the page is open — the loop is purely declarative,
     no JS timers, no IntersectionObservers. */
  opacity: 0;
  animation: cycle 30s ease-in-out infinite;
  will-change: opacity, transform;
}

@keyframes cycle {
  0%   { opacity: 0; transform: translateY(8px); }
  3%   { opacity: 1; transform: translateY(0); }
  17%  { opacity: 1; transform: translateY(0); }
  20%  { opacity: 0; transform: translateY(-8px); }
  100% { opacity: 0; transform: translateY(-8px); }
}

@keyframes pulse {
  0%, 100% { opacity: 0.55; transform: scale(0.92); }
  50%      { opacity: 1;    transform: scale(1.08); }
}

/* Honour user preference for reduced motion. The whole point of
   the cycle is decorative — if a user has asked the OS to calm
   animations, we hold on the first headline instead of rotating. */
@media (prefers-reduced-motion: reduce) {
  .headline,
  .indicator .dot,
  .bezel::after {
    animation: none;
  }
  .headline:first-child {
    opacity: 1;
    transform: none;
  }
}

.caption {
  font-family: 'Cormorant', Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(15px, 1.6vw, 19px);
  line-height: 1.5;
  margin: 0;
  max-width: 520px;
  opacity: 0.7;
}
.caption em {
  color: #b55430;
  font-style: italic;
  font-weight: 500;
}

/* ── footer-ish coda line ───────────────────────────────────── */
.coda {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.45;
}
.coda a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
  transition: opacity 0.15s ease;
}
.coda a:hover {
  opacity: 0.7;
}

/* ── theme tokens ───────────────────────────────────────────── */
.is-light {
  --bezel-bg: #fffaf6;
  --bezel-border: rgba(0, 0, 0, 0.08);
  --bezel-inset: rgba(0, 0, 0, 0.03);
  --bezel-shade: rgba(0, 0, 0, 0.05);
  --bezel-vignette: rgba(0, 0, 0, 0.10);
  --dot-color: rgba(0, 0, 0, 0.35);
  --dot-opacity: 0.06;
  --indicator-color: rgba(0, 0, 0, 0.55);
  --headline-color: #1a1a1a;
  --headline-glow: 0 0 18px rgba(181, 84, 48, 0.10);
  color: #1a1a1a;
}
.is-dark {
  --bezel-bg: #100f0d;
  --bezel-border: rgba(255, 255, 255, 0.08);
  --bezel-inset: rgba(255, 255, 255, 0.04);
  --bezel-shade: rgba(0, 0, 0, 0.5);
  --bezel-vignette: rgba(0, 0, 0, 0.55);
  --dot-color: rgba(255, 255, 255, 0.6);
  --dot-opacity: 0.05;
  --indicator-color: rgba(255, 255, 255, 0.55);
  --headline-color: #f4ede4;
  --headline-glow: 0 0 24px rgba(181, 84, 48, 0.30);
  color: #f4ede4;
}
</style>
