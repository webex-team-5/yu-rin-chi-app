<template>
  <div>
    <h1>Google Map</h1>
    <div ref="map" style="height: 500px; width: 800px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myLatLng: { lat: -34.397, lng: 150.644 },
    }
  },
  mounted() {
    let timer = setInterval(() => {
      if (window.google) {
        clearInterval(timer)
        const map = new window.google.maps.Map(this.$refs.map, {
          center: this.myLatLng,
          zoom: 8,
        })
        new window.google.maps.Marker({
          position: this.myLatLng,
          map,
        })
      }
    }, 500)
  },
}
</script>

<div style="width: 760px; height: 480px" id="map"></div>

<style scoped>
.map {
  height: 600px;
  width: 90%;
}
</style>
