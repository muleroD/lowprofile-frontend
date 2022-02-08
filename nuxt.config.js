export default {
  target: "static",

  head: {
    title: "Low Profile",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["element-ui/lib/theme-chalk/index.css"],

  plugins: ["@/plugins/element-ui", "~/plugins/mixins", "~/plugins/services"],

  components: true,

  buildModules: ["@nuxtjs/google-fonts"],

  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],

  axios: {
    baseURL: "/"
  },

  build: {
    transpile: [/^element-ui/]
  },

  googleFonts: {
    families: {
      "Noto+Sans": true
    }
  }
};
