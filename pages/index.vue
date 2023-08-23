<script setup>
import useAnimation from "~/plugins/useAnimation";
import FeatureCard from "~/components/Helper/FeatureCard.vue";

useAnimation();
</script>

<template>
  <div>
    <div
      class="landing__main w-full text-center bg-[url('/images/green-bg.jpg')] min-h-screen pt-15 bg-no-repeat bg-cover bg-top overflow-hidden"
    >
      <span
        class="absolute bg-[url(/images/leaves.webp)] w-[109px] h-[201px] leaves-1"
      ></span>
      <span
        class="absolute bg-[url(/images/leaves.webp)] w-[142px] h-[257px] leaves-2"
      ></span>
      <span
        class="absolute bg-[url(/images/leaves.webp)] w-[109px] h-[201px] leaves-3"
      ></span>
      <div class="text-center flex items-center flex-col">
        <div>
          <div class="sm:mt-[15rem] mt-[10rem] hero-main-text">
            <h1
              class="lg:text-[15rem] md:text-[10rem] sm:text-[8rem] text-[5rem] font-[700] text-transparent bg-cover leading-[0.85] bg-clip-text hero-text"
            >
              Glosense
            </h1>
            <!-- <h1
              class="lg:text-[15rem] md:text-[10rem] sm:text-[8rem] text-[5rem] lg:mt-[-10rem] md:mt-[-5rem] mt-[-3rem] font-[700] text-transparent bg-clip-text bg-[url('/images/green-bg.jpg')]"
            >
              Sense
            </h1> -->
          </div>
        </div>
        <div class="relative w-full landing__description pt-[5rem]">
          <ul class="flex list-disc justify-center text-white">
            <li class="inline-block font-semibold">Home Compost</li>
            <li class="ml-7 font-semibold">Home Compost</li>
            <li class="ml-7 font-semibold">Home Compost</li>
          </ul>
        </div>
        <img
          src="/images/jar.png"
          class="w-[300px] mt-16 product-image opacity-0 absolute bottom-[50rem] z-10"
        />
        <img
          src="/images/splash.png"
          class="w-[600px] mt-16 splash-image opacity-0 absolute bottom-[-50rem]"
        />

        <div id="featurs" class="w-full">
          <FeatureCard class="absolute inset-0 h-0 w-0 m-auto opacity-0 fc-1" />
          <FeatureCard class="absolute inset-0 h-0 w-0 m-auto opacity-0 fc-2" />
          <FeatureCard class="absolute inset-0 h-0 w-0 m-auto opacity-0 fc-3" />
          <FeatureCard class="absolute inset-0 h-0 w-0 m-auto opacity-0 fc-4" />
        </div>
      </div>
    </div>

    <!-- <div class="h-[100rem] w-full"></div> -->
    <!-- <div>End</div> -->
  </div>
</template>
