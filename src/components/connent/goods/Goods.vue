<template>
  <div class="goods">
    <div class="goods-item" v-for="item in list" :key="item">
      <div class="pic">
        <img :src="item.img" alt="" />
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="msg">
        <span class="price">{{ item.price }}</span>
        <sapn class="love">{{ item.love }}</sapn>
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

.love {
  margin-left: 10px;
  color: #000;
}

@font-face {
  font-family: "iconfont"; /* Project id 3722003 */
  src: url("./font_3722003_0vzzecmje64/iconfont.woff2?t=1666353421026")
      format("woff2"),
    url("./font_3722003_0vzzecmje64/iconfont.woff?t=1666353421026")
      format("woff"),
    url("./font_3722003_0vzzecmje64/iconfont.ttf?t=1666353421026")
      format("truetype");
}

.love::before {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "\e666";
  display: inline-block;
  width: 20px;
  height: 20px;
}
</style>
