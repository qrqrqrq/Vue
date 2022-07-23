<template>
  <div>
    <h1>当前求和为{{ sum }}</h1>
    <h3>当前值放大10倍后为{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">ThePerson组件的总人数是:{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>

    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "TheCount",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  methods: {
    // 借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
    ...mapMutations("countOptions", { increment: "ADD", decrement: "MINUS" }),

    // 借助mapActions生成对应的方法，方法中会调用dipatch去联系actions（对象写法）
    ...mapActions("countOptions", {
      incrementOdd: "addOdd",
      incrementWait: "addWait",
    }),
  },
  computed: {
    // 借助mapState生成计算属性，从state中读取数据。（数组写法--->取的state数据名和计算属性函数名相同用此方式）
    ...mapState("countOptions", ["sum", "school", "subject"]),
    ...mapState("personOptions", ["personList"]),

    // 借助mapGetters生成计算属性，从getters中读取数据。（数组写法--->取的getters数据名和计算属性函数名相同用此方式）
    ...mapGetters("countOptions", ["bigSum"]),
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>