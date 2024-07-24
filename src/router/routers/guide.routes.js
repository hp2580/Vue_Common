const container = () => import('@/views/_guide/guide.vue')
const swiper = () => import('@/views/_guide/components/uuSwiper.vue')
const select = () => import('@/views/_guide/components/uuSelect.vue')
const typography = () => import('@/views/_guide/components/uuTypography.vue')
const agreement = () => import('@/views/_guide/components/uuAgreement.vue')
const colors = () => import('@/views/_guide/components/uuColors.vue')
const button = () => import('@/views/_guide/components/uuButton.vue')

// uu-components
export default {
  path: '/components',
  redirect: '/components/colors',
  component: container,
  children: [
    { component: colors, path: 'colors' },
    { component: typography, path: 'typography' },
    { component: swiper, path: 'swiper' },
    { component: select, path: 'select' },
    { component: agreement, path: 'agreement' },
    { component: button, path: 'button' },
  ],
}