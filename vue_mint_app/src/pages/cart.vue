<template>
  <div class="cards">
    <div class="cards_top">
      <i class="iconfont icon-fanhui" @click="fanhui"></i> 购物车
    </div>
    <div class="zanwu"></div>
    <div class="all">
    <div class="cards_con" v-for="(car,index) in carts">
        <div class="cards_con_left">
           <img v-bind:src="car.imgone" alt="">
          </div>
          <div class="cards_con_right">
             <div class="cards_con_right_up">
               <div class="cards_con_right_up_left">
               {{car.name}}
               </div>
               <div class="cards_con_right_up_right" @click="$store.commit('shanchu')">
                 <i class="iconfont icon-shanchu ins"></i>
               </div>
             </div>
             <div class="cards_con_mid">
               ￥ <span class="price">{{car.price}}</span>
             </div>
             <div class="cards_cons_down">
               <div class="jian" @click="reduce(index)">
                <!-- <div class="jian" @click="jian(car.id)"> -->
                  <i class="iconfont icon-jian ins" ></i>
               </div>
               <input type="text" v-model="car.value" class="mid">
               <div class="jia" @click="add(index)">
                  <!-- <div class="jia" @click="jia(car.id)"> -->
                  <i class="iconfont icon-jia ins" ></i>
               </div>
             </div>
          </div>
    </div>
   </div>
       <!-- 没数据的时候 -->
     <div class="gwc" v-if="!carts.length">
           <div class="gwc_imgs">
             <i class="iconfont icon-konggouwuche ic"></i>
             <div class="go" @click="go">去逛逛</div>
           </div>
     </div>
      <!-- 底部 -->
      <div class="btn">
         <div class="btn_left">
           合计: <span class="heji">￥<span class="pri">{{results}}</span></span>
         </div>
         <div class="btn_mid" @click="go">
             继续购物
         </div>
         <div class="btn_right" @click="$store.commit('settlement')">
           清空购物车
         </div>
      </div>
  </div>
</template>

<script>
// 引入vuex快捷写法
import {mapState,mapMutations,mapGetters} from  'vuex'
export default {
  data() {
    return {
      results:'',
    };
  },
  computed: {
    carts() {
         console.log(this.$store.state.carts);
         //这里是计算价格
         var sum=0;
         for(var i=0;i<this.$store.state.carts.length;i++){
           sum+=this.$store.state.carts[i].value*(this.$store.state.carts[i].price);
         }
        this.results=sum;
      return this.$store.state.carts;

    }

  },
  methods: {
    ...mapMutations([
      'reduce',  //减
      'add' ,//加
    ]),
    // ...mapGetters([
    //   'heji'
    // ]),
    //返回
    fanhui: function() {
      this.$router.go(-1);
    },
    // 去逛逛
    go: function() {
      var _this = this;
      _this.$router.push({ path: "main" });
    },
  }
};
</script>
<style scoped>
.cards_top {
  background: #fff;
  height: 1.3rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 1.3rem;
  font-size: 0.5rem;
  z-index: 999;
  background: #eee;
}
.zanwu {
  margin-top: 1.2rem;
}
.cards_con {
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.2rem 0.2rem;
  background: #ffffff;
}
.all {
  margin-top: 1.05rem;
}
.cards_con_left {
  width: 2.5rem;
  height: 2.5rem;
}
.cards_con_left img {
  width: 100%;
  height: 100%;
}
.cards_con_right_up {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.3rem;
}
.cards_con_right {
  padding-left: 0.2rem;
  width: 4rem;
}
.cards_con_mid {
  color: #fe498f;
}
.price {
  font-size: 0.4rem;
}
.ins {
  font-size: 0.5rem;
}
.cards_cons_down {
  display: flex;
  align-items: center;
  justify-content: center;
}
.mid {
  border: 1px solid #eee;
  width: 1rem;
  text-align: center;
  font-size: 0.4rem;
  margin: 0 0.2rem;
}
.gwc {
  position: fixed;
  top: 1rem;
  left: 0;
  width: 100%;
  height: 90vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ic {
  font-size: 3rem;
  color: #fe498f;
}
.go {
  text-align: center;
  margin: 0.2rem auto 0;
  font-size: 0.4rem;
  color: #fff;
  background: #fe498f;
  padding: 0.2rem;
  border-radius: 0.5rem;
}
.btn {
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
}
.btn_left {
  width: 3rem;
  padding-left: 0.2rem;
}
.btn_mid {
  width: 3rem;
  background: #fe498f;
  color: #fff;
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.35rem;
  text-align: center;
}
.btn_right {
  width: 3rem;
  color: #fff;
  background: #ff9800;
   height: 1.2rem;
  line-height: 1.2rem;
  font-size: 0.35rem;
  text-align: center;
}
.heji{
  color: #fe498f;
  font-size: 0.2rem;
}
.pri{
  font-size: 0.4rem;
}
</style>
