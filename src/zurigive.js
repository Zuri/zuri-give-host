// Note: Using an Alias in Webpack
import "./assets/styles/index.scss";
import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
});
