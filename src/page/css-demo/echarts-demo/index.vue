<template>
  <div class="container">
    <div class="single-box">
      <div class="title-box">chart-line</div>
      <chart-line
        style="width: 300px; height: 300px"
        :dataOption="{
          xAxisData: ['当年完成水量', '去年同期水量', '滚动目标值水量'],
          yAxisName: '人',
          seriesData: [
            {
              name: '入职率',
              data: [4.2, 3.8, 4.8],
              color: '#165DFF',
              areaColor: ['rgba(22,93,255,0.2)', 'rgba(22,93,255,0)'],
              seriesExtend: {
                symbol: 'emptyCircle',
                smooth: false,
              },
            },
          ],
        }"
      />
    </div>
    <div class="single-box">
      <div class="title-box">chart-line</div>
      <chart-line
        style="width: 300px; height: 300px"
        :dataOption="{
          xAxisData: ['当年完成水量', '去年同期水量', '滚动目标值水量'],
          yAxisName: '人',
          seriesData: [
            {
              name: '入职率',
              data: [4.2, 3.8, 4.8],
              color: '#21CCFF',
            },
            {
              name: '入职率2',
              data: [2.2, 4.8, 3.8],
              color: '#313CA9',
            },
          ],
        }"
      />
    </div>
    <div class="single-box">
      <div class="title-box">chart-radar</div>
      <chart-radar
        :list="[20, 33, 80, 50, 30]"
        :indicator="[
          {
            name: 'Sunday',
            max: 100,
            axisLabel: { show: true },
          },
          {
            name: 'Monday',
            max: 100,
          },
          {
            name: 'Tuesday',
            max: 100,
          },
          {
            name: 'Wednesday',
            max: 100,
          },
          {
            name: 'Wednesday2',
            max: 100,
          },
        ]"
        style="width: 300px; height: 300px"
      />
    </div>
    <div class="single-box">
      <div class="title-box">chart-pie-use-legend</div>
      <chart-pie-use-legend
        :list="pieData"
        :config="{
          title: 220,
          titleSub: '合同总数',
        }"
        style="width: 400px; height: 300px"
      />
    </div>
    <div class="single-box">
      <div class="title-box">chart-pie-ring</div>
      <chart-pie-ring
        :list="pieData"
        chartSize="150px"
        style="width: 400px; height: 200px"
      />
    </div>
    <div class="single-box">
      <div class="title-box">horizontal-bar</div>
      <horizontal-bar
        style="width: 200px; height: 200px"
        :list="[
          { itemName: '诈骗类', percent: 10.1 },
          { itemName: '盗窃类', percent: 20.3 },
          { itemName: '打架类1', percent: 40.3 },
          { itemName: '打架类2', percent: 40.3 },
        ]"
      />
    </div>
    <div class="single-box">
      <div class="title-box">chart-bar</div>
      <chart-bar
        style="width: 300px; height: 300px"
        :dataOption="{
          xAxisData: ['当年完成水量', '去年同期水量', '滚动目标值水量'],
          yAxisName: '人',
          seriesData: [
            {
              name: '入职率',
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
              color: '#2085F8',
            },
          ],
        }"
      />
    </div>
    <div class="single-box">
      <div class="title-box">chart-line-bar</div>
      <chart-line-bar
        style="width: 300px; height: 300px"
        :dataOption="{
          legendData: ['入职率', '离职率', '入职人数', '离职人数'],
          xAxisData: ['当年完成水量', '去年同期水量', '滚动目标值水量'],
          yAxisData: ['人', '%'],
          lineData: [
            {
              name: '入职率',
              data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5],
              color: '#722ED1',
            },
            {
              name: '离职率',
              data: [5.2, 3.8, 4.8, 3.5, 3.9, 2.8, 3, 5],
              color: '#14C9C9',
              lineType: 'dashed',
            },
          ],
          barData: [
            {
              name: '入职人数',
              data: [4, 3, 4, 3, 2, 2, 3, 5],
              color: '#4096F8',
            },
            {
              name: '离职人数',
              data: [4, 3, 2, 3, 2, 3, 3, 5],
              color: '#F8A220',
            },
          ],
        }"
      />
    </div>
  </div>
</template>
<script>
import chartBar from './components/chart-bar'
import chartLine from './components/chart-line'
import chartLineBar from './components/chart-line-bar'
import chartPieRing from './components/chart-pie-ring'
import chartPieUseLegend from './components/chart-pie-use-legend'
import chartRadar from './components/chart-radar'
import horizontalBar from './components/horizontal-bar'
export default {
  name: 'echarts-demo',
  components: {
    chartBar,
    chartLine,
    chartLineBar,
    chartPieRing,
    chartPieUseLegend,
    chartRadar,
    horizontalBar,
  },
  data() {
    return {
      label: '图表',
      pieData: [],
    }
  },
  mounted() {
    this.getPieData()
  },
  methods: {
    getPieData() {
      this.pieData = [
        { name: '30岁以下', value: 50, percent: '25%' },
        { name: '30~35岁', value: 50, percent: '10%' },
        { name: '3', value: 20, percent: '25%' },
        { name: '4', value: 60, percent: '20%' },
        { name: '5', value: 60, percent: '20%' },
      ]
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  .single-box {
    padding: 10px;
    border: 1px solid #ccc;
  }
  .title-box {
    text-align: center;
    font-weight: bold;
  }
}
</style>
