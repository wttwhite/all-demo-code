<template>
  <div class="read-box">
    <a href="http://www.webqdkf.com" class="btn">
      <i></i>
      <span>阅读更多-hover</span>
    </a>
  </div>
</template>
<script>
export default {
  name: 'btn-2',
}
</script>
<style scoped>
.read-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 250px;
  background: #28272a;
}
a {
  position: relative;
  width: 400px;
  height: 60px;
  background: #333;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 1.25em;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
a::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #359ad8;
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
  transform-origin: right;
}
a:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
a span {
  display: inline-block;
  z-index: 2;
  line-height: 1em;
  transition: 0.5s ease-in-out;
}
a:hover span {
  color: #333;
}
a i {
  position: relative;
  display: inline-block;
  width: 2px;
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
  background: #d3d636;
  transition: 0.5s, width 0.5s, height 0.5s;
  transition-delay: 0s, 0.5s, 1s;
}
a:hover i {
  width: 30px;
  height: 2px;
  background: #333;
  transition-delay: 0s, 1s, 0.5s;
}
a i::before {
  content: '';
  position: absolute;
  top: 0.5px;
  right: 0px;
  width: 50%;
  height: 2px;
  background: transparent;
  transform-origin: right;
  rotate: 0;
  transition: 1s;
}
a:hover i::before {
  background: #333;
  rotate: 45deg;
  transition-delay: 1.5s;
}

a i::after {
  content: '';
  position: absolute;
  top: -0.5px;
  right: 0px;
  width: 50%;
  height: 2px;
  background: transparent;
  transform-origin: right;
  rotate: 0;
  transition: 1s;
}
a:hover i::after {
  background: #333;
  rotate: -45deg;
  transition-delay: 1.5s;
}
</style>
