<template>
  <Slide right />
  <div class="side-menu-cointainer">
    <img src="../../assets/icons/side-nav.svg" alt="">
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
</template>

<script>
import Slide from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  props: {},
  components: { Slide },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.$store.commit("SET_SIDEMENU_PAGE");
  },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.side-menu-cointainer {
  position: absolute;
  right: 0;
  top: 8%;
  z-index: 2;
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
