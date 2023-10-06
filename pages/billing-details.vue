<script setup>
import Notiflix from 'notiflix';

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;



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

    // e.preventDefault();
    // await useFetch("https://admin.glosense.in/sanctum/csrf-cookie", {
    //     onResponse({ request, response, options }) {
    //         console.log(response);
    //     }
    // })
    // console.log(csrf.value);

    // console.log(token);
    // Notiflix.Loading.pulse();





    await useFetch(`${apiUrl}/order/store?name=${name.value}&user_id=${data.value.data.id}&email=${email.value}&city=${city.value}&state=${state.value}&number=${number.value}&address=${address.value}&pincode=${pincode.value}&country=${country.value}&total_price=${total_price.value}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token.value,
            accept: "application/json"
        },
        // body: {
        //     name: name.value,
        //     email: email.value,
        //     city: city.value,
        //     state: state.value,
        //     number: number.value,
        //     address: address.value,
        //     pincode: pincode.value,
        //     country: country.value,
        //     total_price: total_price.value,
        // },
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
</script>
<template>
    <HeaderCommon />
    <div class="product-details px-3 md:px-8  mt-20 sm:mt-24 pb-20 bg-[#efe8df]">
        <h2 class="text-secondary text-2xl font-bold text-center py-10">Billing Page</h2>
        <div class="grid grid-cols-12">
            <div class="container mx-auto col-span-12 sm:col-span-6 mt-10 sm:mt-0 order-2 sm:order-1">
                <form action="https://admin.glosense.in/api/v1/order/store">
                    <div class="grid grid-cols-2 gap-5">
                        <div class="">
                            <label for="text" class="block mb-2 text-md  font-bold text-black ">Billing name</label>
                            <input name="name" type="text" id="name" v-model="name"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Name">
                            <input type="hidden" name="user_id" v-model="user_id" id="">
                        </div>
                        <div class="">
                            <label for="address" class="block mb-2 text-md  font-bold text-black ">Billing Address</label>
                            <input name="addresss" v-model="address" id="address"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Address">
                        </div>
                        <div class="">
                            <label for="city" class="block mb-2 text-md  font-bold text-black ">Billing City</label>
                            <input name="city" id="city" v-model="city"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Phone">
                        </div>
                        <div class="">
                            <label for="state" class="block mb-2 text-md  font-bold text-black ">Billing State</label>
                            <input name="state" id="state" v-model="state"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="pincode" class="block mb-2 text-md  font-bold text-black ">Pincode</label>
                            <input name="pincode" id="pincode" v-model="pincode"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="country" class="block mb-2 text-md  font-bold text-black ">Country</label>
                            <input name="country" id="country" v-model="country"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="phone" class="block mb-2 text-md  font-bold text-black ">Conctact Number</label>
                            <input name="number" id="phone" v-model="number"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="">
                            <label for="email" class="block mb-2 text-md  font-bold text-black ">Email</label>
                            <input name="email" id="email" type="email" v-model="email"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <input type="hidden" name="total_price" value="1">
                        </div>
                        <button type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center -600 -blue-700 -blue-800">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-span-12 sm:col-span-6 m-auto order-1 sm:order-2">
                <div class="flex items-center justify-center">
                    <div class="w-1/4">
                        <img src="/images/jar2.png" alt="">
                    </div>
                    <div>
                        <h4>Fiar Glow sense ( 200 g )</h4>
                        <p>x 1 Rs 899</p>
                        <p>Rs 899</p>
                    </div>
                </div>
                <div class="h-0.5 bg-gray-500 w-2/3 mx-auto my-2"></div>
                <div>
                    <div class="flex justify-around">
                        <p>Sub Total</p>
                        <p>899</p>
                    </div>
                    <div class="flex justify-around">
                        <p>Shipping</p>
                        <p>0</p>
                    </div>
                </div>
                <div class="h-0.5 bg-gray-500 w-2/3 mx-auto my-2"></div>
                <div>
                    <div class="flex justify-around">
                        <p>Total</p>
                        <p>899</p>
                    </div>
                </div>
            </div>
        </div>




    </div>
</template>