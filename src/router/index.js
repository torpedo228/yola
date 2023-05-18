import {
  createRouter,
  createWebHistory
} from "vue-router";
// import { publicPath } from "../../vue.config";
import HomeView from "@/views/Home.vue";
import TestView from "@/views/TestView.vue";

const routes = [{
    path: "/",
    name: "home",
    components: {
      default: HomeView,
    },
    meta: {
      transition: "slide-right",
      title: '首頁'
    },
  },
  {
    path: "/learning-corner",
    name: "learning-corner",
    components: {
      default: () => import("@/views/learning-corner/LearningCorner.vue"),
    },
    meta: {
      transition: "slide-right",
      title: '學習區'
    },
  },
  {
    path: "/learning-corner/art",
    name: "art",
    component: () => import("@/views/learning-corner/class/Art.vue"),
    meta: {
      title: '美勞區'
    },
  },
  {
    path: "/learning-corner/contruction",
    name: "contruction",
    component: () => import("@/views/learning-corner/class/Construction.vue"),
    meta: {
      title: '組合建構區'
    },
  },
  {
    path: "/test",
    name: "test",
    // this.$router.push({ name: "test" });
    // or <a href="#" @click="$router.push({ name: 'test' })">
    // or <a href="/test">
    component: TestView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // base: publicPath === "/yola/" ? "/yola" : "",
  routes,
});

export default router;