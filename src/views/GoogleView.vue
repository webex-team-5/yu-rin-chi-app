npm i --save @fortawesome/vue-fontawesome@latest-3
<template>
  <div id="container">
    <div id="detail">
      <div class="title">
        <h2>{{ items[iceNum].name }}</h2>
      </div>

      <img v-bind:src="items[iceNum].imgUrl" />
      <div class="information">
        <li>🚩{{ items[iceNum].place[0] }}</li>
        <li>🪙{{ items[iceNum].fee }}円</li>
        <li>🍦{{ items[iceNum].taste[0] }}</li>
      </div>
      <li class="text-container">{{ items[iceNum].text }}</li>
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
          text: "口当たりがなめらかで牛乳の味わいを感じることができます！優しい甘さでさっぱりとしたミルクソフトクリームです。",
          fee: 390,
          category: "ミルク",
          forsearch: "金太郎",
          imgUrl: require("@/assets/image/kintarouu.jpg"),
          lat: 35.312782,
          lng: 138.967133,
        },
        {
          name: "アイスコルネット",
          urlName: "ice_cornet",
          place: ["神奈川"],
          taste: ["バニラ"],
          text: "揚げたてパンに冷たいアイスクリーム今までに体験したことのない味。アツアツにひえひえのコラボレーションがあなたを魅了します！",
          fee: 450,
          forsearch: "パン",
          category: "その他",
          imgUrl: require("@/assets/image/ice-cornet.png"),
          lat: 35.36733459122897,
          lng: 139.54589668875133,
        },
        {
          name: "安曇野りんごソフトクリーム",
          urlName: "azumino",
          place: ["長野", "expasa足柄", "足柄"],
          taste: ["りんご"],
          text: "安曇野産のリンゴを使用し、ひと口目から爽やかなリンゴの風味です！シャーベットのようなおいしさも感じられます♪",
          fee: 330,
          category: "フルーツ",
          forsearch: ["安曇野", "りんごソフト"],
          imgUrl: require("@/assets/image/azumino.png"),
          lat: 36.34064489226944,
          lng: 137.84155018256845,
        },
        {
          name: "本わさびソフト",
          urlName: "wasabi",
          place: ["山梨", "谷村", "谷村PA"],
          taste: ["わさび"],
          text: "空気と水のきれいな場所で採れるわさび。信州では安曇野が有名です。わさびソフトは、生乳ベースのソフトクリームにほんのりわさびが香るさわやかなおいしさで、リピーター続出!",
          fee: 350,
          category: "和風",
          forsearch: "",
          imgUrl: require("@/assets/image/wasabi.png"),
          lat: 36.33971269081125,
          lng: 137.90866526907448,
        },
        {
          name: "金箔ソフト",
          urlName: "kinpaku",
          place: ["石川"],
          taste: ["バニラ"],
          text: "金箔の街、金沢では金箔一枚を大胆に乗せたアイスクリームが食べられます。「箔一」というお店ではその名にちなんで891(ハクイチ)円で味わえます。",
          fee: 891,
          category: "和風",
          forsearch: "金箔",
          imgUrl: require("@/assets/image/kinpaku.jpg"),
          lat: 36.573159999763966,
          lng: 136.66629982814024,
        },
        {
          name: "ラベンダーソフト",
          urlName: "rabenda",
          place: ["北海道"],
          taste: ["ラベンダー"],
          text: "ラベンダーエキス入りのオリジナルソフトクリームです。さっぱりしているので暑い日にもおいしく食べられますよ☆",
          fee: 300,
          category: "フルーツ",
          imgUrl: require("@/assets/image/rabenda.png"),
          lat: 43.41895066162121,
          lng: 142.42791195281586,
        },
        {
          name: "味道楽ソフトクリーム",
          urlName: "ajidouraku",
          place: ["秋田"],
          taste: ["醤油"],
          text: "「味どうらく」は秋田県民におなじみのめんつゆです。醬油ベースの出汁の塩辛い味の後に、アイス本来の甘みが広がります。甘じょっぱさに病みつきになる人もいるのだとか...!",
          fee: 330,
          category: "和風",
          forsearch: "味道楽",
          imgUrl: require("@/assets/image/azi-douraku.png"),
          lat: 39.52207530385149,
          lng: 140.37664185380163,
        },
        {
          name: "白い恋人ソフトクリーム",
          urlName: "siroikoibito",
          place: ["北海道", "白い恋人パーク"],
          taste: ["ホワイトチョコ", "ブラックチョコ", "ミックス"],
          text: "定番のお土産、白い恋人！北海道産の生乳と「白い恋人」のチョコレートが合わさり、あっさりとした中にもコクのある味わいです。",
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
          text: "岩手県や青森県等のお土産品として定番の南部せんべいを使ったチョコレートアイスクリームです。アイス好きの間で有名なんだとか！",
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
          text: "秋田の方言で、中高年の女性を「ババ」と呼びます。ババがヘラで盛るからババヘラアイス。道端のパラソルの下で売られてるので駄菓子のように買えます♪",
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
          text: "山形の枝豆「だだちゃ豆」のつぶつぶがたくさん入っています。だだちゃ豆の濃厚な風味とミルクアイスの相性がぴったりで素材のおいしさが発揮されています！",
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
          text: "カフェフレーバ―が好きなら一度は食べておきたいところ。長年愛され続ける福島のソウルドリンクである酪王カフェオレの味をそのままアイスクリームで再現したアイスです",
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
          text: "濃厚なバニラソフトの上に、老舗金精軒の極上生信玄餅を3個トッピング。山梨県産の米100％で作られた餅はモッチモチ！",
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
          text: "長野はお蕎麦も有名ですね！蕎麦粉と蕎麦の実の両方を使用しています。しっかりとそばを感じる風味と、濃厚な香りが感じられ、一気になくなる軽やかな口溶けです。",
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
          text: "名前は「もも太郎」だけど、実は味は「いちご味」! たっぷりの氷粒にいちご味のシロップが合わさっています。かき氷を食べているようなザクザク食感と、さっぱりした後味が特徴です♪",
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
          text: "富山の県花でもあるチューリップのエキスのシロップをバニラソフトに加えました。わずかにフローラルな香りがし、食べた後には、花蜜のような余韻が残ります。",
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
          text: "特産の越前塩を使用し塩のしょっぱさとあずきのほんのりした甘さが絶妙にマッチ♪ 病み付きになる美味しさです。甘いモノが苦手な方も食べられそうですね。",
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
          text: "バニラベースにイカスミを練り込んであります。イカスミ特有の生臭みはまったくありません！塩味と甘みのバランスがあとを引く美味しさです。",
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
          text: "バニラソフトにレンコンパウダーがたっぷり振りかけられています！レンコンチップものっていて、意外な組み合わせながらおいしいですよ♪",
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
          text: "アメリカ生まれ、沖縄育ちのブルーシールですが、最近ではいたるところで買えますね！紅イモやシークワーサーに塩ちんすこうなど、沖縄らしい味に注目です！",
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
          zoom: 7,
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
  background-color: #fcefef;
  color: #1a405f;
}
#google-map {
  height: 600px;
  width: 500px;
  margin: auto;
  padding-top: 30px;
  filter: drop-shadow(3px 3px 5px #000);
}
#container {
  display: flex;
  width: 100%;
  height: 100%;
}
#detail {
  height: 750px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
img {
  width: 60%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  margin: 20px auto;
  border: 5px solid #ffbebd;
}
li {
  width: 100%;
  list-style: none;
  font-size: large;
  padding-left: 20px;
  line-height: 40px;
}
.information {
  display: flex;
}
/*タイトルデザイン*/
.title {
  text-align: center;
  font-size: 20px;
}
h2 {
  position: relative;
  display: inline-block;
  padding: 0 65px;
}
h2:before,
h2:after {
  position: absolute;
  top: calc(50% - 3px);
  width: 50px;
  height: 6px;
  content: "";
  border-top: solid 2px #1a405f;
  border-bottom: solid 2px #1a405f;
}
h2:before {
  left: 0;
}
h2:after {
  right: 0;
}
.text-container {
  width: 90%;
  margin: 0 auto;
}
</style>
