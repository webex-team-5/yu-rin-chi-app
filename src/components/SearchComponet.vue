<template>
  <div id="search">
    <input
      id="search-box"
      type="text"
      v-model="searchWord"
      @input="searching"
      v-on:keydown.enter="searchButton"
      placeholder="Search Icecream!!"
    />
    <form>
      <input
        type="range"
        v-model="rangeBar"
        v-on:keydown.enter="searchButton"
        min="0"
        max="1000"
      /><label><br />¥{{ rangeBar }}以内</label>
    </form>
    <div id="checkbox-container">
      <div
        class="check"
        v-for="(category, index) in categories"
        v-bind:key="index"
      >
        <input
          v-bind:id="'checkbox' + index"
          type="checkbox"
          v-model="checkList"
          v-bind:value="category"
          v-on:keydown.enter="searchButton"
        />
        <label v-bind:for="'checkbox' + index">{{ category }}</label>
      </div>
    </div>
    <button id="search-button" v-on:click="searchButton">Click or Enter</button>
  </div>

  <div id="item-container">
    <div class="ice" v-for="(item, index) in displayItems" v-bind:key="index">
      <router-link v-bind:to="{ name: 'map', params: { ice: index } }"
        ><img v-bind:src="item.imgUrl" />
        <span>{{ item.name }}</span></router-link
      >
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
          urlName: "kintarou",
          place: ["神奈川"],
          taste: "牛乳",
          fee: 390,
          category: "ミルク",
          forsearch: "金太郎",
          imgUrl: require("@/assets/image/kintarou.jpg"),
        },
        {
          name: "アイスコルネット",
          urlName: "ice_cornet",
          place: ["北海道"],
          taste: "色々",
          fee: 450,
          forsearch: "パン",
          category: "その他",
          imgUrl: require("@/assets/image/ice_cornet.png"),
        },
        {
          name: "安曇野りんごソフトクリーム",
          urlName: "azumino",
          place: ["長野", "expasa足柄", "足柄"],
          taste: "りんご",
          fee: 330,
          category: "フルーツ",
          forsearch: ["安曇野", "りんごソフト"],
          imgUrl: require("@/assets/image/azumino.png"),
        },
        {
          name: "本わさびソフト",
          urlName: "wasabi",
          place: ["山梨", "谷村", "谷村PA"],
          taste: "わさび",
          fee: 350,
          category: "和風",
          forsearch: "",
          imgUrl: require("@/assets/image/wasabi.png"),
        },
        {
          name: "山江村産　栗ジャムソフト",
          urlName: "kuri",
          place: ["熊本"],
          taste: "栗",
          fee: 410,
          category: "その他",
          forsearch: ["山江村", "栗ジャム", "山江村産"],
          imgUrl: require("@/assets/image/kuri.jpg"),
        },
        {
          name: "金箔ソフト",
          urlName: "kinpaku",
          place: ["石川"],
          taste: "色々",
          fee: 891,
          category: "和風",
          forsearch: "金箔",
          imgUrl: require("@/assets/image/kinpaku.jpg"),
        },
        {
          name: "ラベンダーソフト",
          urlName: "rabenda",
          place: ["北海道"],
          taste: "ラベンダー",
          fee: 300,
          category: "フルーツ",
          imgUrl: require("@/assets/image/rabenda.png"),
        },
        {
          name: "味道楽ソフトクリーム",
          urlName: "ajidouraku",
          place: ["秋田"],
          taste: "色々",
          fee: 330,
          category: "和風",
          forsearch: "味道楽",
          imgUrl: require("@/assets/image/ajidouraku.png"),
        },
        {
          name: "白い恋人ソフトクリーム",
          urlName: "siroikoibito",
          place: ["北海道", "白い恋人パーク"],
          taste: ["ホワイトチョコ", "ブラックチョコ", "ミックス"],
          fee: 400,
          category: "ミルク",
          forsearch: "白い恋人",
          imgUrl: require("@/assets/image/siroikoibito.jpg"),
        },
        {
          name: "チョコ南部アイス",
          urlName: "nanbutyoko",
          place: ["岩手"],
          taste: ["チョコ"],
          fee: 410,
          category: "ミルク",
          forsearch: "南部せんべい",
          imgUrl: require("@/assets/image/nanbutyoko.png"),
        },
        {
          name: "ババヘラアイス",
          urlName: "babahera",
          place: ["秋田"],
          taste: ["ブルーアイス", "メロン", "ソーダ", "レモン"],
          fee: 300,
          category: "フルーツ",
          forsearch: "ババヘラ",
          imgUrl: require("@/assets/image/babahera.png"),
        },
        {
          name: "殿様のだだちゃ豆アイスクリーム",
          urlName: "tadatyamame",
          place: ["山形", "JA鶴岡", "鶴岡"],
          taste: ["ただちゃ豆"],
          fee: 270,
          category: "ミルク",
          forsearch: ["ただちゃ豆", "殿様", "殿様アイス"],
          imgUrl: require("@/assets/image/tadatyamame.png"),
        },
        {
          name: "酪王カフェオレソフトクリーム",
          urlName: "cafe",
          place: ["福島"],
          taste: ["カフェオレ"],
          fee: 400,
          category: "ミルク",
          forsearch: ["酪王"],
          imgUrl: require("@/assets/image/cafe.png"),
        },
        {
          name: "元祖信玄ソフト",
          urlName: "singen",
          place: ["山梨"],
          taste: ["きなこ", "黒蜜", "信玄餅"],
          fee: 390,
          category: "ミルク",
          forsearch: ["信玄餅", "元祖"],
          imgUrl: require("@/assets/image/singen.png"),
        },
        {
          name: "仁王門屋の元祖そばソフトクリーム",
          urlName: "soba",
          place: ["長野", "仁王門屋"],
          taste: ["そば"],
          fee: 350,
          category: "和風",
          forsearch: ["信玄餅", "元祖"],
          imgUrl: require("@/assets/image/soba.png"),
        },
        {
          name: "セイヒョーもも太郎",
          urlName: "momotaro",
          place: ["新潟"],
          taste: ["いちご", "りんご"],
          fee: 400,
          category: "フルーツ",
          forsearch: ["セイヒョー", "もも太郎", "金太郎"],
          imgUrl: require("@/assets/image/momotaro.png"),
        },
        {
          name: "ちゅーりっぷソフト",
          urlName: "tyu-rip",
          place: ["富山"],
          taste: ["チューリップ"],
          fee: 380,
          category: "色々",
          forsearch: ["ちゅーりっぷ"],
          imgUrl: require("@/assets/image/tyu-rip.png"),
        },
        {
          name: "越前塩あずきソフト",
          urlName: "azuki",
          place: ["福井", "越前"],
          taste: ["あずき", "塩あずき"],
          fee: 300,
          category: "和風",
          forsearch: "",
          imgUrl: require("@/assets/image/azuki.png"),
        },
        {
          name: "いかすみソフト",
          urlName: "ikasumi",
          place: ["静岡"],
          taste: ["いかすみ"],
          fee: 350,
          category: "和風",
          forsearch: ["イカ墨", "イカスミ"],
          imgUrl: require("@/assets/image/ikasumi.png"),
        },
        {
          name: "レンコンソフトクリーム",
          urlname: "renkon",
          place: ["愛知"],
          taste: ["れんこん"],
          fee: 350,
          category: "ミルク",
          forsearch: ["レンコンソフト", "れんこん"],
          imgUrl: require("@/assets/image/renkon.png"),
        },
      ],
      searchWord: "",
      displayItems: "",
      rangeBar: 1000,
      categories: [],
      checkList: [],
      data: "hello",
    }
  },
  methods: {
    searchButton: function () {
      let searchedList = []
      //入力したワードから検索
      this.items.forEach((item) => {
        if (Object.values(item).flat().indexOf(this.searchWord) != -1) {
          //Object.values(item).flat()は二重を一重のリストにしました
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
      //チェックボックスからカテゴリーを絞る
      let newSearchedList = []
      searchedList.forEach((item) => {
        this.checkList.forEach((check) => {
          if (item.category === check) {
            newSearchedList.push(item)
          }
        })
      })
      //newsearchedListに何もない場合の表示(checkboxが0)
      if (newSearchedList.length == 0) {
        this.displayItems = searchedList
      } else {
        //☑されている場合
        this.displayItems = newSearchedList
      }
    },
  },
  mounted: function () {
    this.displayItems = this.items
    //itemsオブジェクトのcategoryをthis.categoriesに代入
    this.items.forEach((item) => {
      this.categories.push(item.category)
    })
    this.categories = new Set(this.categories) //重複を消去
    /* this.items.forEach((item) => {
      console.log(Object.values(item))
    }) */
  },
}
</script>
<style scoped>
* {
  background-color: white;
}
img {
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
}
#search-box {
  height: 25px;
  color: black;
}
#item-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.ice a {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 30%;
}
.ice span {
  background-color: white;
  border-radius: 50%;
}
#search-button {
  color: #000;
  background-color: paleturquoise;
  border-bottom: 5px solid rgb(146, 200, 200);
  border-radius: 50%;
  height: 70px;
  width: 95px;
}

#search-button:active {
  color: #000;
  background: rgb(146, 200, 200);
}

#checkbox-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.check {
  margin: 10px;
}
</style>
