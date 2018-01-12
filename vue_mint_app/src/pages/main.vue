<template>
  <div class="box">
    <div class="main">
      <div class="lunbo">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,key,index) in swipers" :key="index">
            <img v-bind:src="item">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="items">

        <div class="item" @click="xuangou">
          <img src="../../static/images/SELECT.png">
          <span class="item_title">选购</span>
        </div>
        <div class="item" @click="need">
          <img src="../../static/images/lipin.png">
          <span class="item_title">真心想要</span>
        </div>
        <div class="item" @click="qiangou">
          <img src="../../static/images/xianshi.png">
          <span class="item_title">限时抢购</span>
        </div>
        <div class="item" @click="fabu">
          <img src="../../static/images/news.png">
          <span class="item_title">新品发布</span>
        </div>
        <div class="item" @click="mifenka">
          <img src="../../static/images/ka.png">
          <span class="item_title">米粉卡</span>
        </div>
      </div>
      <div class="shop_mall">
        <div class="mall_item" @click="godetails(item.id)" v-for="(item,index) in items" :id="item.id">
          <!-- <img v-bind:src="item.img" v-lazy="item.img"/> -->
          <!-- 懒加载图片 -->
          <img v-lazy="item.img" />
          <p class="mall_title">
            {{item.name}}
          </p>
          <div class="mall_item_all">
            <div class="mall_item_all_left">
              ￥ <span class="price">{{item.Price}}</span>
            </div>
            <div class="mall_item_all_right">
              1人喜欢
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>

  </div>
</template>

<!-- <footer-bar class="footer"></footer-bar> -->
<script>
  // 引入组件
  import Footer from '../components/FooterBar'
  import { Indicator } from 'mint-ui' //引入mint ui
  export default {
    // 组件开始
    components: {
      'footer-bar': Footer
    },
    // 组件结束
    data() {
      return {
        items: [],
        swipers: [
          'https://i8.mifile.cn/b2c-mimall-media/2fcbb6794e9f99d33bdf1f76cf380af0.jpg',
          'https://i8.mifile.cn/b2c-mimall-media/2be6be33c4131cfb2801ae41a2a84748.jpg',
          'https://i8.mifile.cn/b2c-mimall-media/d77913ecf914900557c0f9befedfc9bc.jpg'
        ],
        url:
          'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/todos'
      }
    },
    beforeCreate: function() {
      console.log('beforeCreate')
      // 创建动画mint-ui
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
    },
    created: function() {
      // // 关闭动画
      setTimeout(function() {
        Indicator.close()
      }, 2000)

      console.log('created')
      var _this = this
      _this.$http
        .get(_this.url, {
          params: {
            // 请求参数
          }
        })
        .then(function(response) {
          console.log(response)
          _this.items = response.data
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    mounted: function() {
      console.log('mounted')
    },
    beforeUpdate: function() {
      console.log('beforeUpdate')
    },
    methods: {
      godetails: function(id) {
        this.$router.push({ path: 'details', query: { id: id } })
      },
      xuangou: function() {
        this.$router.push({ path: 'choose', query: { name: '选购' } })
      },
      need: function() {
        this.$router.push({ path: 'need', query: { name: '真心想要' } })
        console.log(this)
      },
      qiangou: function() {
        this.$router.push({ path: 'qiangou', query: { name: '抢购' } })
      },
      fabu: function() {
        this.$router.push({ path: 'fabu', query: { name: '发布' } })
      },
      mifenka: function() {
        this.$router.push({ path: 'mifenka', query: { name: '米粉卡' } })
      }
    }
  }
</script>

<style lang="css" scoped>
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
  .item img {
    width: 100%;
    height: 100%;
  }
  .item {
    width: 1.2rem;
    text-align: center;
  }
  .mall_item {
    width: 3.4rem;
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
    padding: 0 0.2rem;
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
</style>
