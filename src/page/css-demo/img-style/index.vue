<template>
  <div style="display: flex">
    <imgPositionVue />
  </div>
</template>
<script>
import imgPositionVue from './img-position.vue'

export default {
  name: 'img-style',
  components: { imgPositionVue },
  data() {
    return {
      label: '图片样式',
    }
  },
}
</script>
