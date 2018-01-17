<template>
  <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
    <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" :top-method="loadTop">
      <ul class="list">
        <li v-for="(item, index) in proCopyright">
          <div>{{item}}</div>
        </li>
      </ul>
    </v-loadmore>
  </div>
</template>
<script>
import { Loadmore } from 'mint-ui';
  export default {
    data: function() {
      return {
        pageNo: 1,
        pageSize: 50,
        proCopyright: [1],
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode: 'auto', //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        totalpage: 0,
        loading: false,
        bottomText: '',
        url: 'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/todos'
      }
    },
    components: {
      'v-loadmore': Loadmore // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
      // 推荐应用组件时用a-b形式起名
    },
    mounted() {
      this.loadPageList() //初次访问查询列表
    },
    methods: {
      loadTop: function() {
        console.log('上拉')
        setTimeout(function(){
         this.scrollMode = 'touch';//静止下拉
          console.log("上")
        },3000)
      },
      loadBottom: function() {
        console.log('下')
        // 上拉加载
        this.more() // 上拉触发的分页查询
        this.$refs.loadmore.onBottomLoaded() // 固定方法，查询完要调用一次，用于重新定位
      },
      loadPageList: function() {
        // 查询数据
        this.$http
        //  .get(this.url + '&page=' + this.pageNo + '&size=' + this.pageSize)
          .get(this.url)
          .then(res => {
            console.log(res)
            this.proCopyright = res.data.result.PRODUCTCOPYRIGHT
            this.totalpage = Math.ceil(
              res.data.result.COUNTOFPRODUCTCOPYRIGHT / this.pageSize
            )
            if (this.totalpage == 1) {
              this.allLoaded = true
            }
            this.$nextTick(function() {
              // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
              this.scrollMode = 'touch'
              this.isHaveMore()
            })
          })
      },
      more: function() {
        // 分页查询
        if (this.totalpage == 1) {
          this.pageNo = 1
          this.allLoaded = true
        } else {
          this.pageNo = parseInt(this.pageNo) + 1
          this.allLoaded = false
        }

        console.log(this.pageNo)
        this.$http
          .get(this.url + '&page=' + this.pageNo + '&size=' + this.pageSize)
          .then(res => {
            this.proCopyright = this.proCopyright.concat(
              res.data.result.PRODUCTCOPYRIGHT
            )
            console.log(this.proCopyright)
            this.isHaveMore()
          })
      },
      isHaveMore: function() {
        // 是否还有下一页，如果没有就禁止上拉刷新
        //this.allLoaded = false; //true是禁止上拉加载
        if (this.pageNo == this.totalpage) {
          this.allLoaded = true
        }
      }
    }
  }
</script>
<style scoped>
  li {
    padding: 30px 0;
    background-color: #ccc;
    margin-bottom: 20px;
  }
</style>
