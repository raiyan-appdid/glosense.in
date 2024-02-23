<script setup>
import Notiflix from 'notiflix';

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const token = useCookie('token');
const order_status = ref('pending');
const order_id = ref();
const created_at = ref();
const customer_name = ref();
const customer_email = ref();
const customer_address = ref();
const customer_state = ref();
const customer_city = ref();
const customer_pincode = ref();
const customer_phone = ref();
const price = ref();
const units = ref();
const sub_total = ref();
const discount = ref();
const review = ref();
const star = ref(5);

async function getOrder() {
    await useFetch(`${apiUrl}/get-order`, {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + token.value,
        },
        onResponse({ request, response, options }) {
            // console.log(response);
            if (response._data.fetch_order_code == 200) {
                order_status.value = 'success';

                const orderData = response._data.response.data;

                order_id.value = orderData.id;
                created_at.value = orderData.created_at;
                customer_name.value = orderData.customer_name;
                customer_email.value = orderData.customer_email;
                customer_address.value = orderData.customer_address;
                customer_state.value = orderData.customer_state;
                customer_city.value = orderData.customer_city;
                customer_pincode.value = orderData.customer_pincode;
                customer_phone.value = orderData.customer_phone;

                const productData = response._data.order_data;
                console.log(productData);
                price.value = productData.price;
                units.value = productData.units;
                sub_total.value = productData.sub_total;
                discount.value = productData.discount;

            } else {
                order_status.value = 'failed';
            }

        },
    });
}

async function storeReview() {
    Notiflix.Loading.standard();
    const { data, error, pending, refresh } = await useFetch(`${apiUrl}/store-review`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + token.value,
        },
        body: {
            review: review.value,
            star: star.value,
        },
        onResponse({ request, response, options }) {
            Notiflix.Loading.remove();
            Notiflix.Notify.success("Your Review Saved");
            review.value = "";
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

onMounted(() => {
    setTimeout(() => {
        getOrder();
    }, 1000);

})


</script>

<template>
    <HeaderCommon />

    <!-- Main modal -->
    <LoginModal />
    <a target="_blank" href="https://api.whatsapp.com/send?phone=919967116267">
        <span class="wa-whatsapp">
            <svg width="55" height="55" viewBox="0 0 256 258" xmlns="http://www.w3.org/2000/svg">
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
    <div v-if="order_status == 'success'" class="my-order px-6 md:px-8 bg-[#efe8df] mt-24 pt-4 sm:mt-24 pb-20">
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div class="flex justify-start item-start space-y-2 flex-col">
                <h1 class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order
                    #{{ order_id }}</h1>
                <p class="text-base  font-medium leading-6 text-gray-600">{{ created_at }}</p>
            </div>
            <div
                class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div class="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p class="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">
                            Customer’s Cart</p>
                        <div
                            class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <img class="w-full hidden md:block" src="/images/jar2.png" alt="dress" />
                                <img class="w-1/2 md:hidden mx-auto" src="/images/jar2.png" alt="dress" />
                            </div>
                            <div
                                class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-3">
                                    <h3 class="text-xl  xl:text-2xl font-semibold leading-6 text-gray-800">
                                        Hair You GLo</h3>
                                    <div class="flex justify-start items-start flex-col space-y-2">
                                        <p class="text-sm  leading-none text-gray-800"> For Healthy and Stronger Hair </p>
                                        <p class="text-sm  leading-none text-gray-800">Jar-120g (30 servings)</p>
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base  xl:text-lg leading-6">Rs. {{ sub_total / units }} <span
                                            class="text-red-300 line-through"> Rs. {{ price / units }}</span></p>
                                    <p class="text-base  xl:text-lg leading-6 text-gray-800">Pcs : {{ units }}</p>
                                    <!-- <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">
                                        Rs. 899</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                            <h3 class="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                            <div
                                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base  leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base  leading-4 text-gray-600">Rs. {{ price }}</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base  leading-4 text-gray-800">Discount
                                    </p>
                                    <p class="text-base  leading-4 text-gray-600">Rs. {{ discount }}</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base  leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base  leading-4 text-gray-600">Rs. 0</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base  font-semibold leading-4 text-gray-600">Rs. {{ sub_total }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 class="text-xl  font-semibold leading-5 text-gray-800">Customer</h3>
                    <div
                        class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div class="flex flex-col justify-start items-start flex-shrink-0">
                            <div
                                class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <!-- <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" /> -->
                                <div class="flex justify-start items-start flex-col space-y-2">
                                    <p class="text-base  font-semibold leading-4 text-left text-gray-800">
                                        {{ customer_name }}</p>
                                    <p class="text-sm  leading-5 text-gray-600">{{ customer_email }}</p>
                                    <p class="text-sm  leading-5 text-gray-600">{{ customer_phone }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div
                                class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div
                                    class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p class="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                                        Billing & Shipping Address</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        {{ customer_address }}</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        State : {{ customer_state }}</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        City : {{ customer_city }}</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        Pincode : {{ customer_pincode }}</p>
                                </div>
                                <!-- <div
                                    class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p class="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                                        Billing Address</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        180 North King Street, Northhampton MA 1060</p>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form @submit.prevent="storeReview">
            <div class="mb-6">
                <label for="text" class="block mb-2 text-md  font-bold text-black ">Give Review</label>
                <input type="text" id="review" v-model="review"
                    class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 "
                    placeholder="Review">
            </div>
            <div class="mb-6">
                <!-- <label for="text" class="block mb-2 text-md  font-bold text-black ">Stars</label>
                <select type="text" id="review" v-model="star"
                    class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400 "
                    placeholder="Review">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select> -->


                <div class="container">
                    <div class="feedback" style="max-width: fit-content !important;">
                        <div class="rating">
                            <input type="radio" name="rating" value="5" v-model="star" id="rating-5">
                            <label for="rating-5"></label>
                            <input type="radio" name="rating" value="4" v-model="star" id="rating-4">
                            <label for="rating-4"></label>
                            <input type="radio" name="rating" value="3" v-model="star" id="rating-3">
                            <label for="rating-3"></label>
                            <input type="radio" name="rating" value="2" v-model="star" id="rating-2">
                            <label for="rating-2"></label>
                            <input type="radio" name="rating" value="1" v-model="star" id="rating-1">
                            <label for="rating-1"></label>
                        </div>
                    </div>
                </div>



            </div>
            <button type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center -600 -blue-700 -blue-800">Submit</button>
        </form>

    </div>

    <div v-else-if="order_status == 'pending'" class="my-order px-6 md:px-8 bg-[#efe8df]  mt-24 pt-4 sm:mt-24 pb-20">
        <div class="h-[80vh] flex justify-center items-center">
            Fetching Your Order Please Wait ....
        </div>
    </div>
    <div v-else="order_status != 'failed'" class="my-order px-6 md:px-8 bg-[#efe8df]  mt-24 pt-4 sm:mt-24 pb-20">
        <div class="h-[80vh] flex justify-center items-center">
            Error While Fetching Order...
        </div>
    </div>

    <!-- <button v-if="loading">raiyan</button>
    <button v-else="loading">memon</button> -->
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