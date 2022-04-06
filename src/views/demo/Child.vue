<template>
  <div>
    <div class="box">page child</div>    
  </div> 
</template>

<script>

export default {
  name: 'child-demo',
  beforeRouteUpdate(to, from) {
    console.log('child', to)
    console.log('child', from)
  }
}
</script>
