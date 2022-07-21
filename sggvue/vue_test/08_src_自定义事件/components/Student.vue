<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName(name)">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "joeyee",
      sex: "女",
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例上的atguigu()
      this.$emit("atguigu", this.name, 666, 888, 999);
      // this.$emit("demo");
    },
    unbind() {
      this.$off("atguigu"); //解绑一个自定义事件
      // this.$off(["atguigu", "demo"]); //解绑多个自定义事件
      // this.$off(); //解绑所有的自定义事件
    },
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: pink;
  padding: 5px;
  margin-top: 30px;
}
</style>
