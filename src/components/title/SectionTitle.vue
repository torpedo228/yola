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
  gap: 10px;

  img {
    width: 40px;
  }

  h2 {
    font-size: $h2;
    margin: 30px 0;
  }
}
</style>
