<template>
  <div>
    <div class="func-items">
      <GoToTop />
      <LoginPrompt />
      <Overlay />
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
import Header from "@/components/func-items/layout/Header.vue";
import GoToTop from "@/components/func-items/layout/GoToTop.vue";
import Footer from "@/components/func-items/layout/Footer.vue";
import LoginPrompt from "@/components/func-items/independent/LoginPrompt.vue";
import Overlay from "@/components/func-items/independent/Overlay.vue";
// import SideMenu from "@/components/func-items/SideMenu.vue";

export default {
  components: { Header, GoToTop, Footer, Overlay, LoginPrompt },
  data() {
    return {};
  },
  mounted() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const vh = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    );

    var deviceScopeMsg =
      "vw: " +
      vw +
      "\n" +
      "vh: " +
      vh +
      "\n" +
      "innerWidth: " +
      innerWidth +
      "\n" +
      "innerHeight: " +
      innerHeight;

    console.log(deviceScopeMsg);
    // window.alert(deviceScopeMsg);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/all.scss";
@import "../node_modules/rfs/scss.scss";


html {
  width: 100%;
  font-size: 16px;
  overflow-x: hidden;

  body {
    width: 100%;
    font-family: $font-family-light;
    font-weight: $font-weight-light;
    margin: 0;
    padding: 0;
    background: url("./assets/decorations/main/background.svg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;


    img {
      user-drag: none;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
    }

    h2 {
      @include font-size(4rem);
      font-weight: $font-weight-light;
      color: $primary-black;
    }

    h3 {
      font-weight: $font-weight-light;
      color: $primary-black;
      font-size: $h3;
    }

    h4 {
      font-weight: $font-weight-light;
      color: $primary-black;
      font-size: $h4;
    }

    a {
      text-decoration: none;
      bottom: 0;

      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }
    }

    ul,
    ol {
      list-style: none;
    }
  }
}
</style>
