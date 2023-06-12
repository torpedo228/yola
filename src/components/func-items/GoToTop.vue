<template>
  <div>
    <div class="go-to-top">
      <a href="#" v-scroll-to="'#page-top'">
        <img :src="require('@/assets/icons/func-items/go-to-top.svg')" alt="回到頂端" /></a>
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
  right: 3vmin;
  bottom: 3vmin;
  transition-duration: 1s;
  z-index: 9999;

  img {

    @include custom-responsive("xs") {
      width: 15vmin;
    }

    @include custom-responsive("sm md lg") {
      width: 10vmin;
    }

    @include custom-responsive("xl xxl") {
      width: 10vmin;
    }

  }

  &:hover {
    transform: translate(0, -10px);
  }
}
</style>
