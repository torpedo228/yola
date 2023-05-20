<template>
  <div>
    <Hero />
    <Introduction />
    <LatestNews />
    <TopicArticle />
    <RelatedLink />

  </div>
</template>

<script>
import Hero from "@/views/sections/home/Hero.vue";
import Introduction from "@/views/sections/home/Introduction.vue";
import LatestNews from "@/views/sections/home/LatestNews.vue";
import TopicArticle from "@/views/sections/home/TopicArticle.vue";
import RelatedLink from "@/views/sections/home/RelatedLink.vue";

export default {
  components: { Hero, Introduction, LatestNews, TopicArticle, RelatedLink },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_HOME_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {}
</style>
