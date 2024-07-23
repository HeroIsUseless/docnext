/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://front-interview.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // exclude: ['/1_internet', '/2_htmljscss/*', '/3_frame/*', '/4_writeq/*', '/5_design', '/6_project'],
  robotsTxtOptions: {
    policies: [{ 
      userAgent: '*', 
      allow: '/',
      // disallow: ['/1_internet', '/2_htmljscss/', '/3_frame/', '/4_writeq/', '/5_design', '/6_project'] 
    }]
  },
};
