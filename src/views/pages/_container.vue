<script setup lang="ts">
import { RouterView } from 'vue-router'
import router from '@/router';
</script>

<template>
  <RouterView />
  <Footer v-if="isFooter" />
</template>
<style scoped lang="scss"></style>