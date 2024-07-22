<script setup>
import {ref} from 'vue'
const items = [
        { value: 1, text: 'Item 1', subtitle: 'Description 1' },
        { value: 2, text: 'Item 2', subtitle: 'Description 2' },
        { value: 3, text: 'Item 3', subtitle: 'Description 3' },
        { value: 4, text: 'Item 4', subtitle: 'Description 4' }
      ]
const selected = ref(items[0].text)

</script>
<template>
  <!-- <template #selection="{ item }">
        <span>{{item.raw.text}}</span>
    </template>
    <template #item="{ item, props }">
        <v-list-item v-bind="props">
            <template #title>
                <span>{{item.raw.text}}</span>
            </template>
        </v-list-item>
    </template>
    <template #container>
      123
    </template> -->
  <v-select
    class="custom-select"
    :items="items"
    :model-value="selected"
    item-value="text"
    item-title="text"
    @update:model-value="(value) => {selected = value}"
  >
  </v-select>
</template>
<style lang="scss" scoped>
</style>