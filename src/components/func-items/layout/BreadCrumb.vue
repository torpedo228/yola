<template>
  <div class="breadcrumb-wrap">
    <img :src="require('@/assets/icons/func-items/bread-crumb.svg')" alt="麵包屑icon" />
    <ol>
      <li v-for="(layer, i) in breadcrumbList" :key="i" class="pl-2">
        <router-link :to="layer.path">{{ layer.meta.title }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {},
  components: {},
  data() {
    return {
      breadcrumbList: [],
    };
  },
  computed: {
    route() {
      return this.$route;
    },
  },
  mounted() {
    this.updateBreadcrumbs(this.$route);
  },
  watch: {
    route(curRoute) {
      this.updateBreadcrumbs(curRoute);
    },
  },
  methods: {
    isNotHome(routeName) {
      return routeName != "home";
    },
    updateBreadcrumbs(curRoute) {
      let vm = this;
      let matched = curRoute.matched;
      if (vm.isNotHome(matched[0].name)) {
        matched = [{ path: "/", meta: { title: "首頁" } }].concat(matched);
      }

      vm.breadcrumbList = filterEmptyTitle(matched);

      function filterEmptyTitle(matched) {
        var fullPath = [];
        matched.forEach((layer) => {
          if (
            vm.hasValue(layer.path) &&
            vm.hasValue(layer.meta) &&
            vm.hasValue(layer.meta.title)
          ) {
            fullPath.push(layer);
          }
        });
        return fullPath;
      }
    },
    hasValue(val) {
      return typeof val != "undefined" && val != null && val !== "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.breadcrumb-wrap {
  position: absolute;
  left: 5%;
  display: flex;

}

ol {
  display: flex;
  padding-left: 10px;

  li {
    position: relative;
    z-index: 1;

    a {
      font-size: $content;

      &:link {
        color: $primary-black;
      }

      &:visited {
        color: $primary-black;
      }

      &:hover {
        color: $primary-blue;
      }

      &:active {
        color: $primary-red;
      }
    }

    &::after {
      content: '/';
      display: inline-block;
    }

    &:last-child::after {
      content: '';
    }
  }
}
</style>
