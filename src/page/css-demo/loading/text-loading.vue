<template>
  <div class="box">
    <h1 data-text="正在加载中...">正在加载中...</h1>
  </div>
</template>
<script>
export default {
  name: 'text-loading',
}
</script>
<style lang="css" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 300px;
  background: #252839;
}
h1 {
  position: relative;
  font-size: 36px;
  color: #252839;
  line-height: 1.2em;
  text-transform: uppercase;
  -webkit-text-stroke: 0.3vw #383d52;
}
h1:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  color: #01fe87;
  overflow: hidden;
  -webkit-text-stroke: 0vw #383d52;
  border-right: 4px solid #01fe87;
  animation: animate 4s linear infinite;
}
@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }
  70%,
  90% {
    width: 100%;
  }
}
</style>
