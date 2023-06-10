<template>
  <div class="article-card-container">
    <img class="cover" :src="img" alt="" />
    <span class="date" :class="'date-' + color">{{ date.getFullDate() }}</span>
    <div class="text">
      <h4 v-html="title"></h4>
      <div class="sub-info">
        <span class="author">筆者:{{ author }}&ensp;</span>
        <span class="category">分類:
          <a @click="toPage(mainCategory)">{{
            getCategoryTitle(mainCategory)
          }}</a>&ensp;
          <a @click="toPage(subCategory)">{{ getCategoryTitle(subCategory) }}</a>
        </span>
      </div>
      <p class="content" v-html="content"></p>
    </div>
    <div class="watch-more" :class="'watch-more-' + color">看完整文章</div>
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
  width: 30vw;
  height: 40vw;
  margin: 3vw 8vw;
  position: relative;

  @include custom-responsive("xs sm md") {}
@include custom-responsive("lg xl xxl") {}  


  img.cover {
    width: 100%;
    height: 40%;
  }

  span.date {
    font-size: 1vw;
    text-align: center;
    line-height: 2vw;
    display: block;
    width: 9vw;
    height: 2vw;
    position: absolute;
    top: 1vw;
    right: 1vw;
    color: $primary-white;
  }

  span.date-yellow {
    background-color: $primary-yellow;
  }

  span.date-green {
    background-color: $primary-green;
  }

  div.text {
    padding: 1vw 2vw 0;

    h4 {
      margin: 0 0 1vw;
      font-size: $h4;
    }

    div.sub-info {
      display: flex;
      justify-content: space-between;


      span {
        font-size: 1.2vw;

        a {
          font-size:  1.2vw;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    p {
      font-size: 1.25vw;
    }
  }

  div.watch-more {
    margin: auto;
    cursor: pointer;
    width: 12vw;
    height: 3vw;
    line-height: 3vw;
    text-align: center;
    font-size: 1.5vw;
    border-radius: 2vw;
    color: $primary-white;

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
</style>
