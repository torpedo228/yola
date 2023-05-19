<template>
  <div>
    <img class="side-menu-btn" src="../../assets/icons/flag.svg" alt="選單按鈕" @click="toggle()" />

    <div class="side-menu-container" v-bind:style="{ right: isShow ? '-10%' : '-40%' }">
      <img class="side-menu-img" src="../../assets/icons/side-menu.svg" alt="" />
      <div class="shortcut-wrap">
        <a id="my-land" href="./test">
          <div class="profile-img">
            <img src="https://avatars.githubusercontent.com/u/110772689?v=4" alt="" />
          </div>
          <!-- <i class="fa-solid fa-circle-user"></i> -->
          <span class="my-land">我的樂園</span>
        </a>
        <a id="home" href="./">
          <span>首頁</span>
        </a>
        <a id="learning-corner" href="./learning-corner">
          <span>學習區</span>
        </a>
        <a id="themetic-teaching" href="./test">
          <span>主題教學</span>
        </a>
        <a id="storybooks" href="./test">
          <span>繪本故事</span>
        </a>
        <a id="nursery-rhymes-and-finger-rhymes" href="./test">
          <span>兒歌&手指謠</span>
        </a>
        <a id="physical-fitness-and-rhythm-movement" href="./test">
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
  mounted() { },
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

img.side-menu-btn {
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
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
      width: 150px;

      padding: 5px 0;
      margin-bottom: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;

      &:hover {
        background-color: $primary-red;
      }

      div.profile-img {
        width: 150px;

        img {
          width: 80px;
          height: 80px;
          border-radius: 50%;

          &:hover {
            outline: 10px solid $secondary-red;
            border-radius: 50%;
          }
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
