<template>
  <div class="all-books-container">
    <SubSectionTitle
      title="繪本總覽 All Books"
      :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
      alt="繪本總覽icon"
    />

    <AllBooksSortRow
      v-for="(label, labelNo) in labels"
      :key="labelNo"
      :labelName="label.labelName"
      :subLabelList="label.subLabelList"
      :showAll="label.showAll"
    />

    <div class="all-books-sort-result">
      <div>篩選結果:</div>
      <div class="sort-result-items">3~6歲</div>
      <div class="sort-result-items">圖文故事書</div>
      <div class="sort-result-items">五味太郎</div>
      <div class="sort-result-items">生活教育</div>
    </div>

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
    <section class="pagnition">
      <ol>
        <a href="">
          <li><i class="fa-solid fa-angles-left"></i></li>
        </a>
        <a class="pageNo" href="" v-for="pageNo in 10" :key="pageNo">
          <li>{{ pageNo }}</li>
        </a>
        <a href="">
          <li><i class="fa-solid fa-angles-right"></i></li>
        </a>
      </ol>
    </section>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/title/SubSectionTitle.vue";
import StoryBookCard from "@/components/storybooks/StoryBookCard.vue";
import AllBooksSortRow from "@/components/storybooks/AllBooksSortRow.vue";

export default {
  components: { SubSectionTitle, StoryBookCard, AllBooksSortRow },
  data() {
    return {
      labels: [
        {
          labelName: "年齡",
          subLabelList: ["0~3歲", "3~6歲", "6歲以上"],
          showAll: true,
        },
        {
          labelName: "形式",
          subLabelList: ["圖文故事書", "無字圖畫書", "外文書"],
          showAll: true,
        },
        {
          labelName: "作者",
          subLabelList: ["狸貓", "狸貓豬", "狸胖"],
          showAll: false,
        },
        {
          labelName: "主題",
          subLabelList: ["狸貓", "狸貓豬", "狸胖"],
          showAll: false,
        },
      ],

      books: [
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-1.jpg"),
          name: "鱷魚怕怕牙醫怕怕",
          authors: "五味太郎",
          color: "yellow",
        },
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-2.png"),
          name: "遲到大王",
          authors: "約翰伯林罕",
          color: "yellow",
        },
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-3.png"),
          name: "好餓好餓的毛毛蟲",
          authors: "艾瑞卡爾",
          color: "yellow",
        },
        {
          imgSrc: require("../../../assets/images/storybooks/new-arrival/new-arrival-4.png"),
          name: "你看起來很好吃",
          authors: "宮西達也",
          color: "yellow",
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

div.all-books-container {
  @include vm();
  margin-bottom: 30px;

  div.all-books-sort-result {
    margin: 30px 0;
    width: 65%;
    @include hm();
    gap: 10px;
    border: 5px dashed $primary-yellow;
    padding: 20px;
    border-radius: 50px;

    div.sort-result-items {
      color: $primary-white;
      background-color: $primary-yellow;
      width: 15%;
      border-radius: 20px;
      padding: 10px;
      text-align: center;
    }

    div:nth-child(1) {
      font-size: $h4;
      background-color: $primary-white;
      color: $primary-black;
      border-radius: 20px;
      padding: 10px;
    }
  }

  div.storybookcard-row-wrap {
    width: 100%;
    @include hm();
  }

  section.pagnition {
    width: 100%;

    ol {
      padding: 0;
      @include hm();
      gap: 15px;
    }

    a {
      li {
        font-size: $sub-info;

        &:link {
          color: $primary-black;
        }

        &:visited {
          color: $primary-black;
        }

        &:hover {
          color: $primary-yellow;
        }
      }
    }

    a.pageNo {
      &:nth-child(2) {
        color: $primary-yellow;
      }
    }
  }
}
</style>
