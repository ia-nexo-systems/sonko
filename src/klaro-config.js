const klaroConfig = {
  version: 1,
  elementID: 'klaro',
  styling: {
    theme: ['dark', 'bottom', 'wide'],
  },
  noAutoLoad: false,
  htmlTexts: false,
  embedded: false,
  groupByPurpose: true,
  storageMethod: 'cookie',
  cookieName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  privacyPolicy: '/privacidad',
  lang: 'es',
  translations: {
    es: {
      consentNotice: {
        description:
          'Usamos cookies para analizar el trafico y mejorar tu experiencia. Puedes aceptar todas o configurarlas.',
      },
      acceptAll: 'Aceptar todas',
      declineAll: 'Rechazar',
      acceptSelected: 'Aceptar seleccion',
      close: 'Cerrar',
      purposes: {
        analytics: 'Analitica',
        advertising: 'Publicidad',
      },
    },
  },
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [
        [/^_ga/, '/', 'profesorsonko.com'],
        [/^_gid/, '/', 'profesorsonko.com'],
      ],
      onAccept: `
        window['ga-disable-GA_MEASUREMENT_ID'] = false;
      `,
      onDecline: `
        window['ga-disable-GA_MEASUREMENT_ID'] = true;
      `,
    },
    {
      name: 'google-ads',
      title: 'Google Ads',
      purposes: ['advertising'],
      cookies: [
        [/^_gcl/, '/', 'profesorsonko.com'],
      ],
    },
  ],
};

export default klaroConfig;
