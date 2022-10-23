<template>
  <div class="back-top">
    <img src="@/assets/images/common/back.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: fixed;
  bottom: 64px;
  right: 15px;
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.back-top img {
  width: 100%;
  height: 100%;
}
</style>
