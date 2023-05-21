<template>
  <div class="container" id="portal">
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
  components: { SectionTitle,  },
  data() {
    return {};
  },
  mounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;
  height: 100vh;
  margin-top: 80px;
  position: relative;
}
</style>
