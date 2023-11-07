<script setup>

const facebookPixelCode = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1432488057327276');
    fbq('track', 'PageView');
`;

const noscriptCode = `
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1432488057327276&ev=PageView&noscript=1"
    />
`;

const headData = {
    script: [
        {
            innerHTML: facebookPixelCode
        }
    ],
    noscript: [
        {
            innerHTML: noscriptCode
        }
    ]
};


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
            <div class="slider block sm:hidden">
                <img src="/images/aboutus/About-us-banner-Mobile.jpg" class="w-screen z-50" alt="" />
            </div>
            <div class="slider hidden sm:block">
                <img src="/images/aboutus/About-us-banner-Desktop.jpg" class="w-screen z-50" alt="" />
            </div>
            <div class="header">
                <h2 class="text-center text-3xl md:5xl px-5 font-bold text-secondary mt-6 mb-5">We deeply have faith
                    in..
                </h2>
            </div>
            <div class=" text-center mx-auto flex flex-col lg:flex-row justify-center gap-4">
                <div class=" col-span-4 lg:col-span-2 flex justify-center items-center sm:py-4">
                    <div class=" flex justify-center items-center">
                        <a href="/blogs/discovering-wellness-from-within">
                            <img src="/images/aboutus/top-1.jpg" class="object-fill rounded-2xl w-80" alt="" />
                        </a>
                        <!-- <h2 class="text-primary">Discovering Wellness from Within</h2> -->
                    </div>
                </div>
                <div class=" col-span-4 lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <div class=" flex justify-center items-center">
                        <a href="/blogs/plant-based-super-blends">
                            <img src="/images/aboutus/top-2.jpg" class="object-fill rounded-2xl  w-80" alt="" />
                        </a>
                        <!-- <img src="/images/blog.png" class="" alt="" /> -->
                        <!-- <h2 class="text-primary">Plant Based Super Blends</h2> -->
                    </div>
                </div>
                <div class=" col-span-4 lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <div class=" flex justify-center items-center">
                        <a href="/blogs/exactly-what-you-need">
                            <img src="/images/aboutus/top-3.jpg" class="object-fill rounded-2xl w-80" alt="" />
                        </a>
                        <!-- <img src="/images/recipes.png" class="" alt="" /> -->
                        <!-- <h2 class="text-primary">Exactly what you need</h2> -->
                    </div>
                </div>
            </div>
            <h2 class="text-secondary text-3xl font-bold mt-10 text-center">Founder's Insights</h2>
            <!-- <p class="text-center">Unveiling the Mastermind Behind Glosense's Innovative Journey in Revolutionizing</p> -->

            <div class="founder-details container mx-auto">
                <div class="grid grid-cols-12 gap-5 mt-10">
                    <div class="col-span-12 lg:col-span-6 mx-auto">
                        <img src="/images/aboutus/founder-image_600.png" class="w-3/4 mx-auto" alt="">
                    </div>
                    <div class="col-span-12 lg:col-span-6 mx-3">
                        <h2 class="font-bold text-2xl text-secondary leading-normal px-5">Hello SuperBeings,</h2>
                        <h6 class="text-lg font-semibold px-5 text-justify">

                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify">I Mr. Sagar embarked on a transformative journey that
                            ultimately
                            led to
                            the
                            creation of Glosense—an unwavering commitment to your holistic well-being.
                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify ">Formerly an engineer turned government employee, I
                            comfortably
                            coasted through life until the pandemic shook the world. The extended hours indoors led me to
                            disregard my health and self-care. It served as a wake-up call that demanded my attention. I
                            made a resolute decision to change.
                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify ">It almost took me six months to undergo a profound
                            transformation—physically, mentally, and emotionally. This personal journey laid the foundation
                            for Glosense, a brand deeply rooted in the conviction that inner well-being is the base wall of
                            overall health.
                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify ">Here at Glosense, we help you empower your wellness
                            journey.
                            We
                            provide unwavering support, guidance, and natural products meticulously crafted to prioritise
                            your inner health. We firmly believe that the power to effect change resides within each of us.
                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify ">Introduce Glosense in your life, where your journey to
                            well-being
                            begins. Together, let's take charge of our lives, health, and future.
                        </h6>
                        <br />
                        <!-- <h6 class="text-lg mt-3 px-5 text-justify">In pursuit of wellness,<br />
                            Sagar Gaikwad<br />
                            Glosense<br />
                        </h6> -->
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-5 mt-10">
                    <div class="col-span-12 lg:col-span-6 mx-auto sm:order-2">
                        <img src="/images/aboutus/Founder-photo2.png" class="w-3/4 mx-auto" alt="">
                    </div>
                    <div class="col-span-12 lg:col-span-6 mx-3 sm:order-1">
                        <h2 class="font-bold text-2xl text-black leading-normal px-5">Hello Beautiful souls🌻
                        </h2>
                        <h6 class="text-lg mt-5 px-5 text-justify">I am Dr. Snehal Adsule
                            , the Co-founder of Glosense on the
                            journey to wellness. As an MD, nutritionist, counselor, and weight loss coach, I have tried to
                            bring my expertise and heart to our new mission.
                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify ">From my early struggles with diets to overcoming an
                            eating disorder and PCOD, I understand the complexities of the wellness journey.
                            Today, I am on a mission to impact the lives of one million women, guiding them toward health
                            and happiness. Through my signature program, 'Desi Diet,' our team already empowered over 24,000
                            women worldwide to achieve lasting weight loss.
                        </h6>
                        <h6 class="text-lg mt-3 px-5 text-justify ">As we embark on the path to wellness, Glosense invites
                            you to join us in this journey and experience a healthier, happier & new you. Together, we'll
                            create balance between well-being and beauty, the Glosense way!!
                        </h6>
                        <br />
                        <!-- <h6 class="text-lg mt-3 px-5 text-justify">In pursuit of health & wellness,<br />
                            Dr.Snehal<br />
                            Co-founder<br />
                        </h6> -->
                    </div>
                </div>
            </div>
            <h6 class="text-center text-secondary text-3xl font-bold mt-24 mb-5">Where can we take you next?</h6>
            <div class=" text-center mx-auto flex flex-col lg:flex-row justify-center gap-4">
                <div class="  lg:col-span-2 flex  justify-center items-center sm:py-4">
                    <a href="/product-detail"> <img src="/images/aboutus/bottom-1.png" class=" rounded-2xl  w-80"
                            alt="" /></a>
                </div>
                <div class="  lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <a href="/blogs"> <img src="/images/aboutus/bottom-2.png" class=" rounded-2xl  w-80" alt="" /></a>
                </div>
                <div class="  lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
                    <a target="_blank" href="https://www.youtube.com/watch?v=YFFP_bfTyBk"> <img
                            src="/images/aboutus/bottom-3.png" class=" rounded-2xl  w-80" alt="" /></a>
                </div>
            </div>

        </div>
    </div>
</template>