<template>
  <div>
    <img
      v-if="isShow"
      class="side-menu-btn-close"
      src="../../assets/icons/func-items/menu-close.svg"
      alt="選單按鈕"
      @click="turnOff()"
    />
    <img
      v-else
      class="side-menu-btn-open"
      src="../../assets/icons/func-items/menu-open.svg"
      alt="選單按鈕"
      @click="turnOn()"
    />

    <div
      class="side-menu-container"
      v-bind:style="{ right: isShow ? '-10%' : '-40%' }"
    >
      <img
        class="side-menu-img"
        src="../../assets/icons/func-items/side-menu.svg"
        alt=""
      />
      <div class="shortcut-wrap">
        <a id="my-land" @click="jumpTo('my-land')">
          <div class="profile-img">
            <img
              src="https://avatars.githubusercontent.com/u/110772689?v=4"
              alt=""
            />
          </div>
          <!-- <i class="fa-solid fa-circle-user"></i> -->
          <span class="my-land">我的樂園</span>
        </a>
        <a id="home" @click="jumpTo('home')">
          <span>首頁</span>
        </a>
        <a id="learning-corner" @click="jumpTo('learning-corner')">
          <span>學習區</span>
        </a>
        <a id="thematic-teaching" @click="jumpTo('thematic-teaching')">
          <span>主題教學</span>
        </a>
        <a id="storybooks" @click="jumpTo('storybooks')">
          <span>繪本故事</span>
        </a>
        <a
          id="nursery-rhymes-and-finger-rhymes"
          @click="jumpTo('nursery-rhymes-and-finger-rhymes')"
        >
          <span>兒歌&手指謠</span>
        </a>
        <a
          id="physical-fitness-and-rhythm-movement"
          @click="jumpTo('physical-fitness-and-rhythm-movement')"
        >
          <span>體能&律動</span>
        </a>
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
      isShow: false,
    };
  },
  computed: {},
  mounted() {},
  watch: {},
  methods: {
    turnOn() {
      this.isShow = true;
    },
    turnOff() {
      this.isShow = false;
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

img.side-menu-btn-open,
img.side-menu-btn-close {
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
}

img.side-menu-btn-open {
  width: 50px;
  height: 50px;
}

img.side-menu-btn-close {
  width: 50px;
  height: 50px;
}

div.side-menu-container {
  width: 600px;
  height: 550px;
  position: fixed;
  text-align: center;
  -webkit-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;
  display: flex;
  align-content: center;
  justify-content: center;

  img.side-menu-img {
    width: 100%;
    height: 100%;
  }

  div.shortcut-wrap {
    width: 150px;
    position: absolute;
    top: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    a {
      display: inline-block;
      border-radius: 30px;

      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }

      &:hover {
        background-color: $primary-blue;
      }

      &:active {
        color: $primary-white;
        opacity: 0.5;
      }

      span {
        display: block;
        width: 150px;
        color: $primary-black;
        font-size: $sub-info;
        text-align: center;
        border-radius: 30px;
        cursor: pointer;

        &:hover {
          color: $primary-white;
        }
      }
    }

    a#learning-corner {
      &:hover {
        background-color: $primary-red;
      }
    }

    a#storybooks {
      &:hover {
        background-color: $primary-yellow;
      }
    }

    a#physical-fitness-and-rhythm-movement {
      &:hover {
        background-color: $primary-green;
      }
    }

    a#my-land {
      cursor: pointer;
      width: 150px;
      padding: 5px 0;
      margin-bottom: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      &:hover {
        background-color: $primary-red;

        img {
          background-color: $primary-red;
          outline: 10px solid $secondary-red;
          border-radius: 50%;
        }
      }

      div.profile-img {
        width: 150px;

        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }

        // i {
        //   &::before {
        //     outline: 10px solid $secondary-red;
        //     border-radius: 50px;
        //   }
        // }
      }

      span.my-land {
        color: $primary-white;
        font-size: $sub-info;
      }

      i {
        color: $primary-white;
        font-size: 80px;
      }
    }
  }
}
</style>
