/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kenmoronge.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://kenmoronge.com/sitemap.xml',
    ],
  },
  additionalPaths: async (config) => {
    const { projects } = await import('./src/data/projects.ts')
    return projects.map((p) => ({
      loc: `/work/${p.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }))
  },
}
