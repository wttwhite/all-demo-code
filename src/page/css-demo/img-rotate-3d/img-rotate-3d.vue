<template>
  <div id="box">
    <img v-for="num in 10" :key="num" :src="require(`./img/${num}.jpg`)" />
  </div>
</template>
<script>
export default {
  name: 'img-rotate-3d',
  data() {
    return {
      label: '图片旋转3d',
    }
  },
}
</script>
<style lang="css" scoped>
#box {
  width: 280px;
  height: 400px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(0deg);
  animation: go 45s linear infinite;
}
#box img {
  width: 280px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 0;
}
/** translateZ 可以控制旋转范围大小 **/
#box img:nth-child(1) {
  transform: rotateY(0deg) translateZ(450px);
}
#box img:nth-child(2) {
  transform: rotateY(36deg) translateZ(450px);
}
#box img:nth-child(3) {
  transform: rotateY(72deg) translateZ(450px);
}
#box img:nth-child(4) {
  transform: rotateY(108deg) translateZ(450px);
}
#box img:nth-child(5) {
  transform: rotateY(144deg) translateZ(450px);
}
#box img:nth-child(6) {
  transform: rotateY(180deg) translateZ(450px);
}
#box img:nth-child(7) {
  transform: rotateY(216deg) translateZ(450px);
}
#box img:nth-child(8) {
  transform: rotateY(252deg) translateZ(450px);
}
#box img:nth-child(9) {
  transform: rotateY(288deg) translateZ(450px);
}
#box img:nth-child(10) {
  transform: rotateY(324deg) translateZ(450px);
}
@keyframes go {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(20deg) rotateY(180deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(360deg);
  }
  75% {
    transform: rotateX(-20deg) rotateY(540deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(720deg);
  }
}
</style>
