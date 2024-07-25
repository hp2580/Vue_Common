<script setup>
const colors = [
  'primary',
  'secondary',
  'tertiary',
  'white',
  'black',
  'blue-050',
  'blue-100',
  'blue-200',
  'blue-300',
  'blue-400',
  'blue-500',
  'red-050',
  'red-100',
  'red-200',
  'red-300',
  'red-400',
  'red-500',
  'orange-050',
  'orange-100',
  'orange-200',
  'orange-300',
  'orange-400',
  'orange-500',
  'yellow-050',
  'yellow-100',
  'yellow-200',
  'yellow-300',
  'yellow-400',
  'yellow-500',
  'green-050',
  'green-100',
  'green-200',
  'green-300',
  'green-400',
  'green-500',
  'bg-light-gray',
  'bg-warm-gray',
  'gray-030',
  'gray-040',
  'gray-050',
  'gray-060',
  'gray-070',
  'gray-080',
  'gray-090',
  'dark-gray-050',
  'dark-gray-100',
  'dark-gray-200',
  'dark-gray-300',
  'dark-gray-400',
  'dark-gray-500',
  'dark-gray-600',
  'dark-gray-700',
  'dark-gray-800',
]
</script>
<template>
    <div class="content-body">
      <section class="section">
        <div v-for="color in colors">
          <span :class="`text-${color}`">{{ `class: text-${color}` }}</span>
          <span :class="`bg-${color}`">{{ `class: bg-${color}` }}</span>
        </div>
        <div>
          <span class="txt-steel-blue">class: txt-steel-blue</span>
          <span class="bg-steel-blue">class: bg-steel-blue</span>
        </div>
      </section>
    </div>
</template>

<style lang="scss" scoped>
div + div {
  margin-top: 1rem;
}

span {
  font-size: 2rem;
  & + span {
    margin-left: 1rem;
  }
}

.txt-white {
  background-color: #000;
}

.bg-black {
  color: #fff;
}
</style>