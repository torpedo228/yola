<template>
  <div class="container">
    <BreadCrumb />
    <SectionTitle
      title="學習區 Learning Corner"
      :imgSrc="require('@/assets/icons/section/learning-corner/red.svg')"
      alt="學習區icon"
    />
    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/title/SectionTitle.vue";

export default {
  components: { BreadCrumb, SectionTitle },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_SOME_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;
  margin-top: 80px;
  position: relative;
}
</style>
