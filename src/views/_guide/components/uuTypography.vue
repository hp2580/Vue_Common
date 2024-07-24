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
      <!-- <v-expansion-panels variant="accordion">
        <v-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></v-expansion-panel>
      </v-expansion-panels> -->
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>
