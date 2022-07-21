<template>
  <div>
    <TheStudent name="joeyee" sex="女" :age="18" />
  </div>
</template>

<script>
import TheStudent from "./Components/TheStudent.vue";
export default {
  name: "App",
  components: { TheStudent },
};
</script>

<style>
</style>