<template>
  <div class="me">
    <div class="logos">
      <div class="logos_all">
        <div class="logos_img">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512968835725&di=4771d4a3d2e6efb0760d4394f5da7603&imgtype=0&src=http%3A%2F%2Fimage.9game.cn%2F2014%2F12%2F30%2F10143631.jpg">
        </div>
        <div class="logos_name">木木</div>
      </div>
      <div class="dingdan" @click="order">
        <div class="dingdan_left">
          <i class="iconfont icon-dingdan"></i>
        </div>
        <div class="dingdan_right">
          我的订单
        </div>
      </div>
      <div class="dingdan" @click="dizhi">
        <div class="dingdan_left">
          <i class="iconfont icon-guanyu"></i>
        </div>
        <div class="dingdan_right">
          地址管理
        </div>
      </div>
      <div class="dingdan" @click="guanyu">
        <div class="dingdan_left">
          <i class="iconfont icon-guanyu"></i>
        </div>
        <div class="dingdan_right">
          关于我们
        </div>
      </div>
        <!-- 地址 -->
        <mt-popup   v-model="popupVisible" position="bottom" >
    <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
</mt-popup>
  <p>地址3级联动：{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</p>
    </div>
    <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>
  </div>
</template>
<script>
// 引入组件
import Footer from "../components/FooterBar.vue";
// 弹出框
import Vue from "vue";
import { Popup } from "mint-ui";
Vue.component(Popup.name, Popup);
// 地址三级联动json数据
import { Toast, Indicator, MessageBox } from "mint-ui";
import myaddress from "../../static/data/address3.json";
// 引入地址picker
export default {
  // 开始
  components: {
    "footer-bar": Footer
  },
  name: "my",
  data() {
    return {
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      myAddressProvince: "省",
      myAddressCity: "市",
      myAddresscounty: "区/县"
    };
  },
  methods: {
    //获取地区列表
    onMyAddressChange(picker, values) {
      if (myaddress[values[0]]) {
        //这个判断类似于v-if的效果（可以不加，但是vue会报错，很不爽）
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
        this.myAddressProvince = values[0];
        this.myAddressCity = values[1];
        this.myAddresscounty = values[2];
      }
    },
    order: function() {
      this.$router.push({ path: "all_order" });
    },
    index: function() {
      console.log(this.$store.state.count);
    },
    jia: function() {
      this.$store.commit("add");
      console.log(this.$store.state.count);
      // body...
    },
    jian: function() {
      this.$store.commit("reduce");
      console.log(this.$store.state.count);
      // body...
    },
    guanyu: function() {
      MessageBox({
        title: "关于我",
        message: "vue爬坑记?",
        showCancelButton: true
      });
    },
    //地址管理
    dizhi: function() {
      var _this = this;
      console.log(_this.showhide);
      _this.showhide == 0;
      if (_this.showhide == 0) {
        _this.showhide = 1;
      } else {
        console.log(_this.showhide);
        _this.showhide = 0;
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      //vue里面全部加载好了再执行的函数  （类似于setTimeout）
      this.myAddressSlots[0].defaultIndex = 0;
      // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
      //因为我没有看过源码（我猜测是因为数据没有改变，不会触发更新）
    });
  }
};
</script>
<style scoped>
.logos_name {
  padding-left: 0.2rem;
}
body {
  background: #eee;
}
.logos_all {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #eee;
  background: #ffffff;
}
.logos_img {
  height: 1.8rem;
  width: 1.8rem;
}
.logos_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.dingdan {
  background: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2rem 0.5rem;
}
.dingdan_left i {
  font-size: 0.65rem;
}
.dingdan_right {
  padding-left: 0.3rem;
}
#index {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>

