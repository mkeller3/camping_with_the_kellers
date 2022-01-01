import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('@/views/Article.vue')
  },
  {
    path: '/map/:id',
    name: 'Map',
    component: () => import('@/views/Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
