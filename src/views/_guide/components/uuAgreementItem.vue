<script setup>
import { ref, computed, defineProps, defineEmits, onMounted, watch  } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const isExpanded = ref(false);

const allChecked = computed({
  get() {
    return props.item.value;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
  
// onMounted(() => {
//     allCheckedValue(true)
// })
const skipAllCheckedWatch = ref(false);
watch(allChecked, (newValue) => {
  if(!skipAllCheckedWatch.value){
    allCheckedValue(newValue)
  }
  skipAllCheckedWatch.value = false;
});
  
const allCheckedValue = (value) => {
  props.item.items.forEach((subItem) => (subItem.checked = value));
  if(value){
    // closeExpand()
  }
}
const updateValue = (value) => {
  if(allChecked.value){
    if(props.item.items.filter((subItem) => subItem.checked).length > 0){
      skipAllCheckedWatch.value = true
    }
  }
  allChecked.value = props.item.items.every((subItem) => subItem.checked);
};
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const closeExpand = () => {
  if (allChecked.value === true) {
    isExpanded.value = false;
  }
};

</script>
<template>
    <div class="agreement_item_wrap">
      <div class="agreement_header" :class="{ on: isExpanded }">
        <div class="agreement_item">
          <v-checkbox
            v-model="allChecked"
            :label="item.label"
            hide-details
          ></v-checkbox>
            <!--@change="closeExpand"-->
          <v-btn
            type="button"
            class="toggle_btn"
            :class="{ on: isExpanded }"
            :aria-expanded="isExpanded"
            @click="toggleExpand"
          >
            <span>{{ isExpanded ? '닫기' : '열기' }}</span>
          </v-btn>
        </div>
      </div>
      <div v-show="isExpanded" class="agreement_inner">
        <div v-for="(subItem,i) in item.items" :key="i" class="agreement_item">
          <v-checkbox
            v-model="subItem.checked"
            :label="subItem.label"
            hide-details
            @change="updateValue(subItem.checked)"
          ></v-checkbox>
          <v-btn type="button">상세보기</v-btn>
        </div>
      </div>
    </div>
  </template>
  
 