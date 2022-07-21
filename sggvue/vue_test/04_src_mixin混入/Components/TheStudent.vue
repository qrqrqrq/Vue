<template>
  <div class="Student">
    <h2 @click="showName()">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
import { mixin } from "../mixin";
export default {
  name: "TheStudent",
  data() {
    return {
      name: "joeyee",
      sex: "female",
    };
  },
  mixins: [mixin],
};
</script>

<style>
.Student {
  background-color: #afe;
}
</style>