<template>
  <div>
    <search3dVue />
    <search2Vue />
  </div>
</template>
<script>
import search3dVue from './search3d.vue'
import search2Vue from './search2.vue'
export default {
  name: 'search',
  components: { search3dVue, search2Vue },
  data() {
    return {
      label: '搜索样式',
    }
  },
}
</script>
<style lang="scss" scoped></style>
