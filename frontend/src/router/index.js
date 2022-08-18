import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeMenus from '../views/HomeMenus.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home-menus',
    name: 'home-menus',
    component: HomeMenus
  },
  {
    path: '/healthy',
    name: 'healthy',
    component: () => import('../views/HealthyRecipe.vue')
  },
  {
    path: '/hard',
    name: 'hard',
    component: () => import('../views/HardRecipe.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView.vue')
  }
  ,
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/FormRecipe.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
