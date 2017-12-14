<template>  
  <div class="all_orders">
         <div class="all_orders_title">
             <div class="all_title_item">
                    <div class="all_title_item_left">
                        <i class="iconfont icon-dingdan"></i>
                        <span class="all_title_wz">
                            所有订单
                        </span>
                    </div>
            </div>
            <div class="all_title_item">
                    <div class="all_title_item_left">
                        <i class="iconfont icon-dingdan"></i>
                         <span class="all_title_wz">
                            待发货
                        </span>
                    </div>
            </div>     
            <div class="all_title_item">
                    <div class="all_title_item_left">
                        <i class="iconfont icon-dingdan"></i>
                         <span class="all_title_wz">
                            已发货
                        </span>
                    </div>
                   
            </div>     
            <div class="all_title_item">
                    <div class="all_title_item_left">
                        <i class="iconfont icon-dingdan"></i>
                         <span class="all_title_wz">
                            已取消
                        </span>
                    </div>
                    
            </div>
                   
         </div>
         <!-- 内容  -->
            <div class="dingdans">
              <div class="dingdans_item">
                <div class="dingdans_top">
                    <div class="dingdans_top_left">
                        订单编号:123456789
                    </div>
                    <div class="dingdans_top_right">
                        已发货
                    </div>
                </div>
                <div class="dingdans_con">
                    <div class="dingdans_con_left">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512974244190&di=1b84568c3fb4a30be65430f05cb71d08&imgtype=0&src=http%3A%2F%2Fimage.9game.cn%2F2014%2F12%2F30%2F10143631.jpg" alt="">
                    </div>
                    <div class="diangdans_con_right">
                        <div class="dingdans_con_right_top">
                            纪念碑谷
                        </div>
                        <div class="dingdans_con_right_down">
                             ￥  <span class="price"> 2980</span>
                        </div>
                    </div>
                </div>
             </div>     
             <div class="dingdans_item">
                <div class="dingdans_top">
                     <div class="dingdans_top_left">
                        订单编号:123456789
                    </div>
                    <div class="dingdans_top_right">
                        已发货
                    </div>
                </div>
                <div class="dingdans_con">
                    <div class="dingdans_con_left">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512974244190&di=1b84568c3fb4a30be65430f05cb71d08&imgtype=0&src=http%3A%2F%2Fimage.9game.cn%2F2014%2F12%2F30%2F10143631.jpg" alt="">
                    </div>
                    <div class="diangdans_con_right">
                        <div class="dingdans_con_right_top">
                            纪念碑谷
                        </div>
                        <div class="dingdans_con_right_down">
                             ￥  <span class="price"> 2980</span>
                        </div>
                    </div>
                </div>
             </div>     
           </div>         
  </div>
</template>  
<script>
export default {};
</script> 
<style scoped>
body {
  background: #eee !important;
}
.all_orders_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.2rem;
  background: #fff;
}
.all_title_wz {
  font-size: 0.3rem;
}
.all_title_item:link,all_title_item:visited{
   color: #353535;
}
.all_title_item:hover,all_title_item:visited{
   color: #fe498f;
   border-bottom: 1px solid #fe498f;
}

.all_title_item_left i {
  border-bottom: 0;
  font-size: 0.6rem;
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
</style>  
