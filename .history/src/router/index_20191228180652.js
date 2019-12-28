import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BasePage from '@/components/BasePage.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/base-page',
    name: 'basePage',
    component: BasePage,
    children: [

    ]
  },
  
  {
    path: '/play',
    name: 'play',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/video/play.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
