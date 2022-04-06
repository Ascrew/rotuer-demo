<template>
  <div>
    <div class="box">page foo {{name }} {{ age }}</div>    
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'foo-demo',
  props: ['name', 'age'],
  created() {
    console.log('created in foo', this.id)
  },
  watch: {
    $router: {
      handler(val) {
        console.log('lsiten router change in foo', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped >
.router-view {
  padding: 20px;
  border: 1px solid black;
}
</style>
