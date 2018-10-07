<template>
  <div class="toolbar-logo">
    <i class="mdi mdi-radio" />
    <span>LSRemote</span>
  </div>
</template>

<script>
  export default {
    name: 'toolbar-logo',
    components: { }
  }
</script>

<style lang="scss" scoped>
  .toolbar-logo {
    padding: 15px 25px;
    display: flex;

    & .mdi {
      color: #05DEF6;
      display: block;
      font-size: 22px;
    }
    & span {
      display: block;
      margin-left: 15px;
      font-size: 22px;
      font-weight: bold;
    }
  }
</style>
