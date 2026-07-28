// Shared app factory used by both entries:
//   • src/main.js        (browser — hydrates the prerendered markup)
//   • src/entry-server.js (build-time SSG — renders each route to a string)
// `ssr: true` builds with createSSRApp so the client can hydrate the exact
// DOM the server produced. In dev (empty #app) main.js passes ssr: false to
// get a normal client-side mount.

import { createSSRApp, createApp as createSpaApp } from 'vue'
import App from './App.vue'
import { createAppRouter } from './router'
import './style.css'

export function createApp({ ssr = false, history } = {}) {
  const app = ssr ? createSSRApp(App) : createSpaApp(App)
  const router = createAppRouter(history)
  app.use(router)
  return { app, router }
}
