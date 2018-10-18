<template>
  <div class="page">
    <main>
      <Toolbar primaryText="Select a project" />

      <ProjectSelect>
        <ProjectSelectItem v-for="(item, index) in projects" :title="item.title" :location="item.apiHost + ':' + item.apiPort" :projectIndex="index" />
        <ProjectSelectEmpty v-if="projects.length < 1" />
      </ProjectSelect>

      <br />
      <button v-on:click="debugLoadProjects()">Debug_Load_Projects</button>
      <button v-on:click="debugResetProjects()">Debug_Reset_Projects</button>
    </main>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar/Toolbar';
  import Icon from '@/components/Icon';
  import ProjectSelect from '@/components/ProjectSelect/ProjectSelect';
  import ProjectSelectItem from '@/components/ProjectSelect/ProjectSelectItem';
  import ProjectSelectEmpty from '@/components/ProjectSelect/ProjectSelectEmpty';

  export default {
    name: 'view-project-select',
    components: {
      Toolbar,
      Icon,
      ProjectSelect,
      ProjectSelectItem,
      ProjectSelectEmpty
    },
    data: function() {
      return {
        projects: []
      }
    },
    mounted() {
      if(localStorage.projects) {
        this.projects = JSON.parse(localStorage.getItem('projects'));
      }
    },
    methods: {
      debugLoadProjects: function() {
        var demoProjects = [
          {'title': 'Despacito 24/7', 'location': 'despaci.to:8000'},
          {'title': 'Development Stream', 'location': 'localhost:1234'},
          {'title': 'ChillYourMind Radio • 24/7 Music Live Stream | Deep & Tropical House | Chill Music, Dance Music', 'location': 'chillstream.yt:4473' }
        ];

        localStorage.setItem('projects', JSON.stringify(demoProjects));
        this.projects = demoProjects;
      },
      debugResetProjects: function() {
        localStorage.setItem('projects', JSON.stringify([]));
        this.projects = [];
      }
    }
  }
</script>

<style lang="scss">

</style>
