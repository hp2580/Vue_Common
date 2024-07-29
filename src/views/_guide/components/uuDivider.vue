<script setup>
</script>
<template>
  <div class="container">
    <div>
      <h2 class="mb-4">Small (Direction: Horizontal, Thickness: 1px)</h2>
      <v-divider></v-divider>
    </div>
    <div>
      <h2 class="mb-4">Small-Dashed (Direction: Horizontal, Thickness: 1px, style: dashed)</h2>
      <v-divider theme="dashed"></v-divider>
    </div>
    <div>
      <h2 class="mb-4">Size Large (Direction: Horizontal, Thickness: 12px)</h2>
      <v-divider theme="large"></v-divider>
    </div>
    <div>
      <h2 class="mb-4">Vertical (Direction: Vertical, Length: 1px)</h2>
        <v-divider vertical></v-divider>
    </div>
  </div>
</template>
<style lang='scss' scoped>
div + div {
  margin-top: 2rem;
}
</style>