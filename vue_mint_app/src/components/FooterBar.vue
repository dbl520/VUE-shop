<template>
  <div class="bottom">
    <div class="bottom-ul">
      <router-link to="/main" tag="div" style="width:20%">
        <div class="index">
          <img src="../../static/images/tab_1.png" v-if="active ==='main'" class="img">
          <!-- <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" v-if="active ==='main'"></i> -->
          <!-- <i class="iconfont icon-shouye2" v-else></i> -->
          <img src="../../static/images/tab1.png"  class="img" v-else />
        </div>
        <span class="name"> 首页</span>
      </router-link>

      <router-link to="/fenlei" tag="div" style="width:20%">
        <div class="index">
          <img src="../../static/images/tab_2.png" v-if="active =='fenlei'" class="img" />
          <img src="../../static/images/tab.png"  class="img" v-else/>
        </div>
        <span class="name">分类</span>
      </router-link>

      <router-link to="/tool" tag="div" style="width:20%">
        <div class="index">
          <img src="../../static/images/tab5_.png" v-if="active =='tool'" class="img" />
          <img src="../../static/images/tab5.png"  class="img" v-else />
        </div>
        <span class="name">新闻</span>
      </router-link>
      <router-link to="/cart" tag="div" style="width:20%">
        <div class="index">
          <!-- <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" v-if="active ==='car'"></i>
          <i class="iconfont icon-dongtai" v-else></i> -->
          <img src="../../static/images/tab3_.png" v-if="active =='cart'" class="img" />
          <img src="../../static/images/tab3.png"  class="img" v-else />
        </div>
        <span class="name">购物车</span>
      </router-link>

      <router-link to="/my" tag="div" style="width:20%">
        <div class="index">
          <img src="../../static/images/tab4_.png" v-if="active =='my'" class="img" />
          <img src="../../static/images/tab4.png" class="img"   v-else/>     
        </div>
        <span class="name">我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                // active: 'main',
            }
        },
        computed: {
            active: function() {
                    return this.$route.path.slice(1)
                    console.log('gg', this.$route.path.slice(1), this.active)
                }
                // this.active = this.$route.path.slice(1);

        }
    }
</script>

<style scoped>
    .bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 998;
        width: 100%;
        background: #fff;
        font-size: 0.34rem;
    }
    
    .index {
        text-align: center;
        width: 20%;
    }
    
    .bottom-ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #fff;
        padding: 0.1rem 0;
        width: 100%;
        height: 0.98rem;
    }
    
    .bottom-ul div {
        display: flex;
        align-items: center;
        flex-direction: column;
        list-style: none;
    }
    
    .name {
        display: inline-block;
    }
    
    .img {
        width: .5rem;
        height: .5rem;
    }
    
    .router-link-active {
        color: red;
    }
    /* #bottom width: 100%;
    height: 1.4rem;
    position: fixed;
    bottom: 0;
    color: #666;
    background: white .bottom-ul display: flex;
    justify-content: center;
    align-items: center;
    height: 1.45rem; */
    /* li
        width 25%
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align center
        i
          font-size .55rem
      .router-link:hover,.router-link-active
        color: #25b5fe; */
</style>