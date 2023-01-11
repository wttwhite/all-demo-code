<template>
  <div class="box">
    <div class="container">
      <div class="box" style="--clr: #00a6bc">
        <div class="content">
          <div class="icon">
            <!-- <i class="fa fa-paint-brush"></i> -->
            <i class="el-icon-s-promotion"></i>
          </div>
          <div class="text">
            <h3>UI设计</h3>
            <p>
              UI设计（或称界面设计）UI即User
              Interface(用户界面)的简称，它分为实体UI和虚拟UI，互联网常用的UI设计是虚拟UI。
            </p>
            <a href="http://www.webqdkf.com" target="_blank">了解更多</a>
          </div>
        </div>
      </div>
      <div class="box" style="--clr: #f75bea">
        <div class="content">
          <div class="icon"><i class="fa fa-file-code-o"></i></div>
          <div class="text">
            <h3>前端开发</h3>
            <p>
              前端开发,是通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互。
            </p>
            <a href="http://www.webqdkf.com" target="_blank">了解更多</a>
          </div>
        </div>
      </div>
      <div class="box" style="--clr: #e9ca18">
        <div class="content">
          <div class="icon"><i class="fa fa-random"></i></div>
          <div class="text">
            <h3>后端开发</h3>
            <p>
              后端开发即“服务器端”开发，主要涉及软件系统“后端”的东西。比如，用于托管网站、App数据的服务器、放置在后端服务器与浏览器。
            </p>
            <a href="http://www.webqdkf.com" target="_blank">了解更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card3',
}
</script>
<style lang="css" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  padding: 50px 0;
}
.container .box {
  position: relative;
  width: 300px;
  height: 350px;
  background: #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container .box::before {
  content: '';
  position: absolute;
  border-top: 4px solid var(--clr);
  border-bottom: 4px solid var(--clr);
  inset: -10px 50px;
  z-index: -2;
  transform: skewY(15deg);
  transition: 0.5s ease-in-out;
}
.container .box:hover::before {
  transform: skew(0deg);
  inset: -10px 40px;
}
.container .box::after {
  content: '';
  position: absolute;
  border-left: 4px solid var(--clr);
  border-right: 4px solid var(--clr);
  inset: 60px -10px;
  z-index: -1;
  transform: skew(15deg);
  transition: 0.5s ease-in-out;
}
.container .box:hover::after {
  transform: skew(0deg);
  inset: 40px -10px;
}

.container .box .content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding: 0 20px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.container .box .content .icon {
  color: var(--clr);
  font-size: 2.5em;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2e2e2e;
  color: var(--clr);
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 6px var(--clr);
}
.container .box:hover .content .icon {
  color: #2e2e2e;
  background: var(--clr);
  box-shadow: 0 0 0 4px #2e2e2e, 0 0 0 300px var(--clr);
}
.container .box .content .text h3 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 500;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content .text h3 {
  color: #2e2e2e;
}
.container .box .content .text p {
  color: #777;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content .text p {
  color: #333;
}
.container .box .content .text a {
  position: relative;
  background: var(--clr);
  color: #2e2e2e;
  padding: 8px 15px;
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  margin-top: 10px;
  transition: 0.5s ease-in-out;
}
.container .box:hover .content .text a {
  background: #2e2e2e;
  color: var(--clr);
}
</style>
