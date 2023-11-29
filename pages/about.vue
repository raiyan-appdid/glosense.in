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
                    fbq('init', '207758315679521');
                    fbq('track', 'PageView');
`;

const noscriptCode = `
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=207758315679521&ev=PageView&noscript=1"
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
    <a target="_blank" href="https://api.whatsapp.com/send?phone=8097750991">
        <span class="wa-whatsapp"><svg aria-hidden="true" focusable="false" data-prefix="fa-brands" data-icon="whatsapp"
                class="svg-inline--fa fa-whatsapp fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    fill="currentColor"></path>
            </svg></span>
    </a>
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