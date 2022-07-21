<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是:{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 自定义事件方式一： -->
    <Student v-on:atguigu="getStudentName" @demo="m1" />

    <!-- 自定义事件方式二： -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name, ...params) {
      console.log("App收到了学生名：", name, params);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
  },
  mounted() {
    // this.$refs.student.$on("atguigu", this.getStudentName);
    // this.$refs.student.$once("atguigu", this.getStudentName);//atguigu事件只执行一次
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
