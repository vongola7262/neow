// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontaine',
    ['@nuxtjs/google-fonts',{
      families: {
        Roboto: [400, 500, 700]
      }
    }]
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
