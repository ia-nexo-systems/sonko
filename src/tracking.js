/**
 * Tracking helpers — dataLayer events for GTM / Google Ads conversions
 */

function push(event, data) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}

/** WhatsApp click — fires on every wa.me link */
export function trackWhatsAppClick(section) {
  push('whatsapp_click', { click_section: section });
}

/** Phone click — fires on every tel: link */
export function trackPhoneClick(section) {
  push('phone_click', { click_section: section });
}

/** Time on page — fires once after threshold (seconds) */
let timeTracked = false;
export function initTimeOnPage(seconds = 60) {
  if (timeTracked) return;
  timeTracked = true;
  setTimeout(() => {
    push('time_on_page', { seconds_threshold: seconds });
  }, seconds * 1000);
}
