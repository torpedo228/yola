<template>
  <div class="container" id="portal">
    <SectionTitle title="繪畫 Drawings" :imgSrc="require('@/assets/icons/logo/learning-corner-logo-yellow.svg')" alt="繪畫logo" />

        <a href="./learning-corner/art/drawings/fingerprint">
          <div class="portal-item drawings">指印</div>
        </a>

  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle, },
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

  div.portal-container {}
}
</style>

