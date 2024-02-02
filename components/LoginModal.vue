<script setup>
import Swal from 'sweetalert2';
import Notiflix from 'notiflix';

const email = ref("");
const phone = ref();
const otp = ref();
const otpVerified = ref(false);
const otpSent = ref(false);
const password = ref("");
const region = ref('India');
const token = useCookie('token');

import { useUserStore } from '@/stores/user'
const store = useUserStore();
const { getUser } = store;

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;

async function sendOtp() {
    await useFetch(`${apiUrl}/sms`, {
        method: "POST",
        body: {
            phone: phone.value
        },
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response._data.message);
            const statusCode = response.status;
            if (statusCode == 200) {
                Notiflix.Notify.success("Otp Sent To your Mobile Number");
                otpSent.value = true;
                otpInputEnable.value = true;
            }
            else {
                Notiflix.Notify.failure(response._data.message);
            }
        },
    })
}


onMounted(function () {
    OtpInputs();
})




function OtpInputs() {
    try {
        var otpInputs = document.querySelectorAll(".otp-input");
        console.log('raiyan');

        function setupOtpInputListeners(inputs) {
            inputs.forEach(function (input, index) {
                input.addEventListener("paste", function (ev) {
                    var clip = ev.clipboardData.getData('text').trim();
                    if (!/^\d{6}$/.test(clip)) {
                        ev.preventDefault();
                        return;
                    }

                    var characters = clip.split("");
                    inputs.forEach(function (otpInput, i) {
                        otpInput.value = characters[i] || "";
                    });

                    enableNextBox(inputs[0], 0);
                    inputs[5].removeAttribute("disabled");
                    inputs[5].focus();
                    updateOTPValue(inputs);
                });

                input.addEventListener("input", function () {
                    var currentIndex = Array.from(inputs).indexOf(this);
                    var inputValue = this.value.trim();

                    if (!/^\d$/.test(inputValue)) {
                        this.value = "";
                        return;
                    }

                    if (inputValue && currentIndex < 5) {
                        inputs[currentIndex + 1].removeAttribute("disabled");
                        inputs[currentIndex + 1].focus();
                    }

                    if (currentIndex === 4 && inputValue) {
                        inputs[5].removeAttribute("disabled");
                        inputs[5].focus();
                    }

                    updateOTPValue(inputs);
                });

                input.addEventListener("keydown", function (ev) {
                    var currentIndex = Array.from(inputs).indexOf(this);

                    if (!this.value && ev.key === "Backspace" && currentIndex > 0) {
                        inputs[currentIndex - 1].focus();
                    }
                });
            });
        }

        function enableNextBox(input, currentIndex) {
            var inputValue = input.value;

            if (inputValue === "") {
                return;
            }

            var nextIndex = currentIndex + 1;

            if (nextBox) {
                nextBox.removeAttribute("disabled");
            }
        }

        function updateOTPValue(inputs) {
            var otpValue = "";

            inputs.forEach(function (input) {
                otpValue += input.value;
            });

            if (inputs === otpInputs) {
                document.getElementById("verificationCode").value = otpValue;
            }
        }

        setupOtpInputListeners(otpInputs);

        otpInputs[0].focus(); // Set focus on the first OTP input field

        otpInputs[5].addEventListener("input", function () {
            updateOTPValue(otpInputs);
        });
    } catch (error) {
        console.log(error);
    }
}





async function verifyOtp() {
    var otpValue = document.querySelectorAll("#verificationCode");
    otpValue = otpValue[0].value;
    if (otpValue.length > 5) {
        await useFetch(`${apiUrl}/verify-sms-otp`, {
            method: "POST",
            body: {
                phone: phone.value,
                otp: otpValue
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
                        // login();
                        otpVerified.value = true;
                        Notiflix.loading.standard();

                    } else {
                        otpVerified.value = false;
                        Notiflix.Notify.failure("Otp is not valid");
                    }
                }
            },
        })
    } else {
        otpVerified.value = false;
    }
}

function closeModal() {
    let modal = document.getElementById('authentication-modal')
    modal.classList.add('hidden');
}

async function login() {

    if (otpVerified.value) {
        await useFetch(`${apiUrl}/user/login-sms`, {
            method: 'POST',
            headers: {
                accept: "application/json",
            },
            body: {
                phone: phone.value,
                // password: password.value,
            },
            onResponse({ request, response, options }) {
                if (response._data.success) {
                    token.value = response._data.token;
                    closeModal();
                    Swal.fire({
                        title: "Logged In",
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    // window.location.reload(true)
                    window.location.href = 'billing-details?count=1';

                } else {
                    Swal.fire({
                        title: response._data.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again Or Create Account'
                    });
                }
            },
        })
    } else {
        Notiflix.Notify.failure("Otp is not valid");
    }

    await getUser();
}
</script>

<template>
    <!-- Main modal -->
    <div id="authentication-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 hidden flex items-center backdrop-blur-sm bg-white/30 justify-center right-0 z-50 show-modal mx-auto w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <button type="button" @click="closeModal" v-show="!otpSent"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class=" text-4xl font-bold mb-4 text-primary text-center">Login
                    </h3>
                    <h3 class=" text-xl font-medium text-gray-900 text-center" v-if="!otpSent">Welcome To Glosense !
                    </h3>
                    <h6 class="mb-4 text-md font-medium text-gray-900  text-center" v-if="!otpSent">Enter your mobile number
                        and we will send you an OTP for verification.</h6>
                    <h6 class="mb-4 text-md font-medium text-gray-900  text-center" v-if="otpSent">Verify your phone number
                        using the OTP
                        sent to the number <span class="text-primary">{{ phone }}</span></h6>
                    <form class="space-y-6" @submit.prevent="login">
                        <div>
                            <!-- <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile
                                Number</label> -->
                            <div class="relative" v-if="!otpSent">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#138808" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-5H0z" />
                                        <path fill="#F93" d="M36 14V9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v5z" />
                                        <path fill="#F7F7F7" d="M0 13.667h36v8.667H0z" />
                                        <circle cx="18" cy="18" r="4" fill="navy" />
                                        <circle cx="18" cy="18" r="3.375" fill="#F7F7F7" />
                                        <path fill="#6666B3"
                                            d="m18.1 16.75l-.1.65l-.1-.65l.1-1.95zm-.928-1.841l.408 1.909l.265.602l-.072-.653zm-.772.32l.888 1.738l.412.513l-.238-.613zm-.663.508l1.308 1.45l.531.389l-.389-.531zm-.508.663l1.638 1.062l.613.238l-.513-.412zm-.32.772l1.858.601l.653.072l-.602-.265zM14.8 18l1.95.1l.65-.1l-.65-.1zm.109.828l1.909-.408l.602-.265l-.653.072zm.32.772l1.738-.888l.513-.412l-.613.238zm.508.663l1.45-1.308l.389-.531l-.531.389zm.663.508l1.062-1.638l.238-.613l-.412.513zm.772.32l.601-1.858l.072-.653l-.265.602zM18 21.2l.1-1.95l-.1-.65l-.1.65zm.828-.109l-.408-1.909l-.265-.602l.072.653zm.772-.32l-.888-1.738l-.412-.513l.238.613zm.663-.508l-1.308-1.45l-.531-.389l.389.531zm.508-.663l-1.638-1.062l-.613-.238l.513.412zm.32-.772l-1.858-.601l-.653-.072l.602.265zM21.2 18l-1.95-.1l-.65.1l.65.1zm-.109-.828l-1.909.408l-.602.265l.653-.072zm-.32-.772l-1.738.888l-.513.412l.613-.238zm-.508-.663l-1.45 1.308l-.389.531l.531-.389zm-.663-.508l-1.062 1.638l-.238.613l.412-.513zm-.772-.32l-.601 1.858l-.072.653l.265-.602z" />
                                        <g fill="navy">
                                            <circle cx="17.56" cy="14.659" r=".2" />
                                            <circle cx="16.71" cy="14.887" r=".2" />
                                            <circle cx="15.948" cy="15.326" r=".2" />
                                            <circle cx="15.326" cy="15.948" r=".2" />
                                            <circle cx="14.887" cy="16.71" r=".2" />
                                            <circle cx="14.659" cy="17.56" r=".2" />
                                            <circle cx="14.659" cy="18.44" r=".2" />
                                            <circle cx="14.887" cy="19.29" r=".2" />
                                            <circle cx="15.326" cy="20.052" r=".2" />
                                            <circle cx="15.948" cy="20.674" r=".2" />
                                            <circle cx="16.71" cy="21.113" r=".2" />
                                            <circle cx="17.56" cy="21.341" r=".2" />
                                            <circle cx="18.44" cy="21.341" r=".2" />
                                            <circle cx="19.29" cy="21.113" r=".2" />
                                            <circle cx="20.052" cy="20.674" r=".2" />
                                            <circle cx="20.674" cy="20.052" r=".2" />
                                            <circle cx="21.113" cy="19.29" r=".2" />
                                            <circle cx="21.341" cy="18.44" r=".2" />
                                            <circle cx="21.341" cy="17.56" r=".2" />
                                            <circle cx="21.113" cy="16.71" r=".2" />
                                            <circle cx="20.674" cy="15.948" r=".2" />
                                            <circle cx="20.052" cy="15.326" r=".2" />
                                            <circle cx="19.29" cy="14.887" r=".2" />
                                            <circle cx="18.44" cy="14.659" r=".2" />
                                            <circle cx="18" cy="18" r=".9" />
                                        </g>
                                    </svg>
                                </div>
                                <input type="text" id="default-search" v-model="region" readonly
                                    class="block mb-4 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                    required>
                            </div>

                            <div class="relative" v-if="!otpSent">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="currentColor"
                                            d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z" />
                                    </svg>
                                </div>
                                <input type="number" pattern="[0-9]*" maxlength="10" placeholder="Mobile Number"
                                    v-model="phone"
                                    class="block mb-10 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                                    required>
                            </div>



                            <div v-show="otpSent">
                                <div class="otp-container mt-10">
                                    <input type="text" @keyup="verifyOtp" class="otp-input" pattern="\d" maxlength="1">
                                    <input type="text" @keyup="verifyOtp" class="otp-input" pattern="\d" maxlength="1"
                                        disabled>
                                    <input type="text" @keyup="verifyOtp" class="otp-input" pattern="\d" maxlength="1"
                                        disabled>
                                    <input type="text" @keyup="verifyOtp" class="otp-input" pattern="\d" maxlength="1"
                                        disabled>
                                    <input type="text" @keyup="verifyOtp" class="otp-input" pattern="\d" maxlength="1"
                                        disabled>
                                    <input type="text" @keyup="verifyOtp" class="otp-input" pattern="\d" maxlength="1"
                                        disabled>
                                </div>

                                <!-- Field to display entered OTP -->
                                <input type="hidden" id="verificationCode" placeholder="Enter verification code">
                                <!-- Button to verify OTP -->
                                <!-- <button type="button" id="verifyMobileOTP">VERIFY &amp; PROCEED</button> -->
                            </div>

                            <h3 v-show="otpSent" class="mb-10 text-center mt-5">Didn’t receive an OTP? <span
                                    @click="sendOtp" class="text-primary font-bold text-xl cursor-pointer underline">Resend
                                    OTP</span></h3>










                            <!-- <input type="text" name="phone" id="phone" v-model="region" readonly
                                class="bg-gray-50 mb-4 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                required> -->
                            <!-- <label for="email" class="block  text-sm font-medium text-gray-900 dark:text-white">Mobile
                                Number</label> -->
                            <!-- <input type="number" placeholder="Mobile Number" name="phone" id="phone" v-model="phone"
                                class="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                required> -->
                            <!-- <button @click="sendOtp" type="button"
                                class="text-white w-full  bg-primary rounded-lg px-4 mt-3 py-2">send
                                otp</button> -->

                            <div v-if="!otpSent" class="absolute mt-[-10px] w-full flex justify-center"
                                style="margin-left: -30px;">
                                <div @click="sendOtp"
                                    class="submit-button-circle bg-secondary w-20 h-20 cursor-pointer rounded-full flex justify-center items-center"
                                    style="border: 10px solid white;">
                                    <span>
                                        <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="white"
                                                d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div v-else class="absolute mt-[-10px] w-full flex justify-center" style="margin-left: -30px;">
                                <div @click="login"
                                    class="submit-button-circle bg-secondary cursor-pointer w-20 h-20 rounded-full flex justify-center items-center"
                                    style="border: 10px solid white;">
                                    <span>
                                        <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="white"
                                                d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- <div v-if="otpSent">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Enter
                                OTP</label>
                            <input type="number" name="otp" id="otp" v-model="otp" @keyup="verifyOtp"
                                class="bg-gray-50 mb-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                required>
                        </div> -->
                        <!-- <button type="submit"
                            class="w-full text-white  bg-secondary  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            v-show="otpVerified">Login
                            to your account</button> -->
                        <!-- <div class="flex justify-between">
                            <div class="flex items-start">
                                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <a href="/register"
                                        class="text-blue-700 hover:underline dark:text-blue-500">
                                        Create
                                        account</a>
                                </div>
                            </div>
                            <a href="/forgot-password"
                                class="text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot
                                Password?</a>
                        </div> -->
                    </form>
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