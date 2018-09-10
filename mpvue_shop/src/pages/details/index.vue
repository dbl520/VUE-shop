<template>
  <div class="goodDetail">
    <!-- 弹窗组件 -->
    <!-- <div class="goodDetailHeader">
      <a href="#" @click="fanhui">
        <i class="iconfont icon-fanhui"></i>
      </a> {{goodDetailHeader}}
    </div> -->
    <div class="goodDetailList">
      <ul style="background: white;">
        <li v-for="(goodDetail,index) in goodDetails" :key="goodDetail.id">
          <div class="goodDetaiSwipe">
            <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
              style='height:97vh;'>
              <swiper-item>
                <image :src="goodDetail.imgone" class="slide-image" style='width:100%;height:450px' />
              </swiper-item>

              <swiper-item>
                <image :src="goodDetail.imgtwo" class="slide-image" style='width:100%;height:450px' />
              </swiper-item>

              <swiper-item>
                <image :src="goodDetail.imgThree" class="slide-image" style='width:100%;height:450px' />
              </swiper-item>
            </swiper>
          </div>
          <div class="goodDetailMain">
            <div class="gooDetailNumber">商品编号：{{goodDetail.number}}</div>
            <div class="goodDetailName">{{goodDetail.name}}</div>
            <div class="goodDetailColor">{{goodDetail.color}}</div>
            <div class="goodDetailPaid">￥ {{goodDetail.price}}</div>
            <!-- <div  class="goodDetailPaid" >￥{{paid}}</div> -->
          </div>

          <div class="goodDetailValue">
            <div class="_Value">购买数量：</div>
            <div class="_cartNumber" style="margin-left: 2rem;">
              <a href="javascript:;" @click="jian(index)" class="goodDetailReduce">-</a>
              <input type="text" v-model="goodDetail.value" readonly="readonly" />
              <a href="javascript:;" @click="jia(index)" class="goodDetailAdd">+</a>
            </div>
          </div>
          <div class="goodDetailBox">
                      <ul class="uid">
                              <li class="tab-container1" @click="show(0)">图文详情</li>    
                              <li class="tab-container2" @click="show(1)">商品配置</li>                      
                      </ul>
                       <ul>
                          <li>
                              <div class="goodDetailImg" v-if="show1">
                                <p v-for="(Image ,item) in goodDetail.Images" :key='item'>
                                    <img :src="Image.one" alt="详情图片">
                                </p>
                            </div>
                          </li>
                          <li>
                             <div class="goodDetailPeizhi" v-if="show2">
                                <table style="width: 100%;border:1px solid #cccccc;margin-top: 5px;border-collapse: collapse;margin-bottom: 10px;" border="1">
                                    <tbody>
                                        <tr v-for="(Peizhi,items) in goodDetail.Peizhis" :key='items' class='newtr'>
                                            <td style="width:26%">{{Peizhi.left}}</td>
                                            <td style="width:80%;">{{Peizhi.right}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                          </li>
                       </ul>
                </div>


          <div class="goodDetailFooter">
            <div class="add">
              <a href="javascript:void(0);" @click="add(index)">加入购物车</a>
            </div>
            <div class="purchase">
              <a href="javascript:void(0);" @click="pay(index)">立即购买</a>
            </div>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  component: {},
  name: 'goodDetail',
  data () {
    return {
      active: '1',
      goodDetailHeader: '商品详情',
      selected: 'tab-container1',
      goodDetails: [],
      url:
        'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/goodsdetils',
      show1: true,
      show2: true
    }
  },
  mounted: function () {
    this.getData()
  },
  computed: {
    paid: function () {
      var paid = 0
      for (var i in this.goodDetails) {
        paid += this.goodDetails[i].value * this.goodDetails[i].price
      }
      return paid
    }
  },
  methods: {
    show (item) {
      if (item === 0) {
        this.show1 = true
        this.show2 = true
      } else {
        this.show1 = false
        this.show2 = false
      }
    },
    // mock数据，模拟后台将数据渲染出来
    getData: function () {
      console.log(this.$root.$mp.query.id, '')
      var id = this.$root.$mp.query.id
      var _this = this
      this.$http.get(_this.url).then(function (res) {
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].id === id) {
            _this.goodDetails.push(res.data[i])
          }
        }
      })
    },
    jia: function (index) {
      this.goodDetails[index].value++
    },
    jian: function (index) {
      if (this.goodDetails[index].value === 1) {
        this.goodDetails[index].value = 1
      } else {
        this.goodDetails[index].value--
      }
    },
    // 点击按钮时，首先判断该商品是否在购物车已存在，如果存在则不再加入
    add: function (index) {
      console.log(this.$store.state, 'store')
      var idExist = this.$store.state.carts.find(todo => {
        return todo.id === this.goodDetails[index].id
      })

      if (!idExist) {
        var data = {
          id: this.goodDetails[index].id,
          name: this.goodDetails[index].name,
          price: this.goodDetails[index].price,
          imgone: this.goodDetails[index].imgone,
          value: this.goodDetails[index].value
        }
        // this.$store.commit('addcarts', data)
        // data传给vuex状态里,然后vuex通过localstorage setItem存
        console.log(data)
        wx.showToast({
          title: `加入购物车成功！`
        })
        // Toast({
        //   message: '加入购物车成功！',
        //   iconClass: 'iconfont icon-chenggong',
        //   duration: 950
        // })
      } else {
        // MessageBox('提示', '商品已存在购物车')
      }
    },
    // 返回上一级
    fanhui: function () {
      this.$router.go(-1)
    },
    pay: function (index) {
      wx.showToast({
        title: `成功支付了${this.paid}元`
      })
      // Toast({
      //   message: `成功支付了${this.paid}元`,
      //   iconClass: 'iconfont icon-goumaichenggong',
      //   duration: 750
      // })
      // alert(`成功支付了${this.paid}元`)
      var data = {
        id: this.goodDetails[index].id,
        name: this.goodDetails[index].name,
        price: this.goodDetails[index].price,
        image: this.goodDetails[index].imgone,
        value: this.goodDetails[index].value,
        order: this.goodDetails[index].order,
        color: this.goodDetails[index].color,
        number: this.goodDetails[index].number
      }
      //   this.$store.commit('addorder', data)
      // 这里是存入模拟的订单
      console.log(data)
    }
  }
}
</script>

<style>
.newtr {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80rpx;
}
.uid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20rpx;
  height: 88rpx;
}
.goodDetail {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background: white;
}

.goodDetailList {
  margin-bottom: 1rem;
}

.goodDetailHeader {
  width: 100%;
  z-index: 1;
  height: 1rem;
  line-height: 1rem;
  font-size: 12px;
  background: white;
  position: fixed;
  box-shadow: 0 0 10px #cecece;
  text-align: center;
  font-size: 0.41rem;
}

.goodDetailHeader i {
  display: block;
  float: left;
  height: 50px;
  padding-left: 0.3rem;
  font-size: 0.71rem;
  color: black;
}

.goodDetaiSwipe {
  height: 11rem;
  background: white;
}

.goodDetaiSwipe img {
  width: 70%;
  height: 7rem;
  display: block;
  /* margin-top: 60px; */
  margin: 80px auto;
}

.goodDetailMain {
  /* height: 1.8rem; */
  background: white;
  border-bottom: 1px solid #cecece;
  border-top: 1px solid #cecece;
  padding: 0.4rem;
}

.goodDetailName {
  color: black;
  font-weight: 800;
  font-size: 0.35rem;
}

.goodDetailPaid {
  color: red;
  font-size: 0.4rem;
}

.goodDetailFooter {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  background: #f6f4f7;
  border-top: 1px solid #efefef;
}

.gooDetailNumber {
  display: none;
}

.add a {
  display: block;
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: #ff9800;
  color: white;
  font-size: 0.35rem;
  float: left;
}

.purchase a {
  float: left;
  display: block;
  width: 50%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  color: white;
  font-size: 0.35rem;
  background: #e3211e;
}

.goodDetailImg {
  margin-top: 4px;
  margin-bottom: 6px;
}

.goodDetailImg img {
  width: 100%;
  height: auto;
  display: block;
}

table td {
  font-size: 0.31rem;
  text-align: center;
  color: #000;
}

.goodDetailValue {
  height: 1rem;
  border-bottom: 1px solid #cecece;
  padding: 0.4rem;
}

.goodDetailAdd {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display: block;
  background: white;
  float: left;
  border: 1px solid #b2b2b2;
  border-left: none;
  text-align: center;
  font-size: 0.5rem;
  color: black;
}

.goodDetailReduce {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display: block;
  background: white;
  float: left;
  border: 1px solid #b2b2b2;
  border-right: none;
  text-align: center;
  font-size: 0.5rem;
  color: black;
}

._cartNumber input {
  width: 1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  float: left;
  border: 1px solid #b2b2b2;
  text-align: center;
  color: black;
}

._Value {
  float: left;
  margin-top: 0.2rem;
}

.goodDetailColor {
  display: none;
}
</style>
