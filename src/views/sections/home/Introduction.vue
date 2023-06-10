<template>
  <div class="introduction-container" id="introduction">
    <div class="sub-section-title">
      <SubSectionTitle title="園區介紹 Introduction" :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
        alt="園區介紹icon" />
    </div>

    <div class="sub-section-title-mobile">
      <SubSectionTitle title="園區探索 Explore" :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')" alt="園區探索icon" />
    </div>

    <div class="portal-container">
      <div class="go-to-bottom-left-wrap">
        <a @click="jumpTo('learning-corner')" @mouseover="showLearningCorner()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="' learning-corner' + (isLearningCornerActive ? '-active' : '')
            ">
            學習區
          </div>
        </a>

        <a @click="jumpTo('thematic-teaching')" @mouseover="showThematicTeaching()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="' thematic-teaching' + (isThematicTeachingActive ? '-active' : '')
            ">
            主題教學
          </div>
        </a>

        <a @click="jumpTo('storybooks')" @mouseover="showStorybooks()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="' storybooks' + (isStorybooksActive ? '-active' : '')">
            繪本故事
          </div>
        </a>
      </div>
      <div class="introduction-panel">
        <div class="intro-card" :class="sectionMeta[currentSectionNo].name + '-intro-card'">
          <div class="title-wrap">
            <img :src="sectionMeta[currentSectionNo].logo" alt="" />

            <h3>{{ sectionMeta[currentSectionNo].title }}</h3>
          </div>
          <p>
            {{ sectionMeta[currentSectionNo].content }}
          </p>
          <img :class="'icon-' + sectionMeta[currentSectionNo].iconPosition" :src="require('@/assets/logo/yola-icon.svg')"
            alt="" />
        </div>
      </div>

      <div class="go-to-bottom-right-wrap">
        <a @click="jumpTo('nursery-rhymes-and-finger-rhymes')" @mouseover="showNurseryRhymesAndFingerRhymes()"
          @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="'nursery-rhymes-and-finger-rhymes' +
            (isNurseryRhymesAndFingerRhymesActive ? '-active' : '')
            ">
            兒歌&手指謠
          </div>
        </a>
        <a @click="jumpTo('physical-fitness-and-rhythm-movement')" @mouseover="showPhysicalFitnessAndRhythmMovement()"
          @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="'physical-fitness-and-rhythm-movement' +
            (isPhysicalFitnessAndRhythmMovementActive ? '-active' : '')
            ">
            體能&律動
          </div>
        </a>
        <a @click="jumpTo('my-land')" @mouseover="showMyLand()" @mouseleave="turnOnAutoSlide()">
          <div class="go-to-btn" :class="'my-land' + (isMyLandActive ? '-active' : '')">
            我的樂園
          </div>
        </a>
      </div>
    </div>

    <div class="portal-container-mobile">
      <img @click="jumpTo('learning-corner')" :src="require('@/assets/images/home/explore/learning-corner.svg')" alt="" />

      <img @click="jumpTo('nursery-rhymes-and-finger-rhymes')" :src="require('@/assets/images/home/explore/nursery-rhymes-and-finger-rhymes.svg')
        " alt="" />
      <img @click="jumpTo('thematic-teaching')" :src="require('@/assets/images/home/explore/thematic-teaching.svg')"
        alt="" />

      <img @click="jumpTo('physical-fitness-and-rhythm-movement')" :src="require('@/assets/images/home/explore/physical-fitness-and-rhythm-movement.svg')
        " alt="" />
      <img @click="jumpTo('storybooks')" :src="require('@/assets/images/home/explore/storybooks.svg')" alt="" />

      <img @click="jumpTo('my-land')" :src="require('@/assets/images/home/explore/my-land.svg')" alt="" />
    </div>

    <div class="decoration">
      <img class="all-characters" :src="require('@/assets/characters/all-characters.svg')" alt="" />
      <img class="rainbow-stripe" :src="require('@/assets/decorations/home/introduction-bottom-stripe.svg')
        " alt="" />
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/title/SubSectionTitle.vue";

export default {
  components: { SubSectionTitle },
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
          logo: require("@/assets/icons/section/learning-corner/red.svg"),
          content: `目前開放八大區，分別為語文區、扮演區、美勞區、數學區、積木區、烹飪區、組合建構區以及鬆散素材區，每ㄧ區備有各式素材的介紹、玩法、範例圖等等可供參考使用，並網羅主題相關好站，提供使用者延伸參考。`,
          iconPosition: "right",
        },
        {
          name: "thematic-teaching",
          title: "主題教學",
          logo: require("@/assets/icons/section/thematic-teaching.svg"),
          content: `目前開放三大功能，分別為主題教學設計、教學活動參考及主題發想牆，提供使用者在規劃課程、設計活動時的參考管道，也能透過分享大會專區參閱他人想法及提供各種教學點子。`,
          iconPosition: "left",
        },
        {
          name: "storybooks",
          title: "繪本故事",
          logo: require("@/assets/icons/section/storybooks.svg/"),
          content: `提供授權之繪本電子檔讓使用者下載、便於教學，並整理網路上之影音資源供使用者參考，不定期舉辦主題書展讓使用者對繪本有更近一步的認識。`,
          iconPosition: "right",
        },
        {
          name: "nursery-rhymes-and-finger-rhymes",
          title: "兒歌&手指謠",
          logo: require("@/assets/icons/section/nursery-rhymes-and-finger-rhymes.svg"),
          content: ` 整理各式熱門兒歌，不管是懷舊、經典、最新最流行的歌曲都能這裡找的到。此外，本區也收集了上百首班級經營必備手指謠，其中更涵蓋手指謠念詞與教學影片，供老師與家長隨時取用隨時取用參考。`,
          iconPosition: "left",
        },
        {
          name: "physical-fitness-and-rhythm-movement",
          title: "體能&律動",
          logo: require("@/assets/icons/section/physical-fitness-and-rhythm-movement.svg"),
          content: `網羅多樣體能器材與提供相關活動，並統整熱門律動歌曲與教學影片供使用者參考。`,
          iconPosition: "right",
        },
        {
          name: "my-land",
          title: "我的樂園",
          logo: require("@/assets/icons/section/my-land.svg"),
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
    jumpTo(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

@mixin btn-active-effect() {
  transition: all 0.1s;
}

div.introduction-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  @include vm();
  gap: 3vh;

  @include custom-responsive("xs") {
    padding-top: 18vmax;
  }

  @include custom-responsive("sm md lg") {
    padding-top: 18vmin;
  }

  @include custom-responsive("xl xxl") {
    padding-top: 18vmin;
  }



  div.sub-section-title {
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

  div.sub-section-title-mobile {
    @include custom-responsive("xs") {
      font-size: 10vw;
      display: block;
    }

    @include custom-responsive("sm md lg") {
      display: none;
    }

    @include custom-responsive("xl xxl") {
      display: none;
    }
  }

  div.portal-container {
    width: 80vmax;
    gap: 1vw;

    a {
      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }
    }

    div.introduction-panel {
      padding: 2vw 3vw 0;
      width: 40vw;
      height: 25vw;
      border: 1vw solid;
      border-color: $primary-red $primary-blue $primary-green $primary-yellow;
      border-radius: 2vw;
      box-sizing: border-box;

      div.intro-card {
        position: relative;
        width: 100%;
        height: 100%;

        div.title-wrap {
          display: flex;
          justify-content: center;
          gap: 10px;

          img {
            width: 3vw;
          }

          h3 {
            margin: 0.5vw 0;
            font-size: 2.5vw;
          }
        }

        p {
          font-size: 1.5vw;
          line-height: 1.5;
        }

        img.icon-right,
        img.icon-left {
          opacity: 0.5;
          width: 10vw;
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

    div.go-to-bottom-left-wrap,
    div.go-to-bottom-right-wrap {
      @include vm();
      gap: 1vw;
    }

    div.go-to-btn {
      line-height: 6vw;
      width: 11vw;
      height: 6vw;
      border-radius: 2vw;
      text-align: center;
      vertical-align: middle;
      font-size: 1.75vw;
      border: 0.5vw solid;

      &:active {
        opacity: 0.7;
      }
    }

    div.learning-corner,
    div.my-land {
      border-color: $primary-red;
      background-color: $primary-white;
      @include btn-active-effect();

      &:hover {
        background-color: $primary-red;
        color: $primary-white;
      }
    }

    div.learning-corner-active,
    div.my-land-active {
      border: 0.5vw solid $primary-red;
      background-color: $primary-red;
      color: $primary-white;
      @include btn-active-effect();
    }

    div.thematic-teaching,
    div.nursery-rhymes-and-finger-rhymes {
      border-color: $primary-blue;
      background-color: $primary-white;
      @include btn-active-effect();

      &:hover {
        background-color: $primary-blue;
        color: $primary-white;
      }
    }

    div.thematic-teaching-active,
    div.nursery-rhymes-and-finger-rhymes-active {
      border: 0.5vw solid $primary-blue;
      background-color: $primary-blue;
      color: $primary-white;
      @include btn-active-effect();
    }

    div.storybooks {
      border-color: $primary-yellow;
      background-color: $primary-white;
      @include btn-active-effect();

      &:hover {
        background-color: $primary-yellow;
        color: $primary-white;
      }
    }

    div.storybooks-active {
      border: 0.5vw solid $primary-yellow;
      background-color: $primary-yellow;
      color: $primary-white;
      @include btn-active-effect();
    }

    div.physical-fitness-and-rhythm-movement {
      border-color: $primary-green;
      background-color: $primary-white;
      @include btn-active-effect();

      &:hover {
        background-color: $primary-green;
        color: $primary-white;
      }
    }

    div.physical-fitness-and-rhythm-movement-active {
      border: 0.5vw solid $primary-green;
      background-color: $primary-green;
      color: $primary-white;
      @include btn-active-effect();
    }

    @include custom-responsive("xs") {
      display: none;
    }

    @include custom-responsive("sm md lg") {
      @include hm();
    }

    @include custom-responsive("xl xxl") {
      @include hm();
    }
  }
}

div.portal-container-mobile {
  width: 100%;
  padding-left: 12vw;

  img {
    cursor: pointer;
    width: 40vw;
    display: inline-block;
    margin: 2vw;
  }

  @include custom-responsive("xs") {
    display: block;
  }

  @include custom-responsive("sm md lg") {
    display: none;
  }

  @include custom-responsive("xl xxl") {
    display: none;
  }
}

div.decoration {

  @include vm();

  img.rainbow-stripe {
    width: 100vw;
  }

  img.all-characters {
    @include custom-responsive("xs") {
      width: 90vmin;
    }

    @include custom-responsive("sm md lg") {
      width: 90vmin;
    }

    @include custom-responsive("xl xxl") {
      width: 100vmin;
    }
  }
}
</style>
