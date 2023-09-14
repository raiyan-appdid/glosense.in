<script setup>
const token = useCookie();

function openModal() {
    const token = useCookie();
    if (!token.value) {
        let modal = document.getElementById('authentication-modal')
        modal.classList.remove('hidden');
    }
    else {
        getUser();
        // gateWayIntegration();
        //cc avenue gateway.....
    }
}

function gateWayIntegration(name = null) {
    // alert(`Welcome ${name}! We are in the middle of Payment Gateway Integration.`);





}

const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;

// async function getSlider() {
//     const data = await useFetch(`${apiUrl}/slider`, {
//         headers: {
//             "accept": "application/json",
//             'Authorization': "Bearer " + token.value,
//         },
//         onResponse({ request, response, options }) {
//             console.log(response);
//         },
//         onRequestError({ request, options, error }) {
//             console.log(error);
//         },
//     });
//     getUser()
// }

async function getUser() {
    const data = await useFetch(`${apiUrl}/user-detail`, {
        headers: {
            "accept": "application/json",
            'Authorization': "Bearer " + token.value,
        },
        onResponse({ request, response, options }) {
            if (response._data.success) {
                console.log(response._data);
                const name = response._data.data.first_name;
                gateWayIntegration(name)
            }
        },
        onRequestError({ request, options, error }) {
            console.log(error);
        },
    });
}

onMounted(() => {
    // getSlider();
})

</script>

<template>
    <HeaderCommon />

    <!-- Main modal -->
    <LoginModal />

    <div class="product-details px-3 md:px-8  mt-20 sm:mt-24 pb-20 bg-[#efe8df]">
        <!-- <h2 class="text-secondary text-2xl font-bold text-center py-2">Product</h2> -->
        <div class="container mx-auto sm:pt-4">
            <div class="grid grid-cols-12 mt-2 sm:gap-4">
                <div class="col-span-12 sm:col-span-5">
                    <ProductImage />
                </div>
                <div class="col-span-12 sm:col-span-7">
                    <h2 class="font-extrabold text-3xl mt-4">Hair you glo for Healthy & Strong Hair</h2>
                    <p class="my-5">Introducing Glosense HairRevive Serum, your go-to solution for achieving healthy and
                        strong hair that
                        shines with vitality</p>
                    <div class="flex my-5">
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span><svg width="45" height="45" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab508"
                                    d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                            </svg></span>
                        <span class="text-2xl font bold my-auto ml-2">10 Reviews</span>
                    </div>
                    <div class="flex">
                        <span class="font-extrabold text-4xl">Rs. 899</span>
                        <span class="font-medium text-lg bg-red-300 p-2 mx-auto"><s>Rs.999</s> 10% Off</span>
                    </div>
                    <div class="flex my-6">
                        <!-- <button class="bg-slate-900 text-white py-4 px-10">Add To Cart</button> -->
                        <button @click="openModal"
                            class="bg-white text-black font-bold border border-black py-4 px-10 transition ease-in-out  hover:-translate-y-1 delay-75 hover:scale-110 hover:bg-black hover:text-white duration-500">Buy
                            Now</button>
                    </div>
                    <div class="flex">
                        <span class="font-extrabold sm:text-4xl text-2xl">Jar-120g (30 servings)</span>
                        <!-- <span class="font-medium sm:text-4xl text-2xl mx-auto"> Rs.899/-
                        </span> -->
                    </div>
                </div>
            </div>

            <div class="my-5">
                <h2 class="font-bold">Solution For: </h2>
                <p>Solution For:
                    It looks like your message got cut off. Could you please provide more context or details about the
                    problem or situation you need a solution for?</p>
            </div>

            <!-- <div class="flex bg-white justify-between rounded-xl">
                <input type="text" name="" class="w-2/3 h-9 rounded-xl p-6" placeholder="Type your comments....."
                    id=""><button class="bg-white text-black my-auto text-sm font-extrabold p-2">ADD
                    COMMENT</button>
            </div> -->


            <div class="container my-5">
                <div class="grid grid-cols-12">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 leading-8 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest">Helps in: </h2>
                        <p>-Maintaining a healthy scalp with improved blood circulation.<br />
                            -Encouraging better hair growth and helps prevent dandruff.<br />
                            -Cultivate Optimal Hair Follicle Health.<br />
                            -Reducing hair loss, and strengthening hair strands.
                        </p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:order-2">
                        <img src="/images/product-details-2.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                </div>

                <div class="grid grid-cols-12 my-1">
                    <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product-details-3.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                    <div class="sm:col-span-7 col-span-12 sm:my-auto leading-8">
                        <h2 class="font-extrabold text-3xl tracking-widest">How to use: </h2>
                        <p>-Blend ½ tablespoon of Hair-you-glo into your water. <br />
                            -Ensure it's well-mixed,have a sip & revel in the moment 🤙<br /> <br />
                            This jar contains 30 servings.

                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-12">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto leading-8">
                        <h2 class="font-extrabold text-3xl tracking-widest">WHEN TO USE:</h2>
                        <p>You can consume it any time of the day, but for better experience we suggest consuming it in the
                            morning.</p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:order-2">
                        <img src="/images/product-details-4.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                </div>

                <div class="grid grid-cols-12 my-1">
                    <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product-details-5.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                    <div class="sm:col-span-7 col-span-12 sm:my-auto leading-8">
                        <h2 class="font-extrabold text-3xl tracking-widest">STORAGE TIP:</h2>
                        <p>For best results, utilise a dry spoon when dealing with the mix, and be sure to seal the jars
                            tightly after usage to prevent solidification or lumps.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container py-5 leading-10">
                <h2 class="text-center text-3xl font-extrabold text-secondary">HOW IT WORKS:</h2>
                <h3 class=" text-2xl font-bold ">Effectively suppress DHT🌿:</h3>
                <p>Carrots and Amla, rich in Vitamin C, hydrate the scalp, prevent dryness, improve blood circulation, and
                    promote hair growth while suppressing DHT.
                </p>
                <h3 class=" text-2xl font-bold ">Maintains pH Level 🔗:
                </h3>
                <p>Lemon balances scalp pH, prevents dandruff, and fosters a healthy environment for hair follicles where
                    Fenugreek seeds enhance hair texture, shine, resilience, and support growth.
                </p>
                <h3 class=" text-2xl font-bold ">Improves Blood Circulation🧘:
                </h3>
                <p>Pomegranate and Orange, with vitamin E and antioxidants, boost scalp blood circulation, delivering
                    essential nutrients for healthier, thicker hair, while preventing oxidative stress and hair cell damage.
                </p>
                <h3 class=" text-2xl font-bold ">Supports Collagen Synthesis💫:
                </h3>
                <p>Aids in collagen synthesis, vital for maintaining hair's strength and structure, reducing hair thinning
                    and breakage.
                </p>
            </div>

            <div class="container py-5 leading-10">
                <h2 class="text-center text-3xl font-extrabold text-secondary">WHAT’S IN IT?</h2>
                <h3 class=" text-2xl font-bold ">AMLA:</h3>
                <p>Indian Gooseberry better known as Amla, contains Vitamin C, which is helpful to boost collagen for
                    healthy hair and improves blood circulation to prevent dryness.
                </p>
                <h3 class=" text-2xl font-bold ">ORANGE
                </h3>
                <p>A Citrus Fruit rich in vitamin E, an antioxidant that supports hair follicles, prevents oxidative stress,
                    and boosts hair health.
                </p>
                <h3 class=" text-2xl font-bold ">POMEGRANATE
                </h3>
                <p>Enhances hair elasticity, reduces breakage, and promotes growth for healthier hair.
                </p>
                <h3 class=" text-2xl font-bold ">SEA BUCKTHORN:
                </h3>
                <p>Packed with omega fatty acids, reduces inflammation, nourishes scalp and follicles, promotes hair growth,
                    and reduces hair loss.
                </p>
            </div>
            <div class="container py-5 leading-10">
                <h2 class="text-center text-3xl font-extrabold text-secondary">WHAT TO EXPECT:
                </h2>
                <h3 class=" text-2xl font-bold ">After 4 weeks:</h3>
                <p>Reduces hair fall and dandruff, minimises breakage and itchiness, while nourishing hair strands.
                </p>
                <h3 class=" text-2xl font-bold ">After 8 weeks:
                </h3>
                <p>Promotes healthy blood circulation, provides hydration to prevent dryness, and encourages the scalp to
                    maintain optimal oil and moisture levels.

                </p>
                <h3 class=" text-2xl font-bold ">After 12 weeks:
                </h3>
                <p>Reduces scalp inflammation and stress that leads to decreased hair fall, promoting visible root-level
                    hair growth, and boosts collagen production for enhanced hair elasticity.
                </p>
            </div>
            <!-- <div class="container py-5">
                <h2 class=" text-3xl font-extrabold text-secondary">Disclaimer:
                </h2>
                <h3 class=" text-2xl font-bold ">Take 1 serving daily or as directed by a healthcare professional. Store in
                    a cool, dry, dark place. Keep out of reach of children. Do not exceed recommended daily usage. Not
                    recommended during pregnancy. This product is not intended to diagnose, treat, cure, or prevent any
                    disease.
                </h3>
            </div> -->
        </div>



        <div class="product-review">
            <div class="container mx-auto">

                <!-- <div class="slider">
                    <img src="https://via.placeholder.com/1200x300" class="w-screen" alt="">
                </div> -->

                <div class="review">
                    <h2 class="text-secondary text-center font-bold text-2xl my-10">Customer Review</h2>


                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 sm:col-span-4">
                            <img src="/images/product-review-1.png" alt="" />
                        </div>
                        <div class="col-span-12 sm:col-span-8 my-auto">
                            <h2 class="font-bold text-xl">Hair you glo for Healthy & Strong Hair</h2>
                            <div class="flex my-2">
                                <span class="text-3xl font-extrabold my-auto mr-4">4.2</span>
                                <span><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#eab508"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <span><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#eab508"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <span><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#eab508"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <span><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#eab508"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <span><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#eab508"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                            </div>
                            <p>27 reviews</p>


                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">5</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-white rounded-xl my-auto">
                                    <div class="h-2 w-4/4 my-auto bg-primary rounded-lg"></div>
                                </div>
                                <span class="text-xs ml-3 mr-1">4000+</span>
                                <span class="text-xs font-bold">Vote</span>
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">4</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-white rounded-xl my-auto">
                                    <div class="h-2 w-3/4 my-auto bg-primary rounded-lg"></div>
                                </div>
                                <span class="text-xs ml-3 mr-1">3500+</span>
                                <span class="text-xs font-bold">Vote</span>
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">3</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-white rounded-xl my-auto">
                                    <div class="h-2 w-2/4 my-auto bg-primary rounded-lg"></div>
                                </div>
                                <span class="text-xs ml-3 mr-1">2000+</span>
                                <span class="text-xs font-bold">Vote</span>
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">2</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-white rounded-xl my-auto">
                                    <div class="h-2 w-1/3 my-auto bg-primary rounded-lg"></div>
                                </div>
                                <span class="text-xs ml-3 mr-1">1200+</span>
                                <span class="text-xs font-bold">Vote</span>
                            </div>
                            <div class="stars-slider w-full flex items-center">
                                <span class="my-auto text-xs font-bold">1</span>
                                <span class="my-auto ml-1 mr-2"><svg width="20" height="20" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="black"
                                            d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                    </svg></span>
                                <div class="slider-1 h-2 w-full bg-white rounded-xl my-auto">
                                    <div class="h-2 w-1/5 my-auto bg-primary rounded-lg"></div>
                                </div>
                                <span class="text-xs ml-3 mr-1">400+</span>
                                <span class="text-xs font-bold">Vote</span>
                            </div>
                        </div>
                    </div>

                    <h2 class="text-secondary text-center text-2xl font-bold my-10">Comment</h2>
                    <div class="container mx-auto">
                        <h5 class="font-bold">All Reviews
                            <span class=" text-md font-medium mr-2 px-2 py-0.5 rounded bg-secondary text-white">23</span>
                        </h5>
                        <hr class="bg-black my-5" />



                        <div class="grid grid-cols-12 pb-4">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/40" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Raiyan Memon</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">Had a fantastic experience using this service. The user interface
                                    was
                                    intuitive,
                                    and everything worked seamlessly. The only reason I'm not giving it a full 5 stars is
                                    because I encountered a minor bug that delayed my task by a few minutes. Overall, great
                                    platform!</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/41" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Afzal Shakh</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">The website is a bit confusing to navigate, and it took me a while
                                    to
                                    find what
                                    I was looking for. The overall experience was average, but I think there's room for
                                    improvement in terms of user-friendliness.</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/39" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Ishwari Pawar</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">Absolutely love this platform! The user interface is sleek and
                                    modern,
                                    making it
                                    a breeze to use. I've had a great time interacting with other users and the features
                                    offered
                                    are top-notch. 5 stars!</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/40" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Sarah Jonathan</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">The overall concept is interesting, but the execution falls a bit
                                    short.
                                    I
                                    encountered a few technical glitches while using the platform, which made the experience
                                    frustrating at times. With some improvements, this could be a much better service.</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 border-dashed border-t-2 py-4 border-secondary">
                            <div class="col-span-12 sm:col-span-5">
                                <div class="flex">
                                    <img src="https://i.pravatar.cc/41" class="rounded-full" alt="">
                                    <div class="ml-4">
                                        <h5 class="font-bold text-lg">Maria Dizoza</h5>
                                        <div class="flex">
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="orange"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                            <span><svg width="15" height="15" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill="white"
                                                        d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z" />
                                                </svg></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-7">
                                <p class="pt-3 sm:pt-0">I'm quite disappointed with this service. The website was slow to
                                    load,
                                    and I
                                    had trouble understanding how to use some of the features. It was a frustrating
                                    experience,
                                    and I'm not sure if I'll be using it again.</p>
                            </div>
                        </div>
                    </div>

                    <h2 class="text-secondary text-center text-2xl font-bold my-10">FAQ's</h2>
                    <div class="container mx-auto">
                        <p class="leading-10">◆ <span class="font-bold"> Why does one of my mixes look a little different in
                                colour from
                                my
                                previous order?</span><br />
                            ◆ <span class="font-bold"> Can I mix two mixes together?</span><br />
                            ◆ <span class="font-bold"> What is the best time to take consume?</span><br />
                            ◆ <span class="font-bold"> Can I consume products while pregnant or breastfeeding?</span><br />
                            ◆ <span class="font-bold"> What do I do if my package has been damaged?</span><br />
                            ◆ <span class="font-bold"> What do I do if some items in my order are missing?</span><br />
                            ◆ <span class="font-bold"> Who should I contact for queries/concerns related to products or
                                delivery?</span><br />
                            ◆ <span class="font-bold"> What to do if my payment has gone through but I haven’t received an
                                order
                                confirmation email?</span><br />
                            ◆ <span class="font-bold"> When will my order be dispatched?</span><br />
                            ◆ <span class="font-bold"> How long will the shipping take?</span><br />
                            ◆ <span class="font-bold"> What is the refund and return policy at ?</span><br />
                            ◆ <span class="font-bold"> Is Glosense vegan/vegetarian-friendly?</span><br />
                            ◆ <span class="font-bold"> Are there any side effects associated with Glosense?</span><br />
                            ◆ <span class="font-bold"> Can Glosense be used by both men and women?</span><br />
                            ◆ <span class="font-bold"> When can I expect to see results?</span><br />
                            ◆ <span class="font-bold"> Is Glosense safe to use?</span><br />
                            ◆ <span class="font-bold"> What is Glosense, and how does it work?</span><br />

                        </p>
                    </div>

                </div>



            </div>
        </div>

    </div>
</template>