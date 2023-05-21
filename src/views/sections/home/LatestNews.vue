<template>
  <div class="container" id="latest-news">
    <SectionTitle title="最新消息 Latest News" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="最新消息logo"
      id="latest-news-title" />

    <Slide />
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import Slide from "@/components/func-items/Slide.vue";

export default {
  components: { SectionTitle, Slide },
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
  position: relative;
}
</style>
