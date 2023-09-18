import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/raiya/Appdid Live Projects/glow-sense/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}