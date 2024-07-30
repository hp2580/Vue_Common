import { createRouter, createWebHistory } from 'vue-router'
import routerGuide from '@/router/routers/guide.routes'
import listIA from '@/views/_guide/listIA.vue'

// const routes = [
//   routerGuide,
//   {
//     path: '/',
//     name: 'IA',
//     component: listIA,
//   }
// ]
const routes = [
  {
    path: "/",
    name: "pagelist",
    component: () => import("../PageList.vue"),
    meta: {
      depth01: '',
      depth02: '',
      depth03: '',
      id: '',
      name: '',
      author: '',
      state: '',
      createdDate: '',
      note: ''
    }
  },
  {
    path: "/button",
    name: "button",
    component: () => import("../views/_guide/ButtonGuide.vue"),
    meta: {
      depth01: 'Guide',
      depth02: 'button',
      depth03: '',
      id: 'ID000000',
      name: 'button',
      author: '홍길동',
      state: '완료',
      createdDate: '230728',
      note: '수정'
    }
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
