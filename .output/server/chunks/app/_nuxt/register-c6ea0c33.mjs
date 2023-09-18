import { _ as __nuxt_component_0 } from './HeaderCommon-d71516b4.mjs';
import { u as useCookie, a as useRuntimeConfig } from '../server.mjs';
import { ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const password = ref("");
    const confirm_password = ref("");
    useCookie();
    const config = /* @__PURE__ */ useRuntimeConfig();
    config.public.baseUrl;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderCommon = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderCommon, null, null, _parent));
      _push(`<div class="product-details px-3 md:px-8 mt-20 sm:mt-24 pb-20 bg-[#efe8df]"><h2 class="text-secondary text-2xl font-bold text-center py-2">Register</h2><div class="container mx-auto"><form><div class="mb-6"><label for="text" class="block mb-2 text-md font-bold text-black">Name</label><input type="text" id="name"${ssrRenderAttr("value", name.value)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400" placeholder="Name"></div><div class="mb-6"><label for="email" class="block mb-2 text-md font-bold text-black">Your email</label><input type="email"${ssrRenderAttr("value", email.value)} id="email" class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400" placeholder="name@gmail.com"></div><div class="mb-6"><label for="email" class="block mb-2 text-md font-bold text-black">Phone</label><input type="number" id="number"${ssrRenderAttr("value", phone.value)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400" placeholder="Phone"></div><div class="mb-6"><label for="password" class="block mb-2 text-md font-bold text-black">Password</label><input type="password" id="password"${ssrRenderAttr("value", password.value)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400"></div><div class="mb-6"><label for="password" class="block mb-2 text-md font-bold text-black">Confirm Password</label><input type="password" id="confirm-password"${ssrRenderAttr("value", confirm_password.value)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400"></div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center -600 -blue-700 -blue-800">Submit</button></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=register-c6ea0c33.mjs.map
