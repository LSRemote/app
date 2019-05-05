<template>
  <div class="projecthub-streampreview">
    <iframe :src="'https://youtube.com/embed/' + videoID + '?autoplay=true&loop=true&mute=true&showinfo=0'" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'projecthub-streampreview',
    props: ['src'],
    data: function() {
      return {
        videoID: ""
      }
    },
    mounted: function() {
      if(this.src.indexOf("youtu.be") != -1) {
        // youtu.be link
        this.videoID = this.src.split("youtu.be/")[1];
      }
      if(this.src.indexOf("youtube.com/watch?v=") != -1) {
        // youtube.com?v= link
        this.videoID = this.src.split("watch?v=")[1];
      }
      if(this.src.indexOf("youtube.com/embed") != -1) {
        // youtube.com/embed/ link
        this.videoID = this.src.split("youtube.com/embed/")[1];
      }
    }
  }
</script>

<style lang="scss">
  .projecthub-streampreview {
    width: 100%;
    border-radius: 12.5px;
    padding-top: 56.25%;
    background: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.2), 0px 2px 32px rgba(0,0,0,0.2);

    & iframe {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
