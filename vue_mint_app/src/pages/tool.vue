<template>
  <div class="tool">
    <div class="tool_header">
      <i class="iconfont icon-fanhui" @click="fanhui"></i>
      <span class="spas">新闻信息</span>
    </div>
    <div class="tool_lists">
      <div class="tool_item" v-for="(item,index) in news" @click="newsdetails(item.id)" :id="item.id">
        <div class="tool_item_top">
          {{item.title}}
        </div>
        <div class="tool_item_date">
          {{item.time}}
        </div>
        <div class="tool_logo">
          <img v-bind:src="item.img" alt="">
        </div>
        <div class="tool_more" @click="newsdetails(item.id)" :id="item.id">
          阅读更多 <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </div>
    <!-- 底部组件 -->
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  // 引入组件
  import Footer from '../components/FooterBar.vue'
  export default {
    // 开始
    components: {
      'footer-bar': Footer
    },
    // 结束

    data() {
      return {
        news: [],
        url:
          'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/news'
      }
    },
    created: function() {
      var _this = this
      _this.$http.get(_this.url).then(
        response => {
          console.log(response)
          // get body data
          _this.news = response.body
        },
        response => {
          // error callback
        }
      )
    },
    methods: {
      newsdetails: function(id) {
        var _this = this
        _this.$router.push({ path: 'news', query: { id: id } })
      },
      fanhui: function() {
        console.log(this.$router)
        this.$router.go(-1)
      }
    }
  }
</script>
<style scoped>
  .tool_header {
    height: 0.88rem;
    background: #fff;
    font-size: 0.32rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.2rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 98%;
  }
  .spas {
    display: inline-block;
    padding-left: 0.2rem;
  }
  .tool_item {
    margin-top: 0.3rem;
    background: #fff;
  }
  .tool_lists {
    padding: 0.2rem;
    margin-top: 0.68rem;
  }
  .tool_logo {
    width: 100%;
    height: 3rem;
  }
  .tool_logo img {
    width: 100%;
    height: 100%;
  }
  .tool_more {
    height: 0.88rem;
    line-height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.2rem;
  }
  .tool_item_top {
    height: 0.88rem;
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
  }
  .tool_item_date {
    height: 0.88rem;
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
    color: #cccccc;
  }
</style>
