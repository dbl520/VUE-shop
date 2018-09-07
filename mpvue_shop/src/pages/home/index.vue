<template>
  <div class="box">
    <!-- 公共头部组件 -->
    <!-- <header-two :title="newTitle"></header-two> -->
      <div class="main">
        <swiper :indicator-dots="indicatorDots"
          :autoplay="autoplay" :interval="interval" :duration="duration" style='height:44vh;'>
            <swiper-item v-for="(item,index) in imgUrls" :key="index" >
              <image :src="item" class="slide-image" style='width:100%;height250rpx' />
            </swiper-item>
        </swiper>
        <div class="items">

          <div class="item" @click="xuangou('choose','选购')">
            <div class="item_img">
              <image src="/static/images/SELECT.png" />
            </div>
            <span class="item_title">选购</span>
          </div>
          <div class="item" @click="xuangou('need','真心想要')">
            <div class="item_img">
              <image src="/static/images/lipin.png" />
            </div>
            <span class="item_title">真心想要</span>
          </div>
          <div class="item" @click="xuangou('qiangou','限时抢购')">
            <div class="item_img">
              <image src="/static/images/xianshi.png" />
            </div>
            <span class="item_title">限时抢购</span>
          </div>
          <div class="item" @click="xuangou('fabu','新品发布')">
            <div class="item_img">
              <image src="/static/images/news.png" />
            </div>
            <span class="item_title">新品发布</span>
          </div>
          <div class="item" @click="xuangou('mifenka','米粉卡')">
            <div class="item_img">
              <image src="/static/images/ka.png" />
            </div>
            <span class="item_title">米粉卡</span>
          </div>
        </div>
        <div class="shop_mall">
          <div class="mall_item" @click="godetails(item.id)" v-for="(item,index) in items" :id="item.id" :key="index">
            <img :src="item.img" />
            <p class="mall_title">
              {{item.name}}
            </p>
            <div class="mall_item_all">
              <div class="mall_item_all_left">
                ￥
                <span class="price">{{item.Price}}</span>
              </div>
              <div class="mall_item_all_right">
                1人喜欢
              </div>
            </div>
          </div>
        </div> 
      </div>
    <!-- 上滑 -->
    <!-- <div class="tops" v-if="showtop" @click="top" id="btn">
      <i class="iconfont icon-tubiao02  tops_size"></i>
    </div> -->
    <!-- 底部组件 -->

  </div>
</template>
<script>
    // 引入组件

    export default {
      // 组件开始
      components: {},
      // 组件结束
      data () {
        return {
          showtop: false, // top
          items: [],
          imgUrls: ['https://i8.mifile.cn/b2c-mimall-media/2fcbb6794e9f99d33bdf1f76cf380af0.jpg',
            'https://i8.mifile.cn/b2c-mimall-media/2be6be33c4131cfb2801ae41a2a84748.jpg',
            'https://i8.mifile.cn/b2c-mimall-media/d77913ecf914900557c0f9befedfc9bc.jpg'
          ],
          url: 'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/todos',
          timer: null,
          // 定义一个定时器
          isTop: true // 定义一个布尔值，用于判断是否到达顶部
        }
      },
      created: function () {
        this.$http.get(this.url, {}).then((d) => {
          // 输出响应头
          console.log(d, d.header, d.data)
          this.items = d.data
        }).catch(err => {
          console.log(err)
        })
      },
      mounted: function () {
        // var _this = this
        // var clientHeight = document.documentElement.clientHeight // 获取可视区域的高度
        // window.onscroll = function () { // 监听事件内容
        //   // 获取滚动条的滚动高度
        //   var osTop = document.documentElement.scrollTop || document.body.scrollTop
        //   if (osTop >= clientHeight) { // 如果滚动高度大于可视区域高度，则显示回到顶部按钮
        //     _this.showtop = true
        //   } else { // 否则隐藏
        //     _this.showtop = false
        //   } // 主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        //   if (!_this.isTop) {
        //     clearInterval(_this.timer)
        //   }
        //   _this.isTop = false
        // }
      },

      methods: {
        godetails: function (id) {
          wx.navigateTo({
            url: '/pages/details/main?id=' + id
          })
        },
        xuangou: function (path, name) {
          console.log(path, name)

          this.$router.push({
            path: path,
            query: {
              name: name
            }
          })
        }
        // 滑到顶部事件
        // top: function () {
        //   console.log('滑到顶部事件')
        //   let this_ = this
        //   this_.timer = setInterval(function () {
        //     // 获取滚动条的滚动高度
        //     var osTop =
        //       document.documentElement.scrollTop || document.body.scrollTop
        //     // 用于设置速度差，产生缓动的效果
        //     var speed = Math.floor(-osTop / 6)
        //     document.documentElement.scrollTop = document.body.scrollTop =
        //       osTop + speed
        //     this_.isTop = true // 用于阻止滚动事件清除定时器
        //     if (osTop === 0) {
        //       clearInterval(this_.timer)
        //     }
        //   }, 30)
        // }
      }
    }
</script>

<style scoped>
    .box {
        padding-bottom: 0.2rem;
    }
    
    .tops {
        position: fixed;
        bottom: 1.2rem;
        right: 13px;
        z-index: 99;
        width: 0.88rem;
        height: 0.88rem;
    }
    
    .tops i {
        font-size: 0.65rem !important;
        color: #fe498f;
    }
    
    .lunbo {
        height: 5rem;
        margin-top: 0.2rem;
    }
    
    .mint-swipe-indicator {
        background: deeppink !important;
        opacity: 0.6 !important;
    }
    
    image[lazy="loading"] {
        width: 100%;
        height: 3.2rem;
        margin: auto;
    }
    
    .items {
        display: flex;
        justify-content: space-between;
        padding: 0.2rem 0.2rem;
        align-items: center;
        background: #fff;
    }
    
    .mint-swipe-item {
        width: 100%;
        height: 5rem;
    }
    
    .mint-swipe-item image {
        width: 100%;
        height: 100%;
    }
    
    .item_title {
        display: inline-block;
        margin-top: 0.2rem;
        font-size: 0.3rem;
        text-align: center;
    }
    
    .item_img {
        width: 0.8rem;
        height: 0.66rem;
        text-align: center;
    }
    
    .item_img image {
        width: 100%;
        height: 100%;
    }
    
    .mall_item {
        width: 3.5rem;
        margin-top: 0.2rem;
        background: #fff;
    }
    
    .mall_item image {
        width: 100%;
        height: 3.2rem;
    }
    
    .shop_mall {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .mall_title {
        text-align: center;
        font-size: 0.3rem;
        margin-top: 0.2rem;
    }
    
    .mall_item_all {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.2rem;
        padding: 0.2rem 0.1rem;
    }
    
    .mall_item_all_left {
        font-size: 0.4rem;
        color: red;
    }
    
    .price {
        font-size: 0.4rem;
    }
    
    .item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .mall_item_all_right {
        font-size: 0.4rem;
    }
</style>