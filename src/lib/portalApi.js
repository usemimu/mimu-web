// Minimal client for the public offer-portal endpoints. These pages are the
// QR-scan + email-link landing surfaces; everything they call is unauthenticated.
// Base URL is configurable so staging/prod point at the right API.
const BASE = import.meta.env.VITE_API_URL || 'https://api.usemimu.com/v1'

async function req(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  let data = {}
  try {
    data = await res.json()
  } catch {
    /* empty / non-JSON body */
  }
  if (!res.ok) {
    throw new Error(data.message || `Request failed (${res.status})`)
  }
  return data
}

export const portalApi = {
  screenOffer: (code) => req(`/portal/screen/${encodeURIComponent(code)}`),
  claim: (body) =>
    req('/portal/claim', { method: 'POST', body: JSON.stringify(body) }),
  confirm: (token) => req(`/portal/confirm/${encodeURIComponent(token)}`),
  unsubscribe: (token) =>
    req(`/portal/unsubscribe/${encodeURIComponent(token)}`),
  vapidKey: () => req('/portal/push/vapid-key'),
  pushSubscribe: (body) =>
    req('/portal/push/subscribe', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
}

// Base64url VAPID key → Uint8Array for pushManager.subscribe().
function urlBase64ToUint8Array(base64) {
  const padding = '='.repeat((4 - (base64.length % 4)) % 4)
  const b64 = (base64 + padding).replace(/-/g, '+').replace(/_/g, '/')
  const raw = atob(b64)
  return Uint8Array.from([...raw].map((c) => c.charCodeAt(0)))
}

/**
 * Opt the visitor into web-push for a claim. Returns 'subscribed' | 'denied' |
 * 'unsupported'. Consent is the browser's own permission prompt — nothing is
 * captured without it.
 */
export async function enablePush(claimId) {
  if (
    !('serviceWorker' in navigator) ||
    !('PushManager' in window) ||
    !('Notification' in window)
  ) {
    return 'unsupported'
  }
  const { publicKey } = await portalApi.vapidKey()
  if (!publicKey) return 'unsupported'

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') return 'denied'

  const reg = await navigator.serviceWorker.register('/offer-sw.js')
  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicKey),
  })
  await portalApi.pushSubscribe({
    claimId,
    subscription: sub.toJSON(),
    userAgent: navigator.userAgent,
  })
  return 'subscribed'
}
