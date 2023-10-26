<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const token = useCookie('token');

async function logout() {
    await useFetch(`${apiUrl}/user/logout`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + token.value
        },
        onResponse({ request, response, options }) {
            console.log(response);
            if (response.status == 200) {
                token.value = "";
                history.back();
                window.location.reload(true)
            }
        },
        onRequestError({ request, response, options }) {
            console.log(response);
        },
    })
}


onMounted(() => {
    setTimeout(async () => {
        await logout();
    }, 1000);
})
</script>

<template>
    log out here
</template>