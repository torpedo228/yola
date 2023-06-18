<template>
  <div class="motor-development-portal-container">
    <SubSectionTitle
      title="基本動作技能 Motor Development"
      :imgSrc="require('@/assets/icons/title/subtitle-logo.svg')"
      alt="基本動作技能icon"
    />

    <div class="portal-wrap">
      <div class="upper-portal">
        <a href="">穩定平衡</a>
        <a href="">協調控制</a>
      </div>

      <div class="lower-portal">
        <a href="">
          <div>穩定性 動作技能</div>
        </a>
        <a href="">
          <div>移動性 動作技能</div>
        </a>
        <a href="">
          <div>操作性 動作技能</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SubSectionTitle from "@/components/title/SubTitle.vue";

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

div.motor-development-portal-container {
  height: 600px;

  div.portal-wrap {
    width: 100%;
    @include vm();

    div.upper-portal,
    div.lower-portal {
      @include hm();
      gap: 40px;

      a {
        display: block;
        box-shadow: 10px 5px $secondary-green;
        color: $primary-white;
        font-size: $h4;
        text-align: center;
        border-radius: $border-radius-circle;
        background-color: $primary-green;

        &:hover {
          opacity: 0.7;
        }

        &:active {
          background-color: $secondary-green;
        }
      }
    }

    div.upper-portal {
      gap: 80px;

      a {
        width: 160px;
        height: 160px;
        line-height: 160px;
      }
    }

    div.lower-portal {
      a {
        width: 200px;
        height: 200px;
        line-height: 200px;
        z-index: 1;

        div {
          vertical-align: middle;
          text-align: center;
          width: 100px;
          display: inline-block;
          height: auto;
          line-height: 1;
        }
      }
    }
  }
}
</style>
