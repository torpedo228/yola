<template>
  <div class="header-drop-down-list-container">
    <div
      :class="'main-title-' + main.color"
      @click="toPage(main.routingName)"
    >
      {{ main.title }}
      <!-- <i v-if="hasSubList" class="fa-solid fa-angle-down"></i> -->
    </div>

    <ul class="drop-down-list" v-if="hasSubList">
      <li
        v-for="(subItem, subItemNo) in subList"
        :key="subItemNo"
        class="drop-down-list-item"
        :class="'drop-down-list-item-' + subItem.color"
        @click="toPage(subItem.routingName)"
      >
        {{ subItem.title }}
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
  mounted() {},
  watch: {},
  methods: {
    toPage(routingName) {
      this.$router.push({ name: routingName });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.header-drop-down-list-container {
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin: 0 2%;

  &:hover {
    div.main-title-red {
      color: $primary-red;
    }

    div.main-title-yellow {
      color: $primary-yellow;
    }

    div.main-title-green {
      color: $primary-green;
    }

    div.main-title-blue {
      color: $primary-blue;
    }

    ul.drop-down-list {
      display: block;
    }
  }

  ul.drop-down-list {
    width: 13vw;
    display: none;
    position: absolute;
    padding: 20px 0;
    background-color: $primary-white;
    border-radius: 20px;
    box-shadow: 2px 2px 2px $primary-grey;
    transform: translate(-50%, -3vh);
    left: 50%;

    li.drop-down-list-item {
      display: block;
      width: 100%;
      text-align: center;
      height: 3vh;
      line-height: 3vh;
      padding: 10px 0;

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
