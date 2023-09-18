import { _ as __nuxt_component_0 } from './HeaderCommon-d71516b4.mjs';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_4$1 } from './jar-2d047ea6.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0, a as _imports_2, b as _imports_3, c as _imports_7, d as _imports_8 } from './rl-small-4862cacf.mjs';
import { _ as _imports_1, a as _imports_4, b as _imports_5, c as _imports_6 } from './Asset-23-4x-8eb1aac4.mjs';
import { _ as _imports_3$1 } from './logo-6f228940.mjs';
import { _ as _imports_10 } from './founder-image-a66f0367.mjs';
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

const _sfc_main$1 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper2) => {
      console.log(swiper2);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    breakpoints: {
      "640": {
        slidesPerView: 2
        // spaceBetween: 20,
      },
      "768": {
        slidesPerView: 2
        // spaceBetween: 40,
      },
      "1024": {
        slidesPerView: 3
        // spaceBetween: 50,
      }
    },
    modules: $setup.modules,
    "slides-per-view": _ctx.auto,
    "space-between": 0,
    navigation: "",
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    onSwiper: $setup.onSwiper,
    onSlideChange: $setup.onSlideChange
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10"${_scopeId2}><div class="image p-4 bg-primary"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-2/4 mx-auto" alt=""${_scopeId2}></div><div class="text flex flex-col justify-center items-center mb-3"${_scopeId2}><p class="p-2 leading-relaxed"${_scopeId2}>Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair.</p><button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center"${_scopeId2}>View More</button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                  createVNode("div", { class: "image p-4 bg-primary" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      class: "w-2/4 mx-auto",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                    createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                    createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10"${_scopeId2}><div class="image p-4 bg-pink-300"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-2/4 mx-auto" alt=""${_scopeId2}></div><div class="text flex flex-col justify-center items-center mb-3"${_scopeId2}><p class="p-2 leading-relaxed"${_scopeId2}>Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair.</p><button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center"${_scopeId2}>View More</button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                  createVNode("div", { class: "image p-4 bg-pink-300" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      class: "w-2/4 mx-auto",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                    createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                    createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10"${_scopeId2}><div class="image p-4 bg-pink-300"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-2/4 mx-auto" alt=""${_scopeId2}></div><div class="text flex flex-col justify-center items-center mb-3"${_scopeId2}><p class="p-2 leading-relaxed"${_scopeId2}>Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair.</p><button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center"${_scopeId2}>View More</button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                  createVNode("div", { class: "image p-4 bg-pink-300" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      class: "w-2/4 mx-auto",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                    createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                    createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10"${_scopeId2}><div class="image p-4 bg-pink-300"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-2/4 mx-auto" alt=""${_scopeId2}></div><div class="text flex flex-col justify-center items-center mb-3"${_scopeId2}><p class="p-2 leading-relaxed"${_scopeId2}>Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair.</p><button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center"${_scopeId2}>View More</button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                  createVNode("div", { class: "image p-4 bg-pink-300" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      class: "w-2/4 mx-auto",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                    createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                    createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10"${_scopeId2}><div class="image p-4 bg-pink-300"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-2/4 mx-auto" alt=""${_scopeId2}></div><div class="text flex flex-col justify-center items-center mb-3"${_scopeId2}><p class="p-2 leading-relaxed"${_scopeId2}>Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair.</p><button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center"${_scopeId2}>View More</button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                  createVNode("div", { class: "image p-4 bg-pink-300" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      class: "w-2/4 mx-auto",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                    createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                    createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10"${_scopeId2}><div class="image p-4 bg-pink-300"${_scopeId2}><img${ssrRenderAttr("src", _imports_4$1)} class="w-2/4 mx-auto" alt=""${_scopeId2}></div><div class="text flex flex-col justify-center items-center mb-3"${_scopeId2}><p class="p-2 leading-relaxed"${_scopeId2}>Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair.</p><button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center"${_scopeId2}>View More</button></div></div>`);
            } else {
              return [
                createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                  createVNode("div", { class: "image p-4 bg-pink-300" }, [
                    createVNode("img", {
                      src: _imports_4$1,
                      class: "w-2/4 mx-auto",
                      alt: ""
                    })
                  ]),
                  createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                    createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                    createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                createVNode("div", { class: "image p-4 bg-primary" }, [
                  createVNode("img", {
                    src: _imports_4$1,
                    class: "w-2/4 mx-auto",
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                  createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                  createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                createVNode("div", { class: "image p-4 bg-pink-300" }, [
                  createVNode("img", {
                    src: _imports_4$1,
                    class: "w-2/4 mx-auto",
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                  createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                  createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                createVNode("div", { class: "image p-4 bg-pink-300" }, [
                  createVNode("img", {
                    src: _imports_4$1,
                    class: "w-2/4 mx-auto",
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                  createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                  createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                createVNode("div", { class: "image p-4 bg-pink-300" }, [
                  createVNode("img", {
                    src: _imports_4$1,
                    class: "w-2/4 mx-auto",
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                  createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                  createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                createVNode("div", { class: "image p-4 bg-pink-300" }, [
                  createVNode("img", {
                    src: _imports_4$1,
                    class: "w-2/4 mx-auto",
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                  createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                  createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "card flex flex-col justify-center items-center border border-black m-20 sm:m-10" }, [
                createVNode("div", { class: "image p-4 bg-pink-300" }, [
                  createVNode("img", {
                    src: _imports_4$1,
                    class: "w-2/4 mx-auto",
                    alt: ""
                  })
                ]),
                createVNode("div", { class: "text flex flex-col justify-center items-center mb-3" }, [
                  createVNode("p", { class: "p-2 leading-relaxed" }, "Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance. Discover a World of Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your Hair."),
                  createVNode("button", { class: "bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center" }, "View More")
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "about-us-dummpy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderCommon = __nuxt_component_0;
      const _component_AboutCarousel = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderCommon, null, null, _parent));
      _push(`<div class="about-page mt-20 sm:mt-24 pb-20 bg-[#efe8df]"><img class="absolute opacity-50 md:w-[18rem] w-[10rem] bottom-[-8rem] left-[5rem]"${ssrRenderAttr("src", _imports_0)} alt=""><img class="absolute opacity-50 md:w-[10rem] w-[5rem] inset-[35%] left-[-2rem]"${ssrRenderAttr("src", _imports_1)} alt=""><img class="absolute opacity-50 md:w-[12rem] w-[6rem] left-[30%] top-[10%]"${ssrRenderAttr("src", _imports_2)} alt=""><img class="absolute opacity-50 md:w-[8rem] w-[4rem] right-[40%] top-[10%]"${ssrRenderAttr("src", _imports_3)} alt=""><img class="absolute opacity-50 md:w-[18rem] w-[9rem] bottom-[-10rem] left-[10rem]"${ssrRenderAttr("src", _imports_4)} alt=""><img class="absolute opacity-50 md:w-[6rem] w-[3rem] right-[20%] top-[20%]"${ssrRenderAttr("src", _imports_5)} alt=""><img class="absolute opacity-50 md:w-[40rem] w-[5rem] right-[5rem] top-[-5rem]"${ssrRenderAttr("src", _imports_6)} alt=""><img class="absolute opacity-50 md:w-[15rem] w-[7rem] right-[5rem] bottom-[0rem]"${ssrRenderAttr("src", _imports_7)} alt=""><img class="absolute opacity-50 md:w-[8rem] w-[4rem] right-[25rem] bottom-[10rem]"${ssrRenderAttr("src", _imports_3)} alt=""><img class="absolute opacity-50 md:w-auto right-0 top-[10rem]"${ssrRenderAttr("src", _imports_8)} alt=""><div class="container mx-auto"><div class="header"><h2 class="text-center text-2xl md:3xl font-bold text-secondary mt-6">About Us</h2><h2 class="text-center text-3xl md:text-4xl font-extrabold text-secondary mt-12 leading-normal">Unlock Radiance Through Innovative Hair Care</h2><br><p class="text-center">Elevate Your Hair Care Ritual with Glosense: Where Science Meets Glamour. Our Luxurious Formulas Deliver Transformative Results, Nourishing Every Strand for Hair That&#39;s Healthy, Vibrant, and Unforgettably Beautiful. </p></div><div class="grid grid-cols-12 md:gap-10 mt-12"><div class="md:col-span-5 col-span-12 bg-neutral-50 flex justify-center items-center"><div class="py-8 px-6 md:py-16 md:px-6 flex justify-center"><img${ssrRenderAttr("src", _imports_3$1)} class="w-3/4 text-center" alt=""></div></div><div class="md:col-span-7 mt-5 md:mt-0 col-span-12 md:px-8 px-4 leading-loose"><p class=""><b>Welcome to Glosense</b>, where we help you to get your health and well-being through the power of superfoods! Our brand is build on a foundation of passion, dedication, and the unwavering belief that nature&#39;s gifts can truly transform llives.</p><p>We are here to provide you with the highest quality superfoods, meticulously sourced from the purest and most sustainable environments on Earth..</p><p>we are more than just a superfood company; we are a community of health enthusiasts, wellness advocates, and nature lovers</p></div></div><h1 class="text-secondary text-4xl text-center font-bold mt-12">Brand Highlight</h1><p class="text-center mt-6">Discover Radiant Beauty Through Innovative Soutions and Luxuriour Formulas. Transform Your Tresses and Unveil Your Hair&#39;s True Brilliance.</p><div class="carousel">`);
      _push(ssrRenderComponent(_component_AboutCarousel, null, null, _parent));
      _push(`</div><h2 class="text-secondary text-4xl font-bold mt-10 text-center">Our Founder</h2><p class="text-center">Unveiling the Mastermind Behind Glosense&#39;s Innovative Journey in Revolutionizing</p><div class="founder-details container mx-auto"><div class="grid grid-cols-12 gap-5 mt-10"><div class="col-span-12 lg:col-span-6 mx-auto"><img${ssrRenderAttr("src", _imports_10)} class="w-3/4 mx-auto" alt=""></div><div class="col-span-12 lg:col-span-6 mx-3"><h2 class="font-bold text-2xl text-black leading-normal">Amelia Rivers</h2><p class="my-2">Age: 32</p><h6 class="text-xl leading-10">Amelia Rivers, a passionate entrepreneur with a love for beauty and innovation, embarked on her journey by founding Glosense. With a background in cosmetic chemistry, she saw a gap in the haircare industry for products that combined science and luxury. Armed with a vision to create effective and sustainable hair solutions, Amelia&#39;s dedication led her to tirelessly research and develop formulas that catered to a diverse range of hair types. Her commitment to quality, coupled with her drive to empower individuals to embrace their unique hair textures, propelled Glosense to become a sought-after brand in the haircare market. </h6></div></div></div><div class="bg-secondary my-4 p-0 h-3"></div><h6 class="text-center text-4xl font-bold my-9">Where can we take you next?</h6><div class="grid grid-cols-12"><div class="bg-primary col-span-4 lg:col-span-2 flex justify-center items-center sm:py-4"><img${ssrRenderAttr("src", _imports_4$1)} class="w-3/4" alt=""></div><div class="px-4 col-span-8 lg:col-span-2 my-auto"><p>Experience the ultimate in haircare luxury with Glosense LuxeLock Shampoo. Formulated by experts, this exquisite shampoo combines advanced scientific innovation with natural ingredients to cleanse, nourish, and enhance your hair.</p></div><div class="px-4 col-span-8 lg:hidden lg:col-span-2 mt-3 flex justify-center items-center"><p>Experience the ultimate in haircare luxury with Glosense LuxeLock Shampoo. Formulated by experts, this exquisite shampoo combines advanced scientific innovation with natural ingredients to cleanse, nourish, and enhance your hair.</p></div><div class="bg-primary col-span-4 lg:col-span-2 flex justify-center items-center mt-3 sm:py-4"><img${ssrRenderAttr("src", _imports_4$1)} class="w-3/4" alt=""></div><div class="px-4 hidden lg:block col-span-8 lg:col-span-2 mt-3 flex justify-center items-center"><p>Experience the ultimate in haircare luxury with Glosense LuxeLock Shampoo. Formulated by experts, this exquisite shampoo combines advanced scientific innovation with natural ingredients to cleanse, nourish, and enhance your hair.</p></div><div class="bg-primary col-span-4 lg:col-span-2 flex justify-center items-center mt-3 sm:py-4"><img${ssrRenderAttr("src", _imports_4$1)} class="w-3/4" alt=""></div><div class="px-4 col-span-8 mt-3 lg:col-span-2 flex justify-center items-center"><p>Experience the ultimate in haircare luxury with Glosense LuxeLock Shampoo. Formulated by experts, this exquisite shampoo combines advanced scientific innovation with natural ingredients to cleanse, nourish, and enhance your hair.</p></div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-us-dummpy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-us-dummpy-d5088acf.mjs.map
