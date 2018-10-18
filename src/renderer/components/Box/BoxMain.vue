<template>
  <div class="box-main">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-main',
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.box-main {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
