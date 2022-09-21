＜自動スクロール＞
<template>
  <div class="home">Let's search icecream!</div>
  <Carousel :autoplay="2000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <slide> <img src="../assets/ice_cornet.png" /> </slide>
      </div>
      <div class="carousel__item">
        <slide> <img src="../assets/rabenda.png" /> </slide>
      </div>
      <div class="carousel__item">
        <slide> <img src="../assets/renkon.png" /> </slide>
      </div>
      <div class="carousel__item">
        <slide> <img src="../assets/tyu-rip.png" /> </slide>
      </div>
      <div class="carousel__item">
        <slide> <img src="../assets/wasabi.png" /> </slide>
      </div>
      <div class="carousel__item">
        <slide> <img src="../assets/tadatyamame.png" /> </slide>
      </div>
    </Slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
}
</script>

<style>
.home {
  background-color: rgba(251, 138, 217, 0.636);
  background-image: url(../assets/icetop.png);
  font-size: 350%;
  font-weight: bold;
  padding-top: 17%;
  padding-bottom: 17%;
  color: white;
}
.carousel__slide {
  height: 500px;
  display: flex;
  justify-content: center;
}
</style>
