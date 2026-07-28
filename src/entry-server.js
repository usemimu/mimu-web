// Build-time SSG entry. Consumed by scripts/prerender.mjs, which imports the
// compiled version from dist-ssr/. For each route it returns the rendered
// <div id="app"> body, which the script injects into the client template.

import { createMemoryHistory } from 'vue-router'
import { renderToString } from 'vue/server-renderer'
import { createApp } from './app'

export async function render(url) {
  const { app, router } = createApp({ ssr: true, history: createMemoryHistory() })

  await router.push(url)
  await router.isReady()

  const html = await renderToString(app)
  return { html }
}
