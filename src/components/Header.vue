<template>
  <nav class="navbar is-transparent is-fixed-top is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <router-link class="navbar-item" to="/">
        <button class="button">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
        </button>
      </router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">

      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Accueil
        </router-link>
        <router-link class="navbar-item" to="/trainings">
          Formations
        </router-link>
        <router-link class="navbar-item" to="/about">
          About
        </router-link>
        <router-link class="navbar-item" to="/contact">
          Contact
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a href="tel:+33612345678">+33 6 12 34 56 78</a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script setup>
import getEnv from '../utils/env'

import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
/* nav.navbar {
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
} */
</style>
