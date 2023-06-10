import {
  createApp
} from "vue";
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

(function () {
  var weekDays = ["日", "一", "二", "三", "四", "五", "六"];
  Date.prototype.getMonthDisplay = function () {
    var month = this.getMonth() + 1;
    return (month < 10) ? "0" + month : month;
  };

  Date.prototype.getDayDisplay = function () {
    var day = this.getDate();
    return (day < 10) ? "0" + day : day;
  };

  Date.prototype.getWeekDayDisplay = function () {
    return weekDays[this.getDay()];
  };


  Date.prototype.getFullDate = function () {
    var year = this.getFullYear();
    var month = this.getMonthDisplay();
    var day = this.getDayDisplay();
    var weekDay = this.getWeekDayDisplay();

    return year + "." + month + "." + day + "(" + weekDay + ")";
  };
})();