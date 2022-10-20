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
    <!-- 控制组件 -->
    <tab-control :title="indexTitle"></tab-control>
  </div>
</template>

<script>
//顶部导航栏组件
import NavBar from "@/components/connent/navbar/NavBar.vue";
//轮播图组件
import Swiper from "./childrenComponents/swiper/Swiper.vue";
//导航组件
import NavItem from "./childrenComponents/nav_item/NavItem.vue";

//控制栏组件
import TabControl from "@/components/connent/tabcontrol/TabControl.vue";
export default {
  name: "Home",
  data() {
    return {
      indexTitle: ["流行", "新款", "精选"],
    };
  },
  components: {
    NavBar,
    Swiper,
    NavItem,
    TabControl,
  },
};
</script>

<style scoped>
.nav-center {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

.nav-item {
  border-bottom: 10px solid #f2f2f2;
}
</style>
