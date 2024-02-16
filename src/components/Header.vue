<template>
  <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item has-text-black" to="/">
            P&J
          </router-link>
          <span class="navbar-burger" data-target="navbar">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbar" class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item has-text-black" to="/contact">
              Contact
            </router-link>
            <a class="navbar-item has-text-black" href="tel:+33 7 82 49 72 17">+33 7 82 49 72 17</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target
        const $target = document.getElementById(target)
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  })
})

</script>

<style scoped>
.hero-head {
  background-color: #219ebc;
}
</style>
