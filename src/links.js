// Live advertiser/agency console (ads.usemimu.com). Marketing CTAs drive here.
// `src` is preserved through signup for funnel analytics (PRD §4.1); `?src=agencies`
// pre-selects the agency card on the org step.
export const CONSOLE_URL = 'https://ads.usemimu.com'

export const signupUrl = (src) => `${CONSOLE_URL}/signup${src ? `?src=${encodeURIComponent(src)}` : ''}`
export const loginUrl = () => `${CONSOLE_URL}/login`

// Android TV / box player APK for DOOH screens. Served from the OTA release
// bucket (same artifact SelfUpdateWorker pulls). Bump the version path (vN)
// whenever a new player build ships — see mimu-player release flow.
export const PLAYER_APK_URL =
  'https://mimu-player-apks-prod.s3.eu-north-1.amazonaws.com/v13/app-field.apk'
