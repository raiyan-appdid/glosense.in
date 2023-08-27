<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin.js";

onMounted(() => {
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
      end: "300",
      scrub: 2,
      pin: true,
      // markers: true,
    },
  });

  tlHero.to("#logo-image", {
    duration: 0.1,
    top: "1.5rem",
    width: "10rem",
  });



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
      scrub: 1,
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
      scrub: 1,
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
      scrub: 3,
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
      end: "12000",
      // end: "1000",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });
  section = 0;



  section += 0;
  tlShowcase.from('.a', {
    y: -400,
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
    rotation: 720,
    // duration: 1,
    duration: 3,
  })
  tlShowcase.to('.what-text', {
    // rotation: 720,
    // duration: 1,
    duration: 3,
    opacity: 1,
  }, "+=1")

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


  tlShowcase.set('.a', {
    transformOrigin: "50% 50%"
  });


  tlShowcase.to('.a', {
    duration: 2,
    rotation: 540,
  }, "+=1")


  tlShowcase.to('.custom-image', {
    y: -400,
    opacity: 1,
    // rotate: 360,
    duration: 2,
  }, "<")

  tlShowcase.to('.custom-image', {
    y: -800,
    opacity: 0,
    // rotate: 360,
    duration: 2,
  }, "+=1")

  tlShowcase.to('.a', {
    duration: 2,
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
    duration: 10,
    rotation: 1800,
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
  }, "-=2");

  

  const tlShowcase1 = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "linear",
    },
    scrollTrigger: {
      trigger: "#showcase-section-1",
      start: "top 60",
      end: "1000",
      // end: "1000",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });


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

  tlShowcase.to('#showcase-section-1', {
    y:-50,
    opacity: 1,
    // duration: 2,
  }, "<")


  // tlShowcase.to('.a', {
  //   x: 10,
  //   yPercent: 50,
  //   duration: 5
  // }, "+=1")
  // tlShowcase.to('.a', {
  //   y: 10,
  //   xPercent: 50,
  //   duration: 5
  // }, "<")




  // tlShowcase.from('.calcium-custom', {
  //   x: -1000,
  //   duration: 6,
  // }, 21)
  // tlShowcase.to('.calcium-custom', {
  //   x: 0,
  //   duration: 6,
  //   opacity : 0,
  // } ,21)





  tlShowcase1.from('.believe-text', {
    opacity: 0,
    duration: 2,
  })
  tlShowcase1.to('.believe-text', {
    opacity: 1,
    duration: 2,
  })
  tlShowcase1.to('.believe-text', {
    opacity: 0,
    duration: 2,
  })

  tlShowcase.to("#shop-section",
    {
      y: "-2rem",
      scale: 1.2
    }, "+=1");













  // section += 3;
  tlShowcase.to(
    "#showcase-slider",
    {
      "--fill-till": "+=50",
    },
    section
  );



  // section += 0.5;
  tlEfffect.to({}, { duration: 1 }, section);
});

const updateDotValue = (value) => {
  document.getElementById("slide-dot").textContent = value;
};
</script>
<template>
  <HeaderForHome />
  <div>
    <div class="fixed h-screen w-screen bg-[url('/images/bg.png')]" id="blob-group">
      <img class="w-[25rem] absolute left-0 top-0" src="/images/glob-tl.png" alt="" />
      <img class="w-[25rem] absolute left-0 bottom-0" src="/images/glob-bl.png" alt="" />
      <img class="w-[30rem] absolute right-0 bottom-0" src="/images/glob-br.png" alt="" />
    </div>
    <div
      class="landing__main w-full text-center min-h-screen pt-15 bg-no-repeat bg-cover bg-top overflow-hidden relative">
      <div>
        <img id="logo-image" src="/images/logo.png" class="w-4/12 inset-x-0 my-0 mx-auto top-[15rem] fixed z-20" alt="" />
      </div>
      <!-- <div>
        <img id="jar-image" src="/images/jar.png" class="w-[250px] inset-0 m-auto fixed z-[11] translate-y-[-50rem]"
          alt="" />
      </div> -->
      <div id="shop-section" class="fixed bottom-0 w-full">
        <img class="w-[10rem] inset-0 m-auto" src="/images/Asset-26-4x.png" alt="" />
        <img class="w-[5rem] absolute inset-0 m-auto" src="/images/Asset-27-4x.png" alt="" />
        <p class="absolute inset-0 m-auto flex items-center justify-center text-secondary font-bold text-sm">
          Shop Now
        </p>
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

      </div>

      <!--   <div id="ingredient-section" class="min-h-screen relative border-green-500">
        <h4 class="text-6xl font-extrabold text-secondary">WHAT'S IN IT</h4>
        <div>
          <div class="h-20 w-20 absolute inset-x-0 m-auto">
            <img class="opacity-0 absolute ingredient-1 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0 absolute ingredient-2 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0 absolute ingredient-3 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0 absolute ingredient-4 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0 absolute ingredient-5 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0 absolute ingredient-6 h-20" src="/images/Asset-32-4x.png" alt="" />
          </div>
        </div>
      </div>

      <div id="vitamin-section" class="min-h-screen relative border-red-500">
        <h1
          class="text-[9rem] absolute moving-text font-[900] text-white  bg-transparent inset-x-0 tt-1 translate-x-[100rem]"
          style="
            text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,
              -1px 1px 0 #f1917b, 1px 1px 0 #f1917b;
          ">
          PROTEIN 1
        </h1>
        <h1
          class="text-[9rem] absolute moving-text font-[900] text-white  bg-transparent inset-x-0 tt-2 translate-x-[100rem]"
          style="
            text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,
              -1px 1px 0 #f1917b, 1px 1px 0 #f1917b;
          ">
          PROTEIN 2
        </h1>

        <div class="h-[15rem]"></div>
        <h1
          class="text-[9rem] absolute bottom-40 moving-text font-[900] text-secondary  inset-x-0 tb-1  translate-x-[-100rem]">
          VITAMIN C 1
        </h1>
        <h1
          class="text-[9rem] absolute bottom-40 moving-text font-[900] text-secondary  inset-x-0 tb-2  translate-x-[-100rem]">
          VITAMIN C 2
        </h1>

      </div>

      <div id="effect-section" class="min-h-screen pt-16 flex justify-center items-center relative mt-10">
        <div class="relative h-40 w-40 effect-holder">
          <h4 class="text-[2rem] text-secondary font-extrabold absolute opacity-0 fc-1">
            Prevent Damage
          </h4>
          <h4 class="text-[2rem] text-secondary font-extrabold absolute opacity-0 fc-2">
            Prevent Damage
          </h4>
          <h4 class="text-[2rem] text-secondary font-extrabold absolute opacity-0 fc-3">
            Prevent Damage
          </h4>
          <h4 class="text-[2rem] text-secondary font-extrabold absolute opacity-0 fc-4">
            Prevent Damage
          </h4>
        </div>
      </div> -->


      <div id="showcase-section" style="--text-offset: 100rem" class="min-h-screen pt-16 relative border-blue-500">
        <div class="elegance-text">
          <!-- <h2 class="elegance-text-1">Let' s begin with Elegance: <br> Our Hair Care Superblend</h2> -->
          <h4 class="text-6xl font-extrabold text-secondary elegance-text-1">LET' S BEGIN WITH ELEGANCE: <br> OUR HAIR
            CARE SUPERBLEND</h4>

        </div>
        <!-- <p class="vitamin-custom">Vitamins</p> -->
        <h1 class="text-[6rem] absolute vitamin-custom font-[900] text-white  bg-transparent inset-x-0 tt-1" style="top: 4rem;
            text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,
              -1px 1px 0 #f1917b, 1px 1px 0 #f1917b;
          ">
          VITAMINS
        </h1>
        <!-- <p class="vitamin-custom-2">Vitamins - 2</p> -->

        <h1 class="text-[6rem] absolute vitamin-custom-2 font-[900] text-white  bg-transparent inset-x-0 tt-2" style="top: 4rem;
            text-shadow: -1px -1px 0 #f1917b, 1px -1px 0 #f1917b,
              -1px 1px 0 #f1917b, 1px 1px 0 #f1917b;
          ">
          VITAMINS -2
        </h1>

        <div class="absolute top-[7rem] w-screen">
          <h4 class="text-6xl  font-extrabold text-secondary opacity-0 what-text">
            WHAT'S IN IT?</h4>
        </div>
        <div class="box a flex justify-center align-middle"><img class="h-[280px] w-[250px]" src="/images/jar.png" alt="">
        </div>
        <div class="svg-align flex justify-center">
          <div class="svg-div-align">
            <svg opacity="0" viewBox="-20 0 557 190" id="svg-1">
              <circle cx="100" cy="100" r="3" />
              <circle cx="300" cy="20" r="3" />
              <path id="path-1"
                d="M59.611,210.013 C63.486,209.388 29.474,44.449 111.23,44.065 192.941,43.641 190.962,143.104 192.945,148.468 " />
            </svg>
          </div>
          <div class="svg-div-align">
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
          <div class="svg-div-align">
            <svg opacity="0" viewBox="-20 0 557 190" id="svg-4">
              <circle cx="100" cy="100" r="3" />
              <circle cx="300" cy="20" r="3" />
              <path id="path-4"
                d="M194.562,146.646 C198.437,146.027 191.414,65.184 273.17,64.797 354.881,64.377 355.64,204.907 357.623,210.271 " />
            </svg>
          </div>
          <div class="svg-div-align">
            <svg opacity="0" viewBox="-20 0 557 190" id="svg-5">
              <circle cx="100" cy="100" r="3" />
              <circle cx="300" cy="20" r="3" />
              <path id="path-5"
                d="M184.222,159.486 C185.508,146.837 189.184,80.202 213.859,79.196 245.093,77.899 311.252,152.292 315.258,160.518" />
            </svg>
          </div>
          <div class="svg-div-align">
            <svg opacity="0" viewBox="-20 0 557 190" id="svg-6">
              <circle cx="100" cy="100" r="3" />
              <circle cx="300" cy="20" r="3" />
              <path id="path-6"
                d="M212.575,164.579 C216.778,153.157 249.497,94.42 283.879,93.348 308.167,92.58 336.876,90.479 357.088,126.869" />
            </svg>
          </div>
          <img class="opacity-1  ingredient-my-1 h-20" src="/images/Asset-32-4x.png" alt="" />
          <img class="opacity-1  ingredient-my-2 h-20" src="/images/Asset-32-4x.png" alt="" />
          <img class="opacity-1  ingredient-my-3 h-20" src="/images/Asset-32-4x.png" alt="" />
          <img class="opacity-0  ingredient-my-4 h-20" src="/images/Asset-32-4x.png" alt="" />
          <img class="opacity-0  ingredient-my-5 h-20" src="/images/Asset-32-4x.png" alt="" />
          <img class="opacity-0  ingredient-my-6 h-20" src="/images/Asset-32-4x.png" alt="" />
        </div>
        <div class="elegance-text">
          <h2 class="elegance-text-2 font-bold text-xl">100 % Natural Actives* - Plant Based - Strengthen hair</h2>
        </div>
        <!-- <h2 class="calcium-custom-2">Calcium - 2</h2> -->
        <div class="absolute bottom-[9rem] w-screen">

          <h1 class="text-[6rem] calcium-custom-2 font-[1000] text-emerald-800  bg-transparent inset-x-0 tt-2"
            style="bottom: 12rem;
            text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),
              -1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);
          ">
            Calcium - 2
          </h1>
        </div>

        <!-- <h2 class="calcium-custom">Calcium</h2> -->
        <div class="absolute bottom-[9rem] w-screen">
          <h1 class="text-[6rem]  calcium-custom font-[1000] text-emerald-800  bg-transparent inset-x-0 tt-2" style="
              text-shadow: -1px -1px 0 #rgb(6 95 70), 1px -1px 0 #rgb(6 95 70),
                -1px 1px 0 #rgb(6 95 70), 1px 1px 0 #rgb(6 95 70);
            ">
            Calcium
          </h1>
        </div>

        <!-- <div class="absolute w-screen">
          <h4 class="text-6xl  font-extrabold text-secondary opacity-0 what-text">
            WHAT'S IN IT?</h4>
        </div> -->

        <div class="custom-circulating">
          <h1
            class="text-[2rem] circulating-text-1 opacity-0 absolute font-[1000] text-emerald-800  bg-transparent inset-x-0 tt-1">
            IMPROVES <br /> HAIR HEALTH
          </h1>
          <h1 class="text-[2rem] absolute font-[1000] text-orange-400 circulating-text-2 opacity-0  inset-x-0 tb-1 ">
            PROVIDES <br /> NUTRIENTS
          </h1>
          <h1
            class="text-[2rem] circulating-text-3 opacity-0 absolute font-[1000] text-emerald-800  bg-transparent inset-x-0 tt-2">
            DIET <br /> FRIENDLY
          </h1>
          <h1 class="text-[2rem] absolute font-[1000] opacity-0 circulating-text-4 text-orange-400  inset-x-0 tb-2 ">
            HELPS BUILDING <br /> COLLAGEN
          </h1>
        </div>
        <div class="custom-image opacity-0">
          <img width="100%" src="/images/raiyan-slider.jpg" alt="">
        </div>
      </div>


      <div id="showcase-section-1" style="--text-offset: 100rem" class="min-h-screen pt-16 relative border-blue-500">
        <h4 class="text-[2rem] believe-text font-extrabold text-secondary elegance-text-1">We believe in fixing the root
          cause, <br /> not quick results!</h4>
        <div id="showcase-images" class="relative h-[400px] mb-5">
          <!-- <div
            class="absolute origin-center shadow-xl inset-0 m-auto h-[300px] w-[300px] overflow-hidden rotate-[355deg]"> -->
          <!-- <img class="object-cover h-[300px] w-[300px]" src="https://placehold.co/300x300/43A190/FFFFFF/png" alt="" /> -->
          <!-- </div> -->
          <div class="absolute origin-center shadow-xl inset-0 m-auto h-[300px] w-[300px] overflow-hidden">
            <div class="tear"></div>
            <div class="object-cover h-[300px] w-[300px]" style="background-color: #43A190;"></div>
            <!-- <img class="object-cover h-[300px] w-[300px]" src="https://placehold.co/300x300/43A190/FFFFFF/png" alt="" /> -->
          </div>
          <div class="absolute origin-center shadow-xl inset-0 m-auto h-[300px] w-[300px] overflow-hidden rotate-[5deg]">
            <div class="tear"></div>
            <div class="object-cover h-[300px] w-[300px]" style="background-color: #F1917B;"></div>

            <!-- <img class="object-cover h-[300px] w-[300px]" src="https://placehold.co/300x300/F1917B/FFFFFF/png" alt="" /> -->
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

      <div class="container px-10 mx-auto">
        <div class="min-h-screen pt-16 relative border-blue-500 grid grid-cols-12 gap-4">
          <div class="col-span-8">
            <p class="text-neutral-950 text-2xl p-3 font-bold">Hair You Glo is for those who are looking for solutions to
              their hair
              health and want to look confident when they look in the mirror every morning! Hair
              you glo not only help you with your hair health but also help you regain your confidence in yourseld which
              has been shadowed by any reason related to hair
              as your personality is showcased first when you meet someone or present yourself!!
            </p>
            <br />

            <p class="text-neutral-950 text-2xl p-3 font-bold">Introducing our innovative hair health betterment product,
              carefully crafted with a blend of nature's
              finest ingredients such as Sea buckthorn extract, Gotu kola lead extract,
              Carrot, Amla, Lemon, Orange, Tomato fruit, Pomegranate extract, Grape seed, Ginger Rhizome extract,
              Fenugreek seeds extract, Cinnamon bark extract, Biotin: known

            </p>
          </div>
          <div class="col-span-4">
            <div class="h-[500px] w-[400px] bg-emerald-500 rounded-xl"></div>
          </div>
        </div>
      </div>



    </div>
  </div>
</template>

<style>
.custom-circulating {
  height: 100%;
  position: absolute;
  width: 100%;
  top: 36vh;
  margin-top: auto;
}

.custom-image {
  position: absolute;
}

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
