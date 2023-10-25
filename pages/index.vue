<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin.js";
import Loading from 'notiflix/build/notiflix-loading-aio';
import Notiflix from 'notiflix';
const nuxtApp = useNuxtApp();


nuxtApp.hook('page:finish', () => {
  Notiflix.Loading.remove();
})



onMounted(() => {
  // Loading.remove();

  const blurSidebar = () => {

    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("show-blur");
  };

  const idleAnimationLeafs = gsap.to("#leaves-group img", {
    y: -20,
    yoyo: true,
    repeat: -1,
    duration: 1,
    ease: "power1.inOut",
  });

  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  let section = 0;

  const tlHero = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "Elistic.easeOut",
    },
    scrollTrigger: {
      trigger: "#hero-section",
      start: "top top",
      end: "600",
      scrub: 0,
      pin: true,
      // markers: true,
    },
  });

  tlHero.to("#logo-image", {
    duration: 6,
    top: "2.7rem",
    width: "10rem",
  }, "+=1");
  tlHero.to(".home-text", {
    duration: 6,
    y: -300,
    opacity: 0
  }, "-=6");



  /*
   *
   * Ingredien  Timeline
   *
   */

  let tlIng = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "linear",
    },
    scrollTrigger: {
      trigger: "#ingredient-section",
      start: "-=100 top",
      end: "2500",
      scrub: 0,
      pin: true,
      // markers: true,
      duration: 10,
    },
  });

  tlIng.to(
    "#jar-image",
    {
      y: "+=53rem",
      width: "300px",
      rotate: "-360deg",
      opacity: 11,
      ease: "linear",
      scale: 1,
    },
    section
  );
  section += 0.4;
  tlIng.to(
    ".ingredient-1",
    {
      motionPath: {
        path: [
          { x: 50, y: 200 },
          { x: 450, y: 500 },
        ],
      },
      duration: 0.25,
      scale: 1.5,
      opacity: 1,
    },
    section
  );
  tlIng.to(
    ".ingredient-2",
    {
      motionPath: {
        path: [
          { x: 50, y: 200 },
          { x: 300, y: 300 },
        ],
      },
      duration: 0.5,
      scale: 1.5,
      opacity: 1,
    },
    section
  );
  tlIng.to(
    ".ingredient-3",
    {
      motionPath: {
        path: [
          { x: 50, y: 50 },
          { x: 450, y: 100 },
        ],
      },
      duration: 0.75,
      scale: 1.5,
      opacity: 1,
    },
    section
  );
  tlIng.to(
    ".ingredient-4",
    {
      motionPath: {
        path: [
          { x: -50, y: 50 },
          { x: -450, y: 100 },
        ],
      },
      duration: 0.5,
      scale: 1.5,
      opacity: 1,
    },
    section
  );
  tlIng.to(
    ".ingredient-5",
    {
      motionPath: {
        path: [
          { x: -50, y: 200 },
          { x: -300, y: 300 },
        ],
      },
      duration: 0.75,
      scale: 1.5,
      opacity: 1,
    },
    section
  );
  tlIng.to(
    ".ingredient-6",
    {
      motionPath: {
        path: [
          { x: -50, y: 200 },
          { x: -450, y: 500 },
        ],
      },
      duration: 0.5,
      scale: 1.5,
      opacity: 1,
    },
    section
  );

  section += 0.5;

  tlIng.to({}, { duration: 1 }, section);
  tlIng.fromTo(
    "#jar-image",
    {
      scale: 1,
    },
    {
      scale: 0.7,
    },
    section
  );
  /*
   *
   *  Vitamin Timeline
   *
   */

  let tlVit = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "linear",
    },
    scrollTrigger: {
      trigger: "#vitamin-section",
      start: "-=100 top",
      end: "3000",
      scrub: 0,
      pin: true,
      // markers: true,
      duration: 10,
    },
  });
  tlVit.fromTo(
    "#jar-image",
    {
      scale: 0.7,
    },
    {
      scale: 1,
      rotate: '-360deg',
    },
    section
  );

  tlVit.to(
    ".tt-1",
    {
      x: 0
    },
    section
  );
  tlVit.to(
    ".tb-1",
    {
      x: 0
    },
    section
  );
  section += 1;
  tlVit.to(
    "#jar-image",

    {
      rotate: "-360deg",
    },
    section
  );

  section += 0.2;


  tlVit.to(
    ".tt-1",
    {
      x: '-100rem'
    },
    section
  );
  tlVit.to(
    ".tb-1",
    {
      x: '100rem'
    },
    section
  );

  section += 1;

  tlVit.to(
    ".tt-2",
    {
      x: 0
    },
    section
  );
  tlVit.to(
    ".tb-2",
    {
      x: 0
    },
    section
  );
  section += 1;
  tlVit.to(
    "#jar-image",

    {
      rotate: "-360deg",
    },
    section
  );

  section += 0.2;


  tlVit.to(
    ".tt-2",
    {
      x: '-100rem'
    },
    section
  );
  tlVit.to(
    ".tb-2",
    {
      x: '100rem'
    },
    section
  );





  // section += 0.5;
  // tlVit.to(
  //   "#jar-image",

  //   {
  //     scale: 0,
  //   },
  //   section
  // );

  /**
   *
   * Effect Section
   *
   **/

  const tlEfffect = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "linear",
    },
    scrollTrigger: {
      trigger: "#effect-section",
      start: "-=50 top",
      end: "2500",
      scrub: 0,
      pin: true,
      // markers: true,
    },
  });
  tlEfffect.to("#jar-image",
    {
      rotate: "360deg",
      duration: 4,
    },
    section);
  section += 1;
  tlEfffect.to(
    ".fc-1",
    {
      opacity: "1",

      x: 250,
      y: -250,
    },
    section
  );
  section += 1;
  tlEfffect.to(
    ".fc-2",
    {
      opacity: "1",

      x: 250,
      y: 250,
    },
    section
  );
  section += 1;
  tlEfffect.to(
    ".fc-3",
    {
      opacity: "1",
      y: 250,
      x: -250,
    },
    section
  );
  section += 1;
  tlEfffect.to(
    ".fc-4",
    {
      opacity: "1",

      y: -250,
      x: -250,
    },
    section
  );
  section += 1;

  tlEfffect.to(
    ".effect-holder",
    {
      rotation: 130, // Adjust the rotation value as needed
      ease: "none",
    },
    section
  );

  tlEfffect.to(
    ".effect-holder h4",
    {
      rotation: -130, // Adjust the rotation value as needed
      ease: "none",
      x: 0,
      y: 0,
    },
    section
  );
  // section += 1;
  tlEfffect.to(
    ".effect-holder h4",
    {
      scale: 0,
      opacity: 0,
    },
    section
  );
  tlEfffect.fromTo(
    "#jar-image",
    {
      scale: 1,
    },
    {
      scale: 0,
      opacity: 0,
      zIndex: 1,
    },
    section
  );
  section += 0.5;
  tlEfffect.to({}, { duration: 1 });
  section += 0.5;
  tlEfffect.to({}, { duration: 1 });

  /**
   *
   * Showcase Timeline
   *
   * */
  const tlShowcase = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "linear",
    },
    scrollTrigger: {
      trigger: "#showcase-section",
      start: "top 60",
      end: "15000",
      // end: "1000",
      scrub: 0,
      pin: true,
      // markers: true,
    },
  });
  section = 0;



  section += 0;
  tlShowcase.from('.a', {
    y: -500,
    opacity: 0,
    duration: 3,
    rotate: 360,
  })


  section += 3;
  tlShowcase.from('.elegance-text', {
    duration: 7,
    opacity: 0,
  })

  section += 0;
  tlShowcase.to('.elegance-text', {
    duration: 7,
    opacity: 0,
  })

  section += 0;
  tlShowcase.to('.a', {
    rotation: 360,
    // duration: 1,
    duration: 5,
  }, "+=1")



  tlShowcase.to('.what-text', {
    // rotation: 720,
    // duration: 1,
    duration: 3,
    opacity: 1,
  }, "+=1")

  tlShowcase.to('.jar-without-lid', {
    opacity: 1,
  }, "<-0.5")
  tlShowcase.to('.lid-of-jar', {
    opacity: 1,
  }, "<-0.5")
  tlShowcase.to('.a', {
    opacity: 0,
  }, "-=1")





  tlShowcase.to('.lid-of-jar', {
    duration: 3,
    y: -100,
    opacity: 0
  }, "<")

  // tlShowcase.to(".lid-of-jar", {
  //   duration: 2,
  //   motionPath: {
  //     path: "#path-of-lid",
  //     align: '#path-of-lid',
  //     alignOrigin: [0.5, 0.5],
  //     autoRotate: 90
  //   }
  // }, "+=1");

  section += 1;
  tlShowcase.from(".ingredient-my-1", {
    opacity: 0,
    duration: 5,
    motionPath: {
      path: "#path-1",
      curviness: 1,
      align: '#path-1'
    }
  }, "+=1");
  tlShowcase.to(".ingredient-my-4", {
    opacity: 1,
    duration: 5,
    motionPath: {
      path: "#path-4",
      curviness: 1,
      align: '#path-4'
    }
  }, "<");

  section += 4;
  tlShowcase.from(".ingredient-my-2", {
    opacity: 0,
    duration: 5,
    motionPath: {
      path: "#path-2",
      curviness: 1,
      align: '#path-2'
    }
  }, "+=1");
  tlShowcase.to(".ingredient-my-5", {
    opacity: 1,
    duration: 5,
    motionPath: {
      path: "#path-5",
      curviness: 1,
      align: '#path-5'
    }
  }, "<");

  section += 2;
  tlShowcase.from(".ingredient-my-3", {
    opacity: 0,
    duration: 5,
    motionPath: {
      path: "#path-3",
      curviness: 1,
      align: '#path-3'
    }
  }, "+=1");
  tlShowcase.to(".ingredient-my-6", {
    opacity: 1,
    duration: 5,
    motionPath: {
      path: "#path-6",
      curviness: 1,
      align: '#path-6'
    }
  }, "<");


  //reverse
  tlShowcase.to(".ingredient-my-1", {
    opacity: 0,
    duration: 2,
    motionPath: {
      path: "#path-1",
      curviness: 1,
      align: '#path-1'
    }
  }, "+=1");
  tlShowcase.to(".ingredient-my-2", {
    opacity: 0,
    duration: 2,
    motionPath: {
      path: "#path-2",
      curviness: 1,
      align: '#path-2'
    }
  }, "<");
  tlShowcase.to(".ingredient-my-3", {
    opacity: 0,
    duration: 2,
    motionPath: {
      path: "#path-3",
      curviness: 1,
      align: '#path-3'
    }
  }, "<");



  tlShowcase.from(".ingredient-my-4", {
    opacity: 1,
    duration: 2,
    motionPath: {
      path: "#path-4",
      curviness: 1,
      align: '#path-4'
    }
  }, "<");
  tlShowcase.from(".ingredient-my-5", {
    opacity: 1,
    duration: 2,
    motionPath: {
      path: "#path-5",
      curviness: 1,
      align: '#path-5'
    }
  }, "<");
  tlShowcase.from(".ingredient-my-6", {
    opacity: 1,
    duration: 2,
    motionPath: {
      path: "#path-6",
      curviness: 1,
      align: '#path-6'
    }
  }, "<");

  tlShowcase.from(".ingredient-my-4", {
    opacity: 0,
  }, "<");
  tlShowcase.from(".ingredient-my-5", {
    opacity: 0,
  }, "<");
  tlShowcase.from(".ingredient-my-6", {
    opacity: 0,
  }, "<");

  tlShowcase.to('.what-text', {
    // rotation: 720,
    // duration: 1,
    // duration: 3,
    opacity: 0,
  }, "<")

  tlShowcase.to('.lid-of-jar', {
    duration: 3,
    y: 0,
    opacity: 1,
  }, "+=1")

  tlShowcase.to('.a', {
    opacity: 1,
  }, "-=0.75")

  tlShowcase.to('.jar-without-lid', {
    opacity: 0,
  }, "+=1")

  tlShowcase.to('.lid-of-jar', {
    opacity: 0,
  }, "<")


  tlShowcase.set('.a', {
    transformOrigin: "50% 50%"
  });


  tlShowcase.to('.a', {
    duration: 11,
    rotation: 540,
  }, "+=1")

  // tlShowcase.to('.custom-image', {
  //   opacity: 1,
  // }, "-=1");

  tlShowcase.to('.custom-image', {
    y: -1000,
    opacity: 1,
    // rotate: 360,
    duration: 10,
  }, "<")

  tlShowcase.to('.custom-image', {
    y: -2000,
    opacity: 1,
    // rotate: 360,
    duration: 10,
  }, "+=1")

  tlShowcase.to('.a', {
    duration: 10,
    rotation: 360,
  }, "<")

  tlShowcase.from('.a', {
    duration: 6,
    rotation: 720,
  }, "+=1")

  tlShowcase.from('.vitamin-custom', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")

  tlShowcase.from('.calcium-custom', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.from('.a', {
    duration: 6,
    rotation: 1080,
  }, "+=1")
  tlShowcase.to('.vitamin-custom', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.from('.vitamin-custom-2', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.to('.calcium-custom', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.from('.calcium-custom-2', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.from('.a', {
    duration: 6,
    rotation: 1440,
  }, "+=1")
  tlShowcase.to('.vitamin-custom-2', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")

  tlShowcase.to('.calcium-custom-2', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")

  tlShowcase.from('.a', {
    duration: 6,
    rotation: 1800,
  }, "<")

  tlShowcase.from('.vitamin-custom-3', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.from('.calcium-custom-3', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")

  tlShowcase.from('.a', {
    duration: 6,
    rotation: 2160,
  }, "+=1")

  tlShowcase.to('.vitamin-custom-3', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.to('.calcium-custom-3', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")



  tlShowcase.to('.circulating-text-5', {
    opacity: 0,
    x: 300,
    yPercent: -100,
    duration: 5
  }, "<")

  tlShowcase.to('.circulating-text-6', {
    opacity: 0,
    x: 300,
    yPercent: 100,
    duration: 5
  }, "<");
  tlShowcase.to('.circulating-text-7', {
    opacity: 0,
    x: -300,
    yPercent: -100,
    duration: 5
  }, "<");
  tlShowcase.to('.circulating-text-8', {
    opacity: 0,
    x: -300,
    yPercent: 100,
    duration: 5
  }, "<");


  tlShowcase.from('.a', {
    duration: 6,
    rotation: 2520,
  }, "<")

  tlShowcase.from('.vitamin-custom-4', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.from('.calcium-custom-4', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")

  tlShowcase.from('.a', {
    duration: 6,
    rotation: 2880,
  }, "+=1")

  tlShowcase.to('.vitamin-custom-4', {
    x: -1000,
    duration: 6,
    opacity: 0,
  }, "<")
  tlShowcase.to('.calcium-custom-4', {
    x: 1000,
    duration: 6,
    opacity: 0,
  }, "<")



  tlShowcase.from('.a', {
    duration: 15,
    rotation: 3240,
  }, "+=1")




  tlShowcase.to('.circulating-text-1', {
    opacity: 1,
    x: 300,
    yPercent: -100,
    duration: 5
  }, "-=8")

  tlShowcase.to('.circulating-text-2', {
    opacity: 1,
    x: 300,
    yPercent: 100,
    duration: 5
  }, "-=6");
  tlShowcase.to('.circulating-text-3', {
    opacity: 1,
    x: -300,
    yPercent: -100,
    duration: 5
  }, "-=4");
  tlShowcase.to('.circulating-text-4', {
    opacity: 1,
    x: -300,
    yPercent: 100,
    duration: 5
  }, "-=4");


  tlShowcase.to('.a', {
    scale: 0
  }, "+=1")
  tlShowcase.to('.circulating-text-1', {
    scale: 0,
  }, "<")
  tlShowcase.to('.circulating-text-2', {
    scale: 0,
  }, "<")
  tlShowcase.to('.circulating-text-3', {
    scale: 0,
  }, "<")
  tlShowcase.to('.circulating-text-4', {
    scale: 0,
  }, "<")



  // tlShowcase.to('.a', {
  //   duration: 7,
  //   rotation: 3240,
  // }, "+=1")




  tlShowcase.to('#showcase-section-1', {
    y: -50,
    opacity: 1,
    // duration: 2,
  }, "<")

  const tlShowcase1 = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "linear",
    },
    scrollTrigger: {
      trigger: "#showcase-section-1",
      start: "top 60",
      end: "2000",
      // end: "1000",
      scrub: 0,
      pin: true,
      // markers: true,
    },
  });





  tlShowcase1.from('.believe-text', {
    opacity: 0,
    duration: 2,
  })
  tlShowcase1.to('.believe-text', {
    opacity: 1,
    duration: 2,
  })


  tlShowcase1.to(
    "#showcase-slider",
    {
      duration: 5,
      "--fill-till": "+=33",
    },
    "+=1"
  );
  tlShowcase1.to(
    "#showcase-section-1 #showcase-images div:nth-child(3)",
    {
      duration: 5,
      clipPath: "inset(0 0 0 100%)",
    },
    "<"
  );
  tlShowcase1.to(
    "#showcase-section-1 #showcase-images div:nth-child(3) .tear",
    {
      duration: 5,

      className: "tear left-0",
      transform: "translate(100%, 0)",
      onComplete: () => { },
    },
    "<"
  );




  section += 1;
  tlShowcase1.to(
    "#showcase-slider",
    {
      duration: 5,
      "--fill-till": "+=34",
    },
  );
  tlShowcase1.to(
    "#showcase-section-1 #showcase-images div:nth-child(2)",
    {
      duration: 5,
      clipPath: "inset(0 0 0 100%)",
    },
    "<"
  );

  tlShowcase1.to(
    "#showcase-section-1 #showcase-images div:nth-child(2) .tear",
    {
      duration: 5,
      className: "tear left-0",
      transform: "translate(100%, 0)",
    },
    "<"
  );



  section += 1;
  tlShowcase1.to(
    "#showcase-slider",
    {
      "--fill-till": "+=34",
    },
  );
  tlShowcase1.to('.believe-text', {
    opacity: 0,
    duration: 2,
  })
  // Loading.remove();
  // tlShowcase.to("#shop-section",
  //   {
  //     y: "-2rem",
  //     scale: 1.2
  //   }, "+=1");
  // section += 0.5;
  // tlEfffect.to({}, { duration: 1 }, section);
});

const updateDotValue = (value) => {
  document.getElementById("slide-dot").textContent = value;
};

</script>
<template>
  <HeaderForHome />
  <div id="NotiflixLoadingWrap"
    class="notiflix-loading nx-with-animation w-screen h-screen absolute backdrop-blur-xl bg-primary"
    style="z-index: 4000; background: #efe8df; animation-duration: 400ms; font-family: Quicksand, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif; display: flex; flex-flow: column wrap; align-items: center; justify-content: center;">
    <div style="width:80px; height:80px;" class="notiflix-loading-icon z-50"><svg xmlns="http://www.w3.org/2000/svg"
        stroke="#32c682" width="80px" height="80px" viewBox="0 0 44 44">
        <g fill="none" fill-rule="evenodd" stroke-width="2">
          <circle cx="22" cy="22" r="1">
            <animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1" repeatCount="indefinite" values="1; 20"></animate>
            <animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s"
              keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"></animate>
          </circle>
          <circle cx="22" cy="22" r="1">
            <animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1"
              keyTimes="0; 1" repeatCount="indefinite" values="1; 20"></animate>
            <animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s"
              keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"></animate>
          </circle>
        </g>
      </svg></div>
  </div>
  <div class="hidden sm:block">
    <div class="fixed h-screen w-screen bg-[url('/images/bg.png')]" id="blob-group">
      <img class="w-[25rem] absolute left-0 top-0" src="/images/glob-tl.png" alt="" />
      <img class="w-[25rem] absolute left-0 bottom-0" src="/images/glob-bl.png" alt="" />
      <img class="w-[30rem] absolute right-0 bottom-0" src="/images/glob-br.png" alt="" />
    </div>
    <div
      class="landing__main w-full text-center min-h-screen pt-15 bg-no-repeat bg-cover bg-top overflow-hidden relative">
      <div>
        <a href="/"><img id="logo-image" src="/images/logo.png" class="w-4/12 inset-x-0 my-0 mx-auto top-[25%] fixed z-20"
            alt="" /></a>
      </div>
      <!-- <div>
        <img id="jar-image" src="/images/jar.png" class="w-[250px] inset-0 m-auto fixed z-[11] translate-y-[-50rem]"
          alt="" />
      </div> -->
      <div id="shop-section" class="fixed bottom-0 w-full">
        <!-- <img class="w-[7rem] inset-0 m-auto" src="/images/Asset-26-4x.png" alt="" />
        <img class="w-[4rem] absolute inset-0 m-auto" src="/images/Asset-27-4x.png" alt="" />
        <p class="absolute inset-0 m-auto flex items-center justify-center text-secondary font-bold text-xs">
          <a href="">Shop Now</a>
        </p> -->
      </div>
      <div id="hero-section"
        class="hero__section bg-[url('/images/bg.png') relative min-h-screen bg-no-repeat bg-cover bg-top overflow-hidden">
        <div id="leaves-group">
          <img class="absolute w-[18rem] bottom-[-8rem] left-[5rem]" src="/images/leave-bl.png" alt="" />
          <img class="absolute w-[10rem] inset-[35%] left-[-2rem]" src="/images/Asset-15-4x.png" alt="" />
          <img class="absolute w-[12rem] left-[30%] top-[10%]" src="/images/Asset-25-4x.png" alt="" />
          <img class="absolute w-[8rem] right-[40%] top-[10%]" src="/images/Asset-24-4x.png" alt="" />
          <img class="absolute w-[18rem] bottom-[-10rem] left-[15rem]" src="/images/Asset-13-4x.png" alt="" />
          <img class="absolute w-[6rem] right-[20%] top-[20%]" src="/images/Asset-22-4x.png" alt="" />
          <img class="absolute w-[40rem] right-[5rem] top-[-5rem]" src="/images/Asset-23-4x.png" alt="" />
          <img class="absolute w-[15rem] right-[-5rem] bottom-[0rem]" src="/images/Asset-16-4x.png" alt="" />
          <img class="absolute w-[8rem] right-[25rem] bottom-[10rem]" src="/images/Asset-24-4x.png" alt="" />
          <img class="absolute w-auto right-0 top-[10rem]" src="/images/rl-small.png" alt="" />
        </div>
        <div class="home-text flex absolute top-[100px] items-center flex-col w-screen h-screen justify-center"
          style="align-items: center;">
          <h4 class="text-3xl ">Unlock the essence for self-care</h4>
          <h4 class="text-3xl ">through the magic of superfoods.</h4>
          <h4 class="mt-5 text-1xl bg-[#ef8f7b] text-neutral-50 py-1 px-4  rounded-3xl"><a href="/about">Know
              more</a></h4>
        </div>
      </div>


      <div id="showcase-section" style="--text-offset: 100rem" class="min-h-screen pt-16 relative border-blue-500">
        <div id="hero-section-1"
          class="hero__section bg-[url('/images/bg.png') w-screen h-screen  absolute min-h-screen bg-no-repeat bg-cover bg-top overflow-hidden">
          <div id="leaves-group-1">
            <img class="absolute w-[18rem] opacity-[0.5] bottom-[-8rem] left-[5rem]" src="/images/leave-bl.png" alt="" />
            <img class="absolute w-[10rem] opacity-[0.5] inset-[35%] left-[-2rem]" src="/images/Asset-15-4x.png" alt="" />
            <img class="absolute w-[12rem] opacity-[0.5] left-[30%] top-[10%]" src="/images/Asset-25-4x.png" alt="" />
            <img class="absolute w-[8rem] opacity-[0.5] right-[40%] top-[10%]" src="/images/Asset-24-4x.png" alt="" />
            <img class="absolute w-[18rem] opacity-[0.5] bottom-[-10rem] left-[15rem]" src="/images/Asset-13-4x.png"
              alt="" />
            <img class="absolute w-[6rem] opacity-[0.5] right-[20%] top-[20%]" src="/images/Asset-22-4x.png" alt="" />
            <img class="absolute w-[40rem] opacity-[0.5] right-[5rem] top-[-5rem]" src="/images/Asset-23-4x.png" alt="" />
            <img class="absolute w-[15rem] opacity-[0.5] right-[-5rem] bottom-[0rem]" src="/images/Asset-16-4x.png"
              alt="" />
            <img class="absolute w-[8rem] opacity-[0.5] right-[25rem] bottom-[10rem]" src="/images/Asset-24-4x.png"
              alt="" />
            <img class="absolute w-auto opacity-[0.5] right-0 top-[10rem]" src="/images/rl-small.png" alt="" />
          </div>
        </div>
        <div class="home-container mt-12">
          <div class="elegance-text absolute top-[-200px] flex items-center justify-center w-screen h-screen">
            <!-- <h2 class="elegance-text-1">Let' s begin with Elegance: <br> Our Hair Care Superblend</h2> -->
            <h4 class="text-5xl font-extrabold text-secondary elegance-text-1">LET' S BEGIN WITH ELEGANCE: <br> OUR
              HAIR
              CARE SUPERBLEND</h4>

          </div>
          <!-- <p class="vitamin-custom">Vitamins</p> -->
          <h1
            class="text-[5rem] absolute h-screen top-[-170px] flex items-center justify-center  w-screen vitamin-custom font-[900] text-primary  bg-transparent inset-x-0 tt-1">
            Improves
          </h1>
          <!-- <p class="vitamin-custom-2">Vitamins - 2</p> -->

          <h1
            class="text-[5rem] text-primary absolute vitamin-custom-2 font-[900] h-screen top-[-170px] flex items-center justify-center  w-screen bg-transparent inset-x-0 tt-2">
            Balance
          </h1>
          <h1
            class="text-[5rem] text-primary  vitamin-custom-3 font-[900] absolute h-screen top-[-170px] flex items-center justify-center  w-screen bg-transparent inset-x-0 tt-3">
            Enhance
          </h1>
          <h1
            class="text-[5rem] text-primary vitamin-custom-4 font-[900] absolute h-screen top-[-170px] flex items-center justify-center  w-screen bg-transparent inset-x-0 tt-3">
            Reduce
          </h1>

          <div class="absolute flex h-screen justify-center items-center top-[-170px] w-screen">
            <h4 class="text-6xl  font-extrabold text-secondary opacity-0 what-text">
              WHAT'S IN IT?</h4>
          </div>

          <div class="absolute jar-without-lid top-0 opacity-0 flex items-center justify-center w-screen h-screen">
            <img class=" h-[220px] w-[200px]" src="/images/jar-without-lid.png" alt="">
          </div>

          <div class="absolute lid-of-jar flex top-[-80px] opacity-0 items-center justify-center w-screen h-screen">
            <img class="w-[200px]" src="/images/lid.png" alt="">
          </div>



          <div class="box absolute a flex items-center top-0 justify-center w-screen h-screen ">
            <img class="z-40 h-[220px] w-[200px]" src="/images/jar2.png" alt="">
          </div>



          <div class="svg-align absolute h-screen flex items-center justify-center  w-screen">
            <div class="svg-div-align mt-[10rem] mr-[7rem]">
              <svg opacity="0" viewBox="-20 0 557 190" id="svg-1">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="20" r="3" />
                <path id="path-1"
                  d="M59.611,210.013 C63.486,209.388 29.474,44.449 111.23,44.065 192.941,43.641 190.962,143.104 192.945,148.468 " />
              </svg>
            </div>
            <div class="svg-div-align mt-[7rem]">
              <svg opacity="0" viewBox="-20 0 557 190" id="svg-2">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="20" r="3" />
                <path id="path-2"
                  d="M81.738,168.09 C83.016,155.441 123.845,82.157 148.535,81.151 179.763,79.854 178.649,154.247 182.655,162.473 " />
              </svg>
            </div>
            <div class="svg-div-align">
              <svg opacity="0" viewBox="-20 0 557 190" id="svg-3">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="20" r="3" />
                <path id="path-3"
                  d="M62.761,130.549 C66.964,119.127 114.16,88.558 148.538,87.482 172.831,86.716 187.063,130.003 207.274,166.378  " />
              </svg>
            </div>
            <div class="svg-div-align mt-[10rem] ml-[7rem]">
              <svg opacity="0" viewBox="-20 0 557 190" id="svg-4">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="20" r="3" />
                <path id="path-4"
                  d="M194.562,146.646 C198.437,146.027 191.414,65.184 273.17,64.797 354.881,64.377 355.64,204.907 357.623,210.271 " />
              </svg>
            </div>
            <div class="svg-div-align mt-[7rem]">
              <svg opacity="0" viewBox="-20 0 557 190" id="svg-5">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="20" r="3" />
                <path id="path-5"
                  d="M184.222,159.486 C185.508,146.837 189.184,80.202 213.859,79.196 245.093,77.899 311.252,152.292 315.258,160.518" />
              </svg>
            </div>
            <div class="svg-div-align mt-10">
              <svg opacity="0" viewBox="-20 0 557 190" id="svg-6">
                <circle cx="100" cy="100" r="3" />
                <circle cx="300" cy="20" r="3" />
                <path id="path-6"
                  d="M212.575,164.579 C216.778,153.157 249.497,94.42 283.879,93.348 308.167,92.58 336.876,90.479 357.088,126.869" />
              </svg>
            </div>
            <div class="ingredient-my-1 flex items-center flex-col">
              <img class="opacity-1  scale-150  h-20" src="/images/Ingradients-02.png" alt="" />
              <h3 class="mt-5 text-xl font-bold">Pomegranate</h3>
            </div>
            <div class="ingredient-my-2 flex items-center flex-col">
              <img class="opacity-1  scale-150  h-20" src="/images/Ingradients-03.png" alt="" />
              <h3 class="mt-5 text-xl font-bold">Cinnamon Bark</h3>
            </div>
            <div class="ingredient-my-3 flex items-center flex-col">
              <img class="opacity-1  scale-150  h-20" src="/images/Ingradients-04.png" alt="" />
              <h3 class="mt-5 text-xl font-bold">Amla</h3>
            </div>

            <div class="ingredient-my-4 opacity-0 flex items-center flex-col">
              <img class="scale-150  h-20" src="/images/Ingradients-07.png" alt="" />
              <h3 class="mt-5 text-xl font-bold">Orange</h3>
            </div>
            <div class="ingredient-my-5 opacity-0 flex items-center flex-col">
              <img class="scale-150  h-20" src="/images/Ingradients-09.png" alt="" />
              <h3 class="mt-5 text-xl font-bold">Sea Buckthom</h3>
            </div>
            <div class="ingredient-my-6 opacity-0 flex items-center flex-col">
              <img class="scale-150  h-20" src="/images/Ingradients-10.png" alt="" />
              <h3 class="mt-5 text-xl font-bold">Gotu Kola Leaf</h3>
            </div>
          </div>
          <div class="absolute h-screen top-[130px] flex items-center justify-center  w-screen">
            <h4
              class="mt-16 text-1xl opacity-0 what-text font-extrabold text-center bg-[#ef8f7b] text-neutral-50 py-1 px-4  rounded-3xl">
              <a href="/about">Know
                more</a>
            </h4>
          </div>
          <div class="elegance-text absolute top-[130px] flex justify-center items-center w-screen h-screen">
            <h2 class="elegance-text-2 font-bold text-xl">Simple, Plant Based & Healthy SuperBlends.</h2>
          </div>
          <!-- <h2 class="calcium-custom-2">Calcium - 2</h2> -->
          <div class="absolute h-screen top-[140px] flex items-center justify-center  w-screen">

            <h1 class="text-[5rem] calcium-custom-2 font-[1000] text-emerald-800  bg-transparent inset-x-0 tt-2" style="
            text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),
              -1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
              Hair Growth
            </h1>
          </div>

          <!-- <h2 class="calcium-custom">Calcium</h2> -->
          <div class="absolute h-screen top-[140px] flex items-center justify-center  w-screen">
            <h1 class="text-[5rem] font-extrabold  calcium-custom  text-emerald-800  bg-transparent inset-x-0 tt-2" style="
              text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),
                -1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
              Scalp Health
            </h1>
          </div>
          <div class="absolute h-screen top-[140px] flex items-center justify-center  w-screen">
            <h1 class="text-[5rem] font-extrabold  calcium-custom-3  text-emerald-800  bg-transparent inset-x-0 tt-2"
              style="
              text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),
                -1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
              Follicle Health
            </h1>
          </div>
          <div class="absolute h-screen top-[140px] flex items-center justify-center  w-screen">
            <h1 class="text-[5rem] font-extrabold  calcium-custom-4  text-emerald-800  bg-transparent inset-x-0 tt-2"
              style="text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),
                -1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);">
              Hair Loss
            </h1>
          </div>

          <div class="absolute flex top-0 items-center justify-center w-screen h-screen -z-10">
            <h1 class="text-[2rem] circulating-text-1 opacity-0 absolute font-[1000] text-secondary  bg-transparent">
              Effectively <br /> suppress DHT
            </h1>
            <h1 class="text-[2rem] absolute font-[1000] text-primary circulating-text-2 opacity-0 ">
              Maintains <br /> pH Level
            </h1>
            <h1 class="text-[2rem] circulating-text-3 opacity-0 absolute font-[1000] text-primary  bg-transparent">
              Improves Blood <br /> Circulation
            </h1>
            <h1 class="text-[2rem] absolute font-[1000] opacity-0 circulating-text-4  text-secondary  ">
              Supports <br /> Collagen Synthesis
            </h1>
          </div>
        </div>

        <div class="custom-image absolute top-[1100px] flex justify-center items-center w-screen h-fit  opacity-0">
          <img width="100%" src="/images/website-banner.jpg" alt="">
          <h4 class="mt-5 text-1xl bg-[#ef8f7b] text-neutral-50 py-1 px-4 absolute bottom-16 rounded-3xl"><a
              href="/about">Know
              more</a></h4>
        </div>
      </div>
      <!-- <h4 class="text-3xl font-extrabold text-secondary elegance-text-1">Plant based-Gluten free-No
        Artificial Sweetener <br /> No Added Flavors-Lactose Free-No Allergen</h4> -->


      <div id="showcase-section-1" style="--text-offset: 100rem" class="min-h-screen pt-16 relative border-blue-500">
        <h4 class="text-[2rem] believe-text font-extrabold text-secondary elegance-text-1">We believe in fixing the root
          cause, <br /> not quick results!</h4>
        <div id="showcase-images" class="relative h-[400px] mb-5">
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
        <!-- <div style="--fill-till: 0" id="showcase-slider" class="relative flex justify-center">
          <div class="w-[50rem] h-2 relative">
            <div class="h-2 w-full absolute bg-gray-400" id="slide"></div>
            <div class="h-2 w-[calc(var(--fill-till)*1%)] absolute bg-primary" id="slide-full">
              <div slide-no="1" style="--active-slide: 1"
                class="h-7 w-7 rounded-full inset-y-0 m-auto absolute bg-primary right-0" id="slide-dot"></div>
            </div>
          </div>
        </div> -->

      </div>


      <div class="container px-10 mx-auto">
        <div class="min-h-screen pt-16 relative border-blue-500 grid grid-cols-12 gap-4">
          <div class="col-span-8">
            <p class="text-secondary text-justify text-xl p-3 font-semibold">Hair-You-Glo revitalises your hair health and
              restores lost confidence related to hair concerns. Your hair is a vital part of your presentation
              and personality, and Hair-You-Glo ensures you radiate self-assurance in every interaction.
              Introducing our expertly crafted hair health betterment product, carefully with a blend of nature's
              finest ingredients such as Sea buckthorn extract, Carrot, Amla, Lemon, Orange, Tomato fruit,
              Pomegranate extract, Grape seed, Fenugreek seeds extract and more.
            </p>
            <br />

            <p class="text-secondary text-justify text-xl p-3 font-semibold">Hair-You-Glo is a product formulated in such
              a
              way that helps you improve your hair health by containing much required nutrients & vitamins in it.
              Experience the power of nature in every element of Hair-You-Glo. Elevate your hair health with a
              blend of carefully selected natural ingredients. Make Hair-You-Glo your daily partner in nurturing
              your hair's vitality. Unlock the secret to radiant, confident hair.
            </p>
          </div>
          <div class="col-span-4">
            <img src="/images/last-image.jpg" alt="">
            <!-- <div class="h-[500px] w-[400px] bg-emerald-500 rounded-xl"></div> -->
          </div>
        </div>
      </div>



    </div>
  </div>

  <div class="sm:hidden">
    <HomePageMobile />
  </div>
</template>

<style>
.svg-align {
  position: absolute;
  bottom: 30vh;
  right: auto;
  left: 7rem;
  height: 100%;
  width: 100%;
}

.svg-div-align {
  position: absolute;
  right: auto;
  left: auto;
  height: 100%;
  width: 100%;
}

.tear {
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff 30%, transparent 70%);
  clip-path: polygon(-106.7% 22.4%,
      7% 138.2%,
      2.1% 94.3%,
      0.7% 90.5%,
      0.9% 86.3%,
      2.2% 78.2%,
      0.4% 76.7%,
      1.2% 72.1%,
      2% 64%,
      1.4% 59.8%,
      0.4% 57.3%,
      0.3% 49.1%,
      2.9% 44.7%,
      1.9% 41.3%,
      0.8% 35.7%,
      2.9% 31.3%,
      0.8% 24.9%,
      2.7% 20.5%,
      0.8% 17.4%,
      2.5% 8.6%,
      1.1% -0.5%);
}

.left0 {
  left: 0 !important;
}
</style>
