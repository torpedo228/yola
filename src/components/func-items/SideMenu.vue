<template>
  <div id="side-menu-container">
    <img v-if="isShow" class="side-menu-btn-close" :src="require('@/assets/icons/func-items/menu-close.svg')" alt="選單按鈕"
      @click="turnOff()" />
    <img v-else class="side-menu-btn-open" :src="require('@/assets/icons/func-items/menu-open.svg')" alt="選單按鈕"
      @click="turnOn()" />

    <div class="side-menu-wrap" v-bind:style="{ right: isShow ? '-300%' : '-1200%' }">
      <img class="side-menu-img" :src="require('@/assets/icons/func-items/side-menu.svg')" alt="" />

      <div class="shortcut-wrap">
        <div class="section" id="my-land" @click="jumpTo('my-land')">
          <img src="https://avatars.githubusercontent.com/u/110772689?v=4" alt="" />
          我的樂園
        </div>

        <div class="section-wrap">
          <span class="section" id="home" @click="jumpTo('home')"> 首頁 </span>
          <span class="section" id="learning-corner" @click="jumpTo('learning-corner')">
            學習區
          </span>
          <span class="section" id="thematic-teaching" @click="jumpTo('thematic-teaching')">
            主題教學
          </span>
          <span class="section" id="storybooks" @click="jumpTo('storybooks')">
            繪本故事
          </span>
          <span class="section" id="nursery-rhymes-and-finger-rhymes" @click="jumpTo('nursery-rhymes-and-finger-rhymes')">
            兒歌&手指謠
          </span>
          <span class="section" id="physical-fitness-and-rhythm-movement"
            @click="jumpTo('physical-fitness-and-rhythm-movement')">
            體能&律動
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      isShow: true,
    };
  },
  computed: {},
  mounted() { },
  watch: {},
  methods: {
    turnOn() {
      // this.$store.commit("TURN_ON_OVERLAY");
      this.$emit("beforeTurnOnSideMenu");
      this.isShow = true;
      this.$emit("afterTurnOnSideMenu");
    },
    turnOff() {
      // this.$store.commit("TURN_OFF_OVERLAY");
      this.$emit("beforeTurnOffSideMenu");
      this.isShow = false;
      this.$emit("afterTurnOffSideMenu");
    },

    toggle() {
      if (this.isShow) {
        this.turnOff();
      } else {
        this.turnOn();
      }
    },

    jumpTo(name) {
      this.$router.push({ name: name });
      this.turnOff();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div#side-menu-container {
  height: 100%;

  img.side-menu-btn-open,
  img.side-menu-btn-close {
    height: 100%;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  div.side-menu-wrap {
    height: 100vh;
    position: fixed;
    -webkit-transition: 0.35s ease-in-out;
    display: flex;
    align-content: center;
    justify-content: center;

    img.side-menu-img {
      height: 80%;
    }

    div.shortcut-wrap {
      text-align: center;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      @include custom-responsive("xs") {
        top: 10%;
      }

      @include custom-responsive("sm") {
        top: 10%;
      }

      @include custom-responsive(" md") {
        top: 10%;
      }

      @include custom-responsive("lg") {
        top: 10%;
      }

      div#my-land {
        @include vm();
        cursor: pointer;
        padding: 5px 0;
        margin-bottom: 5%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        color: $primary-white;

        img {
          background-color: $primary-red;
          outline: 10px solid $secondary-red;
          border-radius: 50%;

          @include custom-responsive("xs") {
            width: 11vmax;
            height: 11vmax;
          }

          @include custom-responsive("sm md ") {
            width: 10.5vmin;
            height: 10.5vmin;
          }

          @include custom-responsive("lg ") {
            width: 10.5vmin;
            height: 10.5vmin;
          }
        }
      }

      div.section-wrap {
        height: 40vh;
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        position: absolute;
        transform: translate(-50%, -50%);

        @include custom-responsive("xs") {
          top: 5vh;
        }

        @include custom-responsive("sm") {
          top: 4.5vh;
        }

        @include custom-responsive(" md") {
          top: 4vh;
        }

        @include custom-responsive("lg") {
          top: 1.5vh;
        }

        span.section {
          display: block;
          color: $primary-black;
          text-align: center;
          border-radius: 30px;
          cursor: pointer;

          &:hover {
            color: $primary-white;
          }
        }

        span#home {
          &:hover {
            background-color: $primary-blue;
          }
        }

        span#learning-corner {
          &:hover {
            background-color: $primary-red;
          }
        }

        span#storybooks {
          &:hover {
            background-color: $primary-yellow;
          }
        }

        span#physical-fitness-and-rhythm-movement {
          &:hover {
            background-color: $primary-green;
          }
        }
      }
    }
  }
}

.section {
  display: block;

  @include custom-responsive("xs") {
    font-size: 3vmax;
  }

  @include custom-responsive("sm") {
    font-size: 3vmax;
  }

  @include custom-responsive(" md") {
    font-size: 2.75vmax;
  }

  @include custom-responsive("lg") {
    font-size: 2.5vmax;
  }
}
</style>
