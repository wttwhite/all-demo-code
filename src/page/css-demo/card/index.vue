<template>
  <div>
    <card1Vue />
  </div>
</template>
<script>
import card1Vue from './card1.vue'
export default {
  name: 'card',
  components: { card1Vue },
  data() {
    return {
      label: '卡片样式',
    }
  },
}
</script>
<style lang="scss" scoped></style>
