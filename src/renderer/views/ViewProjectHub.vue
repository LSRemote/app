<template>
  <div class="page">
    <aside>
      <Toolbar hasBack="true" :primaryText="projectTitle" :smallText="projectLocation" />
    </aside>
    <main>
      History
    </main>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar/Toolbar';
  import Icon from '@/components/Icon';

  export default {
    name: 'view-project-hub',
    data: function() {
      return {
        projectTitle: "",
        projectLocation: ""
      }
    },
    components: {
      Toolbar,
      Icon
    },
    mounted() {
      this.projectTitle = this.$route.query.projectTitle;
      this.projectLocation = this.$route.query.projectLocation;
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-gap: 25px;
  }
</style>
