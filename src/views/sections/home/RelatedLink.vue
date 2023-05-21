<template>
  <div class="container" id="related-link">
    <SectionTitle title="相關連結 Related Link" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="相關連結logo" />

    <div class="related-link-container">
      <div class="related-link related-link-red">
        <h4>幼教寶典</h4>

          <ul>
            <li><a href="https://www.ece.moe.edu.tw/ch/">全國教保資訊網</a></li>
            <li><a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=H0070031">幼兒教育及照顧法</a></li>
            <li><a href="https://www.ece.moe.edu.tw/ch/filelist/preschool/filelist-preschool/">幼兒園課綱、相關手冊與實例下載</a></li>
          </ul>
        <img src="../../../assets/images/home/related-link/related-link-house-red.svg" alt="">
      </div>

      <div class="related-link related-link-yellow">
        <h4>重點資訊</h4>
          <ul>
            <li><a href="">幼兒園查詢</a></li>
            <li><a href="">補助與津貼</a></li>
            <li><a href="">公共化教保服務</a></li>
          </ul>
        <img src="../../../assets/images/home/related-link/related-link-house-yellow.svg" alt="">
      </div>

      <div class="related-link related-link-green">

        <h4>各縣市<br>幼教資源網</h4>
          <ul>
            <li><a href="">北部<i class="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="">中部<i class="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="">南部<i class="fa-solid fa-chevron-down"></i></a></li>
            <li><a href="">東部&離島<i class="fa-solid fa-chevron-down"></i></a></li>
          </ul>
        <img src="../../../assets/images/home/related-link/related-link-house-green.svg" alt="">
      </div>

      <div class="related-link related-link-blue">

        <h4>合作網站</h4>
          <ul>
            <li><a href="">幼兒闖天下</a></li>
            <li><a href="">樂學成長營</a></li>
            <li><a href="">童言童語</a></li>
            <li><a href="">數星星繪本網</a></li>
          </ul>
        <img src="../../../assets/images/home/related-link/related-link-house-blue.svg" alt="">
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
  height:80vh;
  position: relative;

  div.related-link-container {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    div.related-link {
      position: relative;
      width: 280px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      align-items: center;

      h4 {
        position: absolute;
        color: $primary-white;
        width: 150px;
        margin: 0;
        padding-bottom:180px ;
      }

      ul {
        position: absolute;
        width: 280px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(35%);
        padding: 0;
        margin: 0;

        li {
          font-size:18px;
          width: 160px;
          margin-bottom: 20px;

          a {
            &:visited {
              color: $primary-black;
            }
          }
        }
      }
    }

    img {
      position: absolute;
      z-index: -1;
    }

    div.related-link-red {
      ul {
        li {
          border-bottom: 5px dotted $primary-red ;

          a {
            &:hover {
              color: $primary-red;
            }
          }
        }
      }
    }

    div.related-link-yellow {
      ul {
        li {
          border-bottom: 5px dotted $primary-yellow ;

          a {
            &:hover {
              color: $primary-yellow;
            }
          }
        }
      }
    }

    div.related-link-green {
      ul {
        li {
          border-bottom: 5px dotted $primary-green ;

          a {
            &:hover {
              color: $primary-green;
            }
          }
        }
      }
    }

    div.related-link-blue {
      ul {
        li {
          border-bottom: 5px dotted $primary-blue ;

          a {
            &:hover {
              color: $primary-blue;
            }
          }
        }
      }
    }

  }
}
</style>
