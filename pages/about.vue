<script setup>

onMounted(function () {
    const runtimeConfig = useRuntimeConfig()
    console.log(runtimeConfig.public.baseUrl);
})

</script>

<template>
    <HeaderCommon />
    <!-- <img class="absolute opacity-50 md:w-[18rem] w-[10rem] bottom-[-8rem] left-[5rem] z-30" src="/images/leave-bl.png"
        alt="" />
    <img class="absolute opacity-50 md:w-[10rem] w-[5rem] inset-[35%] left-[-2rem]" src="/images/Asset-15-4x.png" alt="" />
    <img class="absolute opacity-50 md:w-[12rem] w-[6rem] left-[30%] top-[10%]" src="/images/Asset-25-4x.png" alt="" />
    <img class="absolute opacity-50 md:w-[8rem] w-[4rem] right-[40%] top-[10%]" src="/images/Asset-24-4x.png" alt="" />
    <img class="absolute opacity-50 md:w-[18rem] w-[9rem] bottom-[-10rem] left-[10rem]" src="/images/Asset-13-4x.png"
        alt="" />
    <img class="absolute opacity-50 md:w-[6rem] w-[3rem] right-[20%] top-[20%]" src="/images/Asset-22-4x.png" alt="" />
    <img class="absolute opacity-50 md:w-[40rem] w-[5rem] right-[5rem] top-[-5rem]" src="/images/Asset-23-4x.png" alt="" />
    <img class="absolute opacity-50 md:w-[15rem] w-[7rem] right-[5rem] bottom-[0rem]" src="/images/Asset-16-4x.png"
        alt="" />
    <img class="absolute opacity-50 md:w-[8rem] w-[4rem] right-[25rem] bottom-[10rem]" src="/images/Asset-24-4x.png"
        alt="" />
    <img class="absolute opacity-50 md:w-auto right-0 top-[10rem]" src="/images/rl-small.png" alt="" /> -->
    <div class="about-page mt-28 sm:mt-30 pb-20 bg-[#efe8df] z-20">
        <div class="mx-auto">
            <div class="slider">
                <img src="/images/about-us-banner.webp" class="w-screen z-50" alt="" />
            </div>
            <div class="header">
                <h2 class="text-center text-2xl md:5xl font-bold text-secondary mt-6">Simple, Plant Based & Healthy Super
                    Blends!
                </h2>
            </div>
            <div class=" text-center mx-auto flex flex-col lg:flex-row justify-center gap-4">
                <div class=" col-span-4 lg:col-span-2 flex justify-center items-center sm:py-4">
                    <div class=" flex justify-center items-center bg-white">
                        <img src="/images/aboutus/discover-wellness.jpg" class="object-fill h-52 w-80" alt="" />
                        <!-- <h2 class="text-primary">Discovering Wellness from Within</h2> -->
                    </div>
                </div>
                <div class=" col-span-4 lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <div class=" flex justify-center items-center bg-white">
                        <img src="/images/aboutus/plant-based.jpg" class="object-fill h-52 w-80" alt="" />
                        <!-- <img src="/images/blog.png" class="" alt="" /> -->
                        <!-- <h2 class="text-primary">Plant Based Super Blends</h2> -->
                    </div>
                </div>
                <div class=" col-span-4 lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <div class=" flex justify-center items-center bg-white">
                        <img src="/images/aboutus/what-you-need.jpg" class="object-fill h-52 w-80" alt="" />

                        <!-- <img src="/images/recipes.png" class="" alt="" /> -->
                        <!-- <h2 class="text-primary">Exactly what you need</h2> -->
                    </div>
                </div>
            </div>
            <h2 class="text-secondary text-4xl font-bold mt-10 text-center">Founder's Insights</h2>
            <!-- <p class="text-center">Unveiling the Mastermind Behind Glosense's Innovative Journey in Revolutionizing</p> -->

            <div class="founder-details container mx-auto">
                <div class="grid grid-cols-12 gap-5 mt-10">
                    <div class="col-span-12 lg:col-span-6 mx-auto">
                        <img src="/images/founder-image.png" class="w-3/4 mx-auto" alt="">
                    </div>
                    <div class="col-span-12 lg:col-span-6 mx-3">
                        <h2 class="font-bold text-2xl text-black leading-normal">Greetings SuperBeings🌷
                        </h2>
                        <h6 class="text-xl leading-10">I embarked on a transformative journey that ultimately led to the
                            creation of Glosense—an unwavering commitment to your holistic well-being.
                        </h6>
                        <h6 class="text-xl leading-10">Formerly an engineer turned government employee, I comfortably
                            coasted through life until the pandemic shook the world. The extended hours indoors led me to
                            disregard my health and self-care. It served as a wake-up call that demanded my attention. I
                            made a resolute decision to change.
                        </h6>
                        <h6 class="text-xl leading-10">It almost took me six months to undergo a profound
                            transformation—physically, mentally, and emotionally. This personal journey laid the foundation
                            for Glosense, a brand deeply rooted in the conviction that inner well-being is the base wall of
                            overall health.
                        </h6>
                        <h6 class="text-xl leading-10">Here at Glosense, we help you empower your wellness journey. We
                            provide unwavering support, guidance, and natural products meticulously crafted to prioritise
                            your inner health. We firmly believe that the power to effect change resides within each of us.
                        </h6>
                        <h6 class="text-xl leading-10">Introduce Glosense in your life, where your journey to well-being
                            begins. Together, let's take charge of our lives, health, and future.
                        </h6>
                        <br />
                        <h6 class="text-xl">In pursuit of wellness,<br />
                            Sagar Gaikwad<br />
                            Glosense<br />

                        </h6>
                    </div>
                </div>
            </div>
            <h6 class="text-center text-secondary text-4xl font-bold my-9">Where can we take you next?</h6>
            <div class=" text-center mx-auto flex flex-col lg:flex-row justify-center gap-4">
                <div class="  lg:col-span-2 flex  justify-center items-center sm:py-4">
                    <p class="absolute text-4xl font-semibold">Shop All</p>
                    <img src="/images/aboutus/shop-all.jpg" class="object-fill h-52 w-80" alt="" />
                </div>
                <div class="  lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <a href="/blogs" class="absolute text-4xl font-semibold">Blogs</a>
                    <a href="/blogs"> <img src="/images/aboutus/blogs.jpg" class="object-fill h-52 w-80" alt="" /></a>
                </div>
                <div class="  lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <p class="absolute text-4xl font-semibold">Recipes</p>
                    <img src="/images/aboutus/recepies.jpg" class="object-fill h-52 w-80" alt="" />
                </div>
            </div>

        </div>
    </div>
</template>