<template>
  <div class="nav-item">
    <a v-for="(item, index) in list" :href="item.link" :key="index">
      <img :src="item.img" alt="" />
      <div>{{ item.title }}</div>
    </a>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "NavItem",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      request({
        url: "/rollnav/navPic",
        methods: "get",
      }).then(
        (res) => {
          this.list = res.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
.nav-item {
  display: flex;
  width: 100%;
  height: 69px;
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
