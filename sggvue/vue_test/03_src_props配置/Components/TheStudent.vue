<template>
  <div class="Student">
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 2 }}</h2>
  </div>
</template>

<script>
export default {
  name: "TheStudent",
  // props: ["name", "sex", "age"],简单声明接收

  // 接收的同时对数据进行类型限制
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },

  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name类型
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 99, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      msg: "我在学习尚硅谷Vue课程",
    };
  },
};
</script>

<style>
.Student {
  background-color: #afe;
}
</style>