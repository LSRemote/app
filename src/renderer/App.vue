<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'lsremote-app',
    components: {
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600');
  @import url('assets/css/materialdesignicons.css');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
  }
  #app {
    width: 100vw;
    height: 100vh;
    background: #f1f1f1;
  }
  .page {
    display: grid;
    grid-template-rows: auto 1fr;

    & main {
      padding: 25px;
      display: grid;
      grid-template-columns: 280px 1fr;
      grid-gap: 25px;
      overflow-y: auto;
    }
  }
</style>
