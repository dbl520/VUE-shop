<template>
  <div class="news_details">
    <div class="news_title">
      <i class="iconfont icon-fanhui" @click="fanhui"></i>
      新闻详情
      </div>
    <div class="details_con" v-for="(item,index) in newsdetails">
      <div class="details_p">
        {{item.title}}
      </div>
      <div class="details_p">
        {{item.time}}
      </div>
      {{newsdetails.boxs}}
      <div class="cona_item" v-for="box in newsdetails[0].boxs">
        <div class="details_p">
          {{box.p}}
        </div>
        <div class="details_img">
          <img v-bind:src="box.imgs" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        newsdetails: [],
        // lists:[],
        url:
          'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/newsdetails'
      }
    },
    created: function() {},
    mounted: function() {
      this.getData()
    },
    methods: {
      getData: function() {
        // 接收上个页面传来的参数
        var id = this.$route.query.id
        var _this = this
        _this.$http.get(_this.url).then(
          response => {
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
              if (response.data[i].id == id) {
                _this.newsdetails.push(response.data[i])
                //  _this.lists.push(response.body[i].boxs);
              }
            }
            // get body data
            console.log(_this.newsdetails)
            //  console.log(_this.lists);
          },
          response => {
            // error callback
          }
        )
      },
      fanhui:function(){
          var _this = this
        _this.$router.push({ path: 'main' })
      }
    }
  }
</script>
<style scoped>
  .news_title {
    height: 0.88rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 0.2rem;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 0.3rem;
    z-index: 999;
    background: #ffffff;
    width: 98%;
  }
  .details_con {
    margin-top: 1.2rem;
    padding: 0.2rem;
    background: #ffffff;
  }
  .details_p {
    font-size: 0.3rem;
  }
  .details_img img {
    width: 100%;
    height: 100%;
  }
</style>
