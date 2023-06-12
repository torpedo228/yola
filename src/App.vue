<template>
  <div>
    <div class="func-items">
      <GoToTop />
      <div class="overlay">
        <Overlay />
      </div>
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
import Header from "@/components/func-items/Header.vue";
import GoToTop from "@/components/func-items/GoToTop.vue";
import Footer from "@/components/func-items/Footer.vue";
import Overlay from "@/components/func-items/Overlay.vue";
// import SideMenu from "@/components/func-items/SideMenu.vue";

export default {
  components: { Header, GoToTop, Footer, Overlay },
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

html {
  overflow-x: hidden;
  width: 100%;
  font-size: 12px;
  // @include custom-responsive("xs") {
  //   font-size: 12px;
  // }

  // @include custom-responsive("sm md lg") {
  //   font-size: 16px;
  // }

  // @include custom-responsive("xl") {
  //   font-size: 18px;
  // }

  // @include custom-responsive("xxl") {
  //   font-size: 24px;
  // }

  body {
    width: 100%;
    font-family: $light;
    font-weight: $font-weight-light;
    margin: 0;
    padding: 0px;
    position: relative;
    background: url("./assets/decorations/main/background.svg");
    // background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;


    h2 {
      font-weight: $font-weight-light;
      color: $primary-black;
      font-size: $h2;
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

div.overlay {
  @include custom-responsive("xs") {
    display: block;
  }

  @include custom-responsive("sm md lg") {
    display: block;
  }

  @include custom-responsive("xl xxl") {
    display: none;
  }
}</style>
