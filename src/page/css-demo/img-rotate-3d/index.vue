<template>
  <div>
    <imgRotate3dVue />
  </div>
</template>
<script>
import imgRotate3dVue from './img-rotate-3d.vue'
export default {
  name: 'img-rotate-3d',
  components: { imgRotate3dVue },
  data() {
    return {
      label: '3d图片旋转',
    }
  },
}
</script>
<style lang="scss" scoped></style>
