<template>
  <div class="projectselect--empty">
    <img src="~@/assets/img/empty.png" />
    <div class="text">Create a new LSRemote to start!</div>
  </div>
</template>

<script>
  export default {
    name: 'projectselect-empty',
  }
</script>

<style lang="scss">
  .projectselect--empty {
    padding: 10px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;

    & img {
      max-width: 80%;
      max-height: 200px;
      margin: 0 auto;
      justify-self: center;
    }
    & .text {
      text-align: center;
      font-size: 22px;
      margin-top: 30px;
      font-weight: 300;
      letter-spacing: 0.05em;
    }
  }
</style>
