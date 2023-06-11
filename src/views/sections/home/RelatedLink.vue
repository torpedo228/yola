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
        :img="houseRed.img"
        :title="houseRed.title"
      />

      <RelatedLinkHouse 
        :color="houseYellow.color"
        :img="houseYellow.img"
        :title="houseYellow.title"
      />

      <RelatedLinkHouse
        :color="houseGreen.color"
        :img="houseGreen.img"
        :title="houseGreen.title"
      />

      <RelatedLinkHouse
        :color="houseBlue.color"
        :img="houseBlue.img"
        :title="houseBlue.title"
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
        img: require("@/assets/images/home/related-link/top-red.svg"),
        title: "幼教寶典",
      },
      houseYellow: {
        color: "yellow",
        img: require("@/assets/images/home/related-link/top-yellow.svg"),
        title: "重點資訊",
      },
      houseGreen: {
        color: "green",
        img: require("@/assets/images/home/related-link/top-green.svg"),
        title: "各縣市<br />幼教資源網",
      },
      houseBlue: {
        color: "blue",
        img: require("@/assets/images/home/related-link/top-blue.svg"),
        title: "合作網站",
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
