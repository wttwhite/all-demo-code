<template>
  <div>
    <bg1Vue />
  </div>
</template>
<script>
import bg1Vue from './bg1.vue'
export default {
  name: 'background',
  components: { bg1Vue },
  data() {
    return {
      label: '背景样式',
    }
  },
}
</script>
<style lang="scss" scoped></style>
