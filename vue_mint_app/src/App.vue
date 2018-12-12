<template>
    <div id="app">
        <transition name="slide-fade" mode='out-in'>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <!-- <footer-bar class="footer"></footer-bar> -->
    </div>
</template>

<script>
// import Footer from './components/FooterBar.vue'
export default {
	name: "app",
	// components: {
	//   'footer-bar': Footer
	// },
	computed: {}
};
</script>

<style>
@import "../static/font/iconfont.css";
@import "../static/css/main.css";
a {
  text-decoration: none;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
 {
  /* transform: translateX(2px); */
  opacity: 0;
}
.picker-items {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>