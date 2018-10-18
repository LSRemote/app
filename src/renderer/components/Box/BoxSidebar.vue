<template>
  <div class="box-sidebar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-sidebar',
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .box-sidebar {
    background: #fff;
    display: grid;
    grid-template-columns: 300px 1fr;
    border-radius: 12.5px;
    height: 100%;
    box-shadow: 0px 2px 32px rgba(0,0,0,0.2);
  }
</style>
