<template>
  <div class="box">
    <a href="#" style="--clr: #12a0e7; --i: 0" targer="_blank"
      ><span>首页</span><i></i
    ></a>
    <a href="#" style="--clr: #f39c10; --i: 1" targer="_blank"
      ><span>HTML/CSS</span><i></i
    ></a>
    <a href="#" style="--clr: #23800a; --i: 2" targer="_blank"
      ><span>JavaScript</span><i></i
    ></a>
  </div>
</template>
<script>
export default {
  name: 'btn8',
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
  background: #27282c;
  flex-direction: column;
  gap: 40px;
}
a {
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;
}
a:hover {
  background: var(--clr);
  color: var(--clr);
  letter-spacing: 0.25em;
  box-shadow: 0 0 35px var(--clr);
}
a:before {
  content: '';
  position: absolute;
  inset: 2px;
  background: #27282c;
}
span {
  position: relative;
  z-index: 1;
}
i {
  position: absolute;
  inset: 0;
  display: block;
}
i::before {
  content: '';
  position: absolute;
  top: -3.5px;
  left: 80%;
  width: 10px;
  height: 5px;
  background: #27282c;
  transform: translateX(-50%);
  border: 2px solid var(--clr);
  transition: 0.5s;
}
a:hover i::before {
  width: 20px;
  left: 20%;
}
i::after {
  content: '';
  position: absolute;
  bottom: -3.5px;
  left: 20%;
  width: 10px;
  height: 5px;
  background: #27282c;
  transform: translateX(-50%);
  border: 2px solid var(--clr);
  transition: 0.5s;
}
a:hover i::after {
  width: 20px;
  left: 80%;
}
</style>
