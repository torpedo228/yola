<template>
  <div>
    <Hero />
    <Introduction />
  </div>
</template>

<script>
import Hero from "@/views/sections/home/Hero.vue";
import Introduction from "@/views/sections/home/Introduction.vue";

export default {
  components: { Hero, Introduction },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_HOME_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {}
</style>
