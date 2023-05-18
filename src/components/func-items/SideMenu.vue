<template>
  <div>
    <img class="side-menu-btn" src="../../assets/icons/flag.svg" alt="選單按鈕" @click="toggle()" />

    <div class="side-menu-container" v-bind:style="{ right: (isShow ? '0' : '-30%')}">
      <img src="../../assets/icons/side-nav.svg" alt="" />
      <div class="shortcut-wrap">
        <a id="my-land" href="#">
          <span>我的樂園</span>
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
        <a id="physica-fitness-and-rhythm-movement" href="#">
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
}

div.side-menu-container {
  display: block;
  position: fixed;
  text-align: center;

  -webkit-transition: 0.35s ease-in-out;
  transition: 0.35s ease-in-out;

  img {
    height: 500px;
  }

  div.shortcut-wrap {
    position: absolute;
    top: 20%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 20px;

    a {
      span {
        color: $primary-black;
      }
    }
  }
}
</style>
