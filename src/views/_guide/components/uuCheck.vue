<template>
  <input type="checkbox">
</template>
<style lang="scss" scoped>
input[type=checkbox] {
  width: 3rem;
  height: 3rem;
  &+input[type=checkbox] {
    margin-left: 1rem;
  }
}
</style>