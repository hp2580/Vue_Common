import { createRouter, createWebHistory } from 'vue-router'
import routerGuide from '@/router/routers/guide.routes'
import listIA from '@/views/_guide/listIA.vue'

const routes = [
  routerGuide,
  {
    path: '/',
    name: 'IA',
    component: listIA,
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
