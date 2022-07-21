<template>
  <div>
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="showMessage()">点我测试Hello()</button>
  </div>
</template>

<script>
export default {
  name: "TheSchool",
  data() {
    return {
      name: "尚硅谷硅谷硅谷",
      address: "北京",
    };
  },
  methods: {
    showMessage() {
      this.hello();
    },
  },
};
</script>

<style>
</style>