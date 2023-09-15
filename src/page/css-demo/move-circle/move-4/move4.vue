<template>
  <div id="box">
    <img
      v-for="(item, index) in imgList"
      :key="index"
      :src="require(`./img/${item.imgKey}.jpg`)"
      :style="{ transform: `rotate(${item.rotate}deg)` }"
      @click="imgClick(item, index)"
    />
  </div>
</template>
<script>
export default {
  name: 'img-rotate-3d',
  data() {
    return {
      allImgObj: {
        1: { name: 1, imgKey: '1' },
        2: { name: 2, imgKey: '2' },
        3: { name: 3, imgKey: '3' },
        4: { name: 4, imgKey: '4' },
        5: { name: 5, imgKey: '5' },
        6: { name: 6, imgKey: '6' },
        7: { name: 7, imgKey: '7' },
      },
      imgList: [
        { name: 1, imgKey: '1', rotate: -40 },
        { name: 2, imgKey: '2', rotate: -20 },
        { name: 3, imgKey: '3', rotate: 0 },
        { name: 4, imgKey: '4', rotate: 20 },
        { name: 5, imgKey: '5', rotate: 40 },
      ],
    }
  },
  methods: {
    imgClick(item, index) {
      if (index < 2) {
        // 假设点左边，往右边走
        this.imgList.forEach((img) => {
          img.rotate += 20
        })
        this.imgList.pop()
        if (this.imgList[0].name === 1) {
          this.imgList.unshift(this.allImgObj[7])
        } else {
          const key = this.imgList[0].name - 1
          this.imgList.unshift(this.allImgObj[key])
        }
      }
      if (index > 2) {
        // 假设点右边，往左边走
        this.imgList.forEach((img) => {
          img.rotate -= 20
        })
        this.imgList.shift()
        if (this.imgList[3].name === 7) {
          this.imgList.push(this.allImgObj[1])
        } else {
          const key = this.imgList[3].name + 1
          this.imgList.push(this.allImgObj[key])
        }
      }
    },
  },
}
</script>
<style lang="css" scoped>
#box {
  width: 280px;
  height: 400px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  /* animation: go 45s linear infinite; */
  transform: rotate(0deg);
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
}
#box img {
  width: 280px;
  height: 400px;
  position: absolute;
  left: 0px;
  top: 0px;
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
}
/** translateZ 可以控制旋转范围大小 **/
#box img111:nth-child(3) {
  transform: rotate(20deg);
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
}
#box img111:nth-child(1) {
  transform: rotate(-20deg);
  transform-origin: 140px 1280px; /*设置旋转中心为元素中心*/
}
@keyframes go {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(20deg) rotateY(180deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(360deg);
  }
  75% {
    transform: rotateX(-20deg) rotateY(540deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(720deg);
  }
}
</style>
