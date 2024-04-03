// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "https://admin.glosense.in/api/v1",
      gtagId: "G-697HG0FS5T",
    },
    axios: {
      proxy: true,
      credentials: true,
    },
    proxy: {
      "/laravel": {
        target: "https://laravel-auth.nuxtjs.app",
        pathRewrite: { "^/laravel": "/" },
      },
    },
    auth: {
      strategies: {
        laravelSanctum: {
          provider: "laravel/sanctum",
          url: "http://localhost:3000",
        },
      },
    },
  },

  devtools: { enabled: false },
  pages: true,
  css: ["@/assets/css/main.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt3-meta-pixel",
    "@pinia/nuxt",
    "nuxt-vue3-google-signin",
  ],
  googleSignIn: {
    clientId:
      "33151309923-ra30at2ld1r630d742p7k4lfgmc6d3bc.apps.googleusercontent.com",
  },
  facebook: {
    track: "PageView",
    pixelId: "207758315679521",
    autoPageView: true,
    disabled: false,
  },
});
