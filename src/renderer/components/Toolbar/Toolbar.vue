<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'toolbar',
    components: { }
  }
</script>

<style lang="scss" scoped>
  header {
    background: #fff;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.15);
    display: grid;
    grid-template-columns: 1fr auto;
  }
</style>
