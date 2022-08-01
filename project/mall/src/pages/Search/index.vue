<template>
  <div>
    我是搜索
    <h1>params----{{ $route.params.keyword }}</h1>
    <h1>query----{{ $route.query.k }}</h1>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
</style>