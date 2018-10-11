<template>
  <div class="box--footer">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-footer',
  }
</script>

<style lang="scss">
  .box--footer {
    padding: 20px;
  }
  .box--footer:empty {
    padding: 10px;
  }
</style>
