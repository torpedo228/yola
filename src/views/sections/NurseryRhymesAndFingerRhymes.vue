<template>
  <div class="nursery-rhymes-and-finger-rhymes-container">
    <BreadCrumb />
    <SectionTitle title="兒歌 Nursery Rhymes" :imgSrc="require('@/assets/icons/logo/nursery-rhymes-logo.svg')"
      alt="兒歌logo" />

    <a href="" class="go-to-finger-rhymes-section" v-scroll-to="'#finger-rhymes'">
      直接前往手指謠
    </a>

    <div class="flex-wrap">
      <SubSectionTitle title="熱門兒歌 Hot! Rhymes" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
        alt="熱門兒歌logo" />
      <SubSectionTitle title="編輯推薦 Recommend" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
        alt="編輯推薦logo" />
    </div>

    <NurseryRhymesCompoments />

    <SectionTitle title="手指謠 Finger Rhymes" :imgSrc="require('@/assets/icons/logo/finger-rhymes-logo.svg')" alt="手指謠logo"
      id="finger-rhymes" />

    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import SubSectionTitle from "@/components/SubSectionTitle.vue";
import NurseryRhymesCompoments from "@/components/nursery-rhymes-and-finger-rhymes/NurseryRhymesCompoments.vue";

export default {
  components: { BreadCrumb, SectionTitle, SubSectionTitle, NurseryRhymesCompoments },
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

div.nursery-rhymes-and-finger-rhymes-container {
  width: 100%;
  margin-top: 80px;
  position: relative;

  a.go-to-finger-rhymes-section {
    display: block;
    width: 150px;
    height: 50px;
    background-color: $primary-blue;
    color: $primary-white;
    line-height: 50px;
    text-align: center;
    position: absolute;
    right: 15%;
    top: 1%;
    border-radius: 30px;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      background-color: $secondary-green;
    }
  }

  div.flex-wrap {
    @include hm();
    gap: 100px;
  }
}
</style>
