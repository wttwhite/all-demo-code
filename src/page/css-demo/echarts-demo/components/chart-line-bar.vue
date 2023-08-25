<template>
  <div id="chart" ref="chartRef"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'chart-line-bar',
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
        legend: {
          show: true,
          data: this.dataOption.legendData,
          // top: '25px',
          // textStyle: {
          //   color: '#1D2129',
          // },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            // label: {
            //   show: true,
            // },
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
        series: [...this.formatBarSeries(), ...this.formatLineSeries()],
      }
      options && this.chart.setOption(options, false)
    },
    formatYAxisList() {
      return this.dataOption.yAxisData.map((yAxis, index) => {
        return {
          name: yAxis,
          nameTextStyle: {
            color: '#8E959F',
            padding: [0, index === 0 ? 45 : 0, 0, index === 1 ? 45 : 0],
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
      })
    },
    formatBarSeries() {
      return this.dataOption.barData.map((item) => {
        return {
          name: item.name,
          type: 'bar',
          barWidth: 15,
          color: item.color,
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
    formatLineSeries() {
      return this.dataOption.lineData.map((item) => {
        return {
          name: item.name,
          type: 'line',
          yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
          // smooth: true, //平滑曲线显示
          showAllSymbol: true, //显示所有图形。
          showSymbol: false,
          symbol: 'circle', //标记的图形为实心圆
          symbolSize: 1, //标记的大小
          color: item.color,
          lineStyle: {
            type: item.lineType || 'solid',
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
