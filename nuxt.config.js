export default {
  env: {
    baseURL: ((() => {
      if (process.env.NODE_ENV === 'production') {
        return 'http://holokle.info/';
      } else if (process.env.NODE_ENV === 'production') {
        return 'http://holokle-stg.nilgiri-tea.net/';
      } else {
        return 'http://localhost:3000';
      }
    })()),
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode    : 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target  : 'static',
  generate: {
    dir: 'public',
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
    title: 'labelmaker',
    meta : [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=750' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500&display=swap' },
    ],
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components  : true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  styleResources: {
    scss: [
      '~/assets/sass/_mixin.scss',
    ],
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  filenames: {
    app  : ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
    chunk: ({ isDev }) => isDev ? '[name].[hash].js' : '[chunkhash].js',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
};
