<template>
  <div class="breadcrumb-wrap">
    <img src="../../assets/icons/logo/bread-crumb-logo.svg" alt="麵包屑logo">
    <ol class="flex">
      <li v-for="(item, i) in breadcrumbList" :key="i" class="pl-2">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "Breadcrumb",
  setup() {
    const route = useRoute();
    const breadcrumbList = ref([]);
    const isHome = () => {
      return route.name === "Home";
    };
    const getBreadcrumbs = () => {
      let matched = route.matched;
      if (!isHome(matched[0])) {
        matched = [{ path: "/", meta: { title: "首頁" } }].concat(matched);
      }
      breadcrumbList.value = matched;
    };
    watch(route, () => {
      getBreadcrumbs();
    });
    onMounted(() => {
      getBreadcrumbs();
    });
    return { breadcrumbList, getBreadcrumbs };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.breadcrumb-wrap {
  position: absolute;
  top: 10%;
  left: 5%;
  display: flex;

  img {}
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
