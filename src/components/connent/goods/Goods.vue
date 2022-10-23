<template>
  <div class="goods">
    <div class="goods-item" v-for="item in list" :key="item">
      <div class="pic">
        <!-- 监听图片是否加载完成 -->
        <img :src="item.img" alt="" @load="imgLoad" />
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="msg">
        <span class="price">{{ (item.price - 0).toFixed(2) }}</span>
        <span class="love">{{ item.love }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      this.$emit("load");
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  background-color: #fff;
  /* 避免被底部导航栏压住 */
  margin-bottom: 49px;
}

.goods-item {
  width: 45%;
  margin: 20px 0;
}

.pic {
  overflow: hidden;
  width: 100%;
  height: 150px;
  border-radius: 5px;
}

.goods-item img {
  width: 100%;
  height: 100%;
}

.title {
  padding: 15px 15px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.msg {
  text-align: center;
  color: rgb(255, 22, 193);
}

.price {
  margin-right: 5px;
}

.love {
  color: #000;
}

@font-face {
  font-family: "iconfont"; /* Project id 3722003 */
  src: url("./font_3722003_gcjwi0fa3pf/iconfont.woff2?t=1666353421026")
      format("woff2"),
    url("./font_3722003_gcjwi0fa3pf/iconfont.woff?t=1666353421026")
      format("woff"),
    url("./font_3722003_gcjwi0fa3pf/iconfont.ttf?t=1666353421026")
      format("truetype");
}

.love::before {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e600";
  display: inline-block;
  width: 20px;
  height: 20px;
  color: #d0ceceb6;
}
</style>
