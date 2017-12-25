<template>
  <div id="app">
    <div class="content-div">
      <transition name="slide-fade">
        <router-view></router-view>
     </transition>
    </div>
    <!-- <footer-bar class="footer"></footer-bar> -->
  </div>
</template>

<script>
  // import Footer from './components/FooterBar.vue'
  export default {
    name: 'app',
    // components: {
    //   'footer-bar': Footer
    // },
    computed: {}
  }
</script>

<style scoped>
  body{
  padding-bottom:1.56rem;
  font-family: '微软雅黑';
  background: #F4F4F4;;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
