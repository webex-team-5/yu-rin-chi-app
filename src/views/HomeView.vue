＜自動スクロール＞
<template>
  <div class="home">Let's search icecream!</div>
  <Carousel :items-to-show="2.5" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <slide> <img src="../assets/ice_cornet.png" /> </slide>
        <slide> <img src="../assets/rabenda.png" /> </slide>
        <slide> <img src="../assets/renkon.png" /> </slide>
        <slide> <img src="../assets/tyu-rip.png" /> </slide>
        <slide> <img src="../assets/wasabi.png" /> </slide>
        <slide> <img src="../assets/tadatyamame.png" /> </slide>
      </div>
    </Slide>

    <template #addons>
      <navigation />
    </template>
  </Carousel>
</template>

<script>
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Navigation } from "vue3-carousel"

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
}
</script>

<style>
.home {
  /* background-color: rgba(251, 138, 217, 0.636); */
  background-image: url(../assets/icetop.png);
  font-size: 350%;
  font-weight: bold;
  padding-top: 17%;
  padding-bottom: 17%;
  color: white;

  background-color: #ffada4;
  animation: bg-color 18s infinite;
}
@keyframes bg-color {
  0% {
    background-color: #ffa99f;
  }
  20% {
    background-color: #fff0b2;
  }
  40% {
    background-color: #aaffbe;
  }
  60% {
    background-color: #92d2fc;
  }
  80% {
    background-color: #dda9f1;
  }
  100% {
    background-color: #ffa99f;
  }
}

.carousel__item {
  height: 500px;
  width: 1000%;
  display: flex;
  justify-content: center;
}
</style>
