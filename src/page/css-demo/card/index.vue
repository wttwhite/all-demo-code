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
    <el-tab-pane label="卡片4" name="4">
      <card4Vue />
    </el-tab-pane>
    <el-tab-pane label="卡片5" name="5">
      <card5Vue />
    </el-tab-pane>
    <el-tab-pane label="卡片6" name="6">
      <card6Vue />
    </el-tab-pane>
    <el-tab-pane label="卡片7" name="7">
      <card7Vue />
    </el-tab-pane>
    <el-tab-pane label="卡片8" name="8">
      <card8Vue />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import card1Vue from './card1.vue'
import card2Vue from './card2.vue'
import card3Vue from './card3.vue'
import card4Vue from './card4.vue'
import card5Vue from './card5.vue'
import card6Vue from './card6.vue'
import card7Vue from './card7.vue'
import card8Vue from './card8.vue'
export default {
  name: 'card',
  components: {
    card1Vue,
    card2Vue,
    card3Vue,
    card4Vue,
    card5Vue,
    card6Vue,
    card7Vue,
    card8Vue,
  },
  data() {
    return {
      label: '卡片样式',
      activeName: '1',
    }
  },
}
</script>
<style lang="css" scoped></style>
