<script setup>

const whatInIt = ref(true);
const whatToExpect = ref(false);
const storageTip = ref(false);
const howItWork = ref(false);


function whatsInItFunction() {
    whatInIt.value = true;
    whatToExpect.value = false;
    storageTip.value = false;
    howItWork.value = false;
    const val = document.getElementById('tab-scroll-container');
    val.scrollTo(0, window.scrollY);
}

function whatToExpectFunction() {
    whatToExpect.value = true;
    whatInIt.value = false;
    storageTip.value = false;
    howItWork.value = false;
    const val = document.getElementById('tab-scroll-container');
    val.scrollTo(120, window.scrollY);
}
function storageTipFunction() {
    whatToExpect.value = false;
    whatInIt.value = false;
    storageTip.value = true;
    howItWork.value = false;
    const val = document.getElementById('tab-scroll-container');
    val.scrollTo(240, window.scrollY);
}
function howItWorkFunction() {
    whatToExpect.value = false;
    whatInIt.value = false;
    storageTip.value = false;
    howItWork.value = true;
    const val = document.getElementById('tab-scroll-container');
    val.scrollTo(360, window.scrollY);
}
</script>
<template>
    <div class="bg-[#eafdf3] px-1 sm:py-4">
        <div class="w-full">
            <div class="flex py-4 md:!flex overflow-scroll sm:overflow-hidden justify-center" id="tab-scroll-container"
                style="display: -webkit-box;">
                <p @click="whatsInItFunction"
                    class="p-2 mx-1 border border-secondary rounded cursor-pointer text-lg font-bold sm:inline-block"
                    style="display: -webkit-box;" :class="[{ 'bg-secondary text-white ': whatInIt }]">
                    What's
                    In
                    It ?</p>
                <p @click="whatToExpectFunction"
                    class="p-2 mx-1 border border-secondary rounded cursor-pointer text-lg font-bold sm:inline-block"
                    style="display: -webkit-box;" :class="[{ ' bg-secondary text-white': whatToExpect }]">
                    What To Expect
                    ?
                </p>
                <!-- <p @click="storageTipFunction"
                    class="p-2 mx-1 border border-secondary rounded cursor-pointer text-lg font-bold sm:inline-block"
                    style="display: -webkit-box;" :class="[{ ' bg-secondary text-white': storageTip }]">
                    STORAGE TIP
                </p> -->
                <p @click="howItWorkFunction"
                    class="p-2 mx-1 border border-secondary rounded cursor-pointer text-lg font-bold sm:inline-block"
                    style="display: -webkit-box;" :class="[{ ' bg-secondary text-white': howItWork }]">
                    How It Works ?
                </p>
            </div>
        </div>
        <div class="whats-in-it py-4" v-show="whatInIt">
            <div class="grid grid-cols-12">
                <div class="col-span-3 flex items-center justify-center">
                    <img src="/public/images/Ingradients-photos-04.png" class="w-2/3 sm:w-2/6" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-2xl text-lg font-extrabold">AMLA:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">Indian Gooseberry better known as
                        Amla,
                        contains
                        Vitamin C,
                        which is
                        helpful to boost
                        collagen for
                        healthy hair and improves blood circulation to prevent dryness.</p>

                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 flex items-center justify-center">
                    <img src="/public/images/Ingradients-photos-01.png" class="w-2/3 sm:w-2/6" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-2xl text-lg font-extrabold">ORANGE:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">A Citrus Fruit rich in vitamin E,
                        an
                        antioxidant that supports
                        hair
                        follicles,
                        prevents
                        oxidative stress,
                        and boosts hair health.</p>

                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 flex items-center justify-center">
                    <img src="/public/images/Ingradients-photos-07.png" class="w-2/3 sm:w-2/6" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-2xl text-lg font-extrabold">POMEGRANATE:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">Enhances hair elasticity, reduces
                        breakage, and promotes growth
                        for
                        healthier hair.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 flex items-center justify-center">
                    <img src="/public/images/Ingradients-photos-10.png" class="w-2/3 sm:w-2/6" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-2xl text-lg font-extrabold">SEA BUCKTHORN:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">Packed with omega fatty acids,
                        reduces
                        inflammation, nourishes
                        scalp and
                        follicles,
                        promotes hair growth,
                        and reduces hair loss.</p>
                </div>
            </div>
        </div>

        <div class="what-to-expect py-4" v-show="whatToExpect">
            <div class="grid grid-cols-12">
                <!-- <div class="col-span-3">
                </div> -->
                <div class="col-span-12">

                    <img class="block md:hidden px-5" src="/images/mobile timeline@2x.png" alt="" />
                    <img class="hidden md:block px-10" src="/images/timeline@2x.png" alt="" />


                    <!-- <p class="text-secondary sm:text-2xl text-lg font-extrabold">- After 4 weeks:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">Reduces hair fall and dandruff,
                        minimises breakage and
                        itchiness, while
                        nourishing hair
                        strands.</p>

                    <p class="text-secondary sm:text-2xl text-lg font-extrabold">- After 8 weeks:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">Reduces scalp inflammation and
                        stress
                        that leads to decreased
                        hair fall,
                        promoting
                        visible root-level
                        hair growth, and boosts collagen production for enhanced hair elasticity.</p>
                    <p class="text-secondary sm:text-2xl text-lg font-extrabold">- After 12 weeks:</p>
                    <p class="text-md leading-5 sm:text-xl text-black font-semibold">Reduces scalp inflammation and
                        stress
                        that leads to decreased
                        hair fall,
                        promoting
                        visible root-level
                        hair growth, and boosts collagen production for enhanced hair elasticity.
                    </p> -->
                    <!-- </div>
                    </div> -->
                </div>
            </div>


        </div>

        <div class="what-to-expect py-4" v-show="storageTip">
            <p class="text-black sm:text-2xl text-lg font-extrabold mx-2 sm:mx-4">For best results, utilise a dry
                spoon when
                dealing with the mix, and
                be sure to seal the jars
                tightly after usage to prevent solidification or lumps.
            </p>
        </div>
        <div class="what-to-expect mx-8 py-4" v-show="howItWork">
            <h3 class=" text-secondary sm:text-2xl text-lg font-extrabold ">-Effectively suppress DHT🌿:</h3>
            <p class="text-md leading-5 sm:text-xl text-black font-semibold">Carrots and Amla, rich in Vitamin C,
                hydrate
                the scalp, prevent
                dryness, improve blood
                circulation, and
                promote hair growth while suppressing DHT.
            </p>
            <h3 class=" text-secondary sm:text-2xl text-lg font-extrabold mt-4">-Maintains pH Level 🔗:
            </h3>
            <p class="text-md leading-5 sm:text-xl text-black font-semibold">Lemon balances scalp pH, prevents dandruff,
                and
                fosters a healthy
                environment for hair
                follicles where
                Fenugreek seeds enhance hair texture, shine, resilience, and support growth.
            </p>
            <h3 class=" text-secondary sm:text-2xl text-lg font-extrabold mt-4">-Improves Blood Circulation🧘:
            </h3>
            <p class="text-md leading-5 sm:text-xl text-black font-semibold">Pomegranate and Orange, with vitamin E and
                antioxidants, boost scalp
                blood circulation,
                delivering
                essential nutrients for healthier, thicker hair, while preventing oxidative stress and hair cell damage.
            </p>
            <h3 class=" text-secondary sm:text-2xl text-lg font-extrabold mt-4">-Supports Collagen Synthesis💫:
            </h3>
            <p class="text-md leading-5 sm:text-xl text-black font-semibold">Aids in collagen synthesis, vital for
                maintaining hair's strength and
                structure, reducing
                hair thinning
                and breakage.
            </p>
        </div>

    </div>
</template>