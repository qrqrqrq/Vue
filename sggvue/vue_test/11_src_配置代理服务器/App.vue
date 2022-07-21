<template>
  <div class="app">
    <button @click="getStudentsInfo">获取学生信息</button>
    <button @click="getCarsInfo">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudentsInfo() {
      axios.get("http://localhost:8080/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCarsInfo() {
      axios.get("http://localhost:8080/car/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>
