<script setup>

const otp = ref('');
const password = ref('');
const confirm_password = ref('');

function handleSubmit() {
    alert('asdf')
}

</script>

<template>
    <HeaderCommon />
    <div class="forgot-password mt-28 sm:mt-30 pb-20 bg-[#efe8df] z-20">
        <div class="container mx-auto px-10 sm:px-0 pt-10">
            <form @submit.prevent="handleSubmit">
                <div class="mb-6">
                    <label for="text" class="block mb-2 text-md  font-bold text-black ">Enter OTP</label>
                    <input type="text" id="name" v-model="otp"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-50 p-2.5"
                        placeholder="Name">
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-md  font-bold text-black ">Password</label>
                    <input type="password" id="password" v-model="password"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-50 p-2.5">
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-md  font-bold text-black ">Confirm Password</label>
                    <input type="password" id="confirm-password" v-model="confirm_password"
                        class="bg-gray-50 border border-gray-300 text-black text-md  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-50 p-2.5">
                </div>
                <button type="submit"
                    class="text-white bg-secondary font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    </div>
</template>