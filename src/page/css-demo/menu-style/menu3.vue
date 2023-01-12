<template>
  <div>
    <section>
      <div class="box">
        <h3>优秀自媒体前十专家排行榜</h3>
        <div class="list">
          <div class="imgBx">
            <img src="../img-rotate-3d/img/1.jpg" />
          </div>
          <div class="content">
            <h2 class="rank">1</h2>
            <h4>王二</h4>
            <p>前端开发工程师</p>
          </div>
        </div>
        <div class="list">
          <div class="imgBx">
            <img src="../img-rotate-3d/img/2.jpg" />
          </div>
          <div class="content">
            <h2 class="rank">2</h2>
            <h4>王二1</h4>
            <p>前端开发工程师1</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'menu3',
}
</script>
<style lang="css" scoped>
section {
  position: relative;
  background: #00a6bc;
  min-height: 600px;
  width: 500px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  position: relative;
  min-width: 350px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  z-index: 10;
  padding: 20px;
  backdrop-filter: blur(25px);
}
.box h3 {
  color: #fff;
  margin-bottom: 20px;
}
.box .list {
  position: relative;
  display: flex;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
}
.box .list:hover {
  background: #fff;
  box-shadow: -15px 30px 50px rgba(0, 0, 0, 0.5);
  transform: scale(1.15) translateX(30px) translateY(-15px);
  z-index: 1000;
}
.box .list .imgBx {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 10px;
}
.box .list .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.box .list .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.box .list .content .rank {
  position: absolute;
  right: -50px;
  color: #00a6bc;
  transition: 0.5s;
  font-size: 2em;
}
.box .list:hover .content .rank {
  right: 20px;
}
.box .list .content h4 {
  line-height: 1.2em;
  font-weight: 600;
  transition: 0.5s;
}
.box .list .content p {
  font-size: 0.75em;
  transition: 0.5s;
}
.box .list:hover .content h4,
.box .list:hover .content p {
  color: #333;
}
</style>
