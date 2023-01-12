<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="菜单1" name="1">
      <menuHover />
    </el-tab-pane>
    <el-tab-pane label="菜单2" name="2">
      <menu2Vue />
    </el-tab-pane>
    <el-tab-pane label="菜单3" name="3">
      <menu3Vue />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import menuHover from './hover-menu.vue'
import menu2Vue from './menu2.vue'
import menu3Vue from './menu3.vue'
export default {
  name: 'menu-style',
  components: { menuHover, menu2Vue, menu3Vue },
  data() {
    return {
      label: '菜单样式',
      activeName: '1',
    }
  },
}
</script>
<style lang="css" scoped></style>
