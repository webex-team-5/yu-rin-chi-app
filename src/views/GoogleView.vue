<template>
  <div id="app" class="mt-4">
    <div id="map" class="map"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      myLatLing: { lat: -34.397, lng: 150.644},
    };
  },
  mounted() {
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer);
    const map = new this.$gm.Map(document.getElementById("map"), {
      center: { lat: 34.855273888888888, lng: 135.30649 }, //自由な緯度・経度を入力
      zoom: 10,
    })
    new window.google.maps.Marker({
          position: this.myLatLng,
          map,
        });
  } 500)
 },
};
</script>
<style scoped>
.map {
  height: 600px;
  width: 90%;
}
</style>
