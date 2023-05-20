<template>
  <div class="container" id="portal">
    <SectionTitle title="主題教學 Thematic Teaching" :imgSrc="require('@/assets/icons/logo/thematic-teaching-logo.svg')"
      alt="學習區logo" />

    <div class="portal-container">
      <div class="grid">

        <div class="item item1">
          <a class="thematic-teaching-design" href="./still-building">
          <div class="inline-block">主題教學設計</div> </a>
        </div>

        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7"></div>
        <div class="item item8"></div>
        <div class="item item9"></div>
        <div class="item item10"></div>
        <div class="item item11"></div>
        <div class="item item12"></div>
        <div class="item item13"></div>
        <div class="item item14"></div>
        <div class="item item15"></div>
        <div class="item item16"></div>
        <div class="item item17"></div>
        <div class="item item18"></div>
        <div class="item item19"></div>
        <div class="item item20"></div>
        <div class="item item21"></div>
        <div class="item item22"></div>
        <div class="item item23"></div>
        <div class="item item24"></div>
        <div class="item item25"></div>
        <div class="item item26"></div>
        <div class="item item27"></div>
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

div.container {
  width: 100%;


  div.portal-container {
    width: 100%;
    display: flex;
    justify-content: center;

    div.grid {
      width: 900px;
      height: 300px;
      display: grid;
      grid-template: repeat(3, 1fr) /repeat(9, 1fr);
      gap: 10px;


      a.thematic-teaching-design {

        &:visited {
          color: $primary-black;
        }

        &:hover {
          color: $primary-white;
          background-color: $primary-red ;
        }
      }


      div.item {
        font-size: $h3;
        text-align: center;
        vertical-align: middle;
        line-height: $h3;
        border: 1px solid black;
        border-radius: 30px;
        line-height: 200px;
      }

      div.item1 {
        grid-row: 1/span 2;
        grid-column: 1/span 2;
        border: 20px solid $primary-red;

        &:hover {
          color: $primary-white;
          background-color: $primary-red ;
        }



        div.inline-block {
          height: 100px;
          display: inline-block;
          vertical-align: middle;
          text-align: center;
          line-height: 1;
          padding: 10px;
        }

      }
    }
  }
}
</style>
