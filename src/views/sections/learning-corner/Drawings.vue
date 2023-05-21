<template>
  <div class="container">
    <DrawingsPortal />
  </div>
</template>

<script>
import DrawingsPortal from "@/views/sections/learning-corner/DrawingsPortal.vue";

export default {
  components: { DrawingsPortal },
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
  height: 700px;
  margin-top: 80px;
  position: relative;
}
</style>
