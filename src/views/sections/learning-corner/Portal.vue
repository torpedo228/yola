<template>
  <div class="container" id="portal">
    <SectionTitle title="學習區 Learning Corner" :imgSrc="require('@/assets/icons/logo/learning-corner-logo-red.svg')"
      alt="學習區logo" />
    <div class="card-container">
      <div class="card-container-top">
        <LearningCornerCard href="./still-building" title="語文區" alt="語文區" :img-upper="true" color="blue"
          :imgSrc="require('@/assets/images/learning-corner/literacy.jpg')" />
        <LearningCornerCard href="./still-building" title="扮演區" alt="扮演區" :img-upper="false" color="green"
          :imgSrc="require('@/assets/images/learning-corner/role-playing.jpg')" />
        <LearningCornerCard href="./learning-corner/art" title="美勞區" alt="美勞區" :img-upper="true" color="red"
          :imgSrc="require('@/assets/images/learning-corner/art.jpg')" />
        <LearningCornerCard href="./still-building" title="數學區" alt="數學區" :img-upper="false" color="yellow"
          :imgSrc="require('@/assets/images/learning-corner/math.jpg')" />
      </div>
      <div class="card-container-bottom">
        <LearningCornerCard href="./still-building" title="積木區" alt="積木區" :img-upper="true" color="red"
          :imgSrc="require('@/assets/images/learning-corner/blocks.jpg')" />
        <LearningCornerCard href="./still-building" title="烹飪區" alt="烹飪區" :img-upper="false" color="yellow"
          :imgSrc="require('@/assets/images/learning-corner/cooking.jpg')" />
        <LearningCornerCard href="./learning-corner/construction" title="組合建構區" alt="組合建構區" :img-upper="true" color="blue"
          :imgSrc="require('@/assets/images/learning-corner/construction.png')" />
        <LearningCornerCard href="./still-building" title="自然觀察區" alt="自然觀察區" :img-upper="false"
          color="green" :imgSrc="require('@/assets/images/learning-corner/natural-observe.jpg')
            " />
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";
import LearningCornerCard from "@/components/LearningCornerCard.vue";

export default {
  components: { SectionTitle, LearningCornerCard },
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
  height: 700px;
  margin-top:80px;
  position: relative;

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
            transition-duration: 0.5s;
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
