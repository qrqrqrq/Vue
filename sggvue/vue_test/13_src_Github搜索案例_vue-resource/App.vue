<template>
  <div class="container">
    <TheSearch />
    <TheList />
  </div>
</template>

<script>
import TheSearch from "./components/TheSearch.vue";
import TheList from "./components/TheList.vue";
export default {
  name: "App",
  components: { TheSearch, TheList },
};
</script>

<style>
</style>
