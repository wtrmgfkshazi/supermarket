<template>
  <div id="home">
    <nav-bar class="nav-center">
      <template #center> 购物街 </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/connent/navbar/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
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
