// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/scss/argon-dashboard.scss",
    "~/assets/scss/argon-dashboard.scss",
  ],

  // plugins: [{src:"~/plugins/sidebarplugin.js",ssr:false}],

  // app: {
  //   head: {
  //     link: [
  //       { rel: "stylesheet", href: "bootstrap/dist/css/bootstrap.min.css" },
  //     ],
  //     script: [{ src: "~/node_modules/bootstrap/dist/js/bootstrap.js" }],
  //   },
    
  // },
});
