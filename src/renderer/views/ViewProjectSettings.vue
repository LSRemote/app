<template>
  <div class="page">
    <Toolbar>
      <ToolbarTitle backAction="true" textPrimary="Project Settings" textSecondary="Splatoon OST Radio" />
    </Toolbar>
    <main>
      <aside>
        Sidebar
      </aside>
      <section class="section-content">
        Settings Here
      </section>
    </main>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar/Toolbar';
  import ToolbarLogo from '@/components/Toolbar/ToolbarLogo';
  import ToolbarTitle from '@/components/Toolbar/ToolbarTitle';

  export default {
    name: 'view-hub',
    components: {
      Toolbar,
      ToolbarLogo,
      ToolbarTitle
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
</style>
