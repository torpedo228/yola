<template>
  <div class="art-portal-container" id="portal">
    <SectionTitle title="美勞區 Art" :imgSrc="require('@/assets/icons/logo/learning-corner-logo-red.svg')" alt="美勞區logo" />

    <div class="portal-container">
      <div class="portal-top">
        <div class="outter">
          <a href="./art/drawings" id="drawings">
            <div class="portal-item drawings">繪畫</div>
          </a>
        </div>

        <div class="outter">
          <a href="/still-building" id="paper-work">
            <div class="portal-item paper-work">紙工</div>
          </a>
        </div>

        <div class="outter">
          <a href="/still-building" id="kneading">
            <div class="kneading">
              <div class="triangle triangle1"></div>
              <div class="triangle triangle2"></div>
              <div class="triangle triangle3"></div>
              <div class="triangle triangle4"></div>
              <p>捏塑</p>
            </div>
          </a>
        </div>
      </div>
      <div class="portal-bottom">
        <div class="outter">
          <a href="/still-building" id="weaving">
            <div class="weaving">
              <div class="triangle triangle1"></div>
              <div class="triangle triangle2"></div>
              <div class="triangle triangle3"></div>
              <div class="triangle triangle4"></div>
              <p>編織</p>
            </div>
          </a>
        </div>

        <div class="outter">
          <a href="/still-building" id="multi-material-creation">
            <div class="portal-item multi-material-creation">多元材料創作</div>
          </a>
        </div>

        <div class="outter">
          <a href="/still-building" id="recycle-material-creation">
            <div class="portal-item recycle-material-creation">
              回收材料創作
            </div>
          </a>
        </div>
      </div>
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

@mixin heartbeat() {
  animation-name: heartbeat;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }

    25% {
      transform: scale(1.1);
    }

    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(0.8);
    }

    100% {
      transform: scale(1);
    }
  }
}

div.outter {
  position: relative;
  width: 250px;
  height: 250px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    &:hover {
      @include heartbeat();
    }
  }
}

div.art-portal-container {
  width: 100%;
  height: 100vh;
  margin-top: 80px;
  position: relative;

  div.portal-container {
    margin: -20px 0 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    div.portal-top,
    div.portal-bottom {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      a {
        width: 150px;
        height: 150px;
        display: block;
        border: 25px solid;

        &:link {
          color: $primary-black;
        }

        &:visited {
          color: $primary-black;
        }

        div.portal-item {
          text-align: center;
          line-height: 140px;
          border: 5px solid;
          outline: 10px solid $primary-white;
          color: $primary-black;
          font-size: $h3;

        }
      }

      a#drawings {
        border-radius: $border-radius-circle;
        border-color: $primary-yellow;

        div.drawings {
          border-radius: $border-radius-circle;
          border-color: $primary-yellow;
        }
      }

      a#paper-work {
        border-radius: 20px;
        border-color: $primary-red;

        div.paper-work {
          border-radius: 10px;
          border-color: $primary-red;
        }
      }

      a#kneading,
      a#weaving {
        border-radius: 30px;
        border-color: $primary-blue;
        border-width: 0 75px 150px 75px;
        display: block;
        position: relative;
        border: 0;
        margin-left: 25px;

        &:hover {
          @include heartbeat();
        }
      }

      a#kneading {}

      a#weaving {}

      div.kneading,
      div.weaving {
        .triangle {
          position: relative;
          text-align: left;

          &::before,
          &::after {
            content: "";
            position: absolute;
            background-color: inherit;
          }
        }

        .triangle1 {
          position: relative;

          background-color: $primary-white;

          transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
          width: 85px;
          height: 85px;
          border-top-right-radius: 30%;
          border-bottom-left-radius: 30%;
          border: 20px solid $primary-blue;

          &::before,
          &::after {
            width: 85px;
            height: 85px;
            border-top-right-radius: 30%;
            border-bottom-left-radius: 30%;
            border: 20px solid $primary-blue;
          }

          &::before {
            transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(15.75%, -50.25%);
          }

          &::after {
            transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%, 15.75%);
          }
        }

        .triangle2 {
          position: absolute;
          top: 12%;
          left: 12%;
          border: 10px solid $primary-white;

          background-color: $primary-blue;
          transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
          width: 70px;
          height: 70px;
          border-top-right-radius: 20%;
          border-bottom-left-radius: 20%;

          &::before,
          &::after {
            width: 85px;
            height: 85px;
            border-top-right-radius: 20%;
            border-bottom-left-radius: 30%;

            border: 10px solid $primary-white;
          }

          &::before {
            transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(9.25%, -50.25%);
          }

          &::after {
            transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%, 23.75%);
          }
        }

        .triangle3 {
          position: absolute;
          top: 21%;
          left: 13.5%;
          border: 13px solid $primary-blue;

          transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
          width: 60px;
          height: 60px;
          border-top-right-radius: 10%;
          border-bottom-left-radius: 20%;

          &::before,
          &::after {
            width: 60px;
            height: 60px;
            border-top-right-radius: 20%;
            border-bottom-left-radius: 30%;

            border: 13px solid $primary-blue;
          }

          &::before {
            transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(14.75%, -50%);
          }

          &::after {
            transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%, 14.75%);
          }
        }

        .triangle4 {
          position: absolute;
          top: 25.25%;
          left: 15.25%;

          background-color: $primary-white;
          transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
          width: 80px;
          height: 80px;
          border-top-right-radius: 10%;
          border-bottom-left-radius: 20%;

          &::before,
          &::after {
            width: 80px;
            height: 80px;
            border-top-right-radius: 20%;
            border-bottom-left-radius: 30%;
          }

          &::before {
            transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0%, -46%);
          }

          &::after {
            transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(46%, 0%);
          }
        }

        p {
          font-size: $h3;
          position: absolute;
          top: 45%;
          left: 42%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  div.portal-bottom {
    a#multi-material-creation {
      border-radius: 100px 100px 0 0;
      border-color: $primary-green;

      div.multi-material-creation {
        border-radius: 100px 100px 0 0;
        border-color: $primary-green;
        line-height: 35px;
        padding: 45px 0 25px;
      }
    }

    a#recycle-material-creation {
      display: block;
      border-radius: 20px;
      border-color: $primary-red;

      div.recycle-material-creation {
        border-radius: 10px;
        border-color: $primary-red;
        display: inline-block;
        vertical-align: middle;
        line-height: 35px;
        padding: 40px 0 30px;
      }
    }
  }
}
</style>
