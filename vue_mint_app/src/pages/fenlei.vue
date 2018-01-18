  <template>
     <div class="fenlei">
         <div class="fenlei_top">
            <div class="fenlei_top_left">
            <input type="text" placeholder="搜索商品" class="ins">
            </div>
            <div class="fenlei_top_right">
              搜索
            </div>
         </div>
            <div class="fenlei_content">
              <div class="leftwrapper" ref="leftwrapper">
                <div class="fenlei_content_left">
                      <span :class="['xinpin' ,{showtab:tabindex==index}]" v-for="(item,index) in catelist" :key="index" @click="Switch(index)">
                            {{item.category_name}}
                     </span>


                </div>
            </div>
             <div class="wrapper" ref="wrapper">
              <div class="fenlei_content_right">
                   <div class="fenlei_content_items" v-for="(imgs,index) in catelist[0].cateitems" :key="index" >
                      <div class="imgs">
                        <img v-bind:src="imgs" alt="" v-if="imgs">
                      </div>
                      <span class="items_name">
                        小米手机
                      </span>
                   </div>

              </div>
          </div>
            </div>
         <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>
     </div>
  </template>

  <script>
import Footer from "../components/FooterBar.vue";
import BScroll from "better-scroll";
export default {
  // 开始
  components: {
    "footer-bar": Footer
  },
  // 结束
  name: "fenlei",
  data: function() {
    return {
      tabindex:"0",
      url:
        "https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/fenlei",
      catelist: ""
    };
  },
  methods: {
    //  切换
    Switch: function(index) {
      var _this = this;
      _this.tabindex=index;
      console.log(index, "index");
    }
  },
  beforeCreate () {

  },
  created: function() {
    console.log("created")
    var _this = this;
    this.$http.get(_this.url).then(function(res) {
      console.log(res.data);
      console.log(_this.catelist);
      _this.catelist = res.data;

    });
  },
  mounted() {
    //  滚动条优化
    const options = {
      scrollY: true // 因为scrollY默认为true，其实可以省略
    };
console.log("mounted")
    //即定时器 20ms


     this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          //开启点击事件 默认为false
          click: false
        });
        this.scroll = new BScroll(this.$refs.leftwrapper, {
          //开启点击事件 默认为false
          click: false
        });

        // console.log(this.scroll)
      } else if (!this.$refs.leftwrapper) {
        return;
      } else {
        this.scroll.refresh();
      }
    });
  }
};
</script>

  <style scoped>
  .showtab{
    color: red;
    border-bottom: 1px solid red;
  }
body {
  background: #eee;
}
.ins {
  border: 0;
  outline: none;
  width: 5.5rem;
  padding: 0.2rem;
}

.fenlei_top_left {
  width: 5.5rem;
  padding: 0.2rem 0;
}
.fenlei_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.88rem;
  padding: 0.1rem 0.2rem;
  width: 95vw;
  background: #eeeeee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.fenlei_top_right {
  font-size: 0.32rem;
  color: #353535;
  width: 1rem;
  text-align: center;
}
.fenlei_content {
  background: #fff;
  display: flex;
  height: 83vh;
  margin-top: 1rem;
}
.fenlei_content_left {
  width: 30vw;
  background: #eee;
  font-size: 0.32rem;
  color: #353535;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* overflow-x: scroll; */
}
.fenlei_content_right {
  width: 65vw;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0.2rem 0.2rem 0.2rem;
  /* overflow-x: scroll; */
}
.fenlei_content_items {
  /* padding: 0.1rem; */
  border: 1px solid #eee;
  box-shadow: 0.1rem 0.1rem 0.1rem #353535;
  margin-top: 0.2rem;
}
.imgs {
  width: 2.3rem;
  height: 3rem;
  padding: 0.2rem 0;
}
.imgs img {
  width: 100%;
  height: 100%;
}
.items_name {
  font-size: 0.32rem;
  color: #353535;
  text-align: center;
  width: 100%;
  display: inline-block;
  margin-top: 0.1rem;
}
.xinpin {
  display: inline-block;
  text-align: center;
  width: 100%;
  padding: 0.2rem 0;
}
</style>
