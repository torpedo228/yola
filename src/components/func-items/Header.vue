<template>
  <div class="header-container" id="page-top">
    <div class="header-wrap">
      <a href="#" @click="backToHome">
        <img class="logo" :src="require('@/assets/logo/yola.svg')" alt="幼樂園Yo-La! Logo" />
      </a>

      <ul class="nav-list">
        <li class="learning-corner">
          學習區<i class="fa-solid fa-angle-down"></i>

          <ul class="learning-corner-list">
            <li class="literacy"><a href="">語文區</a></li>
            <li class="role-playing"><a href="">扮演區</a></li>
            <li class="art"><a href="">美勞區</a></li>
            <li class="math"><a href="">數學區</a></li>
            <li class="blocks"><a href="">積木區</a></li>
            <li class="cooking"><a href="">烹飪區</a></li>
            <li class="construction"><a href="">組合建構區</a></li>
            <li class="natural-observe"><a href="">自然觀察區</a></li>
          </ul>
        </li>
        <li class="thematic-teaching">
          主題教學<i class="fa-solid fa-angle-down"></i>
        </li>
        <li class="storybooks">繪本故事</li>
        <li class="nursery-rhymes-and-finger-rhymes">兒歌&手指謠</li>
        <li class="physical-fitness-and-rhythm-movement">體能&律動</li>
        <li class="my-land">我的樂園</li>
      </ul>

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

    a {
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

    ul.nav-list {
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: start;
      gap: 30px;
      font-size: 2.5vmin;
      position: absolute;
      left: 20%;
      top: 20%;

      @include custom-responsive("xl lg") {}

      @include custom-responsive("md sm xs") {
        display: none;
      }

      li {
        cursor: pointer;
      }

      li.learning-corner {
        position: relative;

        &:hover {
          color: $primary-red;
        }



        ul.learning-corner-list {
          width: 150px;
          text-align: center;
          padding: 10px 0;
          display: block;
          background-color: $primary-white;
          border-radius: 20px;
          box-shadow: 2px 2px 2px $primary-grey;
          position: absolute;
          transform: translateX(-50%);
          left: 50%;
          top: 250%;

          li {
            display: block;
            width: 150px;
            height: 30px;
            margin: 5px 0;
            line-height: 30px;

            &:hover {

              a {
                color: $primary-white;
              }

            }
          }

          li.literacy {
            &:hover {
              background-color: $primary-blue;
            }
          }

          li.role-playing {
            &:hover {
              background-color: $primary-green;
            }
          }

          li.art {
            &:hover {
              background-color: $primary-red;
            }
          }

          li.math {
            &:hover {
              background-color: $primary-yellow;
            }
          }

          li.blocks {
            &:hover {
              background-color: $primary-red;
            }
          }

          li.cooking {
            &:hover {
              background-color: $primary-yellow;
            }
          }

          li.construction {
            &:hover {
              background-color: $primary-blue;
            }
          }

          li.natural-observe {
            &:hover {
              background-color: $primary-green;
            }
          }

        }
      }





      li.thematic-teaching {
        &:hover {
          color: $primary-blue;
        }
      }

      li.storybooks {
        &:hover {
          color: $primary-yellow;
        }
      }

      li.nursery-rhymes-and-finger-rhymes {
        &:hover {
          color: $primary-blue;
        }
      }

      li.physical-fitness-and-rhythm-movement {
        &:hover {
          color: $primary-green;
        }
      }

      li.my-land {
        &:hover {
          color: $primary-red;
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
      height: 60%;
      position: absolute;
      right: 12%;
      top: 50%;
      transform: translateY(-50%);
      @include hm();
      gap: 10px;

      @include custom-responsive("xl lg") {}

      @include custom-responsive("md sm xs") {
        display: none;
      }

      div.fb,
      div.ig,
      div.yt {
        width: 8vmin;
        height: 8vmin;
        background: $primary-white;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
        border-radius: $border-radius-circle;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          font-size: 4vmin;
        }

        &:hover {
          box-shadow: 2px 2px 2px $primary-grey;
        }
      }

      div.fb i {
        color: $primary-blue;
      }

      div.ig i {
        width: 100%;
        height: 100%;
        color: transparent;
        background: radial-gradient(circle at 30% 80%,
            #fdf497 0%,
            #fdf497 5%,
            #fd5949 45%,
            #d6249f 50%,
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
      border-radius: $border-radius-circle;
      cursor: pointer;

      &:hover {
        outline: 1vmin solid $secondary-grey;
      }

      i {
        color: $primary-grey;
        font-size: 8vmin;
      }

      @include custom-responsive("xl") {
        display: block;
      }

      @include custom-responsive("lg") {
        display: block;
      }

      @include custom-responsive("md sm xs") {
        display: none;
      }
    }
  }
}
</style>
