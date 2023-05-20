<template>
  <div class="container" id="latest-news">
    <SectionTitle
      title="最新消息 Latest News"
      :imgSrc="require('@/assets/icons/logo/sub-title-logo.svg')"
      alt="最新消息logo"
    />
    <Carousel :itemsToShow="2.5" :wrapAround="true" :transition="500">
      <Slide v-for="slide in 1" :key="slide">
        <img
          src="../../../assets/images/home/latest-news/latest-news-1.svg"
          alt=""
        />
        <div class="carousel__item"></div>
      </Slide>
      <Slide v-for="slide in 1" :key="slide">
        <img
          src="../../../assets/images/home/latest-news/latest-news-2.svg"
          alt=""
        />
        <div class="carousel__item"></div>
      </Slide>

      <Slide v-for="slide in 1" :key="slide">
        <img
          src="../../../assets/images/home/latest-news/latest-news-3.svg"
          alt=""
        />
        <div class="carousel__item"></div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle.vue";

import { defineComponent } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    SectionTitle,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/all.scss";

.carousel__slide {
  margin: 20px 0;
}

.carousel__viewport {
  perspective: 2000px;
}

ol.carousel__pagination {
  li.carousel__pagination-item {
    width: 200px;

    button.carousel__pagination-button {
    }
  }
}

button.carousel__prev {
  width: 400px;
}

button.carousel__next {
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

div.container {
  width: 100%;
  height: 600px;
  position: relative;
}
</style>
