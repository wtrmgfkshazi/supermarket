<template>
  <div class="nav-item">
    <a v-for="(item, index) in list" :href="item.link" :key="index">
      <img :src="item.img" alt="" />
      <div>{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.nav-item {
  display: flex;
  width: 100%;
  height: 79px;
}

.nav-item a {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000;
}

.nav-item a img {
  width: 40px;
  height: 40px;
}
</style>
