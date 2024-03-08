<script setup>

const nuxtApp = useNuxtApp();
onMounted(function () {
    nuxtApp.$fb.enable()
    nuxtApp.$fb.track('Purchase', { currency: 'USD', value: 30.00 });
})


</script>

<template>
    <div class="h-screen flex flex-col justify-center w-[100%] items-center bg-[#efe8df]">
        <div>
            <div>
                <span>
                    <svg class="w-[170px] text-center" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" stroke="#43a190" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M1.5 2.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2m-7-2v4m7-4v4m-7-2h5" />
                            <path d="m4 9l2 1.5l3.5-4" />
                        </g>
                    </svg>
                </span>
            </div>

        </div>
        <div class="mt-10 w-full h-fit">
            <p class="text-primary text-3xl mb-5 font-bold text-center">Successful!!</p>
            <p class="text-primary text-2xl mt-2 font-bold text-center">Thank you! Your order will be delivered in 3-6
                business days!
                Glo from within, Happily!</p>
            <div class="flex justify-center mt-4">
                <a href="/my-order" class="text-center bg-primary p-2 text-white text-lg rounded-lg">View your order</a>
            </div>S
            <div class="flex justify-center mt-4">
                <a href="/" class="text-center bg-[#ffff] p-2  text-black text-lg rounded-lg">Go back home</a>
            </div>
        </div>

        <!-- 
        <h2 class="text-3xl text-center text-green-600 mt-52">Order Placed</h2>
        <h2 class="text-center"><a class=" underline" href="/">Go To Home</a></h2> -->
    </div>
</template>
<style></style>