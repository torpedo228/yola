<template>
  <div class="container">
    <SectionTitle
      title="組合建構區 Construction"
      :imgSrc="require('@/assets/icons/logo/learning-corner-logo-blue.svg')"
      alt="組合建構區logo"
    />
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle },
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
div.container{
  width: 100%;
  height: 700px;
  margin-top:80px;
  position: relative;
}
</style>
