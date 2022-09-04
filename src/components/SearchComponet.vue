<template>
  <div id="search">
    <input
      type="text"
      v-model="searchWord"
      @input="searching"
      v-on:keydown.enter="searchButton"
    />
    <button v-on:click="searchButton">検索</button>
    <form>
      <input
        type="range"
        v-model="rangeBar"
        v-on:keydown.enter="searchButton"
        min="0"
        max="1000"
        step="50"
      /><label><br />¥{{ rangeBar }}以内</label>
    </form>
  </div>
  <div id="item-container">
    <div class="ice" v-for="(item, index) in displayItems" v-bind:key="index">
      <img v-bind:src="item.imgUrl" />
      <ul id="tag">
        <li>場所：{{ item.place }}</li>
        <li>味：{{ item.taste }}</li>
        <li>料金：￥{{ item.fee }}</li>
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
          place: "福岡",
          taste: "いちご",
          fee: 120,
          imgUrl:
            "https://kabekin.com/uploads/converted/15/06/26/1262326841-ice-cream-with-sprinkles-30083-kRqx-1280x1024-MM-100.jpg",
        },
        {
          place: "北海道",
          taste: "チョコ",
          fee: 310,
          imgUrl:
            "https://th.bing.com/th/id/OIP.7vdQirHbF_f2_JV0b9LP-QHaEo?pid=ImgDet&rs=1",
        },
        {
          place: "愛知",
          taste: "チョコ",
          fee: 420,
          imgUrl:
            "https://static.retrip.jp/spot/0a91c428-182c-42a6-845e-c9fce5088d94/images/7f2c2895-f982-40aa-8b56-df546e53820d_l.jpg",
        },
        {
          place: "沖縄",
          taste: "チョコ",
          fee: 1000,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
      ],
      searchWord: "",
      displayItems: "",
      rangeBar: 1000,
    }
  },
  methods: {
    searchButton: function () {
      let searchedList = []
      this.items.forEach((item) => {
        if (Object.values(item).indexOf(this.searchWord) != -1) {
          searchedList.push(item)
        }
      })
      if (this.searchWord == "") {
        searchedList = this.items
      }

      searchedList = searchedList.filter(
        (element) => element.fee <= this.rangeBar
      )
      this.displayItems = searchedList
    },
  },
  mounted: function () {
    this.displayItems = this.items
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
