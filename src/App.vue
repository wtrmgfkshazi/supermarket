<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/connent/tabbar/MainTabBar.vue";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import url("./assets/css/base.css");
@import url("./assets/css/normail.css");
.main-tab-bar {
  z-index: 99;
  background-color: #fff;
}
</style>
