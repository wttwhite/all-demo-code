<template>
  <div class="container">
    <a href="http://www.webqdkf.com"><span>本站首页</span></a>
    <a href="http://www.webqdkf.com"><span>前端技术</span></a>
    <a href="http://www.webqdkf.com"><span>本站首页</span></a>
    <a href="http://www.webqdkf.com"><span>前端技术</span></a>
    <a href="http://www.webqdkf.com"><span>本站首页</span></a>
    <a href="http://www.webqdkf.com"><span>前端技术</span></a>
  </div>
</template>
<script>
export default {
  name: 'btn-5',
}
</script>
<style lang="css" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
}
.container a {
  position: relative;
  width: 150px;
  height: 55px;
  display: inline-block;
  background: #fff;
  margin: 20px;
}
.container a:before,
.container a:after {
  content: '';
  position: absolute;
  inset: 0;
  background: #f00;
  transition: 0.5s;
}

.container a:nth-child(1):before,
.container a:nth-child(1):after {
  inset: -3px;
  background: linear-gradient(45deg, #f72585, #7209b7, #3a0ca3, #4361ee);
}
.container a:nth-child(2):before,
.container a:nth-child(2):after {
  inset: -3px;

  background: linear-gradient(45deg, #ffbe0b, #fb5607, #ff006e, #8338ec);
}
.container a:nth-child(2):after {
  filter: blur(10px);
}

.container a:nth-child(3):before,
.container a:nth-child(3):after {
  left: -4px;
  bottom: -5px;
  right: -5px;
  top: -3px;
  background: linear-gradient(45deg, #3a86ff, #4cc9f0, #3a0ca3, #7209b7);
}
.container a:nth-child(4):before,
.container a:nth-child(4):after {
  background: linear-gradient(45deg, #f72585, #b5179e, #7209b7, #560bad);
}

.container a:nth-child(5):before,
.container a:nth-child(5):after {
  background: linear-gradient(45deg, #4361ee, #f15bb5, #7209b7, #3f37c9);
}
.container a:nth-child(6):before,
.container a:nth-child(6):after {
  background: linear-gradient(45deg, #006ba6, #0496ff, #d81159, #8f2d56);
}

/** inset 等同于top: -3px；right bottom left IE不支持 **/
.container a:hover:before {
  inset: -3px;
}
.container a:hover:after {
  inset: -3px;
  filter: blur(10px);
}
.container a span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: #3a86ff;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  border: 1px solid #040a29;
  overflow: hidden;
}
.container a span::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.075);
  transform: skew(25deg);
}
</style>
