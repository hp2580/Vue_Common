const container = () => import('@/views/_guide/guide.vue')
const uuSwiper = () => import('@/views/_guide/components/uuSwiper.vue')

// uu-components
export default {
  path: '/components',
  redirect: '/components/swiper',
  component: container,
  children: [
    { component: uuSwiper, path: 'swiper' },
  ],
}
