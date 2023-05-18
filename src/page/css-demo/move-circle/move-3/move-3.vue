<template>
  <div class="columnar-bubbling-box">
    <div class="inner-box">
      <div
        class="bubble-box"
        v-for="(item, index) in computedList"
        :key="index"
        :style="{
          background: `url(${item.bgImg}) no-repeat center`,
          width: item.width,
          height: item.width,
          transform: `translateX(${parseInt(
            Math.random() * (item.maxX - item.minX + 1) + item.minX
          )}px)`,
        }"
        ref="bubbleBox"
      >
        <div class="top-box">
          <span :style="{ fontSize: item.valueSize }">
            <span :style="{ fontSize: item.valueSize, 'font-weight': 900 }"
              >+</span
            >
            <span>{{ item.value }}</span>
          </span>
          <span :style="{ fontSize: item.titleSize }">/{{ item.unit }}</span>
        </div>
        <div
          :style="{ color: item.color, fontSize: item.titleSize }"
          class="title-box"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ConstConfig } from '../move-3/const'
import { addClass, removeClass, hasClass } from 'hsja-utils'
export default {
  name: 'columnar-bubbling',
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          { value: 10, title: '共享书屋', unit: '次' },
          { value: 20, title: '运动健身', unit: '次' },
          { value: 100, title: '达人授课', unit: '次' },
          { value: 10, title: '空间使用', unit: '次' },
          { value: 50, title: '志愿服务', unit: '次' },
        ]
      },
    },
    unit: {
      type: String,
      default: '次',
    },
  },
  computed: {
    computedList() {
      let list = this.list.map((item) => {
        !item.unit && (item.unit = this.unit)
        let constConfigType = 0
        if (item.value < 20) {
          constConfigType = 0
        } else if (item.value < 50) {
          constConfigType = 1
        } else if (item.value < 100) {
          constConfigType = 2
        } else {
          constConfigType = 3
        }
        return {
          ...item,
          ...ConstConfig[constConfigType],
        }
      })
      const len = list.length
      if (len < 10) {
        return [...list, ...list, ...list, ...list, ...list]
      } else if (len < 30) {
        return [...list, ...list, ...list]
      } else if (len > 60) {
        return [...list, ...list]
      } else {
        return list
      }
    },
  },
  watch: {
    list: {
      handler() {
        this.clearTimer()
        this.timer = setInterval(() => {
          this.setBubblePos()
        }, 700)
      },
      immediate: true,
    },
  },
  data() {
    return {
      timer: null,
    }
  },
  destroyed() {
    this.clearTimer()
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer)
      this.timer = null
    },
    setBubblePos() {
      const max = this.computedList.length - 1
      // Math.random() * (max-min+1) + min --- [min,max]
      const index = parseInt(Math.random() * (max - 0 + 1) + 0)
      const bubbleBox = this.$refs.bubbleBox[index]
      const top = bubbleBox.offsetTop
      //   bubbleBox.offsetTop // 100% -48, 300
      if (top > 280 || top < 0) {
        if (hasClass(bubbleBox, 'animation-class')) {
          removeClass(bubbleBox, 'animation-class')
          this.setBubblePos()
        } else {
          addClass(bubbleBox, 'animation-class')
        }
      } else {
        addClass(bubbleBox, 'animation-class')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.columnar-bubbling-box {
  width: 123px;
  height: 310px;
  background: url('./img/box.png') no-repeat center;
  .inner-box {
    height: 290px;
    position: relative;
    overflow: hidden;
  }
}
.bubble-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -60px;
  opacity: 0;
  .top-box {
    font-family: D-DIN Exp;
    font-weight: 700;
    color: #ffffff;
  }
}
.animation-class {
  animation: flutter 10s;
}
@keyframes flutter {
  0% {
    bottom: -60px;
    opacity: 0;
    scale: 0;
  }
  10% {
    opacity: 0.5;
    scale: 0.8;
  }
  20% {
    opacity: 1;
    scale: 1;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0.2;
  }
  65% {
    bottom: 200px;
    opacity: 0;
  }
  100% {
    bottom: 200px;
    opacity: 0;
  }
}
</style>
