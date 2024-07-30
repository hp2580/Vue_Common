<script setup>
import { ref } from 'vue';
import router from '@/router';

// 라우트 정보를 배열로 변환
const routes = router.options.routes.map(route => ({
  depth01: route.meta.depth01 || '',
  depth02: route.meta.depth02 || '',
  depth03: route.meta.depth03 || '',
  id: route.meta.id,
  name: route.meta.name,
  path: route.path,
  author: route.meta.author,
  state: route.meta.state || '',
  createdDate: route.meta.createdDate,
  note: route.meta.note || ''
}));

const filteredRoutes = ref(routes.slice(1));

// 테이블 헤더 정의
const headers = ref([
  { title: 'Depth01', key: 'depth01' },
  { title: 'Depth02', key: 'depth02' },
  { title: 'Depth03', key: 'depth03' },
  { title: '화면명', key: 'name' },
  { title: '화면 ID', key: 'id' },
  { title: '경로', key: 'path' },
  { title: '작성자', key: 'author' },
  { title: '상태', key: 'state' },
  { title: '완료일', key: 'createdDate' },
  { title: '비고', key: 'note' }
]);

const showPreview = ref(true);
const iframeSrc = ref(filteredRoutes.value[0].path);

const showInIframe = (path) => {
  iframeSrc.value = path;
};
const openInNewTab = (path) => {
  window.open(path, '_blank');
};
const getColor = (state) => {
  return state === '완료' ? 'green' : 'red';
};
</script>

<template>
  <div class="wrap">
    <section class="section">
      <div class="d-flex justify-space-between pa-4 bg-primary">
        <h1 class="heading_32">화면목록</h1>
        <v-btn size="small" color="black" @click="showPreview = !showPreview">preview</v-btn>
      </div>
    <v-data-table
      :headers="headers"
      :items="filteredRoutes"
      class="mt-5"
      item-value="id"
    >
      <template v-slot:[`item.path`]="{ item }">
        <v-btn 
          @click="showInIframe(item.path)"
          size="small"
          variant="text"
        >
          {{ item.path }}
        </v-btn>
        <v-btn 
          color="primary" 
          size="small"
          @click="openInNewTab(item.path)"
        >
          새창보기
        </v-btn>
      </template>
      <template v-slot:[`item.state`]="{ item }">
        <v-chip :color="getColor(item.state)">{{ item.state }}</v-chip>
      </template>
    </v-data-table>
  </section>
  <div class="preview_wrap" v-if="showPreview">
    <iframe width="400px" height="100%" :src="iframeSrc">
      preview
    </iframe>
  </div>
</div>
</template>

<style lang="scss">
html,
body,
#app,
main {
  height: 100%;
}
// body {
//   font-size: 1.6rem;
// }
// html,body {
//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   &::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, and Opera */
//   }
// }
</style>
<style lang="scss" scoped>
.wrap {
  display: flex;
  width: 100%;
  min-height: 100%;
  .section {
    flex: 1 1 auto;
  }
  .preview_wrap {
    overflow: hidden;
    font-size: 0;
  }
  ::v-deep {
    .v-data-table-footer {
      .v-btn.v-btn--size-default {
        font-size: 1rem;
      }
    }
  }
}
.v-table {
    font-size: 1.4rem;
}
iframe {
  border: 0;
}
</style>
