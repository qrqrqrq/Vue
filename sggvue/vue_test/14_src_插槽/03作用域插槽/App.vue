<template>
  <div class="container">
    <TheCategory title="游戏">
      <template scope="atguigu" slot="slot1">
        <ul>
          <li v-for="(game, index) in atguigu.games" :key="index">
            {{ game }}
          </li>
        </ul>
      </template>
    </TheCategory>
    <TheCategory title="游戏">
      <!--解构赋值 const {games} = {games:["红色警戒", "穿越火线", "劲舞团", "超级玛丽"]} -->
      <template scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </ol>
      </template>
    </TheCategory>
    <TheCategory title="游戏">
      <template slot-scope="{ games }">
        <h4>
          <li v-for="(game, index) in games" :key="index">
            {{ game }}
          </li>
        </h4>
      </template>
    </TheCategory>
  </div>
</template>

<script>
import TheCategory from "./components/TheCategory.vue";
export default {
  name: "App",
  components: { TheCategory },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-evenly;
}
</style>
