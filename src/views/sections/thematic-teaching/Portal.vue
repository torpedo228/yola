<template>
  <div class="thematic-teaching-portal-container" id="portal">
    <SectionTitle title="主題教學 Thematic Teaching" :imgSrc="require('@/assets/icons/logo/thematic-teaching-logo.svg')"
      alt="學習區logo" />

    <div class="portal-container">
      <div class="grid">
        <div class="item item1">
          <a class="thematic-teaching-design" href="./still-building">主題教學 設計</a>
        </div>

        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>

        <div class="item item5">
          <a class="brain-storming" href="./brain-storming">主題發想牆</a>
        </div>
        <div class="item item6"></div>
        <div class="item item7">
          <a class="lesson-plans" href="./still-building"> 教學活動 參考 </a>
        </div>
        <div class="item item8"></div>
        <div class="item item9"></div>
        <div class="item item10"></div>
        <div class="item item11"></div>
        <div class="item item12"></div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle },
  data() {
    return {};
  },
  mounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.thematic-teaching-portal-container {
  width: 100%;
  height:100vh;


  div.portal-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    div.grid {
      width: 900px;
      height: 300px;
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(9, 1fr);
      gap: 10px;

      div.item {
        border-radius: 30px;

        a {
          display: block;
          width: 180px;
          padding: 40px 0;

          &:link {
            color: $primary-black;
          }

          &:visited {
            color: $primary-black;
          }
        }
      }

      div.item1,
      div.item5,
      div.item7 {
        font-size: $h3;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          a {
            color: $primary-white;
          }
        }
      }

      div.item1 {
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
        border: 20px solid $primary-red;

        &:hover {
          background-color: $primary-red;
        }
      }

      div.item2 {
        grid-row: 1 / span 2;
        background-color: $primary-yellow;
      }

      div.item3 {
        grid-column: 4 / span 2;
        background-color: $primary-red;
      }

      div.item4 {
        grid-column: 6 / span 1;
        grid-row: 1 / span 2;
        background-color: $primary-blue;
      }

      div.item5 {
        grid-column: 7 / span 2;
        grid-row: 1 / span 2;
        border: 20px solid $primary-blue;

        &:hover {
          background-color: $primary-blue;
        }
      }

      div.item6 {
        grid-column: 9 / span 1;
        background-color: $primary-yellow;
      }

      div.item7 {
        grid-column: 4 / span 2;
        grid-row: 2 / span 2;
        border: 20px solid $primary-green;

        &:hover {
          background-color: $primary-green;
        }
      }

      div.item8 {
        grid-column: 9 / span 1;
        grid-row: 2 / span 2;
        background-color: $primary-green;
      }

      div.item9 {
        grid-column: 6 / span 1;
        grid-row: 3 / span 1;
        background-color: $primary-yellow;
      }

      div.item10 {
        grid-column: 1 / span 2;
        grid-row: 3 / span 1;
        background-color: $primary-green;
      }

      div.item11 {
        grid-column: 3 / span 1;
        grid-row: 3 / span 1;
        background-color: $primary-blue;
      }

      div.item12 {
        grid-column: 7 / span 2;
        grid-row: 3 / span 1;
        background-color: $primary-red;
      }
    }
  }
}
</style>
