<template>
  <div class="box--footer" :style="'text-align:' + alignment">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-footer',
    props: ['alignment']
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
