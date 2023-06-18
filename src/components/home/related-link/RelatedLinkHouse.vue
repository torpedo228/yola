<template>
  <div class="related-link-house-container">
    <div class="related-link" :class="'related-link-' + color">
      <div class="title-wrap">
        <img :src="imgSrcMap[color]" alt="" />
        <h4 v-html="title"></h4>
      </div>

      <div
        class="related-link-drop-down-list-wrap"
        :class="'related-link-drop-down-list-wrap-' + color"
      >
        <RelatedLinkDropDownList
          v-for="(linkInfo, linkInfoNo) in linkInfoList"
          :key="linkInfoNo"
          :title="linkInfo.title"
          :color="linkInfo.color"
          :url="linkInfo.url"
          :sub-link-info-list="linkInfo.subLinkInfoList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RelatedLinkDropDownList from "@/components/home/related-link/RelatedLinkDropDownList.vue";

export default {
  props: {
    color: String,
    title: String,
    linkInfoList: Object,
  },
  components: { RelatedLinkDropDownList },
  data() {
    return {
      // imgSrcMap: new Map([
      //   ["red", require("@/assets/images/home/related-link/top-red.svg")],
      //   ["yellow", require("@/assets/images/home/related-link/top-yellow.svg")],
      //   ["green", require("@/assets/images/home/related-link/top-green.svg")],
      //   ["blue", require("@/assets/images/home/related-link/top-blue.svg")],
      // ]),

      imgSrcMap: {
        red: require("@/assets/images/home/related-link/top-red.svg"),
        yellow: require("@/assets/images/home/related-link/top-yellow.svg"),
        green: require("@/assets/images/home/related-link/top-green.svg"),
        blue: require("@/assets/images/home/related-link/top-blue.svg"),
      },

    };
  },
  computed: {},
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
      height: 70vw;
      border: 1vmax solid;
      border-radius: 3vmax;
    }

    @include custom-responsive("sm md") {
      padding: 2vw;
      font-size: 5vw;
      width: 35vw;
      height: 45vw;
      border: 0.5vmax solid;
      border-radius: 3vmax;
    }

    @include custom-responsive("lg xl xxl") {
      padding: 1.5vw;
      font-size: 1.25vw;
      width: 15vw;
      height: 18vw;
      border: 0.5vmax solid;
      border-radius: 2vmax;
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
