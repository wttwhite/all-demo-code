<template>
  <div class="box">
    <section class="bg" :style="{ filter: filterStyle }"></section>
    <div class="loading-text" :style="{ opacity: opacityStyle }">
      {{ load }}%
    </div>
  </div>
</template>
<script>
export default {
  name: 'img-loading',
  data() {
    return {
      load: 0,
      timer: null,
    }
  },
  computed: {
    opacityStyle() {
      return this.scale(this.load, 0, 100, 1, 0)
    },
    filterStyle() {
      return `blur(${this.scale(this.load, 0, 100, 30, 0)}px)`
    },
  },
  mounted() {
    this.timer = setInterval(this.blurring, 30)
  },
  methods: {
    blurring() {
      this.load++

      if (this.load > 99) {
        clearInterval(this.int)
      }
    },
    scale(num, in_min, in_max, out_min, out_max) {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      )
    },
  },
}
</script>
<style lang="css" scoped>
.box {
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  overflow: hidden;
  margin: 0;
  position: relative;
}

.bg {
  background: url('../img-rotate-3d/img/1.jpg') no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(300px + 60px);
  height: calc(300px + 60px);
  z-index: -1;
  filter: blur(0px);
}

.loading-text {
  font-size: 50px;
  color: #fff;
}
</style>
