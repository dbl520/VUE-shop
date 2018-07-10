<template>
  <div class="fabu">
    <!-- 引入头部公用模板 -->
        <v-header :title='newTitle'></v-header>
    <!-- 引入公共模板结束 -->
    <div class="cons">
      这是发布页面
    </div>
  </div>
</template>
<script>
  // 引入头部组件
  // 引入共用头部组件
  import header from '../components/headerOne.vue'
  export default {
    // 初始化
    components: {
      'v-header': header
    },
    data() {
      return {
        newTitle:'发布页面'
      }
    },

  }
</script>
<style scoped>

</style>

