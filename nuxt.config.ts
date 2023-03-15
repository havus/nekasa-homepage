// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
    ],
  },
  
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  googleFonts: {
    families: {
      Montserrat: {
        wght: [300, 400, 500, 600, 700],
      },
      PlayfairDisplay: {
        ital: [400],
      },
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-simple-sitemap',
  ],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: 'https://nekasa.com',
    }
  },

  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: '~/assets/css/main.css',
  },

  vite: {
    logLevel: 'info',
  },
})
