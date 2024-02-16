<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <router-link class="has-text-black" to="/mentions-legales">
              Mentions Légales
            </router-link>
          </li>
          <li>
            <router-link class="has-text-black" to="/termes-conditions">
              Termes & Conditions
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-foot {
  background-color: #219ebc;
}
</style>
