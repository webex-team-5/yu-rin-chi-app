<template>
  <h1>アイスクリームチャート</h1>
  <div class="taste-container">
    <h4>あなたの食べたい味は？？</h4>
    <button
      v-on:click="addActive(taste)"
      v-for="taste in tastes"
      :key="taste"
      v-bind:class="{ 'is-active': selectedTaste === taste }"
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
        this.hyoujiURL = require("@/assets/chihiro014.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/totoro015.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[0] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/howl016.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/kokurikozaka005 (1).jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/laputa015.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[1] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/majo043.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[0]
      ) {
        this.hyoujiURL = require("@/assets/ponyo035.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[1]
      ) {
        this.hyoujiURL = require("@/assets/ponyo011.jpg")
        this.text = "アイス"
      } else if (
        this.selectedTaste === this.tastes[2] &&
        this.selectedHow === this.hows[2]
      ) {
        this.hyoujiURL = require("@/assets/laputa033.jpg")
        this.text = "アイス"
      }
    },
  },
}
</script>

<style scoped>
.is-active {
  background-color: pink;
}

.hyoujiURL {
  height: 300px;
}
</style>
