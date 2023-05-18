<template>
  <Slide>
    <a id="home" href="#">
      <span>Home</span>
    </a>
  </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`


export default {
  props: {},
  components: { Slide },
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
</style>
