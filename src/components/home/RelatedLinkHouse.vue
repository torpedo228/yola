<template>
  <div class="related-link-house-container">
    <div class="related-link" :class="'related-link-' + color">
      <div class="title-wrap">
        <img :src="img" alt="" />
        <h4 v-html="title"></h4>
      </div>

      <div
        class="related-link-drop-down-list-wrap"
        :class="'related-link-drop-down-list-wrap-' + color"
      >
        <RelatedLinkDropDownList v-if="isHouseRed"
          :main="houseRed[0].mainTitle1.main"
          :sub-list="houseRed[0].mainTitle1.subList"
        />
        <RelatedLinkDropDownList v-if="isHouseRed"
          :main="houseRed[1].mainTitle2.main"
          :sub-list="houseRed[1].mainTitle2.subList"
        />
        <RelatedLinkDropDownList v-if="isHouseRed"
          :main="houseRed[2].mainTitle3.main"
          :sub-list="houseRed[2].mainTitle3.subList"
        />

        <RelatedLinkDropDownList v-if="isHouseYellow"
          :main="houseYellow[0].mainTitle1.main"
          :sub-list="houseYellow[0].mainTitle1.subList"
        />


      </div>

      <!-- <div
        v-if="isHouseYellow"
        class="related-link-drop-down-list-wrap"
        :class="'related-link-drop-down-list-wrap-' + color"
      >
        <RelatedLinkDropDownList
          :main="houseYellow[0].mainTitle1.main"
          :sub-list="houseYellow[0].mainTitle1.subList"
        />
        <RelatedLinkDropDownList
          :main="houseYellow[1].mainTitle2.main"
          :sub-list="houseYellow[1].mainTitle2.subList"
        />
        <RelatedLinkDropDownList
          :main="houseYellow[2].mainTitle3.main"
          :sub-list="houseYellow[2].mainTitle3.subList"
        />
      </div> -->
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
      houseRed: [
        {
          mainTitle1: {
            main: {
              title: "全國教保資訊網",
              mainUrl: "https://www.ece.moe.edu.tw/ch/",
              color: "red",
            },
            subList: [],
          },
        },
        {
          mainTitle2: {
            main: {
              title: "幼兒教育及照顧法",
              mainUrl:
                "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070031",
              color: "red",
            },
            subList: [],
          },
        },
        {
          mainTitle3: {
            main: {
              title: "幼兒園課綱、相關手冊與實例下載",
              mainUrl:
                "https://www.ece.moe.edu.tw/ch/filelist/preschool/filelist-preschool/",
              color: "red",
            },
            subList: [],
          },
        },
      ],

      houseYellow: [
        {
          mainTitle1: {
            main: {
              title: "幼兒園查詢",
              mainUrl: "",
              color: "yellow",
            },
            subList: [],
          },
        },
        {
          mainTitle2: {
            main: {
              title: "補助與津貼",
              mainUrl: "",
              color: "yellow",
            },
            subList: [],
          },
        },
        {
          mainTitle3: {
            main: {
              title: "公共化教保服務",
              mainUrl: "",
              color: "yellow",
            },
            subList: [],
          },
        },
      ],

      houseGreen: [
        {
          mainTitle1: {
            main: {
              title: "北部",
              mainUrl: "",
              color: "green",
            },
            subList: [
              {
                title: "新北市",
                subUrl: "",
                color: "green",
              },
              {
                title: "台北市",
                subUrl: "",
                color: "sec-green",
              },
              { title: "桃園市", subUrl: "", color: "green" },
            ],
          },
        },
        {
          mainTitle2: {
            main: {
              title: "中部",
              mainUrl: "",
              color: "green",
            },
            subList: [
              {
                title: "苗栗縣",
                subUrl: "",
                color: "green",
              },
              {
                title: "台中市",
                subUrl: "",
                color: "sec-green",
              },
              { title: "嘉義市", subUrl: "", color: "green" },
            ],
          },
        },
        {
          mainTitle3: {
            main: {
              title: "南部",
              mainUrl: "",
              color: "green",
            },
            subList: [
              {
                title: "台南市",
                subUrl: "",
                color: "green",
              },
              {
                title: "高雄市",
                subUrl: "",
                color: "sec-green",
              },
              { title: "屏東縣", subUrl: "", color: "green" },
            ],
          },
        },
        {
          mainTitle3: {
            main: {
              title: "東部&離島",
              mainUrl: "",
              color: "green",
            },
            subList: [
              {
                title: "花蓮縣",
                subUrl: "",
                color: "green",
              },
              {
                title: "台東縣",
                subUrl: "",
                color: "sec-green",
              },
              { title: "澎湖縣", subUrl: "", color: "green" },
            ],
          },
        },
      ],

      houseBlue: [
        {
          mainTitle1: {
            main: {
              title: "幼兒闖天下",
              mainUrl: "",
              color: "blue",
            },
            subList: [],
          },
        },
        {
          mainTitle2: {
            main: {
              title: "樂學成長營",
              mainUrl: "",
              color: "blue",
            },
            subList: [],
          },
        },
        {
          mainTitle3: {
            main: {
              title: "童言童語",
              mainUrl: "",
              color: "blue",
            },
            subList: [],
          },
          mainTitle4: {
            main: {
              title: "數星星繪本網",
              mainUrl: "",
              color: "blue",
            },
            subList: [],
          },
        },
      ],
    };
  },
  computed: {
    isHouseRed() {
      return this.houseRed;
    },

    isHouseYellow() {
      return this.houseYellow;
    },

    isHouseGreen() {
      return this.houseGreen;
    },

    isHouseBlue() {
      return this.houseBlue;
    },
  },
  mounted() {},
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
      transform: translate(-50%, -50%);
      top: 60%;
      left: 50%;
      text-align: center;

      @include custom-responsive("xs") {
        font-size: 8vw;
      }

      @include custom-responsive("sm md") {
        font-size: 4vw;
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
      border: 1vmax solid;
    }

    @include custom-responsive("sm md") {
      padding: 2vw;
      font-size: 5vw;
      width: 35vw;
      height: 45vw;
      border: 0.5vmax solid;
    }

    @include custom-responsive("lg xl xxl") {
      padding: 1.5vw;
      font-size: 1.25vw;
      width: 15vw;
      height: 18vw;
      border: 0.5vmax solid;
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
