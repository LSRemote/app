<template>
  <div class="page">
    <aside>
      <Toolbar hasBack="true" :primaryText="project.title" :smallText="project.apiHost + ':' + project.apiPort" />

      <StreamPreview src="https://www.youtube.com/embed/hHW1oY26kxQ" />

      <div class="projecthub-buttons">
        <Button2 text="Stop stream" type="white" />
        <Button2 text="Start stream" type="white" />
        <Button2 text="Restart stream" type="white" />
        <div class="seperator"></div>
        <Button2 text="Project settings" type="white" />
      </div>
    </aside>
    <main>
      <Box>
        <BoxTitle icon="history" title="Stream History" />
        <BoxContent>
          <HistoryListItem v-for="item in streamHistory" title="Lorem Ipsum" author="dolorSitamet" />
        </BoxContent>
        <BoxFooter />
      </Box>
    </main>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar/Toolbar';
  import Icon from '@/components/Icon';
  import Box from '@/components/Box/Box';
  import BoxTitle from '@/components/Box/BoxTitle';
  import BoxContent from '@/components/Box/BoxContent';
  import BoxFooter from '@/components/Box/BoxFooter';
  import Button2 from '@/components/Button2/Button2';
  import StreamPreview from '@/components/ProjectHub/StreamPreview';
  import HistoryListItem from '@/components/ProjectHub/HistoryListItem';

  import liveStreamRadio from 'lsr-wrapper';

  var streamRadio;
  var self;

  export default {
    name: 'view-project-hub',
    data: function() {
      return {
        projects: [],
        project: {},
        apiReady: false,
        isRunning: false,
        streamHistory: []
      }
    },
    components: {
      Toolbar,
      Icon,
      Box,
      BoxTitle,
      BoxContent,
      BoxFooter,
      Button2,
      StreamPreview,
      HistoryListItem
    },
    mounted() {
      // self reference
      self = this;

      // Load Project
      if(localStorage.projects) {
        this.projects = JSON.parse(localStorage.getItem('projects'));
      }

      this.projectIndex = this.$route.query.projectIndex;
      this.project = this.projects[this.projectIndex];

      // Load API
      if(this.project.apiHost && this.project.apiPort && this.project.apiKey) {
        console.log("Connecting to API");
        streamRadio = new liveStreamRadio(this.project.apiHost, this.project.apiPort, this.project.apiKey);

        this.pingStream();
      } else {
        console.log("API not configured!");
      }

      self.refreshHistory();

      setInterval(function () {
        // self.pingStream();
      }, 5000);
    },
    methods: {
      pingStream: function() {
        streamRadio.ping().then(function(data) {
          if(data == true) {
            self.apiReady = true;
            console.log(data);

            streamRadio.getStreamStatus().then(function(data) {
              if(data.isRunning) {
                self.isRunning = true;
              } else {
                self.isRunning = false;
              }
            });

          } else {
            console.log(data);
          }
        });
      },
      refreshHistory: function() {
        streamRadio.getStreamHistory().then(function(data) {
          self.streamHistory = data;
          console.log(data);
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-gap: 25px;

    & main {
      height: 100%;

      display: grid;
    }
    & .projecthub-buttons {
      margin-top: 25px;
      display: grid;
      grid-gap: 15px;
    }
  }
</style>
