<template>
  <div class="move-box" style="width: 500px; height: 200px">
    <ul class="move-ul">
      <li
        v-for="(item, index) in listData"
        :key="item.index"
        class="move-li"
        :style="{
          top: liTop[index] + 'px',
          opacity: liOpacityInner[index],
        }"
      >
        <slot
          :row="item"
          :$index="index"
          :activeIndex="activeIndexInner"
        ></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'move-list-diff-style',
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          {
            name: '法人1',
            icon: '',
            value: 1,
          },
          {
            name: '演绎吗2',
            icon: '',
            value: 1,
          },
          {
            name: '盐易码3',
            icon: '',
            value: 1,
          },
          {
            name: '法人4',
            icon: '',
            value: 1,
          },
          {
            name: '盐易码5',
            icon: '',
            value: 1,
          },
        ]
      },
    },
    // 每行高度
    everyHeight: {
      type: Number,
      default: 23,
    },
    // 第一条数据的初始高度
    initTop: {
      type: Number,
      default: 0,
    },
    // 中间最醒目的数据index
    activeIndex: {
      type: Number,
      default: 0,
    },
    // 中间可是区域数据透明度
    liOpacity: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  watch: {
    list: {
      handler(n) {
        this.clearTimer()
        if (n && n.length) {
          this.listData = [...n, ...n]
          this.liOpacityInner = this.liOpacity
          const len = this.list.length
          this.activeIndexInner = this.activeIndex + len
          this.listData.forEach((item, index) => {
            this.liTop.push(this.everyHeight * (index - len) + this.initTop)
            if (index < len) {
              this.liOpacityInner.unshift(0)
            } else if (index + 1 > this.liOpacityInner.length) {
              this.liOpacityInner.push(0)
            }
          })
        }
        this.setBoxMove()
      },
      immediate: true,
    },
    activeIndex: {
      handler(n) {
        this.activeIndexInner = n + this.list.length
      },
      immediate: true,
    },
  },
  data() {
    return {
      listData: [],
      liTop: [],
      timer: null,
      activeIndexInner: 0,
      liOpacityInner: [],
    }
  },
  beforeDestroy() {
    this.clearTimer()
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer)
      this.timer = null
    },
    setBoxMove() {
      this.timer = setInterval(() => {
        const btPop = this.liTop.pop()
        this.liTop.unshift(btPop)
        const opaPop = this.liOpacityInner.pop()
        this.liOpacityInner.unshift(opaPop)
        this.activeIndexInner++
        if (this.activeIndexInner >= this.listData.length) {
          this.activeIndexInner = 0
        }
      }, 4000)
    },
  },
}
</script>
<style lang="scss" scoped>
.move-box {
  position: relative;
  //   overflow: hidden;
  .move-ul {
    width: 100%;
    position: absolute;
  }
}
.move-li {
  display: inline-block;
  position: absolute;
  transition: top 1s, opacity 1s, left 1s, scale 1s;
}
</style>
