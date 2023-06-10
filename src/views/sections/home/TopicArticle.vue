<template>
  <div class="topic-article-container" id="topic-article">
    <SubSectionTitle title="主題專欄 Topic Article" :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
      alt="主題專欄icon" />

    <div class="article-container">
      <ArticleCard :img="articleData[0].img" :date="articleData[0].date" :title="articleData[0].title"
        :author="articleData[0].author" :main-category="articleData[0].mainCategory"
        :sub-category="articleData[0].subCategory" :content="articleData[0].content" :color="articleData[0].color" />

      <ArticleCard :img="articleData[1].img" :date="articleData[1].date" :title="articleData[1].title"
        :author="articleData[1].author" :main-category="articleData[1].mainCategory"
        :sub-category="articleData[1].subCategory" :content="articleData[1].content" :color="articleData[1].color" />

      <ArticleCard :img="articleData[0].img" :date="articleData[0].date" :title="articleData[0].title"
        :author="articleData[0].author" :main-category="articleData[0].mainCategory"
        :sub-category="articleData[0].subCategory" :content="articleData[0].content" :color="articleData[0].color" />

      <ArticleCard class="pad-show" :img="articleData[1].img" :date="articleData[1].date" :title="articleData[1].title"
        :author="articleData[1].author" :main-category="articleData[1].mainCategory"
        :sub-category="articleData[1].subCategory" :content="articleData[1].content" :color="articleData[1].color" />

    </div>

    <div class="all-article">所有文章 <i class="fa-solid fa-chevron-right"></i></div>

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
        {
          img: require("@/assets/images/home/topic-article/topic-article-2.jpg"),
          date: new Date("2023-06-04"),
          title: "閱讀對幼兒的六大好處，爸媽必看!",
          author: "小布老師",
          mainCategory: "literacy",
          subCategory: "",
          content:
            "&emsp;&emsp;繪本在現代家庭中，已是爸爸媽媽養育小孩的必備聖品，不只在家庭，幼兒園也都持續在推行親子共讀的鼓勵措施，本次專欄邀請到了深耕幼教現場數十年的小布老師，分享自己對於幼兒閱讀的觀點與現場老師在幼兒閱讀上注重的關鍵能力，並提供許多幫助幼兒閱讀上的一些實用性技巧...",
          color: "green",
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
  background-color: #d8edfe;
  position: relative;
  background-image: url(../../../assets/decorations/home/topic-article-decoration.png);


  @include custom-responsive("xs") {
    padding: 5vh 0;
  }

  @include custom-responsive("sm md") {
    padding: 5vh 0;
  }

  @include custom-responsive("lg xl xxl") {
    padding: 10vh 0;
  }


  div.article-container {
    display: flex;

    align-items: center;

    @include custom-responsive("xs") {
      flex-direction: column;
    }

    @include custom-responsive("sm md") {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    @include custom-responsive("lg xl xxl") {
      justify-content: space-evenly;
      flex-direction: row;

    }

  }

  div.all-article {

    background-color: $primary-blue;
    color: $primary-white;
    cursor: pointer;
    text-align: center;


    @include custom-responsive("xs") {
      margin: 5vw auto 0;
      width: 45vw;
      height: 15vw;
      line-height: 15vw;
      font-size: 5vw;
      border-radius: 15vw;
    }

    @include custom-responsive("sm md") {
      margin: 5vw auto 0;
      width: 30vw;
      height: 10vw;
      line-height: 10vw;
      font-size: 4vw;
      border-radius: 10vw;
    }

    @include custom-responsive("lg xl xxl") {
      margin-left: auto;
      margin-right: 5vw;
      width: 15vw;
      height: 5vw;
      line-height: 5vw;
      font-size: 2vw;
      border-radius: 5vw;
    }




    &:hover {
      background-color: $secondary-blue;
    }

    &:active {
      background-color: $primary-blue;
      transform: translate(2px, 2px);
    }
  }
}

.pad-show {
  @include custom-responsive("xs") {
    display: none;
  }

  @include custom-responsive("sm md") {
    display: block;
  }

  @include custom-responsive("lg xl xxl") {
    display: none;
  }

}
</style>
