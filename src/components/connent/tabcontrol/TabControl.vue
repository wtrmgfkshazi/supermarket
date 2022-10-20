<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      :style="styleColor(index)"
      @click="itemClick(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    styleColor(item) {
      return this.currentIndex == item
        ? { borderBottom: "2px solid rgb(219, 33, 160)" }
        : {};
    },
    itemClick(item) {
      this.currentIndex = item;
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 100%;
  height: 49px;
  text-align: center;
  line-height: 49px;
}

.tab-control div {
  padding: 0 8px;
}
</style>
