// Live advertiser/agency console (ads.usemimu.com). Marketing CTAs drive here.
// `src` is preserved through signup for funnel analytics (PRD §4.1); `?src=agencies`
// pre-selects the agency card on the org step.
export const CONSOLE_URL = 'https://ads.usemimu.com'

export const signupUrl = (src) => `${CONSOLE_URL}/signup${src ? `?src=${encodeURIComponent(src)}` : ''}`
export const loginUrl = () => `${CONSOLE_URL}/login`
