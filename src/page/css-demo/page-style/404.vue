<template>
  <div class="all">
    <div class="box">
      <h2>4<span class="circle"></span>4</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: '404page',
}
</script>
<style lang="css" scoped>
.all {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  background: linear-gradient(135deg, #03a9f4, #03a9f4 50%, #333 50%, #333);
  background-attachment: fixed;
}
.box {
  position: relative;
}
.box h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f3f3f3;
  font-size: 15em;
  text-shadow: -25px 25px 40px rgba(0, 0, 0, 0.5),
    -10px 10px 0px rgba(255, 255, 255, 0.5),
    -20px 20px 0px rgba(255, 255, 255, 0.2),
    -30px 30px 0px rgba(255, 255, 255, 0.05);
}
.circle {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, #fff, #777);
  border-radius: 50%;
  box-shadow: -25px 25px 40px rgba(0, 0, 0, 0.5);
  margin: 0 15px;
}
.circle:before {
  content: '';
  position: absolute;
  width: 180px;
  height: 180px;
  right: 0;
  top: 50%;
  background: linear-gradient(to top, #fff, #777);
  border-radius: 50%;
  transform: translateY(-50%);
}
.circle:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  right: 0;
  top: 50%;
  left: 50%;
  background: linear-gradient(315deg, #03a9f4, #03a9f4 50%, #333 50%, #333);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 1);
  animation: animate 5s steps(4) infinite;
}
@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
