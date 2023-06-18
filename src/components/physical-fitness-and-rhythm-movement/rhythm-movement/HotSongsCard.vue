<template>
  <div class="hot-songs-card-outer">
    <div
      class="hot-songs-card-wrap"
      :class="'hot-songs-card-wrap-' + color"
      v-if="!isFinal"
    >
      <div class="text">
        <h3>{{ name }}</h3>
        <h4>{{ singer }}</h4>
        <span>{{ time }}</span>
      </div>

      <a href="./still-building">
        <div class="go-to-btn"><i class="fa-solid fa-music"></i></div>
      </a>
    </div>

    <a href="" class="watch-all" v-else> 看全部 </a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    singer: String,
    time: String,
    color: String,
    isFinal: Boolean,
  },
  components: {},
  data() {
    return {};
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

div.hot-songs-card-outer {
  @include unit-block(200px, 200px);

  div.hot-songs-card-wrap {
    width: 150px;
    height: 150px;
    border: 10px solid;
    border-radius: 20px;

    div.text {
      text-align: center;

      h3 {
        margin: 20px 0 0;
      }

      h4 {
        display: inline-block;
        margin: 10px 15px 0 0;
        font-size: $content;
      }

      span {
        font-size: 12px;
      }
    }

    a {
      &:hover {
        div.go-to-btn {
          i {
            color: $primary-white;
          }
        }
      }

      &:active {
        opacity: 0.7;
      }
    }

    div.go-to-btn {
      position: relative;
      bottom: -10%;
      margin: auto;
      width: 80px;
      height: 30px;
      border: 3px solid;
      border-radius: 20px;
      line-height: 32px;
      text-align: center;

      i {
        font-size: $sub-info;
      }
    }
  }

  div.hot-songs-card-wrap-red {
    border-color: $primary-red;

    a {
      &:hover {
        background-color: $primary-red;

        div.go-to-btn {
          background-color: $primary-red;
        }
      }

      div.go-to-btn {
        border-color: $primary-red;

        i {
          color: $primary-red;
        }
      }
    }
  }

  div.hot-songs-card-wrap-green {
    border-color: $primary-green;

    a {
      &:hover {
        background-color: $primary-green;

        div.go-to-btn {
          background-color: $primary-green;
        }
      }

      div.go-to-btn {
        border-color: $primary-green;

        i {
          color: $primary-green;
        }
      }
    }
  }

  div.hot-songs-card-wrap-yellow {
    border-color: $primary-yellow;

    a {
      &:hover {
        background-color: $primary-yellow;

        div.go-to-btn {
          background-color: $primary-yellow;
        }
      }

      div.go-to-btn {
        border-color: $primary-yellow;

        i {
          color: $primary-yellow;
        }
      }
    }
  }

  div.hot-songs-card-wrap-blue {
    border-color: $primary-blue;

    a {
      &:hover {
        background-color: $primary-blue;

        div.go-to-btn {
          background-color: $primary-blue;
        }
      }

      div.go-to-btn {
        border-color: $primary-blue;

        i {
          color: $primary-blue;
        }
      }
    }
  }

  a.watch-all {
    display: block;
    width: 170px;
    height: 170px;
    line-height: 170px;
    background-color: $primary-green;
    color: $primary-white;
    text-align: center;
    border-radius: 20px;
    font-size: $h4;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
