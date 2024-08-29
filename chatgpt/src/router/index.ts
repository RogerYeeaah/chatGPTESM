import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import chatGPT from '../views/chatGPT.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'chatGPT',
    component: chatGPT
  },
  {
    path: '/imageGenerate',
    name: 'imageGenerate',
    component: () => import('../views/imageGenerate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
