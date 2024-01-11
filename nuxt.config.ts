// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxt/content',
		'@pinia/nuxt',
  ],
  colorMode: {
    preference: 'dark'
  },
	css: ['~/assets/app.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
			...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
		}
	},
  experimental: {
    payloadExtraction: true,
    componentIslands: true
  },
	routeRules: {
		'/': { prerender: true },
		'/post/**': { ssr: true }
	},
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
        'kotlin',
        'toml',
        'sql'
      ]
    },
    experimental: {
			// @ts-ignore
      search: true
    }
  }
})
