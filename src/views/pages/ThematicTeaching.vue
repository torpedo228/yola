<template>
  <div class="thematic-teaching-container">
    <BreadCrumb />
    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/layout/BreadCrumb.vue";

export default {
  components: { BreadCrumb },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_THEMATIC_TEACHING_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.thematic-teaching-container {
  width: 100%;
  height: 80vh;
  position: relative;
}
</style>
