<template>
  <div class="projecthub-historylist--item">
    <div class="title">{{ title }}</div>
    <div class="author">{{ author }}</div>
  </div>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'projecthub-historylist--item',
    props: ['title', 'author'],
    components: {
      Icon
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .projecthub-historylist--item {
    padding: 15px 30px;
    transition: 0.2s ease background;
    cursor: pointer;

    & .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & .author {
      opacity: 0.4;
    }
  }
</style>
