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
const promocodeVerified2 = ref(false);
const promocodeDiscount = ref(0);
const promocodeOfferProduct = ref(0);
const total_price = ref(1);
const promocodeid = ref("");
const countryArray = ref(['Afghanistan',
    'Åland (Finland)',
    'Albania',
    'Algeria',
    'American Samoa (US)',
    'Andorra',
    'Angola',
    'Anguilla (BOT)',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Artsakh',
    'Aruba (Netherlands)',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda (BOT)',
    'Bhutan',
    'Bolivia',
    'Bonaire (Netherlands)',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'British Virgin Islands (BOT)',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands (BOT)',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island (Australia)',
    'Cocos (Keeling) Islands (Australia)',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao (Netherlands)',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'DR Congo',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (BOT)',
    'Faroe Islands (Denmark)',
    'Fiji',
    'Finland',
    'France',
    'French Guiana (France)',
    'French Polynesia (France)',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar (BOT)',
    'Greece',
    'Greenland (Denmark)',
    'Grenada',
    'Guadeloupe (France)',
    'Guam (US)',
    'Guatemala',
    'Guernsey (Crown Dependency)',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man (Crown Dependency)',
    'Israel',
    'Italy',
    'Ivory Coast',
    'Jamaica',
    'Japan',
    'Jersey (Crown Dependency)',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kosovo',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique (France)',
    'Mauritania',
    'Mauritius',
    'Mayotte (France)',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat (BOT)',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia (France)',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island (Australia)',
    'North Korea',
    'North Macedonia',
    'Northern Cyprus',
    'Northern Mariana Islands (US)',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Islands (BOT)',
    'Poland',
    'Portugal',
    'Puerto Rico (US)',
    'Qatar',
    'Réunion (France)',
    'Romania',
    'Russia',
    'Rwanda',
    'Saba (Netherlands)',
    'Saint Barthélemy (France)',
    'Saint Helena, Ascension and Tristan da Cunha (BOT)',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (France)',
    'Saint Pierre and Miquelon (France)',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'São Tomé and Príncipe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Eustatius (Netherlands)',
    'Sint Maarten (Netherlands)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen (Norway)',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau (NZ)',
    'Tonga',
    'Transnistria',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands (BOT)',
    'Tuvalu',
    'U.S. Virgin Islands (US)',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Wallis and Futuna (France)',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
])


onMounted(() => {
    console.log(hasPromoApplied.value);

    if (hasPromoApplied.value) {
        applyPromoCode()
    }
})
if (token.value) {
    const showInput = ref(true);
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
} else {
    const showInput = ref(false);
}

function openModal() {
    let modal = document.getElementById('authentication-modal')
    modal.classList.remove('hidden');
}

definePageMeta({
    // middleware: [
    //     function (to, from) {
    //         const token = useCookie('token');
    //         if (!token.value) {
    //             return navigateTo('product-detail')
    //         }
    //     },
    // ],
});

const nuxtApp = useNuxtApp();

function applyPromoCode() {
    promocodeVerified2.value = false;
    promocode.value = "GET970";
    verifyPromoCode('promocode1');
}
function applyPromoCode2() {
    promocodeVerified.value = false;
    promocode.value = "GLOSIX";
    verifyPromoCode('promocode2');
}

nuxtApp.hook('page:finish', () => {
    // promocode.value = "firstjar";

    var promoText = 'promocode1';
    if (route.query.my_promo == "glosix") {
        var promoText = "promocode2";
        applyPromoCode2();
    } else {
        var promoText = "promocode1";
        applyPromoCode();
    }

    verifyPromoCode(promoText);
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

async function verifyPromoCode(mycode) {
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

            if (mycode == 'promocode1') {
                promocodeVerified.value = verified;
                promocodeVerified2.value = false;
            } else {
                promocodeVerified2.value = verified;
                promocodeVerified.value = false;
            }

            if (verified) {
                promocodeDiscount.value = response._data.data.discount;
                promocodeOfferProduct.value = response._data.data.offer_product;
                counter.value = parseInt(counter.value) + parseInt(promocodeOfferProduct.value)
                promocodeid.value = response._data.data.id;
            } else {
                counter.value = route.query.count;
                promocodeDiscount.value = 0;
                promocodeOfferProduct.value = 0;
                promocodeid.value = "";
            }
        },
    })
}
</script>

<template>
    <HeaderCommon />
    <div style="position: fixed" class="bg-primary w-full mt-[-44px] sm:mt-[-10px] grid grid-cols-3 py-1 z-10">
        <div class="flex justify-center items-center">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                    <path fill="white"
                        d="M29.755 21.345A1 1 0 0 0 29 21h-2v-2c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v2h-2a1.001 1.001 0 0 0-.99 1.142l1 7A1 1 0 0 0 18 30h10a1 1 0 0 0 .99-.858l1-7a1.001 1.001 0 0 0-.235-.797M21 19h4v2h-4zm6.133 9h-8.266l-.714-5h9.694zM10 20h2v10h-2z" />
                    <path fill="white"
                        d="m16.78 17.875l-1.906-2.384l-1.442-3.605A2.986 2.986 0 0 0 10.646 10H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h1v8h2V20H4v-7a1 1 0 0 1 1-1h5.646c.411 0 .776.247.928.629l1.645 3.996l2 2.5zM4 5c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4m2 0c0 1.103.897 2 2 2s2-.897 2-2s-.897-2-2-2s-2 .897-2 2" />
                </svg>
            </div>
            <div class="text-xs leading-tight font-bold w-fit">1000+ GLOing Customers</div>
        </div>
        <div class="flex justify-center items-center">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                    <path fill="white"
                        d="M29.121 16.879A2.98 2.98 0 0 0 27.01 16H27a2.977 2.977 0 0 0-2.121.879l-4.901 4.901A2.994 2.994 0 0 0 17 19h-7a5.006 5.006 0 0 0-5 5v.667l-3 3.996l1.6 1.2l3.4-4.53V24a3.003 3.003 0 0 1 3-3h7a1 1 0 0 1 0 2h-4v2h4.929a3.972 3.972 0 0 0 2.828-1.172l5.536-5.535A.993.993 0 0 1 27 18h.003a1 1 0 0 1 .704 1.707l-7.414 7.414a2.98 2.98 0 0 1-2.122.879H11v2h7.171a4.966 4.966 0 0 0 3.536-1.465l7.414-7.414a2.999 2.999 0 0 0 0-4.242zm-7.535-8.293L18 12V2h-2v10l-3.586-3.414L11 10l6 6l6-6l-1.414-1.414z" />
                </svg>
            </div>
            <div class="text-xs leading-tight font-bold w-fit">Exact Nutrition what your hair needs!</div>
        </div>
        <div class="flex justify-center items-center">
            <div class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="white"
                        d="M2 3V2a1 1 0 0 0-1 1h1Zm11 0h1a1 1 0 0 0-1-1v1Zm0 6V8a1 1 0 0 0-1 1h1ZM2 4h11V2H2v2Zm10-1v16h2V3h-2ZM3 17V3H1v14h2Zm10-7h5V8h-5v2Zm8 3v4h2v-4h-2Zm-7 6V9h-2v10h2Zm4.707.707a1 1 0 0 1-1.414 0l-1.414 1.414a3 3 0 0 0 4.242 0l-1.414-1.414Zm-1.414-1.414a1 1 0 0 1 1.414 0l1.414-1.414a3 3 0 0 0-4.242 0l1.414 1.414ZM6.707 19.707a1 1 0 0 1-1.414 0l-1.414 1.414a3 3 0 0 0 4.242 0l-1.414-1.414Zm-1.414-1.414a1 1 0 0 1 1.414 0l1.414-1.414a3 3 0 0 0-4.242 0l1.414 1.414Zm13.414 0c.196.195.293.45.293.707h2c0-.766-.293-1.536-.879-2.121l-1.414 1.414ZM19 19a.994.994 0 0 1-.293.707l1.414 1.414A2.994 2.994 0 0 0 21 19h-2Zm-3-1h-3v2h3v-2Zm1.293 1.707A.994.994 0 0 1 17 19h-2c0 .766.293 1.536.879 2.121l1.414-1.414ZM17 19a.99.99 0 0 1 .293-.707l-1.414-1.414A2.994 2.994 0 0 0 15 19h2Zm-11.707.707A.994.994 0 0 1 5 19H3c0 .766.293 1.536.879 2.121l1.414-1.414ZM5 19a.99.99 0 0 1 .293-.707l-1.414-1.414A2.994 2.994 0 0 0 3 19h2Zm8-1H8v2h5v-2Zm-6.293.293c.196.195.293.45.293.707h2c0-.766-.293-1.536-.879-2.121l-1.414 1.414ZM7 19a.994.994 0 0 1-.293.707l1.414 1.414A2.994 2.994 0 0 0 9 19H7Zm14-2a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-3-7a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM1 17a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H1Z" />
                </svg>
            </div>
            <div class="text-xs leading-tight font-bold w-fit">Pan India Delivery</div>
        </div>
    </div>
    <div class="product-details sm:px-3 md:px-8  mt-36 sm:mt-32 pb-20 bg-white">
        <!-- <h2 class="text-secondary text-2xl font-bold text-center py-10">Billing Page</h2> -->
        <div class="grid grid-cols-12">
            <div class="container mx-auto p-5 col-span-12 sm:col-span-6 mt-0 sm:mt-0 order-2 sm:order-1">
                <form v-show="token" id="store-billing-form" action="https://admin.glosense.in/api/v3/order/store">
                    <p class=" font-bold text-lg mb-4">Shipping Details</p>
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-6">
                            <input type="hidden" v-model="promocodeid" name="promocode_id" id="">
                            <input name="name" :disabled="!name && !number && !email" required type="text" id="name"
                                v-model="name"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Name">
                            <input type="hidden" name="user_id" v-model="user_id" id="">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="phone" class="block mb-2 text-md  font-bold text-black ">Contact Number <span
                                    class="text-red-500">*</span></label> -->
                            <input name="number" :disabled="!name && !number && !email" required id="phone"
                                v-model="number" placeholder="Contact no."
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="col-span-12">
                            <!-- <label for="email" class="block mb-2 text-md  font-bold text-black ">Email <span
                                    class="text-red-500">*</span></label> -->
                            <input name="email" :disabled="!name && !number && !email" required id="email" type="email"
                                v-model="email" placeholder="Email"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

                        </div>
                        <div class="col-span-12">
                            <!-- <label for="address" class="block mb-2 text-md  font-bold text-black ">Address <span
                                    class="text-red-500">*</span></label> -->
                            <input name="addresss" :disabled="!name && !number && !email" required v-model="aaddress"
                                id="address"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Address">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="city" class="block mb-2 text-md  font-bold text-black ">City <span
                                    class="text-red-500">*</span></label> -->
                            <input name="city" :disabled="!name && !number && !email" required id="city" v-model="city"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="City">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="state" class="block mb-2 text-md  font-bold text-black ">State <span
                                    class="text-red-500">*</span></label> -->
                            <input name="state" :disabled="!name && !number && !email" required id="state"
                                v-model="state" placeholder="State"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="pincode" class="block mb-2 text-md  font-bold text-black ">Pincode <span
                                    class="text-red-500">*</span></label> -->
                            <input name="pincode" :disabled="!name && !number && !email" required id="pincode"
                                v-model="pincode" placeholder="Pincode"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div>
                        <div class="col-span-6">
                            <!-- <label for="country" class="block mb-2 text-md  font-bold text-black ">Country <span
                                    class="text-red-500">*</span></label> -->
                            <!-- <input name="country" value="India" id="country"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"> -->

                            <select id="countries" name="country" :disabled="!name && !number && !email"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option v-for="data in countryArray" :selected="data == 'India'" :value="data">{{ data
                                    }}</option>
                            </select>
                        </div>


                        <!-- <div class="col-span-6">
                            <label for="gst" class="block mb-2 text-md  font-bold text-black ">Gst (Optional)</label>
                            <input name="gst" id="gst" type="gst" v-model="gst"
                                class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        </div> -->
                    </div>

                    <div class=" flex-col flex">
                        <div class=" my-4 text-center">
                            <input form="store-billing-form" type="checkbox" class="" name="tnc" id="tnc">
                            <label for="tnc" class="ml-2">Accepting <a class=" text-secondary"
                                    href="/terms-and-conditions">Terms and
                                    Conditions</a> *</label>
                        </div>
                        <div class="text-center" v-show="token">
                            <button type="submit" form="store-billing-form"
                                class="text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-2xl  sm:w-auto px-8 py-2 text-center">Checkout</button>
                        </div>

                    </div>
                </form>
                <div class="text-center" v-show="!token">
                    <button type="button" @click="openModal"
                        class="text-white bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-2xl  sm:w-auto px-8 py-2 text-center">LogIn
                        to Proceed</button>
                </div>
                <p class="text-primary font-semibold text-center mt-4">Amazon Review</p>
                <img src="/images/review.png" class="sm:w-3/4 text-center shadow-md rounded-lg m-auto" alt="">
            </div>
            <div class="col-span-12 w-full sm:ml-6 sm:col-span-6 m-auto mt-4 order-1 sm:order-2">
                <p class=" font-bold text-lg sm:mb-4">Order Details</p>
                <div class=" bg-[#ffe6e2] p-3 border border-white sm:rounded-3xl">
                    <div class="grid grid-cols-12">
                        <div class="col-span-3">
                            <img src="/images/product/product-details-4.png" class="" alt="">
                        </div>
                        <div class="col-span-6 flex">
                            <div class="flex justify-center flex-col">
                                <h4 class="font-bold text-secondary text-xl">Hair You Glo</h4>
                                <h4 class="font-medium text-sm">For Healthy & Stronger Hair</h4>
                                <p class="font-medium text-sm">Qty: {{ counter }}</p>
                            </div>
                        </div>
                        <div class="font-bold col-span-3 text-secondary text-xl my-auto">
                            <p class="w-full text-end">₹ {{ 1299 }}.00</p>
                        </div>
                    </div>
                    <div class="h-0.5 bg-gray-300 w-3/3 sm:w-3/3 mx-auto my-2"></div>

                    <div class="grid grid-cols-12">
                        <div class="col-span-12">
                            <p class="font-medium text-sm">Select a Promo Code</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-12 gap-4 mt-3">
                        <div class="col-span-8">
                            <!-- <label for="promocode" class="block mb-2 text-md font-bold text-black ">Promo Code
                        </label> -->
                            <input @input="verifyPromoCode" name="promocode" id="promocode" type="search"
                                v-model="promocode"
                                class="bg-gray-50 uppercase w-full border border-gray-300 text-black text-md font-semibold  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        </div>
                        <div class="my-auto col-span-4 ">
                            <span v-if="promocodeVerified || promocodeVerified2"
                                class="inline-block my-auto bg-secondary mx-auto py-1 px-1.5 rounded">
                                <svg class="inline-block mr-1" width="20" height="20" viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" d="m2.75 8.75l3.5 3.5l7-7.5" />
                                </svg>
                                <span class="mx-auto inline-block text-white text-lg">Applied</span></span>
                            <span v-else class="inline-block my-auto">
                                <span class="mx-auto my-auto p-2.5 bg-gray-300 text-xl rounded-md">Apply</span>
                            </span>
                        </div>
                    </div>
                    <div v-if="promocodeVerified || promocodeVerified2" class="my-1">
                        <div class="inline-block"> <svg class="inline-block mr-1" width="18" height="18"
                                viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path fill="green" fill-rule="evenodd"
                                    d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                                    clip-rule="evenodd" />
                            </svg><span class="text-xs font-normal">PromoCode Applied
                                Successfully. You got Total</span> <span class="text-xs font-semibold">Rs. {{
                    promocodeDiscount }} OFF</span></div>
                    </div>


                    <div class="flex">
                        <div class="flex flex-col justify-center">
                            <div class="mt-3 ml-1">

                                <input type="radio" @click="applyPromoCode" v-bind:checked="promocodeVerified"
                                    class="mr-3" style="scale: 1.5; accent-color: #46a291;" name="" id="" />
                                <span
                                    class="p-0.5 text-secondary text-sm border border-3 border-secondary cursor-pointer border-dashed">
                                    GET970
                                </span>
                                <span class="py-0.5 px-2 text-primary text-sm font-semibold inline-block w-fit">Save
                                    extra
                                    Rs. 329
                                    /-</span>

                                <!-- <span v-if="!promocodeVerified" @click="applyPromoCode"
                                class="ml-3 my-auto py-1 px-2 bg-green-400 rounded-xl cursor-pointer">Apply</span>
                            <span v-else
                                class="ml-3 my-auto py-1 px-2 bg-green-400 rounded-xl cursor-pointer">Applied</span> -->
                            </div>
                            <!-- <span class="inline-block mt-1 text-sm font-semibold ml-7 w-fit">Flat 25% off. Valid with all
                            Payment
                            modes.</span> -->
                        </div>
                    </div>
                    <!-- <div class="flex">
                        <div class="flex flex-col justify-center">
                            <div class="mt-3 ml-1">
                                <input type="radio" @click="applyPromoCode2" v-bind:checked="promocodeVerified2"
                                    class="mr-3" style="scale: 1.5; accent-color: #46a291;" name="" id="" />
                                <span
                                    class="p-0.5 text-secondary text-sm border border-3 border-secondary cursor-pointer border-dashed">
                                    GLOSIX
                                </span>
                                <span class="py-0.5 px-2 text-primary text-sm font-semibold inline-block w-fit">Save
                                    extra
                                    Rs. 403
                                    /-</span>
                            </div>
                        </div>
                    </div> -->



                    <div class="h-0.5 bg-gray-300 w-3/3 sm:w-3/3 mx-auto my-2"></div>


                    <div class="grid grid-cols-2">
                        <!-- <div class="text-end font-bold">Units</div>
                    <div class="mx-auto font-bold">{{ counter }}</div> -->
                        <input type="hidden" :value="counter" name="units" form="store-billing-form" id="">
                        <div class="font-medium text-lg my-0">Item total</div>
                        <div class="text-end font-medium text-lg">₹ {{ 1299 * counter }}.00</div>
                        <input type="hidden" form="store-billing-form" name="sub_total" :value="1299 * counter" id="">
                        <div class=" font-medium text-lg my-0">Item Discount</div>
                        <!-- <div class="text-end font-medium text-lg text-secondary">-₹ 329.00</div> -->
                        <div class="text-end font-medium text-lg text-secondary">-₹ {{ promocodeDiscount }}.00</div>
                        <div class=" font-medium text-lg my-0">Extra Discount</div>
                        <div class="text-end font-medium text-lg text-secondary">-₹ 74.00</div>
                        <div class=" font-medium text-lg my-0">Shipping</div>
                        <div class="text-end font-medium text-lg"><s>₹ 100.00</s> free</div>
                        <input type="hidden" form="store-billing-form" :value="promocodeDiscount" name="discount" id="">
                    </div>
                    <div class="h-0.5 bg-gray-300 w-3/3 sm:w-3/3 mx-auto my-1"></div>
                    <div class="grid grid-cols-2">
                        <div class=" text-xl font-bold text-secondary">Order total</div>
                        <div class="text-end text-xl text-secondary font-extrabold">₹ {{ 1299 * counter -
                    promocodeDiscount
                            }}.00
                        </div>
                        <input type="hidden" form="store-billing-form" :value="(1299 * counter - promocodeDiscount)"
                            name="total" id="">
                    </div>
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


<style>
input[type="search"]::-webkit-search-cancel-button {

    /* Remove default */
    -webkit-appearance: none;

    /* Now your own custom styles */
    height: 14px;
    width: 14px;
    display: block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
    /* setup all the background tweaks for our custom icon */
    background-repeat: no-repeat;

    /* icon size */
    background-size: 14px;

}
</style>