<template>
    <transition name="mtoast-pop-fade">
        <div class="mtoast" v-if="visible">
          <div class="mtoast-icon"></div>
          <div class="mtoast-text">
              <span>{{message}}</span>
          </div>
      </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    message: String
  }
};
</script>

<style lang="less" scoped>
.mtoast {
  position: fixed;
  bottom: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 70%;
  min-width: 20%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px 10px;
  .mtoast-icon {
    flex-grow: 0px;
  }
  .mtoast-text {
    flex-basis: 20px;
    text-align: center;
    span {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
  }
}
.mtoast-pop-fade-enter-active,
.mtoast-pop-fade-leave-active {
  transition: opacity 0.4s;
}
.mtoast-pop-fade-enter,
.mtoast-pop-fade-leave-to {
  opacity: 0;
}
</style>