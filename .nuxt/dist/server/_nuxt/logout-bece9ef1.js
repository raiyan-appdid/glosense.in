import { useSSRContext } from "vue";
import "hookable";
import { u as useCookie } from "../server.mjs";
import "devalue";
import "klona";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "cookie-es";
import "destr";
import "ohash";
import "vue/server-renderer";
import "defu";
const _sfc_main = {
  __name: "logout",
  __ssrInlineRender: true,
  setup(__props) {
    const token = useCookie();
    token.value = "";
    return (_ctx, _push, _parent, _attrs) => {
      _push(` log out `);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/logout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=logout-bece9ef1.js.map
