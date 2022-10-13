<template>
  <tab-bar>
    <tab-bar-item :styleColor="textColor" path="/home">
      <template #item-icon>
        <img src="../../../assets/images/home/home.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../../assets/images/home/home-b.png" alt="" />
      </template>
      <template #item-text> <div>首页</div></template>
    </tab-bar-item>

    <tab-bar-item :styleColor="textColor" path="/category">
      <template #item-icon>
        <img src="../../../assets/images/category/commiunity.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../../assets/images/category/commiunity-b.png" alt="" />
      </template>
      <template #item-text> <div>分类</div></template>
    </tab-bar-item>

    <tab-bar-item :styleColor="textColor" path="/cart">
      <template #item-icon>
        <img src="../../../assets/images/cart/shop-car.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../../assets/images/cart/shop-car-b.png" alt="" />
      </template>
      <template #item-text> <div>购物车</div></template>
    </tab-bar-item>

    <tab-bar-item :styleColor="textColor" path="/profile">
      <template #item-icon>
        <img src="../../../assets/images/profile/mine.png" alt="" />
      </template>
      <template #item-icon-active>
        <img src="../../../assets/images/profile/mine-b.png" alt="" />
      </template>
      <template #item-text> <div>我的</div></template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../comment/tabbar/TabBar.vue";
import TabBarItem from "../../comment/tabbar/TabBarItme.vue";
export default {
  name: "MainTabBar",
  data() {
    return {
      textColor: "rgb(63,114,175)",
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
img {
  margin-bottom: 4px;
  width: 20px;
  height: 20px;
}
</style>
