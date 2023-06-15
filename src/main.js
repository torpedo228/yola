import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import { addGlobalDateFunc } from "./utils/custom-date";
import "animate.css";

// firebase
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./utils/firebase-initial";

// Some initializaion
addGlobalDateFunc();

let app = createApp(App);
app.use(store);
app.use(router);
app.use(VueScrollTo);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});
app.mount("#app");
