<script setup lang="ts">
import { reactive, ref, onMounted, watchEffect } from 'vue'
import uuTabs from '@/components/uu-components/uuTabs.vue'
import uuTab from '@/components/uu-components/uuTab.vue'
import tabsData from '@/utils/jobs/job.index'
// import '@/assets/css/guide.css'

const isMobile = ref(false)
const tableHeader = {
  header: [
    '번호',
    'Depth01',
    'Depth02',
    'Depth03',
    'Depth04',
    'Depth05',
    'Depth06',
    '종류',
    '화면ID',
    '시작일',
    '완료일',
    '수정일',
    '완료예정일',
    '상태',
    '담당자',
    '비고',
  ],
  mobileHeader: ['종류', 'Depth', '화면ID']
};

const tableData = reactive({
  tabName: [],
  tabItem: []
})

watchEffect(() => {
  tabsData.forEach((tab) => {
    tableData.tabName.push(tab.name)
    tableData.tabItem.push([...tab.item])
  })
})

const state = reactive({
  totalData: {
    total: 0,
    done: 0,
    delete: 0,
    deploy: 0,
    per: 0
  },
  pageData: {
    total: 0,
    complete: 0,
    delete: 0,
    deploy: 0,
    per: 0
  }
})
onMounted(() => {
  window.addEventListener('resize', handleResize);
  totalCount();
  handleResize();
})

const handleResize = () => {
  window.innerWidth < 1200 ? isMobile.value = true : isMobile.value = false
}
const selected = (selectedIndex) => {
  pageCount(selectedIndex)
}

const pageCount = (index) => {
  const activeItem = tableData.tabItem[index]
  let status = {
    ing: 0,
    done: 0,
    delete: 0,
    deploy: 0,
  };
  activeItem.map(item => {
    item.status.indexOf('ing') === 0 ? status.ing++ : 0;
    item.status.indexOf('done') === 0 ? status.done++ : 0;
    item.status.indexOf('deploy') === 0 ? status.deploy++ : 0;
    item.status.indexOf('delete') === 0 ? status.delete++ : 0;
  });
  state.pageData = {
    total: tableData.tabItem[index].length,
    complete: status.done,
    delete: status.delete,
    deploy: status.deploy,
    per: (
      Math.round(((status.done + status.deploy) / (tableData.tabItem[index].length - status.delete)) *
        100
      ) * 1e2) / 1e2,
  }
}
const totalCount = () => {
  const totalItem = ref([])
  let status = {
    ing: 0,
    done: 0,
    delete: 0,
    deploy: 0,
  };
  tableData.tabItem.map((item, i) => {
    totalItem.value.push(...item);
  })
  totalItem.value.map(item => {
    item.status.indexOf('done') === 0 ? status.done++ : 0;
    item.status.indexOf('deploy') === 0 ? status.deploy++ : 0;
    item.status.indexOf('delete') === 0 ? status.delete++ : 0;
  })
  state.totalData = {
    total: totalItem.value.length,
    done: status.done,
    delete: status.delete,
    deploy: status.deploy,
    per: (
      Math.round(((status.done + status.deploy) / (totalItem.value.length - status.delete)) * 100) * 1e2) / 1e2
  }
}
</script>

<template>
  <div id="page" class="page guide-wrap">
    <!-- Header -->
    <header class="guide-header">
      <h1 class="logo">
        <router-link to="/" title="현황판 페이지 이동">
          Vue Common
        </router-link>
      </h1>
      <nav>
        <ul class="guide-header-nav is-ia">
          <li>
            <router-link class="btn btn-guide" to="/components" title="퍼블리싱 가이드 페이지 이동">
              GUIDE
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <!-- // Header -->
    <!-- Main -->
    <main class="container guide-container">
      <div class="content content-side">
        <h2 class="sr-only">
          현황판 IA
        </h2>
        <div class="guide-write">
          <h3 class="title">
            작성 가이드
          </h3>
          <ul class="guide-write-list">
            <li>종류 표시방법 - [M] Main / [S] Sub Page / [P] Full Popup / [B] Bottom Sheet / [T] Toast</li>
            <li>
              진척관리 - [시작일] 최초 작업 시작일 / [완료일] 최초 작업 완료일 / [수정일] 마지막 수정일 / [완료예정일] 최초 작업 완료 예정일 / [상태]
              <span class="ing">진행중</span> | <span class="done">완료</span> | <span class="deploy">배포</span> | <span
                class="delete">삭제</span>
            </li>
            <li>결함관리 - 추가/수정/삭제 이슈가 있는 경우 소스 코드와 [비고]란에 동일한 주석 문구를 표시해주세요. (ex. 주석 표기 YYMMDD 작업내용 수정)</li>
          </ul>
        </div>
        <div class="guide-ia">
          <h3 class="sr-only">
            현황판 IA 리스트
          </h3>
          <uu-tabs @selected="selected">
            <template #tab-slot>
              <div class="work-status ia-total">
                <span>
                  전체: <em>{{ state.totalData.total }}</em>
                </span>
                <span>
                  완료: <em>{{ state.totalData.done + state.totalData.deploy }}</em>
                </span>
                <span>
                  진척률: <em>{{ state.totalData.per }}%</em>
                </span>
              </div>
            </template>
            <uu-tab v-for="(tab, index) in tableData.tabItem" :key="`tab${index}`" :active="index === 0"
              :title="tableData.tabName[index]">
              <div class="work-status ia-page">
                <span>
                  전체: <em>{{ state.pageData.total }}</em>
                </span>
                <span>
                  완료: <em>{{ state.pageData.complete }}</em>
                </span>
                <span>
                  삭제: <em>{{ state.pageData.delete }}</em>
                </span>
                <span>
                  배포: <em>{{ state.pageData.deploy }}</em>
                </span>
                <span>
                  진척률: <em>{{ state.pageData.per }}%</em>
                </span>
              </div>
              <table class="guide-ia-table">
                <caption class="sr-only">
                  {{ tableData.tabName[index] }} 현황판 IA List
                </caption>
                <thead :class="{ 'is-mobile': isMobile }">
                  <tr v-if="isMobile">
                    <th v-for="(header, idx) in tableHeader.mobileHeader" :key="`header${idx}`">
                      {{ header }}
                    </th>
                  </tr>
                  <tr v-else>
                    <th v-for="(header, idx) in tableHeader.header" :key="`header${idx}`">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, rowIndex) in tab" :key="rowIndex"
                    :class="[item.status, item.listStart ? 'line' : '']">
                    <td>{{ rowIndex + 1 }}</td>
                    <td>{{ item.depth1 }}</td>
                    <td>{{ item.depth2 }}</td>
                    <td>{{ item.depth3 }}</td>
                    <td>{{ item.depth4 }}</td>
                    <td>{{ item.depth5 }}</td>
                    <td>{{ item.depth6 }}</td>
                    <td>{{ item.type }}</td>
                    <td>
                      <router-link :to="item.url" title="페이지 새창 열림" target="_blank">
                        {{ item.page }}
                      </router-link>
                    </td>
                    <td>{{ item.startDate }}</td>
                    <td>{{ item.endDate }}</td>
                    <td>{{ item.finalDate }}</td>
                    <td>{{ item.dueDate }}</td>
                    <td>
                      {{ item.status === 'ing' ? '진행중' : '' }}
                      {{ item.status === 'done' ? '완료' : '' }}
                      {{ item.status === 'deploy' ? '배포' : '' }}
                      {{ item.status === 'delete' ? '삭제' : '' }}
                    </td>
                    <td>{{ item.worker }}</td>
                    <td>
                      <div v-for="(memo, id) in item.memos" :key="`memo${id}`">
                        {{ memo }}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </uu-tab>
          </uu-tabs>
        </div>
      </div>
    </main>
    <!-- // Main -->
  </div>
</template>
<style lang="scss" scoped></style>