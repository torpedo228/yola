<template>
  <div class="art-container">
    <BreadCrumb />
    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";

export default {
  components: { BreadCrumb },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_ART_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.art-container {
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
