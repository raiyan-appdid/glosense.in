<script setup>

const email = ref();
const productPopText = ref();
const dynamicImage = ref('https://glosense.in/images/product/Product-04.jpg');
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const nuxtApp = useNuxtApp();
const emailGiven = useCookie('email-given');
import Notiflix from 'notiflix';
const downloadButtonShow = ref(false)

function closeModal() {
    let modal = document.getElementById('index-pop-modal')
    modal.classList.add('hidden');
}

nuxtApp.hook("page:finish", () => {
    // if (emailGiven.value == undefined) {
    setTimeout(() => {
        getDynamicImage()
    }, 5000);
    // }
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
            dynamicImage.value = response._data.product_page_image;
            productPopText.value = response._data.product_page_pop_title;
            setTimeout(() => {
                openModal();
            }, 1000);
        },
    })
}
async function storeEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        Notiflix.Notify.failure("Please Enter Valid Email");
        return;
    }
    if (email.value == undefined) {
        Notiflix.Notify.failure("Enter Your Email");
    } else {
        await useFetch(`${apiUrl}/store-email`, {
            method: "POST",
            body: {
                email: email.value,
            },
            headers: {
                accept: "application/json"
            },
            onResponse({ request, response, options }) {
                downloadButtonShow.value = true;
                emailGiven.value = 'given';
                Notiflix.Notify.success("Thank you");
            },
        })
    }
}

</script>

<template>
    <!-- Main modal -->
    <div id="index-pop-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 hidden flex items-center h-screen backdrop-blur-sm bg-black/30 justify-center right-0 z-50 show-modal mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 = max-h-full">
        <div class="relative w-full max-w-xl max-h-full p-10">
            <!-- Modal content -->
            <div class="relative bg-tranparent border-0">
                <span @click="closeModal"
                    class="absolute top-3 right-2.5 cursor-pointer bg-transparent text-black rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="index-pop-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-fit h-5" viewBox="0 0 16 16">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                            clip-rule="evenodd" />
                        <path fill="currentColor"
                            d="M11.854 4.854a.5.5 0 0 0-.707-.707L8 7.293L4.854 4.147a.5.5 0 1 0-.707.707L7.293 8l-3.146 3.146a.5.5 0 0 0 .707.708L8 8.707l3.147 3.147a.5.5 0 0 0 .707-.708L8.708 8z" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </span>
                <div class="">
                    <div class="flex items-center h-full justify-center">
                        <img :src="dynamicImage" class="" alt="">
                    </div>
                    <!-- <div class="sm:col-span-6 col-span-12 sm:py-10  px-4 sm:order-2">
                        <div class="flex flex-col justify-evenly h-full">
                            <p class="text-center text-xl mt-10 mb-6">{{ productPopText }}</p>
                        </div>
                    </div> -->
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