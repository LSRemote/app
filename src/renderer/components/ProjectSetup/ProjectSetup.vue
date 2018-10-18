<template>
  <BoxSidebar>
    <BoxSide>
      <ProjectSetupProgress :step="currentStep" />
    </BoxSide>
    <BoxMain>
      <template v-if="currentStep == 1">
        <BoxTitle icon="settings" title="Project settings" />
        <BoxContent padding="30">
          <label>Project Title</label>
          <input type="text" v-model="projectTitle" placeholder="My cool 24/7 stream" />

          <label>Stream URL</label>
          <input type="text" v-model="projectURL" placeholder="http://youtube.com/watch?v=5safew2gb" />
        </BoxContent>
      </template>
      <template v-if="currentStep == 2">
        <BoxTitle icon="server-network" title="API Connection" />
        <BoxContent padding="30">
          <label>API Host</label>
          <input type="text" v-model="apiHost" placeholder="127.0.0.1" />

          <label>API Port</label>
          <input type="text" v-model="apiPort" placeholder="8000" />

          <label>API Key</label>
          <input type="text" v-model="apiKey" placeholder="super-secret-key" />
        </BoxContent>
      </template>
      <template v-if="currentStep == 3">
        <BoxTitle icon="test-tube" title="Testing" />
        <BoxContent padding="30">
          <center><Button2 @click.native="testConnection()" text="Test API Connection" /></center>

          <br /><br /><br />

          <label>API Response</label>
          <textarea disabled rows="5">{{ apiTestOutput }}</textarea>
        </BoxContent>
      </template>
      <template v-if="currentStep == 4">
        <BoxTitle icon="format-list-checks" title="That's it!" />
        <BoxContent padding="30" class="step-done">
          <div>
            <image src="" />
            <div class="text">We are done setting up your LSRemote!</div>
          </div>
        </BoxContent>
      </template>
      <BoxFooter alignment="right">
        <Button2 @click.native="previousSetup()" v-if="currentStep != 1" text="Back" type="light" />
        <Button2 @click.native="finishSetup()" v-if="currentStep == 4" text="Finish" :disabled="finished" />
        <Button2 @click.native="continueSetup()" v-else text="Continue" />
      </BoxFooter>
    </BoxMain>
  </BoxSidebar>
</template>

<script>
  import Icon from '@/components/Icon';
  import BoxSidebar from '@/components/Box/BoxSidebar';
  import BoxSide from '@/components/Box/BoxSide';
  import BoxMain from '@/components/Box/BoxMain';
  import BoxTitle from '@/components/Box/BoxTitle';
  import BoxContent from '@/components/Box/BoxContent';
  import BoxFooter from '@/components/Box/BoxFooter';
  import ProjectSetupProgress from '@/components/ProjectSetup/ProjectSetupProgress';
  import Button2 from '@/components/Button2/Button2';

  import liveStreamRadio from 'lsr-wrapper';

  export default {
    name: 'projectselect-projectsetup',
    components: {
      Icon,
      BoxSidebar,
      BoxSide,
      BoxMain,
      BoxTitle,
      BoxContent,
      BoxFooter,
      ProjectSetupProgress,
      Button2
    },
    data: function() {
      return {
        currentStep: 1,
        finished: false,
        projectTitle: "",
        projectURL: "",
        apiHost: "",
        apiPort: 0,
        apiKey: "",
        apiTestOutput: "",
        projects: []
      }
    },
    mounted() {
      console.log(localStorage.projects);

      if(localStorage.projects) {
        this.projects = JSON.parse(localStorage.getItem('projects'));
      }
    },
    methods: {
      continueSetup: function() {
        this.currentStep++;
      },
      previousSetup: function() {
        this.currentStep--;
      },
      finishSetup: function() {
        console.log("Finishing Setup!");
        this.finished = true;

        var newProjects = this.projects;
        newProjects.push({
          'title': this.projectTitle,
          'url': this.projectURL,
          'apiHost': this.apiHost,
          'apiPort': this.apiPort,
          'apiKey': this.apiKey});

        localStorage.setItem('projects', JSON.stringify(newProjects));
        this.projects = newProjects;

        this.$router.push({ name: "view-project-select" });
      },
      testConnection: function() {
        var self = this;

        self.apiTestOutput = "";
        console.log("Testing API!");

        var myRadio = new liveStreamRadio(this.apiHost, this.apiPort, this.apiKey);
        myRadio.ping().then(function(data) {
          console.log(data);
          self.apiTestOutput = data;
        }).catch(function(data) {
          console.log(data);
          self.apiTestOutput = data.message;
        });
      }
    }
  }
</script>

<style lang="scss">
  label {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.15em;
    padding: 0px 5px;
    background: #fff;
    font-weight: bold;
    display: inline-block;
    margin-left: 15px;
    z-index: 90;
    position: relative;
    bottom: -8px;
    color: #222;
  }
  input {
    border: 2px solid #ddd;
    padding: 12px;
    resize: none;
    width: 100%;
    font-size: 14px;
    margin-bottom: 20px;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #50C9FF;
    }
    &::placeholder {
      color: rgba(0,0,0,0.4);
    }
    &:disabled {
      background: transparent;
      opacity: 0.7;
    }
  }
  textarea {
    border: 2px solid #ddd;
    padding: 12px;
    resize: none;
    width: 100%;
    font-size: 14px;
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: #50C9FF;
    }
    &:disabled {
      background: transparent;
      opacity: 0.7;
    }
  }
  .step-done {
    display: flex;
    justify-content: center;
    align-items: center;

    & .text {
      width: 270px;
      text-align: center;
    }
  }
</style>
