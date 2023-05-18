<template>
  <div>
    <SectionTitle
      title="美勞區 Art"
      :imgSrc="require('@/assets/icons/logo/learning-corner-logo-red.svg')"
      alt="美勞區logo"
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
    this.$store.commit("SET_ART_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
