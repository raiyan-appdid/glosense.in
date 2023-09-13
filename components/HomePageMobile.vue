<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin.js";

onMounted(() => {

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const tlHeroResponsive = gsap.timeline({
        defaults: {
            duration: 1,
        },
        scrollTrigger: {
            trigger: "#top-section",
            start: "top top",
            end: "10000",
            scrub: 2,
            pin: true,
            // markers: true,
        },
    });

    tlHeroResponsive.to("#logo-image-responsive", {
        duration: 4,
        top: "1rem",
        width: "8rem",
    }, "+=1");

    tlHeroResponsive.to(".home-text-responsive", {
        duration: 6,
        y: -300,
        opacity: 0
    }, "-=6");
    tlHeroResponsive.from('#jar-image-responsive', {
        y: -500,
        opacity: 0,
        duration: 3,
        rotate: 360,
    })
    tlHeroResponsive.from('.elegance-text-responsive', {
        duration: 7,
        opacity: 0,
    })
    tlHeroResponsive.to('.elegance-text-responsive', {
        duration: 7,
        opacity: 0,
    })
    tlHeroResponsive.to('#jar-image-responsive', {
        y: 130,
        opacity: 1,
        duration: 3,
    })
    tlHeroResponsive.to('.what-text-responsive', {
        opacity: 1,
        duration: 3,
    })


    tlHeroResponsive.to('.ingredient-my-1-responsive', {
        y: -200,
        x: -120,
        opacity: 1,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.to('.ingredient-my-2-responsive', {
        y: -210,
        x: 0,
        opacity: 1,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-3-responsive', {
        y: -200,
        x: 120,
        opacity: 1,
        duration: 3,
    }, "<")

    tlHeroResponsive.to('.ingredient-my-4-responsive', {
        y: -120,
        x: -120,
        opacity: 1,
        duration: 3,
    }, "+=1")

    tlHeroResponsive.to('.ingredient-my-5-responsive', {
        y: -130,
        x: -0,
        opacity: 1,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-6-responsive', {
        y: -120,
        x: 120,
        opacity: 1,
        duration: 3,
    }, "<")

    tlHeroResponsive.to('.ingredient-my-1-responsive', {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.to('.ingredient-my-2-responsive', {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-3-responsive', {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-4-responsive', {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-5-responsive', {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-6-responsive', {
        y: 0,
        x: 0,
        opacity: 0,
        duration: 3,
    }, "<")

    tlHeroResponsive.to('.what-text-responsive', {
        opacity: 0,
        duration: 3,
    })

    tlHeroResponsive.to('#jar-image-responsive', {
        y: 0,
        opacity: 1,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.to('#slider-image-responsive', {
        y: -400,
        opacity: 1,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.to('#slider-image-responsive', {
        y: -1000,
        opacity: 1,
        duration: 3,
    }, "+=1")

    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 6,
        rotation: 720,
    }, "+=1")

    tlHeroResponsive.from('.vitamin-custom-responsive', {
        x: -500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('.calcium-custom-responsive', {
        x: 500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 6,
        rotation: 1440,
    }, "+=1")
    tlHeroResponsive.to('.vitamin-custom-responsive', {
        x: 500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.to('.calcium-custom-responsive', {
        x: -500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('.vitamin-custom-2-responsive', {
        x: -500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('.calcium-custom-2-responsive', {
        x: 500,
        duration: 6,
        opacity: 1,
    }, "<")

    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 6,
        rotation: 1080,
    }, "+=1")

    tlHeroResponsive.to('.vitamin-custom-2-responsive', {
        x: 500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.to('.calcium-custom-2-responsive', {
        x: -500,
        duration: 6,
        opacity: 1,
    }, "<")
    tlHeroResponsive.to('#jar-image-responsive', {
        y: 130,
        opacity: 1,
        duration: 3,
    })
    tlHeroResponsive.to('.prevent-damage-1', {
        y: -60,
        opacity: 1,
        duration: 3,
    })
    tlHeroResponsive.to('.prevent-damage-2', {
        y: -30,
        opacity: 1,
        duration: 3,
    })
    tlHeroResponsive.to('.prevent-damage-3', {
        y: 0,
        opacity: 1,
        duration: 3,
    })
    tlHeroResponsive.to('.prevent-damage-4', {
        y: 30,
        opacity: 1,
        duration: 3,
    })

    tlHeroResponsive.to('.prevent-damage-1', {
        y: 0,
        opacity: 0,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.to('.prevent-damage-2', {
        y: 0,
        opacity: 0,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.prevent-damage-3', {
        y: 0,
        opacity: 0,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.prevent-damage-4', {
        y: 0,
        opacity: 0,
        duration: 3,
    }, "<")

    tlHeroResponsive.to('#jar-image-responsive', {
        y: -230,
        opacity: 1,
        duration: 3,
    }), "+=1"


})

</script>

<template>
    <div class="about-page bg-[#efe8df]">
        <div>
            <img id="logo-image-responsive" src="/images/logo.png"
                class="w-3/4 z-20 inset-x-0 my-0 mx-auto top-[10rem] fixed" alt="" />
        </div>
        <div class="container h-screen mx-auto fixed flex flex-col items-center justify-center pt-20 pb-20">
            <img class="w-[10rem] absolute left-0 top-0" src="/images/glob-tl.png" alt="" />
            <img class="w-[12rem] absolute left-0 bottom-0" src="/images/glob-bl.png" alt="" />
            <img class="w-[12rem] absolute opacity-50 right-0 bottom-0" src="/images/glob-br.png" alt="" />
        </div>
        <div class="container h-screen mx-auto fixed flex flex-col items-center justify-center pt-20 pb-20"
            id="top-section">

            <h2 class="px-5 home-text-responsive text-center mt-3">Unlock the essense of self-care through the magic of
                superfoods.
            </h2>
            <h4 class="mt-5 home-text-responsive text-1xl bg-[#ef8f7b] text-neutral-50 py-1 px-4  rounded-3xl"><a
                    href="/product-detail">Know
                    more</a>
            </h4>

            <div class="jar absolute flex flex-col justify-center items-center">

                <h1 class="text-sm text-center opacity-0 prevent-damage-1 absolute -top-[20px]  text-white  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,-1px 1px 0 #f1917b, 1px 1px 0 #f1917b;">
                    PREVENT DAMAGE
                </h1>
                <h1 class="text-sm text-center opacity-0 prevent-damage-2 absolute -top-[10px] text-emerald-800  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    PREVENT DAMAGE
                </h1>
                <h1 class="text-sm text-center opacity-0 prevent-damage-3 absolute -top-[0px] text-white  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,-1px 1px 0 #f1917b, 1px 1px 0 #f1917b;">
                    PREVENT DAMAGE
                </h1>
                <h1 class="text-sm text-center opacity-0 prevent-damage-4 absolute top-[10px] text-white  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,-1px 1px 0 #f1917b, 1px 1px 0 #f1917b;">
                    PREVENT DAMAGE
                </h1>

                <h4
                    class="text-sm  -top-[150px] text-center absolute opacity-0 what-text-responsive font-extrabold text-secondary mb-3">
                    What's in it ?</h4>
                <h4
                    class="text-sm  -top-[100px] text-center absolute elegance-text-responsive font-extrabold text-secondary mb-3">
                    LET' S BEGIN
                    WITH
                    ELEGANCE: OUR
                    HAIR
                    CARE SUPERBLEND</h4>
                <h1 class="text-3xl inline-block absolute -top-[100px] text-white vitamin-custom-responsive  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,-1px 1px 0 #f1917b, 1px 1px 0 #f1917b;">
                    VITAMINS
                </h1>
                <h1 class="text-3xl inline-block absolute -top-[100px] vitamin-custom-2-responsive text-white bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,
              -1px 1px 0 #f1917b, 1px 1px 0 #f1917b;">
                    REDUCE
                </h1>
                <img id="jar-image-responsive" class="h-[160px] w-[150px]" src="/images/jar.png" alt="">
                <h1 class="text-3xl absolute -bottom-[100px] calcium-custom-2-responsive text-emerald-800  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    HAIR FALL
                </h1>
                <h1 class="text-3xl absolute -bottom-[100px] font-extrabold calcium-custom-responsive text-emerald-800  bg-transparent inset-x-0"
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    CALCIUM
                </h1>
                <h2 class="text-center absolute -bottom-[100px] elegance-text-responsive font-bold text-sm mt-3">100 %
                    Natural Actives* -
                    Plant Based
                    - Strengthen hair
                </h2>

                <!-- <div class="ingredients-responsive absolute"> -->
                <div class="ingredient-my-1-responsive flex opacity-0 items-center flex-col">
                    <img class=" absolute inset-y-36 w-[60px] " src="/images/Ingradients-02.png" alt="" />
                    <h3 class="mt-5 text-xl font-bold">Pomegranate</h3>
                </div>
                <div class="ingredient-my-2-responsive opacity-0 flex items-center flex-col">
                    <img class=" absolute inset-y-36 w-[60px] " src="/images/Ingradients-03.png" alt="" />
                    <h3 class="mt-5 text-xl font-bold">Cinnamon Bark</h3>
                </div>
                <div class="ingredient-my-3-responsive opacity-0 flex items-center flex-col">
                    <img class=" absolute inset-y-36 w-[60px] " src="/images/Ingradients-04.png" alt="" />
                    <h3 class="mt-5 text-xl font-bold">Amla</h3>
                </div>
                <div class="ingredient-my-4-responsive opacity-0 flex items-center flex-col">
                    <img class="absolute inset-y-36 w-[60px] " src="/images/Ingradients-07.png" alt="" />
                    <h3 class="mt-5 text-xl font-bold">Orange</h3>
                </div>
                <div class="ingredient-my-5-responsive opacity-0 flex items-center flex-col">
                    <img class="absolute inset-y-36 w-[60px] " src="/images/Ingradients-09.png" alt="" />
                    <h3 class="mt-5 text-xl font-bold">Sea Buckthom</h3>
                </div>
                <div class="ingredient-my-6-responsive opacity-0 flex items-center flex-col">
                    <img class="absolute inset-y-36 w-[60px] " src="/images/Ingradients-10.png" alt="" />
                    <h3 class="mt-5 text-xl font-bold">Gotu Kola Leaf</h3>
                </div>
                <!-- </div> -->

            </div>
            <div class="absolute -bottom-36">
                <img width="100%" class="" id="slider-image-responsive" src="/images/raiyan-slider.jpg" alt="">
            </div>
        </div>



        <div class="container mx-auto px-10 pb-10">
            <div class="border-blue-500 grid grid-cols-1 ">
                <div class="">
                    <div class="">
                        <div class="w-full h-40 bg-emerald-500 rounded-xl"></div>
                    </div>
                    <p class="text-neutral-950 text-sm text-center font-bold">Hair You Glo is for those who are looking for
                        solutions to
                        their hair
                        health and want to look confident when they look in the mirror every morning! <br /> Hair
                        you glo not only help you with your hair health but also help you regain your confidence in yourseld
                        which
                        has been shadowed by any reason related to hair
                        as your personality is showcased first when you meet someone or present yourself!!
                    </p>
                    <br />
                    <p class="text-neutral-950 text-sm text-center font-bold">Introducing our innovative hair health
                        betterment
                        product,
                        carefully crafted with a blend of nature's
                        finest ingredients such as Sea buckthorn extract, Gotu kola lead extract,
                        Carrot, Amla, Lemon, Orange, Tomato fruit, Pomegranate extract, Grape seed, Ginger Rhizome extract,
                        Fenugreek seeds extract, Cinnamon bark extract, Biotin: known
                    </p>
                </div>
            </div>
        </div>


    </div>
</template>