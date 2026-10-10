n<template>
  <div class="flex items-center gap-2.5 cursor-pointer select-none" @click="handleClick">
    <svg
      :width="size"
      :height="size * 0.95"
      viewBox="0 0 160 152"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        :d="pathD"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle
        :cx="dotCx"
        :cy="dotCy"
        :r="dotR"
        :fill="strokeColor"
      />
    </svg>
    <!-- <span
      v-if="showWordmark"
      :style="wordmarkStyle"
      class="font-display leading-none"
    >
      m<em class="italic">ì</em>m<em class="italic">ú</em>
    </span> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 68
  },
  // Overrides the mark colour. Defaults to brand clay; pass e.g. '#FDF7F1'
  // to render the mark in cream over the rust hero.
  color: {
    type: String,
    default: null
  },
  showWordmark: {
    type: Boolean,
    default: false
  },
  onClick: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['click'])

// Logo configuration based on M Logo Explorations.html
const logoConfig = {
  humps: 2,
  humpHeight: 80,
  humpWidth: 38,
  decay: 0,
  stroke: 22,
  gap: 20,
  dot: 11,
  flatBottom: true
}

function buildMark(s) {
  const pad = 20
  const baseline = 120

  const widths = []
  const heights = []
  for (let i = 0; i < s.humps; i++) {
    const k = Math.pow(1 - s.decay, i)
    widths.push(s.humpWidth * (0.7 + 0.3 * k))
    heights.push(s.humpHeight * k)
  }

  let d = ''
  let x = pad
  for (let i = 0; i < s.humps; i++) {
    const w = widths[i]
    const h = heights[i]
    const xMid = x + w / 2
    const xEnd = x + w
    if (i === 0) d += `M${x.toFixed(1)},${baseline} `

    const c1x = x + w * 0.08, c1y = baseline - h * 1.05
    const c2x = xMid - w * 0.18, c2y = baseline - h
    d += `C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${xMid.toFixed(1)},${(baseline - h).toFixed(1)} `

    const c3x = xMid + w * 0.18, c3y = baseline - h
    const c4x = xEnd - w * 0.08, c4y = baseline - h * 1.05
    d += `C${c3x.toFixed(1)},${c3y.toFixed(1)} ${c4x.toFixed(1)},${c4y.toFixed(1)} ${xEnd.toFixed(1)},${baseline.toFixed(1)} `
    x = xEnd
  }

  const dotCx = x + s.gap + s.dot
  const dotCy = baseline

  return { d, dotCx, dotCy, strokeW: s.stroke, dotR: s.dot }
}

const mark = buildMark(logoConfig)

const strokeColor = computed(() => props.color || '#B55430')
const pathD = computed(() => mark.d)
const dotCx = computed(() => mark.dotCx)
const dotCy = computed(() => mark.dotCy)
const strokeWidth = computed(() => mark.strokeW)
const dotR = computed(() => mark.dotR)

const wordmarkStyle = computed(() => ({
  fontSize: `${props.size * 0.65}px`,
  fontWeight: 400,
  letterSpacing: '-0.02em',
  color: props.dark ? '#F2EFE9' : '#0E0D0B'
}))

const handleClick = () => {
  if (props.onClick) {
    props.onClick()
  }
  emit('click')
}
</script>
