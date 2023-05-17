<template>
  <div class="page-header" id="page-top">
    <a href="#">
      <img
        class="logo"
        src="https://torpedo228.github.io/resources/yola/icons/logo/major-logo.svg"
        alt="幼樂園Yo-La! Logo"
      />
    </a>
    <a href="#" @click="$store.commit('SET_INDEX_PAGE')">
      <img
        class="nav-button"
        src="https://torpedo228.github.io/resources/yola/icons/logo/flag.svg"
        alt="選單按鈕"
      />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.page-header {
  position: fixed;
  width: 100%;
  height: 80px;
  left: 0px;
  border-bottom: 1px solid $secondary-grey;

  img.logo {
    position: absolute;
    width: 140px;
    height: 100%;
    left: 2%;
    top: calc(50% - height / 2);
  }

  img.nav-button {
    position: absolute;
    width: 40px;
    height: 100%;
    right: 2%;
    top: calc(50% - height / 2);
  }
}
</style>
