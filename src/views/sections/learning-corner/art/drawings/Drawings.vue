<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  components: {  },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_DRAWINGS_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;
  height:100vh;
  margin-top: 80px;
  position: relative;
}
</style>
