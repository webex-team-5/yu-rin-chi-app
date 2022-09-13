import { createApp } from "vue"
import App from "./App.vue"
import "./firebase.js"
import router from "./router"

const app = createApp(App)
app.config.globalProperties.$gm = window.google.maps
app.use(router).mount("#app")
