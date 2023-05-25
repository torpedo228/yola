<template>
  <div class="storybooks-container">
    <BreadCrumb />
    <SectionTitle
      title="繪本故事 Storybooks"
      :imgSrc="require('@/assets/icons/section/storybooks.svg')"
      alt="繪本故事icon"
    />

    <NewArrival />
    <HotBooks />
    <div class="decoration">
      <img
        src="../../../assets/decorations/storybooks/hot-books-bottom.svg"
        alt=""
      />
    </div>
    <AllBooks />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/title/SectionTitle.vue";
import NewArrival from "@/views/sections/storybooks/NewArrival.vue";
import HotBooks from "@/views/sections/storybooks/HotBooks.vue";
import AllBooks from "@/views/sections/storybooks/AllBooks.vue";

export default {
  components: { BreadCrumb, SectionTitle, NewArrival, HotBooks, AllBooks },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_STORYBOOKS_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.storybooks-container {
  width: 100%;
  margin-top: 80px;
  position: relative;

  div.decoration {
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
}
</style>
