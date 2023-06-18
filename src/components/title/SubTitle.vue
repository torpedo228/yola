<template>
  <div class="title">
    <img :src="imgSrc" :alt="alt" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgSrc: String,
    alt: String,
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

div.title {
  color: $primary-black;
  display: flex;
  justify-content: center;
  gap: 1vw;

  img {


    @include custom-responsive("xs") {
      width: $h1;
    }

    @include custom-responsive("sm md lg") {
      width: 2.5vmax;
    }

    @include custom-responsive("xl xxl") {
      width: 2.5vmax;
    }

  }

  h3 {
    margin: 0.5vmin 0;

    @include custom-responsive("xs") {
      font-size: $h1;
    }

    @include custom-responsive("sm md lg") {
      font-size: $h2;
    }

    @include custom-responsive("xl xxl") {
      font-size: $h3;
    }

  }
}
</style>
