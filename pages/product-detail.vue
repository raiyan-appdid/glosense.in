<script setup>
function openModal() {
    let modal = document.getElementById('authentication-modal')
    modal.classList.remove('hidden');
}
</script>

<template>
    <HeaderCommon />

    <!-- Main modal -->
    <LoginModal />

    <div class="product-details px-3 md:px-8  mt-20 sm:mt-24 pb-20 bg-[#efe8df]">


        <h2 class="text-secondary text-2xl font-bold text-center py-2">Product</h2>
        <div class="container mx-auto">
            <div class="grid grid-cols-12 mt-2">
                <div class="col-span-12 sm:col-span-5">
                    <img src="/images/Product-page-top-image.png" class="sm:w-2/3" alt="" />
                    <div class="flex items-center justify-center sm:justify-start">
                        <div class="p-2 rounded-xl bg-primary w-1/4 h-1/4 m-2">
                            <img src="/images/jar.png" alt="" />
                        </div>
                        <div class="p-2 rounded-xl bg-primary w-1/4 h-1/4 m-2">
                            <img src="/images/jar.png" alt="" />
                        </div>
                        <div class="p-2 rounded-xl bg-primary w-1/4 h-1/4 m-2">
                            <img src="/images/jar.png" alt="" />
                        </div>
                    </div>
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
                </div>
            </div>

            <div class="my-5">
                <h2 class="font-bold">Solution For: </h2>
                <p>Solution For:
                    It looks like your message got cut off. Could you please provide more context or details about the
                    problem or situation you need a solution for?</p>
            </div>

            <div class="flex bg-white justify-between rounded-xl">
                <input type="text" name="" class="w-2/3 h-9 rounded-xl p-6" placeholder="Type your comments....."
                    id=""><button class="bg-white text-black my-auto text-sm font-extrabold p-2">ADD
                    COMMENT</button>
            </div>


            <div class="container my-20">
                <div class="grid grid-cols-12">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest">How to Use</h2>
                        <p>Introducing Glosense HairRevive Serum, your go-to solution for achieving healthy and strong hair
                            that shines with vitality. Crafted with care, this serum harnesses the power of nature and
                            science to rejuvenate your hair from within. Infused with a potent blend of essential oils,
                            vitamins, and active botanicals, HairRevive Serum nourishes the scalp, stimulates hair
                            follicles, and promotes natural growth.</p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:order-2">
                        <img src="/images/product-details-2.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                </div>

                <div class="grid grid-cols-12 my-10">
                    <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product-details-3.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                    <div class="sm:col-span-7 col-span-12 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest">How It Work</h2>
                        <p>Introducing Glosense HairRevive Serum, your go-to solution for achieving healthy and strong hair
                            that shines with vitality. Crafted with care, this serum harnesses the power of nature and
                            science to rejuvenate your hair from within. Infused with a potent blend of essential oils,
                            vitamins, and active botanicals, HairRevive Serum nourishes the scalp, stimulates hair
                            follicles, and promotes natural growth.</p>
                    </div>
                </div>

                <div class="grid grid-cols-12">
                    <div class="sm:col-span-7 col-span-12 order-2 sm:order-1 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest">What is it</h2>
                        <p>Introducing Glosense HairRevive Serum, your go-to solution for achieving healthy and strong hair
                            that shines with vitality. Crafted with care, this serum harnesses the power of nature and
                            science to rejuvenate your hair from within. Infused with a potent blend of essential oils,
                            vitamins, and active botanicals, HairRevive Serum nourishes the scalp, stimulates hair
                            follicles, and promotes natural growth.</p>
                    </div>
                    <div class="sm:col-span-5 col-span-12 order-1 sm:order-2">
                        <img src="/images/product-details-4.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                </div>

                <div class="grid grid-cols-12 my-10">
                    <div class="sm:col-span-5 col-span-12">
                        <img src="/images/product-details-5.png" class="sm:w-2/3 w-full" alt="" />
                    </div>
                    <div class="sm:col-span-7 col-span-12 sm:my-auto">
                        <h2 class="font-extrabold text-3xl tracking-widest">What to Expected</h2>
                        <p>Introducing Glosense HairRevive Serum, your go-to solution for achieving healthy and strong hair
                            that shines with vitality. Crafted with care, this serum harnesses the power of nature and
                            science to rejuvenate your hair from within. Infused with a potent blend of essential oils,
                            vitamins, and active botanicals, HairRevive Serum nourishes the scalp, stimulates hair
                            follicles, and promotes natural growth.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>