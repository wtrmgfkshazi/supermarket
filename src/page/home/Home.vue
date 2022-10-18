<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav-center">
      <template #center> 购物街 </template>
    </nav-bar>
    <!-- 轮播图 -->
    <swiper></swiper>
  </div>
</template>

<script>
//顶部导航栏组件
import NavBar from "@/components/connent/navbar/NavBar.vue";
//轮播图组件
import Swiper from "./childrenComponents/swiper/Swiper.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
  },
};
</script>

<style scoped>
.nav-center {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
</style>
