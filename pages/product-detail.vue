<script setup>

import Notiflix from 'notiflix';
import Loading from 'notiflix/build/notiflix-loading-aio';

const promocodeDiscount = ref(0);
const promocodeid = ref(0);
const promocode = ref("GET970");
const promocodeVerified = ref(false);
const review = ref([]);
const reviewCount = ref(0);
const globalStar = ref(5)
const globalReviews = ref(5)
const staticBuyNow = ref(false);
const oneStar = ref();
const twoStar = ref();
const threeStar = ref();
const fourStar = ref();
const fiveStar = ref();
const nextPageUrl = ref();
const prevPageUrl = ref();
const text_1 = ref();
const text_2 = ref();
const nuxtApp = useNuxtApp();
const currentPage = ref(1);
onMounted(function () {
    console.log(nuxtApp.$fb)
    nuxtApp.$fb.enable()
})

const token = useCookie('token');
const count = ref(1);
const counter = useCounter()

function incrementCount() {
    counter.value++;
}

nuxtApp.hook('page:finish', () => {
    Notiflix.Loading.remove();
    getReviews();
    getProductText()
})

onMounted(() => {
    Notiflix.Loading.standard();

    window.addEventListener('scroll', function () {

        staticBuyNow.value = window.scrollY > 400;
        // this.isScrolledToBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;


    });




})

async function getReviews(url = null) {

    if (url) {
        await useFetch(url, {
            method: "GET",
            headers: {
                accept: "application/json"
            },
            onResponse({ request, response, options }) {
                if (response._data.success) {
                    console.log('---------------res-------------');
                    console.log(response);
                    console.log(response._data.data.data.length);
                    oneStar.value = response._data.oneStar;
                    twoStar.value = response._data.twoStar;
                    threeStar.value = response._data.threeStar;
                    fourStar.value = response._data.fourStar;
                    fiveStar.value = response._data.fiveStar;
                    globalStar.value = response._data.data.data[0]['global_star'];
                    globalReviews.value = response._data.data.data[0]['global_reviews'];
                    console.log(globalStar.value);
                    review.value = response._data.data.data;
                    nextPageUrl.value = response._data.data.next_page_url
                    currentPage.value = response._data.data.current_page
                    prevPageUrl.value = response._data.data.prev_page_url
                    reviewCount.value = response._data.reviewCount;
                }
            },
        })
    } else {
        await useFetch(`${apiUrl}/reviews`, {
            method: "GET",
            headers: {
                accept: "application/json"
            },
            onResponse({ request, response, options }) {
                if (response._data.success) {
                    console.log('---------------res-------------');
                    console.log(response);
                    console.log(response._data.data.data.length);
                    oneStar.value = response._data.oneStar;
                    twoStar.value = response._data.twoStar;
                    threeStar.value = response._data.threeStar;
                    fourStar.value = response._data.fourStar;
                    fiveStar.value = response._data.fiveStar;
                    globalStar.value = response._data.data.data[0]['global_star'];
                    globalReviews.value = response._data.data.data[0]['global_reviews'];
                    console.log(globalStar.value);
                    review.value = response._data.data.data;
                    nextPageUrl.value = response._data.data.next_page_url
                    prevPageUrl.value = response._data.data.prev_page_url
                    reviewCount.value = response._data.reviewCount;
                }
            },
        })
    }



    console.log(reviewCount.value);
    console.log(review.value);

}

function decrementCount() {
    if (counter.value > 1) {
        counter.value--;
    }
}

function openModal() {
    const token = useCookie('token');
    if (!token.value) {
        let modal = document.getElementById('authentication-modal')
        modal.classList.remove('hidden');
    }
    else {
        storeAnalytics();
        getUser();
        gateWayIntegration();
        //cc avenue gateway.....
    }
}

async function storeAnalytics() {
    await useFetch(`${apiUrl}/store-analytics`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + token.value,
        },
        onResponse({ request, response, options }) {
            console.log(response);
        },
    })
}

function gateWayIntegration(name = null) {

    console.log(promocodeVerified.value);
    if (promocodeVerified.value == true) {
        window.location.href = 'billing-details?count=' + counter.value + '&promo=1';
        return true;
    }
    window.location.href = 'billing-details?count=' + counter.value;
}


function applyPromoCode() {
    promocode.value = "GET970";
    verifyPromoCode();
}

async function verifyPromoCode() {
    await useFetch(`${apiUrl}/promo-code`, {
        method: "POST",
        body: {
            promocode: promocode.value
        },
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response._data);
            const verified = response._data.verified;
            promocodeVerified.value = verified;
            if (verified) {
                console.log(response._data.data.discount);
                promocodeDiscount.value = response._data.data.discount;
                promocodeid.value = response._data.data.id;
            } else {
                promocodeDiscount.value = 0;
                promocodeid.value = "";
            }
        },
    })
    console.log(promocodeDiscount.value);
}

async function getProductText() {
    await useFetch(`${apiUrl}/product/text-get`, {
        method: "GET",
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            text_1.value = response._data.data.text_1;
            text_2.value = response._data.data.text_2;
        },
    })
}


const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;

// async function getSlider() {
//     const data = await useFetch(`${apiUrl}/slider`, {
//         headers: {
//             "accept": "application/json",
//             'Authorization': "Bearer " + token.value,
//         },
//         onResponse({ request, response, options }) {
//             console.log(response);
//         },
//         onRequestError({ request, options, error }) {
//             console.log(error);
//         },
//     });
//     getUser()
// }

async function getUser() {
    const data = await useFetch(`${apiUrl}/user-detail`, {
        headers: {
            "accept": "application/json",
            'Authorization': "Bearer " + token.value,
        },
        onResponse({ request, response, options }) {
            if (response._data.success) {
                console.log(response._data);
                const name = response._data.data.first_name;
                gateWayIntegration(name)
            }
        },
        onRequestError({ request, options, error }) {
            console.log(error);
        },
    });
}

function generateAvatarUrl(title) {
    return `https://ui-avatars.com/api/?length=1&name=${title}`;
}


</script>

<template>
    <div id="NotiflixLoadingWrap"
        class="notiflix-loading top-0 nx-with-animation w-screen h-screen absolute backdrop-blur-xl bg-primary"
        style="z-index: 4000; background: #efe8df; animation-duration: 400ms; display: flex; flex-flow: column wrap; align-items: center; justify-content: center;">
        <div style="width:80px; height:80px;" class="notiflix-loading-icon z-50"><svg xmlns="http://www.w3.org/2000/svg"
                stroke="#32c682" width="80px" height="80px" viewBox="0 0 44 44">
                <g fill="none" fill-rule="evenodd" stroke-width="2">
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s"
                            keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20">
                        </animate>
                        <animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s"
                            keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0">
                        </animate>
                    </circle>
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s"
                            keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20">
                        </animate>
                        <animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s"
                            keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0">
                        </animate>
                    </circle>
                </g>
            </svg></div>
    </div>
    <HeaderCommon />
    <ProductPop />

    <!-- Main modal -->
    <LoginModal />
    <div class="conteiner">
    </div>

    <a target="_blank"
        href="https://api.whatsapp.com/send?phone=919967116267&text=I want to know more about Hair You Glo!">
        <span class="wa-whatsapp" style="z-index: 0">
            <svg width="45" height="45" viewBox="0 0 256 258" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                        <stop offset="0%" stop-color="#1FAF38" />
                        <stop offset="100%" stop-color="#60D669" />
                    </linearGradient>
                    <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                        <stop offset="0%" stop-color="#F9F9F9" />
                        <stop offset="100%" stop-color="#FFF" />
                    </linearGradient>
                </defs>
                <path fill="url(#logosWhatsappIcon0)"
                    d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" />
                <path fill="url(#logosWhatsappIcon1)"
                    d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z" />
                <path fill="#FFF"
                    d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" />
            </svg>
        </span>
    </a>

    <div class="product-details px-3 md:px-8  mt-24 pt-4 sm:mt-24 pb-0 bg-white">
        <!-- <h2 class="text-secondary text-2xl font-bold text-center py-2">Product</h2> -->
        <div class="container mx-auto sm:pt-4">
            <div class="grid grid-cols-12 mt-2 sm:gap-4">
                <div class="col-span-12 sm:col-span-5">
                    <ProductImage />
                </div>
                <div class="col-span-12 sm:col-span-7">
                    <h2 class="font-extrabold text-secondary sm:text-4xl text-3xl  my-3">{{ text_1 }}</h2>
                    <p class="font-bold sm:text-lg text-xs">{{ text_2 }}
                    </p>
                    <!-- <h2 class="font-semibold text-black text-xl">FOR HEALTHY & STRONG HAIR</h2> -->

                    <div class="flex my-0">
                        <!-- <span class="text-lg font-semibold mr-2">{{ globalStar }}</span> -->
                        <div class="Stars block" :style="{ '--rating': globalStar }"
                            aria-label="Rating of this product is 2.3 out of 5.">
                        </div>

                        <!-- <span v-for="index in parseInt(globalStar)"><svg width="25" height="25" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508" stroke="black" stroke-width="0.3"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span v-for="index1 in parseInt(5 - globalStar)"><svg width="25" height="25" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" stroke="black" stroke-width="0.3"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span> -->
                        <span class="text-sm font-semibold ml-1"> {{ globalStar }}({{ reviewCount }} reviews)</span>



                        <!-- <span v-for="index in globalStar"><svg width="45" height="45" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="orange"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span v-for="index in (5 - globalStar)"><svg width="45" height="45" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="white"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span> -->

                        <!-- <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span> -->
                        <!-- <span class="text-2xl font bold my-auto ml-2">10 Reviews</span> -->
                    </div>


                    <div class="mt-4">
                        <!-- <p class=""><s>₹ 1299.00</s></p> -->
                    </div>
                    <div class="flex">
                        <div>
                            <p class=" text-primary text-2xl"><span class="font-semibold">₹</span> <span
                                    class="font-extrabold">1299.00</span></p>

                            <p class="text-gray-500 text-sm">Jar-120g (30 servings)</p>
                        </div>

                        <div class="border-2 border-dashed border-secondary grid grid-cols-12 sm:w-[60%] p-1 ml-3">
                            <div class="col-span-12 flex justify-center">
                                <span class="my-auto text-secondary sm:text-lg text-center font-semibold text-sm">Get
                                    it for <span class="font-extrabold text-primary">₹896</span> (Save ₹403)</span>
                            </div>
                            <span class="col-span-12 text-secondary sm:text-lg font-semibold text-sm text-center">Use
                                Code:
                                <span class="font-semibold text-md">HOLI31</span></span>
                        </div>


                        <!-- <span class="my-auto text-sm bg-secondary text-white ml-1 px-1">25% off</span> -->
                        <!-- <span v-if="!promocodeVerified" class="font-extrabold text-primary mt-3 text-3xl mr-9">Rs. {{ 1299
                            -
                            promocodeDiscount }}
                            /-</span>
                        <span v-else class="font-extrabold text-secondary mt-3 text-3xl mr-9">Rs. {{ 1299 -
                            promocodeDiscount }}
                            /-</span>
                        <span class="font-extrabold text-secondary mt-6 text-3xl">870</span> -->
                    </div>


                    <!-- <div>
                        <p class="font-semibold">(Apply Promo code to Save Rs. 329 /-)</p>
                    </div> -->
                    <!-- <div class="flex">
                        <div class="flex flex-col justify-center">
                            <div class="mt-3">
                                <span
                                    class="p-2 text-secondary border border-3 border-secondary cursor-pointer border-dashed">
                                    GET970
                                </span>
                                <span v-if="!promocodeVerified" @click="applyPromoCode"
                                    class="ml-3 my-auto py-1 px-2 bg-primary rounded-xl cursor-pointer">Apply</span>
                                <span v-else
                                    class="ml-3 my-auto py-1 px-2 bg-secondary rounded-xl cursor-pointer">Applied</span>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="flex">
                        <p class="text-primary font-medium text-lg mt-3">( Get it at <span class="text-secondary">Rs.
                                870</span> - apply "FIRSTJAR" promo code)</p>
                    </div> -->
                    <div class="flex mt-6">
                        <button
                            class="my-auto bg-white text-secondary ml-4 px-4 font-extrabold rounded-l-lg border-r-0 border-2 border-secondary text-2xl py-2 cursor-pointer"
                            @click="decrementCount">-</button>
                        <input type="number" v-model="counter"
                            class="w-[2rem] text-xl font-bold text-center border-r-0 rounded-none border-l-0 border-2 border-secondary bg-white text-secondary hover:border-secondary focus:outline-none"
                            name="" id="">
                        <button
                            class="my-auto bg-white px-4 cursor-pointer rounded-r-lg text-secondary border-l-0 border-2 border-secondary py-2 mr-4 font-bold text-2xl"
                            @click="incrementCount">+</button>
                        <button @click="openModal"
                            class="bg-secondary mr-5 rounded-lg text-white text-xl  font-bold border  py-2 px-7 transition ease-in-out w-full sm:w-fit  hover:-translate-y-1 delay-75 hover:scale-110 hover:bg-black hover:text-white duration-500">BUY
                            NOW</button>
                    </div>

                    <div class="mx-4 sm:mx-0">


                        <div class="grid grid-cols-12 mt-4">
                            <div class="col-span-12">
                                <p>Free Shipping Across India. Delivery in 3-6 business days.</p>
                            </div>
                            <!-- <div class="col-span-6">
                                <div class="flex"> <span class="inline-block"><svg width="25" height="25"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="#eab508"
                                                d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                        </svg></span>{{ globalStar }}/5({{ reviewCount }}) </div>
                            </div> -->
                            <!-- <div class="col-span-12">
                                <p>Delivery in 3-6 business days.</p>
                            </div> -->
                        </div>
                    </div>


                </div>
            </div>
            <div class="my-10 sm:block hidden">
                <!-- <h2>raiyan</h2> -->
                <img src="/images/product/Desktop-product-page-banner.png" alt="" />
            </div>

            <div class="my-10 w-full sm:hidden block overflow-scroll scroll-container">
                <!-- <h2>raiyan</h2> -->
                <div class="image-wrapper">
                    <!-- <img src="/images/product/Desktop-product-page-banner.png" class="scrolling-image"
                        style="max-width: 200% !important;" alt="" /> -->
                    <img src="/images/product/product-mobile-banner.png" class="scrolling-image"
                        style="max-width: 200% !important;" alt="" />
                    <img src="/images/product/product-mobile-banner.png" class="scrolling-image"
                        style="max-width: 200% !important;" alt="" />
                </div>
            </div>

            <!-- <div class="my-10 sm:hidden block">
                <img src="/images/product/Mobile-product-page-banner.png" alt="" />
            </div> -->

            <!-- <div class="my-5">
                <h2 class="font-bold">Solution For: </h2>
                <p>Solution For:
                    It looks like your message got cut off. Could you please provide more context or details about the
                    problem or situation you need a solution for?</p>
            </div> -->

            <!-- <div class="flex bg-white justify-between rounded-xl">
                <input type="text" name="" class="w-2/3 h-9 rounded-xl p-6" placeholder="Type your comments....."
                    id=""><button class="bg-white text-black my-auto text-sm font-extrabold p-2">ADD
                    COMMENT</button>
            </div> -->
            <Accordion />

            <!-- <div class="grid grid-cols-12 gap-4 my-8">
                <div class="col-span-3">
                    <img src="/public/images/product/boss.jpg" alt="">
                </div>
                <div class="col-span-3">
                    <img src="/public/images/product/boss.jpg" alt="">
                </div>
                <div class="col-span-3">
                    <img src="/public/images/product/boss.jpg" alt="">
                </div>
                <div class="col-span-3">
                    <img src="/public/images/product/boss.jpg" alt="">
                </div>
            </div> -->

            <Tabs />


            <!-- <div class="container mx-auto my-10 sm:my-5">
                <div class="grid grid-cols-12 mb-9 sm:mb-0">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest text-secondary">HELPS IN: </h2>
                        <p class="leading-2 text-xl sm:text-2xl text-justify">-Maintaining a healthy scalp with improved
                            blood
                            circulation.
                        <p class="leading-2 text-xl sm:text-2xl text-justify my-3">-Encouraging better hair growth and helps
                            prevent dandruff.</p>
                        <p class="leading-2 text-xl sm:text-2xl text-justify">-Cultivate Optimal Hair Follicle Health.</p>
                        <p class="leading-2 text-xl sm:text-2xl text-justify my-3">-Reducing hair loss, and strengthening
                            hair
                            strands.</p>
                        </p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:flex sm:justify-end sm:order-2">
                        <img src="/images/product/product-details-4.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />
                    </div>
                </div>

                <div class="grid grid-cols-12 my-10 sm:my-1">
                    <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product/product-details-3.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />
                    </div>
                    <div class="sm:col-span-7 col-span-12 sm:my-auto">
                        <h2 class="font-extrabold text-3xl text-secondary tracking-widest">HOW TO USE: </h2>
                        <p class="leading-2 text-xl text-justify sm:text-2xl">-Blend ½ tablespoon of Hair-you-glo into your
                            water.
                        <p class="leading-2 text-xl text-justify sm:text-2xl my-3">-Ensure it's well-mixed,have a sip &
                            revel in
                            the moment 🤙</p>

                        <p class="leading-2 text-xl text-justify sm:text-2xl"></p>

                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-12">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto">
                        <h2 class="font-extrabold text-3xl my-3 text-secondary tracking-widest">WHEN TO USE:</h2>
                        <p class="leading-2 text-xl text-justify sm:text-2xl">You can consume it any time of the day, but
                            for better experience we
                            suggest consuming it in the
                            morning.</p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:flex sm:justify-end sm:order-2">
                        <img src="/images/product/product-details-5.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />

                    </div>
                </div>

                <div class="my-10 sm:my-1">
                    <div class="">
                        <h2 class="font-extrabold text-3xl tracking-widest text-secondary text-center my-3">STORAGE TIP:
                        </h2>
                        <p class="leading-2 text-xl text-center sm:text-2xl">For best results, utilise a dry
                            spoon when
                            dealing with the mix, and
                            be sure to seal the jars
                            tightly after usage to prevent solidification or lumps.
                        </p>
                    </div>
                </div>
            </div> -->

            <!-- <div class="container mx-auto">
                <h2 class="text-center text-3xl font-extrabold text-secondary mt-10 mb-3">HOW IT WORKS:</h2>
                <h3 class=" text-2xl font-bold ">-Effectively suppress DHT🌿:</h3>
                <p class="text-xl">Carrots and Amla, rich in Vitamin C, hydrate the scalp, prevent dryness, improve blood
                    circulation, and
                    promote hair growth while suppressing DHT.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-Maintains pH Level 🔗:
                </h3>
                <p class="text-xl">Lemon balances scalp pH, prevents dandruff, and fosters a healthy environment for hair
                    follicles where
                    Fenugreek seeds enhance hair texture, shine, resilience, and support growth.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-Improves Blood Circulation🧘:
                </h3>
                <p class="text-xl">Pomegranate and Orange, with vitamin E and antioxidants, boost scalp blood circulation,
                    delivering
                    essential nutrients for healthier, thicker hair, while preventing oxidative stress and hair cell damage.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-Supports Collagen Synthesis💫:
                </h3>
                <p class="text-xl">Aids in collagen synthesis, vital for maintaining hair's strength and structure, reducing
                    hair thinning
                    and breakage.
                </p>
            </div> -->

            <!-- <div class="container mx-auto">
                <h2 class="text-center text-3xl font-extrabold text-secondary mt-10 mb-3">WHAT’S IN IT?</h2>
                <h3 class=" text-2xl font-bold mt-4">-AMLA:</h3>
                <p class="text-xl">Indian Gooseberry better known as Amla, contains Vitamin C, which is helpful to boost
                    collagen for
                    healthy hair and improves blood circulation to prevent dryness.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-ORANGE
                </h3>
                <p class="text-xl">A Citrus Fruit rich in vitamin E, an antioxidant that supports hair follicles, prevents
                    oxidative stress,
                    and boosts hair health.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-POMEGRANATE
                </h3>
                <p class="text-xl">Enhances hair elasticity, reduces breakage, and promotes growth for healthier hair.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-SEA BUCKTHORN:
                </h3>
                <p class="text-xl">Packed with omega fatty acids, reduces inflammation, nourishes scalp and follicles,
                    promotes hair growth,
                    and reduces hair loss.
                </p>
            </div>
            <div class="container mx-auto">
                <h2 class="text-center text-3xl font-extrabold text-secondary mt-10">WHAT TO EXPECT:
                </h2>
                <h3 class=" text-2xl font-bold">-After 4 weeks:</h3>
                <p class="text-xl">Reduces hair fall and dandruff, minimises breakage and itchiness, while nourishing hair
                    strands.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-After 8 weeks:
                </h3>
                <p class="text-xl">Promotes healthy blood circulation, provides hydration to prevent dryness, and encourages
                    the scalp to
                    maintain optimal oil and moisture levels.

                </p>
                <h3 class=" text-2xl font-bold mt-4" id="faq-redirect">-After 12 weeks:
                </h3>
                <p class="text-xl">Reduces scalp inflammation and stress that leads to decreased hair fall, promoting
                    visible root-level
                    hair growth, and boosts collagen production for enhanced hair elasticity.
                </p>
            </div> -->
        </div>

        <!-- <div class="container-fluid my-8">
            <svg data-v-6da3ec0c="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none" class="w-full" style="height: 69px;">
                <path data-v-6da3ec0c=""
                    d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                    class="shape-fill" fill="#42a08f"></path>
            </svg>
            <div class="text-white" style="background-color: #42a08f;">

                <div class="grid grid-cols-12 gap-3">
                    <div class="col-span-4">
                        <img src="/public/images/featured/my-nation.webp" class="m-auto" alt="">
                    </div>
                    <div class="col-span-4">
                        <img src="/public/images/featured/midday.png" class="m-auto" alt="">
                    </div>
                    <div class="col-span-4">
                        <img class="text-center m-auto" src="/public/images/featured/ed-times.png" alt="">
                    </div>
                    <div class="col-span-4">
                        <img src="/public/images/featured/hello-entre.jpg" class="m-auto px-4" alt="">
                    </div>
                    <div class="col-span-4">
                        <img src="/public/images/featured/first-india.webp" class="m-auto" alt="">
                    </div>
                    <div class="col-span-4">
                        <img src="/public/images/featured/loktej.webp" class="m-auto" alt="">
                    </div>

                </div>

            </div>
            <svg data-v-6da3ec0c="" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                preserveAspectRatio="none" class="w-full" style="height: 78px;">
                <path data-v-6da3ec0c=""
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill" fill="#42a08f"></path>
            </svg>
        </div> -->

        <div class="product-review">
            <div class="container mx-auto">

                <!-- <div class="slider">
                    <img src="https://via.placeholder.com/1200x300" class="w-screen" alt="">
                </div> -->

                <div class="review">
                    <h2 class="text-secondary text-center font-bold text-2xl mt-10 mb-4">Customer Reviews</h2>

                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-3 sm:col-span-3 m-auto">
                            <div class="flex justify-center"> <span
                                    class="text-secondary font-extrabold text-xl sm:text-2xl">{{ globalStar }}</span>
                                <span class="inline"><svg width="25" height="25" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#f1917b" stroke="#f1917b" stroke-width="0.3"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                            </div>
                            <span class="text-xs sm:text-lg font-semibold">{{ reviewCount }} Reviews</span>
                            <!-- <img class="w-3/4 mx-auto" src="/images/jar2.png" alt="" /> -->
                        </div>
                        <div class="col-span-8 sm:col-span-6">
                            <div class="flex">
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">5</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-gray-200 rounded-xl my-auto">
                                    <div :class="'h-2 w-[36%] my-auto bg-primary rounded-lg'">
                                    </div>
                                </div>
                                <span class=" text-xs ml-3 mr-1">{{ fiveStar }}</span>
                                <!-- <span class="text-xs font-bold">Vote</span> -->
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">4</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-gray-200 rounded-xl my-auto">
                                    <div :class="'h-2 w-[57%] my-auto bg-primary rounded-lg'">
                                    </div>
                                </div>
                                <span class="text-xs ml-3 mr-1">{{ fourStar }}</span>
                                <!-- <span class="text-xs font-bold">Vote</span> -->
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">3</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-gray-200 rounded-xl my-auto">
                                    <div :class="'h-2 w-[17%] my-auto bg-primary rounded-lg'">
                                    </div>
                                </div>
                                <span class="text-xs ml-3 mr-1">{{ threeStar }}</span>
                                <!-- <span class="text-xs font-bold">Vote</span> -->
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">2</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-gray-200 rounded-xl my-auto">
                                    <div :class="'h-2 w-[1%] my-auto bg-primary rounded-lg'">
                                    </div>
                                </div>
                                <span class="text-xs ml-3 mr-1">{{ twoStar }}</span>
                                <!-- <span class="text-xs font-bold">Vote</span> -->
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">1</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-gray-200 rounded-xl my-auto">
                                    <div :class="'h-2 w-[0%] my-auto bg-primary rounded-lg'">
                                    </div>
                                </div>
                                <span class="text-xs ml-3 mr-1">{{ oneStar }}</span>
                                <!-- <span class="text-xs font-bold">Vote</span> -->
                            </div>
                        </div>
                        <div class="col-span-12 sm:col-span-12 ">
                            <!-- <img class="w-3/4 mx-auto" src="/images/jar2.png" alt="" /> -->
                            <div class="flex flex-col justify-center items-center my-auto">
                                <span class="text-white bg-primary px-2 sm:text-xl text-center py-1 rounded w-fit">Write
                                    a
                                    review</span>
                                <textarea type="text" placeholder="Type Here"
                                    class="h-18 rounded mt-4 p-2 text-sm border border-secondary w-full sm:w-2/3"
                                    name="" id=""></textarea>
                            </div>
                        </div>
                    </div>

                    <!-- <h2 class="text-secondary text-center text-2xl font-bold my-10">Comments</h2> -->



                    <div class="container mx-auto mt-10">


                        <!-- <div v-for="data in review">
                            {{ data.title }}
                            {{ data.description }}
                        </div> -->
                        <h5 class="font-bold">All Reviews
                            <span class=" text-md font-medium mr-2 px-2 py-0.5 rounded bg-secondary text-white">{{
                        reviewCount }}</span>
                        </h5>
                        <hr class="bg-black my-5" />
                        <div v-for="       data        in        review       " class="grid grid-cols-12 pb-4">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img :src="generateAvatarUrl(data.title)" class="w-12 rounded-full" alt="">
                                    <!-- <span class="w-10 h-10 rounded-full bg-secondary my-auto"></span> -->
                                    <div class="ml-1">
                                        <div class="flex">
                                            <span v-for="       count        in        parseInt(data.star)       "><svg
                                                    width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span
                                                v-for="       count        in        (5 - parseInt(data.star))       "><svg
                                                    width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                        <h5 class="font-bold text-md">{{ data.title }}</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">{{ data.description }}</p>
                                <hr class="bg-black my-5" />
                            </div>

                        </div>
                        <div class="pagination flex overflow-x-auto p-2 justify-center">
                            <button @click="getReviews(prevPageUrl)" :class="{ 'bg-secondary': prevPageUrl == null }"
                                :disabled="prevPageUrl == null"
                                class="bg-primary cursor-pointer inline-block py-2 px-3 m-1 text-white rounded"
                                href="#">
                                &laquo; Prev</button>
                            <p class="bg-primary cursor-pointer inline-block py-2 px-3 m-1 text-white rounded" href="#">
                                {{ currentPage }}</p>
                            <button @click="getReviews(nextPageUrl)" :class="{ 'bg-secondary': nextPageUrl == null }"
                                :disabled="nextPageUrl == null"
                                class="bg-primary cursor-pointer inline-block py-2 px-3 m-1 text-white rounded"
                                href="#">
                                Next &raquo;</button>
                        </div>

                        <!-- <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/41" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Afzal Shakh</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">The website is a bit confusing to navigate, and it took me a while
                                    to
                                    find what
                                    I was looking for. The overall experience was average, but I think there's room for
                                    improvement in terms of user-friendliness.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/39" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Ishwari Pawar</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">Absolutely love this platform! The user interface is sleek and
                                    modern,
                                    making it
                                    a breeze to use. I've had a great time interacting with other users and the features
                                    offered
                                    are top-notch. 5 stars!</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/40" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Sarah Jonathan</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">The overall concept is interesting, but the execution falls a bit
                                    short.
                                    I
                                    encountered a few technical glitches while using the platform, which made the experience
                                    frustrating at times. With some improvements, this could be a much better service.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/41" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Maria Dizoza</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">I'm quite disappointed with this service. The website was slow to
                                    load,
                                    and I
                                    had trouble understanding how to use some of the features. It was a frustrating
                                    experience,
                                    and I'm not sure if I'll be using it again.</p>
                            </div>
                        </div> -->
                    </div>


                    <h2 id="faq-redirect" class="text-secondary text-center font-bold text-2xl mt-6 mb-3">HAVE
                        DOUBT’S?
                        <br />
                        WE HAVE GOT ANSWERS TO THEM!!
                    </h2>

                    <div class="container mx-auto">
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer ">
                                Will my hair fall reduce by using
                                Hair-You-Glo? How
                                will it work?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Yes, Hair-You-Glo is crafted in such a way that will help those who are
                                    experiencing
                                    hair
                                    fall/hair loss.Carrots and Amla, rich in Vitamin C, hydrate the scalp, prevent
                                    dryness,
                                    improve
                                    blood circulation, and promote hair growth while suppressing DHT.<br />
                                    Gotu Kola Leaf Extract & Fenugreek Seed Extract aids in collagen synthesis,
                                    vital for
                                    maintaining hair's strength and structure, reducing hair thinning and breakage.
                                    Sea Buckthorn Extract is a powerhouse of omega fatty acids that nourish hair
                                    follicles,
                                    promoting healthy hair growth and reducing hair loss.</p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Can I mix two mixes together?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Dandruff is often caused by dry skin or skin conditions. Since the hair follicle
                                    forms from the
                                    surface of your skin, skin health is equally important when it comes to
                                    healthier
                                    hair.<br />
                                    Hair-You-Glo combats this by including ingredients high in antioxidants such as
                                    Amla
                                    which keeps
                                    the skin hydrated.Cinnamon Bark Extract & Gotu Kola Leaf Extract which contains
                                    antimicrobial
                                    properties that maintain a healthy scalp environment, reducing the risk of
                                    dandruff and
                                    infections</p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Will my hair fall come back if I stop consuming Hair-You-Glo?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>This may be different for each individual. If this superblend helps you with your
                                    hair fall and you’re looking to discontinue usage of this product while
                                    maintaining your
                                    hair
                                    health, we would recommend slowly decreasing the dose of Hair-You-Glo after
                                    experiencing
                                    visible
                                    positive changes.<br />
                                    If you are maintaining a healthy diet, lifestyle, managing stress effectively,
                                    and still
                                    experiencing hair fall after discontinuing this product, you might be
                                    experiencing a
                                    chronic,
                                    auto-immune, or hormone-related condition, and as a result, experiencing hair
                                    fall as a
                                    symptom.
                                    Hair-You-Glo is a safe product for long-term use and while some only need it
                                    temporarily, it is
                                    safe to consume daily.</p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                What is the best time to consume?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>You can consume it any time of the day, but for better experience we suggest
                                    consuming it in the morning as your first drink.</p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Can I consume products while pregnant or breastfeeding?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>No,we don’t recommend & suggest consuming our products while being pregnant or
                                    breastfeeding.</p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                What do I do if my package has been damaged?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Our parcels are packed carefully for every order, however shipping can increase a
                                    slight chance that some might get damaged.Please read our return/refund
                                    policy,take an
                                    unboxing
                                    video, and write to us at <a
                                        href="mailto:connect@glosense.in">connect@glosense.in</a>
                                    for
                                    further assistance.</p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                What do I do if some items in my order are missing?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>We undergo a strict quality control procedure for every order before being
                                    dispatched. However, if the items are different from what you ordered or if some
                                    items
                                    are
                                    missing, please read our return/refund policy, take an unboxing video, and write
                                    to us
                                    at
                                    <a href="mailto:connect@glosense.in">connect@glosense.in</a> for further
                                    assistance.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Who should I contact for queries/concerns related to products or
                                delivery?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>You will be sent an order confirmation email along with your tracking details
                                    once
                                    dispatched. However, if you have any concerns over your order status, please
                                    feel free
                                    to reach
                                    out to us at <a href="mailto:connect@glosense.in">connect@glosense.in</a> and
                                    our
                                    customer
                                    support team will be happy to help you!
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                What to do if my payment has gone through but I haven’t received
                                an order confirmation email?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>In case your payment has gone through, please check your spam folder for an order
                                    confirmation email. If you do not find the email, please reach out to us at <a
                                        href="mailto:connect@glosense.in">connect@glosense.in</a>
                                    and our customer support team will be happy to help you!
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                When will my order be dispatched?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Your order will be dispatched 24 to 48 hours after placing your order post which
                                    you
                                    will receive an email with your tracking details.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                How long will the shipping take?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>You can expect a standard shipping time of 2 to 8 business days as mentioned
                                    during
                                    checkout!
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                What is the refund and return policy?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>It is important to keep in mind that as a company in the food industry, we have
                                    strict return/refund policies. So please go through our return/refund policy
                                    here. If
                                    you feel
                                    like you need more assistance, please feel free to drop in an email to <a
                                        href="mailto:connect@glosense.in">connect@glosense.in</a> :)
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Is Glosense Lifecare Pvt Ltd vegan/vegetarian-friendly?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>As our product is 100% plant based it is safe to say it is vegetarian friendly.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Are there any side effects associated with Glosense Lifecare Pvt Ltd?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>At Glosense Lifecare Pvt Ltd, we care about your well-being. Our Glosense
                                    Lifecare Pvt
                                    Ltd is plant-based and designed
                                    for a healthy lifestyle.But incarse if you ever experience discomfort, contact
                                    us at
                                    <a href="mailto:connect@glosense.in">connect@glosense.in</a>. We're here to
                                    help.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Can Glosense be used by both men and women?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Yes, Our product is crafted in such a way which is useful for both men & women.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                When can I expect to see results?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>The journey to experiencing the benefits of Hair-you-glo can be unique for each
                                    person. We encourage you to use our product consistently to discover the results
                                    that
                                    align with
                                    your personal wellness goals.One can see results within 8-10 weeks of regular
                                    use.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                Is Glosense safe to use?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>As our product is all plant based with 100% natural ingredients used,we can
                                    conclude
                                    that all products of Glosense Lifecare Pvt Ltd are safe to use:)
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                        <details class=" rounded-lg mb-3">
                            <summary class="font-semibold text-lg leading-6 text-black cursor-pointer">
                                What is Glosense Lifecare Pvt Ltd, and how does it work?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>At Glosense Lifecare Pvt Ltd we are a nutraceutical brand, we're all about
                                    enhancing your
                                    well-being
                                    through nature's gifts. Our plant-based superblends offer a holistic approach to
                                    health,
                                    elevating your hair, skin, gut, and stress management.We encourage you to
                                    explore the
                                    world of
                                    plant-based superblends and discover how they can transform your life.Embrace
                                    the power
                                    of
                                    plant-based superblends, and experience the incredible transformation they can
                                    bring to
                                    your
                                    life.
                                </p>
                            </div>
                        </details>
                        <hr class="bg-black my-3" />
                    </div>
                </div>

            </div>

        </div>


    </div>


    <div class="bg-white z-10 fixed bottom-0 w-full" :class="[{ 'bottom-20': staticBuyNow }]" v-show="staticBuyNow">
        <div class="mx-auto bg-primary">
            <div class="flex justify-center driving-text">
                <p class="text-white font-semibold pb-2 pt-0 w-full">
                    <HeadingText />
                </p>
                <p class="text-white font-semibold pb-2 pt-0 w-full">
                    <HeadingText />
                </p>
                <p class="text-white font-semibold pb-2 pt-0 w-full">
                    <HeadingText />
                </p>
                <p class="text-white font-semibold pb-2 pt-0 w-full">
                    <HeadingText />
                </p>
                <p class="text-white font-semibold pb-2 pt-0 w-full">
                    <HeadingText />
                </p>
            </div>
        </div>
    </div>
    <transition name="fade">
        <div class="bg-white z-10 fixed bottom-0 w-full" :class="{ 'fade-in-image': staticBuyNow }"
            v-show="staticBuyNow">
            <div class="mx-auto bg-secondary">
                <div class="flex justify-center">
                    <div class="flex p-4">
                        <button
                            class="my-auto bg-secondary text-white ml-4 px-4 font-extrabold rounded-l-lg border-r-0 border-2 border-white text-2xl py-2 cursor-pointer"
                            @click="decrementCount">-</button>
                        <input type="number" v-model="counter"
                            class="w-[2rem] text-xl font-bold sm:mb-[1px] sm:mt-[1px] text-center rounded-none border-r-0 border-l-0 border-2 border-white bg-secondary text-white hover:border-white focus:outline-none"
                            name="" id="">
                        <button
                            class="my-auto bg-secondary px-4 cursor-pointer rounded-r-lg text-white border-l-0 border-2 border-white py-2 mr-4 font-bold text-2xl"
                            @click="incrementCount">+</button>
                    </div>
                    <div class="flex">

                    </div>
                    <button @click="openModal"
                        class="bg-white mr-5  rounded-lg text-secondary text-md sm:text-xl  font-bold border px-3 py-1 m-5 sm:py-2 sm:px-7 transition ease-in-out w-full sm:w-fit  duration-500">BUY
                        NOW</button>
                </div>
            </div>
        </div>
    </transition>
</template>



<style type="scss">
.fade-enter-active {
    transition: opacity 0.5s;
}

.fade-enter-to {
    transition: opacity 0.5s;
}

.fade-leave-active {
    transition: 0.5s;
}

.fade-enter-to {
    transition: 0.5s;
    opacity: 1;
}

.fade-leave-active {
    opacity: 0;
}

.fade-in-image {
    animation: fadeIn 1s;
}


.driving-text {
    /* position: absolute;
    top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    white-space: nowrap;
}

.driving-text p {
    animation: drive 10s linear infinite;
}

@keyframes drive {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-100%);
    }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}


:root {
    --star-size: 20px;
    --star-color: #fff;
    --star-background: #f1917b;
    --star-stroke-color: #f1917b;
    /* Define the color of the stroke */
    --star-stroke-width: 1px;
    /* Define the width of the stroke */
}

.Stars {
    --percent: calc(var(--rating) / 5 * 100%);

    display: inline-block;
    font-size: 0;
    /* Set font size to zero to remove extra space */
    position: relative;
}

.Stars::before {
    content: '★★★★★';
    letter-spacing: 3px;
    font-size: var(--star-size);
    font-family: Times;
    line-height: 1;
    /* position: absolute; */
    top: 0;
    left: 0;
    color: var(--star-stroke-color);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px #f1917b !important;
    /* text-shadow:
        0px 0px 0 var(--star-stroke-color),
        0px 0px 0 var(--star-stroke-color),
        0px 0px 0 var(--star-stroke-color),
        0px 0px 0 var(--star-stroke-color); */
}

.Stars::after {
    content: '★★★★★';
    letter-spacing: 3px;
    font-size: var(--star-size);
    font-family: Times;
    line-height: 1;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 1;
}

.scroll-container {
    overflow: hidden;
}

.image-wrapper {
    display: flex;
}

.scrolling-image {
    animation: scrollImage 10s linear infinite;
}

@keyframes scrollImage {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

.custom-shape-divider-bottom-1710826054 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1710826054 svg {
    position: relative;
    display: block;
    width: calc(137% + 1.3px);
    height: 76px;
}

.custom-shape-divider-bottom-1710826054 .shape-fill {
    fill: #FFFFFF;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-bottom-1710826054 svg {
        width: calc(137% + 1.3px);
        height: 78px;
    }
}
</style>