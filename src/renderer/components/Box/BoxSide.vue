<template>
  <div class="box-side">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'box-side',
    components: {
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.box-side {
  padding: 30px;
  background: rgba(0,0,0,0.03);
  border-radius: 17px 0px 0px 17px;
}
</style>
