<template>
  <div class="slide-container">
    <div
      v-for="(slidePage, slidePageNo) in slidePage"
      :key="slidePageNo"
      class="slide-page"
    >
      <div class="slide-page-content" :style="makeAddOnStyle(slidePageNo)">
        <a :href="slidePage.href">
          <img :src="slidePage.imgSrc" alt="" />
        </a>
      </div>
    </div>

    <button @click="prev(1)">prev</button>
    <button @click="next(1)">next</button>
    <button @click="moveTo(0)">page1</button>
    <button @click="moveTo(1)">page2</button>
    <button @click="moveTo(2)">page3</button>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      curSlideNo: 0,
      slideMeta: [
        {
          imgSrc: require("@/assets/images/home/latest-news/latest-news-1.svg"),
          href: "./still-building",
        },
        {
          imgSrc: require("@/assets/images/home/latest-news/latest-news-2.svg"),
          href: "./still-building",
        },
        {
          imgSrc: require("@/assets/images/home/latest-news/latest-news-3.svg"),
          href: "./still-building",
        },
      ],
    };
  },
  computed: {
    curViewSlideNo() {
      return this.curSlideNo % this.slideMeta.length;
    },
    slidePage() {
      let basicSlideLength = this.slideMeta.length;
      let viewSlideLength = getViewSlideLength(basicSlideLength);
      let slidePageArr = new Array(viewSlideLength);
      for (var i = 0; i < viewSlideLength; i++) {
        slidePageArr[i] = {
          imgSrc: this.slideMeta[(i + 3) % basicSlideLength].imgSrc,
          href: this.slideMeta[(i + 3) % basicSlideLength].href,
        };
      }
      return slidePageArr;

      function getViewSlideLength(basicSlideLength) {
        var viewSlideLength = basicSlideLength;
        while (viewSlideLength < 7) {
          viewSlideLength += basicSlideLength;
        }
        return viewSlideLength;
      }
    },
  },
  mounted() {},
  watch: {},
  methods: {
    next(stepNum) {
      this.curSlideNo = (this.curSlideNo + stepNum) % this.slidePage.length;
    },
    prev(stepNum) {
      this.curSlideNo =
        (this.curSlideNo + (this.slidePage.length - stepNum)) % this.slidePage.length;
    },
    moveTo(viewSlideNo) {
      var gap = this.curViewSlideNo - viewSlideNo;
      var moveFunc = gap > 0 ? this.prev : this.next;
      moveFunc(Math.abs(gap));
    },
    makeAddOnStyle(slidePageNo) {
      var activeOpacityRatio = 1;
      var inactiveOpacityRatio = 0.7;
      var inactiveScale = 0.6;
      var mainOffset =
        ((slidePageNo + this.curSlideNo) % this.slidePage.length) - 3;
      var isActive = mainOffset == 0;
      var isHeadOrTail = mainOffset < -2 || mainOffset > 2;

      return {
        opacity: isActive ? activeOpacityRatio : inactiveOpacityRatio,
        transform:
          "translate(-50%, -50%)" +
          (isActive ? "" : "scale(" + inactiveScale + ")"),
        left: offsetedLeft(mainOffset),
        transition: isHeadOrTail ? "" : "all 0.5s ease-out",
        pointerEvents: isActive ? "" : "none",
      };

      function offsetedLeft(mainOffset) {
        // $main-offset: ...-2,-1,0,1,2...
        // $adjust-offset: 15%;
        // calc((calc(100% - #{$adjust-offset}) * #{$main-offset}) + 50%)
        return "calc((calc(100% - 15%) * " + -1 * mainOffset + ") + 50%)";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";
$page-width: 50%;
// $center-offset: 50%;

// @mixin offseted-left($main-offset: 0) {
//   $adjust-offset: 15%;
//   left: calc((calc(100% - #{$adjust-offset}) * #{$main-offset}) + 50%);
// }

div.slide-container {
  position: relative;
  width: 100%;
  height: 80%;
  overflow: hidden;

  div.slide-page {
    width: $page-width;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    div.slide-page-content {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    // div.active {
    //   @include offseted-left(0);
    //   transform: translate(-50%, -50%);
    // }

    // div.prev {
    //   @include offseted-left(-1);
    //   opacity: 0.7;
    //   transform: translate(-50%, -50%) scale(0.6);
    // }

    // div.prev-prev {
    //   @include offseted-left(-2);
    //   opacity: 0.7;
    //   transform: translate(-50%, -50%) scale(0.6);
    // }

    // div.next {
    //   @include offseted-left(1);
    //   opacity: 0.7;
    //   transform: translate(-50%, -50%) scale(0.6);
    // }

    // div.next-next {
    //   @include offseted-left(2);
    //   opacity: 0.7;
    //   transform: translate(-50%, -50%) scale(0.6);
    // }

    // div.outside {
    //   @include offseted-left(3);
    //   opacity: 0;
    //   transform: translate(-50%, -50%) scale(0.6);
    // }
  }
}
</style>
