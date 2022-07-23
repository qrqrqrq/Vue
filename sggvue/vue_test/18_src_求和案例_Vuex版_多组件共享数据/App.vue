<template>
  <div class="container">
    <TheCount />
    <ThePerson />
  </div>
</template>

<script>
import TheCount from "./components/TheCount.vue";
import ThePerson from "./components/ThePerson.vue";
export default {
  name: "App",
  components: { TheCount, ThePerson },
};
</script>

<style scoped>
</style>
