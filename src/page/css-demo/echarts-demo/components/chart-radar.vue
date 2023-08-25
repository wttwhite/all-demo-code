<template>
  <div id="chart" ref="chartRef"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'chart-radar',
  props: {
    seriesName: { type: String, default: '' },
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
    color: { type: String, default: '#165DFF' },
    indicator: {
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
    }
  },
  mounted() {
    this.showChart(this.list)
  },
  methods: {
    showChart(list) {
      if (this.chart != undefined) {
        this.chart.dispose() // 更新时删除旧图表
      }
      const dom = this.$refs.chartRef
      this.chart = echarts.init(dom)
      let options = {
        tooltip: {
          show: true,
          trigger: 'item',
        },
        radar: {
          center: ['50%', '50%'],
          radius: '60%',
          splitNumber: 5,
          name: {
            textStyle: {
              color: '#1E232A',
            },
          },
          axisLine: {
            lineStyle: {
              color: '#ebebeb',
            },
          },
          axisLabel: {
            textStyle: {
              color: '#1E232A',
              fontSize: 10,
            },
          },
          splitLine: {
            lineStyle: {
              width: 1,
              color: '#ebebeb',
            },
          },
          splitArea: {
            areaStyle: {
              color: ['#f8f8f8', '#fff'].reverse(),
            },
          },
          indicator: this.indicator,
        },
        series: [
          {
            name: this.seriesName,
            type: 'radar',
            symbolSize: 5,
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1,
            },
            areaStyle: {
              normal: {
                width: 1,
                opacity: 0.3,
              },
            },
            data: [
              {
                itemStyle: {
                  normal: {
                    color: this.color,
                  },
                },
                value: list,
              },
            ],
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
  width: 100%;
  height: 100%;
}
</style>
