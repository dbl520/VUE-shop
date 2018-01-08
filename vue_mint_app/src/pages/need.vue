<template>
  <div class="need">
    <!-- 引入头部公用模板 -->
    <v-header></v-header>
    <!-- 引入公共模板结束 -->
    <div class="cons">
      想要
    </div>
  </div>
</template>
<script>
  // 引入共用头部组件
  import header from '../components/header.vue'
  export default {
    components: {
      'v-header': header
    },
    data() {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>
<style  scoped>
</style>

