<template>
  <div id="container">
    <div id="detail">
      <li>
        <h2>{{ items[iceNum].name }}</h2>
      </li>

      <img v-bind:src="items[iceNum].imgUrl" />
      <li>
        {{ items[iceNum].place[0] }}
      </li>
      <li>{{ items[iceNum].fee }}円</li>
      <li>{{ items[iceNum].taste[0] }}</li>
    </div>
    <div id="google-map" ref="map"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myLatLng: "",
      id: "a",
      ice: "hello",
      iceNum: 0,
      items: [
        {
          name: "金太郎ソフト",
          urlName: "kintarou",
          place: ["神奈川"],
          taste: ["牛乳"],
          fee: 390,
          category: "ミルク",
          forsearch: "金太郎",
          imgUrl: require("@/assets/image/kintarou.jpg"),
          lat: 35.312782,
          lng: 138.967133,
        },
        {
          name: "アイスコルネット",
          urlName: "ice_cornet",
          place: ["北海道"],
          taste: ["バニラ"],
          fee: 450,
          forsearch: "パン",
          category: "その他",
          imgUrl: require("@/assets/image/ice_cornet.png"),
          lat: 35.36733459122897,
          lig: 139.54589668875133,
        },
        {
          name: "安曇野りんごソフトクリーム",
          urlName: "azumino",
          place: ["長野", "expasa足柄", "足柄"],
          taste: ["りんご"],
          fee: 330,
          category: "フルーツ",
          forsearch: ["安曇野", "りんごソフト"],
          imgUrl: require("@/assets/image/azumino.png"),
          lat: 36.34064489226944,
          lig: 137.84155018256845,
        },
        {
          name: "本わさびソフト",
          urlName: "wasabi",
          place: ["山梨", "谷村", "谷村PA"],
          taste: ["わさび"],
          fee: 350,
          category: "和風",
          forsearch: "",
          imgUrl: require("@/assets/image/wasabi.png"),
          lat: 36.33971269081125,
          lig: 137.90866526907448,
        },
        {
          name: "金箔ソフト",
          urlName: "kinpaku",
          place: ["石川"],
          taste: ["バニラ"],
          fee: 891,
          category: "和風",
          forsearch: "金箔",
          imgUrl: require("@/assets/image/kinpaku.jpg"),
          lat: 36.573159999763966,
          lig: 136.66629982814024,
        },
        {
          name: "ラベンダーソフト",
          urlName: "rabenda",
          place: ["北海道"],
          taste: ["ラベンダー"],
          fee: 300,
          category: "フルーツ",
          imgUrl: require("@/assets/image/rabenda.png"),
          lat: 43.41895066162121,
          lig: 142.42791195281586,
        },
        {
          name: "味道楽ソフトクリーム",
          urlName: "ajidouraku",
          place: ["秋田"],
          taste: ["醤油"],
          fee: 330,
          category: "和風",
          forsearch: "味道楽",
          imgUrl: require("@/assets/image/ajidouraku.png"),
          lat: 39.52207530385149,
          lig: 140.37664185380163,
        },
        {
          name: "白い恋人ソフトクリーム",
          urlName: "siroikoibito",
          place: ["北海道", "白い恋人パーク"],
          taste: ["ホワイトチョコ", "ブラックチョコ", "ミックス"],
          fee: 400,
          category: "ミルク",
          forsearch: "白い恋人",
          imgUrl: require("@/assets/image/siroikoibito.jpg"),
          lat: 43.0891218879024,
          lng: 141.27173638441494,
        },
        {
          name: "チョコ南部アイス",
          urlName: "nanbutyoko",
          place: ["岩手"],
          taste: ["チョコ"],
          fee: 410,
          category: "ミルク",
          forsearch: "南部せんべい",
          imgUrl: require("@/assets/image/nanbutyoko.png"),
          lat: 40.252541375222336,
          lng: 141.2872484839152,
        },
        {
          name: "ババヘラアイス",
          urlName: "babahera",
          place: ["秋田"],
          taste: ["ブルーアイス", "メロン", "ソーダ", "レモン"],
          fee: 300,
          category: "フルーツ",
          forsearch: "ババヘラ",
          imgUrl: require("@/assets/image/babahera.png"),
          lat: 39.75193309914359,
          lng: 140.0619679550641,
        },
        {
          name: "殿様のだだちゃ豆アイスクリーム",
          urlName: "tadatyamame",
          place: ["山形", "JA鶴岡", "鶴岡"],
          taste: ["ただちゃ豆"],
          fee: 270,
          category: "ミルク",
          forsearch: ["ただちゃ豆", "殿様", "殿様アイス"],
          imgUrl: require("@/assets/image/tadatyamame.png"),
          lat: 38.730285868102904,
          lng: 139.77497886902088,
        },
        {
          name: "酪王カフェオレソフトクリーム",
          urlName: "cafe",
          place: ["福島"],
          taste: ["カフェオレ"],
          fee: 400,
          category: "ミルク",
          forsearch: ["酪王"],
          imgUrl: require("@/assets/image/cafe.png"),
          lat: 37.63647623778828,
          lng: 140.48322228725218,
        },
        {
          name: "元祖信玄ソフト",
          urlName: "singen",
          place: ["山梨"],
          taste: ["きなこ", "黒蜜", "信玄餅"],
          fee: 390,
          category: "ミルク",
          forsearch: ["信玄餅", "元祖"],
          imgUrl: require("@/assets/image/singen.png"),
          lat: 35.865999887397905,
          lng: 138.42767199358087,
        },
        {
          name: "仁王門屋の元祖そばソフトクリーム",
          urlName: "soba",
          place: ["長野", "仁王門屋"],
          taste: ["そば"],
          fee: 350,
          category: "和風",
          forsearch: ["信玄餅", "元祖"],
          imgUrl: require("@/assets/image/soba.png"),
          lat: 36.899235812813544,
          lng: 138.09527084457196,
        },
        {
          name: "セイヒョーもも太郎",
          urlName: "momotaro",
          place: ["新潟"],
          taste: ["いちご", "りんご"],
          fee: 400,
          category: "フルーツ",
          forsearch: ["セイヒョー", "もも太郎", "金太郎"],
          imgUrl: require("@/assets/image/momotaro.png"),
          lat: 37.93183511267325,
          lng: 139.16891848199555,
        },
        {
          name: "ちゅーりっぷソフト",
          urlName: "tyu-rip",
          place: ["富山"],
          taste: ["チューリップ"],
          fee: 380,
          category: "色々",
          forsearch: ["ちゅーりっぷ"],
          imgUrl: require("@/assets/image/tyu-rip.png"),
          lat: 36.73573451709186,
          lng: 136.94285759672925,
        },
        {
          name: "越前塩あずきソフト",
          urlName: "azuki",
          place: ["福井", "越前"],
          taste: ["あずき", "塩あずき"],
          fee: 300,
          category: "和風",
          forsearch: "",
          imgUrl: require("@/assets/image/azuki.png"),
          lat: 35.924586759280814,
          lng: 135.99796819790143,
        },
        {
          name: "いかすみソフト",
          urlName: "ikasumi",
          place: ["静岡"],
          taste: ["いかすみ"],
          fee: 350,
          category: "和風",
          forsearch: ["イカ墨", "イカスミ"],
          imgUrl: require("@/assets/image/ikasumi.png"),
          lat: 34.88025540978413,
          lng: 138.30314519788058,
        },
        {
          name: "レンコンソフトクリーム",
          urlname: "renkon",
          place: ["愛知"],
          taste: ["れんこん"],
          fee: 350,
          category: "ミルク",
          forsearch: ["レンコンソフト", "れんこん"],
          imgUrl: require("@/assets/image/renkon.png"),
          lat: 35.14446509454743,
          lng: 136.69451489603838,
        },
        {
          name: "ブルーシールアイス",
          urlname: "blue",
          place: ["沖縄"],
          taste: ["紅イモ"],
          fee: 330,
          category: "その他",
          forsearch: ["ブルーシール"],
          imgUrl: require("@/assets/image/blue.png"),
          lat: 26.330185101243583,
          lng: 127.75246681188305,
        },
      ],
    }
  },
  mounted() {
    this.iceNum = this.$route.params.ice
    let targetIce = this.items[this.iceNum]
    this.myLatLng = { lat: targetIce.lat, lng: targetIce.lng }
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
<style scoped>
* {
  background-color: rgb(255, 240, 240);
}
#google-map {
  height: 500px;
  width: 40%;
  margin: auto;
}
#container {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
}
#detail {
  height: 700px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  width: 40%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  margin: 20px auto;
}

li {
  width: 100%;
  list-style: none;
  font-size: large;
}
</style>
