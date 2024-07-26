<script setup>
import { ref } from 'vue';

const tab1 = ref(null),
      tab2 = ref(null),
      tab3 = ref(null);
</script>
<template>
  <div class="component-example">
    <h2>Default</h2>
    <v-tabs
      v-model="tab1"
    >
      <v-tab value="one">TAB-1</v-tab>
      <v-tab value="two">TAB-2</v-tab>
      <v-tab value="three">TAB-3</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab1">
      <v-tabs-window-item value="one">
        TAB-CONTENT1
      </v-tabs-window-item>
      <v-tabs-window-item value="two">
        TAB-CONTENT2
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        TAB-CONTENT3
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
  <hr class="divider"/>
  <div class="component-example">
    <h2>GROW</h2>
    <v-tabs
      v-model="tab2"
      grow
    >
      <v-tab value="one">TAB-1</v-tab>
      <v-tab value="two">TAB-2</v-tab>
      <v-tab value="three">TAB-3</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab2">
      <v-tabs-window-item value="one">
        TAB-CONTENT1
      </v-tabs-window-item>
      <v-tabs-window-item value="two">
        TAB-CONTENT2
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        TAB-CONTENT3
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
  <hr class="divider"/>
  <div class="component-example">
    <h2>CENTER</h2>
    <v-tabs
      v-model="tab3"
      align-tabs="center"
    >
      <v-tab value="one">TAB-1</v-tab>
      <v-tab value="two">TAB-2</v-tab>
      <v-tab value="three">TAB-3</v-tab>
    </v-tabs>
    <v-tabs-window v-model="tab3">
      <v-tabs-window-item value="one">
        TAB-CONTENT1
      </v-tabs-window-item>
      <v-tabs-window-item value="two">
        TAB-CONTENT2
      </v-tabs-window-item>
      <v-tabs-window-item value="three">
        TAB-CONTENT3
      </v-tabs-window-item>
    </v-tabs-window>
  </div>
</template>
<style lang="scss" scoped>
.divider {
  margin: 3rem 0;
  border: 0;
  border-bottom: 0.3rem solid #ccc;
}
</style>