<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin.js";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    let section = 0;

    const tlShowcase = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "linear",
        },
        scrollTrigger: {
            trigger: "#showcase-section",
            start: "top 70",
            end: "2000",
            scrub: true,
            pin: true,
            markers: true,
        },
    });
    section = 0;

    tlShowcase.to("#shop-section",
        {
            y: "-2rem",
            scale: 1.2
        });


    tlShowcase.to(
        "#showcase-slider",
        {
            "--fill-till": "+=33",
        },
        section
    );
    tlShowcase.to(
        "#showcase-section #showcase-images div:nth-child(3)",
        {
            clipPath: "inset(0 0 0 100%)",
        },
        section
    );
    tlShowcase.to(
        "#showcase-section #showcase-images div:nth-child(3) .tear",
        {
            className: "tear left-0",
            transform: "translate(100%, 0)",
            onComplete: () => { },
        },
        section
    );


    section += 1;
    tlShowcase.to(
        "#showcase-slider",
        {
            "--fill-till": "+=34",
        },
        section
    );
    tlShowcase.to(
        "#showcase-section #showcase-images div:nth-child(2)",
        {
            clipPath: "inset(0 0 0 100%)",
        },
        section
    );

    tlShowcase.to(
        "#showcase-section #showcase-images div:nth-child(2) .tear",
        {
            className: "tear left-0",
            transform: "translate(100%, 0)",
        },
        section
    );

    section += 1;
    tlShowcase.to(
        "#showcase-slider",
        {
            "--fill-till": "+=34",
        },
        section
    );


})

</script>

<template>
    <div id="showcase-section" style="--text-offset: 100rem" class="min-h-screen pt-16 relative border-blue-500">
        <div id="showcase-images" class="relative h-[400px] mb-5">
            <div
                class="absolute origin-center shadow-xl inset-0 m-auto h-[300px] w-[300px] overflow-hidden rotate-[355deg]">
                <img class="object-cover h-[300px] w-[300px]" src="/images/jar.png" alt="" />
            </div>
            <div class="absolute origin-center shadow-xl inset-0 m-auto h-[300px] w-[300px] overflow-hidden">
                <div class="tear"></div>
                <img class="object-cover h-[300px] w-[300px]" src="https://placehold.co/300x300/43A190/FFFFFF/png" alt="" />
            </div>
            <div class="absolute origin-center shadow-xl inset-0 m-auto h-[300px] w-[300px] overflow-hidden rotate-[5deg]">
                <div class="tear"></div>
                <img class="object-cover h-[300px] w-[300px]" src="https://placehold.co/300x300/F1917B/FFFFFF/png" alt="" />
            </div>
        </div>
        <div style="--fill-till: 0" id="showcase-slider" class="relative flex justify-center">
            <div class="w-[50rem] h-2 relative">
                <div class="h-2 w-full absolute bg-gray-400" id="slide"></div>
                <div class="h-2 w-[calc(var(--fill-till)*1%)] absolute bg-primary" id="slide-full">
                    <div slide-no="1" style="--active-slide: 1"
                        class="h-7 w-7 rounded-full inset-y-0 m-auto absolute bg-primary right-0" id="slide-dot"></div>
                </div>
            </div>
        </div>
    </div>
</template>