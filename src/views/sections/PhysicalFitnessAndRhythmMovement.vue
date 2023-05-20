<template>
  <div class="container">
    <BreadCrumb />
      <SectionTitle
        title="體能 Physical Fitness"
        :imgSrc="require('@/assets/icons/logo/physical-fitness-logo.svg')"
        alt="體能logo"
      />
      <SectionTitle
        title="律動 Rhythm and Movement"
        :imgSrc="require('@/assets/icons/logo/rhythm-and-movement-logo.svg')"
        alt="律動logo"
      />
      <router-view />
    </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: { BreadCrumb,SectionTitle },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_PHYSICAL_FITNESS_AND_RHYTHM_MOVEMENT_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.container{
  width: 100%;
  height: 700px;
  margin-top:80px;
  position: relative;
}
</style>
