<template>
  <div class="box">
    <ul>
      <li
        v-for="num in 5"
        :key="num"
        :class="[activeIndex === num && 'active']"
        @mousemove="mousemove($event, num)"
      >
        <a href="#">
          <i class="el-icon-setting"></i>
        </a>
      </li>

      <div
        id="marker"
        :style="{
          left: left + 'px',
          width: width + 'px',
        }"
      ></div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'menu2',
  data() {
    return {
      activeIndex: 1,
      left: 40,
      width: 100,
    }
  },
  methods: {
    mousemove(e, index) {
      this.left = e.target.offsetLeft
      this.activeIndex = index
    },
  },
}
</script>
<style lang="css" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  background: #1e2759;
}
ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
}
ul li {
  list-style: none;
}
ul li a {
  position: relative;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  padding: 20px 30px;
  z-index: 1000;
  backdrop-filter: blur(15px);
}
/* ul li a ion-icon { */
ul li a .el-icon-setting {
  font-size: 2.5em;
  pointer-events: none;
  opacity: 0.25;
  transition: 0.25s;
}
/* ul li.active a ion-icon { */
ul li.active a .el-icon-setting {
  opacity: 1;
}
#marker {
  position: absolute;
  top: 0;
  transition: 0.5s;
  z-index: 1;
}
#marker::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 40px;
  border-radius: 8px;
}
ul li:nth-child(1).active ~ #marker::before {
  background: #5da6ff;
  box-shadow: 0 0 15px #5da6ff, 0 0 30px #5da6ff, 0 0 45px #5da6ff,
    0 0 60px #5da6ff;
}
ul li:nth-child(2).active ~ #marker::before {
  background: #ff0;
  box-shadow: 0 0 15px #ff0, 0 0 30px #ff0, 0 0 45px #ff0, 0 0 60px #ff0;
}
ul li:nth-child(3).active ~ #marker::before {
  background: #0f0;
  box-shadow: 0 0 15px #0f0, 0 0 30px #0f0, 0 0 45px #0f0, 0 0 60px #0f0;
}
ul li:nth-child(4).active ~ #marker::before {
  background: #df2fff;
  box-shadow: 0 0 15px #df2fff, 0 0 30px #df2fff, 0 0 45px #df2fff,
    0 0 60px #df2fff;
}
ul li:nth-child(5).active ~ #marker::before {
  background: #ff308f;
  box-shadow: 0 0 15px #ff308f, 0 0 30px #ff308f, 0 0 45px #ff308f,
    0 0 60px #ff308f;
}
</style>
