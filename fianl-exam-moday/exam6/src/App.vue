<template>
  <div id="app">
    <h1>exam6</h1>
    <div id="wrap2">
      <Counter :count="value" v-for="(value, index) in values" :key="index" />
    </div>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
export default {
  name: "App",
  components: { Counter },
  data: () => {
    return {
      values: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ],
    };
  },
  methods: {
    onClick(value) {
      this.values.push(value);
    },
  },
};
</script>

<style scoped>
#wrap2 {
  width: 100px;
}
</style>
