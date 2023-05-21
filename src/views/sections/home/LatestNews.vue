<template>
  <div class="container" id="latest-news">
    <SectionTitle title="最新消息 Latest News" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="最新消息logo"
      id="latest-news-title" />

    <div class="slide-container">
      <div class="slide-page-wrap">
        <a href="./still-building">
          <div class="slide-page slide-page-left">
            <img class="side-img" src="../../../assets/images/home/latest-news/latest-news-2.svg" alt="" />
          </div>
        </a>
      </div>

      <div class="slide-page-wrap">
        <a href="./still-building">
          <div class="slide-page slide-page-left">
            <img class="side-img" src="../../../assets/images/home/latest-news/latest-news-2.svg" alt="" />
          </div>
        </a>
      </div>

      <div class="slide-page-wrap">
        <a href="./still-building">
          <div class="slide-page slide-page-center">
            <img class="main-img" src="../../../assets/images/home/latest-news/latest-news-1.svg" alt="" />
          </div>
        </a>
      </div>

      <div class="slide-page-wrap">
        <a href="./still-building">
          <div class="slide-page slide-page-right">
            <img class="side-img" src="../../../assets/images/home/latest-news/latest-news-3.svg" alt="" />
          </div>
        </a>
      </div>

      <div class="slide-page-wrap">
        <a href="./still-building">
          <div class="slide-page slide-page-right">
            <img class="side-img" src="../../../assets/images/home/latest-news/latest-news-3.svg" alt="" />
          </div>
        </a>
      </div>
    </div>

    <!-- <div class="slide-page"><img src="../../../assets/images/home/latest-news/latest-news-1.svg" alt="" /></div>

      <div class="slide-page2"><img src="../../../assets/images/home/latest-news/latest-news-2.svg" alt="" /></div> -->
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle },
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

  #latest-news-title {
    margin: 0;
  }

  div.slide-container {
    width: 100%;
    height: 70%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    div.slide-page-wrap {
      width: 50%;
      height: 80%;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      div.slide-page {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      div.slide-page-center {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 135%;

        img.main-img {
          width: 100%;
        }
      }

      div.slide-page-left {
        position: relative;
        right: -5%;
        

        img.side-img {
          width: 100%;
        }
      }

      div.slide-page-right {
        position: relative;
        left: -5%;

        img.side-img {
          width: 100%;
        }
      }
    }
  }
}
</style>
