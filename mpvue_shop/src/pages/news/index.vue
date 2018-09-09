<template>
  <div class="tool">
    <div class="tool_lists">
      <div class="tool_item" v-for="(item,index) in news" @click="newsdetails(item.id)" :id="item.id" :key="index">
        <div class="tool_item_top">
          {{item.title}}
        </div>
        <div class="tool_item_date">
          {{item.time}}
        </div>
        <div class="tool_logo">
          <img :src="item.img" alt="">
        </div>
        <div class="tool_more" @click="newsdetails(item.id)" :id="item.id">
          阅读更多
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // 开始
    components: {

    },
    // 结束

    data () {
      return {
        newTitle: '新闻中心',
        news: [],
        url: 'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/news'
      }
    },
    created () {
      var _this = this

      _this.$http.get(_this.url).then(
        response => {
          console.log(response)
          _this.news = response.data
        },
        response => {}
      )
    },
    methods: {
      newsdetails (id) {
        wx.navigateTo({
          url: '/pages/newsdetails/main?id=' + id
        })
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
    padding: 0 0.2rem 0.2rem 0.2rem;
    margin-top: 1rem;
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
    font-size: 0.4rem;
  }

  .tool_item_top {
    height: 0.88rem;
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
    padding-top: 0.1rem;
    font-size: 0.4rem;
  }

  .tool_item_date {
    height: 0.88rem;
    padding-left: 0.2rem;
    display: flex;
    align-items: center;
    color: #cccccc;
  }

</style>
