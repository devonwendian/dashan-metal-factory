module.exports = {
  siteUrl: 'https://dsmetalstamping.com', // 替换为你的域名
  generateRobotsTxt: true, // 自动生成 robots.txt
  sitemapSize: 7000, // 每个 sitemap 文件的最大 URL 数
  changefreq: 'weekly', // 更新频率，可选：always, hourly, daily, weekly, monthly, yearly, never
  priority: 0.7, // 默认优先级
  i18n: {
    defaultLocale: 'en', // 默认语言
    locales: ['en', 'zh'], // 支持的语言
  },
};