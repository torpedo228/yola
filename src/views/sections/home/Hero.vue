<template>
  <div>
    <div class="hero-container">
      <div class="main-content">
        <img class="decoration-1" src="../../../assets/decorations/hero-1.svg" alt="" />
        <h2>聚焦幼兒教育<br><br>資源共享互惠</h2>
        <a class="go-to-introduction-btn" href="./learning-corner">
          <h3>開始探索</h3>
        </a>
      </div>

      <img class="decoration-2" src="../../../assets/decorations/hero-2.svg" alt="" />
      <img class="decoration-3" src="../../../assets/decorations/hero-3.svg" alt="" />
      <img class="under-decoration " src="../../../assets/decorations/under-decoration.svg" alt="">
      <img class="hero-img" src="../../../assets/images/home/hero.png" alt="" />

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

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.hero-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;

  div.main-content {
    width: 450px;
    height: 450px;
    position: absolute;
    top: 15%;
    left: 20%;

    h2 {
      position: absolute;
      color: $primary-white;
      transform: translate(80%, 160%);
      line-height: $main-title;
    }

    img.decoration-1 {
      width: 100%;
    }

    a.go-to-introduction-btn {
      display: inline-block;
      font-size: $sub-info;
      color: $primary-black;

      h3 {
        display: inline-block;
        width: 150px;
        height: 60px;
        background-color: $primary-white;
        border: 5px solid $primary-blue;
        border-radius: 40px;
        position: absolute;
        right: -10%;
        bottom: 20%;
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


  img.decoration-2 {
    top: 40px;
    left: 0;
  }

  img.decoration-3 {
    bottom: 25%;
    left: 5%;
  }


  img.hero-img,
  img.under-decoration {
    width: 500px;
    top: 15%;
    right: 0;
  }
}
</style>
