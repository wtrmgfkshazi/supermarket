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
    <tab-control
      class="tab-control"
      :title="indexTitle"
      @tabClick="showGoods"
    ></tab-control>
    <!-- 展示商品组件 -->
    <goods :list="goodsList[type].list"></goods>
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
//商品展示组件
import Goods from "@/components/connent/goods/Goods.vue";

//引入网络请求
import { goods } from "@/network/request.js";

export default {
  name: "Home",
  data() {
    return {
      indexTitle: ["流行", "新款", "精选"],
      goodsList: {
        pops: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      typeTitle: ["pops", "news", "sell"],
      type: "pops",
    };
  },
  components: {
    NavBar,
    Swiper,
    NavItem,
    TabControl,
    Goods,
    Goods,
  },
  created() {
    this.getGoods("pops");
    this.getGoods("news");
    this.getGoods("sell");
  },
  methods: {
    getGoods(type) {
      const page = this.goodsList[type].page + 1;
      goods(type, page).then((res) => {
        this.goodsList[type].list.push(...res.data.data);
      });
    },
    showGoods(item) {
      this.type = this.typeTitle[item];
    },
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

.tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
</style>
