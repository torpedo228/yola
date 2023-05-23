<template>
  <div class="card-outter">
    <div class="card-wrapper">
      <div class="pic" :class="'pic-' + color">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="text">
        <h4>{{ name }}</h4>
        <p>{{ authors }}</p>
      </div>
      <a href="">
        <div class="watch-books-btn" :class="'watch-books-btn-' + color">
          點我看書
        </div>
      </a>
    </div>
  </div>
</template>

../../assets/images/storybooks/new-arrival/new-arrival-1.jpg

<script>
export default {
  props: {
    imgSrc: String,
    name: String,
    authors: String,
    color: String,
  },
  components: {},
  data() {
    return {};
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

div.card-outter {
  @include unit-block(200px, 350px);

  div.card-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.pic {
      width: 150px;
      height: 200px;
      border: 10px solid;
      border-radius: 20px;
      @include vm();

      img {
        width: 90%;
      }
    }

    div.pic-red {
      border-color: $primary-red;
    }

    div.pic-yellow {
      border-color: $primary-yellow;
    }

    div.pic-blue {
      border-color: $primary-blue;
    }

    div.text {
      @include vm();
      text-align: center;

      h4 {
        margin: 5px;
        font-size: $sub-info;
      }

      p {
        font-size: $content;
        margin: 0 0 5px;
      }
    }

    a {
      div.watch-books-btn {
        width: 150px;
        height: 40px;
        background-color: $primary-red;
        border-radius: 20px;
        text-align: center;
        line-height: 40px;
        color: $primary-white;
      }

      div.watch-books-btn-red {
        background-color: $primary-red;
      }

      div.watch-books-btn-yellow {
        background-color: $primary-yellow;
      }

      div.watch-books-btn-blue {
        background-color: $primary-blue;
      }

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
