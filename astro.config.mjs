import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import createRobotsTxtIntegration from 'astro-robots-txt'
import { defineConfig, passthroughImageService } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'http://vsxpert.tech/',
  base: '/',
  image: {
    service: passthroughImageService()
  },
  integrations: [
    createRobotsTxtIntegration({
      host: 'vsxpert.tech',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 10
        },
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10
        }
      ]
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000
    }),
    tailwind()
  ]
})
