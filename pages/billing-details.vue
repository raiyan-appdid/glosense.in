<script setup>
import Notiflix from 'notiflix';

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const counter = useCounter()




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


const { data } = await useFetch(`${apiUrl}/user-detail`, {
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + token.value,
    },
});
user_id.value = data.value.data.id;

definePageMeta({
    middleware: [
        function (to, from) {
            const token = useCookie('token');
            if (!token.value) {
                return navigateTo('register')
            }
        },
    ],
});

async function storeBilling(e) {

    await useFetch(`${apiUrl}/order/store?name=${name.value}&user_id=${data.value.data.id}&email=${email.value}&city=${city.value}&state=${state.value}&number=${number.value}&address=${address.value}&pincode=${pincode.value}&country=${country.value}&=${total_price.value}&promocode=${promocode.value}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token.value,
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            Notiflix.Loading.remove();
            console.log(response._data);
            const error = response._data.errors
            const res = response._data
            console.log(response);
            if (response.status == 200) {
                Notiflix.Notify.success(res.message);
            } else if (error) {
                for (const value in error) {
                    Notiflix.Notify.failure(error[value][0]);
                }
            }
            else {
                Notiflix.Notify.failure(response.statusText);
            }
        },
    })
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
                promocodeDiscount.value = response._data.data.discount;
            } else {
                promocodeDiscount.value = 0;
            }
        },
    })
}
</script>
<template>
    <HeaderCommon />
    <div class="product-details px-3 md:px-8  mt-20 sm:mt-24 pb-20 bg-[#efe8df]">
        <h2 class="text-secondary text-2xl font-bold text-center py-10">Billing Page</h2>
        <div class="grid grid-cols-12">
            <div class="container mx-auto col-span-12 sm:col-span-6 mt-0 sm:mt-0 sm:order-1">
                <form id="store-billing-form" action="https://admin.glosense.in/api/v1/order/store">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="">
                            <label for="text" class="block mb-2 text-md  font-bold text-black ">Name <span
                                    class="text-red-500">*</span></label>
                            <input name="name" required type="text" id="name" v-model="name"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Name">
                            <input type="hidden" name="user_id" v-model="user_id" id="">
                        </div>
                        <div class="">
                            <label for="address" class="block mb-2 text-md  font-bold text-black ">Address <span
                                    class="text-red-500">*</span></label>
                            <input name="addresss" required v-model="address" id="address"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Address">
                        </div>
                        <div class="">
                            <label for="city" class="block mb-2 text-md  font-bold text-black ">City <span
                                    class="text-red-500">*</span></label>
                            <input name="city" required id="city" v-model="city"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="City">
                        </div>
                        <div class="">
                            <label for="state" class="block mb-2 text-md  font-bold text-black ">State <span
                                    class="text-red-500">*</span></label>
                            <input name="state" required id="state" v-model="state"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="pincode" class="block mb-2 text-md  font-bold text-black ">Pincode <span
                                    class="text-red-500">*</span></label>
                            <input name="pincode" required id="pincode" v-model="pincode"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="country" class="block mb-2 text-md  font-bold text-black ">Country <span
                                    class="text-red-500">*</span></label>
                            <input name="country" required id="country" v-model="country"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="phone" class="block mb-2 text-md  font-bold text-black ">Contact Number <span
                                    class="text-red-500">*</span></label>
                            <input name="number" required id="phone" v-model="number"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="email" class="block mb-2 text-md  font-bold text-black ">Email <span
                                    class="text-red-500">*</span></label>
                            <input name="email" required id="email" type="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <!-- <input type="hidden" name="total_price" value="1"> -->
                        </div>
                        <!-- <div class="">
                            <label for="phone" class="block mb-2 text-md  font-bold text-black ">Password <span
                                    class="text-red-500">*</span></label>
                            <input name="number" required id="phone" v-model="number"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="email" class="block mb-2 text-md  font-bold text-black ">Confirm Password <span
                                    class="text-red-500">*</span></label>
                            <input name="email" required id="email" type="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <input type="hidden" name="total_price" value="1">
                        </div> -->
                        <div class="flex">
                            <div class="flex flex-col justify-center">
                                <label for="promocode" class="block mb-2 text-md font-bold text-black ">Promo Code
                                    <span class="text-red-500">*</span></label>
                                <input @keyup="verifyPromoCode" name="promocode" id="promocode" type="promocode"
                                    v-model="promocode"
                                    class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-4/5 p-2.5">
                            </div>
                            <span v-if="promocodeVerified" class="inline-block my-auto"><svg width="30" height="30"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#22c55e"
                                        d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45l-3.4 1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12l3.55 3.55Z" />
                                </svg></span>
                            <span v-else class="inline-block my-auto">
                                <svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#ef4444">
                                        <path
                                            d="M16.222 31.778a1 1 0 0 1 0-1.414L22.586 24l-6.364-6.364a1 1 0 0 1 1.414-1.414L24 22.586l6.364-6.364a1 1 0 0 1 1.414 1.414L25.414 24l6.364 6.364a1 1 0 0 1-1.414 1.414L24 25.414l-6.364 6.364a1 1 0 0 1-1.414 0Z" />
                                        <path fill-rule="evenodd"
                                            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Zm0-2c9.941 0 18-8.059 18-18S33.941 6 24 6S6 14.059 6 24s8.059 18 18 18Z"
                                            clip-rule="evenodd" />
                                    </g>
                                </svg>
                            </span>
                        </div><br />
                        <div class="hidden flex-col sm:flex">
                            <div class="text-center my-4">
                                <input form="store-billing-form" type="checkbox" class="mr-3" name="tnc" id="tnc">
                                <label for="tnc">Accepting <a class=" text-secondary" href="/terms-and-conditions">Terms and
                                        Conditions</a> *</label>
                            </div>
                            <div class="text-center">
                                <button type="submit" form="store-billing-form"
                                    class="text-white bg-blue-700 my-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Checkout</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div
                class="col-span-12 sm:ml-6 sm:col-span-6 m-auto mt-4 sm:order-2 border border-white rounded-3xl p-6 bg-gray-100">
                <div class="flex items-center justify-center">
                    <div class="w-1/4 mr-9">
                        <img src="/images/jar2.png" alt="">
                    </div>
                    <div>
                        <h4 class="font-bold">Hair You Glo</h4>
                        <p class="font-bold">x 1 Rs. 1299 /-</p>
                        <p class="font-bold">Rs. 1299 /-</p>
                        <!-- <p>Discoun</p> -->
                    </div>
                </div>
                <div class="h-0.5 bg-gray-500 w-2/3 mx-auto my-2"></div>
                <div class="grid grid-cols-2">
                    <div class="text-end font-bold">Units</div>
                    <div class="mx-auto font-bold">{{ counter }}</div>
                    <input type="hidden" :value="counter" name="units" form="store-billing-form" id="">
                    <div class="text-end font-bold">Sub Total</div>
                    <div class="mx-auto font-bold"> {{ 1299 * counter }}/-</div>
                    <input type="hidden" form="store-billing-form" name="sub_total" :value="1299 * counter" id="">
                    <div class="text-end font-bold">Delivery Charges</div>
                    <div class="mx-auto font-bold">free</div>
                    <div class="text-end font-bold">Promo Code Discount</div>
                    <div class="mx-auto font-bold">{{ promocodeDiscount }} /-</div>
                    <input type="hidden" form="store-billing-form" :value="promocodeDiscount" name="discount" id="">
                </div>
                <div class="h-0.5 bg-gray-500 w-2/3 mx-auto my-2"></div>
                <div class="grid grid-cols-2">
                    <div class="text-end font-bold">Total</div>
                    <div class="mx-auto font-bold">Rs. {{ 1299 * counter - promocodeDiscount }} /-</div>
                    <input type="hidden" form="store-billing-form" :value="(1299 * counter - promocodeDiscount)"
                        name="total" id="">
                </div>

            </div>
            <div class="flex flex-col w-screen sm:hidden">
                <div class="text-center my-4">
                    <input form="store-billing-form" type="checkbox" class="mr-3" name="tnc" id="tnc">
                    <label for="tnc">Accepting <a class=" text-secondary" href="/terms-and-conditions">Terms and
                            Conditions</a> *</label>
                </div>
                <div class="text-center">
                    <button type="submit" form="store-billing-form"
                        class="text-white bg-blue-700 my-auto hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center">Checkout</button>
                </div>
            </div>


        </div>

        

    </div>
</template>