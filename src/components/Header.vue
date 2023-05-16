<template>
  <div class="index-header" id="page-top">
    <a href="#">
      <img
        class="logo"
        src="../assets/icons/logo/major-logo.svg"
        alt="幼樂園Yo-La! Logo"
      />
    </a>
    <a href="#">
      <img
        class="nav-button"
        src="../assets/icons/logo/flag.svg"
        alt="選單按鈕"
      />
    </a>
    <div class="social-media">
      <a href="#">
        <div class="fb"><i class="fa-brands fa-square-facebook"></i></div>
      </a>
      <a href="#">
        <div class="ig"><i class="fa-brands fa-instagram"></i></div>
      </a>
      <a href="#">
        <div class="yt"><i class="fa-brands fa-youtube"></i></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.index-header {
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0px;
  border-bottom: 1px solid $secondary-grey;

  img.logo {
    position: absolute;
    width: 170px;
    height: 80px;
    left: calc(50% - 170px / 2);
    top: calc(50% - 80px / 2);
  }

  img.nav-button {
    position: absolute;
    width: 50px;
    height: 45px;
    right: 50px;
    top: calc(50% - 45px / 2);
  }

  div.social-media {
    position: absolute;
    left: 5%;
    right: 80%;
    top: calc(50% - 50px / 2);
    display: flex;
    gap: 10px;

    div.fb,
    div.ig,
    div.yt {
      position: relative;
      width: 50px;
      height: 51px;
      background: $primary-white;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
      border-radius: $border-radius-circle;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        font-size: 25px;
      }
    }

    div.fb i {
      color: $primary-blue;
    }

    div.ig i {
      width: 25px;
      height: 25px;
      color: transparent;
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      -webkit-background-clip: text;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.yt i {
      color: $primary-red;
    }
  }
}
</style>
