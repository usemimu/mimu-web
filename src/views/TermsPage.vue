<template>
  <div>
    <div class="max-w-[800px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <BaseTag variant="clay" :dark="dark" class="mb-5">Legal · Terms of Service</BaseTag>

      <h1
        class="font-display text-[clamp(40px,5vw,64px)] font-light leading-tight tracking-tight mb-4"
        :class="textPrimary"
      >
        Terms &amp; Conditions
      </h1>

      <p class="text-sm mb-10" :class="textTertiary">
        Last updated {{ lastUpdated }}.
      </p>

      <div class="text-[17px] leading-loose flex flex-col gap-6" :class="textSecondary">
        <p>
          These Terms govern your use of Mìmú — operated by Mìmú Technologies Ltd
          (&ldquo;<strong :class="textPrimary">Mìmú</strong>&rdquo;,
          &ldquo;<strong :class="textPrimary">we</strong>&rdquo;,
          &ldquo;<strong :class="textPrimary">us</strong>&rdquo;), incorporated in Lagos, Nigeria.
          By creating an account, hosting a screen, running a campaign, or otherwise
          using the platform you agree to these Terms.
        </p>
        <p>
          Mìmú is a neighborhood digital-out-of-home advertising network. We connect
          <em>advertisers</em> who want to run ads with <em>hosts</em> — local businesses
          that operate one or more Mìmú screens. The platform records playback,
          measures viewership on-device, and settles payments in Naira.
        </p>
      </div>

      <section
        v-for="(section, i) in sections"
        :key="section.id"
        class="mt-14 pt-10 border-t"
        :class="borderClass"
      >
        <div class="text-xs font-semibold tracking-wider uppercase mb-4" :class="textTertiary">
          {{ String(i + 1).padStart(2, '0') }} · {{ section.eyebrow }}
        </div>
        <h2 class="font-display text-2xl sm:text-3xl font-normal mb-5" :class="textPrimary">
          {{ section.title }}
        </h2>
        <div class="text-[16px] leading-relaxed flex flex-col gap-4" :class="textSecondary">
          <p v-for="(para, j) in section.body" :key="j" v-html="para"></p>
        </div>
      </section>

      <div class="mt-14 pt-10 border-t" :class="borderClass">
        <div class="text-xs font-semibold tracking-wider uppercase mb-3" :class="textTertiary">
          Questions?
        </div>
        <p class="text-[16px] leading-relaxed" :class="textSecondary">
          Email <a href="mailto:legal@usemimu.com" class="font-semibold text-clay-500 hover:text-clay-600">legal@usemimu.com</a>
          or write to us at the address listed in the Contact section. We respond
          within two business days.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseTag from '@/components/BaseTag.vue'

const props = defineProps({
  dark: {
    type: Boolean,
    default: false,
  },
})

const lastUpdated = 'April 27, 2026'

// Plain-language Terms for a Nigerian DOOH ad-tech platform. Each section
// is intentionally short — legalese drives users to skim, and clarity is
// what keeps disputes out of the support queue.
const sections = [
  {
    id: 'eligibility',
    eyebrow: 'Eligibility',
    title: 'Who can use Mìmú',
    body: [
      'You must be at least 18 years old and legally able to enter into a contract under Nigerian law. Business accounts (advertiser or host) must be registered with CAC, or operating as a sole trader with a verifiable identity (NIN, BVN, or international passport).',
      'Hosts onboard via an invite link from our team. Advertisers self-serve through the Advertisers app at <strong>app.usemimu.com</strong>. We may require KYB / KYC verification before a campaign goes live or a host receives payouts.',
    ],
  },
  {
    id: 'accounts',
    eyebrow: 'Accounts',
    title: 'Your account and credentials',
    body: [
      'You are responsible for activity under your account. Keep your password and OTP secure; never share them. Notify us immediately at <a href="mailto:security@usemimu.com" class="text-clay-500 font-semibold">security@usemimu.com</a> if you suspect unauthorized access.',
      'We may suspend or terminate accounts that violate these Terms, applicable law, or APCON regulations — with notice, except in cases of fraud, abuse, or safety risk.',
    ],
  },
  {
    id: 'advertising',
    eyebrow: 'For advertisers',
    title: 'Running campaigns',
    body: [
      'All creatives must be APCON-compliant. We submit creatives for APCON vetting on your behalf, but APCON&rsquo;s decision is final. Rejected creatives do not run; budget reserved for them is returned to your wallet.',
      'Wallet balances are pre-paid in Naira via Paystack. Spend is debited per play. Unspent balance is refundable subject to our Refund Policy in Section 09. Ad placement is best-effort: we do not guarantee specific screens, time slots, or impressions beyond what each campaign brief explicitly purchases.',
      'You retain ownership of your creatives. By submitting them, you grant Mìmú a non-exclusive license to display them on the network solely for the purpose of running your campaign.',
    ],
  },
  {
    id: 'hosting',
    eyebrow: 'For hosts',
    title: 'Operating a Mìmú screen',
    body: [
      'You agree to keep the screen powered on during the operating hours you set, in the location agreed at onboarding, and reasonably visible to walk-in customers. You will not tamper with the device, the playback log, or attempt to inflate viewership.',
      'Earnings are calculated from on-device verified plays at the rates in effect for your venue category. Payouts are made every Friday to the verified bank account on file, less the 5% Withholding Tax (WHT) we remit to FIRS on your behalf. WHT certificates are issued annually.',
      'You are entitled to 20% of screen time as a free slot for your own promotions, subject to APCON approval and our content guidelines.',
    ],
  },
  {
    id: 'fees',
    eyebrow: 'Fees and payments',
    title: 'How money moves',
    body: [
      'Pricing is published at <strong>usemimu.com/pricing</strong> and may change with at least 14 days&rsquo; notice. The price quoted at the time you submit a campaign is the price you pay for that campaign.',
      'Paystack processing fees apply to wallet top-ups and are itemized on your receipt. Internal transfers between Mìmú balances incur no fee.',
    ],
  },
  {
    id: 'content',
    eyebrow: 'Content',
    title: 'What you may not run',
    body: [
      'You may not submit creatives that are illegal, defamatory, obscene, hateful, deceptive, that infringe third-party IP, or that violate APCON&rsquo;s Nigerian Code of Advertising. Political and religious advertising follows additional disclosure rules under the APCON Act.',
      'We reserve the right to reject or pull any creative that breaches these standards or that we believe poses reputational or safety risk to the network — with the budget for that creative refunded to your wallet.',
    ],
  },
  {
    id: 'data',
    eyebrow: 'Data and privacy',
    title: 'How we handle data',
    body: [
      'On-device viewership measurement is anonymous and aggregate-only — we do not collect personally identifiable information about people who walk past a screen, and no images are stored.',
      'Account, KYB / KYC, payment, and support data are handled in accordance with the <strong>Nigerian Data Protection Act 2023 (NDPA)</strong> and our <a href="#" class="text-clay-500 font-semibold">Privacy Policy</a>. You may request access, correction, or deletion of your personal data at any time.',
    ],
  },
  {
    id: 'fraud',
    eyebrow: 'Fraud and abuse',
    title: 'Anti-fraud measures',
    body: [
      'We continuously monitor for click fraud, fake plays, account takeover, and host-side tampering. Confirmed fraud results in suspension of the offending account, reversal of associated payouts or charges, and — where applicable — referral to law enforcement.',
      'Advertisers affected by confirmed host-side fraud are eligible for a refund equal to the spend attributed to the affected screens.',
    ],
  },
  {
    id: 'refunds',
    eyebrow: 'Refunds',
    title: 'When refunds are issued',
    body: [
      'Wallet refunds for unspent balances are processed back to the original Paystack source within 7 business days. Campaigns rejected by APCON or pulled by our content review get the unspent portion of their budget refunded automatically.',
      'Disputed plays — where you believe a play was not delivered as briefed — should be raised within 14 days. We review the on-device evidence and issue a refund if the dispute is upheld.',
    ],
  },
  {
    id: 'liability',
    eyebrow: 'Liability',
    title: 'What we are responsible for',
    body: [
      'Mìmú is provided &ldquo;as available&rdquo;. We make best-effort commitments on uptime, viewership measurement accuracy, and payout timing — but we do not guarantee outcomes (sales, foot traffic, brand awareness) generated by your campaign.',
      'To the maximum extent permitted by Nigerian law, our aggregate liability for any claim arising from your use of the platform is limited to the amount you paid to Mìmú in the 12 months preceding the claim. Nothing in these Terms excludes liability for fraud or for any liability that cannot lawfully be excluded.',
    ],
  },
  {
    id: 'changes',
    eyebrow: 'Changes',
    title: 'Updates to these Terms',
    body: [
      'We may update these Terms from time to time. Material changes will be notified by email and via an in-app banner at least 14 days before they take effect. Continued use of the platform after the effective date constitutes acceptance of the updated Terms.',
    ],
  },
  {
    id: 'disputes',
    eyebrow: 'Disputes',
    title: 'Governing law and dispute resolution',
    body: [
      'These Terms are governed by the laws of the Federal Republic of Nigeria. Any dispute arising under or in connection with them shall first be addressed in good faith between the parties. If unresolved within 30 days, the dispute will be referred to arbitration under the Lagos Court of Arbitration Rules, seated in Lagos, in English.',
    ],
  },
]

const textPrimary = computed(() =>
  props.dark ? 'text-neutral-50' : 'text-neutral-900',
)
const textSecondary = computed(() =>
  props.dark ? 'text-neutral-400' : 'text-neutral-600',
)
const textTertiary = computed(() =>
  props.dark ? 'text-neutral-600' : 'text-neutral-400',
)
const borderClass = computed(() =>
  props.dark ? 'border-white/[0.08]' : 'border-neutral-200',
)
</script>
