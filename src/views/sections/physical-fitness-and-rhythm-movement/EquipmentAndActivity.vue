<template>
  <div class="equipment-and-activity-container">
    <SubSectionTitle title="器材與活動 Equipment and Activity" :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
      alt="器材與活動logo" />

    <div class="equipment-row-wrap">
      <EquipmentAndActivityCard v-for="(equipment, equipmentNo) in equipments" :key="equipmentNo"
        :imgSrc="equipment.imgSrc" :name="equipment.name" :color="equipment.color" />
    </div>

    <div class="equipment-row-wrap">
      <EquipmentAndActivityCard v-for="(equipment, equipmentNo) in equipments" :key="equipmentNo"
        :imgSrc="equipment.imgSrc" :name="equipment.name" :color="equipment.color" />
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/SubSectionTitle.vue";
import EquipmentAndActivityCard from "@/components/physical-fitness-and-rhythm-movement/EquipmentAndActivityCard.vue";

export default {
  props: {
    imgSrc: String,
    name: String,
    color: String,
  },
  components: { SubSectionTitle, EquipmentAndActivityCard },
  data() {
    return {
      equipments: [
        {
          imgSrc: require("../../../assets/images/physical-fitness/Equipment-and-Activity/scarf.png"),
          name: "方巾 / 絲巾",
          color: "green",
        },
        {
          imgSrc: require("../../../assets/images/physical-fitness/Equipment-and-Activity/skateboard.jpg"),
          name: "滑板車",
          color: "white",
        },
        {
          imgSrc: require("../../../assets/images/physical-fitness/Equipment-and-Activity/air-stick.png"),
          name: "空氣棒",
          color: "green",
        },
        {
          imgSrc: require("../../../assets/images/physical-fitness/Equipment-and-Activity/balance-bike.jpg"),
          name: "滑步車",
          color: "white",
        },
        {
          imgSrc: require("../../../assets/images/physical-fitness/Equipment-and-Activity/ball.jpg"),
          name: "皮球",
          color: "green",
        },
      ],
    };
  },
  mounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

div.equipment-and-activity-container {
  @include vm();
  margin-bottom: 30px;


  div.equipment-row-wrap {
    width: 100%;
    @include hm();
    gap: 10px;
    margin-bottom: 120px;
  }
}
</style>
