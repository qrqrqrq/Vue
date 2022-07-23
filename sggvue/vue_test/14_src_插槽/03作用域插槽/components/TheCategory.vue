<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽，等着组件的使用者进行填充 -->
    <slot :games="games" name="slot1"
      >我是一些默认值，当使用者没有传递具体结构时，我会出现</slot
    >
  </div>
</template>

<script>
export default {
  name: "TheCategory",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style>
.category {
  background-color: pink;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: skyblue;
}
</style>