<template>
  <div class="still-building-container">
    <BreadCrumb />
    <router-view />
    <h2>建造中，空空如也，請點擊下方logo返回上一頁</h2>

    <a href="#" @click="$router.back()"
      ><img :src="require('@/assets/logo/yola.svg')" alt=""
    /></a>

    <br />
    <img
      class="all-characters"
      :src="require('@/assets/characters/all-characters.svg')"
      alt=""
    />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";

export default {
  components: { BreadCrumb },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_STILL_BUILDING_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.still-building-container {
  width: 100%;
  height: 90vh;
  margin-top: 80px;
  position: relative;
  text-align: center;

  h2 {
    padding-top: 50px;
    font-size: 40px;
  }

  a {
    &:hover {
      opacity: 0.7;
    }

    img {
      width: 300px;
      margin-bottom: 60px;
    }
  }
}
</style>
