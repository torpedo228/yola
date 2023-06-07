<template>
  <div class="header-container" id="page-top">
    <div class="header-wrap">
      <a href="#" @click="backToHome">
        <img class="logo" :src="require('@/assets/logo/yola.svg')" alt="幼樂園Yo-La! Logo" />
      </a>
      <div class="side-menu">
        <SideMenu />
      </div>
      <div class="social-media">
        <a href="#">
          <div class="fb"><i class="fa-brands fa-square-facebook"></i></div>
        </a>
        <a href="#">
          <div class="ig"><i class="fa-brands fa-instagram"></i></div>
        </a>
        <a href="#">
          <div class="yt"><i class="fa-brands fa-youtube"></i></div>
        </a>
      </div>
      <div class="profile-img">
        <i class="fa-solid fa-circle-user"></i>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/func-items/SideMenu.vue";

export default {
  components: { SideMenu },
  data() {
    return {};
  },
  computed: {
    // isStandardMode() {
    //   return (
    //     this.$route.matched.length == 0 ||
    //     this.$route.matched[0].name === "home"
    //   );
    // },
  },
  mounted() { },
  watch: {},
  methods: {
    backToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.header-container {
  width: 100%;
  position: relative;

  div.header-wrap {
    width: 100%;
    height: 10%;
    position: fixed;
    top: 0;
    background-color: $primary-white;
    border-bottom: 1px solid $secondary-grey;
    z-index: 9999;

    @include custom-responsive("xl lg") {
      height: 13%;
    }
  }

  img.logo {
    height: 60%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition-duration: 0.5s;


    @include custom-responsive("xl lg") {
      left: 10%;
    }

    @include custom-responsive("md sm xs") {
      left: 50%;
    }
  }
}

div.side-menu {
  height: 50%;
  position: absolute;
  right: 3%;
  top: 50%;
  transform: translateY(-50%);

  @include custom-responsive("xl lg") {
    display: none;
  }

  @include custom-responsive("md sm xs") {
    display: block;
  }
}

// div.fade-in {
//   animation: fadeIn;
//   animation-duration: 0.5s;
// }

// div.fade-out {
//   animation: fadeOut;
//   animation-duration: 0.5s;
// }

div.social-media {
  height: 50%;
  position: absolute;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 10px;

  @include custom-responsive("xl lg") {}

  @include custom-responsive("md sm xs") {
    display: none;
  }

  div.fb,
  div.ig,
  div.yt {
    width: 45px;
    height: 100%;
    background: $primary-white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: $border-radius-circle;
    display: flex;
    align-items: center;
    justify-content: center;

    i {
      font-size: 25px;
    }

    &:hover {
      box-shadow: 2px 2px 2px $primary-grey;
    }
  }

  div.fb i {
    color: $primary-blue;
  }

  div.ig i {
    width: 30px;
    height: 30px;
    color: transparent;
    background: radial-gradient(circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%);
    -webkit-background-clip: text;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.yt i {
    color: $primary-red;
  }
}

div.profile-img {
  position: absolute;
  right: 4%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    outline: 5px solid $secondary-grey;
  }

  i {
    font-size: 50px;
    color: $primary-grey;
  }

  @include custom-responsive("xl lg") {
    display: block;
  }

  @include custom-responsive("md sm xs") {
    display: none;
  }
}
</style>
