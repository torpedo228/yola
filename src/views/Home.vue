<template>
  <div>
    <button @click="$router.push({ name: 'learning-corner' })">
      前往學習區
    </button>
  </div>
</template>

<script>
export default {
  components: {},
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

div {
  button {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 20%;
    right: 10%;
  }
}
</style>
