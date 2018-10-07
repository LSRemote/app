<template>
  <div class="page">
    <Toolbar>
      <ToolbarLogo />
      <ToolbarProjectDropdown />
    </Toolbar>
    <main>
      <aside>
        Sidebar
      </aside>
      <section class="section-content">
        Hub View

        <router-link :to="{ name: 'view-project-settings' }">To Settings</router-link>
      </section>
    </main>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar/Toolbar';
  import ToolbarLogo from '@/components/Toolbar/ToolbarLogo';
  import ToolbarProjectDropdown from '@/components/Toolbar/ToolbarProjectDropdown';

  export default {
    name: 'view-hub',
    components: {
      Toolbar,
      ToolbarLogo,
      ToolbarProjectDropdown
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
