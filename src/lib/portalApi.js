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
}
