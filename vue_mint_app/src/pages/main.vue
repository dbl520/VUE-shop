<template>
  <div class="box">
    <!-- 下拉刷新上拉加载组件 -->
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <div class="main" style="min-height: 1134px">
        <div class="lunbo">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(item,key,index) in swipers" :key="index">
              <img v-bind:src="item">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="items">

          <div class="item" @click="xuangou('choose','选购')">
            <div class="item_img">
              <img src="../../static/images/SELECT.png">
            </div>
            <span class="item_title">选购</span>
          </div>
          <div class="item" @click="xuangou('need','真心想要')">
            <div class="item_img">
              <img src="../../static/images/lipin.png">
            </div>
            <span class="item_title">真心想要</span>
          </div>
          <div class="item" @click="xuangou('qiangou','限时抢购')">
            <div class="item_img">
              <img src="../../static/images/xianshi.png">
            </div>
            <span class="item_title">限时抢购</span>
          </div>
          <div class="item"  @click="xuangou('fabu','新品发布')">
            <div class="item_img">
              <img src="../../static/images/news.png">
            </div>
            <span class="item_title">新品发布</span>
          </div>
          <div class="item"  @click="xuangou('mifenka','米粉卡')">
            <div class="item_img">
              <img src="../../static/images/ka.png">
            </div>
            <span class="item_title">米粉卡</span>
          </div>
        </div>
        <div class="shop_mall">
          <div class="mall_item" @click="godetails(item.id)" v-for="(item,index) in items" :id="item.id" :key="index">
            <img v-bind:src="item.img" v-lazy="item.img" />
            <!-- 懒加载图片 -->
            <!-- <img v-lazy="item.img" /> -->
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
    </mt-loadmore>
    <!-- 上滑 -->
    <div class="tops" v-if="showtop" @click="top">
      <i class="iconfont icon-tubiao02  tops_size"></i>
    </div>
    <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>

  </div>
</template>

<!-- <footer-bar class="footer"></footer-bar> -->
<script>
    // 引入组件
    import Vue from 'vue'
    import Footer from '../components/FooterBar'

  import global_ from './Globaldata'

    import {
        Indicator
    } from 'mint-ui' //引入mint ui

    export default {
        // 组件开始
        components: {
            'footer-bar': Footer
        },
        // 组件结束
        data() {
            return {
                allLoaded: false,
                scrollMode: "touch", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
                showtop: false, //top
                items: [],
                swipers: [
                    'https://i8.mifile.cn/b2c-mimall-media/2fcbb6794e9f99d33bdf1f76cf380af0.jpg',
                    'https://i8.mifile.cn/b2c-mimall-media/2be6be33c4131cfb2801ae41a2a84748.jpg',
                    'https://i8.mifile.cn/b2c-mimall-media/d77913ecf914900557c0f9befedfc9bc.jpg'
                ],
                url: 'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/todos'
            }
        },
        props: [],
        watch: {
        },
        computed: {

        },
        beforeCreate: function() {
            console.log('beforeCreate')
        },
        created: function() {
            console.log('created', this)
             console.log('created', global_)
            var _this = this
                // 创建动画mint-ui
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
            _this.$http
                .get(_this.url, {
                    params: {
                        // 请求参数
                    }
                })
                .then(function(response) {
                    console.log(response)
                    _this.items = response.data
                    Indicator.close() // // 关闭动画
                })
                .catch(function(err) {
                    console.log(err)
                })
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted: function() {
            var _this = this
            window.onscroll = function() { //监听事件内容
                if (_this.getScrollHeight() == _this.getWindowHeight() + _this.getDocumentTop()) { //当滚动条到底时,这里是触发内容
                    console.log('this', this) //
                    _this.showtop = true;
                    console.log(_this.showtop)
                }
                setTimeout(function() {
                    _this.showtop = false
                }, 10000)
            }

            // 触摸事件
            // document.addEventListener('touchstart', touch, false)
            // document.addEventListener('touchmove', touch, false)
            // document.addEventListener('touchend', touch, false)
            // function touch(event) {
            //   var event = event || window.event
            //   var oInp = document.getElementById('app')
            //   switch (event.type) {
            //     case 'touchstart':
            //       console.log(
            //         'Touch started (' +
            //           event.touches[0].clientX +
            //           ',' +
            //           event.touches[0].clientY +
            //           ')'
            //       )
            //       break
            //     case 'touchend':
            //       console.log(
            //         '<br>Touch end (' +
            //           event.changedTouches[0].clientX +
            //           ',' +
            //           event.changedTouches[0].clientY +
            //           ')'
            //       )
            //       break
            //     case 'touchmove':
            //       event.preventDefault()
            //       console.log(
            //         '<br>Touch moved (' +
            //           event.touches[0].clientX +
            //           ',' +
            //           event.touches[0].clientY +
            //           ')'
            //       )
            //       break
            //   }
            // }
        },
        beforeUpdate: function() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log('updated')
        },
        beforeDestroy() {
            console.log('beforeDestroy')
        },
        destroyed() {
            console.log('destroyed')
        },
        methods: {
            //文档高度
            getDocumentTop() {
                var scrollTop = 0,
                    bodyScrollTop = 0,
                    documentScrollTop = 0;
                if (document.body) {
                    bodyScrollTop = document.body.scrollTop;
                }
                if (document.documentElement) {
                    documentScrollTop = document.documentElement.scrollTop;
                }
                scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
                return scrollTop;
            },

            //可视窗口高度
            getWindowHeight() {
                var windowHeight = 0;
                if (document.compatMode == "CSS1Compat") {
                    windowHeight = document.documentElement.clientHeight;
                } else {
                    windowHeight = document.body.clientHeight;
                }
                return windowHeight;
            },

            //滚动条滚动高度
            getScrollHeight() {
                var scrollHeight = 0,
                    bodyScrollHeight = 0,
                    documentScrollHeight = 0;
                if (document.body) {
                    bodyScrollHeight = document.body.scrollHeight;
                }
                if (document.documentElement) {
                    documentScrollHeight = document.documentElement.scrollHeight;
                }
                scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
                return scrollHeight;
            },


            // top
            loadTop() {
                console.log('top更多数据')
                var _this = this;
                // 加载更多数据
                setTimeout(function() {
                    // 假设数据加载完
                    _this.$refs.loadmore.onTopLoaded()
                }, 2000)

            },
            // bottom
            loadBottom() {
                var _this = this;
                console.log('bottom加载更多数据')
                    // 加载更多数据
                setTimeout(function() {
                    // 假设数据加载完
                    //  _this.allLoaded = true // 若数据已全部获取完毕
                    // _this.$refs.loadmore.onBottomLoaded()
                }, 2000)

            },
            godetails: function(id) {
                this.$router.push({
                    path: 'details',
                    query: {
                        id: id
                    }
                })
            },
            xuangou: function(path,name) {
                this.$router.push({
                    path: path,
                    query: {
                        name: name
                    }
                })
            },
            // need: function() {
            //     this.$router.push({
            //         path: 'need',
            //         query: {
            //             name: '真心想要'
            //         }
            //     })
            //     console.log(this)
            // },
          
            // 滑到顶部事件
            top: function() {

                 document.documentElement.scrollTop = 0

                // window.scrollTop(0)
                var _this = this
                _this.showtop = false
                console.log("this", _this.$store.commit("checkoutData"))
                _this.$store.commit("checkoutData");
            }
        }
    }
</script>

<style lang="css" scoped>
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

    .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }

    .item_title {
        display: inline-block;
        margin-top: 0.2rem;
        font-size: 0.3rem;
        text-align: center;
    }

    .item_img img {
        width: 100%;
        height: 100%;
    }

    .item_img {
        width: 0.8rem;
        text-align: center;
    }

    .mall_item {
        width: 3.5rem;
        margin-top: 0.2rem;
        background: #fff;
    }

    .mall_item img {
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
</style>
