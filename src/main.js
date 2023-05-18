import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import "animate.css";

let app = createApp(App);
app.use(store);
app.use(router);
app.use(VueScrollTo);
app.mount("#app");
