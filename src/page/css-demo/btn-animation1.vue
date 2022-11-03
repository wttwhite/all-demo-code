<template>
  <div class="btn-animation1">
    <div class="btn-box">
      按钮
    </div>
    <div class="btn-box circle-box" >
      loading
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.btn-animation1 {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn-box {
  width: 100px;
  height: 48px;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.btn-box::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background-color: red;
  z-index: -2;
  transform-origin: 0 0;
  animation: btn-animation 2s linear infinite;
}
@keyframes btn-animation {
  100% {
    transform: rotate(360deg);
  }
}
.btn-box::after{
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background-color: #fff;
  z-index: -1;
  border-radius: 8px;
}

.circle-box {
  height: 100px;
  border-radius: 50px;
}
.circle-box::after{
  border-radius: 48px;
}
</style>