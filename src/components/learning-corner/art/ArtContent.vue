<template>
  <div class="learning-corner">
    <div class="title">
      <img src="../../../assets/icons/logo/learning-corner-logo-red.svg" alt="美勞區logo" />
      <h2>美勞區 Art</h2>
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
    // this.$store.commit("SET_LEARNING_CORNER_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";


div.learning-corner {
  width: 100%;
  position: absolute;
  top: 10%;
  font-family: $light;

  div.title {
    color: $primary-black;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;

    img {
      width: 30px;
    }
  }

  div.card-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-content: center;

    div.card-container-top,
    div.card-container-bottom {
      display: flex;
      gap: 20px;

      a {
        &:hover {
          opacity: 0.5;

          img {
            transform: scale(1.2);
            transition-duration: .5s;
          }
        }
      }
    }

    div.card-wrap-bottom,
    div.card-wrap-top {
      position: relative;
      width: 150px;
      height: 200px;
      border-radius: 20px;
      overflow: hidden;

      h3 {
        display: block;
        width: 150px;
        text-align: center;
        font-weight: 100;
        font-size: $main-info;
        color: $primary-white;
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 2;
      }

      h3.title-bottom {
        left: 50%;
        top: 65%;
      }

      h3.title-top {
        left: 50%;
        top: 10%;
      }

      img {
        width: 150px;

      }

      img.img-top {}

      img.img-bottom {
        position: absolute;
        bottom: 0;
      }

      div.mask-bottom,
      div.mask-top {
        position: absolute;
        width: 150px;
        height: 60%;

        border-radius: 10px;
        z-index: 1;
      }

      div.mask-bottom {
        bottom: -1px;
        --mask: radial-gradient(53.68px at 50% 72.5px, #000 99%, #0000 101%) calc(50% - 50px) 0/100px 100%,
          radial-gradient(53.68px at 50% -47.5px, #0000 99%, #000 101%) 50% 25px/100px 100% repeat-x;
        -webkit-mask: var(--mask);
        mask: var(--mask);
      }
    }

    div.mask-top {
      --mask: radial-gradient(55.9px at 50% calc(100% - 75px),
          #000 99%,
          #0000 101%) calc(50% - 50px) 0/100px 100%,
        radial-gradient(55.9px at 50% calc(100% + 50px), #0000 99%, #000 101%) 50% calc(100% - 25px) / 100px 100% repeat-x;
      -webkit-mask: var(--mask);
      mask: var(--mask);
    }
  }

  div.card-border-red {
    border: 5px $primary-red solid;

    div.mask-red {
      background-color: $primary-red;
    }
  }

  div.card-border-yellow {
    border: 5px $primary-yellow solid;

    div.mask-yellow {
      background-color: $primary-yellow;
    }
  }

  div.card-border-green {
    border: 5px $primary-green solid;

    div.mask-green {
      background-color: $primary-green;
    }
  }

  div.card-border-blue {
    border: 5px $primary-blue solid;

    div.mask-blue {
      background-color: $primary-blue;
    }
  }
}
</style>
