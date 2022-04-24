<template>
  <div>
    <div class="box">page child</div>    
  </div> 
</template>

<script>

export default {
  name: 'child-demo',
  created() {
    // console.log('created in child')
  },
  watch: {
    $router(val) {
      console.log('listen watch val in ', val)
    }
  }
}
</script>
