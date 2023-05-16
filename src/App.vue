<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";

body {
  font-family: "FakePearl-Regular", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 3000px;
  position: relative;

  a {
    text-decoration: none;
    bottom: 0;
  }

  ul {
    list-style: none;
  }
}
</style>
