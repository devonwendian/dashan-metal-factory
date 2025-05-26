const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  images: {
    unoptimized: true, // 跳过图片优化，适合开发阶段
    // domains: ['localhost'], // 你可以根据实际情况配置
    // formats: ['image/webp', 'image/avif'],
  },
};
