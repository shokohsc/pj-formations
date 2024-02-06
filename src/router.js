import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  // {
  //   name: 'About',
  //   path: '/about',
  //   component: About
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0)
})

export default router
