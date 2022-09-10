<template>
  <h1>アイスクリームチャート</h1>
  <form id="Q">
    <p>あなたの食べたい味は？？</p>
    <input
      type="radio"
      name="q1"
      value="3"
      v-model="picked"
      class="Radio-Input"
    />
    <span class="Radio-Text">甘～い</span>
    <input
      type="radio"
      name="q1"
      value="2"
      v-model="picked"
      class="Radio-Input"
    /><span class="Radio-Text">すっきり</span>
    <input
      type="radio"
      name="q1"
      value="1"
      v-model="picked"
      class="Radio-Input"
    /><span class="Radio-Text">濃厚</span>
    <p>どんなアイスを食べてみたい？？</p>
    <input
      type="radio"
      name="q2"
      value="20"
      v-model="wasted"
      class="Radio-Input"
    /><span class="Radio-Text">定番！みんなが好きな安定の味</span>
    <input
      type="radio"
      name="q2"
      value="10"
      v-model="wasted"
      class="Radio-Input"
    /><span class="Radio-Text">変わり種！ご当地限定のアイス！</span>
    <input
      type="radio"
      name="q2"
      value="1"
      v-model="wasted"
      class="Radio-Input"
    /><span class="Radio-Text"
      >贅沢なおいしさ...オトナなあなたに食べてほしいアイス</span
    >
  </form>
  <button v-on:click="hyouzi">あなたにぴったりなアイスをチェック！</button>
  <div>{{ text }}</div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      picked: "",
      wasted: "",
    }
  },
  methods: {
    hyouzi() {
      let A = Number(this.picked) + Number(this.wasted)
      if (A === 23) {
        this.text = "あなたにぴったりなのは甘くて定番の味のこれです。"
      } else if (A === 13) {
        this.text = "あなたにぴったりなのは甘くてご当地限定のこれです。"
      } else if (A === 4) {
        this.text = "あなたにぴったりなのは甘くて贅沢な大人のためのアイスです。"
      } else if (A === 22) {
        this.text = "あなたにぴったりなのはすっきりした定番のアイスです"
      } else if (A === 12) {
        this.text = "あなたにぴったりなのはすっきりしたご当地限定のアイスです"
      } else if (A === 3) {
        this.text =
          "あなたにぴったりなのはすっきりした、でもオトナのためのアイスです"
      } else if (A === 21) {
        this.text = "あなたにぴったりなのは濃厚な定番のアイスです"
      } else if (A === 11) {
        this.text = "あなたにぴったりなのは濃厚なご当地限定のアイスです"
      } else if (A === 2) {
        this.text = "あなたにぴったりなのは濃厚なオトナなアイスです"
      }
    },
  },
}
</script>

<style scoped>
/*初期設定*/
* {
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
* {
  box-sizing: border-box;
}
/*ラジオボタンを消す*/
.Radio-Input {
  appearance: none;
  position: absolute;
}
/*新しくボタンを作る*/
.Radio-Text::before {
  content: "";
  display: block;
  border-radius: 50%;
  border: 1px solid orange;
  width: 16px;
  height: 16px;
}
.Radio-Text::after {
  content: "";
  position: absolute;
  left: 4px;
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: orange;
}
.Radio-Text {
  position: relative;
  display: flex;
  align-items: center;
}
.Radio-Input:checked + .Radio-Text::after {
  content: "";
  position: absolute;
  left: calc(8px - 5px);
  display: block;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: orange;
}
</style>
