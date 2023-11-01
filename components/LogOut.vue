<script setup>
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const token = useCookie('token');
import Swal from 'sweetalert2';
import Notiflix from 'notiflix';
const props = defineProps(['loggedIn'])

console.log(props.loggedIn);

const loggedIn = ref(props.loggedIn);

async function logout() {
    Notiflix.Loading.pulse();

    await useFetch(`${apiUrl}/user/logout`, {
        method: "POST",
        headers: {
            accept: "application/json",
            Authorization: "Bearer " + token.value
        },
        onResponse({ request, response, options }) {
            console.log(response);
            if (response.status == 200) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                token.value = "";
                window.location.reload(true)
            }
            Notiflix.Loading.remove();
        },
        onRequestError({ request, response, options }) {
            Notiflix.Loading.remove();
            console.log(response);
        },
    })
}

function confirm() {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to Logout!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            logout();
        }
    })
}

</script>

<template>
    <span @click="confirm" class="ml-3 cursor-pointer">
        <!-- <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000"
                d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z" />
        </svg> -->
        <p class="py-1 px-2 bg-primary rounded-2xl" v-show="!loggedIn">Log out</p>
    </span>
</template>