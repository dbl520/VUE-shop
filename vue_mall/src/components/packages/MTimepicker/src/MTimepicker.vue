<template>
    <div class="mtimepicker" v-if="show">
        <div class="timepicker-box">
            <div class="box-header">
                <div class="header-year">
                    <span>{{activeDay.year}}</span>
                </div>
                <div class="header-month-date">
                    <span class="month">{{activeDay.month}}</span>
                    <span class="day">{{activeDay.day}}</span>
                    <span>{{activeDay.week}}</span>
                </div>
            </div>
            <div class="box-section">
                <div class="section-slider">
                    <div class="slider-year-month">
                        <span class="year">{{queryYear}}</span>
                        <span class="month">{{queryMonth}}</span>
                        <i class="iconfont pre" @click="getPreMonthDayList">&#xe63a;</i>
                        <i class="iconfont next" @click="getNextMonthDayList">&#xe663;</i>
                    </div>
                    <div class="slider-week">
                        <span class="week-item" :key="key" v-for="(item, key) in weekList">{{item.name}}</span>
                    </div>
                    <div class="slider-day">
                        <div class="day-item"
                             :class="{'day-item-current': item._d.getDate() === activeDay.day && item._d.getMonth() + 1 === activeDay.month && item._d.getFullYear() === activeDay.year,'not-current-month':!item.current}"
                             :key="key" v-for="(item, key) in activeDayList"
                             @click="item.current ? drawCalendar(item._d) : ''">
                            <span>{{item._d.getDate()}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <div class="footer-btn">
                    <span @click="handlerCancel">取消</span>
                </div>
                <div class="footer-btn">
                    <span @click="handlerComfirm">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "MTimepicker",
  data() {
    return {
      /*
                * 星期数组
                * */
      weekList: [
        {
          name: "日"
        },
        {
          name: "一"
        },
        {
          name: "二"
        },
        {
          name: "三"
        },
        {
          name: "四"
        },
        {
          name: "五"
        },
        {
          name: "六"
        }
      ],
      /*
                * 正在渲染的日历
                * */
      activeDayList: [],
      /*
                * 选取的日期
                * */
      activeDay: new Object(),
      /*
                * 相对正在选取的日期的月前进数
                * */
      step: 0,
      queryYear: null,
      queryMonth: null
    };
  },
  computed: {},
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    /*
            * 计算一个月的天数
            * */
    calDayGenerator(year, month) {
      const actualMonth = month - 1;
      const timeDistance =
        +new Date(year, month) - +new Date(year, actualMonth);
      return timeDistance / (1000 * 60 * 60 * 24);
    },
    /*
            * 计算某年某某日星期几
            * */
    calWeekGenerator(year, month, day) {
      const actualMonth = month - 1;
      let date = new Date();
      date.setFullYear(year);
      date.setMonth(actualMonth);
      date.setDate(day);
      return date.getDay();
    },
    /*
            * 生成某年月天数日期对象数组
            * */
    dayListGenerator(year, month) {
      const dayNum = this.calDayGenerator(year, month);
      const actualMonth = month - 1;
      let dayList = new Array();
      for (let i = 1; i < dayNum + 1; i++) {
        let currentDay = {
          _d: new Date(year, actualMonth, i),
          current: true
        };
        dayList.push(currentDay);
      }
      return dayList;
    },
    /*
            * 生成某年月缺少前一个月的时间对象数组
            * */
    preDayListGenerator(year, month) {
      let preDayNum, preSurplusDayNum, actualPreMonth;
      if (month === 1) {
        preDayNum = this.calDayGenerator(year - 1, 12);
        preSurplusDayNum = this.calWeekGenerator(year, month, 1);
        actualPreMonth = month - 2;
      } else {
        preDayNum = this.calDayGenerator(year, month - 1);
        preSurplusDayNum = this.calWeekGenerator(year, month, 1);
        actualPreMonth = month - 2;
      }
      let preDayList = new Array();
      for (let i = 1; i < preDayNum + 1; i++) {
        let currentDay = {
          _d: new Date(year, actualPreMonth, i),
          current: false
        };
        preDayList.push(currentDay);
      }
      return preSurplusDayNum === 0 ? [] : preDayList.slice(-preSurplusDayNum);
    },
    /*
            * 生成某年月应该添加后一个月的时间对象数组
            * */
    nextDayListGenerator(year, month) {
      const preSurplusDayNum = this.calWeekGenerator(year, month, 1);
      const dayNum = this.calDayGenerator(year, month);
      const NextDayNum = this.calDayGenerator(year, month + 1);
      const NextSurplusDayNum = 7 * 6 - (preSurplusDayNum + dayNum);
      const actualNextMonth = month;
      let nextDayList = new Array();
      for (let i = 1; i < NextDayNum + 1; i++) {
        let currentDay = {
          _d: new Date(year, actualNextMonth, i),
          current: false
        };
        nextDayList.push(currentDay);
      }
      return nextDayList.slice(0, NextSurplusDayNum);
    },
    /*
            * 将上个月当前月和下个月的时间对象合并
            * */
    combineDayListGenerator(year, month) {
      const pre = this.preDayListGenerator(year, month);
      const current = this.dayListGenerator(year, month);
      const next = this.nextDayListGenerator(year, month);
      const total = pre.concat(current).concat(next);
      return total;
    },
    /*
            * 获取前一个月日历
            * */
    getPreMonthDayList() {
      this.activeDayList = [];
      this.step = this.step - 1;
      let queryYear =
        this.activeDay.month + this.step > 0
          ? this.activeDay.year
          : this.activeDay.year -
            (parseInt(Math.abs(this.activeDay.month + this.step) / 12) + 1);
      let queryMonth =
        this.activeDay.month + this.step > 0
          ? this.activeDay.month + this.step
          : 12 - Math.abs(this.activeDay.month + this.step) % 12;
      this.queryYear = queryYear;
      this.queryMonth = queryMonth;
      this.drawDayList(queryYear, queryMonth);
    },
    /*
            * 获取下个月日历
            * */
    getNextMonthDayList() {
      this.activeDayList = [];
      this.step = this.step + 1;
      let queryYear =
        this.activeDay.month + this.step < 13
          ? this.activeDay.year
          : (this.activeDay.month + this.step) % 12 === 0
            ? this.activeDay.year +
              parseInt((this.activeDay.month + this.step) / 12) -
              1
            : this.activeDay.year +
              parseInt((this.activeDay.month + this.step) / 12);
      let queryMonth =
        this.activeDay.month + this.step < 13
          ? this.activeDay.month + this.step
          : (this.activeDay.month + this.step) % 12 === 0
            ? 12
            : (this.activeDay.month + this.step) % 12;
      this.queryYear = queryYear;
      this.queryMonth = queryMonth;
      this.drawDayList(queryYear, queryMonth);
    },
    /*
            * 绘制日期
            * */
    drawDayList(year, month) {
      this.activeDayList = this.combineDayListGenerator(year, month);
    },
    /*
            * 绘制日历
            * */
    drawCalendar(d) {
      let currentYear = d.getFullYear(),
        currentMonth = d.getMonth() + 1,
        currentDay = d.getDate(),
        currentWeek;
      this.step = 0;
      switch (d.getDay()) {
        case 0:
          currentWeek = "周日";
          break;
        case 1:
          currentWeek = "周一";
          break;
        case 2:
          currentWeek = "周二";
          break;
        case 3:
          currentWeek = "周三";
          break;
        case 4:
          currentWeek = "周四";
          break;
        case 5:
          currentWeek = "周五";
          break;
        case 6:
          currentWeek = "周六";
          break;
        default:
          break;
      }
      this.activeDay = {
        _d: d,
        year: currentYear,
        month: currentMonth,
        week: currentWeek,
        day: currentDay
      };
      this.drawDayList(currentYear, currentMonth);
      this.$emit("handlerSelect", d);
    },
    /*
            * 用户确认
            * */
    handlerComfirm() {
      this.$emit("handlerComfirm", this.activeDay._d);
      this.$emit("update:show", false);
    },
    /*
            * 用户取消
            * */
    handlerCancel() {
      this.$emit("handlerCancel");
      this.$emit("update:show", false);
    }
  },
  created() {
    this.queryYear = new Date().getFullYear();
    this.queryMonth = new Date().getMonth() + 1;
    this.drawCalendar(new Date());
  }
};
</script>

<style lang="less" scoped>
.mtimepicker {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  .timepicker-box {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    width: 75%;
    height: 75%;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 100;
    .box-header {
      box-sizing: border-box;
      flex-basis: 22%;
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      background: #5caeff;
      .header-year {
        flex-basis: 30%;
        display: flex;
        align-items: center;
        overflow-y: hidden;
        span {
          flex: 1;
          font-size: 14px;
          color: #fff;
        }
      }
      .header-month-date {
        flex-grow: 2;
        display: flex;
        align-items: center;
        overflow-y: hidden;
        span {
          flex-grow: 0;
          font-size: 25px;
          color: #fff;
          padding: 0px 3px;
        }
        .month {
          &::after {
            content: "月";
          }
        }
        .day {
          &::after {
            content: "日";
          }
        }
      }
    }
    .box-section {
      position: relative;
      flex: 1;
      .section-slider {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 0px;
        left: 0px;
        bottom: 0px;
        right: 0px;
        padding: 10px 15px;
        .slider-year-month {
          position: relative;
          flex-basis: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            flex: 0;
            font-size: 14px;
            font-weight: 600;
          }
          .year {
            &::after {
              content: "年";
            }
          }
          .month {
            &::after {
              content: "月";
            }
          }
          i {
            font-size: 16px;
          }
          .pre {
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translateY(-50%);
          }
          .next {
            position: absolute;
            top: 50%;
            right: 0%;
            transform: translateY(-50%);
          }
        }
        .slider-week {
          flex-basis: 10%;
          display: flex;
          align-items: center;
          .week-item {
            flex: 1;
            font-size: 14px;
            text-align: center;
          }
        }
        .slider-day {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          .day-item {
            flex-basis: 14.285%;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
              flex: 1;
              text-align: center;
              font-size: 14px;
            }
          }
          .day-item-current {
            span {
              border-radius: 100%;
              color: #fff;
              background: #5caeff;
            }
          }
          .not-current-month {
            span {
              color: gray;
            }
          }
        }
      }
    }
    .box-footer {
      flex-basis: 10%;
      display: flex;
      box-shadow: 0px -1px 0px #eee;
      .footer-btn {
        flex: 1;
        text-align: center;
        span {
          font-size: 16px;
        }
        &:not(:last-child) {
          box-shadow: 1px 0px 0px #eee;
        }
      }
    }
  }
}
</style>