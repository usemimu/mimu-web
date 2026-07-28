import { createApp } from './app'
import { initAnalytics } from './analytics'

// If #app already has server-rendered markup (production build, after
// scripts/prerender.mjs injected it) hydrate it; otherwise (dev server,
// empty container) do a normal client-side mount.
const el = document.getElementById('app')
const ssr = !!el && el.hasChildNodes()

const { app, router } = createApp({ ssr })

// Register analytics before the router resolves so the first navigation is
// counted. No-op during SSG (this entry only runs in the browser).
initAnalytics(router)

// Wait for the initial route to resolve so hydration matches the markup.
router.isReady().then(() => app.mount('#app'))
