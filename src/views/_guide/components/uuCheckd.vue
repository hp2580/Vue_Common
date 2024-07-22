<script setup>
import { ref, watchEffect } from 'vue';
const isCheck = ref(false)
const props = defineProps({
  all: Boolean
})
watchEffect(() => {
  isCheck.value = props.all
})
</script>
<template>
  <input type="checkbox" v-model="isCheck">
</template>
<style lang="scss" scoped>
input[type=checkbox] {
  display: block;
  width: 5rem;
  height: 5rem;
}
</style>