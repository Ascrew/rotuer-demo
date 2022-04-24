<template>
  <div id="app">
    <!-- <div class="link-list">
    </div>
    <div class="line" style="margin: 10px 0;">-----------------------------------------------------------</div>
    <transition>
      <router-view></router-view>
    </transition> -->
    <!-- <div ref="test" class="test"></div> -->
    <button @click="testMethod" type="text">test</button>
    <bar ref="barRef" ></bar>
  </div>
</template>

<script>
import Bar from './views/demo/Bar.vue';
export default {
  name: "App",
  components: {Bar},
  provide() {
    return {
      name: this.acData
    }
  },
  data() {
    return {
      str: 'bb',
      acData: {
        name: 'zhangsan'
      }
    }
  },

  beforeCreate() {
    console.log('listen status in beforeCreated --------------------')
  },
  created() {
    console.log('listen status in created --------------------')
  },
  beforeMount() {
    console.log('listen status in beforeMount --------------------')
  },
  mounted() {
    console.log('listen status in mounted --------------------')
    console.log(this)
  },
  beforeUpdate() {
    console.log('listen status in beforeUpdate --------------------')
  },
  updated() {
    console.log('listen status in updated --------------------')
    console.log(this)
  },
  beforeDestroy() {
    console.log('listen status in beforeUpdate --------------------')
  },
  destroyed() {
    console.log('listen status in updated --------------------')
  },
  methods: {
    testMethod() {
      this.str = 'aaaa'
      this.acData.name = 'zhaosi'
    }
  //   goToPage(path) {
  //     this.$router.push({name: `${path}`, params:{userId: '123'}})
  //   }
  // },
  // beforeRouteUpdate(to, from) {
  //   console.log('app', to)
  //   console.log('app', from)
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
