<template>
  <div id="app">
    <div class="content-div">
      <!--<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">-->
        <router-view/>
      <!--</transition>-->
    </div>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  import Footer from './components/FooterBar.vue'
  export default {
    name: 'app',
    components: {
      'footer-bar': Footer
    },
    computed: {}
  }
</script>

<style scoped>
  body{
  padding-bottom:1.56rem; 
  font-family: '微软雅黑';
  background: #F4F4F4;;
}
</style>