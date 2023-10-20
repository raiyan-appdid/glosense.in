<script setup>
const d1 = ref("M4 9.5l16 0");
const d2 = ref("M4 14.5l16 0");
const isHovered = ref(false);

import { useUserStore } from '@/stores/user'
const store = useUserStore();
const { getUser } = store;

const loggedIn = store.name == "";
await getUser();

function handleHover() {
  isHovered.value = !isHovered.value;
  d1.value = isHovered.value ? "M4 8l16 0" : "M4 9.5l16 0";
  d2.value = isHovered.value ? "M4 16l16 0" : "M4 14.5l16 0";
}

function showSideBar() {
  let value = document.getElementById('drawer-navigation');
  value.classList.add('transform-none');
}

function closeSideBar() {
  let value = document.getElementById('drawer-navigation');
  value.classList.remove('transform-none');
}

const showBlur = ref(false);

const handleScroll = () => {
  showBlur.value = window.scrollY > 300;
};
function openModal() {
  closeSideBar()
  const token = useCookie();
  // if (!token.value) {
  let modal = document.getElementById('authentication-modal')
  modal.classList.remove('hidden');
  // }
  // else {
  // getUser();
  // gateWayIntegration();
  //cc avenue gateway.....
  // }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <LoginModal />
  <div>
    <div class="fixed top-0 w-screen bg-secondary z-10">
      <p class="p-0 m-0 text-center text-white font-bold">GET 30% OFF WITH CODE - MYFIRSTJAR</p>
    </div>
    <div id="sidebar" class="sidebar fixed top-6 w-full flex justify-between sm:py-8 sm:px-20 py-5 px-10 z-10"
      :class="showBlur ? 'show-blur' : ''">
      <div @click="showSideBar" @mouseover="handleHover" @mouseout="handleHover"
        class="flex items-center hover:cursor-pointer">
        <span class="rounded-full border border-secondary p-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu text-secondary" width="24"
            height="24" viewBox="0 0 24 24" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path :d="d1"></path>
            <path :d="d2"></path>
          </svg>
        </span>
        <p class="ms-5 text-sm font-semibold text-secondary"><span class="hidden sm:block">MENU</span></p>
      </div>
      <div class="flex items-center">
        <div class="hidden sm:block">
          <p v-show="!loggedIn">{{ store.name }}</p>
          <button @click="openModal" v-show="loggedIn"
            class="px-4 py-1 rounded-md bg-primary text-white hover:bg-[#915446fc]">Login</button>
          <a v-show="loggedIn" href="/register"><button
              class="px-4 py-1 rounded-md bg-secondary text-white ml-2">Register</button></a>
        </div>
        <!-- <p class="text-sm font-semibold text-white">CONTACT US</p> -->
      </div>








      <!-- drawer init and show -->
      <!-- <div class="text-center">
      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
        aria-controls="drawer-navigation">
        Show navigation
      </button>
    </div> -->

      <!-- drawer component -->
    </div>
    <div id="drawer-navigation"
      class="fixed top-0 left-0 z-30  w-screen sm:w-[30%] h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-[#ef8f7b]"
      tabindex="-1" aria-labelledby="drawer-navigation-label">
      <!-- <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-emerald-100">Menu
      </h5> -->
      <button @click="closeSideBar" type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation"
        class="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-[#e3694f] dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <div class="py-4 mt-2 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <div class="sm:hidden flex">
            <a href="#" @click="openModal"
              class="flex ml-9 bg-secondary w-fit items-center p-2 text-bold  rounded-lg text-neutral-50  hover:bg-[#e3694f] group">
              Login
            </a>
            <a href="/register"
              class="flex ml-2 bg-[#e3694f] w-fit items-center p-2 text-bold  rounded-lg text-neutral-50  hover:bg-[#e3694f] group">
              Register
            </a>
          </div>
          <li @click="closeSideBar">
            <a href="/"
              class="flex ml-9 items-center p-2 text-bold text-gray-900 rounded-lg dark:text-neutral-50  dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path
                  d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Home</span>
            </a>
          </li>
          <li @click="closeSideBar">
            <a href="/about"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">About Us</span>
            </a>
          </li>
          <!-- <li @click="closeSideBar">
            <a href="/contact"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path
                  d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
            </a>
          </li> -->
          <!-- <li @click="closeSideBar">
            <a href="/privacy-policy"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Privacy Policy</span>
            </a>
          </li> -->
          <li @click="closeSideBar">
            <a href="/product-detail"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Product Details</span>
            </a>
          </li>
          <!-- <li @click="closeSideBar">
            <a href="/product-review"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path
                  d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Customer Review</span>
            </a>
          </li> -->
          <!-- <li @click="closeSideBar">
            <a href="#"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>
          <li @click="closeSideBar">
            <a href="#"
              class="flex ml-9 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#e3694f] group">
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-neutral-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                <path
                  d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                <path
                  d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon path {
  transition: all 0.1s ease-in-out;
}

.sidebar {
  transition: all 0.3s ease-in-out;
}

.show-blur.sidebar {
  background: rgba(255, 255, 255, 0.78) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
  backdrop-filter: blur(10px);
}
</style>
