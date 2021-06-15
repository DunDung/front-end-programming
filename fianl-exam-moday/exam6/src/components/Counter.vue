<template>
  <div id="wrap" @click="onClick">
    {{count}}
  </div>
</template>

<script>
  export default {
    props: ['count'],
    data: () => {
      return {
        value: ""
      };
    },
    methods: {
      onClick() {
        this.count++;
      }
    }
  };
</script>

<style scoped>
  #wrap {
    text-align: center;
    border: 1px solid black;
    width: 30px;
    height: 30px;
    margin: 5px;
  }
  #wrap:hover {
    background-color: yellow;
    cursor: pointer;
  }
</style>
