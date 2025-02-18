import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Business from '../views/business.vue'
import Person from '../views/person.vue'
import Login from '../views/login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/business',
      name: ' Business',

      component: () => import('../views/business.vue'),
    },
    {
      path: '/person',
      name: 'person',
      component: () => import('../views/person.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
    },
  ],
})

export default router
