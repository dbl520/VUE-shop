<template>
    <div class="mheader">
        <template v-if="this.$route.path !== '/index'">
            <div class="mheader-back">
                <i class="iconfont" v-if="this.$route.meta.level !== 0" @click="back">&#xe637;</i>
            </div>
            <div class="mheader-title">
                <h3>{{this.$route.meta.title}}</h3>
            </div>
            <div class="mheader-menu"></div>
        </template>
        <template v-if="this.$route.path === '/index'">
            <div class="mheader-left">
                <span>佛山</span>
                <i class="iconfont">&#xe632;</i>
            </div>
            <div class="mheader-middle">
                <slot></slot>
            </div>
            <div class="mheader-right">
                <i class="iconfont">&#xe604;</i>
            </div>
        </template>
    </div>
</template>
<script>
export default {
  name: "MHeader",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.mheader {
  display: flex;
  align-items: center;
  .mheader-back {
    flex-basis: 65px;
    height: 52px;
    i{
        padding-left:10px;
        line-height: 52px;
        font-size: 20px;
    }
  }
  .mheader-title {
    flex: 1;
    h3{
        font-size: 18px;
        font-weight: 500;
        text-align: center;
    }
  }
  .mheader-menu {
    flex-basis: 65px;
  }
  .mheader-left {
    flex-basis: 65px;
    color: #fff;
    height: 52px;
    span {
      float: left;
      padding-left: 10px;
      line-height: 52px;
      font-size: 16px;
    }
    i {
      float: left;
      line-height: 52px;
      font-size: 20px;
    }
  }
  .mheader-middle {
    flex: 1;
    label {
      line-height: 52px;
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
  }
  .mheader-right {
    display: flex;
    i {
      padding-right: 10px;
      font-size: 20px;
      color: #fff;
    }
  }
}
</style>