<template>
  <div>
    <SubSectionTitle
      title="器材與活動 Equipment and Activity"
      :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
      alt="器材與活動logo"
    />




    
  </div>
</template>

<script>
import SubSectionTitle from "@/components/SubSectionTitle.vue";

export default {
  components: { SubSectionTitle },
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
