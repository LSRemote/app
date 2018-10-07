<template>
  <div class="toolbar-project-dropdown" tabindex="-1">
    <div class="active-option">
      {{ currentProject.title }}
    </div>
    <div class="overlay-options">
      <div class="option-item" v-for="project in projects" v-on:click="selectProject(project)">
        <span class="title">{{ project.title }}</span>
        <span class="path">{{ project.path }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toolbar-project-dropdown',
    data: function () {
      return {
        currentProject: { 'title': 'Splatoon OST Radio', 'path': 'F:/Development/splatoon-radio' },
        projects: [
          { 'title': 'Splatoon OST Radio', 'path': 'F:/Development/splatoon-radio' },
          { 'title': 'Despacito 24/7', 'path': 'F:/Development/despacito' },
          { 'title': 'lo-fi 24/7 study music', 'path': 'C:/Windows/System32/VeryLongFolder/RelaxingRadio' }
        ]
      }
    },
    methods: {
      selectProject: function(newProject) {
        this.currentProject = newProject;
        document.activeElement.blur();
      }
    },
    components: { }
  }
</script>

<style lang="scss" scoped>
  .toolbar-project-dropdown {
    width: 300px;
    position: relative;

    & .active-option {
      border: 2px solid #222;
      border-radius: 4px;
      padding: 5px 10px;
      margin: 13px 25px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    & .overlay-options {
      top: 13px;
      left: 25px;
      right: 25px;
      display: none;
      position: absolute;
      background: #f1f1f1;
      border-radius: 4px;
      box-shadow: 0px 4px 16px rgba(0,0,0,0.4);
      width: 250px;

      &:hover .option-item {
        opacity: 0.25;
      }
      & .option-item:hover {
        opacity: 1;
      }
      & .option-item {
        background: #fff;
        margin: 1px;
        border: 2px solid transparent;
        transition: 0.2s ease all;
        cursor: pointer;
        padding: 10px;

        & .title {
          display: block;
          font-weight: bold;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & .path {
          display: block;
          font-size: 12px;
          opacity: 0.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    &:focus {
      outline: 0;
    }
    &:focus .overlay-options {
      display: block;
    }
  }
</style>
