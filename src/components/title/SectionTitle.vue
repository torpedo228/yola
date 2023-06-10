<template>
  <div class="title">
    <img :src="imgSrc" :alt="alt" />
    <h2>{{ title }}</h2>
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
    width: 3vmax;
  }

  h2 {

    margin: 0;

    @include custom-responsive("xs") {
      font-size: $h1;
    }

    @include custom-responsive("sm md lg") {
      font-size: $h2;
    }

    @include custom-responsive("xl xxl") {
      font-size: $h2;
    }

  }
}
</style>
