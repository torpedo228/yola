<template>
  <div class="container" id="topic-article">
    <SectionTitle title="相關連結 Related Link" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="相關連結logo" />


  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle },
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
  height: 600px;
  position: relative;
}
</style>
