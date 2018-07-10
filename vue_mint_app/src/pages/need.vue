<template>
  <div class="need">
    <!-- 引入头部公用模板 -->
    <v-header :title='newTitle'></v-header>
    <!-- 引入公共模板结束 -->
    <div class="cons">
      想要
    </div>
  </div>
</template>
<script>
  // 引入共用头部组件
  import header from '../components/headerOne.vue'
  export default {
    components: {
      'v-header': header
    },
    data() {
      return {
        newTitle:'真心想要'
      }
    },
   
  }
</script>
<style  scoped>
</style>

