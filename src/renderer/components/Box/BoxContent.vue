<template>
  <div class="box--content" :style="'padding: ' + padding + 'px'">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-content',
    props: ['padding'],
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
