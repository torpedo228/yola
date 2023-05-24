<template>
  <div class="equipment-outter">
    <div class="equipment-wrap" :class="'equipment-' + color">
      <div class="pic">
        <img :src="imgSrc" alt="" />
      </div>
      <div class="portal-brick">
        <div class="circle-decoration"></div>
        <h4>{{ name }}</h4>
        <a href="">
          <div class="go-to-btn">
            活動 <i class="fa-solid fa-arrow-right"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
    name: String,
    authors: String,
    color: String,
  },
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

div.equipment-outter {
  @include unit-block(150px, 200px);

  div.equipment-wrap {
    @include vm();
    gap: 10px;

    div.pic,
    div.portal-brick {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 20px;
    }

    div.pic {
      border: 5px solid $primary-green;

      img {
        width: 100%;
        height: 100%;
      }
    }

    div.portal-brick {
      border: 5px solid $primary-green;

      div.circle-decoration {
        width: 80px;
        height: 80px;
        border-radius: $border-radius-circle;
        position: relative;
        top: -25%;
        right: -50%;
      }

      h4 {
        text-align: center;
        position: relative;
        top: -25%;
        margin: 0;
        font-size: $sub-info;
      }

      a {

        &:hover {
          opacity: 0.7;
        }

        &:active {}



        &:hover {
          i {
            transform: translateX(15px);
            transition: .5s;
          }
        }

        div.go-to-btn {
          position: relative;
          top: -20%;
          margin: auto;
          padding-left: 10px;
          width: 70px;
          height: 30px;
          border: 1px solid;
          border-radius: 20px;
          line-height: 32px;
          text-align: center;

          i {
            font-size: $content;



            &::before {
              width: 15px;
              height: 15px;
              display: block;
              padding: 2px;
              border-radius: $border-radius-circle;
            }
          }
        }
      }
    }
  }

  div.equipment-green {
    div.portal-brick {
      background-color: $primary-green;
      color: $primary-white;

      div.circle-decoration {
        background-color: $secondary-green;
      }

      h4 {
        color: $primary-white;
      }

      a {
        &:link {
          color: $primary-white;
        }

        &:visited {
          color: $primary-white;
        }


        div.go-to-btn {
          border-color: $primary-white;

          i {
            color: $primary-green;

            &::before {
              background-color: $primary-white;
            }
          }
        }
      }
    }
  }

  div.equipment-white {
    div.portal-brick {
      background-color: $primary-white;
      color: $primary-green;

      div.circle-decoration {
        background-color: $primary-green;
      }

      h4 {
        color: $primary-green;
      }

      a {


        &:link {
          color: $primary-green;
        }

        &:visited {
          color: $primary-green;
        }


        div.go-to-btn {
          border-color: $primary-green;

          i {
            color: $primary-white;



            &::before {
              background-color: $primary-green;
            }
          }
        }
      }
    }
  }
}
</style>
