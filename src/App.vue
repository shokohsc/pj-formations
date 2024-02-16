<template>
    <Header />
    <router-view />
    <Footer />
    <div class="scrolling-image-container">
      <div class="scrolling-image">
      </div>
    </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import 'virtual:fonts.css'
</script>

<style>
html {
  background-color: #023047;
  height: 100vh;
  width: 100vw;
}

body {
  font-family: "Code New Roman";
  /* background: url('./assets/images/World Map (1).svg') no-repeat fixed; */
  /* background: url('./assets/images/pattern.png') repeat fixed; */
}

body::-webkit-scrollbar {
  display: none;
}

.scrolling-image-container {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

.scrolling-image {
  background: url("./assets/images/World Map (1).svg") repeat-x;
  height: 1080px;
  width: 3840px;
  animation: slide 120s linear infinite;
  position: fixed;
}

@keyframes slide {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(-1920px); /* The image width */
  }
}
</style>
