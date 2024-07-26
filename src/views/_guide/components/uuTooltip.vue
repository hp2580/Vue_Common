<script setup>
import { ref } from 'vue';

const show = ref(false);
</script>
<template>
  <v-tooltip
    v-model="show"
    content-class="custom-tooltip"
    :open-on-hover="false"
    location="top"
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        @click="show = !show"
      >
        tooltip
      </v-btn>
    </template>
    <div>
      tooltip
      <v-btn size="small" icon>
        <v-icon color="black" icon="$close" size="small"></v-icon>
      </v-btn>
    </div>
  </v-tooltip>
</template>