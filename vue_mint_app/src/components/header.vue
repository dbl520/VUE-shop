<template>
  <div>
    <header>
      <i class="iconfont icon-fanhui fz" @click="this.$router.go(-1)"></i> <span class="title">
            {{name}}
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
        name:'',
      }
    },
    created () {
      this.getName();
    },
    methods: {
      // 接收名字
      getName:function(){
        console.log(this.$route.query.name)
        var name=this.$route.query.name;
        this.name=name;
      }
    }
  }
</script>

<style scoped>
  header {
    height: 0.88rem;
    background: #f5f5f5;
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
  }
  .title {
    display: inline-block;
    padding-left: 0.2rem;
  }
  .zanweifu {
    margin-top: 0.88rem;
  }
</style>
