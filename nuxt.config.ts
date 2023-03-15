// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

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

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  tailwindcss: {
    configPath: './tailwind.config.js',
    cssPath: '~/assets/css/main.css',
  },

  vite: {
    logLevel: 'info',
  },
})
