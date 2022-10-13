<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tabbar {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  box-shadow: 0 -3px 3px 3px rgba(0, 0, 0, 0.05);
}
</style>
