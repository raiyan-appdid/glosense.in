<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin.js";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
// gsap.defaults({ ease: "none", duration: 2 })

onMounted(() => {


    const tl = gsap.timeline();
    // tl.from('.a', { yPercent: -100 })

    ScrollTrigger.create({
        animation: tl,
        trigger: ".full-screen",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1
    })
    tl.from('.full-screen', {
        opacity: 0,
    });

    tl.from('.a', {
        y: -400,
        opacity: 0,
        rotate: 360,
        duration: 1,
    })
    tl.from('.elegance-text', {
        duration: 2,
        opacity: 0,
    })
    tl.to('.elegance-text', {
        duration: 2,
        opacity: 0,
    })
    tl.to('.a', {
        rotation: 720,
        duration: 1,
    })

    tl.from(".ingredient-my-1", {
        opacity: 0,
        duration: 2,
        motionPath: {
            path: "#path-1",
            curviness: 1,
            // autoRotate: true,
            align: '#path-1'
            // start: 0.25,
            // end: 1.5,
        }
    },7.5);
    tl.from(".ingredient-my-2", {
        opacity: 0,
        duration: 2,
        motionPath: {
            path: "#path-2",
            curviness: 1,
            // autoRotate: true,
            align: '#path-2'
            // start: 0.25,
            // end: 1.5,
        }
    }, 8.5);
    tl.from(".ingredient-my-3", {
        opacity: 0,
        duration: 2,
        motionPath: {
            path: "#path-3",
            curviness: 1,
            // autoRotate: true,
            align: '#path-3'
            // start: 0.25,
            // end: 1.5,
        }
    }, 9.5);
    tl.to(".ingredient-my-4", {
        opacity: 1,
        duration: 2,
        motionPath: {
            path: "#path-4",
            curviness: 1,
            // autoRotate: true,
            align: '#path-4'
            // start: 0.25,
            // end: 1.5,
        }
    }, 7.5);
    tl.to(".ingredient-my-5", {
        opacity: 1,
        duration: 2,
        motionPath: {
            path: "#path-5",
            curviness: 1,
            // autoRotate: true,
            align: '#path-5'
            // start: 0.25,
            // end: 1.5,
        }
    }, 8.5);
    tl.to(".ingredient-my-6", {
        opacity: 1,
        duration: 2,
        motionPath: {
            path: "#path-6",
            curviness: 1,
            // autoRotate: true,
            align: '#path-6'
            // start: 0.25,
            // end: 1.5,
        }
    }, 9.5);

    // tl.from('.b', {
    //     y: -400,
    //     opacity: 0,
    //     rotate: 360,
    //     duration: 2,
    // })
    // tl.from('.c', {
    //     y: -400,
    //     opacity: 0,
    //     rotate: 360,
    //     duration: 2,
    // })
})

</script>
<template>
    <div class="full-screen">
        <div class="elegance-text">
            <h2 class="elegance-text-1">Let' s begin with Elegance: <br> Our Hair Care Superblend</h2>
            <h2 class="elegance-text-2">100 % Natural Actives* - Plant Based - Strengthen hair</h2>
        </div>
        <div class="box a"><img class="custom-jar-width" src="/images/jar.png" alt=""></div>


        <div class="svg-align">
            <div class="svg-div-align">
                <svg opacity="0" viewBox="-20 0 557 190" id="svg-1">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    <path id="path-1"
                        d="M46.586,158.739 C50.461,158.123 67.635,28.761 149.387,28.363 231.105,27.969 201.263,147.542 203.215,152.853 " />
                </svg>
            </div>
            <div class="svg-div-align">
                <svg opacity="0" viewBox="-20 0 557 190" id="svg-2">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    <path id="path-2"
                        d="M122.596,104.107 C126.471,103.517 67.635,28.761 149.387,28.363 231.105,27.969 201.263,147.542 203.215,152.853 " />
                </svg>
            </div>
            <div class="svg-div-align">
                <svg opacity="0" viewBox="-20 0 557 190" id="svg-3">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    <path id="path-3"
                        d="M53.712,57.393 C57.587,56.793 67.635,28.761 149.387,28.363 231.105,27.969 201.263,147.542 203.215,152.853  " />
                </svg>
            </div>
            <div class="svg-div-align">
                <svg opacity="0" viewBox="-20 0 557 190" id="svg-4">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    <path id="path-4"
                        d="M201.772,153.196 C205.647,152.58 222.821,23.218 304.573,22.82 386.291,22.426 356.449,141.999 358.401,147.31" />
                </svg>
            </div>
            <div class="svg-div-align">
                <svg opacity="0" viewBox="-20 0 557 190" id="svg-5">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    <path id="path-5"
                        d="M201.772,153.196 C205.647,152.58 185.999,41.036 267.755,40.635 349.468,40.244 293.881,101.999 295.85,107.325 " />
                </svg>
            </div>
            <div class="svg-div-align">
                <svg opacity="0" viewBox="-20 0 557 190" id="svg-6">
                    <circle cx="100" cy="100" r="3" />
                    <circle cx="300" cy="20" r="3" />
                    <path id="path-6"
                        d="M201.772,153.196 C205.647,152.58 185.999,41.036 267.755,40.635 349.468,40.244 365.525,54.858 367.501,60.21  " />
                </svg>
            </div>
            <img class="opacity-1  ingredient-my-1 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-1  ingredient-my-2 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-1  ingredient-my-3 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0  ingredient-my-4 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0  ingredient-my-5 h-20" src="/images/Asset-32-4x.png" alt="" />
            <img class="opacity-0  ingredient-my-6 h-20" src="/images/Asset-32-4x.png" alt="" />
        </div>

        <!-- <div id="div">#div</div> -->
        <!-- 
        <div class="box b">b</div>
        <div class="box c">c</div> -->
    </div>
</template>
<style scoped>
.full-screen {
    height: 100vh;
    width: 100vw;
}

.svg-align {
    position: absolute;
    bottom: 0vh;
    right: -3vw;
    height: 100%;
    width: 100%;
}

.svg-div-align{
    position: absolute;
    top: 0;
    right: auto;
    height: 100%;
    width: 100%;
}

.custom-jar-width {
    scale: 2;
    /* max-width: 250px; */
}

.b {
    background-color: blue;
}

.c {
    background-color: green;
}

.box {
    /* margin: 500px; */
    margin: auto;
    position: absolute;
    top: 50vh;
    right: 50vw;
    height: 100px;
    width: 100px;
    /* background-color: black; */
    /* color: white; */
    text-align: center;
}

.elegance-text-1 {
    margin: auto;
    position: absolute;
    top: 34vh;
    right: 47vw;
    /* height: 100px; */
    /* width: 100px; */
    /* background-color: black; */
    /* color: white; */
    text-align: center;
}

/* .path-area {
    margin: auto;
    position: absolute;
    top: 44vh;
    right: 51vw;
    text-align: center;
} */

/* .ingredient-my-1 {
    margin: auto;
    position: absolute;
    top: 30vh;
    right: 77vw;
    text-align: center;
} */

.elegance-text-2 {
    margin: auto;
    position: absolute;
    top: 74vh;
    right: 39vw;
    /* height: 100px; */
    /* width: 100px; */
    /* background-color: black; */
    /* color: white; */
    text-align: center;
}

/* .c{
    margin-bottom: 200px;
} */
</style>