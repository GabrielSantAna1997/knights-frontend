import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/PageHome.vue'
import Register from '../views/PageRegister.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
