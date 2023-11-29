<script setup>

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const token = useCookie('token');


async function getOrder() {
    await useFetch(`${apiUrl}/get-order`, {
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + token.value,
        },
        onResponse({ request, response, options }) {
            console.log(response);
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
    <a target="_blank" href="https://api.whatsapp.com/send?phone=8097750991">
        <span class="wa-whatsapp"><svg aria-hidden="true" focusable="false" data-prefix="fa-brands" data-icon="whatsapp"
                class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    fill="currentColor"></path>
            </svg></span>
    </a>
    <div class="my-order px-6 md:px-8 bg-[#efe8df]  mt-24 pt-4 sm:mt-24 pb-20">
        <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div class="flex justify-start item-start space-y-2 flex-col">
                <h1 class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order
                    #13432</h1>
                <p class="text-base  font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
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
                                        <!-- <p class="text-sm  leading-none text-gray-800"><span class=" text-gray-300">Color:
                                            </span> Light Blue</p> -->
                                    </div>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base  xl:text-lg leading-6">Rs. 899 <span
                                            class="text-red-300 line-through"> Rs. 1299</span></p>
                                    <p class="text-base  xl:text-lg leading-6 text-gray-800">01</p>
                                    <p class="text-base  xl:text-lg font-semibold leading-6 text-gray-800">
                                        Rs. 899</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                            <h3 class="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                            <div
                                class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base  leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base  leading-4 text-gray-600">Rs. 1299</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base  leading-4 text-gray-800">Discount
                                    </p>
                                    <p class="text-base  leading-4 text-gray-600">Rs. 300</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base  leading-4 text-gray-800">Shipping</p>
                                    <p class="text-base  leading-4 text-gray-600">Rs. 0</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base  font-semibold leading-4 text-gray-600">Rs. 899</p>
                            </div>
                        </div>
                        <!-- <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                            <h3 class="text-xl  font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div class="flex justify-between items-start w-full">
                                <div class="flex justify-center items-center space-x-4">
                                    <div class="w-8 h-8">
                                        <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                    </div>
                                    <div class="flex flex-col justify-start items-center">
                                        <p class="text-lg leading-6  font-semibold text-gray-800">DPD
                                            Delivery<br /><span class="font-normal">Delivery with 24 Hours</span></p>
                                    </div>
                                </div>
                                <p class="text-lg font-semibold leading-6  text-gray-800">$8.00</p>
                            </div>
                            <div class="w-full flex justify-center items-center">
                                <button
                                    class="hover:bg-black    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View
                                    Carrier Details</button>
                            </div>
                        </div> -->
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
                                        Test Name</p>
                                    <p class="text-sm  leading-5 text-gray-600">test@gmail.com</p>
                                </div>
                            </div>

                            <!-- <div
                                class="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">

                                <img class=""
                                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                                    alt="email">
                                <p class="cursor-pointer text-sm leading-5 ">david89@gmail.com</p>
                            </div> -->
                        </div>
                        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div
                                class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div
                                    class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p class="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                                        Shipping Address</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        180 North King Street, Northhampton MA 1060</p>
                                </div>
                                <div
                                    class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                                    <p class="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">
                                        Billing Address</p>
                                    <p
                                        class="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                                        180 North King Street, Northhampton MA 1060</p>
                                </div>
                            </div>
                            <!-- <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button
                                    class="mt-6 md:mt-0   py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit
                                    Details</button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {

}
</script>
  
<style></style>