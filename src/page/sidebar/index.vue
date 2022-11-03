<template>
  <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">样式效果</template>
        <el-menu-item v-for="(item ,index) in cssDemoMenu" :index="`1-${index + 1}`" @click.native="menuClick(item.path)">
          {{ item.label }}</el-menu-item>
      </el-submenu>
    <el-submenu index="2">
      <!--      <i class="el-icon-document"></i>-->
      <template slot="title">js奇奇怪怪功能集合</template>
      <el-menu-item index="2-1" @click.native="menuClick('/interview-demo')">js-demo</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        cssDemoMenu: [
          { label: '九宫格图片', path: '/img-position' },
          { label: '按钮边框旋转', path: '/btn-animation1' },
          { label: '文字倒影', path: '/text-style1' },
        ],
      }
    },
    methods: {
      menuClick (path) {
        this.$router.push(path)
      }
    }
  }
</script>