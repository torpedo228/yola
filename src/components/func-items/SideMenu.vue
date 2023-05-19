<template>
  <div>
    <img class="side-menu-btn" src="../../assets/icons/flag.svg" alt="選單按鈕" @click="toggle()" />

    <div class="side-menu-container" v-bind:style="{ right: (isShow ? '0' : '-30%') }">
      <img class="side-menu-img" src="../../assets/icons/side-menu.svg" alt="" />
      <div class="shortcut-wrap">
        <a id="my-land" href="#">
          <i class="fa-solid fa-circle-user"></i>
          <span class="my-land">我的樂園</span>
        </a>
        <a id="home" href="./home">
          <span>首頁</span>
        </a>
        <a id="learning-corner" href="./learning-corner">
          <span>學習區</span>
        </a>
        <a id="themetic-teaching" href="#">
          <span>主題教學</span>
        </a>
        <a id="storybooks" href="#">
          <span>繪本故事</span>
        </a>
        <a id="nursery-rhymes-and-finger-rhymes" href="#">
          <span>兒歌&手指謠</span>
        </a>
        <a id="physical-fitness-and-rhythm-movement" href="#">
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
      isShow: true,
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
}

div.side-menu-container {
  width: 500px;
  height: 550px;
  z-index: 999;
  position: fixed;
  text-align: center;
  -webkit-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;

  img.side-menu-img {
    height: 550px;

  }

  div.shortcut-wrap {
    width: 150px;
    position: absolute;
    top: 10%;
    right: 25%;
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 20px;

    a {
      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }

      &:hover {
        color: $primary-white;
        background-color: $primary-blue;
        border-color: $primary-white;
      }

      &:active {
        color: $primary-white;
        background-color: $primary-blue;
        opacity: 0.5;
      }

      span {
        display: inline-block;
        width: 150px;
        color: $primary-black;
        font-size: $sub-info;
        text-align: center;
      }
    }

    a#my-land {
      width: 150px;
      margin-bottom: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

      span.my-land {}

      i {
        color: $primary-grey;
        font-size: 70px;
      }
    }
  }
}
</style>
