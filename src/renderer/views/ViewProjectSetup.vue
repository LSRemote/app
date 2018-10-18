<template>
  <div class="page">
    <aside>
      <Toolbar hasBack="true" primaryText="Setup a new project" />
    </aside>
    <main>
      <ProjectSetup />
    </main>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar/Toolbar';
  import Icon from '@/components/Icon';
  import ProjectSetup from '@/components/ProjectSetup/ProjectSetup';

  export default {
    name: 'view-project-setup',
    components: {
      Toolbar,
      Icon,
      ProjectSetup
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.page {
  height: 100%;
}
 main {
   height: 100%;
   padding-bottom: 50px;
 }
</style>
