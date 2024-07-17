<script setup lang="ts">
import { ref, watch, onMounted, inject } from 'vue'
import type { TabInterface } from './uuTabs.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'TabName',
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
  
const tabs = inject<TabInterface>('tabs-state')
const randomString = ref()
const index = ref<number>(0)
const isActive = ref(props.active !== undefined ? props.active:false);

onMounted(() => {
  tabs && (
    tabs.array.push(props.title),
    tabs.active.push(props.active),
    tabs.disabled.push(props.disabled),
    index.value = tabs.count,
    tabs.count++,
    tabs.active.map((item, i) => {
      randomString.value = tabs.id + i
    })
  )
  
  isActive.value = index.value === tabs?.selected
})

watch(
  () => tabs?.selected,
  () => {
    isActive.value = index.value === tabs?.selected
  }
)
</script>
<template>
  <div
    v-show="isActive"
    :id="`${randomString}tab`"
    class="tab-content-panel"
    :class="isActive? 'is-active':''"
    role="tabpanel"
    :aria-labelledby="`${randomString}tabs`"
    :tabindex="isActive? '0':'-1'"
  >
    <div class="tab-panel-inner">
      <slot />
    </div>
  </div>
</template>

<style>

</style>