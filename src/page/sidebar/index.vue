<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">样式效果</template>
        <el-menu-item index="1-1" @click.native="menuClick('/img-position')">九宫格图片</el-menu-item>
      </el-submenu>
    <el-menu-item index="2" disabled>
<!--      <i class="el-icon-document"></i>-->
      <span slot="title">js奇奇怪怪功能集合</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    name: 'sidebar',
    methods: {
      menuClick (path) {
        this.$router.push(path)
      }
    }
  }
</script>