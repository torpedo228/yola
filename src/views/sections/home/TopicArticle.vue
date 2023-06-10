<template>
  <div class="topic-article-container" id="topic-article">
    <SubSectionTitle title="主題專欄 Topic Article" :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
      alt="主題專欄icon" />

    <div class="article-container">
      <ArticleCard />
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/title/SubSectionTitle.vue";
import ArticleCard from "@/components/home/ArticleCard.vue";

export default {
  components: { SubSectionTitle, ArticleCard },
  data() {
    return {};
  },
  mounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.topic-article-container {
  width: 100%;
  background-color: #b9d3ea;
  position: relative;
  padding-top: 10vh;

  div.article-container {}
}
</style>
