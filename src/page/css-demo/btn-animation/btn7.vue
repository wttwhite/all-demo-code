<template>
  <div class="box">
    <a href="#" style="--clr: #12a0e7; --i: 0" targer="_blank"
      ><span>首页</span></a
    >
    <a href="#" style="--clr: #f39c10; --i: 1" targer="_blank"
      ><span>HTML/CSS</span></a
    >
  </div>
</template>
<script>
export default {
  name: 'btn7',
  data() {
    return {}
  },
}
</script>
<style lang="css" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  background: #0e1538;
  overflow: hidden;
}
a {
  position: relative;
  padding: 20px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-decoration: none;
  margin: 80px 40px;
  transition: 1s;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, transparent, #0004);
}
a:hover {
  background: var(--clr);
  box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr), 0 0 60px var(--clr),
    0 0 100px var(--clr);
}
a::before {
  content: '';
  position: absolute;
  width: 40px;
  height: 400%;
  background: var(--clr);
  transition: 1s;
  animation: animate 2s linear infinite;
  animation-delay: calc(-0.33s * var(--i));
}
a:hover::before {
  width: 120%;
}
a::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: #0e1538;
  transition: 0.5s;
}
a:hover::after {
  background: var(--clr);
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
span {
  position: relative;
  z-index: 1;
  font-size: 2em;
  color: #fff;
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 4px;
}
a:hover span {
  opacity: 1;
}
</style>
