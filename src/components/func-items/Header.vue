<template>
  <div class="header-container" id="page-top">
    <div class="header-wrap">
      <div class="header-content">
        <a id="header-logo" href="#" @click="backToHome">
          <img class="logo" :src="require('@/assets/logo/yola.svg')" alt="幼樂園Yo-La! Logo" />
        </a>
        <div class="header-drop-down-list">
          <HeaderDropDownList :main="learningCorner.main" :sub-list="learningCorner.subList" />
          <HeaderDropDownList :main="thematicTeaching.main" :sub-list="thematicTeaching.subList" />
          <HeaderDropDownList :main="storybooks.main" :sub-list="storybooks.subList" />
          <HeaderDropDownList :main="nurseryRhymesAndFingerRhymes.main"
            :sub-list="nurseryRhymesAndFingerRhymes.subList" />
          <HeaderDropDownList :main="physicalFitnessAndRhythmMovement.main"
            :sub-list="physicalFitnessAndRhythmMovement.subList" />
          <HeaderDropDownList :main="myLand.main" :sub-list="myLand.subList" />
        </div>
        <div class="side-menu">
          <SideMenu @before-turn-on-side-menu="$store.commit('TURN_ON_OVERLAY')"
            @before-turn-off-side-menu="$store.commit('TURN_OFF_OVERLAY')" />
        </div>
        <!-- <div class="social-media">
          <a class="fb" href="#">
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a class="ig" href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="yt" href="#"><i class="fa-brands fa-youtube"></i>
          </a>
        </div> -->

        <div class="login">
          <div class="profile-img">
            <!-- <i class="fa-solid fa-circle-user"></i> -->

            <img v-if="$store.getters.isLoggedIn" :src="$store.state.userInfo.profile.avatarSrc" alt="" />
            <img v-else @click="() => {
              $store.commit('SHOW_LOGIN_PROMPT');
            }
              " :src="require('@/assets/icons/func-items/login.svg')" alt="" />
          </div>


          <span class="user-name">{{ $store.state.userInfo.userName }}</span>

          <div class="logout" @click="() => {
            $store.commit('CLEAR_USER_INFO');
          }
            " v-if="$store.getters.isLoggedIn">登出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/func-items/SideMenu.vue";

import HeaderDropDownList from "@/components/func-items/HeaderDropDownList.vue";

export default {
  components: { SideMenu, HeaderDropDownList },
  data() {
    return {
      userName: "二狸貓",

      learningCorner: {
        main: { title: "學習區", routingName: "learning-corner", color: "red" },
        subList: [
          { title: "語文區", routingName: "still-building", color: "blue" },
          { title: "扮演區", routingName: "still-building", color: "green" },
          { title: "美勞區", routingName: "art", color: "red" },
          { title: "數學區", routingName: "still-building", color: "yellow" },
          { title: "積木區", routingName: "still-building", color: "red" },
          { title: "烹飪區", routingName: "still-building", color: "yellow" },
          { title: "組合建構區", routingName: "construction", color: "blue" },
          {
            title: "鬆散素材區",
            routingName: "still-building",
            color: "green",
          },
        ],
      },
      thematicTeaching: {
        main: {
          title: "主題教學",
          routingName: "thematic-teaching",
          color: "blue",
        },
        subList: [
          {
            title: "主題教學設計",
            routingName: "still-building",
            color: "red",
          },
          {
            title: "教學活動參考",
            routingName: "still-building",
            color: "green",
          },
          { title: "主題發想牆", routingName: "still-building", color: "blue" },
        ],
      },
      storybooks: {
        main: {
          title: "繪本故事",
          routingName: "storybooks",
          color: "yellow",
        },
        subList: [],
      },
      nurseryRhymesAndFingerRhymes: {
        main: {
          title: "兒歌&手指謠",
          routingName: "nursery-rhymes-and-finger-rhymes",
          color: "blue",
        },
        subList: [],
      },
      physicalFitnessAndRhythmMovement: {
        main: {
          title: "體能&律動",
          routingName: "physical-fitness-and-rhythm-movement",
          color: "green",
        },
        subList: [],
      },
      myLand: {
        main: {
          title: "我的樂園",
          routingName: "my-land",
          color: "red",
        },
        subList: [],
      },
    };
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
  padding-bottom: 13vh;

  div.header-wrap {
    width: 100%;
    height: 13vh;
    position: fixed;
    top: 0;
    background-color: $primary-white;
    border-bottom: 1px solid $secondary-grey;
    z-index: 9999;

    div.header-content {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      a#header-logo {
        align-self: center;
        display: block;
        position: relative;

        @include custom-responsive("xs") {
          height: 60%; // logo圖片大小調整
          margin: auto;
        }

        @include custom-responsive("sm md lg") {
          height: 70%; // logo圖片大小調整
          margin: auto;
        }

        @include custom-responsive("xl xxl") {
          height: 80%; // logo圖片大小調整
          margin: 0 2% 0 5%;
        }

        img.logo {
          height: 100%;

          &:hover {
            animation-name: shake;
            animation-duration: 0.5s;
            animation-iteration-count: infinite;

            @keyframes shake {
              0% {
                transform: translateX(-0.5vw);
              }

              50% {
                transform: translateX(0.5vw);
              }

              100% {
                transform: translateX(-0.5vw);
              }
            }
          }
        }
      }

      div.header-drop-down-list {
        width: 70%;

        @include custom-responsive("xs") {
          display: none;
        }

        @include custom-responsive("sm md lg") {
          display: none;
        }

        @include custom-responsive("xl xxl") {
          display: block;
          font-size: 1.5vw;
        }
      }

      div.side-menu {
        height: 50%;
        position: absolute;
        right: 3%;
        top: 50%;
        transform: translateY(-50%);

        @include custom-responsive("xs") {
          display: block;
        }

        @include custom-responsive("sm md lg") {
          display: block;
        }

        @include custom-responsive("xl xxl") {
          display: none;
        }
      }

      // div.social-media {
      //   position: absolute;
      //   right: 5%;
      //   top: 50%;
      //   transform: translate(-50%, -50%);
      //   width: 300px;
      //   height: 50px;

      //   @include custom-responsive("xs") {
      //     display: none;
      //   }

      //   @include custom-responsive("lg md sm") {
      //     display: none;
      //   }

      //   @include custom-responsive("xxl xl") {
      //     @include hm();
      //   }

      //   a.fb,
      //   a.ig,
      //   a.yt {
      //     @include hm();
      //     width: 4vw;
      //     height: 4vw;
      //     background: $primary-white;
      //     box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
      //     border-radius: $border-radius-circle;

      //     i {
      //       font-size: 5rem;
      //     }

      //     &:hover {
      //       box-shadow: 2px 2px 2px $primary-grey;
      //     }
      //   }

      //   a.fb i {
      //     color: $primary-blue;
      //   }

      //   a.ig i {
      //     width: 100%;
      //     height: 100%;
      //     color: transparent;
      //     background: radial-gradient(circle at 30% 80%,
      //         #fdf497 0%,
      //         #fdf497 5%,
      //         #fd5949 45%,
      //         #d6249f 50%,
      //         #285aeb 90%);
      //     -webkit-background-clip: text;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //   }

      //   a.yt i {
      //     color: $primary-red;
      //   }
      // }
      div.login {
        box-sizing:border-box ;
        margin-left: 3vw;
        position: absolute;
        top: 50%;
        right: 2%;
        transform: translateY(-50%);
        @include hm();
        gap: 1vw;

        span.user-name {
          display: block;
          font-size: 1.5vw;
        }

        div.logout {
          box-sizing: border-box;
          font-size: 1.5vw;
          cursor: pointer;
          padding: 0.5vw;
          border: 0.1vw solid $primary-black;

          border-radius: 1vw;

          &:hover {
            background-color: $primary-black;
            color: $primary-white;

          }

          &:active {
            transform: translate(2px, 2px);
          }


        }

        div.profile-img {
          width: 5vw;
          height: 5vw;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;

          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);


          &:hover {
            box-shadow: 4px 4px 2px $primary-grey;
          }

          &:active {
            opacity: 0.7;
          }

          img {
            width: 100%;
          }


          // i {
          //   color: $primary-grey;

          //   @include custom-responsive("xl xxl") {
          //     font-size: 4.5vw;
          //   }
          // }

        }

        @include custom-responsive("xs") {
          display: none;
        }

        @include custom-responsive("sm md lg") {
          display: none;
        }

        @include custom-responsive("xl xxl") {
          display: flex;
        }
      }
    }
  }
}
</style>
