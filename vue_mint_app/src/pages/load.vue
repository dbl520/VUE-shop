
   <template>
    <div class="page-loadmore">
      <h1 class="page-title">Pull up</h1>
      <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
      <p class="page-loadmore-desc">translate : {{ translate }}</p>
      <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">
        translateScale : {{ moveTranslate }} 
      </div>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="page-loadmore-list">
            <li v-for="item in list" class="page-loadmore-listitem" :key="item">{{ item }}</li>
          </ul>
         <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">❤</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>    
          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
            <span v-show="allLoaded == true" >加载完成没有更多数据</span>
          </div>
        </mt-loadmore>
      </div>
    </div>
  </template>
  <script type="text/babel">
  export default {
  
    data() {
      return {
        list: [],
        allLoaded: false,
        bottomStatus: "",
        wrapperHeight: 0,
        topStatus: "",
        translate: 0,
        moveTranslate: 0
      };
    },
   
    methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
  </script>
  <style>
  .loading-background,
  .mint-loadmore-top span {
    -webkit-transition: 0.2s linear;
    transition: 0.2s linear;
  }
  .mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle;
  }
   
  .mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
   
  .page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle;
  }
   
  .page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px;
  }
   
  .page-loadmore-desc:last-of-type,
  .page-loadmore-listitem {
    border-bottom: 1px solid #eee;
  }
   
  .page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
   
  .page-loadmore-listitem:first-child {
    border-top: 1px solid #eee;
  }
   
  .page-loadmore-wrapper {
    overflow: scroll;
  }
   
  .mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: 0.2s linear;
    transition: 0.2s linear;
    vertical-align: middle;
  }
   
  .mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  </style>
   
  


