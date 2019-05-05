<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'lsremote-app',
    data: function() {
      return {
        show: true
      }
    },
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
  .slide-fade-enter-active {
    transition: all .3s ease;
    display: block;
  }
  .slide-fade-leave-active {
    transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    display: none;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(30px);
    opacity: 0;
  }
</style>
