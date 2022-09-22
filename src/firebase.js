// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCKEzl42RdADBtcBCVXWnZ5SuSByb6XVt4",
  authDomain: "yu-rin-chi-app.firebaseapp.com",
  projectId: "yu-rin-chi-app",
  storageBucket: "yu-rin-chi-app.appspot.com",
  messagingSenderId: "568493654147",
  appId: "1:568493654147:web:0bd57401262c94bb151bb6",
  measurementId: "G-X730LG8010",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
