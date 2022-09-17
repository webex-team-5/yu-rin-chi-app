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
<script type="text/javascript">
// Create the script tag, set the appropriate attributes
var script = document.createElement("script")
script.src =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyChEfRcclsB7fXz3FwJOkOhIBbiXGaRZ6c&callback=initMap"
script.async = true

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
  mapobj = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.681263, lng: 139.767937 },
    zoom: 13,
  })

  var markerPosition = new google.maps.LatLng(35.710139, 139.810833)
  var marker = new google.maps.Marker({
    position: markerPosition,
    title: "東京スカイツリー",
  })
  marker.setMap(mapobj)
}

// Append the 'script' element to 'head'
document.head.appendChild(script)
</script>

<div style="width: 760px; height: 480px" id="map"></div>

<style scoped>
.map {
  height: 600px;
  width: 90%;
}
</style>
