<script>
import { defineProps } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="flex-shrink-0 m-6 overflow-hidden bg-nature-base opacity-100 rounded-lg max-w-xs shadow-lg feature-cards"
  >
    <svg
      class="absolute bottom-0 left-0 mb-8"
      viewBox="0 0 375 283"
      fill="none"
      style="transform: scale(1.5); opacity: 0.1"
    >
      <rect
        x="159.52"
        y="175"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width="152"
        height="152"
        rx="8"
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div class="relative pt-5 px-5 flex items-center justify-center">
      <div
        class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style="
          background: radial-gradient(black, transparent 60%);
          transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1);
          opacity: 0.2;
        "
      ></div>
      <img
        class="relative w-40"
        src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png"
        alt=""
      />
    </div>
  </div>
</template>
