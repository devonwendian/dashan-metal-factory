const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    domains: ['localhost'], // 你可以根据实际情况配置
    formats: ['image/webp', 'image/avif'],
  },
};
