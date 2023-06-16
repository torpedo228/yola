import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import VueScrollTo from "vue-scrollto";
import { addGlobalDateFunc } from "@/utils/custom-date";
import "animate.css";

// firebase
import firebaseInitial from "./plugins/firebase-initial";

// Some initializaion
addGlobalDateFunc();

let app = createApp(App);
app.use(store);
app.use(router);
app.use(VueScrollTo);
app.use(firebaseInitial, {
  // imported above but could also just be created here
  config: {
    apiKey: "AIzaSyAu0n5jfZkiBXWw22GpWMadl6nbevyN6dQ",
    authDomain: "yola-a087c.firebaseapp.com",
    projectId: "yola-a087c",
    storageBucket: "yola-a087c.appspot.com",
    messagingSenderId: "851329109831",
    appId: "1:851329109831:web:ff1f40d99e2cced6700662",
  },
  appcheckV3: {
    key: "6LcXqKEmAAAAAOdZp_gukhnzIKumRCn5l96BsZCT",
  },
});
app.mount("#app");
