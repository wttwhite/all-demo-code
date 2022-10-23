<template>
  <div class="app-layout">
    <SidebarCom class="sidebar"/>
    <router-view />
  </div>
</template>
<script>
import SidebarCom from '@/page/sidebar'
export default {
  name: 'App',
  components: { SidebarCom },
}
</script>
<style>
html, body {
  height: 100%;
  margin: 0;
}
</style>
<style scoped>
.app-layout {
  display: flex;
  height: 100%;
}
.sidebar {
  width: 240px;
  height: 100%;
}
</style>

