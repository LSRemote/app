<template>
  <button :class="'button-' + type" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'button2-button2',
    props: ['type', 'text', 'icon', 'disabled'],
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
    padding: 11px 25px;
    border-radius: 100px;
    transition: 0.15s ease all;

    &:focus {
      outline: 0;
    }
    &[disabled] {
      opacity: 0.6;
    }
  }
  button.button-primary, button.button-undefined {
    background: #50C9FF;
    color: #fff;

    &:not([disabled]):hover {
      background: darken(#50C9FF, 15%);
      box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
      cursor: pointer;
    }
    &:not([disabled]):active {
      background: darken(#50C9FF, 20%);
      box-shadow: 0px 2px 16px rgba(0,0,0,0.3);
    }
  }
  button.button-light {
    background: #4f4f4f;
    color: #fff;

    &:not([disabled]):hover {
      box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
      cursor: pointer;
    }
    &:not([disabled]):active {
      box-shadow: 0px 2px 16px rgba(0,0,0,0.3);
    }
  }
  button.button-white {
    box-shadow: 0px 2px 16px rgba(0,0,0,0.2);
    background: #fff;
    color: #000;

    &:not([disabled]):hover {
      box-shadow: 0px 2px 32px rgba(0,0,0,0.2);
      cursor: pointer;
    }
    &:not([disabled]):active {
      box-shadow: 0px 2px 16px rgba(0,0,0,0.3);
    }
  }
</style>
