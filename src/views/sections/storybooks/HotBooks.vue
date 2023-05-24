<template>
  <div>
    <SubSectionTitle
      title="熱門繪本 Hot! Books"
      :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
      alt="熱門繪本logo"
    />
    <div class="storybookcard-row-wrap">
      <StoryBookCard
        v-for="(book, bookNo) in books"
        :key="bookNo"
        :imgSrc="book.imgSrc"
        :name="book.name"
        :authors="book.authors"
        :color="book.color"
      />
    </div>
   
  </div>
</template>

<script>
import SubSectionTitle from "@/components/SubSectionTitle.vue";
import StoryBookCard from "@/components/storybooks/StoryBookCard.vue";

export default {
  components: { SubSectionTitle, StoryBookCard },
  data() {
    return {
      books: [
      {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-1.jpg"),
          name: "鱷魚怕怕牙醫怕怕",
          authors: "五味太郎",
          color: "blue",
        },
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-2.png"),
          name: "遲到大王",
          authors: "約翰伯林罕",
          color: "blue",
        },
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-3.png"),
          name: "好餓好餓的毛毛蟲",
          authors: "艾瑞卡爾",
          color: "blue",
        },
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-4.png"),
          name: "你看起來很好吃",
          authors: "宮西達也",
          color: "blue",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.storybookcard-row-wrap{
  width: 100%;
  @include hm();
}
</style>
