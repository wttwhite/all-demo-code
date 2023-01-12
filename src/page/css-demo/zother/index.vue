<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="1" name="1">
      <div style="display: flex">
        <bgColor />
        <cursorCustomVue />
        <draggableVue />
      </div>
      <div style="display: flex">
        <dropShadowVue />
        <scrollCustomVue />
      </div>
    </el-tab-pane>
    <el-tab-pane label="页面平滑滚动" name="2">
      <scrollSmoothVue style="width: 500px; height: 500px" />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import bgColor from './bg-color.vue'
import cursorCustomVue from './cursor-custom.vue'
import draggableVue from './draggable.vue'
import dropShadowVue from './drop-shadow.vue'
import scrollCustomVue from './scroll-custom.vue'
import scrollSmoothVue from './scroll-smooth.vue'
export default {
  name: 'zother',
  components: {
    bgColor,
    cursorCustomVue,
    draggableVue,
    dropShadowVue,
    scrollCustomVue,
    scrollSmoothVue,
  },
  data() {
    return {
      label: '其他',
      activeName: '1',
    }
  },
}
</script>
<style lang="scss" scoped></style>
