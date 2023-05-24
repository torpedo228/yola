<template>
  <div class="physical-fitness-and-rhythm-movement-container">
    <BreadCrumb />
    <SectionTitle
      title="體能 Physical Fitness"
      :imgSrc="require('@/assets/icons/logo/physical-fitness-logo.svg')"
      alt="體能logo"
    />
    <a
      href=""
      class="go-to-rhythm-and-movement-section"
      v-scroll-to="'#rhythm-movement'"
    >
      直接前往律動
    </a>
    <MotorDevelopmentPortal />
    <div class="motor-development-decoration">
      <img src="../../assets/decorations/motor-development-portal.svg" alt="" />
    </div>

    <EquipmentAndActivity />

    <SectionTitle
      title="律動 Rhythm and Movement"
      :imgSrc="require('@/assets/icons/logo/rhythm-and-movement-logo.svg')"
      alt="律動logo"
    />
    <HotSongs />
    <router-view />
  </div>
</template>

<script>
import BreadCrumb from "@/components/func-items/BreadCrumb.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import MotorDevelopmentPortal from "@/views/sections/physical-fitness-and-rhythm-movement/MotorDevelopmentPortal.vue";
import EquipmentAndActivity from "@/views/sections/physical-fitness-and-rhythm-movement/EquipmentAndActivity.vue";

import HotSongs from "@/views/sections/physical-fitness-and-rhythm-movement/HotSongs.vue";

export default {
  components: {
    BreadCrumb,
    SectionTitle,
    MotorDevelopmentPortal,
    EquipmentAndActivity,
    HotSongs,
  },
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

div.physical-fitness-and-rhythm-movement-container {
  width: 100%;
  margin-top: 80px;
  position: relative;

  a.go-to-rhythm-and-movement-section {
    display: block;
    width: 150px;
    height: 50px;
    background-color: $primary-green;
    color: $primary-white;
    line-height: 50px;
    text-align: center;
    position: absolute;
    right: 15%;
    top: 3%;
    border-radius: 30px;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      background-color: $secondary-green;
    }
  }

  div.motor-development-decoration {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 69vh;

    img {
      width: 100%;
    }
  }
}
</style>
