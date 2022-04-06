<template>
  <div>
    <div class="box">page foo</div>    
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'foo-demo',
  beforeRouteUpdate(to, from) {
    console.log('foo', to)
    console.log('foo', from)
  }
}
</script>
