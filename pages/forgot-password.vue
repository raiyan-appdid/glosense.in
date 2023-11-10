<script setup>
import Swal from 'sweetalert2';
import Notiflix from 'notiflix';

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;

const otp = ref('');
const password = ref('');
const confirm_password = ref('');
const email = ref('');
const hidden = ref(true);

async function handleSubmit() {
    await useFetch(`${apiUrl}/verify-and-change-password`, {
        method: 'POST',
        headers: {
            accept: "application/json",
        },
        body: {
            email: email.value,
            otp: otp.value,
            password: password.value,
            password_confirmation: confirm_password.value,
        },
        onResponse({ request, response, options }) {
            Notiflix.Loading.remove();
            if (response._data.success) {
                Notiflix.Notify.success(response._data.message);
                Swal.fire({
                    title: "Password Changed Successfully Try Log In again!",
                    icon: 'success',
                    confirmButtonText: 'Try Again'
                });
            } else {
                Swal.fire({
                    title: response._data.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        },
    })

}

async function sendMail() {
    if (email.value != '') {
        Notiflix.Loading.pulse('Loading...');
        await useFetch(`${apiUrl}/send-mail`, {
            method: 'POST',
            headers: {
                accept: "application/json",
            },
            body: {
                email: email.value,
            },
            onResponse({ request, response, options }) {
                Notiflix.Loading.remove();
                if (response._data.success) {
                    Notiflix.Notify.success(response._data.message);
                    hidden.value = false;
                } else {
                    Swal.fire({
                        title: response._data.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });
                }
            },
        })
    }
}

</script>

<template>
    <HeaderCommon />
    <div class="forgot-password mt-28 sm:mt-30 pb-20 bg-[#efe8df] z-20">
        <div class="container mx-auto px-5 sm:px-0 pt-10">
            <form @submit.prevent="handleSubmit">
                <div class="mb-6 grid grid-cols-12 gap-4">
                    <div class="col-span-8">
                        <label for="text" class="block mb-2 text-md  font-bold text-black ">Registered Email</label>
                        <input type="email" id="email" v-model="email"
                            class="bg-gray-50 border border-gray-300 text-black text-md w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-50 p-2.5"
                            placeholder="Name">
                    </div>
                    <div class="col-span-4 my-auto">
                        <p class="bg-primary w-fit p-2 text-white cursor-pointer rounded-lg" @click="sendMail">Send OTP</p>
                    </div>
                </div>
                <div :hidden="hidden" class="mb-6">
                    <label for="text" class="block mb-2 text-md  font-bold text-black ">Enter OTP</label>
                    <input type="number" id="otp" v-model="otp"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-50 p-2.5"
                        placeholder="Name">
                </div>
                <div :hidden="hidden" class="mb-6">
                    <label for="password" class="block mb-2 text-md  font-bold text-black ">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-50 p-2.5">
                </div>
                <div :hidden="hidden" class="mb-6">
                    <label for="password" class="block mb-2 text-md  font-bold text-black ">Confirm Password</label>
                    <input type="password" id="confirm-password" v-model="confirm_password"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-50 p-2.5">
                </div>
                <button :hidden="hidden" type="submit"
                    class="text-white bg-secondary font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    </div>
</template>