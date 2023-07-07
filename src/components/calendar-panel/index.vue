<template>
  <div class="calendar-box">
    <div class="title-box">
      <span>{{ calendarIns.year }}年{{ calendarIns.month }}月</span>
      <div>
        <span
          class="el-icon-arrow-left calendar-pre"
          @click="preMonthClick"
        ></span>
        <span
          class="el-icon-arrow-right calendar-next"
          @click="nextMonthClick"
        ></span>
      </div>
    </div>
    <section class="calendar-table" ref="calendarTable">
      <section class="week-box">
        <span
          class="span-box week-span"
          v-for="week in calendarIns.weekList"
          :key="week"
        >
          {{ week }}
        </span>
      </section>
      <section class="day-box">
        <div v-for="(line, index) in calendarIns.daysList" :key="index">
          <span
            :class="[
              'span-box',
              'day-span',
              item.disabled ? 'can-not-click' : 'can-click',
              item.selected && 'span-selected',
            ]"
            v-for="(item, itemInx) in line"
            :key="`${index}-${itemInx}`"
            @click="dayClick(item)"
          >
            {{ item.day }}
          </span>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
// import { getServerCurrentDay } from '@/apis/nhctmeeting'
import { CalendarPanel } from './index'
export default {
  name: 'calendar-panel',
  data() {
    return {
      calendarIns: {},
    }
  },
  created() {
    this.initPanel()
  },
  methods: {
    async initPanel() {
      const now = await this.getNow() //当前日期
      this.calendarIns = new CalendarPanel(now, 0)
      //   const aaa = new CalendarPanel(now, 0)
      //   console.log('aaa', aaa)
      this.calendarIns.updatePanelDate()
      //   console.log('this.calendarIns', this.calendarIns)
      //   console.log('aaa', aaa)
      this.dayClick({ day: now.getDate(), selected: '', disabled: false })
    },
    getNow() {
      return new Promise((resolve) => {
        const current = new Date()
        // const current = new Date('2023-01-01')
        resolve(current)
      })
    },
    dayClick(item) {
      if (!item.disabled) {
        this.calendarIns.daysList.forEach((line) => {
          line.forEach((lineItem) => {
            lineItem.selected = item.day === lineItem.day ? true : false
          })
        })
        this.$emit(
          'click-day',
          this.year,
          this.month < 10 ? '0' + this.month : this.month,
          item.day < 10 ? '0' + item.day : item.day,
          item
        )
      }
    },
    preMonthClick() {
      this.calendarIns.setPreMonth()
    },
    nextMonthClick() {
      this.calendarIns.setNextMonth()
    },
  },
}
</script>
<style lang="scss" scoped>
.title-box {
  font-size: 16px;
  font-weight: 700;
  color: #1e232a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 18px;
  padding-right: 12px;
}
.calendar-pre,
.calendar-next {
  cursor: pointer;
  color: #161736;
  font-weight: bold;
  font-size: 14px;
  margin-right: 6px;
}
.span-box {
  width: 36px;
  height: 36px;
  font-size: 12px;
  display: inline-block;
  line-height: 36px;
  text-align: center;
  margin-left: 18px;
  margin-right: 18px;
}
.span-selected {
  background: #216dff;
  border-radius: 18px;
  color: #fff;
}
.can-not-click {
  color: rgb(165, 180, 203);
  background: #fcfcfc;
}
.can-click {
  cursor: pointer;
}
</style>
