<template>
  <div class="Student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <input type="text" v-fbind:value="name" />
  </div>
</template>

<script>
export default {
  name: "TheStudent",
  data() {
    return {
      name: "joeyee",
      sex: "female",
    };
  },
};
</script>

<style>
.Student {
  background-color: #afe;
}
</style>