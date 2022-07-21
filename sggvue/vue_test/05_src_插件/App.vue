<template>
  <div>
    <TheSchool />
    <hr />
    <TheStudent />
  </div>
</template>

<script>
import TheStudent from "./Components/TheStudent.vue";
import TheSchool from "./Components/TheSchool.vue";
export default {
  name: "App",
  components: { TheStudent, TheSchool },
};
</script>

<style>
</style>