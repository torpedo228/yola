<template>
  <div>
    <SectionTitle
      title="繪本故事 Storybooks"
      :imgSrc="require('@/assets/icons/logo/storybooks-logo.svg')"
      alt="繪本故事logo"
    />

    
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { SectionTitle },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";
</style>
