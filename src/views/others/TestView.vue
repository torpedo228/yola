<template>
  <div>
    <button @click="$router.push({ name: 'home' })">
      This is a test button
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
    this.$store.commit("SET_TEST_PAGE");
  },
};
</script>

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
