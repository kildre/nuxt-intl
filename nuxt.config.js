import i18n from "./plugins/i18n"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-intl',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        // lazy: true,
        // langDir: true,
        vueI18nLoader: true,
        locales: [
          { code: 'en', name: 'English', file: '../locales/en.json' },
          { code: 'es', name: 'Español', file: './locales/es.json' },
          { code: 'fr', name: 'français', file: './locales/fr.json' },
        ],

        defaultLocale: 'en',
        // vueI18n: {
          // fallbackLocale: 'en',
          // messages: {
          //   en: {
          //     // code: 'en',
          //     // name: 'English',
          //     title: 'International Jet Set',
          //     depart: 'Depart',
          //     greeting:
          //       "Good evening ladies and gentlemen. This is your captain speaking. Welcome aboard DC-10 flight number 1313 We will be cruising at a height of 35, 000 feet at an air speed of 600 miles per hour. Headphones will be provided by request for a varied program of in flight music Have a good flight",
          //     departure:
          //       'You will depart from New York, Miami, or Los Angeles. ',
          //   },
          //   es: {
          //     // code: 'es',
          //     // name: 'Español',
          //     title: 'Jet Set Internacional',
          //     depart: 'Salir',
          //     greeting:
          //       "Buenas tardes damas y caballeros. Les habla su capitan. Bienvenido a bordo del vuelo DC-10 número 1313 Navegaremos a una altura de 35, 000 pies a una velocidad del aire de 600 millas por hora. Se proporcionarán audífonos a pedido para un variado programa de música en vuelo Tenga un buen vuelo",
          //     departure: 'Saldrá de la Ciudad de México, Acapulco o Tijuana.',
          //   },
          //   fr: {
          //     // code: 'fr',
          //     // name: 'français',
          //     title: 'Jet-set internationale',
          //     depart: 'Partir',
          //     greeting:
          //       "Bonsoir mesdames et messieurs. C'est votre capitaine qui parle. Bienvenue à bord du vol DC-10 numéro 1313. Nous naviguerons à une altitude de 35 000 pieds à une vitesse de 600 milles à l'heure. Des écouteurs seront fournis sur demande pour un programme varié de musique en vol Bon vol",
          //     departure: 'Vous partirez de Paris, DiJon ou Mercialles.',
          //   },
          // },
          //},
        detectBrowserLanguage: {
          useCookie: true,
          cookeiKey: 'i18n_redirected',
          redirectOn: 'root',
        },
        vueI18n: i18n
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    options: {
      fix: true
    }
  },
}
