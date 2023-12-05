// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    ['@nuxtjs/google-fonts',{
      families: {
        Roboto: [400, 500, 700]
      }
    }]
  ],
  image: {
    dir: 'assets/images'
  },
  app: {
    // baseURL: process.env.NODE_ENV === 'production' ? '/neow/' : '/',
    // buildAssetsDir: '/assets/'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
