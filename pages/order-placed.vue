<script setup>

const nuxtApp = useNuxtApp();
onMounted(function () {
    nuxtApp.$fb.enable()
    nuxtApp.$fb.track('Purchase', { currency: 'USD', value: 30.00 });
})


</script>

<template>
    <div class="h-screen">
        <h2 class="text-3xl text-center text-green-600 mt-52">Order Placed</h2>
        <h2 class="text-center"><a class=" underline" href="/">Go To Home</a></h2>
    </div>
</template>
<style></style>