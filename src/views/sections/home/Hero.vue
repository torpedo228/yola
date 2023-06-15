<template>
  <div class="hero-container" id="hero">

    <div class="pic-wrap">
      <img class="hero-image" :src="require('@/assets/images/home/hero/hero.svg')" alt="" />
      <img class="hero-image-mobile" :src="require('@/assets/images/home/hero/hero-mobile.svg')" alt="" />
    </div>

    <div class="content">
      <div class="text-wrap">
        <h2>聚焦幼兒教育</h2>
        <h2>資源共享互惠</h2>
        <p>
          為家長與老師提供品質優良、豐富多元的學習資源！
          <br />
          提供關心幼兒教育的你一個分享與開源的集合平台！
        </p>
      </div>
      <div class="go-to-introduction-btn" v-scroll-to="'#introduction'">
        開始探索
      </div>
    </div>

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

div.hero-container {
  width: 100%;
  height: 100vh;
  position: relative;

  div.pic-wrap {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;


    img.hero-image {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: -50% -50%;

      @include custom-responsive("xs") {
        display: none;
      }

      @include custom-responsive("sm md lg") {
        display: block;
      }

      @include custom-responsive("xl xxl") {
        display: block;
      }
    }

    img.hero-image-mobile {
      @include custom-responsive("xs") {
        display: block;
        height: 87vh;

      }

      @include custom-responsive("sm md lg") {
        display: none;
      }

      @include custom-responsive("xl xxl") {
        display: none;
      }
    }
  }

  div.content {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    top: 15vmax;
    left: 0;

    div.text-wrap {

      // @include custom-responsive("xs") {
      //   top: 120vmin;
      //   left: 50vmin;
      //   transform: translateX(-50%);
      //   text-align: center;
      //   width: 100%;
      // }

      @include custom-responsive("sm md lg") {
        top: 11vmin;
        left: 8vmin;
        transform: translateX(0%);
        text-align: left;

      }

      @include custom-responsive("xl xxl") {
        top: 10vmax;
        left: 8vmin;
        transform: translateX(0%);
        text-align: left;
      }

      h2 {
        color: $primary-white;

        @include custom-responsive("xs") {
          display: block;
          font-size: 10vw;
          margin: 1vh 0;
        }

        @include custom-responsive("sm md lg") {
          display: inline-block;
          margin: 0 1vw 1vh 0;
          font-size: 4vw;
        }

        @include custom-responsive("xl xxl") {
          display: inline-block;
          font-size: 4vw;
          margin: 0 1vw 1vh 0;
        }
      }

      p {
        color: $primary-white;
        font-size: 2vw;

        @include custom-responsive("xs") {
          display: none;
        }

        @include custom-responsive("sm md lg") {
          display: block;
        }

        @include custom-responsive("xl xxl") {
          display: block;
        }
      }
    }

    div.go-to-introduction-btn {
      color: $primary-white;
      display: block;
      background-color: $primary-blue;
      text-align: center;
      cursor: pointer;

      // @include custom-responsive("xs sm") {
      //   width: 60vmin;
      //   height: 20vmin;
      //   line-height: 20vmin;
      //   font-size: 8vw;
      //   margin: auto;
      //   border-radius: 20vmin;
      //   border: 1vw solid $primary-white;
      //   top: 160vmin;
      //   left: 50vmin;
      //   transform: translateX(-50%);
      // }

      @include custom-responsive("md") {
        width: 20vw;
        height: 6vw;
        line-height: 6vw;
        font-size: 2.5vw;
        margin: 4vmin 0 0;
        border-radius: 8vmax;
        border: 0;
      }

      @include custom-responsive("lg") {
        width: 20vw;
        height: 6vw;
        line-height: 6vw;
        font-size: 2.5vw;
        margin: 4vmin 0 0;
        border-radius: 8vmax;
        border: 0;
      }

      @include custom-responsive("xl xxl") {
        width: 18vmax;
        height: 6vmax;
        line-height: 6vmax;
        font-size: 2.5vw;
        margin: 6vmin 0 0;
        border-radius: 8vmax;
        box-shadow: 5px 5px 0px $secondary-blue;
        border: 0;

        &:hover {
          transform: translate(5px, 5px);
          box-shadow: 0px 0px 0px $secondary-blue;
        }
      }

      &:active {
        opacity: 0.8;
      }
    }
  }
}
</style>
