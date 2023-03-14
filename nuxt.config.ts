// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  tailwindcss: {
    configPath: './tailwind.config.ts',
    cssPath: '~/assets/css/main.css',
  },

  vite: {
    logLevel: 'info',
  },
})
