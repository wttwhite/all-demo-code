<template>
  <div id="box">
    <img v-for="num in 3" :key="num" :src="require(`./img/${num}.jpg`)" />
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
  /* animation: go 45s linear infinite; */
  transform: rotate(20deg);
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
}
#box img {
  width: 280px;
  height: 400px;
  position: absolute;
  left: 0px;
  top: 0px;
}
/** translateZ 可以控制旋转范围大小 **/
#box img:nth-child(3) {
  transform: rotate(20deg);
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
}
#box img:nth-child(1) {
  transform: rotate(-20deg);
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
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
