// https://nuxt.com/docs/api/configuration/nuxt-config
import { globSync } from 'glob'
import path from 'path'

const pathList = globSync('./content/*.md').map(path => '/post' + path.slice(7, -3))

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
  ],
  colorMode: {
    preference: 'dark'
  },
  experimental: {
    payloadExtraction: true
  },
  ssr: true,
  ui: {
    icons: ['eva', 'fa6-brands', 'simple-icons', 'bi', 'fluent']
  },
  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/svg+xml', href: "/code.svg"}
      ]
    }
  },
  nitro: {
    routeRules: {
      '/api/v1/**': {
        proxy: 'http://127.0.0.1:9000/api/v1/**',
      }
    },
    prerender: {
      routes: ['/sitemap.xml', '/rss.xml', ...pathList]
    },
    static: true,
    output: {
      publicDir: path.join(__dirname, '/docs')
    }
  },
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
        light: 'github-light'
      },
      preload: [
        'javascript',
        'typescript',
        'vue',
        'vue-html',
        'java',
        'ruby',
        'go',
        'jsx',
        'tsx',
        'bash',
        'dockerfile',
        'c',
        'cpp',
        'kotlin'
      ]
    }
  }
})
