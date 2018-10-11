<template>
  <div class="box--title">
    <div class="icon"><Icon :icon="icon" /></div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'box-title',
    props: ['icon', 'title'],
    components: {
      Icon
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .box--title {
    padding: 30px;
    padding-bottom: 15px;
    display: flex;
    opacity: 0.4;

    & .icon {
      font-size: 18px;
    }
    & .title {
      padding: 4px 8px;
      font-size: 12px;
      letter-spacing: 0.15em;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
</style>
