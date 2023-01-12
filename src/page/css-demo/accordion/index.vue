<template>
  <div>
    <accordion1Vue />
  </div>
</template>
<script>
import accordion1Vue from './accordion1.vue'
export default {
  name: 'accordion',
  components: { accordion1Vue },
  data() {
    return {
      label: '手风琴样式',
    }
  },
}
</script>
<style lang="scss" scoped></style>
