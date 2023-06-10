<template>
  <div class="footer-container">
    <div class="footer-content-wrap">
      <div class="decoration-stripe"><img :src="require('@/assets/decorations/main/footer.svg')" alt=""></div>
      <ul class="footer_link">
        <li class="link_item"><a href="#">網站導覽</a></li>
        <li class="separator">|</li>
        <li class="link_item"><a href="#">關於幼樂園</a></li>
        <li class="separator">|</li>
        <li class="link_item"><a href="#">常見問題</a></li>
        <li class="separator">|</li>
        <li class="link_item"><a href="#">參考資源</a></li>
        <li class="separator">|</li>
        <li class="link_item"><a href="#">聯絡我們</a></li>
      </ul>
      <div class="ps">
        <span class="declaration">
          本網站為緯育TibaMe前端工程師班第85期學員專題作品，本平台僅供學習、展示之用。
        </span>
        <span class="reference">
          參考資源:
          新北市幼兒教育資訊網、全國教保資訊網
        </span>
      </div>
    </div>
  </div>
</template>
   
<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.footer-container {
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;


  div.footer-content-wrap {
    width: 100vw;
    background-color: $primary-blue;
    position: relative;

    padding: 2vh 0;

    div.decoration-stripe {
      width: 100%;
      overflow-x: hidden;
      height: 3vh;

      position: absolute;
      top: -3vh;

      img {
        height: 100%;
      }
    }


    @include custom-responsive("xs") {
      @include hm();
      gap: 8vw;
      font-size: 5vmin;
    }

    @include custom-responsive("sm md lg") {
      display: block;
      font-size: 2.5vmin;
    }

    @include custom-responsive("xl xxl") {
      display: block;
      font-size: 2.5vmin;
    }




    // &::before {
    //   display: block;
    //   content: "";
    //   background: url("../../assets/decorations/main/footer.svg");

    //   z-index: -10;
    // }

    ul {
      padding: 0;
      display: flex;
      justify-content: center;
      margin: 0;

      @include custom-responsive("xs") {
        flex-direction: column;
        gap: 2vh;
        margin: 2vh 0;
      }

      @include custom-responsive("sm md lg") {
        flex-direction: row;
        margin: 0;
      }

      @include custom-responsive("xl xxl") {
        flex-direction: row;
      }

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

      li.separator {
        @include custom-responsive("xs") {
          display: none;
        }

        @include custom-responsive("sm md lg") {
          display: block;
        }

        @include custom-responsive("xl xxl") {
          display: block;
        }
      }
    }

    div.ps {

      text-align: center;

      @include custom-responsive("xs") {}

      width: 50vw;

      @include custom-responsive("sm md lg") {
        width: 100%;
      }

      @include custom-responsive("xl xxl") {
        width: 100%;
      }

      span {
        color: $primary-white;
        text-align: center;
        margin: 0;

        @include custom-responsive("xs") {}

        display: block;
        margin: 3vh 0;

        @include custom-responsive("sm md lg") {
          display: block;
          margin: 0;
        }

        @include custom-responsive("xl xxl") {
          display: inline-block;
          margin: 0 1vw;
        }
      }
    }

  }
}
</style>
