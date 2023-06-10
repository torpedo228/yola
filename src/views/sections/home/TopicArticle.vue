<template>
  <div class="topic-article-container" id="topic-article">
    <SubSectionTitle title="主題專欄 Topic Article" :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
      alt="主題專欄icon" />

    <div class="article-container">
      <ArticleCard 
      :img="articleData[0].img" 
      :date="articleData[0].date" :title="articleData[0].title" :author="articleData[0].author"
        :main-category="articleData[0].mainCategory" :sub-category="articleData[0].subCategory"
        :content="articleData[0].content" :color="articleData[0].color" />
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/title/SubSectionTitle.vue";
import ArticleCard from "@/components/home/ArticleCard.vue";

export default {
  components: { SubSectionTitle, ArticleCard },
  data() {
    return {
      articleData: [
        {
          img: require("@/assets/images/home/topic-article/topic-article-1.jpg"),
          date: new Date("2023-06-04"),
          title: "幼兒玩黏土的好處與挑選黏土的指標",
          author: "花花園長",
          mainCategory: "art",
          subCategory: "fine-movement", 
          content:
            "&emsp;&emsp;在購買幼兒玩具時，黏土總是很熱門的落入了家長的購物車裡，市面上的黏土品牌眾多，顏色鮮艷種類豐富，細分下還出現了陶土、油土、紙黏土五花八門的黏土選擇，家長要如何選擇最適合家中寶貝的黏土呢? ",
          color: "yellow",
        },
      ],
    };
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
  padding: 10vh 0;

  div.article-container {}
}
</style>
