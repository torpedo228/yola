<template>
  <div :class="$store.state.showOverlay ? 'overlay-on' : 'overlay-off'"></div>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() { },
  watch: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

.overlay-on {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0.7);

  animation-name: showOverlay;
  -webkit-animation-name: showOverlay;
  animation-duration: 0.5s;

  @keyframes showOverlay {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.7);

    }
  }

  @-webkit-keyframes showOverlay {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }

    100% {
      background-color: rgba(0, 0, 0, 0.7);

    }
  }








}

.overlay-off {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  overflow-x: hidden;
  transition: 0.5s;
  background-color: rgba(0, 0, 0, 0);


  animation-name: closeOverlay;
  -webkit-animation-name: closeOverlay;
  animation-duration: 0.5s;

  @keyframes closeOverlay {
    0% {
      background-color: rgba(0, 0, 0, 0.7);
    }

    100% {
      background-color: rgba(0, 0, 0, 0);
      display: none;
    }
  }

  @-webkit-keyframes closeOverlay {
    0% {
      background-color: rgba(0, 0, 0, 0.7);
    }

    100% {
      background-color: rgba(0, 0, 0, 0);
      display: none;
    }
  }

}</style>
