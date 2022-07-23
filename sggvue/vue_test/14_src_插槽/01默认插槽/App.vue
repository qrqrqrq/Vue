<template>
  <div class="container">
    <TheCategory title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" />
    </TheCategory>
    <TheCategory title="游戏">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </TheCategory>

    <TheCategory title="电影">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
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
.container {
  display: flex;
  justify-content: space-evenly;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>
