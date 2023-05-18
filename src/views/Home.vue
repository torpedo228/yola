<template>
  <div>
    <div class="hero-container">
      <img class="decoration-1" src="../assets/decorations/hero-1.svg" alt="">
      <img class="decoration-2" src="../assets/decorations/hero-2.svg" alt="">
      <img class="decoration-3" src="../assets/decorations/hero-3.svg" alt="">
      <img class="hero-img" src="../assets/images/home/hero.jpg" alt="">
      <a class="go-to-introduction" href="./learning-corner">
        <div>
          開始探索
        </div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_HOME_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.hero-container {

  a.go-to-introduction {
    display: inline-block;
    font-size: $sub-info;
    color: $primary-black;



    div {
      width: 100px;
      height: 50px;
      background-color: $primary-white;
      border: 5px solid $primary-blue;
      border-radius: 30px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 20%;
      right: 10%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }

      &:hover {
        color: $primary-white;
        background-color: $primary-blue;
      }

      &:active {
        color: $primary-white;
        background-color: $primary-blue;
        opacity: 0.5;
      }
    }
  }
}
</style>
