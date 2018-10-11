<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-box',
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .box {
    background: #fff;
    border-radius: 12.5px;
    box-shadow: 0px 2px 32px rgba(0,0,0,0.2);
  }
</style>
