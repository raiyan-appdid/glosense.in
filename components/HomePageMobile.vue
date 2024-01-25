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
            end: "13000",
            scrub: 1,
            pin: true,
            // markers: true,
        },
    });

    tlHeroResponsive.to("#logo-image-responsive", {
        duration: 4,
        top: "2.5rem",
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

    tlHeroResponsive.to('.jar-without-lid-responsive', {
        y: 130,
    }, "<")
    tlHeroResponsive.to('.lid-of-jar-responsive', {
        y: 130,
    }, "<")

    tlHeroResponsive.to('#jar-image-responsive', {
        y: 130,
        opacity: 1,
        duration: 3,
    })
    tlHeroResponsive.to('.what-text-responsive', {
        opacity: 1,
        duration: 3,
    })





    tlHeroResponsive.to('.jar-without-lid-responsive', {
        opacity: 1,
    }, "<-0.5")
    tlHeroResponsive.to('.lid-of-jar-responsive', {
        opacity: 1,
    }, "<-0.5")
    tlHeroResponsive.to('#jar-image-responsive', {
        opacity: 0,
    }, "-=1")


    tlHeroResponsive.to('.lid-of-jar-responsive', {
        duration: 3,
        y: -100,
        opacity: 0
    }, "<")




    tlHeroResponsive.to('.ingredient-my-1-responsive', {
        y: -220,
        x: -120,
        opacity: 1,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.to('.ingredient-my-2-responsive', {
        y: -230,
        x: 0,
        opacity: 1,
        duration: 3,
    }, "<")
    tlHeroResponsive.to('.ingredient-my-3-responsive', {
        y: -220,
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

    tlHeroResponsive.to('.lid-of-jar-responsive', {
        duration: 3,
        y: 130,
        opacity: 1,
    }, "+=1")

    tlHeroResponsive.to('#jar-image-responsive', {
        opacity: 1,
    }, "-=0.75")

    tlHeroResponsive.to('.jar-without-lid-responsive', {
        opacity: 0,
    }, "+=1")

    tlHeroResponsive.to('.lid-of-jar-responsive', {
        opacity: 0,
    }, "<")

    tlHeroResponsive.to('#jar-image-responsive', {
        y: 0,
        opacity: 1,
        duration: 3,
    }, "+=1")
    tlHeroResponsive.from('#slider-image-responsive', {
        y: 800,
        opacity: 1,
        duration: 5,
    }, "+=1")
    tlHeroResponsive.to('#slider-image-responsive', {
        y: -1500,
        opacity: 1,
        duration: 10,
    }, "+=7")

    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 3,
        rotation: 720,
    }, "+=1")

    tlHeroResponsive.from('.vitamin-custom-responsive', {
        x: -500,
        duration: 3,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('.calcium-custom-responsive', {
        x: 500,
        duration: 3,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 3,
        rotation: 1080,
    }, "+=5")
    tlHeroResponsive.to('.vitamin-custom-responsive', {
        x: 500,
        duration: 2,
        opacity: 1,
    }, "<")
    tlHeroResponsive.to('.calcium-custom-responsive', {
        x: -500,
        duration: 2,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('.vitamin-custom-2-responsive', {
        x: -500,
        duration: 2,
        opacity: 1,
    }, "<")
    tlHeroResponsive.from('.calcium-custom-2-responsive', {
        x: 500,
        duration: 2,
        opacity: 1,
    }, "<")


    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 6,
        rotation: 1440,
    }, "+=5")

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

    tlHeroResponsive.from('.vitamin-custom-3-responsive', {
        x: -500,
        duration: 6,
        opacity: 0,
    }, "<")
    tlHeroResponsive.from('.calcium-custom-3-responsive', {
        x: 500,
        duration: 6,
        opacity: 0,
    }, "<")

    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 4,
        rotation: 1800,
    }, "+=5")

    tlHeroResponsive.to('.vitamin-custom-3-responsive', {
        x: 1000,
        duration: 2,
        opacity: 0,
    }, "<")
    tlHeroResponsive.to('.calcium-custom-3-responsive', {
        x: -1000,
        duration: 2,
        opacity: 0,
    }, "<")

    // tlHeroResponsive.from('.a', {
    //     duration: 6,
    //     rotation: 2520,
    // }, "<")

    tlHeroResponsive.from('.vitamin-custom-4-responsive', {
        x: -1000,
        duration: 3,
        opacity: 0,
    }, "<")
    tlHeroResponsive.from('.calcium-custom-4-responsive', {
        x: 1000,
        duration: 3,
        opacity: 0,
    }, "<")

    tlHeroResponsive.from('#jar-image-responsive', {
        duration: 6,
        rotation: 2160,
    }, "+=5")

    tlHeroResponsive.to('.vitamin-custom-4-responsive', {
        x: 1000,
        duration: 6,
        opacity: 0,
    }, "<")
    tlHeroResponsive.to('.calcium-custom-4-responsive', {
        x: -1000,
        duration: 6,
        opacity: 0,
    }, "<")



    tlHeroResponsive.to('#jar-image-responsive', {
        y: 130,
        opacity: 1,
        duration: 3,
    })




    tlHeroResponsive.to('.prevent-damage-1', {
        y: -60,
        opacity: 1,
        duration: 6,
    })
    tlHeroResponsive.to('.prevent-damage-2', {
        y: -30,
        opacity: 1,
        duration: 6,
    })
    tlHeroResponsive.to('.prevent-damage-3', {
        y: 0,
        opacity: 1,
        duration: 6,
    })
    tlHeroResponsive.to('.prevent-damage-4', {
        y: 30,
        opacity: 1,
        duration: 6,
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







    // tlHeroResponsive.to('#showcase-section-1-responsive', {
    //     y: -50,
    //     opacity: 1,
    //     // duration: 2,
    // }, "<")

    const tlShowcase1_responsive = gsap.timeline({
        defaults: {
            duration: 1,
            ease: "linear",
        },
        scrollTrigger: {
            trigger: "#showcase-section-1-responsive",
            start: "top 60",
            end: "10000",
            // end: "1000",
            scrub: 1,
            pin: true,
            // markers: true,
        },
    });





    tlShowcase1_responsive.from('.believe-text-responsive', {
        opacity: 0,
        duration: 2,
    })
    tlShowcase1_responsive.to('.believe-text-responsive', {
        opacity: 1,
        duration: 2,
    })


    tlShowcase1_responsive.to(
        "#showcase-slider",
        {
            duration: 5,
            "--fill-till": "+=33",
        },
        "+=1"
    );
    tlShowcase1_responsive.to(
        "#showcase-section-1-responsive #showcase-images-responsive div:nth-child(3)",
        {
            duration: 5,
            clipPath: "inset(0 0 0 100%)",
        },
        "+=1"
    );
    tlShowcase1_responsive.to(
        "#showcase-section-1-responsive #showcase-images-responsive div:nth-child(3) .tear",
        {
            duration: 5,

            className: "tear left-0",
            transform: "translate(100%, 0)",
            onComplete: () => { },
        },
        "<"
    );

    tlShowcase1_responsive.to(
        "#showcase-slider",
        {
            duration: 5,
            "--fill-till": "+=34",
        },
    );
    tlShowcase1_responsive.to(
        "#showcase-section-1-responsive #showcase-images-responsive div:nth-child(2)",
        {
            duration: 5,
            clipPath: "inset(0 0 0 100%)",
        },
        "<"
    );

    tlShowcase1_responsive.to(
        "#showcase-section-1-responsive #showcase-images-responsive div:nth-child(2) .tear",
        {
            duration: 5,
            className: "tear left-0",
            transform: "translate(100%, 0)",
        },
        "<"
    );

    tlShowcase1_responsive.to(
        "#showcase-slider",
        {
            "--fill-till": "+=34",
        },
    );
    tlShowcase1_responsive.to('.believe-text-responsive', {
        opacity: 0,
        duration: 2,
    })

})

</script>

<template>
    <div class="about-page bg-[#efe8df]">

        <div>
            <img id="logo-image-responsive" src="/images/logo.png"
                class="w-3/4 z-20 inset-x-0 my-0 mx-auto top-[10rem] fixed" alt="" />
        </div>
        <div class="container h-screen mx-auto fixed flex flex-col items-center justify-center pt-20 pb-20">
            <img class="w-[5rem] absolute left-0 top-0" src="/images/glob-tl.png" alt="" />
            <img class="w-[6rem] absolute left-0 bottom-0" src="/images/glob-bl.png" alt="" />
            <img class="w-[6rem] absolute opacity-50 right-0 bottom-0" src="/images/glob-br.png" alt="" />
        </div>
        <div class="container h-screen mx-auto fixed flex flex-col items-center justify-center pt-20 pb-20"
            id="top-section">
            <img class="absolute w-40 opacity-[0.3] bottom-[-8rem] left-0" src="/images/leave-bl.png" alt="" />
            <img class="absolute w-20 opacity-[0.5] inset-[35%] left-[-2rem]" src="/images/Asset-15-4x.png" alt="" />
            <img class="absolute w-20 opacity-[0.5] left-0 top-[10%]" src="/images/Asset-25-4x.png" alt="" />
            <img class="absolute w-20 opacity-[0.5] right-0 top-[10%]" src="/images/Asset-24-4x.png" alt="" />
            <img class="absolute w-20 opacity-[0.5] right-[1%] top-[50%]" src="/images/Asset-22-4x.png" alt="" />

            <h2 class="px-10 text-xl home-text-responsive text-center mt-3">Unlock the essense of self-care through the
                magic
                of
                superfoods.
            </h2>
            <h4 class="mt-5 home-text-responsive text-1xl bg-[#ef8f7b] text-neutral-50 py-1 px-4 z-20 rounded-3xl"><a
                    href="/about">Know
                    more</a>
            </h4>
            <h4 class="home-text-responsive mt-8 bg-white text-primary cursor-pointer outline px-2 py-6 z-20 rounded-full">
                <a href="/product-detail" class="text-2xl">Shop Now</a>
            </h4>
            <!-- <div class="absolute flex flex-col justify-center w-screen h-screen">
                <img class="w-[4rem]" src="/images/Asset-27-4x.png" alt="" />
                <p class="absolute text-secondary font-bold text-xs mx-auto">
                    <a href="">Shop Now</a>
                </p>
            </div> -->
            <h2 class="px-10 absolute bottom-10 flex justify-center flex-col home-text-responsive mt-3">
                <img src="/images/gif/glosense-animation.gif" class="w-1/2 text-center mx-auto" alt="">
                <p class="text-sm inline-block text-center">Scroll Down</p>
            </h2>
            <div class="jar absolute flex flex-col justify-center items-center">
                <h1
                    class="text-2xl font-bold flex justify-center items-center w-screen text-center text-primary opacity-0 prevent-damage-1 absolute -top-[45px]  bg-transparent ">
                    Improves Blood Circulation
                </h1>
                <h1
                    class="text-2xl font-bold flex justify-center w-screen text-center opacity-0 text-secondary prevent-damage-2 absolute -top-[30px]  bg-transparent ">
                    Effectively Suppress DHT
                </h1>
                <h1
                    class="text-2xl font-bold flex justify-center w-screen text-center opacity-0 text-primary prevent-damage-3 absolute -top-[15px]  bg-transparent ">
                    Supports Collagen Synthesis
                </h1>
                <h1
                    class="text-2xl font-bold flex justify-center w-screen text-center opacity-0 prevent-damage-4 text-secondary absolute top-[5px]  bg-transparent ">
                    Maintains pH Level
                </h1>

                <h4
                    class="text-3xl w-screen -top-[150px] text-center absolute opacity-0 what-text-responsive font-extrabold text-secondary mb-3">
                    What's in it ?</h4>
                <h4
                    class=" w-screen px-10 -top-[100px] text-center text-2xl absolute elegance-text-responsive font-extrabold text-secondary mb-3">
                    LET' S BEGIN
                    WITH
                    ELEGANCE: OUR
                    HAIR
                    CARE SUPERBLEND</h4>
                <h1
                    class="text-5xl text-primary absolute font-extrabold flex justify-center -top-[100px] vitamin-custom-responsive  bg-transparent inset-x-0">
                    Improves
                </h1>
                <h1
                    class="text-5xl font-extrabold flex justify-center absolute -top-[100px] vitamin-custom-2-responsive text-primary bg-transparent inset-x-0">
                    Balance
                </h1>
                <h1
                    class="text-5xl font-extrabold flex justify-center absolute -top-[100px] vitamin-custom-3-responsive text-primary bg-transparent inset-x-0">
                    Enhance
                </h1>
                <h1
                    class="text-5xl font-extrabold flex justify-center absolute -top-[100px] vitamin-custom-4-responsive text-primary bg-transparent inset-x-0">
                    Reduce
                </h1>



                <div
                    class="absolute jar-without-lid-responsive  opacity-0 flex items-center justify-center w-screen h-screen">
                    <img class=" h-[160px] w-[150px]" src="/images/jar-without-lid.png" alt="">
                </div>

                <div
                    class="absolute lid-of-jar-responsive mb-[115px] flex  opacity-0 items-center justify-center w-screen h-screen">
                    <img class="w-[150px]" src="/images/lid.png" alt="">
                </div>


                <img id="jar-image-responsive" class="h-[160px] w-[150px]" src="/images/jar2.png" alt="">


                <h1 class="text-5xl font-extrabold flex justify-center w-screen absolute -bottom-[100px] calcium-custom-2-responsive text-emerald-800  bg-transparent "
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    Hair Growth
                </h1>
                <h1 class="text-5xl font-extrabold flex justify-center absolute w-screen -bottom-[100px] calcium-custom-3-responsive text-emerald-800  bg-transparent "
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    Follicle Health
                </h1>
                <h1 class="text-5xl font-extrabold flex justify-center absolute w-screen -bottom-[100px] calcium-custom-4-responsive text-emerald-800  bg-transparent "
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    Hair Loss
                </h1>
                <h1 class="text-5xl font-extrabold flex justify-center w-screen absolute -bottom-[100px] calcium-custom-responsive text-emerald-800  bg-transparent "
                    style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),-1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
                    Scalp Health
                </h1>
                <h2
                    class="text-center px-10 absolute -bottom-[100px] elegance-text-responsive w-screen font-bold text-xl mt-3">
                    Simple,
                    Plant Based & Healthy SuperBlend.
                </h2>


                <h4
                    class="text-sm  -bottom-[200px] text-center absolute opacity-0 what-text-responsive flex justify-center font-extrabold text-secondary w-screen">
                    <p
                        class=" text-xs bg-[#ef8f7b] text-neutral-50 bottom-0 mx-auto text-center py-1 px-4 absolute rounded-3xl">
                        <a href="/product-detail">Know more</a>
                    </p>
                </h4>


                <!-- <div class="ingredients-responsive absolute"> -->
                <div class="absolute inset-y-36 -z-10 ingredient-my-1-responsive flex opacity-0 items-center flex-col">
                    <img class="  w-[60px] " src="/images/Ingradients-02.png" alt="" />
                    <h3 class="text-sm font-bold">Pomegranate</h3>
                </div>
                <div class="absolute inset-y-36 -z-10 ingredient-my-2-responsive opacity-0 flex items-center flex-col">
                    <img class="  w-[60px] " src="/images/Ingradients-03.png" alt="" />
                    <h3 class="text-sm font-bold">Cinnamon Bark</h3>
                </div>
                <div class="absolute inset-y-36 -z-10 ingredient-my-3-responsive opacity-0 flex items-center flex-col">
                    <img class="  w-[60px] " src="/images/Ingradients-04.png" alt="" />
                    <h3 class="text-sm font-bold">Amla</h3>
                </div>
                <div class="absolute inset-y-36 -z-10 ingredient-my-4-responsive opacity-0 flex items-center flex-col">
                    <img class=" w-[60px] " src="/images/Ingradients-07.png" alt="" />
                    <h3 class="text-sm font-bold">Orange</h3>
                </div>
                <div class="absolute inset-y-36 -z-10 ingredient-my-5-responsive opacity-0 flex items-center flex-col">
                    <img class=" w-[60px] " src="/images/Ingradients-09.png" alt="" />
                    <h3 class="text-sm font-bold">Sea Buckthom</h3>
                </div>
                <div class="absolute inset-y-36 -z-10 ingredient-my-6-responsive opacity-0 flex items-center flex-col">
                    <img class=" w-[60px] " src="/images/Ingradients-10.png" alt="" />
                    <h3 class="text-sm font-bold">Gotu Kola Leaf</h3>
                </div>
                <!-- </div> -->

            </div>
            <div class="absolute w-screen flex items-center justify-center" id="slider-image-responsive">
                <img width="w-screen" class=" text-center" src="/images/Mobile-home-screen-banner.jpg" alt="">
                <p
                    class=" text-xs bg-[#ef8f7b] text-neutral-50 bottom-12 mx-auto text-center py-1 px-4 absolute rounded-3xl">
                    <a href="/product-detail">Know more</a>
                </p>
            </div>
        </div>


        <!-- <div id="showcase-section-1-responsive" style="--text-offset: 100rem"
            class="min-h-screen pt-16 relative border-blue-500">
            <h4
                class="text-2xl w-screen text-center px-10 believe-text-responsive font-extrabold text-secondary elegance-text-1-responsive">
                We
                believe in
                fixing the
                root
                cause, not quick results!</h4>
            <div id="showcase-images-responsive" class="relative h-[400px] mb-5">
                <div class="absolute origin-center inset-0 m-auto h-[300px] w-[300px] overflow-hidden">
                    <img class="object-cover h-[300px] w-[300px]" src="/images/Asset-3@4x.png" alt="" />
                </div>
                <div class="absolute origin-center inset-0 m-auto h-[300px] w-[300px] overflow-hidden">
                    <div class="tear"></div>
                    <img class="object-cover h-[270px] mt-3 ml-3  w-[270px]" src="/images/Asset-2@4x.png" alt="" />
                </div>
                <div class="absolute origin-center inset-0 m-auto h-[300px] w-[300px] overflow-hidden ">
                    <div class="tear"></div>
                    <img class="object-cover h-[300px] w-[300px]" src="/images/Asset-1@4x.png" alt="" />
                </div>
            </div>
        </div> -->

        <div class="container mx-auto mb-10">
            <img class="px-10 " src="/images/mobile timeline@2x.png" alt="" />
        </div>



        <div class="container mx-auto px-10 pb-10">
            <div class="border-blue-500 grid grid-cols-1 relative">
                <div class="">
                    <div class="">
                        <!-- <div class="w-full h-40 bg-emerald-500 rounded-xl"></div> -->
                        <img class="rounded-xl" src="/images/last-image.jpg" alt="">

                    </div>
                    <p class="text-secondary text-justify text-xl font-bold">Hair-You-Glo revitalises your hair health and
                        restores lost confidence related to hair concerns. Your hair is a vital part of your presentation
                        and personality, and Hair-You-Glo ensures you radiate self-assurance in every interaction.
                        Introducing our expertly crafted hair health betterment product, carefully with a blend of nature's
                        finest ingredients such as Sea buckthorn extract, Carrot, Amla, Lemon, Orange, Tomato fruit,
                        Pomegranate extract, Grape seed, Fenugreek seeds extract and more.
                    </p>
                    <br />
                    <p class="text-secondary text-xl text-justify font-bold">Hair-You-Glo is a product formulated in such a
                        way that helps you improve your hair health by containing much required nutrients & vitamins in it.
                        Experience the power of nature in every element of Hair-You-Glo. Elevate your hair health with a
                        blend of carefully selected natural ingredients. Make Hair-You-Glo your daily partner in nurturing
                        your hair's vitality. Unlock the secret to radiant, confident hair.
                    </p>
                </div>
            </div>
        </div>


    </div>
</template>