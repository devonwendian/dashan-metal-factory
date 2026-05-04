const { locales, defaultLocale } = require('./locales.json');

module.exports = {
  i18n: {
    locales,
    defaultLocale,
  },
  localeDetection: false,
};
