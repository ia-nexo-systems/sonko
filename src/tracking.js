/**
 * Tracking helpers — dataLayer events for GTM / Google Ads conversions
 */

// Acción de conversión de lead ya existente en la cuenta Sonko (AW-18064088527).
// La reutilizamos para contar WhatsApp/teléfono/formulario como un "lead" único
// (es lo que mueve el smart bidding). Separar en acciones dedicadas = mejora futura.
const ADS_LEAD_SEND_TO = 'AW-18064088527/fpoXCMu4oJccEM-70KVD';

function push(event, data) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, ...data });
  }
}

/** Dispara la conversión de lead en Google Ads (si gtag está cargado). */
function fireLeadConversion() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: ADS_LEAD_SEND_TO,
      value: 1.0,
      currency: 'EUR',
    });
  }
}

/** WhatsApp click — fires on every wa.me link */
export function trackWhatsAppClick(section) {
  push('whatsapp_click', { click_section: section });
  fireLeadConversion();
}

/** Phone click — fires on every tel: link */
export function trackPhoneClick(section) {
  push('phone_click', { click_section: section });
  fireLeadConversion();
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
