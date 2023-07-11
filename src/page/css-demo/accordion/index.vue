<template>
  <div>
    <accordion1Vue />
    <div class="tag-box">
      非遗传承人
      <div class="selected"></div>
    </div>
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
<style lang="scss" scoped>
.tag-box {
  display: inline-block;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #1c8ffb;
  line-height: 18px;
  font-size: 12px;
  color: #1c8ffb;
  padding: 5px 16px;
  position: relative;
  .selected {
    width: 0;
    height: 0;
    border-right: 10px solid #1c8ffb;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #1c8ffb;
    border-top: 10px solid transparent;
    border-bottom-right-radius: 2px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
