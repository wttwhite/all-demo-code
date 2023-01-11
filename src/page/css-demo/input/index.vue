<template>
  <div>
    <input1Vue />
  </div>
</template>
<script>
import input1Vue from './input1.vue'
export default {
  name: 'input',
  components: { input1Vue },
  data() {
    return {
      label: '输入框样式',
    }
  },
}
</script>
<style lang="css" scoped></style>
