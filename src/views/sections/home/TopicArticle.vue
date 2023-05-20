<template>
  <div class="container" id="topic-article">
    <SectionTitle title="主題專欄 Topic Article" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="主題專欄logo" />


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
