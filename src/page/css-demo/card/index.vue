<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="卡片1" name="1">
      <card1Vue />
    </el-tab-pane>
    <el-tab-pane label="卡片2" name="2">
      <card2Vue />
    </el-tab-pane>
    <el-tab-pane label="卡片3" name="3">
      <card3Vue />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import card1Vue from './card1.vue'
import card2Vue from './card2.vue'
import card3Vue from './card3.vue'
export default {
  name: 'card',
  components: { card1Vue, card2Vue, card3Vue },
  data() {
    return {
      label: '卡片样式',
      activeName: '1',
    }
  },
}
</script>
<style lang="css" scoped></style>
