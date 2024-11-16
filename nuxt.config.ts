import material from '@primevue/themes/material';


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    'nuxt-icon-tw',
  ],

  nitro: {
    firebase: {
      gen: 2,
      httpsOptions: {
        region: 'europe-west1',
        maxInstances: 3,
      }
    },
  }, 

  tailwindcss: {
    configPath: './tailwind.config.js',  // Pfad zu Ihrer Tailwind-Konfigurationsdatei
  },

  css: [
    '~/assets/css/toast.css'
  ],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    }
  },

  // GET ENV VARIABLES
  runtimeConfig: {
    // Server-only variables (won't be exposed to client)
    FB_API_KEY: process.env.FB_API_KEY,
    FB_AUTH_DOMAIN: process.env.FB_AUTH_DOMAIN,
    FB_PROJECT_ID: process.env.FB_PROJECT_ID,
    FB_STORAGE_BUCKET: process.env.FB_STORAGE_BUCKET,
    FB_MESSAGING_SENDER_ID: process.env.FB_MESSAGING_SENDER_ID,
    FB_APP_ID: process.env.FB_APP_ID,
    FB_MEASUREMENT_ID: process.env.FB_MEASUREMENT_ID,
  }
})