import { _ as __nuxt_component_0 } from './HeaderCommon-d71516b4.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './logo-6f228940.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'cookie-es';

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

export { blogs as default };
//# sourceMappingURL=blogs-a0fc4250.mjs.map
