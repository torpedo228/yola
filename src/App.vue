<template>
  <div>
    <div class="func-items">
      <GoToTop />
    </div>
    <Header />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import GoToTop from "./components/GoToTop.vue";
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";

export default {
  components: { GoToTop, Header, MainContent, Footer },
  data() {
    return {};
  },
  mounted() { },
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
