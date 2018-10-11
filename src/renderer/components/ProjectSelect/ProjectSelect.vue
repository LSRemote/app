<template>
  <Box>
    <BoxTitle icon="radio" title="available projects" />
    <BoxContent>
      <slot></slot>
    </BoxContent>
    <BoxFooter>
      <center><Button2 text="Create new" /></center>
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
  .box--foter {
    background: orange;
  }
</style>
