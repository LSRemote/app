<template>
  <div class="page">
    <aside>
      <Toolbar hasBack="true" :primaryText="project.title" :smallText="project.apiHost + ':' + project.apiPort" />
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
        projects: [],
        project: {}
      }
    },
    components: {
      Toolbar,
      Icon
    },
    mounted() {
      if(localStorage.projects) {
        this.projects = JSON.parse(localStorage.getItem('projects'));
      }

      this.projectIndex = this.$route.query.projectIndex;
      this.project = this.projects[this.projectIndex];

      console.log(this.project);
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
