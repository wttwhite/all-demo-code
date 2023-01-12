<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="404页面" name="1">
      <page404 />
    </el-tab-pane>
    <el-tab-pane label="模态框" name="2">
      <modelValue />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import page404 from './404.vue'
import modelValue from './model-demo.vue'
export default {
  name: 'page-style',
  components: { page404, modelValue },
  data() {
    return {
      label: '页面样式',
      activeName: '1',
    }
  },
}
</script>
<style lang="scss" scoped></style>
