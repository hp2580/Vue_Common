<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import guideNav from './_guideNav.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const navs = guideNav()
const isMobile = ref(false)
const asideToggle = ref(false)
const state = reactive({
  navs: guideNav(),
  category: '',
  navIndex: 0,
  subNavIndex: 0,
  pathUrl: []
})

const navMenuClick = (index) => {
  state.navIndex = index
  state.subNavIndex = 0
  state.category = `/${state.navs[state.navIndex].nav[0].url.split('/')[1]}`
  router.push(state.category)
}
const navSubMenuClick = (navIndex, subIndex) => {
  state.navIndex = navIndex
  state.subNavIndex = subIndex
  updateUrl(state.navs[state.navIndex].nav[subIndex].url)
}
const updateUrl = (link) => {
  state.pathUrl = []
  state.navs.map(item => {
    state.pathUrl.push(item.nav[0].url)
  })
  state.pathUrl[state.navIndex] = link
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
const handleResize = () => {
  let windowSize = window.innerWidth
  if (windowSize < 1200) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
}

const asideItems = computed(() => {
  return state.navs[state.navIndex].nav
})
const pageTitle = computed(() => {
  return asideItems.value[state.subNavIndex].name
})
const navMenuTitle = computed(() => {
  return state.navs[state.navIndex].title
})
onMounted(() => {
  state.navs.map((item, i) => {
    item.nav.map((sub, j) => {
      sub.url === route.path ? (state.navIndex = i, state.subNavIndex = j) : null;
    })
    state.pathUrl.push(item.nav[0].url)
    updateUrl(route.path)
  })
})

</script>

<template>
  <div id="page" class="page guide-wrap" :class="{ 'is-mobile': isMobile }">
    <!-- header -->
    <header class="guide-header">
      <h1 class="logo">
        <router-link to="/" title="현황판 페이지 이동">
          Vue Common
        </router-link>
      </h1>
      <nav>
        <ul v-show="!isMobile" class="guide-header-nav">
          <li v-for="(item, index) in navs" :key="index">
            <router-link :to="state.pathUrl.length > 0 ? state.pathUrl[index] : item.nav[0].url" class="btn btn-text"
              :title="item.title + ' 페이지 이동'" @click="navMenuClick(index)">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <router-link to="/" title="현황판 페이지 이동" class="btn btn-guide">
          IA
        </router-link>
        <button v-show="isMobile" type="button" class="btn btn-mobile" aria-label="메뉴"
          @click="asideToggle = !asideToggle" />
      </nav>
    </header>
    <!-- // header -->
    <main class="container guide-container" @click="asideToggle = false">
      <!-- aside mobile -->
      <transition name="guide-aside">
        <aside v-if="isMobile && asideToggle" class="guide-aside"
          :class="[{ 'is-mobile': isMobile }, { 'is-show': asideToggle }]">
          <template v-for="(item, i) in state.navs" :key="item.title">
            <h2 class="guide-aside-title">
              {{ item.title }}
            </h2>
            <nav class="guide-aside-nav">
              <ul>
                <li v-for="(sub, index) in item.nav" :key="index" class="menu-item">
                  <router-link :to="sub.url" :title="sub.name + ' 페이지 이동'" @click="navSubMenuClick(i, index)">
                    {{ sub.name }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </template>
        </aside>
      </transition>
      <!-- // aside mobile -->
      <!-- aside pc -->
      <aside v-if="!isMobile" class="guide-aside" :class="[{ 'is-mobile': isMobile }, { 'is-show': asideToggle }]">
        <h2 class="guide-aside-title">
          {{ navMenuTitle }}
        </h2>
        <nav class="guide-aside-nav">
          <ul>
            <li v-for="(sub, index) in asideItems" :key="index" class="menu-item">
              <router-link :to="sub.url" :title="sub.name + ' 페이지 이동'" @click="navSubMenuClick(state.navIndex, index)">
                {{ sub.name }}
              </router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <!-- // aside pc -->
      <div class="content guide-page">
        <div class="content-header">
          <h2 class="content-title">
            {{ pageTitle }}
          </h2>
        </div>
        <div class="content-body">
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>