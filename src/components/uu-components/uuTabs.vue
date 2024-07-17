<script setup lang="ts">
import { reactive, provide, onMounted } from 'vue'
import { getRandomId } from '@/assets/script/randomString'

const emit = defineEmits([
  /**
   * Update Active Index
   * @return index
   */
  'selected'
])
const randomString = getRandomId()
const state = reactive({
  id: randomString,
  array: [],
  count: 0,
  selected: 0,
  active: [],
  disabled: []
})

onMounted(() => {
  state.active.map((item, i) => {
    item ? state.selected = i : null
  })
  emit('selected', state.selected)
})

const selectedTab = (i) => {
  state.selected = i
  state.active.map((item, index, arr) => {
    i === index ? arr[index] = true : arr[index] = false
  })
  emit('selected', state.selected);
}

const keyRight = (e) => {
  const target = e.currentTarget
  const nextEl = target.nextElementSibling
  if (nextEl !== null) {
    nextEl.focus()
    nextEl.click()
  }
}

const keyLeft = (e) => {
  const target = e.currentTarget
  const prevEl = target.previousElementSibling
  if (prevEl !== null) {
    prevEl.focus()
    prevEl.click()
  }
}

provide('tabs-state', state)
</script>

<template>
  <div class="tab">
    <!-- Tab links -->
    <div class="tab-link" role="tablist">
      <button v-for="(item, index) in state.array" :id="`${randomString + index}tabs`" :key="index" type="button"
        class="tab-link-btn" :class="[state.selected === index ? 'is-active' : '']" role="tab"
        :disabled="state.disabled[index]" :aria-controls="`${randomString + index}tab`"
        :aria-selected="state.selected === index" :tabindex="state.selected === index ? '0' : '-1'"
        @click="selectedTab(index)" @keyup.right="keyRight($event)" @keyup.left="keyLeft($event)">
        {{ item }}
      </button>
    </div>
    <slot name="tab-slot" />
    <!-- Tab content -->
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<style></style>