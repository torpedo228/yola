<template>
  <div class="slide-outer">
    <div class="slide-container">
      <div v-for="(slidePage, slidePageNo) in slidePage" :key="slidePageNo" class="slide-page">
        <div class="slide-page-content" :style="makeAddOnStyle(slidePageNo)">
          <a :href="slidePage.href">
            <img :src="slidePage.imgSrc" alt="" />
          </a>
        </div>
        <!-- <button @click="moveTo(0)">page1</button>
        <button @click="moveTo(1)">page2</button>
        <button @click="moveTo(2)">page3</button> -->
      </div>

      <div class="button-wrap">
        <div class="prev" @click="prev(1)">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="next" @click="next(1)">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>

    <div class="pagination-wrap">
      <div class="page-1" :class="pageIsActive(0) ? 'page-red' : 'page-grey'" @click="moveTo(0)"></div>
      <div class="page-2" :class="pageIsActive(1) ? 'page-blue' : 'page-grey'" @click="moveTo(1)"></div>
      <div class="page-3" :class="pageIsActive(2) ? 'page-green' : 'page-grey'" @click="moveTo(2)"></div>
    </div>
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
  mounted() { },
  watch: {},
  methods: {
    next(stepNum) {
      this.curSlideNo = (this.curSlideNo + stepNum) % this.slidePage.length;
    },
    prev(stepNum) {
      this.curSlideNo =
        (this.curSlideNo + (this.slidePage.length - stepNum)) %
        this.slidePage.length;
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
    pageIsActive(slidePageNo) {
      return slidePageNo == this.curViewSlideNo;
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
div.slide-outer {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;

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

    div.button-wrap {
      position: relative;
      left: 50%;
      top: 50%;

      div.prev,
      div.next {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 5vw;
        height: 5vw;
        border-radius: $border-radius-circle;
        background-color: $primary-white;
        border: 0.5vw solid;
        cursor: pointer;

        i {
          font-size: 4vw;
          transform: translate(0.8vw, 0.5vw);

        }
      }

      div.prev {
        border-color: $primary-green;
        left: -26%;

        i {
          color: $primary-green;
        }

        &:hover {
          background-color: $primary-green;

          i {
            color: $primary-white;
          }
        }

        &:active {
          background-color: $primary-green;
          opacity: 0.8;

          i {
            color: $primary-white;
          }
        }
      }

      div.next {
        border-color: $primary-yellow;
        left: 26%;

        i {
          color: $primary-yellow;
        }

        &:hover {
          background-color: $primary-yellow;

          i {
            color: $primary-white;
          }
        }

        &:active {
          background-color: $primary-yellow;
          opacity: 0.8;

          i {
            color: $primary-white;
          }
        }
      }
    }
  }

  div.pagination-wrap {
    width: 100%;
    height: 2vw;
    position: absolute;
    left: 50%;
    bottom: 8vmin;

    div.page-1,
    div.page-2,
    div.page-3 {
      position: absolute;
      transform: translate(-50%, -50%);
      width: 2vw;
      height: 2vw;
      border-radius: $border-radius-circle;
      background-color: $primary-grey;
      cursor: pointer;

      &:hover {
        background-color: $secondary-grey;
      }
    }

    div.page-1 {
      left: -4vw;
    }

    div.page-2 {}

    div.page-3 {
      left: 4vw;
    }

    div.page-red {
      background-color: $primary-red;
    }

    div.page-green {
      background-color: $primary-green;
    }

    div.page-blue {
      background-color: $primary-blue;
    }

    div.page-grey {
      background-color: $primary-grey;
    }
  }
}
</style>
