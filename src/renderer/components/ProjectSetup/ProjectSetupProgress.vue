<template>
  <div class="projectsetup-progress">
    <ProjectSetupProgressItem v-if="step == 1" icon="settings" text="Project settings" /><ProjectSetupProgressItem v-else icon="settings" text="Project settings" disabled="disabled" />
    <ProjectSetupProgressItem v-if="step == 2" icon="server-network" text="API Connection" /><ProjectSetupProgressItem v-else icon="server-network" text="API Connection" disabled="disabled" />
    <ProjectSetupProgressItem v-if="step == 3" icon="test-tube" text="Testing" /><ProjectSetupProgressItem v-else icon="test-tube" text="Testing" disabled="disabled" />
    <ProjectSetupProgressItem v-if="step == 4" icon="format-list-checks" text="That's it!" /><ProjectSetupProgressItem v-else icon="format-list-checks" text="That's it!" disabled="disabled" />
  </div>
</template>

<script>
  import Icon from '@/components/Icon';
  import ProjectSetupProgressItem from '@/components/ProjectSetup/ProjectSetupProgressItem';

  export default {
    name: 'projectsetup-progress',
    props: ['step'],
    components: {
      Icon,
      ProjectSetupProgressItem
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
