// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', 
    '@vueuse/nuxt',
    'nuxt-icon', 
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],
  piniaPersistedstate: {
    storage: 'localStorage'
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
})