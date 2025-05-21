module.exports = {
  siteUrl: 'https://dsmetalstamping.com', // 替换为你的域名
  generateRobotsTxt: true, // 自动生成 robots.txt
  sitemapSize: 7000, // 每个 sitemap 文件的最大 URL 数
  changefreq: 'weekly', // 更新频率，可选：always, hourly, daily, weekly, monthly, yearly, never
  priority: 1, // 默认优先级
  i18n: {
    defaultLocale: 'en', // 默认语言
    locales: ['en', 'zh'], // 支持的语言
  },
  transform: async (config, path) => {
    let changefreq = 'monthly';
    let priority = 0.7; // 默认优先级

    // 首页
    if (path === '/' || path.match(/^\/(en|zh)$/)) {
      changefreq = 'weekly';
      priority = 1.0; // 最高优先级
    }
    // 产品页面
    else if (path.includes('/products')) {
      changefreq = 'weekly';
      priority = 0.9; // 中等优先级
    }
    // 关于我们、联系我们页面
    else if (path.includes('/about') || path.includes('/contact')) {
      changefreq = 'weekly';
      priority = 0.7; // 较低优先级
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};