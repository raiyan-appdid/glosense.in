<script setup>

import { ref } from "vue";
// const image = ref("/images/Product-page-top-image.png");
const image = ref("/images/product/Product-01.jpg");


function changeImage(myImage) {
    image.value = myImage;
}
</script>

<template>
    <div class="flex items-center justify-center sm:px-4">
        <img :src="image" class="sm:w-3/4" alt="" />
    </div>
    <div class="flex items-center justify-center sm:px-4">
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 mr-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-01.jpg')">
            <img src="/images/product/Product-01.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-03.jpg')">
            <img src="/images/product/Product-03.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-04.jpg')">
            <img src="/images/product/Product-04.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-07.jpg')">
            <img src="/images/product/Product-07.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-05.jpg')">
            <img src="/images/product/Product-05.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 ml-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-02.jpg')">
            <img src="/images/product/Product-02.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 ml-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-08.jpg')">
            <img src="/images/product/Product-08.jpg" alt="" />
        </div>
        <div class=" hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 ml-1 cursor-pointer"
            @mouseover="changeImage('/images/product/Product-09.jpg')">
            <img src="/images/product/Product-09.jpg" alt="" />
        </div>
    </div>
</template>