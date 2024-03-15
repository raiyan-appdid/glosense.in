<script setup>
const nuxtApp = useNuxtApp();
const route = useRoute()
const config = useRuntimeConfig();
const apiUrl = config.public.baseUrl;
const blog = ref();
const showBlog = ref(false);
import Notiflix from 'notiflix';

nuxtApp.hook("page:finish", () => {
    Notiflix.Loading.standard();
    blogDetails();
});

async function blogDetails() {
    await useFetch(`${apiUrl}/blog-details?slug=${route.params.slug}`, {
        method: "GET",
        headers: {
            accept: "application/json"
        },
        onResponse({ request, response, options }) {
            console.log(response);
            if (response._data.success) {
                Notiflix.Loading.remove();
                blog.value = response._data.data;
                showBlog.value = true;
                console.log(blog.value);
            }
        },
    })
}


</script>


<template>
    <HeaderCommon />

    <div class="Blog Details mt-20 md:mt-24 pb-20 bg-[#efe8df]">
        <div class="container mx-auto md:px-40 px-4" v-if="showBlog">
            <nav class="flex py-4" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a href="/"
                            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="/blogs"
                                class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">Blogs</a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2">{{ blog.title }}
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <h2 class="text-primary text-3xl md:text-4xl py-10 font-bold">{{ blog.title }}

            </h2>
            <img :src="blog.image" alt="">
            <p class="my-10 md:text-xl" v-html="blog.content"></p>
        </div>
    </div>
</template>