<template>
  <div id="chart" ref="chartRef"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'chart-bar',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
    // 数据相关配置项
    dataOption: {
      type: Object,
      default: () => {
        return {}
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
    }
  },
  mounted() {
    this.showChart()
  },
  methods: {
    showChart() {
      if (this.chart != undefined) {
        this.chart.dispose() // 更新时删除旧图表
      }
      const dom = this.$refs.chartRef
      this.chart = echarts.init(dom)
      const yAxisLst = this.formatYAxisList()
      let options = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        xAxis: {
          data: this.dataOption.xAxisData,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#D9D9D9',
            },
          },
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#1E232A', //X轴文字颜色
            },
          },
        },
        yAxis: yAxisLst,
        series: [...this.formatSeries()],
      }
      options && this.chart.setOption(options, false)
    },
    formatYAxisList() {
      return {
        name: this.dataOption.yAxisName,
        nameTextStyle: {
          color: '#8E959F',
          padding: [0, 45, 0, 0],
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: true,
          margin: 20,
          textStyle: {
            color: '#8E959F',
          },
        },
      }
    },
    formatSeries() {
      return this.dataOption.seriesData.map((item) => {
        return {
          name: item.name,
          type: 'bar',
          barWidth: 15,
          color: item.color,
          label: {
            // 顶上显示数据
            show: true,
            position: 'top',
            textStyle: {
              color: '#1E232A ',
            },
          },
          itemStyle: {
            normal: {
              color:
                typeof item.color === 'string'
                  ? item.color
                  : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: '#00FFE3',
                      },
                      {
                        offset: 1,
                        color: '#4693EC',
                      },
                    ]),
            },
          },
          data: item.data,
        }
      })
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
  width: 100%;
  height: 100%;
}
</style>
