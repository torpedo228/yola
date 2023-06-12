<template>
  <div class="article-card-container">
    <img class="cover" :src="img" alt="" />
    <span class="date" :class="'date-' + color">{{ date.getFullDate() }}</span>
    <div class="article-wrap">
      <div class="text">
        <h4 v-html="title"></h4>
        <div class="sub-info">
          <span class="author">筆者:{{ author }}&ensp;</span>
          <span class="category">分類:
            <a v-if="mainCategory" @click="toPage(mainCategory)">{{
              getCategoryTitle(mainCategory)
            }}</a>&ensp;
            <a v-if="subCategory" @click="toPage(subCategory)">{{ getCategoryTitle(subCategory) }}</a>
          </span>
        </div>
        <p class="content" v-html="content"></p>
      </div>
      <div class="watch-more" :class="'watch-more-' + color">看完整文章</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: String,
    date: Date,
    title: String,
    author: String,
    mainCategory: String,
    subCategory: String,
    content: String,
    color: String,
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {

  },
  watch: {},
  methods: {
    toPage(categoryName) {
      var name = this.$store.state.categories.get(categoryName).routingName;
      this.$router.push({ name: name });
    },
    getCategoryTitle(categoryName) {
      return this.$store.state.categories.get(categoryName).title;

    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.article-card-container {
  background-color: $primary-white;

  position: relative;

  @include custom-responsive("xs") {
    width: 80vw;
    height: 65vh;
    margin: 3vh auto;
  }

  @include custom-responsive("sm md") {
    width: 40vw;
    height: 65vw;
    margin: 3vw 1vw;
  }

  @include custom-responsive("lg xl xxl") {
    width: 25vw;
    height: 40vw;
    margin:3vw 0;
  }


  img.cover {
    width: 100%;
    height: 40%;
  }

  span.date {
    text-align: center;
    display: block;
    position: absolute;
    color: $primary-white;


    @include custom-responsive("xs") {
      width: 30vw;
      height: 5vw;
      line-height: 5vw;
      font-size: 2vw;
      top: 3vw;
      right: 3vw;
    }

    @include custom-responsive("sm md") {
      width: 20vw;
      height: 3vw;
      line-height: 3vw;
      font-size: 2vw;
      top: 2vw;
      right: 2vw;
    }

    @include custom-responsive("lg xl xxl") {
      width: 9vw;
      height: 2vw;
      line-height: 2vw;
      font-size: 1vw;
      top: 1vw;
      right: 1vw;
    }


  }

  span.date-yellow {
    background-color: $primary-yellow;
  }

  span.date-green {
    background-color: $primary-green;
  }

  div.text {

    @include custom-responsive("xs") {
      padding: 2vw 5vw 0;
    }

    @include custom-responsive("sm md") {
      padding: 1vw 2vw 0;
    }

    @include custom-responsive("lg xl xxl") {
      padding: 1vw 2vw 0;
    }

    h4 {

      font-weight: bold;


      @include custom-responsive("xs") {
        font-size: $h2;
        margin: 0 0 3vw;
      }

      @include custom-responsive("sm md") {
        font-size: $h3;
        margin: 0 0 3vw;
      }

      @include custom-responsive("lg xl xxl") {
        font-size: $h4;
        margin: 0 0 1vw;
      }


    }

    div.sub-info {
      display: flex;
      justify-content: space-between;


      span {
        font-size: 1.2vw;

        a {
          font-size: 1.2vw;
          cursor: pointer;


          

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;

      @include custom-responsive("xs") {
        font-size: 4vw;
        margin: 1.25vh 0;
      }

      @include custom-responsive("sm md") {
        font-size: 2vw;
      }

      @include custom-responsive("lg xl xxl") {
        font-size: 1.25vw;
        margin: 1vw 0;
      }


    }
  }

  div.watch-more {
    margin: auto;
    cursor: pointer;
    text-align: center;
    color: $primary-white;

    @include custom-responsive("xs") {
      width: 30vw;
      height: 10vw;
      line-height: 10vw;
      font-size: 4vw;
      border-radius: 10vw;
    }

    @include custom-responsive("sm md") {
      width: 20vw;
      height: 5vw;
      line-height: 5vw;
      font-size: 2vw;
      border-radius: 5vw;
    }

    @include custom-responsive("lg xl xxl") {
      width: 12vw;
      height: 4vw;
      line-height:  4vw;
      font-size: 1.5vw;
      border-radius: 4vw;
    }


    &:active {
      transform: translate(2px, 2px);
    }
  }

  div.watch-more-yellow {
    background-color: $primary-yellow;

    &:hover {
      background-color: $secondary-yellow;
    }

    &:active {
      background-color: $primary-yellow;

    }
  }

  div.watch-more-green {
    background-color: $primary-green;

    &:hover {
      background-color: $secondary-green;
    }

    &:active {
      background-color: $primary-green;
    }
  }
}

div.article-wrap{
  position: absolute;
  bottom:5%;
}
</style>
