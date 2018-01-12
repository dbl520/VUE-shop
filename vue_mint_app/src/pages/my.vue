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
 <mt-picker :slots="addressSlots" class="picker" @change="onAddressChange" :visible-item-count="5"  v-if="showhide==0"></mt-picker >

<mt-picker :slots="streetSlots" ref="picker" class="picker" @change="onStreetChange" :visible-item-count="5" v-if="showhide==0"></mt-picker >
<div v-if="showhide==0">地址:{{ addressProvince }} {{ addressCity }} {{addressXian}} {{addressStreet}}</div> 
    </div>
    <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>
  </div>
</template>
<script>
// 引入组件
import Footer from "../components/FooterBar.vue";
import { MessageBox } from "mint-ui";
import s from "../../static/data/address4.json";
// 引入地址picker
export default {
  // 开始
  components: {
    "footer-bar": Footer
  },
  name: "my",
  data() {
    return {
      showhide:1,//控制地址是否显示
      companyName: "",
      addressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(s),
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
      streetSlots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        }
      ],
      addressProvince: "省",
      addressCity: "市",
      addressXian: "区",
      addressStreet: "街道"
    };
  },
  methods: {
    // 地址事件
    onAddressChange(picker, values) {
      console.log("测试",picker, values)
      let sheng = Object.keys(s);
      let shi = Object.keys(s[values[0]]);
      let index = shi.indexOf(values[1]);
      let xian = s[values[0]][shi[index]];

      this.xianObj = xian;
      picker.setSlotValues(1, shi);
      this.addressProvince = values[0];
      this.addressCity = values[1];
      this.addressXian = values[2];
      picker.setSlotValues(2, Object.keys(xian));
    },
    onStreetChange(picker, values) {
      this.addressStreet = values[0];
       console.log("测试2",picker, values)
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
      console.log(_this.showhide)
      _this.showhide==0;
      if(_this.showhide==0){
        _this.showhide=1
      }else{
         console.log(_this.showhide)
         _this.showhide=0
      }
    }
  },
  watch: {
    addressXian: {
      handler(val, oval) {
        let street = this.xianObj[this.addressXian];
        this.streetSlots[0].values = street;
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        //这个是一个初始化默认值的一个技巧
        this.addressSlots[0].defaultIndex = 0;
      }, 100);
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

