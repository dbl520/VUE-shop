<template>
  <div class="fabu">
    <!-- 引入头部公用模板 -->
        <v-header></v-header>
    <!-- 引入公共模板结束 -->
    <div class="cons">
      这是发布页面
    </div>
  </div>
</template>
<script>
  // 引入头部组件
  // 引入共用头部组件
  import header from '../components/header.vue'
  export default {
    // 初始化
    components: {
      'v-header': header
    },
    data() {
      return {}
    },

  }
</script>
<style scoped>

</style>

