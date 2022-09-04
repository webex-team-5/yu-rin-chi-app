<template>
  <div id="app" class="mt-4">
    <div id="map"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      map: undefined,
    }
  },
  mounted() {
    const map = new this.$gm.Map(document.getElementById("map"), {
      center: { lat: 34.855273888888888, lng: 135.30649 }, //自由な緯度・経度を入力
      zoom: 10,
    })
    this.map = map
  },
}
</script>
