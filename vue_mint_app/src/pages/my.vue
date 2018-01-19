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
        <div class="dingdan_left dz">
          <i class="iconfont icon-shouhuodizhi"></i>
          <span class="gl">选择地址</span>
        </div>
        <div class="dingdan_right">
          <!-- 地址组件 -->
          <div>{{myAddressProvince}} {{myAddressCity}} {{myAddresscounty}}</div>
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
      <div class="dingdan" @click="share">
        <div class="dingdan_left">
          <i class="iconfont icon-fenxiang-tianchong"></i>
        </div>
        <div class="dingdan_right">
          分享
        </div>
      </div>
      <!-- 时间选择 -->
      <div class="dingdan" @click="open('picker1')">
        <div class="dingdan_left dz">
          <i class="iconfont icon-shouhuodizhi"></i>
          <span class="gl">日期选择</span>
        </div>
        <div class="dingdan_right">
          <!-- 日期组件 -->
             {{date1}}
        </div>
      </div>
      <!-- 这是分享 -->
      <div class="soshm" @click="fenxiang"></div>
<!-- 这是分享 -->
    <mt-datetime-picker
          ref="picker1"
          type="date"
          v-model="value1"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          :startDate="startDate"
          :endDate="endDate"
          @confirm="handleChange">
    </mt-datetime-picker>
      <!-- 地址 -->
      <div>
        <mt-popup v-model="popupVisible" position="bottom">
          <div class="top">
            <div class="top_left" @click="close">
              取消
            </div>
            <div class="top_tight" @click="close">
              确定
            </div>
          </div>
          <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
        </mt-popup>
      </div>
      <!-- 分享 -->
      <mt-popup v-model="shareVisible" position="bottom">
        <!-- UY BEGIN -->
        <div class="share_item">
          <div class="share_items" @click="qqshare">
            <div class="items_all">
              <i class="iconfont icon-qq share_icon"></i>
              <p class="share_title">QQ</p>
            </div>
          </div>
          <div class="share_items">
            <div class="items_all">
              <i class="iconfont icon-weibo share_icon"></i>
              <p class="share_title">微博</p>
            </div>
          </div>
          <div class="share_items">
            <div class="items_all">
              <i class="iconfont icon-weixin share_icon"></i>
              <p class="share_title">微信</p>
            </div>
          </div>
          <div class="share_items">
            <div class="items_all">
              <i class="iconfont icon-qqkongjian share_icon"></i>
              <p class="share_title">QQ空间</p>
            </div>
          </div>
        </div>
      </mt-popup>
    </div>
    <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>
  </div>
</template>
<script>
// 引入组件
import Footer from "../components/FooterBar.vue";
// 弹出框
// 地址三级联动json数据
import { MessageBox, Popup } from "mint-ui";
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
      date1: "",
      value: null,
      value1: null,
      //show: true,
      startDate: new Date("2000"),
      endDate: new Date(),
      popupVisible: false, //这个是控制弹出框的显示隐藏
      shareVisible: false, //分享
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
    // 关于
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
      console.log(_this.popupVisible);
      _this.popupVisible = true;
    },
    // 关闭
    close: function() {
      var _this = this;
      _this.popupVisible = false;
    },
    share: function() {
      var _this = this;
      _this.shareVisible = true;
    },
    fenxiang:function(){
      soshm('#share', {
          // 分享的链接，默认使用location.href
          url: '',
          // 分享的标题，默认使用document.title
          title: '',
          // 分享的摘要，默认使用<meta name="description" content="">content的值
          digest: '',
          // 分享的图片，默认获取本页面第一个img元素的src
          pic: '',
          // 默认显示的网站为以下六个个,支持设置的网站有
          // weixin,weixintimeline,qq,qzone,yixin,weibo,tqq,renren,douban,tieba
          sites: ['weixin', 'weixintimeline', 'yixin', 'weibo', 'qq', 'qzone']
        });
    },
    // qq分享
    qqshare: function() {
      //分享到qq空间
      (function() {
        var p = {
          url: location.href /*获取URL，可加上来自分享到QQ标识，方便统计*/,
          desc:
            "" /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/,
          title: "" /*分享标题(可选)*/,
          summary: "" /*分享摘要(可选)*/,
          pics: "" /*分享图片(可选)*/,
          flash: "" /*视频地址(可选)*/,
          site: "" /*分享来源(可选) 如：QQ分享*/,
          style: "201",
          width: 32,
          height: 32
        };
        var s = [];
        for (var i in p) {
          s.push(i + "=" + encodeURIComponent(p[i] || ""));
        }
        document.write(
          [
            '<a class="qcShareQQDiv" href="http://connect.qq.com/widget/shareqq/index.html?',
            s.join("&"),
            '" target="_blank">分享到QQ</a>'
          ].join("")
        );
      })();
    },
    // 日期
    open(picker) {
      this.$refs[picker].open();
    },
    handleChange(value) {
      console.log(value, "value");
      var d = new Date(value);
      // youWant=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      var youWant = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      console.log("", youWant);
      console.log(new Date().toISOString(value).slice(0, 10));
      this.date1 = youWant;
      //this.show = true;
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
.share_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rpx;
  background: #fff;
}
.share_title {
  font-size: 0.32rem;
  text-align: center;
}
.share_icon {
  font-size: 0.88rem;
  color: #4cafe9;
}
.share_items {
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mint-popup-bottom {
  width: 100%;
  height: 30vh;
}
.top {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  background: #fff;
  color: #353535;
  font-size: 0.32rem;
  border-bottom: 1px solid #eeeeee;
}
.dz {
  display: flex;
  align-items: center;
}
.gl {
  padding-left: 0.2rem;
}
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
  color: #fe498f;
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
