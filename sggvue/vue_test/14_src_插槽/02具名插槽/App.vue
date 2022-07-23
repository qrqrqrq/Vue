<template>
  <div class="container">
    <TheCategory title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.baidu.com" alt="">更多美食</a>
    </TheCategory>
    <TheCategory title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://www.baidu.com" alt="">单机游戏</a>
        <a href="https://www.baidu.com" alt="">网络游戏</a>
      </div>
    </TheCategory>

    <TheCategory title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>

      <!--注意！!  v-slot:footer仅能放在template标签上 -->
      <!-- <template slot="footer"> -->
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com" alt="">经典</a>
          <a href="https://www.baidu.com" alt="">热门</a>
          <a href="https://www.baidu.com" alt="">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
      </template>
    </TheCategory>
  </div>
</template>

<script>
import TheCategory from "./components/TheCategory.vue";
export default {
  name: "App",
  components: { TheCategory },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-evenly;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>
