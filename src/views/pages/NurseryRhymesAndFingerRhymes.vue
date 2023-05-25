<template>
  <div class="nursery-rhymes-and-finger-rhymes-container">
    <BreadCrumb />
    <SectionTitle
      title="兒歌 Nursery Rhymes"
      :imgSrc="require('@/assets/icons/section/nursery-rhymes.svg')"
      alt="兒歌icon"
    />

    <a
      href=""
      class="go-to-finger-rhymes-section"
      v-scroll-to="'#finger-rhymes'"
    >
      直接前往手指謠
    </a>

    <div class="flex-wrap">
      <SubSectionTitle
        title="熱門兒歌 Hot! Rhymes"
        :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
        alt="熱門兒歌icon"
      />
      <SubSectionTitle
        title="編輯推薦 Recommend"
        :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
        alt="編輯推薦icon"
      />
    </div>

    <div class="flex-wrap">
      <NurseryRhymesComponents />
      <NurseryRhymesComponents />
    </div>

    <div class="nursery-rhymes-decoration">
      <img
        src="../../assets/decorations/nursery-rhymes-and-finger-rhymes/nursery-rhymes-and-finger-rhymes-stripe.svg"
        alt=""
      />
    </div>

    <SectionTitle
      title="手指謠 Finger Rhymes"
      :imgSrc="require('@/assets/icons/section/finger-rhymes.svg')"
      alt="手指謠icon"
      id="finger-rhymes"
    />

    <div class="flex-wrap">
      <SubSectionTitle
        title="老師最愛用 Teacher’s Favorite"
        :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
        alt="熱門兒歌icon"
      />
      <SubSectionTitle
        title="編輯推薦 Recommend"
        :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
        alt="編輯推薦icon"
      />
    </div>
    <FingerRhymesComponents />
    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/title/SectionTitle.vue";
import SubSectionTitle from "@/components/title/SubSectionTitle.vue";
import NurseryRhymesComponents from "@/components/nursery-rhymes-and-finger-rhymes/NurseryRhymesComponents.vue";
import FingerRhymesComponents from "@/components/nursery-rhymes-and-finger-rhymes/FingerRhymesComponents.vue";

export default {
  components: {
    BreadCrumb,
    SectionTitle,
    SubSectionTitle,
    NurseryRhymesComponents,
    FingerRhymesComponents,
  },
  data() {
    return {
      // color: [
      //   { color: "green" },
      //   { color: "yellow" }
      // ]
    };
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
    top: 3%;
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

  div.nursery-rhymes-decoration {
    width: 100%;
    overflow: hidden;
  }
}
</style>
