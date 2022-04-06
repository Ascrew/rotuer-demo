<template>
  <div id="app">
    <div class="link-list">
      <router-link class="link__item" to="/foo">go to foo</router-link>
      <router-link class="link__item" to="/foo/child">go to child</router-link>
    </div>
    <div class="line" style="margin: 10px 0;">-----------------------------------------------------------</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  created() {
    console.log('listen router', this.$router)
  },
  beforeRouteUpdate(to, from) {
    console.log('app', to)
    console.log('app', from)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link-list {
  display: flex;
  flex-direction: column;
}
.link__item {
  margin: 10px 0;
}
</style>
