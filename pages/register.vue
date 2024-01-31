
<script setup>

import { ref, onMounted } from "vue";
import Swal from 'sweetalert2';
import Notiflix from 'notiflix';
import { useUserStore } from '@/stores/user'
const store = useUserStore();
const { getUser } = store;

// const todos = computed(() => store.todos)



const name = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');
const confirm_password = ref('');
const otp = ref('');
const otpVerified = ref(false);
const otpInputEnable = ref(false);
const token = useCookie('token');

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;

definePageMeta({

    middleware: [
        function (to, from) {
            const token = useCookie('token');
            if (token.value) {
                return navigateTo('product-detail')
            }
        },
    ],
});

await getUser();

async function sendOtp() {
    await useFetch(`${apiUrl}/sms`, {
        method: "POST",
        body: {
            number: phone.value
        },
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response._data.message);
            const statusCode = response.status;
            if (statusCode == 200) {
                Notiflix.Notify.success("Otp Sent To your Mobile Number");
                otpInputEnable.value = true;
            }
            else {
                Notiflix.Notify.failure(response._data.message);
            }
        },
    })
}

async function verifyOtp() {
    await useFetch(`${apiUrl}/verify-sms-otp`, {
        method: "POST",
        body: {
            number: phone.value,
            otp: otp.value
        },
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response._data);
            const statusCode = response.status;
            if (statusCode == 200) {
                if (response._data.valid) {
                    Notiflix.Notify.success("Otp Verified");
                    otpVerified.value = true;
                } else {
                    Notiflix.Notify.failure("Otp is not valid");
                }
            }
        },
    })
}

async function handleSubmit() {


    await getUser();


    Notiflix.Loading.pulse('Loading...');

    // await useFetch("https://admin.glosense.in/sanctum/csrf-cookie", {
    //     credentials: "include",
    // })
    const csrf_token = useCookie('XSRF-TOKEN');
    console.log(csrf_token, "csrf_token");
    const { data, error, pending, refresh } = await useFetch(`${apiUrl}/user/register`, {
        method: "POST",
        headers: {
            "accept": "application/json",
            // "X-XSRF-TOKEN": csrf_token.value,
        },
        body: {
            first_name: name.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
            password_confirmation: confirm_password.value,
        },
        onResponse({ request, response, options }) {
            Notiflix.Loading.remove();

            if (response._data.token != undefined) {
                token.value = response._data.token;
                Swal.fire({
                    title: "Registered",
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                name.value = "";
                email.value = "";
                phone.value = "";
                password.value = "";
                confirm_password.value = "";
                window.location.reload(true)
                return navigateTo('product-detail')
            }
        },
        onResponseError({ request, response, options }) {
            Notiflix.Loading.remove();

            Swal.fire({
                title: response._data.message,
                icon: 'error',
                confirmButtonText: 'Error'
            });
        },
    });
}
</script>


<template>
    <HeaderCommon />
    <div class="product-details px-3 md:px-8  mt-20 sm:mt-24 pb-20 bg-[#efe8df]">
        <h2 class="text-secondary text-2xl font-bold text-center py-2">Register</h2>

        <div class="container mx-auto">
            <form @submit.prevent="handleSubmit">
                <div class="mb-6">
                    <label for="text" class="block mb-2 text-md  font-bold text-black ">Name</label>
                    <input type="text" id="name" v-model="name"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 "
                        placeholder="Name">
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-md  font-bold text-black ">Your
                        email</label>
                    <input type="email" v-model="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 "
                        placeholder="name@gmail.com">
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-md  font-bold text-black ">Phone</label>
                    <div class="flex">
                        <input type="number" id="number" v-model="phone"
                            class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[50%] sm:w-[70%] p-2.5 -700 -600 -400 "
                            placeholder="Phone">
                        <p class="inline text-md my-auto ml-4 cursor-pointer  font-bold text-black" @click="sendOtp">Send
                            Otp</p>
                    </div>
                </div>
                <div class="mb-6" v-if="otpInputEnable">
                    <label for="number" class="block mb-2 text-md  font-bold text-black ">Enter OTP</label>
                    <div class="flex">
                        <input type="number" v-model="otp" id="email"
                            class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%]] p-2.5 -700 -600 -400 "
                            placeholder="">
                        <p class="inline text-md my-auto ml-4 cursor-pointer  font-bold text-black" @click="verifyOtp">
                            Verify</p>
                    </div>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-md  font-bold text-black ">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 ">
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-md  font-bold text-black ">Confirm Password</label>
                    <input type="password" id="confirm-password" v-model="confirm_password"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 ">
                </div>
                <button v-if="otpVerified" type="submit" @click="getSlider"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center -600 -blue-700 -blue-800">Submit</button>
            </form>
        </div>
    </div>
</template>