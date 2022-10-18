<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav-center">
      <template #center> 购物街 </template>
    </nav-bar>
    <!-- 轮播图 -->
    <swiper></swiper>
    <!-- 导航组件 -->
    <nav-item></nav-item>
  </div>
</template>

<script>
//顶部导航栏组件
import NavBar from "@/components/connent/navbar/NavBar.vue";
//轮播图组件
import Swiper from "./childrenComponents/swiper/Swiper.vue";
//导航组件
import NavItem from "./childrenComponents/nav_item/NavItem.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    NavItem,
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
