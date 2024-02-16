import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import Terms from './components/Terms.vue';
import Legal from './components/Legal.vue';

import Piste_Bagagiste from './components/Trainings/Piste_Bagagiste.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  },
  {
    name: 'Terms',
    path: '/termes-conditions',
    component: Terms
  },
  {
    name: 'Legal',
    path: '/mentions-legales',
    component: Legal
  },
  {
    name: 'PisteBagagiste',
    path: '/formation/piste-bagagiste',
    component: Piste_Bagagiste
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from, failure) => {
  window.scrollTo(0, 0)
})

export default router
