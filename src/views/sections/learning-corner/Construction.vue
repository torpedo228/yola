<template>
  <div class="container">
    </div>
</template>

<script>
export default {
  components: {  },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_CONSTRUCTION_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";
div.container {
  width: 100%;
  position: absolute;
  top: 10%;
  font-family: $light;
}
</style>
