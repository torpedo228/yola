<template>
  <div class="related-link-drop-down-list-container">
    <a :href="main.mainUrl" class="main-title" :class="'main-title-' + main.color">
      {{ main.title }}
      <!-- <i v-if="hasSubList" class="fa-solid fa-angle-down"></i> -->
    </a>

    <ul class="drop-down-list" v-if="hasSubList">
      <li v-for="(subItem, subItemNo) in subList" :key="subItemNo" class="drop-down-list-item"
        :class="'drop-down-list-item-' + subItem.color">
        <a :href="subItem.subUrl"> {{ subItem.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    main: Object, // ex. {title:"",routingName:"",color:""}
    subList: Array, // ex. [{title:"",routingName:"",color:""}]
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    hasSubList() {
      return this.subList && this.subList.length > 0;
    },
  },
  mounted() { },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.related-link-drop-down-list-container {
  position: relative;




  &:hover {
    a.main-title-red {
      color: $primary-red;
    }

    a.main-title-yellow {
      color: $primary-yellow;
    }

    a.main-title-green {
      color: $primary-green;
    }

    a.main-title-blue {
      color: $primary-blue;
    }

    ul.drop-down-list {
      display: block;
    }

  }

  a.main-title {
    display: block;
    text-align: center;

    @include custom-responsive("xs") {
      width: 50vw;
      font-size: 6vw;
      border-bottom:2vw dotted;
    }


    @include custom-responsive("sm md") {
      width: 25vw;
      font-size: 3vw;
      border-bottom: 1vw dotted;
    }

    @include custom-responsive("lg xl xxl") {
      width: 11vw;
      font-size: 1.25vw;
      border-bottom: 0.4vw dotted;
    }

  }

  a.main-title-red {
    border-bottom-color: $primary-red;
  }

  a.main-title-yellow {
    border-bottom-color: $primary-yellow;
  }

  a.main-title-green {
    border-bottom-color: $primary-green;
  }

  a.main-title-blue {
    border-bottom-color: $primary-blue;
  }



  ul.drop-down-list {
    width: 13vw;
    display: none;
    position: absolute;
    padding: 2vh 0;
    background-color: $primary-white;
    border-radius: 2vw;
    box-shadow: 2px 2px 2px $primary-grey;
    transform: translate(-50%, -3vh);
    left: 50%;
    overflow: hidden;

    li.drop-down-list-item {
      display: block;
      width: 100%;
      text-align: center;
      height: 3vh;
      line-height: 3vh;
      padding: 2vh 0;

      &:hover {
        color: $primary-white;
      }
    }

    li.drop-down-list-item-red {
      &:hover {
        background-color: $primary-red;
      }
    }

    li.drop-down-list-item-yellow {
      &:hover {
        background-color: $primary-yellow;
      }
    }

    li.drop-down-list-item-green {
      &:hover {
        background-color: $primary-green;
      }
    }

    li.drop-down-list-item-blue {
      &:hover {
        background-color: $primary-blue;
      }
    }
  }
}
</style>
