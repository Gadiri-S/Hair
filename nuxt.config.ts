// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/global.scss'
  ],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        Playfair: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        Manope: [400, 500, 600, 700, 800, 900],
        Roboto: [100, 300, 400, 500, 700, 900],
      },
      display: 'swap',
    }],
    
  ]
})
