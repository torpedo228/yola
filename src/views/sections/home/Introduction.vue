<template>
  <div class="container" id="introduction">
    <SectionTitle title="園區介紹 Introduction" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="園區介紹logo" />

    <div class="portal-container">
      <div class="go-to-botton-left-wrap">
        <a href="./learning-corner">
          <div class="go-to-btn learning-corner">學習區</div>
        </a>
        <a href="./thematic-teaching">
          <div class="go-to-btn thematic-teaching">主題教學</div>
        </a>
        <a href="./">
          <div class="go-to-btn storybooks">繪本故事</div>
        </a>
      </div>
      <div class="introduction-panel">
        <img src="" alt="" />
      </div>
      <div class="go-to-botton-right-wrap">
        <a href="./nursery-rhymes-and-finger-rhymes">
          <div class="go-to-btn nursery-rhymes-and-finger-rhymes">
            兒歌&手指謠
          </div>
        </a>
        <a href="./physical-fitness-and-rhythm-movement">
          <div class="go-to-btn physical-fitness-and-rhythm-movement">
            體能&律動
          </div>
        </a>
        <a href="./my-land">
          <div class="go-to-btn my-land">我的樂園</div>
        </a>
      </div>
    </div>

    <div class="decoration">
      <img src="" alt="">
      <img src="" alt="">
      <img src="../../../assets/icons/characters/red-square.svg" alt="">
      <img src="" alt="">
      <img src="" alt="">
    </div>
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
  padding-top:100px;
  width: 100%;
  height: 1000px;

  div.portal-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;

    a {
      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }
    }

    div.introduction-panel {
      width: 500px;
      border: 10px solid;
      border-color: $primary-red $primary-blue $primary-green $primary-yellow;
      border-radius: 30px;
    }

    div.go-to-botton-left-wrap,
    div.go-to-botton-right-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      gap: 10px;
    }

    div.go-to-botton-right-wrap {}

    div.go-to-btn {
      line-height: 100px;
      width: 200px;
      height: 100px;
      border-radius: 30px;
      text-align: center;
      vertical-align: middle;
      font-size: $main-info;
      border: 5px solid;
    }

    div.learning-corner,
    div.my-land {
      border-color: $primary-red;
      background-color: $primary-white;

      &:hover {
        background-color: $primary-red;
        color: $primary-white;
      }
    }

    div.thematic-teaching,
    div.nursery-rhymes-and-finger-rhymes {
      border-color: $primary-blue;
      background-color: $primary-white;

      &:hover {
        background-color: $primary-blue;
        color: $primary-white;
      }
    }

    div.storybooks {
      border-color: $primary-yellow;
      background-color: $primary-white;

      &:hover {
        background-color: $primary-yellow;
        color: $primary-white;
      }
    }

    div.physical-fitness-and-rhythm-movement {
      border-color: $primary-green;
      background-color: $primary-white;

      &:hover {
        background-color: $primary-green;
        color: $primary-white;
      }
    }
  }
}
</style>
