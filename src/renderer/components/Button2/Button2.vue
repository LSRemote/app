<template>
  <button :class="'button-' + type">
    {{ text }}
  </button>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'button2-button2',
    props: ['type', 'text', 'icon'],
    components: {
      Icon
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  button {
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border: 0;
    text-align: center;
    padding: 10px 25px;
    border-radius: 100px;
    transition: 0.15s ease all;

    &:focus {
      outline: 0;
    }
  }
  button.button-primary, button.button-undefined {
    background: #50C9FF;
    color: #fff;

    &:hover {
      background: darken(#50C9FF, 15%);
      box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
      cursor: pointer;
    }
    &:active {
      background: darken(#50C9FF, 20%);
      box-shadow: 0px 2px 16px rgba(0,0,0,0.3);
    }
  }
</style>
