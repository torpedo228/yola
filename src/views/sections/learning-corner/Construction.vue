<template>
  <div class="construction-container">
    <SectionTitle
      title="組合建構區 Construction"
      :imgSrc="require('@/assets/icons/section/learning-corner/blue.svg')"
      alt="組合建構區icon"
    />
  </div>
</template>

<script>
import SectionTitle from "@/components/title/SectionTitle.vue";

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

div.construction-container {
  width: 100%;
  margin-top: 80px;
  position: relative;
}
</style>
