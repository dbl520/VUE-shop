<template>
  <div class="me">
       <div class="logos">
            <div class="logos_all">
            <div class="logos_img"> 
               <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512968835725&di=4771d4a3d2e6efb0760d4394f5da7603&imgtype=0&src=http%3A%2F%2Fimage.9game.cn%2F2014%2F12%2F30%2F10143631.jpg">
            </div>
             <div class="logos_name">木木</div>
             </div>
             <div class="dingdan" @click="order">
                <div class="dingdan_left">
                  <i class="iconfont icon-dingdan"></i>
                </div>
                <div class="dingdan_right">
                  我的订单
                </div>
             </div>
             <div class="dingdan" @click="guanyu">
                <div class="dingdan_left">
                  <i class="iconfont icon-dingdan"></i>
                </div>
                <div class="dingdan_right" >
                  关于我们
                </div>
             </div>
       </div>
      <!-- <div @click="index">
        个人中心
      </div>
      <div class="" @click="jia">
        加
      </div>
      <div class="" @click="jian">
          减
      </div>
       <button @click="$store.commit('add')">+</button> -->
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
  export default{
    data(){
      return{

      }
    },
    methods:{
      order:function(){
          this.$router.push({path:"all_order"})
      },
      index:function () {
        console.log(this.$store.state.count,
      )
      },jia:function () {
          this.$store.commit('add')
          console.log(this.$store.state.count)
        // body...
      },jian:function () {
           this. $store.commit('reduce')
           console.log(this.$store.state.count)
           // body...
      },guanyu:function(){
        MessageBox({
          title: '关于我',
          message: 'vue爬坑记?',
          showCancelButton: true
        });
      }
    }
  }
</script>
<style scoped>
.logos_name{
  padding-left: 0.2rem;
}
body{
    background: #eee;
  }
 .logos_all{
   height: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border-bottom: 1px solid #eee;
   background: #ffffff;
 }
 .logos_img{
   height: 1.8rem;
   width:1.8rem; 
 }
 .logos_img img{
   width: 100%;
   height: 100%;
 }
 .dingdan{
   background: #fff;
  border-bottom: 1px solid #eee;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   padding:   0.2rem 0.5rem;
 }
 .dingdan_left i{
   font-size: 0.65rem;
 }
 .dingdan_right{
   padding-left: 0.3rem;
 }
  #index{
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
</style>

