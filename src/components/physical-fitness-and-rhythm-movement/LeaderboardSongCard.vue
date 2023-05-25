<template>
  <div class="leaderboard-song-card-outer">
    <div
      class="leaderboard-song-wrap"
      :class="'leaderboard-song-wrap-' + color"
    >
      <div class="rank">
        {{ rankNo }}
      </div>

      <div class="text">
        <h3>{{ name }}</h3>
        <h4>{{ singer }}</h4>
        <span>{{ time }}</span>
      </div>

      <a href="./still-building">
        <div class="go-to-btn"><i class="fa-solid fa-music"></i></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rankNo: String,
    name: String,
    singer: String,
    time: String,
    color: String,
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

div.leaderboard-song-card-outer {
  @include unit-block(250px, 300px);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  div.leaderboard-song-wrap {
    width: 200px;
    height: 250px;
    background-color: $primary-green;
    border-radius: 20px;
    position: relative;
    @include vm();

    div.rank {
      width: 80px;
      height: 80px;
      border-radius: $border-radius-circle;
      border: 25px solid;
      text-align: center;
      line-height: 80px;
      background-color: $primary-white;
      font-size: 60px;
      font-weight: bold;
      position: relative;

      top: -30%;
    }

    div.text {
      text-align: center;
      position: relative;
      bottom: 35%;

      h3 {
        color: $primary-white;

        margin: 20px 0 0;
      }

      h4 {
        color: $primary-white;

        display: inline-block;
        margin: 10px 15px 0 0;
        font-size: $content;
      }

      span {
        color: $primary-white;

        font-size: 12px;
      }
    }

    a {
      position: absolute;
      bottom: 5%;

      &:hover {
        opacity: 0.7;
      }

      &:active {
        opacity: 0.7;
      }

      div.go-to-btn {
        background-color: $primary-white;
        margin: auto;
        width: 100px;
        height: 50px;
        border: 3px solid $primary-white;
        border-radius: 30px;

        text-align: center;

        i {
          color: $primary-green;
          font-size: $h3;
          line-height: 50px;
        }
      }
    }
  }

  div.leaderboard-song-wrap-yellow {
    width: 240px;
    height: 300px;

    div.text {
      h3 {
        font-size: $h2;
      }

      h4 {
        font-size: $h4;
      }

      span {
        font-size: $content;
      }
    }

    div.rank {
      border-color: $primary-yellow;
      color: $primary-yellow;
      width: 100px;
      height: 100px;
      font-size: 80px;
      line-height: 100px;
    }
  }

  div.leaderboard-song-wrap-red {
    div.rank {
      border-color: $primary-red;
      color: $primary-red;
    }
  }

  div.leaderboard-song-wrap-blue {
    div.rank {
      border-color: $primary-blue;
      color: $primary-blue;
    }
  }
}
</style>
