<template>
  <div>
    <div class="box">page bar</div>
    <button @click="goToPage">goToPageFromBar</button>
  </div>
</template>

<script>
export default {
  name: "bar-demo",
  methods: {
    goToPage() {
      this.$router.push({ path: `/foo/123` });
    },
  },
};
</script>
