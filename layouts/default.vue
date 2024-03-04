<!-- <script setup>
onMounted(function () {
  const userAgent = window.navigator.userAgent;
  console.log("User Agent:", userAgent);
  if (userAgent.includes("Instagram")) {
    alert("For the best experience, please open this website in Chrome or another standard browser.");
  }
});
</script> -->

<template>
  <div>
    <div>
      <!-- <SnowFall /> -->
      <slot />
    </div>
    <Footer />
  </div>
</template>