export class CalendarPanel {
  constructor(nowTime, weekStart) {
    this.nowTime = nowTime
    this.year = ''
    this.month = ''
    this.daysList = []
    // 默认从周日开始
    this.weekStart = weekStart || 0
    this.weekList = ['日', '一', '二', '三', '四', '五', '六']
    this.daysList = []
    this._cacheYear = ''
    this._cacheMonth = ''
    this._cacheDay = ''
    this.init()
    this.setWeekList()
  }
  init() {
    this.year = this.nowTime.getFullYear() // 年份
    this.month = this.nowTime.getMonth() + 1 // 月份
    this._cacheYear = this.nowTime.getFullYear()
    this._cacheMonth = this.nowTime.getMonth() + 1
    this._cacheDay = this.nowTime.getDate()
  }
  setWeekList() {
    this.weekList = this.weekList.map((item, index) => {
      if (index < 7 - this.weekStart) {
        return this.weekList[index + this.weekStart]
      } else {
        return this.weekList[this.weekStart - (7 - index)]
      }
    })
  }
  setPreMonth() {
    this.month = this.getPreMonth()
    if (this.month == 12) {
      //边界值判断
      this.year--
    }
    this.updatePanelDate()
  }
  setNextMonth() {
    this.month = this.getNextMonth()
    if (this.month == 1) {
      //边界值判断
      this.year++
    }
    this.updatePanelDate()
  }
  getPreMonth() {
    return this.month * 1 === 1 ? 12 : this.month - 1
  }
  getNextMonth() {
    return this.month * 1 === 12 ? 1 : this.month + 1
  }
  updatePanelDate() {
    const date = new Date(this.year, this.month, 0)
    const days = date.getDate() //当前月天数
    date.setDate(1) //获取的是1号
    let firstDayAtWeek = date.getDay() // 获取1号在周几
    firstDayAtWeek = firstDayAtWeek === 0 ? 7 : firstDayAtWeek
    // 每个月的第一行都有几个上一个月的日期
    const preMonthDate = new Date(this.year, this.month - 1, 0)
    const preMonthDays = preMonthDate.getDate() // 上个月天数
    // 设置上一个月还剩几天的天数显示
    const preMonthBeginDay =
      preMonthDays - firstDayAtWeek + (this.weekStart + 1)
    this.getCalendar(days, preMonthBeginDay, firstDayAtWeek)
  }
  getCalendar(days, preMonthBeginDay, firstDayAtWeek) {
    // 第一行这个月的天数
    const firstLineCurrentMonthDays = 7 - (firstDayAtWeek - this.weekStart)
    const lines =
      Math.ceil((days - firstLineCurrentMonthDays) / 7) +
      (firstLineCurrentMonthDays === 0 ? 0 : 1)
    let count = 1
    // 清空原数据
    this.daysList = []
    for (let line = 0; line < lines; line++) {
      this.daysList.push([])
      //一周七天
      for (let i = 0; i < 7; i++) {
        // 上一个月
        if (
          line === 0 &&
          i < 7 - firstLineCurrentMonthDays &&
          firstLineCurrentMonthDays > 0
        ) {
          this.daysList[line].push({
            disabled: true,
            day: preMonthBeginDay,
            selected: false,
          })
          preMonthBeginDay++
        } else if (count > days) {
          // 这个月
          this.daysList[line].push({
            disabled: true,
            day: count - days,
            selected: false,
          })
          count++
        } else {
          // 下一个月
          //   const isCurrent = this.judgeIsToday(count)
          this.daysList[line].push({
            disabled: false,
            day: count,
            selected: false,
          })
          //   isCurrent &&
          count++
        }
      }
    }
  }
  judgeIsToday(day) {
    if (
      this.year === this._cacheYear &&
      this.month === this._cacheMonth &&
      day === this._cacheDay
    ) {
      return true
    } else {
      return false
    }
  }
}
