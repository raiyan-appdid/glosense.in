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



const token = useCookie('token');
const count = ref(1);
const counter = useCounter()

function incrementCount() {
    counter.value++;
}

function decrementCount() {
    if (counter.value > 1) {
        counter.value--;
    }
}

function openModal() {
    const token = useCookie('token');
    if (!token.value) {
        let modal = document.getElementById('authentication-modal')
        modal.classList.remove('hidden');
    }
    else {
        getUser();
        gateWayIntegration();
        //cc avenue gateway.....
    }
}

function gateWayIntegration(name = null) {
    return navigateTo('billing-details')
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

    <div class="product-details px-6 md:px-8  mt-24 pt-4 sm:mt-24 pb-20 bg-[#efe8df]">
        <!-- <h2 class="text-secondary text-2xl font-bold text-center py-2">Product</h2> -->
        <div class="container mx-auto sm:pt-4">
            <div class="grid grid-cols-12 mt-2 sm:gap-4">
                <div class="col-span-12 sm:col-span-5">
                    <ProductImage />
                </div>
                <div class="col-span-12 sm:col-span-7">
                    <h2 class="font-extrabold text-secondary text-4xl mt-4 ">HAIR YOU GLO</h2>
                    <!-- <h2 class="font-semibold text-black text-xl">FOR HEALTHY & STRONG HAIR</h2> -->
                    <p class="font-semibold text-lg my-2">YOUR GO-TO SOLUTION FOR HEALTHY & STRONGER HAIR
                    </p>
                    <!-- <div class="flex my-5">
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
                    </div> -->
                    <div class="flex">
                        <span class="sm:text-2xl  ">Jar-120g (30 servings)</span>
                    </div>
                    <div class="flex">
                        <span class="font-extrabold text-secondary mt-6 text-3xl mr-9">Rs. 1299 /-</span>
                        <!-- <span class="font-extrabold text-secondary mt-6 text-3xl">870</span> -->
                    </div>
                    <div>
                        <p class="font-semibold">(FLAT 10% OFF with Promo Code 'SUPERDIWALI')</p>
                    </div>
                    <!-- <div class="flex">
                        <p class="text-primary font-medium text-lg mt-3">( Get it at <span class="text-secondary">Rs.
                                870</span> - apply "FIRSTJAR" promo code)</p>
                    </div> -->
                    <div class="flex mt-6">
                        <button @click="openModal"
                            class="bg-secondary mr-5 text-white text-xl font-bold border  py-3 px-7 transition ease-in-out  hover:-translate-y-1 delay-75 hover:scale-110 hover:bg-black hover:text-white duration-500">BUY
                            NOW</button>
                        <span class="my-auto bg-primary px-3 text-white py-1 ml-1 cursor-pointer"
                            @click="decrementCount">-</span>
                        <input type="number" v-model="counter"
                            class="w-[3rem] text-2xl text-center border bg-secondary text-white hover:border-secondary border-3 focus:outline-none"
                            name="" id="">
                        <span class="my-auto bg-primary px-3 cursor-pointer text-white py-1 mr-1"
                            @click="incrementCount">+</span>

                    </div>

                </div>
            </div>
            <div class="my-10 sm:block hidden">
                <!-- <h2>raiyan</h2> -->
                <img src="/images/product/Desktop-product-page-banner.png" alt="" />
            </div>
            <div class="my-10 sm:hidden block">
                <!-- <h2>raiyan</h2> -->
                <img src="/images/product/Mobile-product-page-banner.png" alt="" />
            </div>

            <!-- <div class="my-5">
                <h2 class="font-bold">Solution For: </h2>
                <p>Solution For:
                    It looks like your message got cut off. Could you please provide more context or details about the
                    problem or situation you need a solution for?</p>
            </div> -->

            <!-- <div class="flex bg-white justify-between rounded-xl">
                <input type="text" name="" class="w-2/3 h-9 rounded-xl p-6" placeholder="Type your comments....."
                    id=""><button class="bg-white text-black my-auto text-sm font-extrabold p-2">ADD
                    COMMENT</button>
            </div> -->


            <div class="container mx-auto my-10 sm:my-5">
                <div class="grid grid-cols-12 mb-9 sm:mb-0">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest text-secondary">HELPS IN: </h2>
                        <p class="leading-2 text-xl sm:text-2xl text-justify">-Maintaining a healthy scalp with improved
                            blood
                            circulation.
                        <p class="leading-2 text-xl sm:text-2xl text-justify my-3">-Encouraging better hair growth and helps
                            prevent dandruff.</p>
                        <p class="leading-2 text-xl sm:text-2xl text-justify">-Cultivate Optimal Hair Follicle Health.</p>
                        <p class="leading-2 text-xl sm:text-2xl text-justify my-3">-Reducing hair loss, and strengthening
                            hair
                            strands.</p>
                        </p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:flex sm:justify-end sm:order-2">
                        <!-- <img src="/images/product-details1.png" class="sm:w-2/4 w-4/6 mx-auto" alt=" " /> -->
                        <img src="/images/product/product-details-4.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />
                    </div>
                </div>

                <div class="grid grid-cols-12 my-10 sm:my-1">
                    <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product/product-details-3.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />
                    </div>
                    <div class="sm:col-span-7 col-span-12 sm:my-auto">
                        <h2 class="font-extrabold text-3xl text-secondary tracking-widest">HOW TO USE: </h2>
                        <p class="leading-2 text-xl text-justify sm:text-2xl">-Blend ½ tablespoon of Hair-you-glo into your
                            water.
                        <p class="leading-2 text-xl text-justify sm:text-2xl my-3">-Ensure it's well-mixed,have a sip &
                            revel in
                            the moment 🤙</p>

                        <p class="leading-2 text-xl text-justify sm:text-2xl"></p>

                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-12">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto">
                        <h2 class="font-extrabold text-3xl my-3 text-secondary tracking-widest">WHEN TO USE:</h2>
                        <p class="leading-2 text-xl text-justify sm:text-2xl">You can consume it any time of the day, but
                            for better experience we
                            suggest consuming it in the
                            morning.</p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:flex sm:justify-end sm:order-2">
                        <img src="/images/product/product-details-5.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />

                    </div>
                </div>

                <div class="my-10 sm:my-1">
                    <!-- <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product/product-details-5.png" class="sm:w-2/4 w-4/6 mx-auto" alt="" />
                    </div> -->
                    <div class="">
                        <h2 class="font-extrabold text-3xl tracking-widest text-secondary text-center my-3">STORAGE TIP:
                        </h2>
                        <p class="leading-2 text-xl text-center sm:text-2xl">For best results, utilise a dry
                            spoon when
                            dealing with the mix, and
                            be sure to seal the jars
                            tightly after usage to prevent solidification or lumps.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto">
                <h2 class="text-center text-3xl font-extrabold text-secondary mt-10 mb-3">HOW IT WORKS:</h2>
                <h3 class=" text-2xl font-bold ">-Effectively suppress DHT🌿:</h3>
                <p class="text-xl">Carrots and Amla, rich in Vitamin C, hydrate the scalp, prevent dryness, improve blood
                    circulation, and
                    promote hair growth while suppressing DHT.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-Maintains pH Level 🔗:
                </h3>
                <p class="text-xl">Lemon balances scalp pH, prevents dandruff, and fosters a healthy environment for hair
                    follicles where
                    Fenugreek seeds enhance hair texture, shine, resilience, and support growth.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-Improves Blood Circulation🧘:
                </h3>
                <p class="text-xl">Pomegranate and Orange, with vitamin E and antioxidants, boost scalp blood circulation,
                    delivering
                    essential nutrients for healthier, thicker hair, while preventing oxidative stress and hair cell damage.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-Supports Collagen Synthesis💫:
                </h3>
                <p class="text-xl">Aids in collagen synthesis, vital for maintaining hair's strength and structure, reducing
                    hair thinning
                    and breakage.
                </p>
            </div>

            <div class="container mx-auto">
                <h2 class="text-center text-3xl font-extrabold text-secondary mt-10 mb-3">WHAT’S IN IT?</h2>
                <h3 class=" text-2xl font-bold mt-4">-AMLA:</h3>
                <p class="text-xl">Indian Gooseberry better known as Amla, contains Vitamin C, which is helpful to boost
                    collagen for
                    healthy hair and improves blood circulation to prevent dryness.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-ORANGE
                </h3>
                <p class="text-xl">A Citrus Fruit rich in vitamin E, an antioxidant that supports hair follicles, prevents
                    oxidative stress,
                    and boosts hair health.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-POMEGRANATE
                </h3>
                <p class="text-xl">Enhances hair elasticity, reduces breakage, and promotes growth for healthier hair.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-SEA BUCKTHORN:
                </h3>
                <p class="text-xl">Packed with omega fatty acids, reduces inflammation, nourishes scalp and follicles,
                    promotes hair growth,
                    and reduces hair loss.
                </p>
            </div>
            <div class="container mx-auto">
                <h2 class="text-center text-3xl font-extrabold text-secondary mt-10">WHAT TO EXPECT:
                </h2>
                <h3 class=" text-2xl font-bold">-After 4 weeks:</h3>
                <p class="text-xl">Reduces hair fall and dandruff, minimises breakage and itchiness, while nourishing hair
                    strands.
                </p>
                <h3 class=" text-2xl font-bold mt-4">-After 8 weeks:
                </h3>
                <p class="text-xl">Promotes healthy blood circulation, provides hydration to prevent dryness, and encourages
                    the scalp to
                    maintain optimal oil and moisture levels.

                </p>
                <h3 class=" text-2xl font-bold mt-4" id="faq-redirect">-After 12 weeks:
                </h3>
                <p class="text-xl">Reduces scalp inflammation and stress that leads to decreased hair fall, promoting
                    visible root-level
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
                    <!-- <h2 class="text-secondary text-center font-bold text-4xl my-10">Customer Reviews</h2>

                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 sm:col-span-4 ">
                            <img class="w-3/4 mx-auto" src="/images/jar2.png" alt="" />
                        </div>
                        <div class="col-span-12 sm:col-span-8 my-auto">
                            <h2 class="font-bold text-xl">Hair you glo for Healthy & Strong Hair</h2>
                            <div class="flex my-2">
                            </div>
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

                    <h2 class="text-secondary text-center text-2xl font-bold my-10">Comments</h2>
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
                    </div> -->

                    <h2  class="text-secondary text-center text-3xl font-bold mt-10 mb-2">HAVE DOUBT’S? <br />
                        WE HAVE GOT ANSWERS TO THEM!!
                    </h2>

                    <div class="container mx-auto">
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Will my hair fall reduce by using
                                Hair-You-Glo? How
                                will it work?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Yes, Hair-You-Glo is crafted in such a way that will help those who are experiencing
                                    hair
                                    fall/hair loss.Carrots and Amla, rich in Vitamin C, hydrate the scalp, prevent dryness,
                                    improve
                                    blood circulation, and promote hair growth while suppressing DHT.<br />
                                    Gotu Kola Leaf Extract & Fenugreek Seed Extract aids in collagen synthesis, vital for
                                    maintaining hair's strength and structure, reducing hair thinning and breakage.
                                    Sea Buckthorn Extract is a powerhouse of omega fatty acids that nourish hair follicles,
                                    promoting healthy hair growth and reducing hair loss.</p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Can I mix two mixes together?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Dandruff is often caused by dry skin or skin conditions. Since the hair follicle
                                    forms from the
                                    surface of your skin, skin health is equally important when it comes to healthier
                                    hair.<br />
                                    Hair-You-Glo combats this by including ingredients high in antioxidants such as Amla
                                    which keeps
                                    the skin hydrated.Cinnamon Bark Extract & Gotu Kola Leaf Extract which contains
                                    antimicrobial
                                    properties that maintain a healthy scalp environment, reducing the risk of dandruff and
                                    infections</p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Will my hair fall come back if I stop consuming Hair-You-Glo?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>This may be different for each individual. If this superblend helps you with your
                                    hair fall and you’re looking to discontinue usage of this product while maintaining your
                                    hair
                                    health, we would recommend slowly decreasing the dose of Hair-You-Glo after experiencing
                                    visible
                                    positive changes.<br />
                                    If you are maintaining a healthy diet, lifestyle, managing stress effectively, and still
                                    experiencing hair fall after discontinuing this product, you might be experiencing a
                                    chronic,
                                    auto-immune, or hormone-related condition, and as a result, experiencing hair fall as a
                                    symptom.
                                    Hair-You-Glo is a safe product for long-term use and while some only need it
                                    temporarily, it is
                                    safe to consume daily.</p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                What is the best time to consume?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>You can consume it any time of the day, but for better experience we suggest
                                    consuming it in the morning as your first drink.</p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Can I consume products while pregnant or breastfeeding?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>No,we don’t recommend & suggest consuming our products while being pregnant or
                                    breastfeeding.</p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                What do I do if my package has been damaged?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Our parcels are packed carefully for every order, however shipping can increase a
                                    slight chance that some might get damaged.Please read our return/refund policy,take an
                                    unboxing
                                    video, and write to us at <a href="mailto:connect@glosense.in">connect@glosense.in</a>
                                    for
                                    further assistance.</p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                What do I do if some items in my order are missing?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>We undergo a strict quality control procedure for every order before being
                                    dispatched. However, if the items are different from what you ordered or if some items
                                    are
                                    missing, please read our return/refund policy, take an unboxing video, and write to us
                                    at
                                    <a href="mailto:connect@glosense.in">connect@glosense.in</a> for further assistance.
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Who should I contact for queries/concerns related to products or
                                delivery?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>You will be sent an order confirmation email along with your tracking details once
                                    dispatched. However, if you have any concerns over your order status, please feel free
                                    to reach
                                    out to us at <a href="mailto:connect@glosense.in">connect@glosense.in</a> and our
                                    customer
                                    support team will be happy to help you!
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                What to do if my payment has gone through but I haven’t received
                                an order confirmation email?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>In case your payment has gone through, please check your spam folder for an order
                                    confirmation email. If you do not find the email, please reach out to us at <a
                                        href="mailto:connect@glosense.in">connect@glosense.in</a>
                                    and our customer support team will be happy to help you!
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                When will my order be dispatched?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Your order will be dispatched 24 to 48 hours after placing your order post which you
                                    will receive an email with your tracking details.
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                How long will the shipping take?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>You can expect a standard shipping time of 2 to 8 business days as mentioned during
                                    checkout!
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                What is the refund and return policy?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>It is important to keep in mind that as a company in the food industry, we have
                                    strict return/refund policies. So please go through our return/refund policy here. If
                                    you feel
                                    like you need more assistance, please feel free to drop in an email to <a
                                        href="mailto:connect@glosense.in">connect@glosense.in</a> :)
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Is Glosense vegan/vegetarian-friendly?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>As our product is 100% plant based it is safe to say it is vegetarian friendly.
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Are there any side effects associated with Glosense?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>At Glosense, we care about your well-being. Our Glosense is plant-based and designed
                                    for a healthy lifestyle.But incarse if you ever experience discomfort, contact us at
                                    <a href="mailto:connect@glosense.in">connect@glosense.in</a>. We're here to help.
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Can Glosense be used by both men and women?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>Yes, Our product is crafted in such a way which is useful for both men & women.
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                When can I expect to see results?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>The journey to experiencing the benefits of Hair-you-glo can be unique for each
                                    person. We encourage you to use our product consistently to discover the results that
                                    align with
                                    your personal wellness goals.One can see results within 8-10 weeks of regular use.
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                Is Glosense safe to use?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>As our product is all plant based with 100% natural ingredients used,we can conclude
                                    that all products of glosense are safe to use:)
                                </p>
                            </div>
                        </details>
                        <details class=" rounded-lg mb-3">
                            <summary class="font-bold text-xl leading-6 text-black cursor-pointer">
                                What is Glosense, and how does it work?
                            </summary>
                            <div class="mt-1 leading-6 text-black">
                                <p>At Glosense we are a nutraceutical brand, we're all about enhancing your well-being
                                    through nature's gifts. Our plant-based superblends offer a holistic approach to health,
                                    elevating your hair, skin, gut, and stress management.We encourage you to explore the
                                    world of
                                    plant-based superblends and discover how they can transform your life.Embrace the power
                                    of
                                    plant-based superblends, and experience the incredible transformation they can bring to
                                    your
                                    life.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>