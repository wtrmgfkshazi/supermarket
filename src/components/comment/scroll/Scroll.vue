<template>
  <!-- div.wrapper 是滚动区域容器，div.content是滚动内容-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    proType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  //元素创建后调用
  mounted() {
    //可以通过元素绑定ref属性，通过this.$refs.属性值获取该元素
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.proType,
      //滚动内部元素可不可以被点击
      click: true,
      pullUpLoad: this.pullUpLoad,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      // bscroll第三方包的方法  new BScroll().scrollTo(x,y,毫秒)
      this.scroll.scrollTo(x, y, time);
    },
    finish() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style scoped></style>
