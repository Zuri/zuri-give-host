// Note: Using an Alias in Webpack
import "./assets/styles/index.scss"
import Vue from "vue"
import ZuriGive from "./App.vue"

new Vue({
  el: "#zuriGive",
  render: (h) => h(ZuriGive),
})
