import Vue from "vue"
import App from "./App.vue"

Vue.prototype.$gm = window.google.maps

Vue.config.productionTip = false
new Vue({
  render: (h) => h(App),
}).$mount("#app")
