<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu index="1">
      <template slot="title">样式效果</template>
      <el-menu-item
        v-for="(item, index) in cssDemoMenu"
        :key="index"
        :index="`1-${index + 1}`"
        @click.native="menuClick(item.path)"
      >
        {{ item.label }}</el-menu-item
      >
    </el-submenu>
    <el-submenu index="2">
      <!--      <i class="el-icon-document"></i>-->
      <template slot="title">js奇奇怪怪功能集合</template>
      <el-menu-item
        v-for="(item, index) in jsDemoMenu"
        :key="index"
        :index="`2-${index + 1}`"
        @click.native="menuClick(item.path)"
      >
        {{ item.label }}</el-menu-item
      >
      >
    </el-submenu>
  </el-menu>
</template>
<script>
import { getComponent } from '@/utils'
export default {
  name: 'sidebar',
  data() {
    return {
      cssDemoMenu: [],
      jsDemoMenu: [],
    }
  },
  mounted() {
    // require.context只能在这用，在js中不行，不知道为啥
    this.getDomMenu(
      'cssDemoMenu',
      getComponent(
        require.context(
          // 其组件目录的相对路径
          `../css-demo/`,
          // 是否查询其子目录
          true,
          // 匹配基础组件文件名的正则表达式
          /.vue$/
        )
      )
    )
    this.getDomMenu(
      'jsDemoMenu',
      getComponent(
        require.context(
          // 其组件目录的相对路径
          `../js-demo/`,
          // 是否查询其子目录
          true,
          // 匹配基础组件文件名的正则表达式
          /.vue$/
        )
      )
    )
  },
  methods: {
    menuClick(path) {
      this.$router.push(path)
    },
    getDomMenu(key, arr) {
      this[key] = arr.map((item) => {
        return {
          path: '/' + item.name,
          label: item.data().label,
        }
      })
    },
  },
}
</script>
