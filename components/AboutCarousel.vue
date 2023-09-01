<template>
    <swiper :breakpoints="{
        '640': {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        '768': {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        '1024': {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    }" :modules="modules" :slides-per-view="auto" :space-between="0" navigation :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10">
                <div class="image p-4 bg-primary ">
                    <img src="/images/jar.png" class="w-2/4 mx-auto" alt="">
                </div>
                <div class="text flex flex-col justify-center items-center mb-3">
                    <p class="p-2 leading-relaxed">Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance.
                        Discover a World
                        of
                        Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your
                        Hair.</p>
                    <button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center">View More</button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10">
                <div class="image p-4 bg-pink-300 ">
                    <img src="/images/jar.png" class="w-2/4 mx-auto" alt="">
                </div>
                <div class="text flex flex-col justify-center items-center mb-3">
                    <p class="p-2 leading-relaxed">Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance.
                        Discover a World
                        of
                        Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your
                        Hair.</p>
                    <button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center">View More</button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10">
                <div class="image p-4 bg-pink-300 ">
                    <img src="/images/jar.png" class="w-2/4 mx-auto" alt="">
                </div>
                <div class="text flex flex-col justify-center items-center mb-3">
                    <p class="p-2 leading-relaxed">Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance.
                        Discover a World
                        of
                        Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your
                        Hair.</p>
                    <button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center">View More</button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10">
                <div class="image p-4 bg-pink-300 ">
                    <img src="/images/jar.png" class="w-2/4 mx-auto" alt="">
                </div>
                <div class="text flex flex-col justify-center items-center mb-3">
                    <p class="p-2 leading-relaxed">Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance.
                        Discover a World
                        of
                        Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your
                        Hair.</p>
                    <button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center">View More</button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10">
                <div class="image p-4 bg-pink-300 ">
                    <img src="/images/jar.png" class="w-2/4 mx-auto" alt="">
                </div>
                <div class="text flex flex-col justify-center items-center mb-3">
                    <p class="p-2 leading-relaxed">Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance.
                        Discover a World
                        of
                        Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your
                        Hair.</p>
                    <button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center">View More</button>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card flex flex-col justify-center items-center border border-black m-20 sm:m-10">
                <div class="image p-4 bg-pink-300 ">
                    <img src="/images/jar.png" class="w-2/4 mx-auto" alt="">
                </div>
                <div class="text flex flex-col justify-center items-center mb-3">
                    <p class="p-2 leading-relaxed">Glosense: Elevate Your Hair Care Experience with Luxurious Brilliance.
                        Discover a World
                        of
                        Radiance and Beauty Through Our Expertly Crafted Hair Products. Unveil the True Potential of Your
                        Hair.</p>
                    <button class="bg-gray-800 text-white py-2 px-8 w-4/5 flex justify-center">View More</button>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>