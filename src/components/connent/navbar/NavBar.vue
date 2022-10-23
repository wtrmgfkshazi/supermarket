<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: rgb(231, 38, 160);
}

.nav .center {
  text-align: center;
  flex: 1;
}

.nav .left,
.nav .right {
  width: 60px;
  height: 44px;
}
</style>
