<template>
    <!-- This is an example component -->
    <div class='flex items-center justify-center'>
        <div class='w-full rounded-lg'>
            <details class="w-full cursor-pointer">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">HELPS IN:</span>
                </summary>
                <p class="">
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">-Maintaining a healthy scalp with improved
                    blood
                    circulation.</p>
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">-Encouraging better hair growth and helps
                    prevent dandruff.</p>
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">-Cultivate Optimal Hair Follicle Health.</p>
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">-Reducing hair loss, and strengthening
                    hair
                    strands.</p>

                </p>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div>
            <details class="w-full cursor-pointer">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">HOW TO USE:</span>
                </summary>
                <p class="">
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">-Blend ½ tablespoon of Hair-you-glo into your
                    water.</p>
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">-Ensure it's well-mixed,have a sip &
                    revel in
                    the moment 🤙</p>

                </p>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div>
            <details class="w-full cursor-pointer">
                <summary
                    class="w-full text-dark flex justify-between py-1  after:content-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGZpbGw9IiM0M2ExOTAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgMzM4Ljc1MmE2NCA2NCAwIDAgMSA5MC40OTYgMGwzMTYuOCAzMTYuOGwzMTYuOC0zMTYuOGE2NCA2NCAwIDAgMSA5MC40OTYgOTAuNDk2TDU1Ny4yNDggNzkxLjI5NmE2NCA2NCAwIDAgMS05MC40OTYgMEwxMDQuNzA0IDQyOS4yNDhhNjQgNjQgMCAwIDEgMC05MC40OTYiLz4NCjwvc3ZnPg==')] after:text-secondary">
                    <span class="text-secondary font-bold text-xl">WHEN TO USE:</span>
                </summary>
                <p class="">
                <p class=" text-lg  font-normal text-black sm:text-2xl mb-2">You can consume it any time of the day, but
                    for better experience we
                    suggest consuming it in the
                    morning.</p>
                </p>
            </details>
            <div class="border border-[#ecc7bf] my-2"></div>
            <details class="w-full cursor-pointer">
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
            <div class="border border-[#ecc7bf] my-2"></div>


        </div>
    </div>
</template>
<style>
details[open] summary {
    /* background: blue; */
    /* color: white */
}

details[open] summary::after {
    content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPHBhdGggZmlsbD0iIzQzYTE5MCIgZD0iTTEwNC43MDQgNjg1LjI0OGE2NCA2NCAwIDAgMCA5MC40OTYgMGwzMTYuOC0zMTYuOGwzMTYuOCAzMTYuOGE2NCA2NCAwIDAgMCA5MC40OTYtOTAuNDk2TDU1Ny4yNDggMjMyLjcwNGE2NCA2NCAwIDAgMC05MC40OTYgMEwxMDQuNzA0IDU5NC43NTJhNjQgNjQgMCAwIDAgMCA5MC40OTYiLz4NCjwvc3ZnPg==');
}

details[open] summary~* {
    animation: slideDown 0.3s ease-in-out;
}

details[open] summary p {
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