<template>
  <div>
    <div class="go-to-top">
      <a href="#" v-scroll-to="'#page-top'">
        <img src="../assets/icons/go-to-top.svg" alt="回到頂端"
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.go-to-top {
  position: fixed;
  right: 30px;
  bottom: 80px;
  transition-duration: 1s;

  img {
    width: 60px;
  }

  &:hover {
    transform: translate(0, -10px);
  }
}
</style>
