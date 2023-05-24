<template>
  <div class="container">
    <BreadCrumb />
    <SectionTitle title="兒歌 Nursery Rhymes" :imgSrc="require('@/assets/icons/logo/nursery-rhymes-logo.svg')"
      alt="兒歌logo" />

      <a
      href=""
      class="go-to-rhythm-and-movement-section"
      v-scroll-to="'#rhythm-and-movement'"
    >
      直接前往律動
    </a>

      <SubSectionTitle title="熱門兒歌 Hot! Rhymes" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
      alt="熱門兒歌logo" />
    <HotRhymes />
    <SectionTitle title="手指謠 Finger Rhymes" :imgSrc="require('@/assets/icons/logo/finger-rhymes-logo.svg')"
      alt="手指謠logo" />
    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import SubSectionTitle from "@/components/SubSectionTitle.vue";
import HotRhymes from "@/views/nursery-rhymes-and-finger-rhymes/HotRhymes.vue";

export default {
  components: { BreadCrumb, SectionTitle,SubSectionTitle, HotRhymes },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_NURSERY_RHYMES_AND_FINGER_RHYMES_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container {
  width: 100%;
  height: 700px;
  margin-top: 80px;
  position: relative;
}
</style>
