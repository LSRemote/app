<template>
  <div class="projectSelect--item" v-on:click="openProject()">
    <div class="title">{{ title }}</div>
    <div class="location">{{ location }}</div>
  </div>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'projectselect-item',
    props: ['title', 'location'],
    components: {
      Icon
    },
    methods: {
      openProject: function() {
        this.$router.push({ path: '/project/hub', query: { projectTitle: this.title, projectLocation: this.location}});
      }
    }
  }
</script>

<style lang="scss">
  .projectSelect--item {
    padding: 15px 25px;
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
    & .location {
      opacity: 0.4;
    }

    &:hover {
      background: rgba(0,0,0,0.03);
    }
    &:active {
      background: rgba(0,0,0,0.05);
    }
  }
</style>
