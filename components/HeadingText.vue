<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const nuxtApp = useNuxtApp();

// const heading = ref();
const heading = useState('heading')


async function getHeading() {
    await useFetch(`${apiUrl}/get-heading`, {
        method: "GET",
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response._data.heading);
            heading.value = response._data.heading;
        },
    })
}

nuxtApp.hook("page:finish", () => {
    getHeading()
});

// onMounted(function () {
//     getHeading()
// })


</script>

<template>
    {{ heading }}
</template>