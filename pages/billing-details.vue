<script setup>
import Notiflix from 'notiflix';

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
// const counter = useCounter()
const route = useRoute()
const counter = ref(route.query.count);
const hasPromoApplied = ref(route.query.promo);
const token = useCookie('token');

const name = ref('');
const address = ref('');
const city = ref('');
const state = ref('');
const pincode = ref('');
const country = ref('');
const number = ref('');
const email = ref('');
const user_id = ref('');
const promocode = ref('');
const promocodeVerified = ref(false);
const promocodeDiscount = ref(0);
const total_price = ref(1);
const promocodeid = ref("");


onMounted(() => {
    console.log(hasPromoApplied.value);

    if (hasPromoApplied.value) {
        applyPromoCode()
    }
})

const { data } = await useFetch(`${apiUrl}/user-detail`, {
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + token.value,
    },
});
user_id.value = data.value.data.id;
email.value = data.value.data.email;
name.value = data.value.data.first_name;
number.value = data.value.data.phone;

definePageMeta({
    middleware: [
        function (to, from) {
            const token = useCookie('token');
            if (!token.value) {
                return navigateTo('product-detail')
            }
        },
    ],
});

const nuxtApp = useNuxtApp();

function applyPromoCode() {
    promocode.value = "GET970";
    verifyPromoCode();
}

nuxtApp.hook('page:finish', () => {
    // promocode.value = "firstjar";
    applyPromoCode();
    verifyPromoCode();
})


// async function storeBilling(e) {

//     await useFetch(`${apiUrl}/order/store?name=${name.value}&user_id=${data.value.data.id}&email=${email.value}&city=${city.value}&state=${state.value}&number=${number.value}&address=${address.value}&pincode=${pincode.value}&country=${country.value}&=${total_price.value}&promocode=${promocode.value}`, {
//         method: "GET",
//         headers: {
//             Authorization: "Bearer " + token.value,
//             accept: "application/json"
//         },
//         onResponse({ request, response, options }) {
//             Notiflix.Loading.remove();
//             console.log(response._data);
//             const error = response._data.errors
//             const res = response._data
//             console.log(response);
//             if (response.status == 200) {
//                 Notiflix.Notify.success(res.message);
//             } else if (error) {
//                 for (const value in error) {
//                     Notiflix.Notify.failure(error[value][0]);
//                 }
//             }
//             else {
//                 Notiflix.Notify.failure(response.statusText);
//             }
//         },
//     })
// }

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
                promocodeDiscount.value = response._data.data.discount;
                promocodeid.value = response._data.data.id;
            } else {
                promocodeDiscount.value = 0;
                promocodeid.value = "";
            }
        },
    })
}
</script>
<template>
    <HeaderCommon />
    <div class="product-details sm:px-3 md:px-8  mt-20 sm:mt-32 pb-20 bg-white">
        <!-- <h2 class="text-secondary text-2xl font-bold text-center py-10">Billing Page</h2> -->
        <div class="grid grid-cols-12">
            <div class="container mx-auto p-5 col-span-12 sm:col-span-6 mt-0 sm:mt-0 order-2 sm:order-1">
                <form id="store-billing-form" action="https://admin.glosense.in/api/v3/order/store">
                    <p class=" font-bold text-lg mb-2">Shiping Details</p>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-6">
                            <input type="hidden" v-model="promocodeid" name="promocode_id" id="">
                            <input name="name" required type="text" id="name" v-model="name"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Name">
                            <input type="hidden" name="user_id" v-model="user_id" id="">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="phone" class="block mb-2 text-md  font-bold text-black ">Contact Number <span
                                    class="text-red-500">*</span></label> -->
                            <input name="number" required id="phone" v-model="number" placeholder="Contact no."
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="col-span-12">
                            <!-- <label for="email" class="block mb-2 text-md  font-bold text-black ">Email <span
                                    class="text-red-500">*</span></label> -->
                            <input name="email" required id="email" type="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                        </div>
                        <div class="col-span-12">
                            <!-- <label for="address" class="block mb-2 text-md  font-bold text-black ">Address <span
                                    class="text-red-500">*</span></label> -->
                            <input name="addresss" required v-model="address" id="address"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Address">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="city" class="block mb-2 text-md  font-bold text-black ">City <span
                                    class="text-red-500">*</span></label> -->
                            <input name="city" required id="city" v-model="city"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="City">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="state" class="block mb-2 text-md  font-bold text-black ">State <span
                                    class="text-red-500">*</span></label> -->
                            <input name="state" required id="state" v-model="state" placeholder="State"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="pincode" class="block mb-2 text-md  font-bold text-black ">Pincode <span
                                    class="text-red-500">*</span></label> -->
                            <input name="pincode" required id="pincode" v-model="pincode" placeholder="Pincode"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="hidden">
                            <label for="country" class="block mb-2 text-md  font-bold text-black ">Country <span
                                    class="text-red-500">*</span></label>
                            <input name="country" value="India" id="country"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>


                        <!-- <div class="col-span-6">
                            <label for="gst" class="block mb-2 text-md  font-bold text-black ">Gst (Optional)</label>
                            <input name="gst" id="gst" type="gst" v-model="gst"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div> -->
                    </div>

                    <div class=" flex-col flex">
                        <div class=" my-4">
                            <input form="store-billing-form" type="checkbox" class="" name="tnc" id="tnc">
                            <label for="tnc" class="ml-2">Accepting <a class=" text-secondary"
                                    href="/terms-and-conditions">Terms and
                                    Conditions</a> *</label>
                        </div>
                        <div class="text-center">
                            <button type="submit" form="store-billing-form"
                                class="text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-2xl  sm:w-auto px-8 py-2 text-center">Checkout</button>
                        </div>
                    </div>
                </form>
            </div>
            <div
                class="col-span-12 sm:ml-6 sm:col-span-6 m-auto mt-4 order-1 sm:order-2 border border-white sm:rounded-3xl p-3 bg-[#ffe6e2]">
                <div class="flex items-center ">
                    <div class="w-1/4 mr-0">
                        <img src="/images/product/product-details-4.png" alt="">
                    </div>
                    <div class="flex">
                        <div>
                            <h4 class="font-bold text-secondary text-xl">Hair You Glo</h4>
                            <h4 class="font-semibold text-sm">For Healthy & Stronger Hair</h4>
                            <p class="font-semibold text-sm">Qty: {{ counter }}</p>
                        </div>
                        <!-- <p class="font-bold">x 1 Rs. 1299 /-</p> -->
                        <div class="font-bold text-secondary text-xl flex justify-between">
                            <p>₹ {{ 1299 - promocodeDiscount }}.00</p>
                        </div>
                        <!-- <p>Discoun</p> -->
                    </div>
                </div>
                <div class="h-0.5 bg-gray-300 w-3/3 sm:w-3/3 mx-auto my-2"></div>

                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <p class="font-bold text-sm">Select a Promo Code</p>
                    </div>
                </div>

                <div class="grid grid-cols-12 gap-4 mt-3">
                    <div class="col-span-8">
                        <!-- <label for="promocode" class="block mb-2 text-md font-bold text-black ">Promo Code
                        </label> -->
                        <input @keyup="verifyPromoCode" name="promocode" id="promocode" type="promocode" v-model="promocode"
                            class="bg-gray-50 uppercase w-full border border-gray-300 text-black text-md font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                    </div>
                    <div class="my-auto col-span-4 ">
                        <span v-if="promocodeVerified"
                            class="inline-block my-auto bg-secondary mx-auto py-1 px-1.5 rounded">
                            <svg class="inline-block mr-1" width="25" height="25" viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" />
                            </svg>
                            <span class="mx-auto inline-block text-white text-xl">Applied</span></span>
                        <span v-else class="inline-block my-auto">
                            <span class="mx-auto my-auto p-2.5 bg-gray-300 text-xl rounded-md">Apply</span>
                        </span>
                    </div>
                </div>
                <div v-if="promocodeVerified" class="my-1">
                    <div class="inline-block"> <svg class="inline-block mr-1" width="18" height="18" viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="green" fill-rule="evenodd"
                                d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                clip-rule="evenodd" />
                        </svg><span class="text-xs font-semibold">PromoCode Applied
                            Successfully. You got</span> <span class="text-xs font-semibold">Rs. {{
                                promocodeDiscount }} OFF</span></div>
                </div>


                <div class="flex">
                    <div class="flex flex-col justify-center">
                        <div class="mt-3 ml-1">

                            <input type="radio" @click="applyPromoCode" v-bind:checked="promocodeVerified" class="mr-3"
                                style="scale: 1.5; accent-color: #46a291;" name="" id="" />
                            <span
                                class="p-0.5 text-secondary text-sm border border-3 border-secondary cursor-pointer border-dashed">
                                GET970
                            </span>
                            <span class="py-0.5 px-2 text-primary text-sm font-semibold inline-block w-fit">Save Rs. 329
                                /-</span>

                            <!-- <span v-if="!promocodeVerified" @click="applyPromoCode"
                                class="ml-3 my-auto py-1 px-2 bg-green-400 rounded-xl cursor-pointer">Apply</span>
                            <span v-else
                                class="ml-3 my-auto py-1 px-2 bg-green-400 rounded-xl cursor-pointer">Applied</span> -->
                        </div>
                        <span class="inline-block mt-1 text-sm font-semibold ml-7 w-fit">Flat 25% off. Valid with all
                            Payment
                            modes.</span>
                    </div>
                </div>



                <div class="h-0.5 bg-gray-300 w-3/3 sm:w-3/3 mx-auto my-2"></div>


                <div class="grid grid-cols-2">
                    <!-- <div class="text-end font-bold">Units</div>
                    <div class="mx-auto font-bold">{{ counter }}</div> -->
                    <input type="hidden" :value="counter" name="units" form="store-billing-form" id="">
                    <div class="font-semibold text-xl my-1">Item total</div>
                    <div class="text-end font-semibold text-xl">₹ {{ 1299 * counter }}.00</div>
                    <input type="hidden" form="store-billing-form" name="sub_total" :value="1299 * counter" id="">
                    <div class=" font-semibold text-xl my-1">Item Discount</div>
                    <div class="text-end font-semibold text-xl text-secondary">-₹ {{ promocodeDiscount }}.00</div>
                    <div class=" font-semibold text-xl my-1">Shipping</div>
                    <div class="text-end font-semibold text-xl"><s>₹ 100.00</s> free</div>
                    <input type="hidden" form="store-billing-form" :value="promocodeDiscount" name="discount" id="">
                </div>
                <div class="h-0.5 bg-gray-300 w-3/3 sm:w-3/3 mx-auto my-1"></div>
                <div class="grid grid-cols-2">
                    <div class=" text-xl font-bold text-secondary">Order total</div>
                    <div class="text-end text-xl text-secondary font-extrabold">₹ {{ 1299 * counter - promocodeDiscount
                    }}.00
                    </div>
                    <input type="hidden" form="store-billing-form" :value="(1299 * counter - promocodeDiscount)"
                        name="total" id="">
                </div>
            </div>
            <!-- <div class="flex flex-col w-screen sm:hidden">
                <div class="text-center my-4">
                    <input form="store-billing-form" type="checkbox" class="mr-3" name="tnc" id="tnc">
                    <label for="tnc">Accepting <a class=" text-secondary" href="/terms-and-conditions">Terms and
                            Conditions</a> *</label>
                </div>
                <div class="text-center">
                    <button type="submit" form="store-billing-form"
                        class="text-white bg-blue-700 my-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Checkout</button>
                </div>
            </div> -->


        </div>



    </div>
</template>