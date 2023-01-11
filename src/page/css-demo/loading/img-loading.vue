<template>
  <div class="box">
    <section class="bg"></section>
    <div class="loading-text">0%</div>
  </div>
</template>
<script>
export default {
  name: 'img-loading',
}
</script>
<style lang="css" scoped>
body {
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  overflow: hidden;
  margin: 0;
}

.bg {
  background: url('../img-rotate-3d/img/1.jpg') no-repeat center center/cover;
  position: absolute;
  top: -30px;
  left: -30px;
  width: calc(100vw + 60px);
  height: calc(100vh + 60px);
  z-index: -1;
  filter: blur(0px);
}

.loading-text {
  font-size: 50px;
  color: #fff;
}
</style>
