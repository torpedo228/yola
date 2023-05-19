<template>
  <div>
    <BreadCrumb />
    <div class="nursery-rhymes-and-finger-rhymes">
      <router-view />
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";

export default {
  components: { BreadCrumb },
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("SET_NURSERY_RHYMES_AND_FINGER_RHYMES_PAGE");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";
div.nursery-rhymes-and-finger-rhymes {
  width: 100%;
  position: absolute;
  top: 10%;
  font-family: $light;
}
</style>
