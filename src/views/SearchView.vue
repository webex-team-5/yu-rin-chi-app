<template>
  <div id="search">
    <input type="text" v-model="searchWord" @input="searching" />
    <button v-on:click="search_button">検索</button>
  </div>
  <div id="item-container">
    <div class="ice" v-for="(item, index) in items" v-bind:key="index">
      <img v-bind:src="item.imgUrl" />
      <ul id="tag">
        <li>場所：{{ item.place }}</li>
        <li>味：{{ item.taste }}</li>
        <li>料金：{{ item.fee }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          number: 1,
          place: "福岡",
          taste: "いちご",
          fee: 400,
          imgUrl:
            "https://kabekin.com/uploads/converted/15/06/26/1262326841-ice-cream-with-sprinkles-30083-kRqx-1280x1024-MM-100.jpg",
        },
        {
          number: 2,
          place: "北海道",
          taste: "チョコ",
          fee: 300,
          imgUrl:
            "https://th.bing.com/th/id/OIP.7vdQirHbF_f2_JV0b9LP-QHaEo?pid=ImgDet&rs=1",
        },
        {
          number: 3,
          place: "愛知",
          taste: "チョコ",
          fee: 300,
          imgUrl:
            "https://static.retrip.jp/spot/0a91c428-182c-42a6-845e-c9fce5088d94/images/7f2c2895-f982-40aa-8b56-df546e53820d_l.jpg",
        },
        {
          number: 4,
          place: "沖縄",
          taste: "チョコ",
          fee: 300,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
      ],
      searchWord: "",
    }
  },
  methods: {
    search_button: function () {
      this.items.forEach(function (item) {
        console.log(Object.values(item))
        console.log(this.searchWord)
      })
    },
  },
}
</script>
<style scoped>
img {
  height: 200px;
  aspect-ratio: 4/3;
}
#item-container {
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.ice {
  display: flex;
  flex-direction: column;
}
</style>
