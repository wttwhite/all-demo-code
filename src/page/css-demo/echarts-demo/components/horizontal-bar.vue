<template>
  <div class="horizontal-bar" v-if="barList && barList.length">
    <div class="item" v-for="(item, index) in barList" :key="index">
      <div class="title-num">
        <div class="title">{{ item.itemName }}</div>
        <div class="num">
          <span>{{ parseFloat(item.percent) }}</span>
          <span style="font-size: 12px" v-if="isRate"> %</span>
        </div>
      </div>
      <div class="line-bg">
        <div
          class="line"
          :style="{
            width: item.width + '%',
            background: item.color || color,
          }"
        ></div>
      </div>
    </div>
  </div>
  <el-empty v-else></el-empty>
</template>

<script>
export default {
  name: 'horizontal-bar',
  props: {
    color: {
      type: String,
      default: '#2085F8',
      // 'linear-gradient(90deg, rgba(10, 124, 221, 1), rgba(11, 219, 244, 1))',
    },
    list: {
      type: Array,
      default: () => [],
    },
    // value是否是占比, list的value用的是数量就同步改isRate为false
    isRate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  computed: {
    barList() {
      let box = 0
      const result =
        !this.isRate &&
        this.list.reduce((total, item) => {
          return total + item.percent
        }, 0)
      return this.list.map((item, index) => {
        if (index === 0) {
          return {
            ...item,
            width: this.formateRate(item.percent, result),
          }
        } else {
          box = box + this.formateRate(this.list[index - 1].percent, result)
          return {
            ...item,
            width: this.formateRate(item.percent, result),
          }
        }
      })
    },
  },
  mounted() {
    // console.log(this.barList)
  },
  methods: {
    formateRate(value, result) {
      if (this.isRate) {
        return value
      } else if (result) {
        return (value / result) * 100
      } else {
        return 0
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.horizontal-bar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .item {
    display: flex;
    flex-direction: column;
    color: #303133;
    .title-num {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
  .line-bg {
    width: 100%;
    height: 6px;
    background: #f5f7fa;

    position: relative;

    .line {
      position: absolute;
      top: 0;
      height: 5px;
      z-index: 99;
    }
  }
}
</style>
