export default defineNuxtPlugin((nuxtApp) => {
    const { gtagId } = useRuntimeConfig().public;

    function gtag() {
        window.dataLayer.push(arguments);
    }

    window.dataLayer = window.dataLayer || [];

    gtag("js", new Date());
    gtag("config", gtagId);

    useHead({
        script: [
            {
                src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
                async: true,
            },
            {
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1608329357428717",
                crossorigin: "anonymous",
                async: true,
            },
        ],
    });
})