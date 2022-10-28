<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="nav-center">
      <template #center> 购物街 </template>
    </nav-bar>
    <!-- 吸顶效果控制组件,到达位置后出现 -->
    <tab-control
      v-show="isFixed"
      class="tabControl"
      :title="indexTitle"
      @tabClick="showGoods"
      ref="tabcontrol2"
    ></tab-control>
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
      <!-- 监听轮播图的加载，轮播图的体积较大，如果加载完成，其他小图片也是，可以计算tabcontrol的距离 -->
      <swiper :list="swiperList" @load="imgLoad"></swiper>
      <!-- 导航组件 -->
      <nav-item :list="navList"></nav-item>
      <!-- 控制组件 -->
      <tab-control
        :title="indexTitle"
        @tabClick="showGoods"
        ref="tabcontrol1"
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
import { swiper, nav, goods } from "@/network/home.js";

//引入移动端滚动
import Scroll from "@/components/comment/scroll/Scroll.vue";

//引入防抖函数
import { debounce } from "@/common/utils.js";

export default {
  name: "Home",
  data() {
    return {
      navList: [],
      swiperList: [],
      indexTitle: ["流行", "新款", "精选"],
      goodsList: {
        pops: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      typeTitle: ["pops", "news", "sell"],
      type: "pops",
      isBackShow: false,
      offsetTop: 0,
      isFixed: false,
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
    //请求导航栏数据
    this.getList();
    this.getGoods("pops");
    this.getGoods("news");
    this.getGoods("sell");
  },
  methods: {
    //导航栏网络请求 + 轮播图网络请求
    getList() {
      nav().then(
        (res) => {
          this.navList = res.data;
        },
        (err) => {
          console.log(err);
        }
      );
      swiper().then(
        (res) => {
          this.swiperList = res.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    //商品网络请求
    getGoods(type) {
      const page = this.goodsList[type].page + 1;
      this.goodsList[type].page = page;
      goods(type, page).then(
        (res) => {
          if (!res.data) return true;
          this.goodsList[type].list.push(...res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    },
    showGoods(item) {
      this.type = this.typeTitle[item];
      if (this.isFixed) {
        this.$refs.scroll.scrollTo(0, -this.offsetTop, 0);
      }
      //让吸顶的导航栏和不吸顶的导航栏点击的内容保持一致
      this.$refs.tabcontrol1.currentIndex = item;
      this.$refs.tabcontrol2.currentIndex = item;
    },
    backTop() {
      // console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0, 0);
    },
    backShow(item) {
      //1.判断返回顶部按钮的隐藏和显示
      this.isBackShow = item.y < -300;
      //2.决定tabcontrol是否吸顶  offsetTop是固定值，不会随着滚动而改变
      this.isFixed = -item.y > this.offsetTop;
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
    imgLoad() {
      //this.$refs.tabcontrol --> 获得组件
      //this.$refs.tabcontrol.$el --> 获得元素
      this.offsetTop = this.$refs.tabcontrol1.$el.offsetTop;
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
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

.nav-item {
  border-bottom: 10px solid #f2f2f2;
}

.tabControl {
  position: relative;
  z-index: 99;
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
