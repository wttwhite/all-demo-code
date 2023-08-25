<template>
  <div>
    <div class="chart-container">
      <div
        id="chart"
        ref="chart"
        :style="{ width: chartSize, height: chartSize }"
      ></div>

      <div class="legend-box">
        <div class="legend-list" v-for="(item, index) in list" :key="index">
          <div class="color" :style="'background:' + colorArray[index]"></div>
          <div class="name">{{ item.name }}</div>
          <div class="value">{{ item.value }}</div>
          <div class="percent">{{ item.percent }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'chart-pie-ring',
  props: {
    chartSize: { type: String, default: '100px' },
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  watch: {
    list(n) {
      this.showChart(n)
    },
  },
  data() {
    return {
      chart: undefined,
      colorArray: [
        '#165DFF',
        '#14C9C9',
        '#F7BA1E',
        '#722ED1',
        '#FC9939',
        '#fff',
        '#1563FF',
        '#f140ff',
      ],
    }
  },
  mounted() {
    this.showChart(this.list)
  },
  methods: {
    showChart(list) {
      if (this.chart != undefined) {
        this.chart.dispose() //更新时删除旧图表
      }

      const dom = this.$refs.chart
      this.chart = echarts.init(dom)
      let options = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            color: this.colorArray,
            radius: ['50%', '95%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            itemStyle: {
              borderColor: '#fff', // 白色的间隔
              borderWidth: 2,
            },
            label: {
              show: false,
            },
            emphasis: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: list,
          },
        ],
      }
      options && this.chart.setOption(options, false)
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  },
}
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
}

.legend-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 66px;
}

.legend-list {
  display: flex;
  font-size: 16px;
  height: 14px;
  margin: 8px 0;
  align-items: center;
}

.color {
  width: 12px;
  height: 12px;
  margin-right: 14px;
  border-radius: 6px;
}

.name {
  color: #909399;
  width: calc((100% - 14px) / 2);
}

.value,
.percent {
  width: calc((100% - 14px) / 4);
}
</style>
