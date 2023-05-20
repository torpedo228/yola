<template>
  <div>
    <div class="func-items">
      <GoToTop />
    </div>
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/func-items/Footer.vue";
import GoToTop from "@/components/func-items/GoToTop.vue";
import Header from "@/components/func-items/Header.vue";
// import SideMenu from "@/components/func-items/SideMenu.vue";

export default {
  components: { GoToTop, Header, Footer },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";

body {
  font-family: $light;
  font-weight: $font-weight-light;
  box-sizing: border-box;
  margin: 0;
  padding: 0px;
  position: relative;

  h2 {
    font-weight: $font-weight-light;
    color: $primary-black;
    font-size: $h2;
  }

  h3 {
    font-weight: $font-weight-light;
  }

  a {
    text-decoration: none;
    bottom: 0;
  }

  ul,
  ol {
    list-style: none;
  }
}
</style>
