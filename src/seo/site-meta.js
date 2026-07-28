// Single source of truth for per-route SEO metadata.
//
// Imported by BOTH:
//   • the Vue router (runtime <head> updates as the SPA navigates), and
//   • scripts/prerender.mjs (static <head> injection at build time)
// so the two can never drift. Add a route here and it is covered in both.

export const SITE_URL = 'https://usemimu.com'
export const SITE_NAME = 'Mimuads'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export const DEFAULT_META = {
  title: `${SITE_NAME} — Your brand, on digital screens where your audience is`,
  description:
    "Mimuads is Africa's AI-native digital out-of-home platform. Launch self-serve campaigns on neighborhood screens across Lagos, or activate the verified network at scale as an agency.",
}

// Keyed by route path. Only routes worth prerendering / indexing live here;
// the SPA still resolves every other path at runtime with DEFAULT_META.
export const ROUTE_META = {
  '/': {
    title: 'Mimuads — Your brand, on digital screens where your audience is',
    description:
      "Mimuads is Africa's first AI-native digital out-of-home platform. Launch self-serve campaigns on screens inside pharmacies, eateries and salons across Lagos — no agency needed. AI handles targeting, compliance, and viewership verification automatically. Also known as Usemimu.",
  },
  '/agencies': {
    title: "For Agencies — Africa's programmatic DOOH infrastructure | Mimuads",
    description:
      "Mimuads is the supply layer agencies, brands and buying platforms activate to reach African consumers in the physical world. Verified DOOH inventory, programmatic buying, client-ready reporting and white-label infrastructure across Lagos — with volume rates for agency budgets.",
  },
  '/terms': {
    title: 'Terms & Conditions — Mimuads',
    description:
      'Plain-language Terms of Service for Mimuads — covering advertisers, hosts, payments, refunds, content rules, data, and disputes under Nigerian law.',
  },
}

export function metaForPath(path) {
  return ROUTE_META[path] || DEFAULT_META
}
