<template>
  <div class="container" id="portal">
    <SectionTitle title="美勞區 Art" :imgSrc="require('@/assets/icons/logo/learning-corner-logo-red.svg')" alt="美勞區logo" />

    <div class="portal-container">
      <div class="portal-top">
        <a href="/learning-corner/art/drawings" id="drawings">
          <div class="portal-item drawings">繪畫</div>
        </a>
        <a href="./still-building" id="paper-work">
          <div class="portal-item paper-work">紙工</div>
        </a>
        <a href="./still-building" id="kneading">
          <div class="portal-item kneading">捏塑</div>
        </a>
      </div>



      <!-- <div class="portal-bottom">
        <a href="">
          <div class="portal-item weaving">編織</div>
        </a>
        <a href="">
          <div class="portal-item 
multi-material-creation">多元材料創作</div>
        </a>
        <a href="">
          <div class="portal-item recycle-material-creation">回收材料創作</div>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle, },
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
  height: 100vh;
  margin-top: 80px;
  position: relative;

  div.portal-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div.portal-top {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      a {
        width: 180px;
        height: 180px;
        display: block;
        border: 25px solid;

        div.portal-item {
          text-align: center;
          line-height: 170px;
          border: 5px solid;
          outline: 10px solid $primary-white;
          color: $primary-black ;
          font-size: $h3;
        }
      }

      a#drawings {
        border-radius: $border-radius-circle ;
        border-color: $primary-yellow;

        &:link {
          color:
            $primary-yellow;
        }

        &:visited {
          color:
            $primary-yellow;
        }

        div.drawings {
          border-radius: $border-radius-circle ;
          border-color: $primary-yellow;
        }
      }

      a#paper-work {
        border-radius: 30px ;
        border-color: $primary-green;

        &:link {
          color:
            $primary-green;
        }

        &:visited {
          color:
            $primary-green;
        }

        div.paper-work {
          border-radius: 30px ;
          border-color: $primary-green;
        }
      }

      a#kneading {
        border-radius: $border-radius-circle ;
        border-color: $primary-yellow;

        &:link {
          color:
            $primary-yellow;
        }

        &:visited {
          color:
            $primary-yellow;
        }

        div.drawings {
          border-radius: $border-radius-circle ;
          border-color: $primary-yellow;
        }
      }

      div.paper-work {}

      div.kneading {}



      div.portal-top {}

      div.weaving {}

      div.multi-material-creation {}

      div.recycle-material-creation {}
    }
  }

}
</style>

