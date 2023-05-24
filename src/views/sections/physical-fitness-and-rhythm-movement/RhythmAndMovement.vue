<template>
  <div class="rhythm-movement-container" id="rhythm-movement">
    <SubSectionTitle
      title="熱門歌單 Hot! Songs"
      :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
      alt="熱門歌單logo"
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

div.rhythm-movement-container{}

</style>
