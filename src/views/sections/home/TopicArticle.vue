<template>
  <div class="container" id="topic-article">
    <SectionTitle title="主題專欄 Topic Article" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')" alt="主題專欄logo" />

    <div class="article-container">
      <div class="article-top">
        <div class="article-img">
          <img src="../../../assets/images/home/topic-article/topic-article-1.jpg" alt="" />
        </div>
        <div class="content">
          <h4>幼兒玩黏土的好處與挑選黏土的指標&ensp;<span>花花園長</span></h4>

          <p>
            &ensp;&ensp;&ensp;&ensp;在購買幼兒玩具時，黏土總是很熱門的落入了家長的購物車裡，市面上的黏土品牌眾多，顏色鮮艷種類豐富，細分下還出現了陶土、油土、紙黏土五花八門的黏土選擇，家長要如何選擇最適合家中寶貝的黏土呢?
            要怎麼玩才能培養幼兒的能力而不僅僅是混在一起就放在旁邊了呢?
            歡迎讀者跟著在業界享譽有佳，經驗豐富的花花園長一同帶領家長窺探黏土的世界...<a href="./still-building"><span>More</span></a>
          </p>
        </div>
        <a href="./still-building">
          <div class="complete-article">
            看完整文章<i class="fa-solid fa-angle-right"></i>
          </div>
        </a>
      </div>
      <div class="article-bottom">
        <div class="article-img">
          <img src="../../../assets/images/home/topic-article/topic-article-2.jpg" alt="" />
        </div>
        <div class="content">
          <h4>閱讀對幼兒的六大好處，爸媽必看!&ensp;<span>小布老師</span></h4>

          <p>
            繪本在現代家庭中，已是爸爸媽媽養育小孩的必備聖品，不只在家庭，幼兒園也都持續在推行親子共讀的鼓勵措施，閱讀的重要性眾所皆知，但對幼兒來說，閱讀的好處到底是什麼呢?
            本次專欄邀請到了深耕幼教現場數十年的小布老師，分享自己對於幼兒閱讀的觀點與現場老師在幼兒閱讀上注重的關鍵能力，並提供許多幫助幼兒閱讀上的一些實用性技巧...<a
              href="./still-building"><span>More</span></a>
          </p>
        </div>
        <a href="./still-building">
          <div class="complete-article">
            看完整文章<i class="fa-solid fa-angle-right"></i>
          </div>
        </a>
      </div>
      <a class="watch-all-article" href="./still-building">
        <div>觀看所有文章</div>
      </a>
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
  position: relative;
  margin-bottom: 30px;

  div.article-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    div.article-top,
    div.article-bottom {
      height: 200px;
      display: flex;
      align-content: center;
      justify-content: center;
      gap: 10px;

      div.article-img {
        width: 200px;
        height: 180px;
        border: 10px solid $primary-yellow;
        overflow: hidden;
        border-radius: 30px 0 0 30px;

        img {
          height: 100%;
        }
      }

      div.content {
        padding: 10px 20px;
        width: 500px;
        height: 160px;
        border: 10px solid $primary-yellow;

        h4 {
          font-size: $h4;
          margin: 0;
          background-color: $primary-yellow;
          color: $primary-white;

          span {
            font-size: $sub-info;
          }
        }

        p {
          font-size: $content;
          margin: 10px 0 0;

          a {
            display: inline-block;

            &:link {
              color: $primary-black;
            }

            &:visited {
              color: $primary-black;
            }

            span {
              &:hover {
                color: $primary-yellow;
              }

              &:active {
                color: $primary-red;
              }
            }
          }
        }
      }

      div.complete-article {
        font-size: $sub-info;
        line-height: 200px;
        width: 150px;
        height: 200px;
        background-color: $primary-yellow;
        color: $primary-white;
        border-radius: 0 30px 30px 0;
        text-align: center;

        &:hover {
          opacity: 0.7;
        }
      }
    }

    div.article-bottom {
      div.article-img {
        border-color: $primary-green;
        order: 3;
        border-radius: 0 30px 30px 0;
      }

      div.content {
        border-color: $primary-green;
        order: 2;

        h4 {
          background-color: $primary-green;
        }

        p {
          a {
            span {
              &:hover {
                color: $primary-green;
              }
            }
          }
        }
      }

      div.complete-article {
        background-color: $primary-green;
        order: 1;
        border-radius: 30px 0 0 30px;
      }
    }




    a.watch-all-article {
      display: block;
      width: 150px;
      height: 60px;

      div {
        text-align: center;
        line-height: 60px;
        background-color: $primary-blue;
        color: $primary-white;
        border-radius: 50px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
