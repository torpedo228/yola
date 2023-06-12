<template>
  <div class="slide-outer">
    <div class="slide-container">
      <div
        v-for="(slidePage, slidePageNo) in slidePage"
        :key="slidePageNo"
        class="slide-page"
      >
        <div class="slide-page-content" :style="makeAddOnStyle(slidePageNo)">
          <!-- <a :href="slidePage.href"> -->
          <a>
            <img
              class="no-draggable grabable"
              :class="slideControl.isGragging ? 'grabbing' : 'grabable'"
              :src="slidePage.imgSrc"
              alt=""
              @touchstart="handleTouchStart"
              @touchmove="handleTouchMove"
              @touchend="handleTouchEnd"
              @mousedown="handleMousedown"
              @mousemove="handleMousemove"
              @mouseup="handleMouseup"
              @mouseleave="handleMouseleave"
            />
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

      <div class="pagination-wrap">
        <div
          class="page-1"
          :class="pageIsActive(0) ? 'page-red' : 'page-grey'"
          @click="moveTo(0)"
        ></div>
        <div
          class="page-2"
          :class="pageIsActive(1) ? 'page-blue' : 'page-grey'"
          @click="moveTo(1)"
        ></div>
        <div
          class="page-3"
          :class="pageIsActive(2) ? 'page-green' : 'page-grey'"
          @click="moveTo(2)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      slideControl: {
        isGragging: false,
        mouseDownLocation: null,
        touchStartLocation: null,
        timer: {
          instance: null,
          countdownMs: 4000,
        },
      },
      curSlideNo: 0,
      // 圖片比例5:3
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
      swipe: {
        flag: false,
        threshold: 60,
        start: {
          x: 0,
        },
        current: {
          x: 0,
        },
        distance: {
          x: 0,
        },
      },
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
  mounted() {
    this.turnOnAutoSlide();
  },
  beforeUnmount() {
    this.turnOffAutoSlide();
  },
  watch: {},
  methods: {
    turnOnAutoSlide() {
      let vm = this;
      vm.slideControl.timer.instance = setInterval(() => {
        vm.next(1);
      }, vm.slideControl.timer.countdownMs);
    },
    turnOffAutoSlide() {
      let vm = this;
      clearInterval(vm.slideControl.timer.instance);
    },
    handleTouchStart(event) {
      this.slideControl.isGragging = true;
      this.slideControl.touchStartLocation = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      if (!this.slideControl.isGragging) return;
      var offset =
        event.touches[0].clientX - this.slideControl.touchStartLocation;
      var triggerDistance = 20;
      if (offset > triggerDistance) {
        this.prev(1);
        this.slideControl.isGragging = false;
      } else if (offset < -triggerDistance) {
        this.next(1);
        this.slideControl.isGragging = false;
      }
    },
    handleTouchEnd() {
      this.slideControl.isGragging = false;
    },
    handleMousedown(event) {
      this.slideControl.isGragging = true;
      this.slideControl.mouseDownLocation = event.clientX;
    },
    handleMousemove(event) {
      if (!this.slideControl.isGragging) return;
      var offset = event.clientX - this.slideControl.mouseDownLocation;
      var triggerDistance = 20;
      if (offset > triggerDistance) {
        this.prev(1);
        this.slideControl.isGragging = false;
      } else if (offset < -triggerDistance) {
        this.next(1);
        this.slideControl.isGragging = false;
      }
    },
    handleMouseup() {
      this.slideControl.isGragging = false;
    },
    handleMouseleave() {
      this.slideControl.isGragging = false;
    },
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

  overflow: hidden;

  @include custom-responsive("xs") {
    height: calc(45vw * 2);

    @include custom-responsive("sm md lg") {
      height: 46vw;
    }

    @include custom-responsive("xl xxl") {
      height: 45vw;
    }

    div.slide-container {
      position: relative;
      width: 100%;
      height: 80%;
      overflow: hidden;

      div.slide-page {
        @include custom-responsive("xs") {
          width: calc($page-width * 1.75);
        }

        @include custom-responsive("sm md lg") {
          width: $page-width;
        }

        @include custom-responsive("xl xxl") {
          width: $page-width;
        }

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

      div.button-wrap {
        position: relative;
        left: 50%;
        top: 50%;

        div.prev,
        div.next {
          position: absolute;
          transform: translate(-50%, -50%);

          border-radius: $border-radius-circle;
          background-color: $primary-white;

          cursor: pointer;

          @include custom-responsive("xs") {
            width: 7vw;
            height: 7vw;
            border: 1vw solid;
          }

          @include custom-responsive("sm md lg") {
            width: 5vw;
            height: 5vw;
            border: 0.5vw solid;
          }

          @include custom-responsive("xl xxl") {
            width: 5vw;
            height: 5vw;
            border: 0.5vw solid;
          }

          i {
            transform: translate(0.8vw, 0.5vw);

            @include custom-responsive("xs") {
              font-size: 6vw;
            }

            @include custom-responsive("sm md lg") {
              font-size: 4vw;
            }

            @include custom-responsive("xl xxl") {
              font-size: 4vw;
            }
          }
        }

        div.prev {
          border-color: $primary-green;

          @include custom-responsive("xs") {
            left: -45%;
          }

          @include custom-responsive("sm md lg") {
            left: -26%;
          }

          @include custom-responsive("xl xxl") {
            left: -26%;
          }

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

          @include custom-responsive("xs") {
            left: 45%;
          }

          @include custom-responsive("sm md lg") {
            left: 26%;
          }

          @include custom-responsive("xl xxl") {
            left: 26%;
          }

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
      width: 20vw;
      position: relative;
      left: 50%;
      top: 50%;

      display: flex;
      justify-content: space-evenly;
      align-items: center;

      @include custom-responsive("xs") {
        transform: translate(-50%, calc(-50% + 30vw));
      }

      @include custom-responsive("sm md lg") {
        transform: translate(-50%, calc(-50% + 17vw));
      }

      @include custom-responsive("xl xxl") {
        transform: translate(-50%, calc(-50% + 17vw));
      }

      div.page-1,
      div.page-2,
      div.page-3 {
        display: inline-block;
        width: 2vw;
        height: 2vw;
        border-radius: $border-radius-circle;
        background-color: $primary-grey;
        cursor: pointer;
        margin: auto;

        @include custom-responsive("xs") {
          width: 4vw;
          height: 4vw;
        }

        @include custom-responsive("sm md lg") {
          width: 2vw;
          height: 2vw;
        }

        @include custom-responsive("xl xxl") {
          width: 2vw;
          height: 2vw;

          &:hover {
            background-color: $secondary-grey;
          }
        }

        &:hover {
          @include custom-responsive("xs") {}

          @include custom-responsive("sm md lg") {}

          @include custom-responsive("xl xxl") {
            background-color: $secondary-grey;
          }
        }
      }

      div.page-1 {
        left: -4vw;
      }

      div.page-2 {
      }

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
}

.no-draggable {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.grabable {
  cursor: grab;
  cursor: -webkit-grab;
}

.grabbing {
  cursor: grabbing;
  cursor: -webkit-grabbing;
}
</style>
