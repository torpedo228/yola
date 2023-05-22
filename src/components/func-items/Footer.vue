<template>
  <div class="index-footer">
    <div class="footer-content-wrap">
      <!-- <div class="decoration-wrapper">
        <img class="footer-decoration" src="../../assets/decorations/footer.svg" alt="footer裝飾" />
      </div> -->
      <ul class="footer_link">

        <li class="link_item"><a href="#">網站導覽</a></li>
        <li>|</li>
        <li class="link_item"><a href="#">關於幼樂園</a></li>
        <li>|</li>
        <li class="link_item"><a href="#">常見問題</a></li>
        <li>|</li>
        <li class="link_item"><a href="#">參考資源</a></li>
        <li>|</li>
        <li class="link_item"><a href="#">聯絡我們</a></li>
      </ul>
      <p>
        本網站為緯育TibaMe前端工程師班第85期學員專題作品，本平台僅供學習、展示之用。參考資源:
        新北市幼兒教育資訊網、全國教保資訊網
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.index-footer {
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;


  div.footer-content-wrap {
    width: 100%;
    padding: 10px 0;
    background-color: $primary-blue;
    font-size: $content;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-content: center;
    // gap: $content/3;

    &::before {
      display: block;
      content: "";
      background: url("../../assets/decorations/footer.svg");
      width: 100vw;
      height: 2vw;
      background-repeat: repeat-x;
      position: absolute;
      top:-30%;

    }

    div.decoration-wrapper {
      position: relative;
      width: 100%;

      bottom: 65%;
      overflow-x: hidden;


    }

    ul {
      display: flex;
      justify-content: center;
      margin: 0;

      li {
        color: $primary-white;
        padding: 0 3px;

        a {
          &:link {
            color: $primary-white;
          }

          &:visited {
            color: $primary-white;
          }

          &:hover {
            color: $secondary-blue;
          }

          &:active {
            color: $primary-red;
          }
        }
      }
    }

    p {
      color: $primary-white;
      text-align: center;
      margin: 0;
    }
  }
}
</style>
