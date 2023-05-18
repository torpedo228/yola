import { createRouter, createWebHistory } from "vue-router";
// import { publicPath } from "../../vue.config";
import HomeView from "@/views/Home.vue";
import TestView from "@/views/TestView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    components: {
      default: HomeView,
    },
    meta: {
      transition: "slide-right",
      title: "首頁",
    },
  },
  {
    path: "/learning-corner",
    component: () => import("@/views/sections/LearningCorner.vue"),
    name: "learning-corner",
    meta: {
      transition: "slide-right",
      title: "學習區",
    },
    children: [
      {
        path: "",
        component: () => import("@/views/sections/learning-corner/Portal.vue"),
        name: "learning-corner-portal",
        meta: {
          transition: "slide-right",
        },
      },
      {
        path: "art",
        name: "art",
        component: () => import("@/views/sections/learning-corner/Art.vue"),
        meta: {
          title: "美勞區",
        },
      },
      {
        path: "construction",
        name: "construction",
        component: () => import("@/views/sections/learning-corner/Construction.vue"),
        meta: {
          title: "組合建構區",
        },
      },
    ],
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
