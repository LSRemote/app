<template>
  <div class="toolbar-title">
    <router-link :to="{ name: 'view-hub' }" v-if="backAction"><i class="mdi mdi-arrow-left" /></router-link>
    <span class="textPrimary">{{ textPrimary }}</span>
    <span class="textSecondary">{{ textSecondary }}</span>
  </div>
</template>

<script>
  export default {
    name: 'toolbar-title',
    props: ['backAction', 'textPrimary', 'textSecondary'],
    components: { }
  }
</script>

<style lang="scss" scoped>
  .toolbar-title {
    padding: 15px 25px;
    display: flex;

    & .mdi {
      color: #05DEF6;
      display: block;
      font-size: 22px;
    }
    & span.textPrimary {
      display: block;
      margin-left: 15px;
      font-size: 22px;
      font-weight: bold;
    }
    & span.textSecondary {
      display: block;
      margin-left: 15px;
      font-size: 22px;
      opacity: 0.4;
    }
  }
</style>
