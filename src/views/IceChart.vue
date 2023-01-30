<template>
  <div class="title">
    <h2>アイスクリームチャート</h2>
  </div>
  <h3 class="heading" data-number="01">あなたの食べたい味は？</h3>
  <div class="taste-container">
    <button
      v-on:click="addActive(taste)"
      v-for="taste in tastes"
      :key="taste"
      v-bind:class="{ 'is-active': selectedTaste === taste }"
      class="btn-circle-stitch"
    >
      {{ taste }}
    </button>
  </div>

  <h3 class="heading" data-number="02">どんなアイスを食べてみたい？</h3>
  <div class="how-container">
    <button
      v-on:click="addDetective(how)"
      v-for="how in hows"
      :key="how"
      v-bind:class="{ 'is-active': selectedHow === how }"
      class="btn-circle-stitch"
    >
      {{ how }}
    </button>
  </div>

  <h3 class="heading" data-number="03">あなたにぴったりなアイスは...?</h3>
  <div class="result">
    <button v-on:click="resultButton" class="resultButton">
      <a>結果を見る</a>
    </button>
    <div v-show="isShow" class="result-container">
      <div class="hyoujiURL">
        <img v-bind:src="hyoujiURL" />
      </div>
      <div class="information">
        <h2 class="result-name">{{ name }}</h2>
        <div class="detail">
          <li>📍{{ place }}</li>
          <li>🪙{{ fee }}</li>
          <li>🍦{{ taste }}</li>
        </div>
        <li class="explain-text">{{ text }}</li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tastes: ["甘～いアイス", "すっきりしたアイス", "濃厚なアイス"],
      hows: ["定番の味！", "ご当地限定アイス！", "オトナなアイス☆"],
      selectedTaste: "",
      selectedHow: "",
      isShow: false,
      hyoujiURL: "",
      name: "",
      place: "",
      fee: "",
      taste: "",
      text: "",
    }
  },
  methods: {
    addActive(taste) {
      if (this.selectedTaste === taste) {
        this.selectedTaste = ""
      } else {
        this.selectedTaste = taste
      }
    },
    addDetective(how) {
      if (this.selectedHow === how) {
        this.selectedHow = ""
      } else {
        this.selectedHow = how
      }
    },
    resultButton() {
      this.isShow = !this.isShow
      if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/image/siroikoibito.jpg")
        this.name = "白い恋人ソフトクリーム"
        this.place = "北海道"
        this.taste = "ホワイトチョコ"
        ;(this.text =
          "定番のお土産!白い恋人！北海道産の生乳と「白い恋人」のチョコレートが合わさり、あっさりとした中にもコクのある味わいです。"),
          (this.fee = 400)
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/image/azuki.png")
        this.name = "越前塩あずきソフト"
        this.place = "福井"
        this.taste = "あずき"
        ;(this.text =
          "特産の越前塩を使用し塩のしょっぱさとあずきのほんのりした甘さが絶妙にマッチ♪ 病み付きになる美味しさです。甘いモノが苦手な方も食べられそうですね。"),
          (this.fee = 300)
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/image/azi-douraku.png")
        this.name = "味どうらくソフト"
        this.place = "秋田"
        this.taste = "醤油"
        ;(this.text =
          "「味どうらく」は秋田県民におなじみのめんつゆです。醬油ベースの出汁の塩辛い味の後に、アイス本来の甘みが広がり、甘じょっぱさに病みつきになる人もいるのだとか...!"),
          (this.fee = 300)
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/image/azumino.png")
        this.name = "安曇野りんごソフト"
        this.place = "長野"
        this.taste = "りんご"
        ;(this.text =
          "安曇野産のリンゴを使用し、ひと口目から爽やかなリンゴの風味です。シャーベットのようなおいしさも感じられます"),
          (this.fee = 330)
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/image/rabenda.png")
        this.name = "ラベンダーソフト"
        this.place = "北海道"
        this.taste = "ラベンダー"
        ;(this.text =
          "ラベンダーエキス入りのオリジナルソフトクリームです。さっぱりしているので暑い日にもおいしく食べられますよ☆"),
          (this.fee = 300)
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/image/wasabi.png")
        this.name = "わさびソフト"
        this.place = "山梨"
        this.taste = "わさび"
        ;(this.text =
          "空気と水のきれいな場所で採れるわさび。信州では安曇野が有名です。わさびソフトは、生乳ベースのソフトクリームにほんのりわさびが香るさわやかなおいしさで、リピーター続出です！"),
          (this.fee = 350)
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/image/singen.png")
        this.name = "元祖信玄ソフト"
        this.place = "山梨"
        this.taste = "きなこ、黒蜜"
        ;(this.text =
          "濃厚なバニラソフトの上に、老舗金精軒の極上生信玄餅を3個トッピング。山梨県産の米100％で作られた餅はモッチモチ！"),
          (this.fee = 390)
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/image/nanbutyoko.png")
        this.name = "チョコ南部アイス"
        this.place = "岩手"
        this.taste = "チョコ"
        ;(this.text =
          "岩手県や青森県等のお土産品として定番の南部せんべいを使ったチョコレートアイスクリームです。アイス好きの間で有名なんだとか！"),
          (this.fee = 410)
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/image/kinpaku.jpg")
        this.name = "金箔ソフト"
        this.place = "石川"
        this.taste = "バニラ"
        ;(this.text =
          "金箔の街、金沢では金箔一枚を大胆に乗せたアイスクリームが食べられます。「箔一」というお店ではその名にちなんで891(ハクイチ)で味わえます。"),
          (this.fee = 891)
      }
    },
  },
}
</script>

<style scoped>
* {
  color: #1a405f;
  background-color: #fcefef;
}
/*タイトルデザイン*/
.title {
  text-align: center;
  font-size: 20px;
  padding-top: 40px;
  padding-bottom: 20px;
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
  border-top: solid 2px #000;
  border-bottom: solid 2px #000;
}
h2:before {
  left: 0;
}
h2:after {
  right: 0;
}
/*選択ボタンデザイン*/
.btn-circle-stitch {
  text-decoration: none;
  width: 230px;
  height: 230px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #337bae;
  border: dashed 1px #fff;
  margin: 30px;
  font-size: 20px;
  background-color: white;
  font-weight: bold;
}
.is-active {
  background-color: #337bae;
  color: white;
}
/*質問デザイン*/
.heading {
  position: relative;
  font-size: 26px;
  text-align: left;
  padding: 30px 180px;
  margin: 0 auto;
}
.heading::before {
  content: attr(data-number);
  display: inline-block;
  margin-right: 20px;
  color: #ffbebd;
  font-size: 30px;
  border-bottom: 1px solid #ffbebd;
}
/*結果表示ボタン*/
.result {
  padding-bottom: 40px;
}
.resultButton {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 240px;
  padding: 10px 25px;
  color: #ffbebd;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background-color: white;
  border-radius: 50px;
  border: 0.2rem solid #ffbebd;
  box-shadow: 0.2rem 0.2rem 0px 0.1rem #cccccc;
}
.resultButton:hover {
  transform: translate3d(0.2rem, 0.2rem, 0);
  box-shadow: none;
  opacity: 1;
  transition: all 0.2s;
}
.resultButton:after {
  content: "";
  width: 5px;
  height: 5px;
  border-top: 3px solid #ffbebd;
  border-right: 3px solid #ffbebd;
  transform: rotate(45deg) translateY(-50%);
  position: absolute;
  top: 50%;
  right: 20px;
  border-radius: 1px;
  transition: 0.3s ease-in-out;
}
.resultButton a {
  background-color: white;
}
/*結果内容*/
.result-container {
  display: flex;
  margin: 0 auto;
  width: 100%;
}
.hyoujiURL {
  width: 45%;
  padding-top: 30px;
}
.information {
  width: 55%;
  padding-top: 70px;
}
.hyoujiURL img {
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  margin: 20px auto;
  border: 5px solid #ffbebd;
  height: 300px;
  float: right;
}
li {
  width: 100%;
  list-style: none;
  font-size: large;
  padding-left: 20px;
  line-height: 40px;
}
.result-name {
  float: left;
  margin-left: 80px;
}
.detail {
  display: flex;
  padding: 15px 0;
  width: 70%;
  margin: 0 auto;
  float: left;
}
.explain-text {
  width: 70%;
  margin: 0 auto;
  float: left;
}
</style>
