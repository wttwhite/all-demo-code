<template>
  <div class="all">
    <div class="container">
      <div class="box">
        <div class="imgBx">
          <img src="../img-rotate-3d/img/1.jpg" />
        </div>
        <div class="content">
          <h3>算法面试通关40讲</h3>
          <p>
            前Facebook工程师带你吃透大厂面试题;前Facebook工程师带你吃透大厂面试题;
            前Facebook工程师带你吃透大厂面试题前Facebook工程师带你吃透大厂面试题;
            前Facebook工程师带你吃透大厂面试题;前Facebook工程师带你吃透大厂面试题；
            前Facebook工程师带你吃透大厂面试题前Facebook工程师带你吃透大厂面试题;
            前Facebook工程师带你吃透大厂面试题;前Facebook工程师带你吃透大厂面试题；
            <a href="http://gk.link/a/11r6x" target="_blank">学习更多>> </a>
          </p>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="../img-rotate-3d/img/2.jpg" />
        </div>
        <div class="content">
          <h3>零基础学Python</h3>
          <p>
            掌握AI时代的编程语言；
            掌握AI时代的编程语言；掌握AI时代的编程语言；掌握AI时代的编程语言；
            掌握AI时代的编程语言；掌握AI时代的编程语言；掌握AI时代的编程语言；
            掌握AI时代的编程语言；掌握AI时代的编程语言；掌握AI时代的编程语言；
            掌握AI时代的编程语言；掌握AI时代的编程语言；
            掌握AI时代的编程语言；掌握AI时代的编程语言；掌握AI时代的编程语言；
            掌握AI时代的编程语言；掌握AI时代的编程语言；
            <a href="http://gk.link/a/11r6D" target="_blank">学习更多>> </a>
          </p>
        </div>
      </div>
      <div class="box">
        <div class="imgBx">
          <img src="../img-rotate-3d/img/3.jpg" />
        </div>
        <div class="content">
          <h3>Vue开发实战</h3>
          <p>
            帮助你从0开始搭建大型Vue项目； 掌握Vue核心知识点和实现原理；
            熟悉Vue生态及相关工具的使用； 打通前端工程化全链路技能点；
            具备开发大型前端项目的能力 从0开始搭建大型Vue项目；
            掌握Vue核心知识点和实现原理； 熟悉Vue生态及相关工具的使用；
            打通前端工程化全链路技能点； 具备开发大型前端项目的能力；
            熟悉Vue生态及相关工具的使用； 打通前端工程化全链路技能点；
            具备开发大型前端项目的能力；
            <a href="http://gk.link/a/11r6G" target="_blank">学习更多>> </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card8',
}
</script>
<style lang="css" scoped>
.all {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  background: #00a6bc;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}
.container {
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box {
  position: relative;
  width: 300px;
  height: 400px;
  background: #000;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.5);
}
.box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.box .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s;
}
.box:hover .imgBx img {
  opacity: 0;
}
.box .content {
  position: absolute;
  bottom: 20px;
  left: 10%;
  width: 80%;
  height: 60px;
  background: #fafafa;
  transition: 0.5s;
  overflow: hidden;

  padding: 15px;
  box-sizing: border-box;
}
.box:hover .content {
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
}
.box .content h3 {
  margin: 0;
  padding: 0;
  font-size: 20px;
  text-align: center;
}
.box .content p {
  margin: 10px 0 0;
  padding: 0;
  opacity: 0;
  line-height: 1.6em;
  transition: 0.5s;
  text-align: justify;
}
.box .content p a {
  color: #222;
  text-decoration: none;
}
.box .content p :hover {
  color: #00a6bc;
}
.box:hover .content p {
  opacity: 1;
  transition-delay: 0.5s;
}
</style>
