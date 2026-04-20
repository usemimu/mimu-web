<template>
  <div class="relative w-full h-full min-h-[600px] overflow-visible">
    <!-- Animated grid -->
    <svg class="absolute inset-0 w-full h-full opacity-10">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" :stroke="gridColor" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    <!-- Animated nodes (screens) -->
    <div class="absolute inset-0">
      <div
        v-for="(node, i) in nodes"
        :key="i"
        class="absolute transition-all duration-1000 ease-in-out"
        :style="{
          left: `${node.x}%`,
          top: `${node.y}%`,
          animationDelay: `${i * 0.2}s`
        }"
      >
        <!-- Pulse ring -->
        <div class="absolute -inset-6 rounded-full bg-clay-500 opacity-20 animate-ping" :style="{ animationDelay: `${i * 0.5}s` }"></div>

        <!-- Node -->
        <div
          class="relative w-4 h-4 rounded-full bg-clay-500 shadow-lg animate-pulse"
          :style="{ animationDelay: `${i * 0.3}s` }"
        ></div>

        <!-- Connection lines -->
        <svg
          v-if="node.connections && node.connections.length > 0"
          class="absolute top-0 left-0 pointer-events-none"
          style="width: 600px; height: 600px; transform: translate(-50%, -50%)"
        >
          <path
            v-for="(conn, j) in node.connections"
            :key="j"
            :d="getConnectionPath(node, nodes[conn])"
            stroke="#B55430"
            stroke-width="2"
            fill="none"
            opacity="0.4"
            class="animate-draw-line"
            :style="{ animationDelay: `${(i + j) * 0.4}s` }"
          />
        </svg>
      </div>
    </div>

    <!-- Floating stats -->
    <div class="absolute top-6 right-6 space-y-3">
      <div
        v-for="(stat, i) in floatingStats"
        :key="i"
        class="backdrop-blur-xl rounded-xl px-5 py-3 shadow-lg animate-float"
        :class="statBgClass"
        :style="{ animationDelay: `${i * 0.5}s` }"
      >
        <div class="flex items-center gap-2.5">
          <div class="w-2.5 h-2.5 rounded-full bg-moss-500 animate-pulse"></div>
          <span class="text-sm font-mono font-semibold" :class="statTextClass">
            {{ stat }}
          </span>
        </div>
      </div>
    </div>

    <!-- Location tags -->
    <div class="absolute bottom-6 left-6 flex flex-wrap gap-2.5">
      <div
        v-for="(location, i) in locations"
        :key="i"
        class="backdrop-blur-xl rounded-full px-4 py-2 text-sm font-bold animate-slide-up"
        :class="locationBgClass"
        :style="{ animationDelay: `${i * 0.2}s` }"
      >
        <span :class="locationTextClass">{{ location }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  }
})

// Network nodes (screens)
const nodes = ref([
  { x: 20, y: 25, connections: [1, 3] },
  { x: 45, y: 15, connections: [2, 4] },
  { x: 70, y: 30, connections: [3] },
  { x: 35, y: 50, connections: [4, 5] },
  { x: 65, y: 55, connections: [5] },
  { x: 50, y: 75, connections: [] },
  { x: 80, y: 65, connections: [2] },
  { x: 15, y: 70, connections: [3] }
])

const floatingStats = ref(['1,247 screens', '18 LGAs', '340+ brands'])
const locations = ref(['Yaba', 'Lekki', 'VI', 'Ikeja', 'Surulere'])

// Animate nodes slightly
let animationInterval = null
onMounted(() => {
  animationInterval = setInterval(() => {
    nodes.value = nodes.value.map(node => ({
      ...node,
      x: Math.max(10, Math.min(90, node.x + (Math.random() - 0.5) * 2)),
      y: Math.max(10, Math.min(90, node.y + (Math.random() - 0.5) * 2))
    }))
  }, 3000)
})

onUnmounted(() => {
  if (animationInterval) clearInterval(animationInterval)
})

function getConnectionPath(node1, node2) {
  if (!node2) return ''
  const x1 = 300, y1 = 300 // Center of the 600x600 SVG
  const x2 = (node2.x - node1.x) * 6 + 300
  const y2 = (node2.y - node1.y) * 6 + 300
  return `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${y1} ${x2} ${y2}`
}

const gridColor = computed(() => props.dark ? '#5E574F' : '#DDD8D0')

const statBgClass = computed(() =>
  props.dark ? 'bg-neutral-800/80 border border-white/10' : 'bg-white/80 border border-neutral-200'
)

const statTextClass = computed(() =>
  props.dark ? 'text-neutral-50' : 'text-neutral-900'
)

const locationBgClass = computed(() =>
  props.dark ? 'bg-clay-500/20 border border-clay-500/30' : 'bg-clay-500/10 border border-clay-500/20'
)

const locationTextClass = computed(() => 'text-clay-500')
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes draw-line {
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-draw-line {
  animation: draw-line 2s ease-in-out infinite;
}
</style>
