<template>
  <h2>アイスクリームチャート</h2>
  <div class="taste-container">
    <h4>あなたの食べたい味は？？</h4>
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
    <h4>どんなアイスを食べてみたい？？</h4>
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
    <h4>あなたにぴったりなアイスは...?</h4>
    <button v-on:click="resultButton">これだ！</button>
    <img v-bind:src="hyoujiURL" class="hyoujiURL" />
    {{ text }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      tastes: ["甘～い", "すっきり", "濃厚"],
      hows: ["定番の味！", "ご当地限定アイス！", "オトナなアイス...♡"],
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
        this.hyoujiURL = require("@/assets/chihiro014.jpg")
        this.text = "プルーシールアイス"
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/totoro015.jpg")
        this.text = "栗ジャムソフト"
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/howl016.jpg")
        this.text = "味どうらくソフト"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/kokurikozaka005 (1).jpg")
        this.text = "どうしよう"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/laputa015.jpg")
        this.text = "ラベンダーソフト"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/majo043.jpg")
        this.text = "わさびソフト"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/ponyo035.jpg")
        this.text = "どうしようか"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/ponyo011.jpg")
        this.text = "何がいいかな"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/laputa033.jpg")
        this.text = "金箔ソフト"
      }
    },
  },
}
</script>

<style scoped>
/*タイトルデザイン*/
h2 {
  position: relative;
  display: inline-block;
  padding: 0 65px;
  text-align: center;
}
h2:before,
h2:after {
  position: absolute;
  top: calc(50% - 3px);
  width: 50px;
  height: 6px;
  content: '';
  border-top: solid 2px #000;
  border-bottom: solid 2px #000;
}
h2:before {
  left: 0;
}
h2:after {
  right: 0;
}

.taste-container {
  margin: 0 auto;
}
.is-active {
  background-color: pink;
}
.btn-circle-stitch {
  text-decoration: none;
  color: black;
  width: 230px;
  height: 230px;
  line-height: 120px;
  border-radius: 20%;
  text-align: center;
  overflow: hidden;
  box-shadow: 0px 0px 0px 5px pink;
  border: dashed 1px #fff;
  margin-right: 100px;
}

.hyoujiURL {
  height: 300px;
}
</style>
