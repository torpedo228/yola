<template>
  <div class="container">
    <SectionTitle
      title="指印 Fingerprints"
      :imgSrc="require('@/assets/icons/section/learning-corner/green.svg')"
      alt="指印icon"
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
    this.$store.commit("SET_FINGERPRINT_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;

  margin-top: 80px;
  position: relative;
}
</style>
