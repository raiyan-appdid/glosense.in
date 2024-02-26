<script setup>
import Notiflix from 'notiflix';
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const name = ref();
const description = ref();
const rating = ref();

async function handleSubmit() {
    Notiflix.Loading.standard();
    const { data, error, pending, refresh } = await useFetch(`${apiUrl}/store-anonymous-review`, {
        method: "POST",
        headers: {
            accept: "application/json",
        },
        body: {
            name: name.value,
            description: description.value,
            rating: rating.value,
        },
        onResponse({ request, response, options }) {
            Notiflix.Loading.remove();
            Notiflix.Notify.success("Your Review Saved");
            name.value = "";
            description.value = "";
            rating.value = "";
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

    <!-- Main modal -->
    <LoginModal />
    <a target="_blank" href="https://api.whatsapp.com/send?phone=919967116267">
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
    <div class="mx-auto px-6 md:px-8  mt-24 pt-10 sm:mt-24 pb-20 bg-[#efe8df]">
        <form @submit.prevent="handleSubmit">
            <div class="mb-6">
                <label for="text" class="block mb-2 text-md  font-bold text-black ">Name</label>
                <input type="text" id="name" v-model="name"
                    class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 "
                    placeholder="Name">
            </div>
            <div class="mb-6">
                <label for="text" class="block mb-2 text-md  font-bold text-black ">Description</label>
                <input type="text" id="name" v-model="description"
                    class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 "
                    placeholder="Description">
            </div>

            <div class="container">
                <div class="feedback">
                    <div class="rating">
                        <input type="radio" name="rating" value="5" v-model="rating" id="rating-5">
                        <label for="rating-5"></label>
                        <input type="radio" name="rating" value="4" v-model="rating" id="rating-4">
                        <label for="rating-4"></label>
                        <input type="radio" name="rating" value="3" v-model="rating" id="rating-3">
                        <label for="rating-3"></label>
                        <input type="radio" name="rating" value="2" v-model="rating" id="rating-2">
                        <label for="rating-2"></label>
                        <input type="radio" name="rating" value="1" v-model="rating" id="rating-1">
                        <label for="rating-1"></label>
                    </div>
                </div>
            </div>

            <button type="submit"
                class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center -600 -blue-700 -blue-800">Submit</button>
        </form>
    </div>
</template>

<style type="scss">
.rating {
    display: flex;
    width: 100%;
    justify-content: start;
    overflow: hidden;
    flex-direction: row-reverse;
    /* height: 150px; */
    position: relative;
}

.rating-0 {
    filter: grayscale(100%);
}

.rating>input {
    display: none;
}

.rating>label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: .3s;
}

.rating>input:checked~label,
.rating>input:checked~label~label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}


.rating>input:not(:checked)~label:hover,
.rating>input:not(:checked)~label:hover~label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
}

.emoji-wrapper {
    width: 100%;
    text-align: center;
    height: 100px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

#rating-1:checked~.emoji-wrapper>.emoji {
    transform: translateY(-100px);
}

#rating-2:checked~.emoji-wrapper>.emoji {
    transform: translateY(-200px);
}

#rating-3:checked~.emoji-wrapper>.emoji {
    transform: translateY(-300px);
}

#rating-4:checked~.emoji-wrapper>.emoji {
    transform: translateY(-400px);
}

#rating-5:checked~.emoji-wrapper>.emoji {
    transform: translateY(-500px);
}

.feedback {
    max-width: 360px;
    background-color: #fff;
    width: 100%;
    /* padding: 30px; */
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    box-shadow: 0 4px 30px rgba(0, 0, 0, .05);
}
</style>