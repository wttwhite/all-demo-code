<template>
  <div id="chart" ref="chart"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'chart-pie-use-legend',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      },
    },
    config: {
      type: Object,
      default: () => {
        return {}
      },
    },
    colorArray: {
      type: Array,
      default: () => {
        return ['#5157F7', '#6599FF', '#4ACB7E', '#FACC14', '#FF5E42']
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
        this.chart.dispose() //更新时删除旧图表
      }
      const dom = this.$refs.chart
      this.chart = echarts.init(dom)
      const legendData = list.map((item) => item.name)
      let options = {
        title: [
          {
            text: this.config.title || '',
            top: '43%',
            left: 'center',
            textStyle: {
              color: '#1E232A',
              fontSize: 21,
              fontWeight: '700',
            },
          },
          {
            text: this.config.titleSub || '',
            top: '53%',
            left: 'center',
            textStyle: {
              color: '#8E959F',
              fontSize: 14,
              fontWeight: 400,
            },
          },
        ],
        legend: {
          show: true,
          icon: 'circle',
          data: legendData,
          align: 'left',
          bottom: 0,
          itemWidth: 10,
        },
        series: [
          {
            labelLine: {
              length: 10,
              length2: 10,
              show: true,
              color: '#00ffff',
            },
            type: 'pie',
            color: this.colorArray,
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            itemStyle: {
              borderColor: '#fff', // 白色的间隔
              borderWidth: 2,
            },
            label: {
              show: true,
              formatter: function (params) {
                if (params.name !== '') {
                  return params.value + '%'
                } else {
                  return ''
                }
              },
            },
            emphasis: {
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
</style>
