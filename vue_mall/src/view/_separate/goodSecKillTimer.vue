<template>
    <div class="good-sec-kill-timer">
        <div class="timer-kill-now">
            <span>{{currentPoint}}点场</span>
        </div>
        <div class="timer-count-down">
            <span class="hour">{{leftHour | timeFormat}}</span>
            <span class="min">{{leftMin | timeFormat}}</span>
            <span class="sec">{{leftSec | timeFormat}}</span>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      killTimePoint: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
      currentPoint: "",
      leftHour: "",
      leftMin: "",
      leftSec: ""
    };
  },
  methods: {
    getCurrentPoint() {
      for (let i = 0; i < this.killTimePoint.length; i++) {
        if (new Date().getHours() < this.killTimePoint[i]) {
          this.currentPoint = this.killTimePoint[i];
          break;
        }
      }
    },
    countTime() {
      const self = this;
      const timer = setInterval(() => {
        let targetTime = new Date(),
          leftTime;
        targetTime.setHours(this.currentPoint);
        targetTime.setMinutes(0);
        targetTime.setSeconds(0);
        leftTime = targetTime - new Date();
        if (leftTime === 0) {
          self.getCurrentPoint();
          self.$emit("updateKillTime", this.currentPoint);
        }
        self.leftHour = parseInt((leftTime / 1000 / 60 / 60) % 24, 10);
        self.leftMin = parseInt((leftTime / 1000 / 60) % 60, 10);
        self.leftSec = parseInt((leftTime / 1000) % 60, 10);
      }, 1000);
    }
  },
  filters: {
    timeFormat(val) {
      if (val < 10) {
        return "0" + val;
      }
      return val;
    }
  },
  created() {
    this.getCurrentPoint();
    this.countTime();
  }
};
</script>
<style lang="less" scoped>
.good-sec-kill-timer {
  overflow: hidden;
  font-size: 14px;
  .timer-kill-now {
    float: left;
    span {
      font-weight: 600;
    }
  }
  .timer-count-down {
    float: left;
    padding-left: 5px;
    span {
      position: relative;
      float: left;
      width: 22px;
      height: 22px;
      text-align: center;
      border: 1px solid #eee;
      &:not(:last-child) {
        margin-right: 5px;
      }
      &:not(:last-child)::after {
        position: absolute;
        display: block;
        top: 50%;
        right: 0px;
        transform: translate(5px, -50%);
        content: ":";
      }
    }
  }
}
</style>