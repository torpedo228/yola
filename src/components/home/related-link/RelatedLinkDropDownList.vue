<template>
  <div class="related-link-drop-down-list-container">
    <a v-if="url" :href="url" class="main-title" :class="'main-title-' + color">
      {{ title }}
      <i v-if="hasSubList" class="fa-solid fa-angle-down"></i>
    </a>

    <span v-else class="main-title" :class="'main-title-' + color">
      {{ title }} <i v-if="hasSubList" class="fa-solid fa-angle-down"></i></span>

    <ul class="drop-down-list" v-if="hasSubList">
      <li v-for="(subLinkInfo, subLinkInfoNo) in subLinkInfoList" :key="subLinkInfoNo" class="drop-down-list-item"
        :class="'drop-down-list-item-' + subLinkInfo.color">
        <a :href="subLinkInfo.url"> {{ subLinkInfo.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    color: String,
    url: String,
    subLinkInfoList: Object, // ex. [{title:"",url:"",color:""}]
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    hasSubList() {
      return this.subLinkInfoList && this.subLinkInfoList.length > 0;
    },
  },
  mounted() {
  },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.related-link-drop-down-list-container {
  position: relative;

  &:hover {

    a.main-title-red,
    span.main-title-red {
      color: $primary-red;
    }

    a.main-title-yellow,
    span.main-title-yellow {
      color: $primary-yellow;
    }

    a.main-title-green,
    span.main-title-green {
      color: $primary-green;
    }

    a.main-title-blue,
    span.main-title-blue {
      color: $primary-blue;
    }

    ul.drop-down-list {
      display: block;
    }
  }

  a.main-title,
  span.main-title {
    cursor: pointer;
    display: block;
    text-align: center;

    @include custom-responsive("xs") {
      width: 50vw;
      font-size: 6vw;
      border-bottom: 2vw dotted;
    }

    @include custom-responsive("sm md") {
      width: 25vw;
      font-size: 3vw;
      border-bottom: 1vw dotted;
    }


    @include custom-responsive("lg xl xxl") {
      width: 11vw;
      font-size: 1.25vw;
      border-bottom: 0.4vw dotted;
    }
  }

  a.main-title-red,
  span.main-title-red {
    border-bottom-color: $primary-red;
  }

  a.main-title-yellow,
  span.main-title-yellow {
    border-bottom-color: $primary-yellow;
  }

  a.main-title-green,
  span.main-title-green {
    border-bottom-color: $primary-green;
  }

  a.main-title-blue,
  span.main-title-blue {
    border-bottom-color: $primary-blue;
  }

  ul.drop-down-list {
    z-index: 999;
    display: none;
    position: absolute;
    padding: 2vh 0;
    background-color: $primary-white;
    border-radius: 2vw;
    box-shadow: 2px 2px 2px $primary-grey;
    transform: translate(-50%, -3vh);
    left: 50%;
    overflow-x: hidden;

    @include custom-responsive("xs") {
      width: 50vw;
      height: 20vh;
      border-radius: 4vw;
    }

    @include custom-responsive("sm md") {
      width: 30vw;
      height: 10vh;
      border-radius: 2vw;
    }
    @include custom-responsive("lg") {
      width: 13vw;
      height: 15vh;
    }

    @include custom-responsive("xl xxl") {
      width: 13vw;
      height: 20vh;
      border-radius: 2vw;
    }



    li.drop-down-list-item {
      cursor: pointer;
      display: block;
      width: 100%;
      text-align: center;

      padding: 2vh 0;

      @include custom-responsive("xs") {
        font-size: 5vw;
        height: 2vh;
        line-height: 2vh;
      }

      @include custom-responsive("sm md") {
        font-size: 3vw;
        height: 2vh;
        line-height: 2vh;
      }

      @include custom-responsive("lg") {
        font-size: 1.5vw;
        height: 2vh;
        line-height: 2vh;
      }

      @include custom-responsive("xl xxl") {
        font-size: 1.5vw;
        height: 2.5vh;
        line-height: 2.5vh;
      }

      &:hover {
        a {
          color: $primary-white;
        }
      }
    }

    li.drop-down-list-item-red {
      &:hover {
        background-color: $primary-red;
      }
    }

    li.drop-down-list-item-yellow {
      &:hover {
        background-color: $primary-yellow;
      }
    }

    li.drop-down-list-item-green {
      &:hover {
        background-color: $primary-green;
      }
    }

    li.drop-down-list-item-blue {
      &:hover {
        background-color: $primary-blue;
      }
    }
  }
}
</style>
