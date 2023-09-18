import { _ as __nuxt_component_0 } from "./HeaderCommon-d71516b4.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./logo-6f228940.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "defu";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderCommon = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeaderCommon, null, null, _parent));
  _push(`<div class="blogs mt-20 sm:mt-24 pb-20 bg-[#efe8df]"><h2 class="py-10 text-secondary text-4xl font-bold text-center">Blogs</h2></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  blogs as default
};
//# sourceMappingURL=blogs-a0fc4250.js.map
