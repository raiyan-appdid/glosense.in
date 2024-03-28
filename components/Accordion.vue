<template>
    <!-- This is an example component -->
    <div class='flex items-center justify-center'>
        <div class='w-full rounded-lg'>
            <details class="w-full cursor-pointer accordian">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">HELPS IN:</span>
                </summary>
                <div class="flex gap-4 p-6">
                    <img class="w-12" src="/public/images/what-1.png" alt="">
                    <p class=" text-lg leading-5 font-normal text-black sm:text-2xl mb-2">-Maintaining a healthy scalp
                        with
                        improved
                        blood
                        circulation.</p>
                </div>
                <div class="flex gap-4 p-6 pt-0">
                    <img class="w-12" src="/public/images/what-2.png" alt="">
                    <p class=" text-lg leading-5 font-normal text-black sm:text-2xl mb-2">-Encouraging better hair
                        growth
                        and
                        helps
                        prevent dandruff.</p>
                </div>
                <div class="flex gap-4 p-6 pt-0">
                    <img class="w-12" src="/public/images/what-3.png" alt="">
                    <p class=" text-lg leading-5 font-normal text-black sm:text-2xl mb-2">-Cultivate Optimal Hair
                        Follicle
                        Health.</p>
                </div>
                <div class="flex gap-4 p-6 pt-0">
                    <img class="w-12" src="/public/images/what-4.png" alt="">
                    <p class=" text-lg leading-5 font-normal text-black sm:text-2xl mb-2">-Reducing hair loss, and
                        strengthening
                        hair
                        strands.</p>
                </div>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div>
            <details class="w-full cursor-pointer accordian">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">HOW TO USE:</span>
                </summary>

                <div class="grid grid-cols-3 mt-1 gap-5">
                    <div>
                        <img class="" src="/public/images/when-1.png" alt="">
                        <div>
                            <p class="bg-primary mt-2 p-1 text-white text-center leading-5 font-bold">Add 1 scoop into a
                                glass</p>
                        </div>
                    </div>
                    <div>
                        <img class="" src="/public/images/when-2.png" alt="">
                        <div>
                            <p class="bg-primary mt-2 p-1 text-white text-center leading-5 font-bold">Add some water</p>
                        </div>
                    </div>
                    <div>
                        <img class="" src="/public/images/when-3.png" alt="">
                        <div>
                            <p class="bg-primary mt-2 py-3 md:py-1 md:p-1 text-white text-center leading-5 font-bold">
                                Mix it well
                            </p>
                        </div>
                    </div>
                </div>
                <div class="mt-2">
                    <p class="font-extrabold text-md">WHEN TO USE:</p>
                    <p class="font-semibold leading-5">You can consume it any time of the
                        day, but
                        for better experience we
                        suggest consuming it in the
                        morning.</p>
                </div>
                <div class="mt-2">
                    <p class="font-extrabold text-md">STORAGE TIP</p>
                    <p class="font-semibold leading-5">For best results, utilise a dry spoon when dealing with the mix,
                        and be sure to seal the jars tightly after usage to prevent solidification or lumps.</p>
                </div>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div>

            <div class="video-container justify-start md:justify-center mt-7 mb-8">
                <video controls muted autoplay loop class="rounded-xl w-36 md:w-60"
                    src="/public/images/Testimonial-1.mp4"></video>
                <video controls muted autoplay loop class="rounded-xl w-36 md:w-60"
                    src="/public/images/Testimonial-2.mp4"></video>
                <video controls muted autoplay loop class="rounded-xl w-36 md:w-60"
                    src="/public/images/Testimonial-3.mp4"></video>
                <video controls muted autoplay loop class="rounded-xl w-36 md:w-60"
                    src="/public/images/Testimonial-4.mp4"></video>
            </div>

            <!-- <details class="w-full cursor-pointer accordian">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">WHEN TO USE:</span>
                </summary>
                <p class="">
                <p class=" text-lg leading-5 font-normal text-black sm:text-2xl mb-2"></p>
                </p>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div> -->
            <!-- <details class="w-full cursor-pointer">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">HOW IT WORKS:</span>
                </summary>
                <p class="">
                <h3 class="text-xl sm:text-2xl font-bold ">-Effectively suppress DHT🌿:</h3>
                <p class="text-lg  font-normal text-black sm:text-2xl mb-2">Carrots and Amla, rich in Vitamin C, hydrate the
                    scalp, prevent dryness, improve blood
                    circulation, and
                    promote hair growth while suppressing DHT.
                </p>
                <h3 class="text-xl sm:text-2xl font-bold mt-4">-Maintains pH Level 🔗:
                </h3>
                <p class="text-lg  font-normal text-black sm:text-2xl mb-2">Lemon balances scalp pH, prevents dandruff, and
                    fosters a healthy environment for hair
                    follicles where
                    Fenugreek seeds enhance hair texture, shine, resilience, and support growth.
                </p>
                <h3 class="text-xl sm:text-2xl font-bold mt-4">-Improves Blood Circulation🧘:
                </h3>
                <p class="text-lg  font-normal text-black sm:text-2xl mb-2">Pomegranate and Orange, with vitamin E and
                    antioxidants, boost scalp blood circulation,
                    delivering
                    essential nutrients for healthier, thicker hair, while preventing oxidative stress and hair cell damage.
                </p>
                <h3 class="text-xl sm:text-2xl font-bold mt-4">-Supports Collagen Synthesis💫:
                </h3>
                <p class="text-lg  font-normal text-black sm:text-2xl mb-2">Aids in collagen synthesis, vital for
                    maintaining hair's strength and structure, reducing
                    hair thinning
                    and breakage.
                </p>

                </p>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div> -->


        </div>
    </div>
</template>
<style>
.video-container {
    display: flex;
    overflow-x: auto;
    gap: 1rem;
    /* Adjust the gap as needed */
    max-width: 100%;
    white-space: nowrap;
}

.video-container video {
    flex: 0 0 auto;
}


.accordian details[open] summary {
    /* background: blue; */
    /* color: white */
}

.accordian details[open] summary::after {
    content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgNjg1LjI0OGE2NCA2NCAwIDAgMCA5MC40OTYgMGwzMTYuOC0zMTYuOGwzMTYuOCAzMTYuOGE2NCA2NCAwIDAgMCA5MC40OTYtOTAuNDk2TDU1Ny4yNDggMjMyLjcwNGE2NCA2NCAwIDAgMC05MC40OTYgMEwxMDQuNzA0IDU5NC43NTJhNjQgNjQgMCAwIDAgMCA5MC40OTYiLz4NCjwvc3ZnPg==');
}

.accordian summary::-webkit-details-marker {
    display: none;
}

.accordian summary::-webkit-details-marker {
    display: none;
}

.accordian details[open] summary~* {
    animation: slideDown 0.3s ease-in-out;
}

.accordian details[open] summary p {
    opacity: 0;
    animation-name: showContent;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    margin: 0;
}

@keyframes showContent {
    from {
        opacity: 0;
        height: 0;
    }

    to {
        opacity: 1;
        height: auto;
    }
}

@keyframes slideDown {
    from {
        opacity: 0;
        height: 0;
        padding: 0;
    }

    to {
        opacity: 1;
        height: auto;
    }
}
</style>