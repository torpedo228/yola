<template>
  <a :href="href">
    <div :class="makeClasses(cardWrapClass, cardBorderColorClass)">
      <h3 :class="titleClass">{{ title }}</h3>
      <div :class="makeClasses(maskPositionClass, maskColorClass)"></div>
      <img :class="imgPositionClass" :src="imgSrc" :alt="alt" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    href: String, // ./
    title: String, // 語文區
    alt: String, // 語文區
    imgUpper: Boolean,
    color: String, // blue
    imgSrc: String, // ../../assets/images/learning-corner/literacy.jpg
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    cardWrapClass() {
      return this.imgUpper === true ? "card-wrap-bottom" : "card-wrap-top";
    },
    cardBorderColorClass() {
      return "card-border-" + this.color;
    },
    titleClass() {
      return this.imgUpper === true ? "title-bottom" : "title-top";
    },
    maskPositionClass() {
      return this.imgUpper === true ? "mask-bottom" : "mask-top";
    },
    maskColorClass() {
      return "mask-" + this.color;
    },
    imgPositionClass() {
      return this.imgUpper == true ? "img-top" : "img-bottom";
    },
  },
  mounted() {},
  watch: {},
  methods: {
    makeClasses(...classes) {
      return classes.join(" ");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

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

  img.img-top {
    position: absolute;
    z-index: -2;
  }

  img.img-bottom {
    position: absolute;
    bottom: 0;
    z-index: -2;
  }

  div.mask-bottom,
  div.mask-top {
    position: absolute;
    width: 150px;
    height: 60%;
    z-index: -1;
  }

  div.mask-bottom {
    bottom: -1px;
    --mask: radial-gradient(53.68px at 50% 72.5px, #000 99%, #0000 101%)
        calc(50% - 50px) 0/100px 100%,
      radial-gradient(53.68px at 50% -47.5px, #0000 99%, #000 101%) 50% 25px/100px
        100% repeat-x;
    -webkit-mask: var(--mask);
    mask: var(--mask);
  }
}

div.mask-top {
  --mask: radial-gradient(55.9px at 50% calc(100% - 75px), #000 99%, #0000 101%)
      calc(50% - 50px) 0/100px 100%,
    radial-gradient(55.9px at 50% calc(100% + 50px), #0000 99%, #000 101%) 50%
      calc(100% - 25px) / 100px 100% repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
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
</style>
