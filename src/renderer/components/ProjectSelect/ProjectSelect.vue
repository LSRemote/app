<template>
  <Box>
    <BoxTitle icon="radio" title="available projects" />
    <BoxContent>
      <slot></slot>
    </BoxContent>
    <BoxFooter alignment="center">
      <router-link :to="{ name: 'view-project-setup' }"><Button2 text="Create new" /></router-link>
    </BoxFooter>
  </Box>
</template>

<script>
  import Icon from '@/components/Icon';
  import Box from '@/components/Box/Box';
  import BoxTitle from '@/components/Box/BoxTitle';
  import BoxContent from '@/components/Box/BoxContent';
  import BoxFooter from '@/components/Box/BoxFooter';
  import Button2 from '@/components/Button2/Button2';

  export default {
    name: 'projectselect-projectselect',
    components: {
      Icon,
      Box,
      BoxTitle,
      BoxContent,
      BoxFooter,
      Button2
    },
    methods: {
    }
  }
</script>

<style lang="scss">
</style>
