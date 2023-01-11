<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录1" name="1">
      <loginVue />
    </el-tab-pane>
    <el-tab-pane label="登录2" name="2">
      <login2Vue />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import loginVue from './login.vue'
import login2Vue from './login2.vue'
export default {
  name: 'login',
  components: { loginVue, login2Vue },
  data() {
    return {
      label: '登录样式',
      activeName: '1',
    }
  },
}
</script>
<style lang="scss" scoped></style>
