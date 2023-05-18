<template>
  <div class="move-box" style="width: 400px; height: 200px">
    <ul class="move-ul">
      <li
        v-for="(item, index) in listData"
        :key="item.index"
        class="move-li"
        :style="{
          top: liTop[index] + 'px',
          left: liLeft[index] + 'px',
          opacity: liOpacity[index],
          scale: liScale[index],

          'font-size': fontSize + 'px',
        }"
      >
        <div
          :style="{
            width: divWidth + 'px',
            height: divWidth + 'px',
            background: `url(${item.icon}) no-repeat center`,
            'background-size': 'contain',
          }"
        ></div>
        <div class="content-box">{{ item.name }}</div>
      </li>
    </ul>
    <section class="flex-center num-show">
      <!-- <NumberShow :value="showValue" v-if="showNumber" /> -->
      {{ showValue }}
    </section>
  </div>
</template>
<script>
export default {
  name: 'MoveListDom',
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {
            name: '法人',
            icon: require('./circle.png'),
            value: 1,
          },
          {
            name: '演绎吗',
            icon: require('./circle.png'),
            value: 1,
          },
          {
            name: '盐易码',
            icon: require('./circle.png'),
            value: 1,
          },
          {
            name: '法人',
            icon: require('./circle.png'),
            value: 1,
          },
          {
            name: '盐易码',
            icon: require('./circle.png'),
            value: 1,
          },
        ]
      },
    },
    divWidth: {
      type: Number,
      default: 58,
    },
    topArr: {
      type: Array,
      default: () => {
        return [0, 20, 40, 20, 0, 0, 0]
      },
    },
    fontSize: {
      type: Number,
      default: 15,
    },
  },
  watch: {
    list: {
      handler(n) {
        if (n && n.length) {
          this.listData = [...n, ...n]
          this.liLeft = []
          const len = this.list.length
          this.list.forEach((item, index) => {
            this.liLeft.unshift(this.divWidth * (len - (index + 1)))
            this.liLeft.push(this.divWidth * (index === 0 ? len : -index))
            this.liOpacity.push(0)
            this.liScale.push(0)
            this.liTop.push(0)
          })
          this.showValue = n[0].value
        }
      },
      immediate: true,
    },
    topArr: {
      handler(n) {
        this.liTop = [...n]
      },
      immediate: true,
    },
  },
  data() {
    return {
      boxTimer: null,
      liTimer: null,
      listData: [],
      liTop: [], // [0, 50, 100, 50, 0,  0, 0,0,0,0]
      liOpacity: [0.2, 0.5, 1, 0.5, 0.2, 0, 0],
      liScale: [0.7, 1, 1.2, 1, 0.7, 0, 0],
      liLeft: [],
      // liLeft: [0, divWidth, divWidth*2, divWidth*3, divWidth*4,
      //   divWidth*5, divWidth*-1, divWidth*-2,divWidth*-3,divWidth*-4],
      timer: null,
      activeIndex: 2,
      showValue: 0,
      showNumber: true,
    }
  },
  mounted() {
    this.setBoxMove()
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    setBoxMove() {
      this.timer = setInterval(() => {
        const btPop = this.liTop.pop()
        this.liTop.unshift(btPop)

        const opPop = this.liOpacity.pop()
        this.liOpacity.unshift(opPop)

        const leftPop = this.liLeft.pop()
        this.liLeft.unshift(leftPop)

        const scalePop = this.liScale.pop()
        this.liScale.unshift(scalePop)

        this.activeIndex++
        if (this.activeIndex >= this.listData.length) {
          this.activeIndex = 0
        }
        // console.log('this.activeIndex', this.activeIndex)
        this.showValue = this.listData[this.activeIndex].value
        this.showNumber = false
        setTimeout(() => {
          this.showNumber = true
        }, 10)
      }, 4000)
    },
  },
}
</script>
<style lang="scss" scoped>
.move-box {
  position: relative;
  overflow: hidden;
  .move-ul {
    width: 100%;
    position: absolute;
  }
  .num-show {
    position: absolute;
    left: 15px;
    right: 0;
    margin: auto;
    bottom: 30px;
  }
}
.move-li {
  display: inline-block;
  position: absolute;
  transition: top 1s, opacity 1s, left 1s, scale 1s;
}

.content-box {
  font-family: Alibaba PuHuiTi;
  color: #ffffff;
  position: relative;
  top: -20px;
  text-align: center;
}
</style>
