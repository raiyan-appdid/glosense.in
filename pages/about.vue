<script setup>
const nuxtApp = useNuxtApp();
onMounted(function () {
  nuxtApp.$fb.enable();
  const runtimeConfig = useRuntimeConfig();
  nuxtApp.$fb.track("Purchase", { currency: "USD", value: 30.0 });
});
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
  <a target="_blank"
    href="https://api.whatsapp.com/send?phone=919967116267&text=I want to know more about Hair You Glo!">
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
  <div class="conteiner" style="overflow-x: hidden"></div>
  <div class="about-page mt-28 sm:mt-30 pb-20 bg-[#efe8df] z-20">
    <div class="mx-auto">
      <div class="slider block sm:hidden">
        <img src="/images/aboutus/About-us-banner-Mobile.jpg" class="w-screen z-50" alt="" />
      </div>
      <div class="slider hidden sm:block">
        <img src="/images/aboutus/About-us-banner-Desktop.jpg" class="w-screen z-50" alt="" />
      </div>
      <div class="header">
        <h2 class="text-center text-3xl md:5xl px-5 font-bold text-secondary mt-6 mb-5">
          We deeply have faith in..
        </h2>
      </div>
      <div class="text-center mx-auto flex flex-col lg:flex-row justify-center gap-4">
        <div class="col-span-4 lg:col-span-2 flex justify-center items-center sm:py-4">
          <div class="flex justify-center items-center">
            <a href="/blogs/discovering-wellness-from-within">
              <img src="/images/aboutus/top-1.jpg" class="object-fill rounded-2xl w-80" alt="" />
            </a>
            <!-- <h2 class="text-primary">Discovering Wellness from Within</h2> -->
          </div>
        </div>
        <div class="col-span-4 lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
          <div class="flex justify-center items-center">
            <a href="/blogs/plant-based-super-blends">
              <img src="/images/aboutus/top-2.jpg" class="object-fill rounded-2xl w-80" alt="" />
            </a>
            <!-- <img src="/images/blog.png" class="" alt="" /> -->
            <!-- <h2 class="text-primary">Plant Based Super Blends</h2> -->
          </div>
        </div>
        <div class="col-span-4 lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
          <div class="flex justify-center items-center">
            <a href="/blogs/exactly-what-you-need">
              <img src="/images/aboutus/top-3.jpg" class="object-fill rounded-2xl w-80" alt="" />
            </a>
            <!-- <img src="/images/recipes.png" class="" alt="" /> -->
            <!-- <h2 class="text-primary">Exactly what you need</h2> -->
          </div>
        </div>
      </div>
      <h2 class="text-secondary text-3xl font-bold mt-10 text-center">
        Founder's Insights
      </h2>
      <!-- <p class="text-center">Unveiling the Mastermind Behind Glosense Lifecare Pvt Ltd's Innovative Journey in Revolutionizing</p> -->

      <div class="founder-details container mx-auto">
        <div class="grid grid-cols-12 gap-5 mt-10">
          <div class="col-span-12 lg:col-span-6 mx-auto">
            <img src="/images/aboutus/Founder-image.png" class="w-3/4 mx-auto" alt="" />
          </div>
          <div class="col-span-12 lg:col-span-6 mx-3">
            <h2 class="font-bold text-2xl text-secondary leading-normal px-5">
              Hello SuperBeings,
            </h2>
            <h6 class="text-lg font-semibold px-5 text-justify"></h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              I Mr. Sagar embarked on a transformative journey that ultimately
              led to the creation of Glosense Lifecare Pvt Ltd—an unwavering commitment to your
              holistic well-being.
            </h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              Formerly an engineer turned government employee, I comfortably
              coasted through life until the pandemic shook the world. The
              extended hours indoors led me to disregard my health and
              self-care. It served as a wake-up call that demanded my attention.
              I made a resolute decision to change.
            </h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              It almost took me six months to undergo a profound
              transformation—physically, mentally, and emotionally. This
              personal journey laid the foundation for Glosense Lifecare Pvt Ltd, a brand deeply
              rooted in the conviction that inner well-being is the base wall of
              overall health.
            </h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              Here at Glosense Lifecare Pvt Ltd, we help you empower your wellness journey. We
              provide unwavering support, guidance, and natural products
              meticulously crafted to prioritise your inner health. We firmly
              believe that the power to effect change resides within each of us.
            </h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              Introduce Glosense Lifecare Pvt Ltd in your life, where your journey to well-being
              begins. Together, let's take charge of our lives, health, and
              future.
            </h6>
            <br />
            <!-- <h6 class="text-lg mt-3 px-5 text-justify">In pursuit of wellness,<br />
                            Sagar Gaikwad<br />
                            Glosense Lifecare Pvt Ltd<br />
                        </h6> -->
          </div>
        </div>
        <div class="grid grid-cols-12 gap-5 mt-10">
          <div class="col-span-12 lg:col-span-6 mx-auto sm:order-2">
            <img src="/images/aboutus/Founder-photo2.png" class="w-3/4 mx-auto" alt="" />
          </div>
          <div class="col-span-12 lg:col-span-6 mx-3 sm:order-1">
            <h2 class="font-bold text-2xl text-black leading-normal px-5">
              Hello Beautiful souls🌻
            </h2>
            <h6 class="text-lg mt-5 px-5 text-justify">
              I am Dr. Snehal Adsule , the Co-founder of Glosense Lifecare Pvt Ltd on the journey
              to wellness. As an MD, nutritionist, counselor, and weight loss
              coach, I have tried to bring my expertise and heart to our new
              mission.
            </h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              From my early struggles with diets to overcoming an eating
              disorder and PCOD, I understand the complexities of the wellness
              journey. Today, I am on a mission to impact the lives of one
              million women, guiding them toward health and happiness. Through
              my signature program, 'Desi Diet,' our team already empowered over
              24,000 women worldwide to achieve lasting weight loss.
            </h6>
            <h6 class="text-lg mt-3 px-5 text-justify">
              As we embark on the path to wellness, Glosense Lifecare Pvt Ltd invites you to join
              us in this journey and experience a healthier, happier & new you.
              Together, we'll create balance between well-being and beauty, the
              Glosense Lifecare Pvt Ltd way!!
            </h6>
            <br />
            <!-- <h6 class="text-lg mt-3 px-5 text-justify">In pursuit of health & wellness,<br />
                            Dr.Snehal<br />
                            Co-founder<br />
                        </h6> -->
          </div>
        </div>
      </div>
      <h6 class="text-center text-secondary text-3xl font-bold mt-24 mb-5">
        Where can we take you next?
      </h6>
      <div class="text-center mx-auto flex flex-col lg:flex-row justify-center gap-4">
        <div class="lg:col-span-2 flex justify-center items-center sm:py-4">
          <a href="/product-detail">
            <img src="/images/aboutus/bottom-1.png" class="rounded-2xl w-80" alt="" /></a>
        </div>
        <div class="lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
          <a href="/blogs">
            <img src="/images/aboutus/bottom-2.png" class="rounded-2xl w-80" alt="" /></a>
        </div>
        <div class="lg:col-span-2 flex justify-center items-center mt-3 lg:mt-0 sm:py-4">
          <a target="_blank" href="https://www.youtube.com/watch?v=YFFP_bfTyBk">
            <img src="/images/aboutus/bottom-3.png" class="rounded-2xl w-80" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>