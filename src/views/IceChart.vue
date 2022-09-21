<template>
  <div class="title">
    <h2>アイスクリームチャート</h2>
  </div>
  <div class="taste-container">
    <h3 class="heading" data-number="01">あなたの食べたい味は？？</h3>
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

  <div class="how-container">
    <h3 class="heading" data-number="02">どんなアイスを食べてみたい？？</h3>
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

  <div class="result">
    <h3 class="heading" data-number="03">あなたにぴったりなアイスは...?</h3>
    <button v-on:click="resultButton">これだ！</button>
    <img v-bind:src="hyoujiURL" class="hyoujiURL" />
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tastes: ["甘～いアイス", "すっきりしたアイス", "濃厚なアイス"],
      hows: [
        "みんな大好き定番の味！",
        "なんだこれは！ご当地限定アイス！",
        "オトナなあなたにぜひ...♡",
      ],
      selectedTaste: "",
      selectedHow: "",
      hyoujiURL: "",
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
      if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/image/siroikoibito.jpg")
        this.text = "白い恋人ソフトクリーム"
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/image/azuki.png")
        this.text = "越前塩あずきソフト"
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/image/ajidouraku.png")
        this.text = "味どうらくソフト"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/image/azumino.png")
        this.text = "安曇野りんごソフト"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/image/rabenda.png")
        this.text = "ラベンダーソフト"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/image/wasabi.png")
        this.text = "わさびソフト"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/image/singen.png")
        this.text = "元祖信玄ソフト"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/image/nanbutyoko.png")
        this.text = "チョコ南部アイス"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/image/kinpaku.jpg")
        this.text = "金箔ソフト"
      }
    },
  },
}
</script>

<style scoped>
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
  border-top: solid 2px #000;
  border-bottom: solid 2px #000;
}
h2:before {
  left: 0;
}
h2:after {
  right: 0;
}
/*ボタンデザイン*/
.is-active {
  background-color: #fffbb3;
}
.btn-circle-stitch {
  text-decoration: none;
  color: black;
  width: 230px;
  height: 230px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px #fffbb3;
  border: dashed 1px #fff;
  margin: 0 auto;
}
/*質問デザイン*/
.heading {
  position: relative;
  font-size: 26px;
}
.heading::before {
  content: attr(data-number);
  display: inline-block;
  margin-right: 20px;
  color: #f19d85;
  font-size: 30px;
  border-bottom: 1px solid #f19d85;
}

.hyoujiURL {
  height: 300px;
}
</style>
