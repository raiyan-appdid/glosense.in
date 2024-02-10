<script setup>

const whatInIt = ref(true);
const whatToExpect = ref(false);


function whatsInItFunction() {
    whatInIt.value = true;
}

function whatToExpectFunction() {
    whatInIt.value = false;
}

</script>
<template>
    <div class="bg-primary px-1 py-4">
        <div class="flex justify-center">
            <p @click="whatsInItFunction"
                :class="[{ 'p-2 bg-secondary text-white border border-secondary rounded text-lg font-bold cursor-pointer': whatInIt }, { 'p-2 text-black border border-secondary rounded text-lg font-bold mx-3 cursor-pointer': !whatInIt }]">
                What's
                In
                It ?</p>
            <p @click="whatToExpectFunction"
                :class="[{ 'p-2 bg-secondary text-white border border-secondary rounded text-lg font-bold cursor-pointer': !whatInIt }, { 'p-2 text-black border border-secondary rounded text-lg font-bold mx-3 cursor-pointer': whatInIt }]">
                What To Expect
                ?
            </p>
        </div>
        <div class="whats-in-it" v-if="whatInIt">
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-04.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">AMLA:</p>
                    <p class="text-sm sm:text-3xl">Indian Gooseberry better known as Amla, contains Vitamin C, which is
                        helpful to boost
                        collagen for
                        healthy hair and improves blood circulation to prevent dryness.</p>

                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-07.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">ORANGE:</p>
                    <p class="text-sm sm:text-3xl">A Citrus Fruit rich in vitamin E, an antioxidant that supports hair
                        follicles,
                        prevents
                        oxidative stress,
                        and boosts hair health.</p>

                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-02.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">POMEGRANATE:</p>
                    <p class="text-sm sm:text-3xl">Enhances hair elasticity, reduces breakage, and promotes growth for
                        healthier hair.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-03.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">SEA BUCKTHORN:</p>
                    <p class="text-sm sm:text-3xl">Packed with omega fatty acids, reduces inflammation, nourishes scalp and
                        follicles,
                        promotes hair growth,
                        and reduces hair loss.</p>
                </div>
            </div>
        </div>

        <div class="what-to-expect" v-else>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-04.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">After 4 weeks:</p>
                    <p class="text-sm sm:text-3xl">Reduces hair fall and dandruff, minimises breakage and itchiness, while
                        nourishing hair
                        strands.</p>

                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-07.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">After 8 weeks:</p>
                    <p class="text-sm sm:text-3xl">Reduces scalp inflammation and stress that leads to decreased hair fall,
                        promoting
                        visible root-level
                        hair growth, and boosts collagen production for enhanced hair elasticity.</p>

                </div>
            </div>
            <div class="grid grid-cols-12 mt-4">
                <div class="col-span-3 inline sm:flex justify-center">
                    <img src="/public/images/Ingradients-02.png" class="w-full sm:w-2/4" alt="">
                </div>
                <div class="col-span-9">
                    <p class="text-secondary sm:text-4xl text-lg font-bold">After 12 weeks:</p>
                    <p class="text-sm sm:text-3xl">Reduces scalp inflammation and stress that leads to decreased hair fall,
                        promoting
                        visible root-level
                        hair growth, and boosts collagen production for enhanced hair elasticity.
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>