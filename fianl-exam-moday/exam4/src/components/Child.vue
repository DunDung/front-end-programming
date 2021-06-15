<template>
  <div id="wrap">
    <input text v-model="value" style="margin-left: 10px"/>
    <button @click="onClick">Add</button>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        value: ""
      };
    },
    methods: {
      onClick() {
        this.$emit("value", this.value);
        this.value = ""
      }
    }
  };
</script>

<style>
  #wrap {
    line-height: 70px;
    width: 300px;
    border: 1px solid black;
    height: 70px;
    background-color: lightyellow;
  }
</style>
