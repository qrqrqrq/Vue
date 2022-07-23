<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <!-- 定义一个插槽，等着组件的使用者进行填充 -->
    <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "TheCategory",
  props: ["title"],
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