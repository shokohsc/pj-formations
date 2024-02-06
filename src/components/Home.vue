<template>
  <section  class="hero is-fullheight-with-navbar" >
    <div class="hero-body">
      <Cover />
      <!-- <About />
      <Trainings />
      <Register />
      <Values /> -->
    </div>
  </section>
</template>

<script setup>
import Cover from './Cover.vue'
// import About from './About.vue'
// import Trainings from './Trainings.vue'
// import Register from './Register.vue'
// import Values from './Values.vue'
</script>

<style scoped>
nav.navbar {
  background-color: #0a0a0a !important;
}
.navbar-item {
  background-color: #0a0a0a;
}
.navbar-menu {
  background-color: #0a0a0a;
}
a.navbar-item:focus-within {
  background-color: #0a0a0a !important;
}
</style>
