module.exports = {
  defaultNS: 'translation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: true,
  },
  detection: {
    order: ['cookie', 'header', 'querystring'],
    caches: ['cookie'],
  },
};