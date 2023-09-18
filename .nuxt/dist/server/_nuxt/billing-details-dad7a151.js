import { _ as __nuxt_component_0 } from "./HeaderCommon-d71516b4.js";
import { ref, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import "./logo-6f228940.js";
import "../server.mjs";
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
const _sfc_main = {
  __name: "billing-details",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderCommon = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderCommon, null, null, _parent));
      _push(`<div class="product-details px-3 md:px-8 mt-20 sm:mt-24 pb-20 bg-[#efe8df]"><h2 class="text-secondary text-2xl font-bold text-center py-2">This is billing details page</h2><div class="grid grid-cols-12"><div class="container mx-auto col-span-8"><form><div class="grid grid-cols-2 gap-5"><div class=""><label for="text" class="block mb-2 text-md font-bold text-black">Billing name</label><input type="text" id="name"${ssrRenderAttr("value", unref(name))} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name"></div><div class=""><label for="address" class="block mb-2 text-md font-bold text-black">Billing Address</label><input${ssrRenderAttr("value", _ctx.address)} id="address" class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Address"></div><div class=""><label for="city" class="block mb-2 text-md font-bold text-black">Billing City</label><input id="city"${ssrRenderAttr("value", _ctx.city)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Phone"></div><div class=""><label for="state" class="block mb-2 text-md font-bold text-black">Billing State</label><input id="state"${ssrRenderAttr("value", _ctx.state)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><div class=""><label for="pincode" class="block mb-2 text-md font-bold text-black">Pincode</label><input id="pincode"${ssrRenderAttr("value", _ctx.pincode)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><div class=""><label for="country" class="block mb-2 text-md font-bold text-black">Country</label><input id="country"${ssrRenderAttr("value", _ctx.country)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><div class=""><label for="phone" class="block mb-2 text-md font-bold text-black">Conctact Number</label><input id="phone"${ssrRenderAttr("value", _ctx.phone)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><div class=""><label for="email" class="block mb-2 text-md font-bold text-black">Email</label><input id="email" type="email"${ssrRenderAttr("value", _ctx.email)} class="bg-gray-50 border border-gray-300 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></div><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center -600 -blue-700 -blue-800">Submit</button></div></form></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/billing-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=billing-details-dad7a151.js.map
