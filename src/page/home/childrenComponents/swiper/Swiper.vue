<template>
  <div class="roll">
    <ul
      :style="[{ left: lNum }, getanimate(), { marginLeft: ml }]"
      @transitionend="getTranstion"
      @touchstart="getstart"
      @touchmove="getmove"
      @touchend="getEnd"
    >
      <li v-for="(item, index) in list" :key="index">
        <a class="pic" :href="item.network">
          <img :src="item.pic" alt="" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { request } from "@/network/request.js";
export default {
  name: "Swiper",
  data() {
    return {
      list: [],
      timer: null,
      animate: false,
      lNum: "-100%",
      currentindex: 1,
      startX: 0,
      endX: 0,
      movex: 0,
      ml: 0,
    };
  },
  created() {
    this.getList();
    this.timeMove();
  },
  methods: {
    //动态获取轮播图数据
    getList() {
      request({
        url: "/rollnav/rollPic",
        methods: "get",
      }).then(
        (res) => {
          this.list = res.data;
          this.createPic();
        },
        (err) => {
          console.log(err);
        }
      );
    },

    //动态生成前后两张图片
    createPic() {
      if (this.list.length > 0) {
        this.list.unshift(this.list[this.list.length - 1]);
        this.list.push(this.list[1]);
      }
    },
    //轮播图定时器移动
    timeMove() {
      //每隔3s做一次移动的动画
      this.timer = setInterval(() => {
        this.currentindex += 1;
        const index = 100 * this.currentindex;
        this.animate = false;
        this.lNum = "-" + index + "%";
      }, 3000);
    },

    //过渡结束函数
    getTranstion() {
      this.animate = true;
      if (this.currentindex == this.list.length - 1) {
        this.currentindex = 1;
        this.lNum = "-" + this.currentindex * 100 + "%";
      } else if (this.currentindex == 0) {
        this.currentindex = this.list.length - 2;
        this.lNum = "-" + this.currentindex * 100 + "%";
      }
    },
    //移动动画定义
    getanimate() {
      return this.animate ? { transition: "none" } : { transition: ".3s all" };
    },

    //手指移动
    getstart(e) {
      clearInterval(this.timer);
      this.timer = null;
      this.startX = e.changedTouches[0].pageX;
    },
    getmove(e) {
      const x = e.changedTouches[0].pageX - this.startX;
      this.ml = x + "px";
    },
    getEnd(e) {
      this.endX = e.changedTouches[0].pageX;
      this.movex = this.endX - this.startX;
      this.ml = 0;
      console.log(this.movex);
      if (this.movex < -50) {
        this.currentindex += 1;
      } else if (this.movex > 50) {
        this.currentindex -= 1;
      }
      this.animate = false;
      const index = 100 * this.currentindex;
      this.lNum = "-" + index + "%";
      this.timeMove();
    },
  },
};
</script>

<style scoped>
.roll {
  position: relative;
  overflow: hidden;
  margin-top: 44px;
  width: 100%;
  height: 95px;
}

.roll ul {
  position: absolute;
  top: 0;
  width: 500%;
  height: 100%;
  transition: 0.3s all;
}

.roll ul li {
  float: left;
  width: 20%;
  height: 100%;
}

.pic img {
  width: 100%;
  height: 100%;
}
</style>
