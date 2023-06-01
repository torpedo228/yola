<template>
  <div class="container" id="hero">
    <div class="main-content">
      <img class="decoration-blue" :src="require('@/assets/decorations/home/hero-blue.svg')" alt="" />
      <h2>聚焦幼兒教育<br /><br />資源共享互惠</h2>
      <a class="go-to-introduction-btn" v-scroll-to="'#introduction'">
        <h4>開始探索</h4>
      </a>
    </div>

    <img class="decoration-red" :src="require('@/assets/decorations/home/hero-red.svg')" alt="" />
    <img class="decoration-yellow" :src="require('@/assets/decorations/home/hero-yellow.svg')" alt="" />
    <img class="under-decoration" :src="require('@/assets/decorations/home/hero-green.svg')" alt="" />
    <img class="hero-img" :src="require('@/assets/images/home/hero/hero.png')" alt="" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;
  height: 100vh;
  position: relative;
  margin-top: 80px;

  div.main-content {
    width: 450px;
    height: 450px;
    position: absolute;
    top: 10%;
    left: 20%;

    h2 {
      position: absolute;
      color: $primary-white;
      transform: translate(50%, 100%);
      line-height: $h2;
    }

    img.decoration-blue {
      width: 100%;
    }

    a.go-to-introduction-btn {
      display: inline-block;
      font-size: $sub-info;
      color: $primary-black;
      cursor: pointer;

      h4 {
        display: inline-block;
        width: 150px;
        height: 60px;
        background-color: $primary-white;
        border: 5px solid $primary-blue;
        border-radius: 40px;
        position: absolute;
        right: -10%;
        top: 60%;
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
          border-color: $primary-white;
        }

        &:active {
          color: $primary-white;
          background-color: $primary-blue;
          opacity: 0.5;
        }
      }
    }
  }

  img {
    position: absolute;
  }

  img.decoration-red {
    top: -10%;
    left: 0;
  }

  img.decoration-yellow {
    width: 300px;
    height: 200px;
    top: 60%;
    left: 5%;
  }

  img.hero-img,
  img.under-decoration {
    width: 500px;
    top: 3%;
    right: 0;
  }
}
</style>
