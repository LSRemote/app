<template>
  <div :class="'projectsetup-progress--item ' + disabled">
    <div class="icon"><Icon :icon="icon" /></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'projectsetup-progress--item',
    props: ['icon', 'text', 'disabled'],
    components: {
      Icon
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.projectsetup-progress--item {
  margin-bottom: 5px;
  display: grid;
  color: darken(#50C9FF, 17%);
  grid-template-columns: 30px 1fr;
  grid-gap: 15px;
  transition: 0.15s ease all;

  & .icon {
    font-size: 24px;
    text-align: center;
  }
  & .text {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1em;
    align-self: center;
  }

  &.disabled {
    opacity: 0.4;
    color: #000;
  }
}
</style>
