<template>
  <div class="container">
    <BreadCrumb />
    <router-view />
    <h2>建造中，空空如也，點擊下方logo返回首頁</h2>
    <a href="/"><img src="../assets/icons/logo/yola.svg" alt=""></a>
    
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

div.container {
  width: 100%;
  height: 600px;
  margin-top: 80px;
  position: relative;
  text-align: center;

  h2 {
    padding-top: 100px;
    font-size: 50px;
  }

  a{
&:hover{
  opacity: 0.7;
}
  
  img {
    width: 500px;
  }
}
}
</style>