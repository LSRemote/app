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
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600,800');
  @import url('assets/css/materialdesignicons.css');

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
  }
  #app {
    width: 100vw;
    height: 100vh;
    background: #f1f1f1;
    padding: 60px;
    overflow-y: scroll;
  }
</style>
