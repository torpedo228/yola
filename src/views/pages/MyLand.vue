<template>
  <div class="my-land-container" id="my-land">
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_MYLAND_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.my-land-container {
  width: 100%;
  height: 700px;
  margin-top: 80px;
  position: relative;
}
</style>
