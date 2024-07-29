<script setup>
import { ref } from 'vue';

const show = ref(false);

function handleTooltip(action) {
  if(action == 'open') {
    show.value = true
  } else if(action == 'close') {
    show.value = false
  }
}
</script>
<template>
  <div class="container">
    <v-tooltip
      v-model="show"
      location="bottom left"
      content-class="custom-tooltip"
      :open-on-hover="false"
      no-click-animation
      :open-on-click="true"
    >
      <template v-slot:activator="{ props }">
        <button 
          type="button" 
          aria-label="도움말"
          v-bind="props"
          @click="handleTooltip('open')"
        >
          <v-icon size="small" class="question_gray"></v-icon>
        </button>
      </template>
      <div class="custom-tooltip-content">
        <div class="custom-tooltip-content-text">
          <div class="text_12 title">충전한도 타이틀</div>
          <p class="text_12 mt-1">
            잔액기준 충전한도 : 50만원<br>
            1일 충전한도 : 100만원
          </p>
        </div>
        <button 
          type="button"
          class="btn-close" 
          aria-label="닫기"
          @click="handleTooltip('close')"  
        >
          <v-icon class="close_black"></v-icon>
        </button>
      </div>
    </v-tooltip>
  </div>
</template>