<template>
  <div class="container">
    <BreadCrumb />
      <SectionTitle
        title="主題教學 Thematic Teaching"
        :imgSrc="require('@/assets/icons/logo/thematic-teaching-logo.svg')"
        alt="學習區logo"
      />
      <router-view />
    </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { BreadCrumb,SectionTitle },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_THEMATIC_TEACHING_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container{
  width: 100%;
  height: 700px;
  margin-top:80px;
  position: relative;
}
</style>