<template>
  <div class="related-link-container" id="related-link">
    <SubSectionTitle
      title="相關連結 Related Link"
      :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
      alt="相關連結icon"
    />

    <div class="related-link-wrap">
      <RelatedLinkHouse
        :color="houseRed.color"
        :title="houseRed.title"
        :link-info-list="houseRed.linkInfoList"
      />

      <RelatedLinkHouse
        :color="houseYellow.color"
        :title="houseYellow.title"
        :link-info-list="houseYellow.linkInfoList"
      />

      <RelatedLinkHouse
        :color="houseGreen.color"
        :title="houseGreen.title"
         :link-info-list="houseGreen.linkInfoList"
      />

      <RelatedLinkHouse
        :color="houseBlue.color"
        :title="houseBlue.title"
         :link-info-list="houseBlue.linkInfoList"
      />
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/title/SubSectionTitle.vue";
import RelatedLinkHouse from "@/components/home/RelatedLinkHouse.vue";

export default {
  components: { SubSectionTitle, RelatedLinkHouse },
  data() {
    return {
      houseRed: {
        color: "red",
        title: "幼教寶典",
        linkInfoList: [
          {
            title: "全國教保資訊網",
            url: "https://www.ece.moe.edu.tw/ch/",
            color: "red",
            subLinkInfoList: [],
          },
          {
            title: "幼兒教育及照顧法",
            url: "https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070031",
            color: "red",
            subLinkInfoList: [],
          },
          {
            title: "幼兒園課綱、相關手冊與實例下載",
            url: "https://www.ece.moe.edu.tw/ch/filelist/preschool/filelist-preschool/",
            color: "red",
            subLinkInfoList: [],
          },
        ],
      },
      houseYellow: {
        color: "yellow",
        title: "重點資訊",
        linkInfoList: [
          {
            title: "幼兒園查詢",
            url: "",
            color: "yellow",
            subLinkInfoList: [],
          },
          {
            title: "補助與津貼",
            url: "",
            color: "yellow",
            subLinkInfoList: [],
          },
          {
            title: "公共化教保服務",
            url: "",
            color: "yellow",
            subLinkInfoList: [],
          },
        ],
      },
      houseGreen: {
        color: "green",
        title: "各縣市<br />幼教資源網",
        linkInfoList: [
          {
            title: "北部",
            url: "",
            color: "green",
            subLinkInfoList: [
            {
                title: "台北市",
                url: "",
                color: "green",
              },
            {
                title: "新北市",
                url: "",
                color: "green",
              },
       
              {
                title: "基隆市",
                url: "",
                color: "green",
              },
              {
                title: "桃園市",
                url: "",
                color: "green",
              },
              {
                title: "新竹市",
                url: "",
                color: "green",
              },
              {
                title: "新竹縣",
                url: "",
                color: "green",
              },
              {
                title: "宜蘭縣",
                url: "",
                color: "green",
              },

            ],
          },
          {
            title: "中部",
            url: "",
            color: "green",
            subLinkInfoList: [
            {
                title: "苗栗縣",
                url: "",
                color: "green",
              },
              {
                title: "台中市",
                url: "",
                color: "green",
              },
              {
                title: "彰化縣",
                url: "",
                color: "green",
              },
              {
                title: "南投縣",
                url: "",
                color: "green",
              },
              {
                title: "雲林縣",
                url: "",
                color: "green",
              },

            ],
          },
          {
            title: "南部",
            url: "",
            color: "green",
            subLinkInfoList: [
            {
                title: "嘉義市",
                url: "",
                color: "green",
              },
              {
                title: "嘉義縣",
                url: "",
                color: "green",
              },

              {
                title: "台南市",
                url: "",
                color: "green",
              },
              {
                title: "高雄市",
                url: "",
                color: "green",
              },
              {
                title: "屏東縣",
                url: "",
                color: "green",
              },
              {
                title: "澎湖縣",
                url: "",
                color: "green",
              },

            ],
          },
          {
            title: "東部&離島",
            url: "",
            color: "green",
            subLinkInfoList: [
            {
                title: "花蓮縣",
                url: "",
                color: "green",
              },
              {
                title: "台東縣",
                url: "",
                color: "green",
              },
              {
                title: "金門縣",
                url: "",
                color: "green",
              },
              {
                title: "連江縣",
                url: "",
                color: "green",
              },

            ],
          },
        ],
      },
      houseBlue: {
        color: "blue",
        title: "合作網站",
        linkInfoList: [
          {
            title: "幼兒闖天下",
            url: "",
            color: "blue",
            subLinkInfoList: [],
          },
          {
            title: "樂學成長營",
            url: "",
            color: "blue",
            subLinkInfoList: [],
          },
          {
            title: "童言童語",
            url: "",
            color: "blue",
            subLinkInfoList: [],
          },
          {
            title: "數星星繪本網",
            url: "",
            color: "blue",
            subLinkInfoList: [],
          },
        ],
      },
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.related-link-container {
  width: 100%;
  position: relative;

  @include custom-responsive("xs") {
    padding: 5vh 0;
  }

  @include custom-responsive("sm md") {
    padding: 5vh 0;
  }

  @include custom-responsive("lg xl xxl") {
    padding: 10vh 0;
  }

  div.related-link-wrap {
    margin-top: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @include custom-responsive("xs") {
      flex-direction: column;
    }

    @include custom-responsive("sm md") {
      flex-direction: row;
      flex-wrap: wrap;
    }

    @include custom-responsive("lg xl xxl") {
      flex-direction: row;
    }

    div.related-link {
      position: relative;
      width: 280px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;

      h4 {
        position: absolute;
        color: $primary-white;
        width: 150px;
        margin: 0;
        padding-bottom: 180px;
      }

      ul {
        position: absolute;
        width: 280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(35%);
        padding: 0;
        margin: 0;

        li {
          font-size: 18px;
          width: 160px;
          margin-bottom: 20px;

          a {
            &:link {
              color: $primary-black;
            }

            &:visited {
              color: $primary-black;
            }
          }
        }
      }
    }

    img {
      position: absolute;
      z-index: -1;
    }

    div.related-link-red {
      ul {
        li {
          border-bottom: 5px dotted $primary-red;

          a {
            &:hover {
              color: $primary-red;
            }
          }
        }
      }
    }

    div.related-link-yellow {
      ul {
        li {
          border-bottom: 5px dotted $primary-yellow;

          a {
            &:hover {
              color: $primary-yellow;
            }
          }
        }
      }
    }

    div.related-link-green {
      ul {
        li {
          border-bottom: 5px dotted $primary-green;

          a {
            &:hover {
              color: $primary-green;
            }
          }
        }
      }
    }

    div.related-link-blue {
      ul {
        li {
          border-bottom: 5px dotted $primary-blue;

          a {
            &:hover {
              color: $primary-blue;
            }
          }
        }
      }
    }
  }
}
</style>
