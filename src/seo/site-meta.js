// Single source of truth for per-route SEO metadata.
//
// Imported by BOTH:
//   • the Vue router (runtime <head> updates as the SPA navigates), and
//   • scripts/prerender.mjs (static <head> injection + per-route JSON-LD)
// so the two can never drift. Add a route here and it is covered in both.

export const SITE_URL = 'https://usemimu.com'
export const SITE_NAME = 'Mimuads'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export const DEFAULT_META = {
  title: `${SITE_NAME} | The infrastructure layer for physical ad buying`,
  description:
    'Mimuads is the infrastructure for physical advertising in Africa. Every DOOH screen, verified and programmatic. Buy, build on, or host one connected network. Also known as Usemimu.',
}

// ── JSON-LD builders ────────────────────────────────────────────────────────
const ORG_ID = `${SITE_URL}/#organization`

// Home > <page> breadcrumb. Google uses this for the breadcrumb row under a
// result and as a signal of site hierarchy (which feeds sitelinks).
const breadcrumb = (name, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
  ],
})

const webPage = (name, path, description) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}${path === '/' ? '/' : path}#webpage`,
  url: `${SITE_URL}${path === '/' ? '/' : path}`,
  name,
  description,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  inLanguage: 'en-NG',
})

const faqPage = (qas) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qas.map(([name, text]) => ({
    '@type': 'Question',
    name,
    acceptedAnswer: { '@type': 'Answer', text },
  })),
})

// ── Per-route metadata. Only routes worth prerendering / indexing live here;
// the SPA still resolves every other path at runtime with DEFAULT_META. ──────
export const ROUTE_META = {
  '/': {
    title: 'Mimuads | The infrastructure layer for physical ad buying',
    description:
      'Mimuads is the infrastructure for physical advertising in Africa. Every DOOH screen, verified and programmatic, on one connected network. Buy self serve, build on the API, or host a screen. Also known as Usemimu.',
    jsonLd: [
      webPage(
        'Mimuads | The infrastructure layer for physical ad buying',
        '/',
        'The infrastructure for physical advertising in Africa. Every DOOH screen, verified and programmatic.',
      ),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Digital out-of-home advertising infrastructure',
        provider: { '@id': ORG_ID },
        name: 'Mimuads',
        url: `${SITE_URL}/`,
        description:
          'The infrastructure layer for physical ad buying. A verified, programmatic network of DOOH screens with on device proof of play. Businesses buy self serve, agencies and platforms activate at scale, venues host screens.',
        areaServed: { '@type': 'AdministrativeArea', name: 'Nigeria' },
      },
      faqPage([
        [
          'What is Mimuads?',
          'Mimuads is the infrastructure layer for physical ad buying. We connect DOOH screens across Africa into one verified, programmatic network with on device proof of play, so any business can buy, build on, or host advertising screens. Mimuads is not an agency or another ad platform, it is the infrastructure underneath. Also known as Usemimu.',
        ],
        [
          'How does viewership verification work?',
          'Each screen runs an on device model that counts real viewers anonymously, no camera data leaves the device. You buy against verified proof of play rather than estimates.',
        ],
        [
          'Who can buy on Mimuads?',
          'Everyone from SMBs self serving a single screen on the app, to startups, brands and agencies running national campaigns from the dashboard, to DSPs activating inventory programmatically through the API.',
        ],
        [
          'Can I buy programmatically or run Mimuads white label?',
          'Yes. Beyond self serve and direct booking, Mimuads offers a supply side API to activate inventory programmatically, plus white label infrastructure, player software, agentic ML and computer vision verification, under your own brand. Email hello@usemimu.com for early access.',
        ],
        [
          'Can a business host a screen?',
          'Any venue with consistent foot traffic can host a Mimuads screen and earn from the network, with installation and maintenance handled for them.',
        ],
      ]),
    ],
  },

  '/agencies': {
    title: 'For Agencies — The verified DOOH network in one integration | Mimuads',
    description:
      'Mimuads is the supply layer agencies, brands and buying platforms activate to reach African consumers in the physical world. Verified DOOH inventory, programmatic buying, client ready reporting and white label infrastructure, with volume rates for agency budgets.',
    jsonLd: [
      breadcrumb('Agencies', '/agencies'),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Programmatic DOOH infrastructure',
        provider: { '@id': ORG_ID },
        name: 'Mimuads for Agencies',
        url: `${SITE_URL}/agencies`,
        description:
          'The DOOH supply layer for agencies, brands and buying platforms in Africa. Buy against computer vision verified impressions, activate inventory programmatically via a supply side API, report to clients with standardised analytics, or run the whole network white label, with volume rates for agency budgets.',
        areaServed: { '@type': 'AdministrativeArea', name: 'Nigeria' },
        audience: {
          '@type': 'BusinessAudience',
          name: 'Advertising agencies, brands and programmatic buying platforms',
        },
      },
    ],
  },

  '/about': {
    title: 'About — The infrastructure for physical advertising | Mimuads',
    description:
      'Mimuads is not an agency or another ad platform, it is the infrastructure that makes physical screens across Africa verified, programmable and buyable. A verified network, on device proof of play, and one way to buy.',
    jsonLd: [
      breadcrumb('About', '/about'),
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': `${SITE_URL}/about#webpage`,
        url: `${SITE_URL}/about`,
        name: 'About Mimuads',
        description:
          'The infrastructure for physical advertising in Africa. Africa has the screens, it is missing the infrastructure. Mimuads builds the connective layer: a verified network, on device verification, programmable access and a white label OS.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': ORG_ID },
      },
    ],
  },

  '/get-started': {
    title: 'Get started with Mimuads | Launch verified DOOH campaigns',
    description:
      'Create your Mimuads account and launch verified, programmatic DOOH campaigns self serve. For SMBs, startups, brands and FMCG, no agency needed, live in a day, on the infrastructure for physical ad buying.',
    jsonLd: [
      breadcrumb('Get started', '/get-started'),
      webPage(
        'Get started with Mimuads',
        '/get-started',
        'Create your account and launch verified, programmatic DOOH campaigns self serve. No agency needed, live in a day.',
      ),
    ],
  },

  '/pricing': {
    title: 'Pricing — Pay for verified views, nothing else | Mimuads',
    description:
      'Transparent unit pricing on every Mimuads screen. No agency markup, no platform fees, prepaid in Naira. Buy per verified view self serve, at volume rates as an agency, or custom for programmatic and white label.',
    jsonLd: [
      breadcrumb('Pricing', '/pricing'),
      webPage(
        'Mimuads Pricing',
        '/pricing',
        'Transparent unit pricing on every screen. Pay for verified views, with no agency markup or platform fees.',
      ),
    ],
  },

  '/contact': {
    title: 'Contact — Talk to the Mimuads team | Mimuads',
    description:
      'Talk to Mimuads about buying ads, agency and brand campaigns, API access, or hosting a screen. One inbox, real people, within two business days. Email hello@usemimu.com.',
    jsonLd: [
      breadcrumb('Contact', '/contact'),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: 'Contact Mimuads',
        description: 'Reach the Mimuads team at hello@usemimu.com. We respond within two business days.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
    ],
  },

  '/player': {
    title: 'Mimuads Player — The agentic ML player for DOOH screens | Mimuads',
    description:
      'The agentic ML player that runs the Mimuads network. On device computer vision verification, proof of play on every impression, offline resilient and remote managed. Download it and run it on your screens, or build on it with the supply side API.',
    jsonLd: [
      breadcrumb('Mimuads Player', '/player'),
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Mimuads Player',
        operatingSystem: 'Android',
        applicationCategory: 'BusinessApplication',
        url: `${SITE_URL}/player`,
        downloadUrl: 'https://play.google.com/store/apps/details?id=ng.mimu.player',
        description:
          'The agentic ML player on every Mimuads screen. Agentic ML scheduling, on device computer vision viewership verification, and proof of play on every impression.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'NGN' },
        publisher: { '@id': ORG_ID },
      },
    ],
  },

  '/hosts': {
    title: 'Host a screen — Earn from the verified network | Mimuads',
    description:
      'Host a Mimuads screen in your venue and earn from the infrastructure, with nothing to manage. Free installation, weekly payouts, APCON vetted ads only, and a free slot for your own promotions.',
    jsonLd: [
      breadcrumb('Host a screen', '/hosts'),
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'DOOH screen hosting',
        provider: { '@id': ORG_ID },
        name: 'Host a Mimuads screen',
        url: `${SITE_URL}/hosts`,
        description:
          'Venue hosts put a Mimuads screen in their space and earn from the verified network, with free installation and maintenance, weekly payouts on verified plays, APCON vetted ads only, and a 20% free slot for their own promotions.',
        areaServed: { '@type': 'AdministrativeArea', name: 'Nigeria' },
        audience: {
          '@type': 'BusinessAudience',
          name: 'Venue owners and screen hosts',
        },
      },
    ],
  },

  '/terms': {
    title: 'Terms & Conditions — Mimuads',
    description:
      'Plain language Terms of Service for Mimuads, covering advertisers, hosts, payments, refunds, content rules, data, and disputes under Nigerian law.',
    jsonLd: [
      breadcrumb('Terms & Conditions', '/terms'),
      webPage(
        'Terms & Conditions',
        '/terms',
        'Plain language Terms of Service for Mimuads under Nigerian law.',
      ),
    ],
  },
}

export function metaForPath(path) {
  return ROUTE_META[path] || DEFAULT_META
}
