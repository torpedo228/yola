<template>
  <div class="related-link-house-container">
    <div class="related-link" :class="'related-link-' + color">
      <div class="title-wrap">
        <img :src="img" alt="" />
        <h4 v-html="title"></h4>
      </div>

      <div class="related-link-drop-down-list-wrap" :class="'related-link-drop-down-list-wrap-' + color">
        <RelatedLinkDropDownList :main="mainTitle1.main" :sub-list="mainTitle1.subList" />
        <RelatedLinkDropDownList :main="mainTitle2.main" :sub-list="mainTitle2.subList" />
        <RelatedLinkDropDownList :main="mainTitle3.main" :sub-list="mainTitle3.subList" />
      </div>
    </div>
  </div>
</template>

<script>
import RelatedLinkDropDownList from "@/components/home/RelatedLinkDropDownList.vue";

export default {
  props: {
    color: String,
    img: String,
    title: String,
  },
  components: { RelatedLinkDropDownList },
  data() {
    return {
      mainTitle1: {
        main: {
          title: "全國教保資訊網",
          mainUrl: "https://www.ece.moe.edu.tw/ch/",
          color: "red",
        },
        subList: [],
      },
      mainTitle2: {
        main: {
          title: "幼兒教育及照顧法",
          mainUrl: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070031",
          color: "red",
        },
        subList: [],
      },
      mainTitle3: {
        main: {
          title: "幼兒園課綱、相關手冊與實例下載",
          mainUrl:
            "https://www.ece.moe.edu.tw/ch/filelist/preschool/filelist-preschool/",
          color: "red",
        },
        subList: [],
      },
    };
  },
  computed: {},
  mounted() { },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.related-link-house-container {
  @include vm();

  div.title-wrap {
    position: relative;


    @include custom-responsive("xs") {
      top: 6vw;
    }

    @include custom-responsive("sm md") {
      top: 4vw;
    }

    @include custom-responsive("lg xl xxl") {
      top: 2vw;
    }


    img {

      @include custom-responsive("xs") {
        width: 80vw;
      }


      @include custom-responsive("sm md") {
        width: 42vw;
      }

      @include custom-responsive("lg xl xxl") {
        width: 20vw;
      }

    }

    h4 {
      margin: 0;
      color: $primary-white;
      position: absolute;
      transform: translateX(-50%);
      top: 50%;
      left: 50%;

      @include custom-responsive("xs") {
        font-size: 8vw;
      }

      @include custom-responsive("sm md") {
        font-size: 2vw;
      }

      @include custom-responsive("lg xl xxl") {
        font-size: 2vw;
      }
    }
  }

  div.related-link-drop-down-list-wrap {
    box-sizing: border-box;

    margin: auto;
    background-color: $primary-white;
    border: 0.5vmax solid;
    border-radius: 2vmax;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @include custom-responsive("xs") {
      padding: 2vw;
      font-size: 4vw;
      width: 65vw;
      height: 65vw;
    }

    @include custom-responsive("sm md") {
      padding: 2vw;
      font-size: 4vw;
      width: 35vw;
      height: 45vw;
    }

    @include custom-responsive("lg xl xxl") {
      padding: 1.5vw;
      font-size: 1.25vw;
      width: 15vw;
      height: 18vw;
    }



  }

  div.related-link-drop-down-list-wrap-red {
    border-color: $primary-red;
  }

  div.related-link-drop-down-list-wrap-yellow {
    border-color: $primary-yellow;
  }

  div.related-link-drop-down-list-wrap-green {
    border-color: $primary-green;
  }

  div.related-link-drop-down-list-wrap-blue {
    border-color: $primary-blue;
  }
}
</style>
