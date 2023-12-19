<script setup>

import { ref } from "vue";
// const image = ref("/images/Product-page-top-image.png");
const image = ref("/images/product/Product-01.jpg");


function changeImage(myImage) {
    image.value = myImage;
}
</script>

<template>
    <div class="flex items-center justify-center">
        <img :src="image" class="sm:w-3/4" alt="" />
    </div>
    <div class="flex items-center justify-center sm:justify-start sm:ml-11">

        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-01.jpg')">
            <img src="/images/product/Product-01.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-03.jpg')">
            <img src="/images/product/Product-03.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-04.jpg')">
            <img src="/images/product/Product-04.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-07.jpg')">
            <img src="/images/product/Product-07.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-05.jpg')">
            <img src="/images/product/Product-05.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-02.jpg')">
            <img src="/images/product/Product-02.jpg" alt="" />
        </div>
    </div>
</template>