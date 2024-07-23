const container = () => import('@/views/_guide/guide.vue')
const swiper = () => import('@/views/_guide/components/uuSwiper.vue')
const select = () => import('@/views/_guide/components/uuSelect.vue')
const typography = () => import('@/views/_guide/components/uuTypography.vue')
const agreement = () => import('@/views/_guide/components/uuAgreement.vue')

// uu-components
export default {
  path: '/components',
  redirect: '/components/swiper',
  component: container,
  children: [
    { component: swiper, path: 'swiper' },
    { component: select, path: 'select' },
    { component: typography, path: 'typography' },
    { component: agreement, path: 'agreement' },
  ],
}