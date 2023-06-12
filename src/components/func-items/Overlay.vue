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
  methods: {
    // fadeIn() {
    //   document.getElementById("overlay-on").style.display = "block";
    // },

    // fadeOut() {
    //   document.getElementById("overlay-off").style.display = "none";
    // }

  },
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
  background-color: black;
  opacity: 0.7;
  animation-name: fade-in;
  -webkit-animation-name: fade-in;
  animation-duration: 0.5s;

  @keyframes fade-in {
    0% {
      opacity: 0;
      height: 100%;
    }

    99% {
      opacity: 0.7;
      height: 100%;
    }

    100% {
      opacity: 0.7;
      height: 100%;
    }
  }

  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
      height: 100%;
    }

    99% {
      opacity: 0.7;
      height: 100%;
    }

    100% {
      opacity: 0.7;
      height: 100%;
    }
  }
}

.overlay-off {
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 1;
  right: 0;
  top: 0;
  overflow-x: hidden;
  transition: 2s;
  background-color: black;
  opacity: 0;
  // display: none;

  animation-name: fade-out;
  -webkit-animation-name: fade-out;
  animation-duration: 0.5s;

  @keyframes fade-out {
    0% {
      opacity: 0.7;
      height: 100%;
    }

    99% {
      opacity: 0;
      height: 100%;
    }

    100% {
      opacity: 0;
      height: 0%;
    }
  }

  @-webkit-keyframes fade-out {
    0% {
      opacity: 0.7;
      height: 100%;
    }

    99% {
      opacity: 0;
      height: 100%;
    }

    100% {
      opacity: 0;
      height: 0%;
    }
  }
}
</style>
