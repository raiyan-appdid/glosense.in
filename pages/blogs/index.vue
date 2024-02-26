<script setup>
const nuxtApp = useNuxtApp();
onMounted(function () {
    console.log(nuxtApp.$fb)
    nuxtApp.$fb.enable()
});

</script>

<template>
    <HeaderCommon />
    <a target="_blank" href="https://api.whatsapp.com/send?phone=919967116267">
        <span class="wa-whatsapp" style="z-index: 0">
            <svg width="45" height="45" viewBox="0 0 256 258" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%">
                        <stop offset="0%" stop-color="#1FAF38" />
                        <stop offset="100%" stop-color="#60D669" />
                    </linearGradient>
                    <linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%">
                        <stop offset="0%" stop-color="#F9F9F9" />
                        <stop offset="100%" stop-color="#FFF" />
                    </linearGradient>
                </defs>
                <path fill="url(#logosWhatsappIcon0)"
                    d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004" />
                <path fill="url(#logosWhatsappIcon1)"
                    d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z" />
                <path fill="#FFF"
                    d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64" />
            </svg>
        </span>
    </a>
    <div class="conteiner">
    </div>

    <div class="Blog mt-20 sm:mt-24 pb-20 bg-[#efe8df]">
        <h2 class="py-10 text-secondary text-4xl font-bold text-center">Blogs</h2>


        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 px-3 sm:px-10">
            <div class="sm:p-10">
                <div>
                    <a href="/blogs/what-is-plant-based-supplements">
                        <img src="/images/plant-based.jpg" class="w-full" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/what-is-plant-based-supplements">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">WHAT IS PLANT BASED
                            SUPPLEMENTS?
                        </h2>
                        <p class="text-xl leading-7">In recent years, the term "plant-based" has taken the health and
                            wellness
                            world by storm. From plant-based diets to supplements, this trend has gained immense popularity
                            for
                            all the right reasons......
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a href="/blogs/what-is-plant-based-supplements">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/unlocking-the-power-of-vitamin-c">
                        <img src="/images/vitamin-c.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/unlocking-the-power-of-vitamin-c">

                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Unlocking the Power of Vitamin
                            C: A
                            Key to Healthy Hair
                        </h2>
                        <p class="text-xl leading-7">In the pursuit of healthy, vibrant hair, we often turn to various
                            products
                            and treatments. However, the key to achieving luscious locks might be simpler than you think. At
                            Glosense Lifecare Pvt Ltd, we understand the importance of nourishing your hair from within,
                            and
                            that's why we're diving deep into the wonders of Vitamin C in this blog....</p>
                        <p class="underline text-primary text-xl mt-8"><a
                                href="/blogs/unlocking-the-power-of-vitamin-c">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/can-superfoods-help-with-my-hair-fall">
                        <img src="/images/hair-thinning.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/can-superfoods-help-with-my-hair-fall">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">UNREVEALING THE MYSTERY OF HAIR
                            FALL & HAIR THINNING!!
                        </h2>
                        <p class="text-xl leading-7">In the hustle and bustle of daily life, it's not uncommon to notice
                            changes
                            in our hair health. The mirror reflects hair that's not as voluminous as it used to be, or we
                            find a
                            little more hair than usual on our brushes and in the shower drain. Hair thinning and fall can
                            be
                            distressing, but they are often symptoms of underlying issues that may have gone unattended for
                            too
                            long...</p>
                        <p class="underline text-primary text-xl mt-8"><a
                                href="/blogs/can-superfoods-help-with-my-hair-fall">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/discovering-wellness-from-within">
                        <img src="/images/aboutus/top-1.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/discovering-wellness-from-within">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Discovering Wellness from
                            Within
                        </h2>
                        <p class="text-xl leading-7">Hey there, lovely souls! 😊
                            Welcome to our wellness journey. At Glosense Lifecare Pvt Ltd, we're all about celebrating
                            wellness in its full,
                            beautiful spectrum. It's not just about looking good; it's about feeling fantastic inside and
                            out. So, join us on this adventure as we uncover the secret to discovering wellness from within
                            and embracing a life that truly shines....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a
                                href="/blogs/discovering-wellness-from-within">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/plant-based-super-blends">
                        <img src="/images/aboutus/top-2.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/plant-based-super-blends">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Plant based, Super blends
                        </h2>
                        <p class="text-xl leading-7">Hey there, lovely souls! 😊
                            Welcome to our wellness journey. At Glosense Lifecare Pvt Ltd, we're all about celebrating
                            wellness in its full,
                            beautiful spectrum. It's not just about looking good; it's about feeling fantastic inside and
                            out. So, join us on this adventure as we uncover the secret to discovering wellness from within
                            and embracing a life that truly shines....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a href="/blogs/plant-based-super-blends">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/exactly-what-you-need">
                        <img src="/images/aboutus/top-3.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/exactly-what-you-need">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Exactly what you need
                        </h2>
                        <p class="text-xl leading-7">In the hustle and bustle of modern life, it's easy to get swept away by
                            the latest trends and technology. We're bombarded with messages about products and services that
                            promise to change our lives, but do we really need them all? Let's embark on a journey to
                            explore what we truly need in our lives....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a href="/blogs/exactly-what-you-need">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/things-no-one-tells-about-hormonal-hair-loss">
                        <img src="/images/aboutus/top-3.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/things-no-one-tells-about-hormonal-hair-loss">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Things no one tells about
                            hormonal hair loss:-
                        </h2>
                        <p class="text-xl leading-7">Alright, let's get real about something most of us don't like to talk
                            about:
                            hormonal hair loss. It's like this big secret in the world of haircare, and it's time we shed
                            some light on
                            it. In this blog, we're going to uncover the mysteries around hormonal hair loss and give you
                            the inside
                            scoop on what's really going on with your locks....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a
                                href="/blogs/things-no-one-tells-about-hormonal-hair-loss">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/can-superfoods-help-with-my-hair-fall">
                        <img src="/images/aboutus/top-3.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/can-superfoods-help-with-my-hair-fall">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Can superfoods help with my
                            hair fall?
                        </h2>
                        <p class="text-xl leading-7">In a world of quick fixes, we often overlook the power of what we eat.
                            You've
                            heard the buzzword "superfoods," but what makes them so super? These nutrient-packed ingredients
                            are
                            nature's treasures, brimming with goodness that transcends mere sustenance. While many revel in
                            their
                            potential to enhance our overall health....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a
                                href="/blogs/can-superfoods-help-with-my-hair-fall">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/this-is-how-your-state-of-mind-is-affecting-your-hair">
                        <img src="/images/aboutus/top-3.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/this-is-how-your-state-of-mind-is-affecting-your-hair">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">This is how your state of mind
                            is affecting your hair!!
                        </h2>
                        <p class="text-xl leading-7">In today's fast-paced world, the daily grind can often leave us feeling
                            overwhelmed and stressed. Those lingering concerns, even the seemingly minor ones, can
                            significantly impact our overall well-being, including the health of our hair....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a
                                href="/blogs/this-is-how-your-state-of-mind-is-affecting-your-hair">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <a href="/blogs/daily-facing-huge-hair-fall">
                        <img src="/images/aboutus/top-3.jpg" class="w-full sm:w-5/6" alt="">
                    </a>
                </div>
                <div>
                    <a href="/blogs/daily-facing-huge-hair-fall">
                        <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">Daily facing huge hair fall: Is
                            that normal?
                        </h2>
                        <p class="text-xl leading-7">To all the lovely readers who've clicked onto this page,If you've ever
                            had a moment of concern in the morning when you spot those extra hairs on your pillow or tangled
                            in your comb, this blog is for you. We're....
                        </p>
                        <p class="underline text-primary text-xl mt-8"><a href="/blogs/daily-facing-huge-hair-fall">Read
                                More</a>
                        </p>
                    </a>
                </div>
            </div>
            <!-- <div class="sm:p-10 mt-8 sm:mt-0">
                <div>
                    <img src="/images/blog-1.png" alt="">
                </div>
                <div>
                    <h2 class="text-2xl sm:text-3xl text-primary font-bold my-3 sm:my-8">WHY SLEEP BETTER TO TACKLE PCOS
                    </h2>
                    <p class="text-xl leading-7">Did you know that your PCOS symptoms may depend a lot on whether you are
                        having a
                        good night’s sleep?
                        A messed up sleep cycle can mess up your ‘Circadian rhythm’. This...</p>
                    <p class="underline text-primary text-xl mt-8"><a href="/blogs/what-is-plant-based-supplements">Read
                            More</a>
                    </p>
                </div>
            </div> -->
        </div>


    </div>
</template>
