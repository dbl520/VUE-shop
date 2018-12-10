<template>
  <div class="all_orders">
    <!-- 引入头部公用模板 -->
     <v-header :title="newTitle"></v-header>
    <div class="all_orders_title">
       <!-- 如果tabindex==当前的index，showtab样式就会生效 -->
      <div v-for="(item,index) in tabs" :Key="index" :class="[tabindex==index?'showtab':'' ]" @click="tab(index)">
        <div class="all_title_item_left ">
            <i class="iconfont icon-dingdan" v-show="index==0"></i>
            <i class="iconfont icon-fahuo" v-show="index==1"></i>
            <i class="iconfont icon-daishouhuo" v-show="index==2"></i>
            <i class="iconfont icon-icon3" v-show="index==3"></i>
          <span class="all_title_wz">
          {{item.name}}
          </span>
        </div>
      </div>
    </div>
    <!-- 内容  -->
    <div class="dingdans">
      <div class="dingdans_item" v-for="(item,index) in orders" :key="index">
        <div class="dingdans_top">
          <div class="dingdans_top_left">
            订单编号:{{item.number}}
          </div>
          <div class="dingdans_top_right">
            数量 {{item.value}}
          </div>
        </div>
        <div class="dingdans_con">
          <div class="dingdans_con_left">
            <img v-bind:src="item.image" alt="">
          </div>
          <div class="diangdans_con_right">
            <div class="dingdans_con_right_top">
              {{item.name}}
            </div>
            <div class="dingdans_con_right_down">
              ￥ <span class="price"> {{item.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    // import {mapState,mapMutations,mapGetters} from 'vuex'
    import header from '../components/headerOne.vue'
    export default {
        components: {
            'v-header': header
        },
        data() {
            return {
                orders: [],
                newTitle: '订单中心',
                tabs: [{
                    name: '所有订单'
                }, {
                    name: '待发货'
                }, {
                    name: '已发货'
                }, {
                    name: '已取消'
                }],
                tabindex: 0,
            }
        },
        created: function() {
            this.getData()
        },
        computed: {
            // orders(){
            //     console.log(this.$store.state.addorders)
            //     return this.$store.state.addorders
            // }
        },
        methods: {
            getData: function() {
                this.orders = this.$store.state.addorders
                console.log(this.orders)
            },
            tab: function(index) {
                console.log(index)
                const _this = this
                _this.tabindex = index
            }
        }
    }
</script>
<style scoped>
    body {
        background: #eee !important;
    }
    
    .showtab {
        color: #fe498f;
        border-bottom: 1px solid #fe498f;
    }
    
    .all_orders_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.3rem 0.2rem;
        background: #fff;
        margin-top: 1rem;
    }
    
    .all_title_wz {
        font-size: 0.3rem;
    }
    
    .all_title_item_left i {
        border-bottom: 0;
        font-size: 0.32rem;
    }
    
    .all_title_item_left {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .dingdans_item {
        padding: 0 0.4rem;
        background: #ffffff;
        margin-top: 0.2rem;
    }
    
    .dingdans_top {
        font-size: 0.3rem;
        height: 0.88rem;
        line-height: 0.88rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .dingdans_con {
        border-top: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 0.3rem 0;
    }
    
    .dingdans_con_left {
        width: 2rem;
        height: 2rem;
    }
    
    .dingdans_con_left img {
        width: 100%;
        height: 100%;
    }
    
    .diangdans_con_right {
        padding-left: 0.3rem;
    }
    
    .dingdans_con_right_down {
        margin-top: 0.4rem;
        font-size: 0.2rem;
        color: #fe498f;
    }
    
    .price {
        font-size: 0.6rem;
    }
</style>    }
    
    .price {
        font-size: 0.6rem;
    }
</style>