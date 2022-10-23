<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav-center">
      <template #center> 购物街 </template>
    </nav-bar>
    <!-- 此处不用“:”，传为字符串 -->
    <scroll
      class="content"
      ref="scroll"
      :pro-type="3"
      :pull-up-load="true"
      @scroll="backShow"
      @pulling-up="showGoodsAgain"
    >
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
      <goods :list="goodsList[type].list" @load="scollAgain"></goods>
    </scroll>

    <back-top v-show="isBackShow" @click="backTop"></back-top>
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
//导入返回顶部图标
import BackTop from "@/components/connent/backTop/BackTop.vue";

//引入网络请求
import { goods } from "@/network/home.js";

//引入移动端滚动
import Scroll from "@/components/comment/scroll/Scroll.vue";

//引入防抖函数
import { debounce } from "@/common/utils.js";

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
      isBackShow: false,
    };
  },
  components: {
    NavBar,
    Swiper,
    NavItem,
    TabControl,
    Goods,
    Scroll,
    BackTop,
  },
  created() {
    this.getGoods("pops");
    this.getGoods("news");
    this.getGoods("sell");
  },
  methods: {
    getGoods(type) {
      const page = this.goodsList[type].page + 1;
      this.goodsList[type].page = page;
      goods(type, page).then((res) => {
        if (!res.data) return true;
        this.goodsList[type].list.push(...res.data);
      });
    },
    showGoods(item) {
      this.type = this.typeTitle[item];
    },
    backTop() {
      // console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0, 0);
    },
    backShow(item) {
      this.isBackShow = item.y < -300;
    },
    showGoodsAgain() {
      this.getGoods(this.type);
      this.$refs.scroll.finish();
    },
    //图片加载完成后，手动加载一下scroll组件，防止出现bug
    //1.监听图片加载完成，重新计算scroll高度
    scollAgain() {
      const refresh = debounce(this.$refs.scroll.refresh);
      refresh();
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-center {
  z-index: 999;
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
  background-color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
