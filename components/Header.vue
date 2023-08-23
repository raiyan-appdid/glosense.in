<script setup>
const d1 = ref("M4 9.5l16 0");
const d2 = ref("M4 14.5l16 0");
const isHovered = ref(false);

function handleHover() {
  isHovered.value = !isHovered.value;
  d1.value = isHovered.value ? "M4 8l16 0" : "M4 9.5l16 0";
  d2.value = isHovered.value ? "M4 16l16 0" : "M4 14.5l16 0";
}

const showBlur = ref(false);

const handleScroll = () => {
  showBlur.value = window.scrollY > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    id="sidebar"
    class="sidebar fixed top-0 w-full flex justify-between sm:py-8 sm:px-20 py-8 px-10 z-40"
    :class="showBlur ? 'show-blur' : ''"
  >
    <div @mouseover="handleHover" @mouseout="handleHover" class="flex items-center">
      <span class="rounded-full border border-secondary p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu text-secondary"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="0.7"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path :d="d1"></path>
          <path :d="d2"></path>
        </svg>
      </span>
      <p class="ms-5 text-sm font-semibold text-secondary">MENU</p>
    </div>
    <div class="flex items-center">
      <!-- <p class="text-sm font-semibold text-white">CONTACT US</p> -->
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
