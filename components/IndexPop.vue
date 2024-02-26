<script setup>

const email = ref();
const dynamicImage = ref('https://glosense.in/images/product/Product-04.jpg');
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const nuxtApp = useNuxtApp();
const emailGiven = useCookie('email-given');
import Notiflix from 'notiflix';

function closeModal() {
    let modal = document.getElementById('index-pop-modal')
    modal.classList.add('hidden');
}

nuxtApp.hook("page:finish", () => {
    if (emailGiven.value == undefined) {
        getDynamicImage()
    }
});

function openModal() {
    let modal = document.getElementById("index-pop-modal");
    modal.classList.remove("hidden");
}

async function getDynamicImage() {
    await useFetch(`${apiUrl}/get-heading`, {
        method: "GET",
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response._data);
            dynamicImage.value = response._data.image;
            setTimeout(() => {
                openModal();
            }, 1000);
        },
    })
}
async function storeEmail() {


    if (email.value == undefined) {
        Notiflix.Notify.failure("Enter Your Email");
    } else {
        // await useFetch(`${apiUrl}/get-heading`, {
        //     method: "GET",
        //     headers: {
        //         accept: "application/json"
        //     },
        //     onResponse({ request, response, options }) {
        //         console.log(response._data);
        //         dynamicImage.value = response._data.image;
        //     },
        // })
        emailGiven.value = 'given';
        Notiflix.Notify.success("Thank you");
        closeModal();
    }
}

</script>

<template>
    <!-- Main modal -->
    <div id="index-pop-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 hidden flex items-center backdrop-blur-sm bg-white/30 justify-center right-0 z-50 show-modal mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <button type="button" @click="closeModal"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="index-pop-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="grid grid-cols-12">
                    <div class="sm:col-span-6 col-span-12 order-1 sm:order-2 sm:bg-primary">
                        <div class="flex items-center h-full">
                            <img :src="dynamicImage" class="my-auto" alt="">
                        </div>
                    </div>
                    <div class="sm:col-span-6 col-span-12 sm:py-10  px-4 sm:order-2">
                        <div class="flex flex-col justify-evenly h-full">
                            <p class="text-center my-4">YOUR ANTI-HAIRFALL SOLUTION</p>
                            <p class="text-center text-primary text-3xl">FREE</p>
                            <p class="text-center text-secondary font-semibold leading-4 my-3">E- guide to <br /> Fix Your
                                Hair
                                Fall!</p>
                            <p class="text-center text-sm">A Eguide packed with insider secrets & exclusive control over
                                your
                                hairfall.</p>
                            <div class="mt-4">
                                <input type="email" placeholder="Enter your email" v-model="email"
                                    class="block w-full p-2 sm:mt-0 text-sm mb-4 text-gray-900 border rounded border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                    required>
                                <button @click="storeEmail()"
                                    class="bg-primary font-semibold rounded-xl w-full mt-2 p-1 text-white">Send
                                    me Now!</button>


                            </div>
                            <a href="https://admin.glosense.in/site/assets/pdf/E-book-Hair-Fall-final.pdf"
                                class="text-center"> <button download="E-book-Hair-Fall">Download Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.otp-container,
.email-otp-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.otp-input,
.email-otp-input {
    width: 40px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
}

.otp-input:focus,
.email-otp-input:focus {
    border-color: #007bff;
}

#verificationCode,
#emailverificationCode {
    width: 100%;
    margin-top: 15px;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
}

#verificationCode:focus,
#emailverificationCode:focus {
    border-color: #007bff;
}
</style>