<template>
  <div id="search">
    <input
      type="text"
      v-model="searchWord"
      @input="searching"
      v-on:keydown.enter="searchButton"
    />
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
    <div
      id="check-container"
      v-for="(taste, index) in tastes"
      v-bind:key="index"
    >
      <input
        id="checkbox"
        type="checkbox"
        v-model="checkList"
        v-bind:value="taste"
      />
      <label for="checkbox">{{ taste }}</label>
    </div>
    <button id="search-button" v-on:click="searchButton">検索</button>
  </div>
  <div id="item-container">
    <div class="ice" v-for="(item, index) in displayItems" v-bind:key="index">
      <img v-bind:src="item.imgUrl" />
      <ul id="tag">
        <li>名称：{{ item.name }}</li>
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
          name: "金太郎ソフト",
          place: "神奈川",
          taste: "ミルク",
          fee: 390,
          imgUrl:
            "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG-8VOhlzbahf5Xy3y9OeNNbjdk8BIPbedEKjZst8QucAjryTedk9l9FZS7Oa3d35-z9_ibyzwj_qyM-yBAdIKBPAd5T9RokSYv5ZZ_mkxt61f_cEq9tEglz9ZRUKQrCS1PwSODmBi4vgdyJO81676WiCiLg4q6lcq-ryAZ5QF6Fk8yZ_RByd876E0CgTfbH7lCWEXGov2tueIn5PyUQhczA=/sweets06.jpg?errorImage=false",
        },
        {
          name: "アイスコルネット",
          place: "北海道",
          taste: "色々",
          fee: 450,
          imgUrl:
            "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG2ZbYGCyLpR5USnqNmgnrubG2eS9ra12f_cClqxFaU7s0YpLllGAFSC5Tar-YRXTakOkpVqH7Tbh03tHmdQUhODS649_HeUnFW4QrVB7dAxo09XdCAzRB4g1dlWeKmsM_iVMNSL8zhbeiMu3ss173ib8668a00Xma_Sea4JcVNoCO36uwOB9yUqd1JQrwQ-6WVbhp9CX0XeKBMNKc2-ISbM95ycc4ide7JRaRx1e3EnnWtuD6pgYCQ4X0UI7q88nS73MtYp6nOvpxBr4zipLaMrWs6MTQBXVqEK-ddpaa858GVAVuUeHJOIOHEAe7sw6mOjWaBe0whOsFgXSvD1i-V20yUcxQYA1at8goeuOLshyLA-hM4miunjYzddAQkaIvIzoTqhopsqv4IVURj06tnBOjqSbMYAV_BjtnTrSFAZu9KaZUG8v3_Vd5vDUuI32wtbhL-0Ez-nbAwLOYnpymCeb9dq0EgNRbrlfo12Bun9gRK6NLRtKo_zpNiVy2NiIh-qJEeqlR-uDpU8KWnNCa2PheHpE8Qr3vGeUpur_nutveshrBANwW9qjeSn7gD-lqTIA3cIqqsIpqSgaaPFQTZys1lCt-gM44FD_qlnbeDYciBqSRV0cqb9meaeqGYfSNVmbYmLXmClT52jeROrjNx93tVjgG8PJRlAsi47mX3uH/E382A2E382A4E382B9E382B3E383ABE3838DE38383E38388.jpg?errorImage=false",
        },
        {
          name: "安曇野りんごソフトクリーム",
          place: "長野",
          taste: "りんご",
          fee: 330,
          imgUrl:
            "https://static.retrip.jp/spot/0a91c428-182c-42a6-845e-c9fce5088d94/images/7f2c2895-f982-40aa-8b56-df546e53820d_l.jpg",
        },
        {
          name: "本わさびソフト",
          place: "山梨",
          taste: "わさび",
          fee: 350,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          name: "ブルーシールアイス",
          place: "沖縄",
          taste: "色々",
          fee: 350,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          name: "山江村産　栗ジャムソフト",
          place: "熊本",
          taste: "栗",
          fee: 410,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          name: "金箔ソフト",
          place: "石川",
          taste: "色々",
          fee: 891,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          name: "ラベンダーソフト",
          place: "北海道",
          taste: "ラベンダー",
          fee: 300,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
        {
          name: "味道楽ソフトクリーム",
          place: "秋田",
          taste: "色々",
          fee: 330,
          imgUrl:
            "https://th.bing.com/th/id/OIP.RsJMVqXOMupjlY0VE7nJvwHaFj?w=220&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        },
      ],
      searchWord: "",
      displayItems: "",
      rangeBar: 1000,
      tastes: [],
      checkList: [],
    }
  },
  methods: {
    searchButton: function () {
      let searchedList = []
      //入力したワードから検索
      this.items.forEach((item) => {
        if (Object.values(item).indexOf(this.searchWord) != -1) {
          searchedList.push(item)
        }
      })
      //検索ボックスの入力がない場合
      if (this.searchWord == "") {
        searchedList = this.items
      }
      //料金のバーから絞る
      searchedList = searchedList.filter(
        (element) => element.fee <= this.rangeBar
      )
      //チェックボックスから味を絞る
      let llist = []
      console.log(this.checkList)
      this.searchedList.forEach((item) => {
        this.checkList.forEach((check) => {
          console.log(item)
          console.log(check)
        })
      })
      console.log(llist)

      //表示
      this.displayItems = llist
    },
  },
  mounted: function () {
    this.displayItems = this.items
    //itemsオブジェクトのtasteをthis.tastesに代入
    this.items.forEach((item) => {
      this.tastes.push(item.taste)
    })
    this.tastes = new Set(this.tastes) //重複を消去
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
  flex-wrap: wrap;
}
.ice {
  display: flex;
  flex-direction: column;
}
#search-button {
  width: 100px;
  height: 50px;
  margin: 30px;
}
</style>
