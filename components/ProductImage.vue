<script setup>

import { ref } from "vue";
// const image = ref("/images/Product-page-top-image.png");
const image = ref("/images/product/jar-with-box.jpg");


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
            @mouseover="changeImage('/images/product/advantages.jpg')">
            <img src="/images/product/advantages.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/boss.jpg')">
            <img src="/images/product/boss.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/info.jpg')">
            <img src="/images/product/info.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/jar-with-box.jpg')">
            <img src="/images/product/jar-with-box.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/jar-with-ingradients.jpg')">
            <img src="/images/product/jar-with-ingradients.jpg" alt="" />
        </div>
        <div class="p-1 hover:p-0 hover:outline-dashed outline-primary rounded-xl  w-16 m-1 cursor-pointer"
            @mouseover="changeImage('/images/product/suplement.jpg')">
            <img src="/images/product/suplement.jpg" alt="" />
        </div>
    </div>
</template>