<template>
  <h1>アイスクリームチャート</h1>
  <div class="taste-container">
    <h4>あなたの食べたい味は？？</h4>
    <button v-on:click="tasteButton($event1)">
      {{ tastes[0] }}
    </button>
    <button v-on:click="tasteButton($event2)">
      {{ tastes[1] }}
    </button>
    <button v-on:click="tasteButton($event3)">
      {{ tastes[2] }}
    </button>
  </div>

  <div class="how-container">
    <h4>どんなアイスを食べてみたい？？</h4>
    <button v-on:click="howButton($event4)">
      {{ hows[0] }}
    </button>
    <button v-on:click="howButton($event5)">
      {{ hows[1] }}
    </button>
    <button v-on:click="howButton($event6)">
      {{ hows[2] }}
    </button>
  </div>

  <div class="result">
    <h4>あなたにぴったりなアイスは...?</h4>
    <div class="pictures" v-bind:class="{ 'is-active': active === picture }">
      {{ picture }}
    </div>
    <button v-on:click="resultButton(picture)">これだ！{{ hyoujiURL }}</button>
  </div>

  <div>
  <div v-for="task in tasks" :key="task.id">
    <div class="task__title">{{task.title}}</div>

    <div class="task__body" v-bind:class="{'is-active':active === task}" >{{task.body}}
  </div>
  <button v-on:click="addActive(task)">bodyにclassをつける</button>

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
      active: null,
      hyoujiURL: "",
    }
  },
  methods: {
    resultButton(picture) {
      if (this.active === $event1 && $event4) {
        this.hyoujiURL = URL.createObjectURL(assets/logo.png),
      } else {
      }
    },
  },
}
</script>
