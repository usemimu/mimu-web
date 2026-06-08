import { ref, watch, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(true)

  // Load theme from localStorage on mount
  onMounted(() => {
    const saved = localStorage.getItem('mimu-theme')
    if (saved !== null) {
      isDark.value = saved === 'dark'
    }
    updateTheme()
  })

  // Watch for theme changes and update DOM
  watch(isDark, () => {
    updateTheme()
    localStorage.setItem('mimu-theme', isDark.value ? 'dark' : 'light')
  })

  function updateTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Keep Chrome Android's browser chrome (status bar + nav bar) in sync.
    // Safari uses the fixed safe-area divs in App.vue; Chrome relies on theme-color.
    const themeColor = isDark.value ? '#0E0D0B' : '#F7F5F2'
    let meta = document.head.querySelector('meta[name="theme-color"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'theme-color')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', themeColor)
  }

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme
  }
}
