/* Mimuads offer web-push service worker.
 * Minimal + scoped to the offer portal — shows the notification and opens the
 * tracked deal link on click. No caching / offline behaviour. */

self.addEventListener('push', (event) => {
  let data = {}
  try {
    data = event.data ? event.data.json() : {}
  } catch (e) {
    data = {}
  }
  const title = data.title || 'New deal near you'
  const options = {
    body: data.body || 'Tap to view your deal',
    // Chrome/Android notifications only render RASTER icons (SVG is ignored),
    // so we point at ImageKit rasterizing the Mimuads BIMI mark to PNG.
    // icon = the large logo; badge = the small Android status-bar glyph.
    icon: 'https://ik.imagekit.io/mimuads/bimi-logo.svg?tr=w-192,h-192,f-png',
    badge: 'https://ik.imagekit.io/mimuads/bimi-logo.svg?tr=w-96,h-96,f-png',
    // Optional hero image the server can pass per-offer (data.image).
    ...(data.image ? { image: data.image } : {}),
    data: { url: data.url || '/' },
  }
  event.waitUntil(self.registration.showNotification(title, options))
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = (event.notification.data && event.notification.data.url) || '/'
  event.waitUntil(clients.openWindow(url))
})
