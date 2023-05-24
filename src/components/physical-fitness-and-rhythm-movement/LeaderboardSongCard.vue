<template>
  <div class="leaderboard-song-outer">

    <div class="leaderboard-song-wrap">

      <div class="rank">
        {{ rankNo }}
      </div>

      <div class="text">
        <h3>{{ name }}</h3>
        <h4>{{ singer }}</h4>
        <span>{{ time }}</span>
      </div>

      <a href="./still-building">
        <div class="go-to-btn"><i class="fa-solid fa-music"></i>
        </div>
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
  mounted() { },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.hot-songs-card-outer {

  div.hot-songs-card-wrap {

    width: 100px;
    height: 100px;

    div.text {

      h3 {}

      h4 {}

      span {}

    }

    a {
      div.go-to-btn {
        i {
          &::before {}
        }
      }
    }

  }
}
</style>
