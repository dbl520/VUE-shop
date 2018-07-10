<template>
  <div>
    <header>
      <div class="tool_header">
        <!-- <i class="iconfont icon-fanhui" @click="fanhui"></i> -->
        <span class="spas">{{newTitle}}</span>
      </div>
    </header>
    <!-- 此处是占位符 -->
    <div class="zanweifu"></div>
  </div>
</template>

<script>
    export default {
        name: 'headerTwo',
        data: function() {
            return {
                name: '',
            }
        },
        props:{
          title:String,
        },
        computed:{
          newTitle(){
            return this.title
          }
        },
    }
</script>

<style scoped>
.tool_header {
height: 0.88rem;
background: #fff;
font-size: 0.32rem;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 0.2rem;
position: fixed;
top: 0;
left: 0;
width: 98%;
z-index:998;
}
.spas {
display: inline-block;
padding-left: 0.2rem;
}
.zanweifu {
margin-top: 0.88rem;
}
</style>
