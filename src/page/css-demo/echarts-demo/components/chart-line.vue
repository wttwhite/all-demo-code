<template>
  <div id="chart" ref="chartRef"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'chart-line',
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
            type: 'line',
          },
        },
        xAxis: {
          data: this.dataOption.xAxisData,
          boundaryGap: false,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#D9D9D9',
            },
          },
          axisTick: {
            show: true, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#8E959F', //X轴文字颜色
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
          type: 'line',
          smooth: true, // 平滑曲线显示
          barWidth: 15,
          symbol: 'circle', //标记的图形为实心圆
          symbolSize: 1, //标记的大小
          color: item.color,
          itemStyle: {
            normal: {
              color: item.color,
              areaStyle: {
                color: item.areaColor
                  ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: item.areaColor[0],
                      },
                      {
                        offset: 1,
                        color: item.areaColor[1],
                      },
                    ])
                  : 'transparent',
              },
            },
          },
          data: item.data,
          ...item.seriesExtend,
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
