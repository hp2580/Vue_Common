<script setup>
import { ref } from 'vue';

const toastOpen = ref(false)

function handleToast() {
  toastOpen.value = true
}
</script>
<template>
  <div class="container">
    <div>
      <v-btn
        color='primary'
        @click="handleToast()"
      >
        Open Toast
      </v-btn>
      <v-snackbar
        v-model="toastOpen"
        timeout="3000"
      >
        <p class="text_14 text_white">영수증 이미지가 사진첩에 저장되었습니다.<br>사진첩에서 영수증을 확인하세요.</p>
      </v-snackbar>
    </div>
  </div>
</template>