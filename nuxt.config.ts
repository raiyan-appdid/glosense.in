// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: "https://glosense.in/api/v1",
    },
    modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
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
          url: "https://glosense.in",
        },
      },
    },
  },
  devtools: { enabled: false },
  pages: true,
  css: ["@/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],
});
