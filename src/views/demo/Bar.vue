<template>
  <div>
    <div class="box">page bar</div>
    <button @click="goToPage">goToPageFromBar</button>
    <div class="test">{{ name.name }}</div>
  </div>
</template>

<script>
export default {
  name: "bar-demo",
  inject: ['name'],
  beforeCreate() {
    console.log('listen status in son beforeCreated --------------------')
  },
  created() {
    console.log('listen status in son created --------------------')
  },
  beforeMount() {
    console.log('listen status in son beforeMount --------------------')
  },
  mounted() {
    console.log('listen status in son mounted --------------------')
  },
  beforeUpdate() {
    console.log('listen status in son beforeUpdate --------------------')
  },
  updated() {
    console.log('listen status in son updated --------------------')
  },
  beforeDestroy() {
    console.log('listen status in son beforeUpdate --------------------')
  },
  destroyed() {
    console.log('listen status in son updated --------------------')
  },
  methods: {
    goToPage() {
      console.log('listen name', this.name.name)
      // this.$router.push({ path: `/foo/123` });
    },
  },
};
</script>
