<template>
  <div>
    <Header />
    <router-view></router-view>
    <!-- Footer组件在Home,Search页面显示；在Login，Register页面隐藏 -->
    <!-- <Footer v-show="$route.path == '/home' || $route.path == '/search'" /> -->
    <!-- 升级版，使用路由元信息 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

export default {
  name: "APP",
  components: { Header, Footer },
};
</script>

<style>
</style>
