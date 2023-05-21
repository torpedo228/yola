<template>
  <div class="container" id="introduction">
    <SectionTitle title="園區介紹 Introduction" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="園區介紹logo" />

    <div class="decoration">
      <img class="all-characters" src="../../../assets/icons/characters/all-characters.svg" alt="" />
      <img class="rainbow-stripe" src="../../../assets/decorations/intruduction.svg" alt="" />
    </div>

    <div class="portal-container">
      <div class="go-to-botton-left-wrap">
        <a href="./learning-corner" @mouseover="showLearningCorner()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="' learning-corner' + (isLearningCornerActive ? '-active' : '')
            ">
            學習區
          </div>
        </a>

        <a href="./thematic-teaching" @mouseover="showThematicTeaching()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="' thematic-teaching' + (isThematicTeachingActive ? '-active' : '')
            ">
            主題教學
          </div>
        </a>

        <a href="./storybooks" @mouseover="showStorybooks()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="' storybooks' + (isStorybooksActive ? '-active' : '')">
            繪本故事
          </div>
        </a>
      </div>
      <div class="introduction-panel">
        <div class="intro-card" :class="sectionMeta[currentSectionNo].name + '-intro-card'">
          <div class="title-wrap">
            <img :src="sectionMeta[currentSectionNo].logo1" alt="" />

            <h3>{{ sectionMeta[currentSectionNo].title }}</h3>

            <img v-if="sectionMeta[currentSectionNo].logo2 !== ''" :src="sectionMeta[currentSectionNo].logo2" alt="" />
          </div>
          <p>
            {{ sectionMeta[currentSectionNo].content }}
          </p>
          <img :class="'icon-' + sectionMeta[currentSectionNo].iconPosition"
            src="../../../assets/icons/logo/yola-icon.svg" alt="" />
        </div>
      </div>

      <div class="go-to-botton-right-wrap">
        <a href="./nursery-rhymes-and-finger-rhymes" @mouseover="showNurseryRhymesAndFingerRhymes()"
          @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="'nursery-rhymes-and-finger-rhymes' +
            (isNurseryRhymesAndFingerRhymesActive ? '-active' : '')
            ">
            兒歌&手指謠
          </div>
        </a>
        <a href="./physical-fitness-and-rhythm-movement" @mouseover="showPhysicalFitnessAndRhythmMovement()"
          @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="'physical-fitness-and-rhythm-movement' +
            (isPhysicalFitnessAndRhythmMovementActive ? '-active' : '')
            ">
            體能&律動
          </div>
        </a>
        <a href="./my-land" @mouseover="showMyLand()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="'my-land' + (isMyLandActive ? '-active' : '')">
            我的樂園
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle },
  data() {
    return {
      timer: {
        instance: null,
        countdownMs: 2000,
      },
      currentSectionNo: 0,
      sectionMeta: [
        {
          name: "learning-corner",
          title: "學習區",
          logo1: require("@/assets/icons/logo/learning-corner-logo-red.svg"),
          logo2: "",
          content: `目前開放八大區，分別為語文區、扮演區、美勞區、數學區、積木區、烹飪區、組合建構區以及鬆散素材區，每ㄧ區備有各式素材的介紹、玩法、範例圖等等可供參考使用，並網羅主題相關好站，提供使用者延伸參考。`,
          iconPosition: "right",
        },
        {
          name: "thematic-teaching",
          title: "主題教學",
          logo1: require("@/assets/icons/logo/thematic-teaching-logo.svg"),
          logo2: "",
          content: `目前開放三大功能，分別為主題教學設計、教學活動參考及主題發想牆，提供使用者在規劃課程、設計活動時的參考管道，也能透過分享大會專區參閱他人想法及提供各種教學點子。`,
          iconPosition: "left",
        },
        {
          name: "storybooks",
          title: "繪本故事",
          logo1: require("@/assets/icons/logo/storybooks-logo.svg"),
          logo2: "",
          content: `提供授權之繪本電子檔讓使用者下載、便於教學，並整理網路上之影音資源供使用者參考，不定期舉辦主題書展讓使用者對繪本有更近一步的認識。`,
          iconPosition: "right",
        },
        {
          name: "nursery-rhymes-and-finger-rhymes",
          title: "兒歌&手指謠",
          logo1: require("@/assets/icons/logo/nursery-rhymes-logo.svg"),
          logo2: require("@/assets/icons/logo/finger-rhymes-logo.svg"),
          content: ` 整理各式熱門兒歌，不管是懷舊、經典、最新最流行的歌曲都能這裡找的到。此外，本區也收集了上百首班級經營必備手指謠，其中更涵蓋手指謠念詞與教學影片，供老師與家長隨時取用隨時取用參考。`,
          iconPosition: "left",
        },
        {
          name: "physical-fitness-and-rhythm-movement",
          title: "體能&律動",
          logo1: require("@/assets/icons/logo/physical-fitness-logo.svg"),
          logo2: require("@/assets/icons/logo/rhythm-and-movement-logo.svg"),
          content: `網羅多樣體能器材與提供相關活動，並統整熱門律動歌曲與教學影片供使用者參考。`,
          iconPosition: "right",
        },
        {
          name: "my-land",
          title: "我的樂園",
          logo1: require("@/assets/icons/logo/my-land.svg"),
          logo2: "",
          content: `提供使用者一個管理收藏與自訂風格的個人專區，也可以拜訪他人的樂園欣賞他人公開的收藏資訊。`,
          iconPosition: "left",
        },
      ],
    };
  },
  computed: {
    isLearningCornerActive() {
      return this.sectionMeta[this.currentSectionNo].name == "learning-corner";
    },
    isThematicTeachingActive() {
      return (
        this.sectionMeta[this.currentSectionNo].name == "thematic-teaching"
      );
    },
    isStorybooksActive() {
      return this.sectionMeta[this.currentSectionNo].name == "storybooks";
    },
    isNurseryRhymesAndFingerRhymesActive() {
      return (
        this.sectionMeta[this.currentSectionNo].name ==
        "nursery-rhymes-and-finger-rhymes"
      );
    },
    isPhysicalFitnessAndRhythmMovementActive() {
      return (
        this.sectionMeta[this.currentSectionNo].name ==
        "physical-fitness-and-rhythm-movement"
      );
    },
    isMyLandActive() {
      return this.sectionMeta[this.currentSectionNo].name == "my-land";
    },
  },
  mounted() {
    this.turnOnAutoSlide();
  },
  beforeUnmount() {
    this.turnOffAutoSlide();
  },
  methods: {
    showLearningCorner() {
      this.showSection(0);
    },
    showThematicTeaching() {
      this.showSection(1);
    },
    showStorybooks() {
      this.showSection(2);
    },
    showNurseryRhymesAndFingerRhymes() {
      this.showSection(3);
    },
    showPhysicalFitnessAndRhythmMovement() {
      this.showSection(4);
    },
    showMyLand() {
      this.showSection(5);
    },

    showSection(sectionNo) {
      this.currentSectionNo = sectionNo;
      this.turnOffAutoSlide();
    },
    nextSection() {
      this.currentSectionNo =
        (this.currentSectionNo + 1) % this.sectionMeta.length;
    },
    turnOnAutoSlide() {
      this.timer.instance = setInterval(
        this.nextSection,
        this.timer.countdownMs
      );
    },
    turnOffAutoSlide() {
      clearInterval(this.timer.instance);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;
  height: 570px;
  margin: 50px 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.portal-container {
    margin-top: 20px;
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
      padding: 10px 20px;
      width: 450px;
      height: 230px;
      border: 10px solid;
      border-color: $primary-red $primary-blue $primary-green $primary-yellow;
      border-radius: 30px;


      div.intro-card {
        position: relative;
        width: 100%;
        height: 100%;

        div.title-wrap {
          display: flex;
          justify-content: center;
          gap: 10px;

          img {
            width: $h3;
          }

          h3 {
            margin: 10px 0;
            font-size: $h3;
          }
        }

        p {
          font-size: $sub-info;
        }

        img.icon-right,
        img.icon-left {
          opacity: 0.3;
          width: 100px;
          position: absolute;
          bottom: 0;
        }

        img.icon-right {
          right: 5%;
        }

        img.icon-left {
          left: 5%;
        }
      }
    }

    div.go-to-botton-left-wrap,
    div.go-to-botton-right-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      gap: 10px;
    }



    div.go-to-btn {
      line-height: 70px;
      width: 150px;
      height: 70px;
      border-radius: 20px;
      text-align: center;
      vertical-align: middle;
      font-size: $main-info;
      border: 5px solid;

      &:active {
        opacity: 0.7;
      }
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

    div.learning-corner-active,
    div.my-land-active {
      border: 5px solid $primary-red;
      background-color: $primary-red;
      color: $primary-white;
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

    div.thematic-teaching-active,
    div.nursery-rhymes-and-finger-rhymes-active {
      border: 5px solid $primary-blue;
      background-color: $primary-blue;
      color: $primary-white;
    }

    div.storybooks {
      border-color: $primary-yellow;
      background-color: $primary-white;

      &:hover {
        background-color: $primary-yellow;
        color: $primary-white;
      }
    }

    div.storybooks-active {
      border: 5px solid $primary-yellow;
      background-color: $primary-yellow;
      color: $primary-white;
    }

    div.physical-fitness-and-rhythm-movement {
      border-color: $primary-green;
      background-color: $primary-white;

      &:hover {
        background-color: $primary-green;
        color: $primary-white;
      }
    }

    div.physical-fitness-and-rhythm-movement-active {
      border: 5px solid $primary-green;
      background-color: $primary-green;
      color: $primary-white;
    }
  }

  div.decoration {
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;

    img.rainbow-stripe{
      height: 50px;
    }

    img.all-characters {
      height: 300%;
      position: absolute;
      bottom: 25%;
    }
  }
}
</style>
