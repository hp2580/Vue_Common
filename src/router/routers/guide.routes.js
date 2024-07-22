const container = () => import('@/views/_guide/guide.vue')
const swiper = () => import('@/views/_guide/components/uuSwiper.vue')
const select = () => import('@/views/_guide/components/uuSelect.vue')
// const check = () => import('@/views/_guide/components/uuGroup.vue')

// uu-components
export default {
  path: '/components',
  redirect: '/components/swiper',
  component: container,
  children: [
    { component: swiper, path: 'swiper' },
    { component: select, path: 'select' },
    // { component: check, path: 'check' },
  ],
}