<template>
  <i :class="'mdi mdi-' + icon"></i>
</template>

<script>
  export default {
    name: 'icon',
    props: ['icon'],
  }
</script>

<style lang="scss">
</style>
