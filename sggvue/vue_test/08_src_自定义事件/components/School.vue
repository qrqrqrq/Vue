<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="sendSchoolName(name)">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "北京",
    };
  },
  props: ["getSchoolName"],
  methods: {
    sendSchoolName(name) {
      this.getSchoolName(name);
    },
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
  padding: 5px;
}
</style>