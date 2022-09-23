<template>
  <div id="search">
    <input
      id="search-box"
      type="text"
      v-model="searchWord"
      @input="searching"
      v-on:keydown.enter="searchButton"
      placeholder="キーワード検索"
      class="search-box"
    />
    <form>
      <input
        type="range"
        v-model="rangeBar"
        v-on:keydown.enter="searchButton"
        min="0"
        max="1000"
        style="accent-color: #337bae"
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
    <button id="search-button" v-on:click="searchButton" class="resultButton">
      <a>Search!</a>
    </button>
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
          imgUrl: require("@/assets/image/kintarouu.jpg"),
        },
        {
          name: "アイスコルネット",
          urlName: "ice_cornet",
          place: ["北海道"],
          taste: "色々",
          fee: 450,
          forsearch: "パン",
          category: "その他",
          imgUrl: require("@/assets/image/ice-cornet.png"),
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
          imgUrl: require("@/assets/image/wasabii.png"),
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
          imgUrl: require("@/assets/image/azi-douraku.png"),
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
          category: "その他",
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
        {
          name: "ブルーシールアイス",
          urlname: "blue",
          place: ["沖縄"],
          taste: ["紅イモ"],
          fee: 330,
          category: "その他",
          forsearch: ["ブルーシール"],
          imgUrl: require("@/assets/image/blue.png"),
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
  background-color: #fcefef;
}

#checkbox-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 13px;
}
.check {
  margin: 10px;
  font-size: 15px;
}
/*検索結果表示ボタンのデザイン*/
.resultButton {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  max-width: 240px;
  padding: 10px 25px;
  color: #337bae;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  background-color: white;
  border-radius: 50px;
  border: 0.2rem solid #337bae;
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
  border-top: 3px solid #337bae;
  border-right: 3px solid #337bae;
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

img {
  width: 250px;
  height: 250px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: white;
  border: 3px solid #ffbebd;
  margin: 20px auto;
}
#search-box {
  height: 25px;
  border-color: #337bae;
  padding: 5px 10px;
  margin-top: 20px;
  margin-bottom: 10px;
}

#item-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 20px;
}
#item-container span {
  padding-top: 12px;
}
.ice {
  width: 33%;
  height: auto;
}
.ice a {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 30%;
  text-decoration: none;
}
.ice span {
  color: #1a405f;
  font-size: 20px;
}
</style>
