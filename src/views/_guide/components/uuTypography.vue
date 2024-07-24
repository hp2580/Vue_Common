<script setup>
const content = {
  heading: [36,32,30,28,26],
  title: [24, 22, 20, 18, 16, 14, 13],
  text: [18, 16, 14, 13, 12, 11, 10],
  button: [16, 14, 12, 11, 10]
}

</script> 
<template>
  <div class="content-body">
    <section class="section">
      <template v-for="(value, key) in content">
        <div v-if="key == 'heading'" v-for="item in value" :class="`${key}_${item}`">class: {{ `${key}-${item}` }}</div>
        <div v-else-if="key == 'title'" v-for="item in value" :class="`${key}_${item}`">class: {{ `${key}-${item}` }}</div>
        <div v-else-if="key == 'text'" v-for="item in value" :class="`${key}_${item}`">class: {{ `${key}-${item}` }}</div>
        <button v-else type="button" v-for="item in value" :class="`${key}_${item}`" :style="{display: 'block'}">class: {{ `${key}-${item}` }}</button>
      </template>
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>
