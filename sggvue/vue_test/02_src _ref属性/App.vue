<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出上方的DOM元素</button>
    <TheSchool ref="sch" />
  </div>
</template>

<script>
import TheSchool from "./Components/TheSchool";
export default {
  name: "App",
  components: { TheSchool },
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
      console.log(this.$refs.btn);
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>