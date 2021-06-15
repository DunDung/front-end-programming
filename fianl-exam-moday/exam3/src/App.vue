<template>
  <div id="app">
    <h1>컴포넌트</h1>
    <div>
      <select v-model="color">
        <option>gray</option>
        <option>green</option>
        <option>blue</option>
        <option>red</option>
      </select>
    </div>
    <Child :color="color" />
  </div>
</template>

<script>
  import Child from "@/components/Child"
export default {
  name: "App",
  components: {Child},
  data: () => {
    return {
      color: "gray"
    };
  },
};
</script>

<style>

</style>
