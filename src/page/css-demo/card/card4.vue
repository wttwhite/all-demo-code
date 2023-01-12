<template>
  <div class="all">
    <div class="container">
      <div class="box">
        <div class="imgBx">
          <img src="../img-rotate-3d/img/1.jpg" />
        </div>
        <div class="content">
          <h2>杨小爱<br /><span>web前端开发</span></h2>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="img2.jpg" />
        </div>
        <div class="content">
          <h2>CSS小姐<br /><span>JavaScript开发</span></h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card4',
}
</script>
<style lang="css" scoped>
.all {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  width: 770px;
  background: #010615;
}
.container {
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.box {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  margin: 40px;
  justify-content: center;
  align-items: center;
  background: #060c21;
}
.imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  color: #fff;
  z-index: 2;
  transition: 0.5s ease-in-out;
}
.box:hover .imgBx {
  transform: translate(-35px, -35px);
}
.imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  transition: 0.5s ease-in-out;
}
.box:hover .content {
  transform: translate(35px, 35px);
}
.box .content h2 {
  font-size: 20px;
  color: #111;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;
}
.box .content h2 span {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 2px;
}
@media (max-width: 768px) {
  .box:hover .imgBx {
    transform: translate(0px, -35px);
  }
  .box:hover .content {
    transform: translate(0px, 35px);
  }
}
</style>
