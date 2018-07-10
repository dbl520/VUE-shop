<template>
  <div>
    <header>
      <i class="iconfont icon-fanhui fz" @click="$router.go(-1)"></i>
      <span class="title">
        {{newTitle}}
      </span>
    </header>
    <!-- 此处是占位符 -->
    <div class="zanweifu"></div>
  </div>
</template>

<script>
    export default {
        name: 'header',
        data: function() {
            return {
                name: '',
            }
        },
        props:{
          title:String
        },
       computed:{
         newTitle(){
           return this.title
         }
       }
    }
</script>

<style scoped>
    header {
        height: 0.88rem;
        background: #ffffff;
        font-size: 0.32rem;
        color: #353535;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        z-index: 99;
    }
    
    .fz {
        font-size: 0.48rem;
        color: #353535;
        padding-left:0.2rem;
    }
    
    .title {
        display: inline-block;
        padding-left: 0.2rem;
    }
    
    .zanweifu {
        margin-top: 0.88rem;
    }
</style>