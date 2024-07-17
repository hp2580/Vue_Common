const container = () => import('@/views/_guide/guide.vue')
const ruleIntro = () => import('@/views/_guide/convention/ruleIntro.vue')

// uu-components
export default {
  path: '/convention',
  redirect: '/convention/ruleIntro',
  component: container,
  children: [
    { component: ruleIntro, path: 'ruleIntro' },
  ],
}
