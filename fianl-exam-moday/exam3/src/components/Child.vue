<template>
    <div v-bind:class="color" id="wrap">
      Child 컴포넌트
    </div>
</template>

<script>
  export default {
    props: ['color'],
  };
</script>

<style>
  #wrap {
    border: 1px solid black;
    width: 300px;
    height: 50px;
    line-height: 50px;
  }
  .gray {
    color: gray;
  }
  .green {
    color: green;
  }
  .blue {
    color: blue;
  }
  .red {
    color: red;
  }
</style>
