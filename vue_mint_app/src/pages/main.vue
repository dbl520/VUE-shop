<template>
	<div class="main">
    <div class="lunbo">
   <mt-swipe :auto="4000">
  <mt-swipe-item>
  	<img src="https://i8.mifile.cn/b2c-mimall-media/2fcbb6794e9f99d33bdf1f76cf380af0.jpg">
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="https://i8.mifile.cn/b2c-mimall-media/2be6be33c4131cfb2801ae41a2a84748.jpg">
  </mt-swipe-item>
  <mt-swipe-item>
  	<img src="https://i8.mifile.cn/b2c-mimall-media/d77913ecf914900557c0f9befedfc9bc.jpg">
  </mt-swipe-item>
</mt-swipe>
    </div>
    <div class="items">

    	<div class="item"  @click="xuangou">
    		<img src="../../static/images/SELECT.png">
    		<span class="item_title">选购</span>
    	</div>
    	<div class="item" @click="need">
    		<img src="../../static/images/lipin.png">
    		<span class="item_title">真心想要</span>
    	</div>
    	<div class="item">
    		<img src="../../static/images/xianshi.png">
    		<span class="item_title">限时抢购</span>
    	</div>
    	<div class="item">
    		<img src="../../static/images/news.png">
    		<span class="item_title">新品发布</span>
    	</div>
    	<div class="item">
    		<img src="../../static/images/ka.png">
    		<span class="item_title">米粉卡</span>
    	</div>
    </div>
    <div class="shop_mall">
         <div class="mall_item" @click="godetails(item.id)" v-for="(item,index) in items" :id="item.id">
           <img v-bind:src="item.img"/>
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

</template>

<script>
export default {
  data () {
    return {
       items:[],
       url:'https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/todos'
    }
  },
  created:function(){
  	var _this=this;
  	_this.$http.get(_this.url).then(response => {
            console.log(response)
    // get body data
    _this.items = response.body;

  }, response => {
    // error callback
  });
  },methods:{
    godetails:function (id) {
    	 this.$router.push({path:"details",query:{id:id}})
    },
    xuangou:function () {
      this.$router.push({path:"choose"})
    },
    need:function () {
      console.log(this)
    }
  }
}
</script>

<style lang="css" scoped>

   .lunbo{
  	height: 5rem;
  }
  .items{
  	display: flex;
  	justify-content: space-between;
    padding: 0.2rem 0.2rem;
    align-items: center;
    background: #fff;
  }
  .mint-swipe-item{
    width: 100%;
    height:5rem;
  }
  .mint-swipe-item img{
    width: 100%;
    height:100%;
  }
  .item_title{
  	display: inline-block;
  	margin-top: 0.2rem;
  	font-size: 0.1rem;
  }
  .item img{
    width: 100%;
    height:100%;
  }
  .item{
  	width: 1.2rem;
  	text-align: center;
  }
  .mall_item{
    width: 3.4rem;
    margin-top: 0.2rem;
    background: #fff;
  }
  .mall_item img{
    width: 100%;
    height:3.2rem;
  }
  .shop_mall{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding:  0 0.2rem;
  }
  .mall_title{
    text-align: center;
    font-size: 0.3rem;
    margin-top: 0.2rem;
  }
.mall_item_all{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.2rem;
  padding: 0.2rem 0.1rem;
}
  .mall_item_all_left{
    font-size: 0.4rem;
    color: red;
  }
  .price{
    font-size: 0.4rem;
  }
</style>
