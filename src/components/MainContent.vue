<template>
  <div>
    <button @click="$store.commit('SET_LEARNING_CORNER_PAGE')">前往學習區</button>
    <LearningCorner v-if="$store.getters.isLearningCornerPage" />
  </div>
</template>

<script>
import LearningCorner from "@/components/LearningCorner.vue";

export default {
  components: { LearningCorner },
  data() {
    return {};
  },
  mounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div {
  button {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 20%;
    right:10%;
   
  }
}
</style>
