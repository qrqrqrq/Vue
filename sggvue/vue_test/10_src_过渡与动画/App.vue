<template>
  <div class="app">
    <TheTest />
    <TheTest2 />
    <TheTest3 />
  </div>
</template>

<script>
import TheTest from "./components/TheTest.vue";
import TheTest2 from "./components/TheTest2.vue";
import TheTest3 from "./components/TheTest3.vue";

export default {
  name: "App",
  components: { TheTest, TheTest2, TheTest3 },
};
</script>

<style scoped>
</style>
