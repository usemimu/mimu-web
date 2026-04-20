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
  }

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme
  }
}
