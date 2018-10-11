<template>
  <nav>
    <div class="firstLine">
      <div class="buttonBack" v-if="hasBack" v-on:click="goBack()"><Icon icon="arrow-left" /></div>
      <div class="primaryText">{{ primaryText }}</div>
      <div class="secondaryText" v-if="secondaryText">{{ secondaryText }}</div>
    </div>
    <div class="smallText" v-if="smallText">{{ smallText }}</div>
  </nav>
</template>

<script>
  import Icon from '@/components/Icon';

  export default {
    name: 'toolbar-toolbar',
    props: ['primaryText', 'secondaryText', 'smallText', 'hasBack'],
    components: {
      Icon
    },
    methods: {
      goBack: function() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss">
 nav {
   margin-bottom: 15px;

   & .firstLine {
     display: flex;
     margin-bottom: 5px;

     & .buttonBack {
       padding: 1px 0px;
       margin-right: 10px;

       & i {
         font-size: 24px;
       }
       &:hover {
         animation: animButtonBackHover 0.4s infinite alternate;
         cursor: pointer;
       }
     }
     & .primaryText {
       font-size: 26px;
       font-weight: 800;
       margin-right: 10px;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
     }
     & .secondaryText {
       font-size: 26px;
       font-weight: 400;
       opacity: 0.5;
     }
   }
   & .smallText {
     font-size: 14px;
     font-weight: 400;
     opacity: 0.5;
   }
 }

 @keyframes animButtonBackHover {
   from {
     transform: translate(0px, 0px);
   }
   to {
     transform: translate(-5px, 0px);
   }
 }
</style>
